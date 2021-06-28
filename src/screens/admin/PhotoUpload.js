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
import { AppImagePicker } from "../../components/common/AppImagePicker";

export default function PhotoUpload({ route, navigation, updateAuthState }) {
  //   const { donee } = route.params;
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

  //   useEffect(() => {
  //     async function getDoneeHistory() {
  //       const response = await API.graphql(
  //         graphqlOperation(customQueries.getDonationHistoryByDoneeId, {
  //           filter: { doneeId: { eq: donee.id } },
  //         })
  //       );
  //       var donationHistory = await response.data.listDonationss.items;
  //       console.log(donationHistory);
  //       setDonationHistory(donationHistory);
  //     }
  //     getDoneeHistory();
  //   }, []);

  return (
    <Screen>
      <AppImagePicker />
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