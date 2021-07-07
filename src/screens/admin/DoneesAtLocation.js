import React, { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { API } from "aws-amplify";
import Screen from "../../components/common/Screen";
import SignOutButton from "../../components/common/SignOutButton";
import ListItemSeparator from "../../components/common/ListItemSeparator";
import ListItemComponent from "../../components/common/ListItemComponent";
import * as customQueries from "../../../graphql/customQueries";

export default function DoneesAtLocation({
  route,
  navigation,
  updateAuthState,
}) {
  const [donees, setDoness] = useState([]);
  const { locationId, locationIdentifier } = route.params;
  const date = new Date().toISOString().split("T")[0];
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
        query: customQueries.getDoneesAtLocation,
        variables: { id: locationId },
      });
      var listOfDonees = await response.data.getLocation.donees.items;
      setDoness(listOfDonees);
    }
    getDoneesByLocation();
  }, []);

  return (
    <Screen>
      <FlatList
        data={donees}
        keyExtractor={(donees) => donees.id}
        renderItem={({ item }) => (
          <ListItemComponent
            title={item.firstName + " " + item.lastName}
            onPress={() =>
              navigation.navigate("DoneeAdmin", {
                path: `AlimentaLaSolidaridad/${locationIdentifier}-${locationId}/${item.identifier}-${item.id}/${item.identifier}_${date}.jpeg`,
                donee: {
                  name: `${item.firstName} ${item.lastName}`,
                  profilePhoto: item.profilePhoto,
                  id: item.id,
                },
              })
            }
            showChevrons
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
