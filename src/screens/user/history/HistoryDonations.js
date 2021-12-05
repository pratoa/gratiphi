import React, { useState, useEffect } from "react";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import SegmentedControl from "../../../components/common/SegmentControl";
import * as queries from "../../../graphql/queries";
import {
  StyleSheet,
  Alert,
  FlatList,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import AppButton from "../../../components/common/AppButton";
import { default as defaultStyle } from "../../../config/styles";
import colors from "../../../config/colors";
import InProgressItem from "./InProgressItem";
import CompletedItem from "./CompletedItem";
import moment from "moment";

export default function HistoryDonations({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFirstTime, setIsLoadingFirstTime] = useState(false);
  const [completedDonations, setCompletedDonations] = useState([]);
  const [inProgressDonations, setInProgressDonations] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function getPreviousDonations() {
      const currentUserId = await getCurrentUser();
      if (await currentUserId) {
        const response = await getDonations(currentUserId);
        setCompletedDonations(await response.completed);
        setInProgressDonations(await response.inProgress);
        setUserId(currentUserId);
        if ((await response.completed.length) < 1) {
          setTabIndex(1);
        }
        setIsLoading(false);
        setIsLoadingFirstTime(false);
      }
    }
    setIsLoading(true);
    setIsLoadingFirstTime(true);
    getPreviousDonations();
  }, []);

  async function getCurrentUser() {
    let userInfo = await Auth.currentUserInfo();
    return await userInfo.username;
  }

  async function getDonations(currentUserId) {
    try {
      const response = await API.graphql(
        graphqlOperation(queries.listDonations, {
          filter: {
            userId: { eq: currentUserId },
          },
        })
      );

      var donations = {};
      donations.inProgress = [];
      donations.completed = [];
      for (const donation of response.data.listDonations.items) {
        donation.donee.profilePhotoUrl = await Storage.get(
          donation.donee.profilePhoto
        );
        donation.donee.age = moment
          .duration(
            moment().diff(moment(donation.donee.birthDate, "YYYY-MM-DD"))
          )
          .years();
        if (donation.gratificationId != "NONE") {
          donation.gratificationUrl = await Storage.get(
            donation.gratification.gratificationUrl
          );
          donations.completed.push(donation);
        } else {
          donations.inProgress.push(donation);
        }
      }
      return donations;
    } catch (error) {
      console.log("ERROR: ", error);
      Alert.alert(
        "There was an error fetching data! We apologize, please re-try later"
      );
      return;
    }
  }

  async function onRefresh() {
    setIsLoading(true);
    var donations = await getDonations(userId);
    setCompletedDonations(await donations.completed);
    setInProgressDonations(await donations.inProgress);
    setIsLoading(false);
  }

  const renderInProgressItem = ({ item }) => {
    if (isLoading) {
      return <View></View>;
    }
    return <InProgressItem item={item} />;
  };

  const renderCompletedItem = ({ item }) => {
    if (isLoading) {
      return <View></View>;
    }
    return (
      <CompletedItem navigation={navigation} donation={item} userId={userId} />
    );
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  function goToDonation() {
    navigation.navigate("Donate");
  }

  return (
    <View style={styles.container}>
      <SegmentedControl
        tabs={["Completed", "In Progress"]}
        currentIndex={tabIndex}
        onChange={handleTabsChange}
        // segmentedControlBackgroundColor="#86c4fd"
        // activeSegmentBackgroundColor="#0482f7"
        // activeTextColor="white"
        textColor="black"
        paddingVertical={5}
        marginTop={0}
      />
      {isLoadingFirstTime && <ActivityIndicator size="large" />}
      {tabIndex == 0 && completedDonations.length == 0 && (
        <View>
          <Text>
            You have no completed donations yet! If you haven't made one, please
            do so!
          </Text>
          <AppButton title="Donate" onPress={goToDonation} />
        </View>
      )}
      {tabIndex == 0 && completedDonations.length > 0 && (
        <View style={styles.flatListContainer}>
          <FlatList
            data={completedDonations}
            renderItem={renderCompletedItem}
            keyExtractor={(item) => item.id}
            onRefresh={() => onRefresh()}
            refreshing={isLoading}
          />
        </View>
      )}
      {tabIndex == 1 && inProgressDonations.length == 0 && (
        <View>
          <Text>
            You don't have any donations in progress! Please go ahead and
            donate!
          </Text>
          <AppButton title="Donate" onPress={goToDonation} />
        </View>
      )}
      {tabIndex == 1 && inProgressDonations.length > 0 && (
        <View style={styles.flatListContainer}>
          <FlatList
            data={inProgressDonations}
            renderItem={renderInProgressItem}
            keyExtractor={(item) => item.id}
            onRefresh={() => onRefresh()}
            refreshing={isLoading}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
    width: "100%",
  },
  flatListContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
  },
  mainCardView: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 15,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 2,
    backgroundColor: "red",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginLeft: 10,
    ...defaultStyle.largeText,
  },
  picture: {
    flex: 1,
  },
  itemText: {
    flex: 3,
    marginLeft: 5,
  },
  itemButton: {
    alignSelf: "center",
    backgroundColor: "yellow",
  },
  button: {
    fontSize: 5,
  },
});
