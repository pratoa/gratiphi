import React, { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { API } from "aws-amplify";
import Screen from "../../components/common/Screen";
import SignOutButton from "../../components/common/SignOutButton";
import ListItemSeparator from "../../components/common/ListItemSeparator";
import ListItemComponent from "../../components/common/ListItemComponent";
import * as customQueries from "../../../graphql/customQueries";

function setGratiphicationValue(listOfLocations) {
  var newListOfLocations = [];
  for (
    let locationIndex = 0;
    locationIndex < listOfLocations.length;
    locationIndex++
  ) {
    const location = listOfLocations[locationIndex];
    newListOfLocations.push({
      name: location.name,
      id: location.id,
      identifier: location.identifier,
      isAlertNeeded: false,
    });
    const doneesAtLocation = location.donees.items;
    if (doneesAtLocation.length == 0) continue;
    for (
      let doneeIndex = 0;
      doneeIndex < doneesAtLocation.length;
      doneeIndex++
    ) {
      const donee = doneesAtLocation[doneeIndex];
      const donationsInDonees = donee.donations.items;
      const isAlertNeeded = !donationsInDonees.every(
        (donation) => donation.isGratificationSent === true
      );
      newListOfLocations[locationIndex].isAlertNeeded = isAlertNeeded;
    }
  }
  return newListOfLocations;
}

export default function Admin({ navigation, updateAuthState }) {
  const [locations, setLocations] = useState([]);

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
    async function getDoneesByLocation() {
      const response = await API.graphql({
        query: customQueries.getLocationForSponsor,
        variables: { id: "36702f2c-10b3-4a50-900b-b9cbf9e121cf" },
      });
      var listOfLocations = await response.data.getSponsor.locations.items;
      setLocations(setGratiphicationValue(listOfLocations));
    }
    getDoneesByLocation();
  }, []);

  return (
    <Screen>
      <FlatList
        data={locations}
        keyExtractor={(location) => location.name}
        renderItem={({ item }) => (
          <ListItemComponent
            title={item.name}
            onPress={() =>
              navigation.navigate("DoneesAtLocation", {
                locationId: item.id,
                locationIdentifier: item.identifier,
              })
            }
            showChevrons={item.isAlertNeeded}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
