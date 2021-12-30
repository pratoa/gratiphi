import React, { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { API, Auth } from "aws-amplify";
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
    const donationsAtLocationsWithNoGratiphication = location.donations.items;
    var isAlertNeeded = false;
    if (donationsAtLocationsWithNoGratiphication.length != 0)
      isAlertNeeded = true;
    newListOfLocations.push({
      name: location.name,
      id: location.id,
      identifier: location.identifier,
      isAlertNeeded: isAlertNeeded,
    });
  }
  return newListOfLocations;
}

const ALIMENTA_SPONSOR_ID = "36702f2c-10b3-4a50-900b-b9cbf9e121cf";

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
      try {
        console.log(await Auth.currentAuthenticatedUser());
        const response = await API.graphql({
          query: customQueries.getLocationForSponsor,
          variables: {
            filter: { sponsorId: { eq: ALIMENTA_SPONSOR_ID } },
          },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        var listOfLocations = await response.data.listLocations.items;
        setLocations(setGratiphicationValue(listOfLocations));
      } catch (error) {
        alert("Hubo un problema actulizando descargando la ultima informacion");
      }
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
