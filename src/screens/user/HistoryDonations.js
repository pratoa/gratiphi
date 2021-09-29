import React, { useState, useEffect } from "react";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { withAuthenticator, S3Image } from "aws-amplify-react-native";
import SegmentedControl from "../../components/common/SegmentControl";
import * as queries from "../../graphql/queries";
import {
  StyleSheet,
  Alert,
  FlatList,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Screen from "../../components/common/Screen";
import AppButton from "../../components/common/AppButton";
import Moment from "moment";
import { default as defaultStyle } from "../../config/styles";
import colors from "../../config/colors";

export default function HistoryDonations({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [completedDonations, setCompletedDonations] = useState([]);
  const [inProgressDonations, setInProgressDonations] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    async function getPreviousDonations() {
      const currentUserId = await getCurrentUser();
      if (await currentUserId) {
        const response = await getDonations(currentUserId);
        setCompletedDonations(await response.completed);
        setInProgressDonations(await response.inProgress);

        if (completedDonations.length == 0) {
          setTabIndex(1);
        }

        // console.log("This is compeleted donations: ", completedDonations);
        // console.log("This is inprogress donations: ", inProgressDonations);
      }
    }
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

        if (donation.gratificationId != "NONE") {
          donation.gratificationUrl = await Storage.get(
            donation.gratification.gratificationUrl
          );
          donations.completed.push(donation);
        } else {
          donations.inProgress.push(donation);
        }
      }
      console.log(donations);
      setIsLoading(false);
      return donations;
    } catch (error) {
      console.log("ERROR: ", error);
      Alert.alert(
        "There was an error fetching data! We apologize, please re-try later"
      );
      return;
    }
  }

  const Item = ({ item }) => {
    if (isLoading) {
      return <View></View>;
    } else {
      return (
        <TouchableWithoutFeedback
          // underlayColor={colors.primary}
          onPress={() => {
            alert("clicked!");
          }}
        >
          <View style={styles.mainCardView}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.subCardView}>
                {item.gratificationUrl && (
                  <Image
                    source={{ uri: item.gratificationUrl }}
                    // resizeMode="contain"
                    style={{
                      borderRadius: 25,
                      height: 65,
                      width: 65,
                    }}
                  />
                )}
                {!item.gratificationUrl && (
                  <Image
                    source={{ uri: item.donee.profilePhotoUrl }}
                    // resizeMode="contain"
                    style={{
                      borderRadius: 25,
                      height: 65,
                      width: 65,
                    }}
                  />
                )}
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.black,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {item.donee.firstName} {item.donee.lastName}
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    borderWidth: 0,
                    width: "85%",
                  }}
                >
                  <Text
                    style={{
                      color: colors.gray,
                      fontSize: 12,
                    }}
                  >
                    Donation: ${Math.round(item.amount / 100).toFixed(2)}
                  </Text>
                  <Text
                    style={{
                      color: colors.gray,
                      fontSize: 12,
                    }}
                  >
                    Date: {Moment(item.createdAt).format("MM/DD/YYYY")}
                  </Text>
                </View>
              </View>
            </View>
            {/* <View
            style={{
              height: 25,
              backgroundColor: colors.pink,
              borderWidth: 0,
              width: 25,
              marginLeft: -26,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <Text style={{ color: colors.white }}>
              {item.unread_messages_count}
            </Text>
          </View> */}
          </View>
        </TouchableWithoutFeedback>
      );
    }
  };

  const renderItem = ({ item }) => {
    return <Item item={item} />;
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
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
      {tabIndex == 1 && inProgressDonations.length == 0 && (
        <View>
          <Text>
            You haven't made any donations yet! Please go ahead and help a kid
            get a meal!
          </Text>
          <AppButton title="Donate" onPress={goToDonation} />
        </View>
      )}
      {tabIndex == 1 && inProgressDonations.length > 0 && (
        <View style={styles.flatListContainer}>
          <FlatList
            data={inProgressDonations}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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
    // height: 50,
    // width: 50,
    // borderRadius: 25,
    // backgroundColor: colors.red,
    // borderColor: colors.yellow,
    // borderWidth: 1,
    // borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 2,
    // flex: 1,
    // flexDirection: "row",
    // marginTop: 5,
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
    // backgroundColor: "pink",
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
