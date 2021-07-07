import React, { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, Image } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import Screen from "../../components/common/Screen";
import SignOutButton from "../../components/common/SignOutButton";
import ListItemSeparator from "../../components/common/ListItemSeparator";
import ListItemComponent from "../../components/common/ListItemComponent";
import * as customQueries from "../../../graphql/customQueries";
import { default as defaultStyle } from "../../config/styles";
import AppButton from "../../components/common/AppButton";

export default function DoneeAdmin({ route, navigation, updateAuthState }) {
  const [donationHistory, setDonationHistory] = useState([]);
  const { donee, path } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SignOutButton
          updateAuthState={updateAuthState}
          navigation={navigation}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    async function getDoneeHistory() {
      const response = await API.graphql(
        graphqlOperation(customQueries.getDonationHistoryByDoneeId, {
          filter: { doneeId: { eq: donee.id } },
        })
      );
      var donationHistory = await response.data.listDonationss.items;
      setDonationHistory(donationHistory);
    }
    getDoneeHistory();
  }, []);

  return (
    <Screen>
      <Text style={styles.title}>{donee.name}</Text>
      <Image source={{ uri: donee.profilePhoto }} style={styles.doneeImage} />
      <FlatList
        data={donationHistory}
        keyExtractor={(history) => history.id}
        renderItem={({ item }) => (
          <ListItemComponent
            title={item.user.email + " -  " + item.createdAt.split("T")[0]}
            showChevrons={!item.isGratificationSent}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <AppButton
        title="Upload Photo"
        onPress={() => navigation.navigate("PhotoUpload", { path: path })}
      ></AppButton>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    ...defaultStyle.largeText,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  doneeImage: {
    margin: 20,
    width: defaultStyle.SCREEN_HEIGHT * 0.3,
    height: defaultStyle.SCREEN_HEIGHT * 0.3,
    borderRadius: (defaultStyle.SCREEN_HEIGHT * 0.3) / 2,
    alignSelf: "center",
  },
});
