import React, { useState, useEffect } from "react";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { withAuthenticator, S3Image } from "aws-amplify-react-native";
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

export default function HistoryDonations() {
  const [completedDonations, setCompletedDonations] = useState([]);
  const [inProgressDonations, setInProgressDonations] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function getPreviousDonations() {
      //TO-DO: better handling of error when api fails
      const currentUserId = await getCurrentUser();
      if (await currentUserId) {
        const completedResponse = await getDonations(currentUserId, true);
        setCompletedDonations(
          await completedResponse.data.listDonationss.items
        );

        const inProgressResponse = await getDonations(currentUserId, false);
        setInProgressDonations(
          await inProgressResponse.data.listDonationss.items
        );

        console.log(completedDonations);
      }
    }
    getPreviousDonations();
  }, []);

  async function getCurrentUser() {
    let userInfo = await Auth.currentUserInfo();
    return await userInfo.username;
  }

  async function getDonations(currentUserId, gratificationSent) {
    const response = await API.graphql(
      graphqlOperation(queries.listDonationss, {
        filter: {
          doneeId: { eq: currentUserId },
          isGratificationSent: { eq: false },
        },
      })
    );
    if (!response.data) {
      console.log("ERROR: ", response);
      Alert.alert(
        "There was an error fetching data! We apologize, please re-try later"
      );
      return;
    }

    for (const donation of response.data.listDonationss.items) {
      if (donation.gratificationPhoto) {
        donation.imageUrl = await Storage.get(
          donation.gratificationPhoto.split("public/")[1]
        );
      }
    }

    return response;
  }

  const Item = ({ item }) => (
    <TouchableWithoutFeedback
    // underlayColor={colors.primary}
    // onPress={alert("clicked!")}
    >
      <View style={styles.item}>
        {item.gratificationPhoto && (
          <Image
            style={styles.picture}
            source={{ uri: item.imageUrl }}
            onError={({ nativeEvent: { error } }) => console.log(error)}
          ></Image>
        )}
        <View style={styles.itemText}>
          <Text style={styles.title}>{item.donee.firstName}</Text>
          <Text style={styles.title}>${item.amount / 100}</Text>
          <Text style={styles.title}>
            {Moment(item.createdAt).format("MM/DD/YYYY")}
          </Text>
          <Text style={styles.title}>{item.isGratificationSent}</Text>
        </View>
        <View style={styles.itemButton}>
          <AppButton
            title="View Donation"
            onPress={() => setModalVisible(false)}
            style={styles.button}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  const renderCompletedItem = ({ item }) => {
    if (item.isGratificationSent) {
      return <Item item={item} />;
    }
  };

  const renderInProgressItem = ({ item }) => {
    if (!item.isGratificationSent) {
      return <Item item={item} />;
    }
  };

  return (
    <View>
      <Text style={styles.sectionTitle}>Completed</Text>
      <FlatList
        data={completedDonations}
        renderItem={renderCompletedItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.sectionTitle}>In Progress</Text>
      <FlatList
        data={inProgressDonations}
        renderItem={renderInProgressItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
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
