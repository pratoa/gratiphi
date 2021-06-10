import React, { useState, useEffect } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import { StyleSheet, Alert, FlatList, Text, View } from "react-native";
import Screen from "../../components/common/Screen";
import Moment from "moment";

export default function HistoryDonations() {
  const [previousDonations, setPreviousDonations] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function getPreviousDonations() {
      //TO-DO: better handling of error when api fails
      const currentUserId = await getCurrentUser();
      console.log("THIS IS IT", currentUserId);
      if (await currentUserId) {
        const response = await API.graphql(
          graphqlOperation(queries.listDonationss, {
            filter: { userId: { eq: currentUserId } },
          })
        );

        if (!response.data) {
          console.log("this is the error", response);
          Alert.alert(
            "There was an error fetching data! We apologize, please re-try later"
          );
        }

        setPreviousDonations(await response.data.listDonationss.items);
        console.log(
          "This is the response: ",
          response.data.listDonationss.items
        );
      }
    }
    getPreviousDonations();
  }, []);

  async function getCurrentUser() {
    let userInfo = await Auth.currentUserInfo();
    return await userInfo.username;
  }

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.donee.firstName}</Text>
      <Text style={styles.title}>${item.amount / 100}</Text>
      <Text style={styles.title}>
        {Moment(item.createdAt).format("MM/DD/YYYY")}
      </Text>
    </View>
  );

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View>
      <FlatList
        data={previousDonations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});
