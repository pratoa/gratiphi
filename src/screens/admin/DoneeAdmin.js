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
  const [gratificationHistory, setGratificationHistory] = useState([]);
  const { donee, path, locationId } = route.params;
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
    async function getGratiphications() {
      try {
        const response = await API.graphql(
          graphqlOperation(customQueries.getGratificationHistoryByDoneeId, {
            filter: { doneeId: { eq: donee.id } },
          })
        );
        var gratificationHistory = await response.data.listGratifications.items;
        setGratificationHistory(gratificationHistory);
      } catch (error) {
        alert("Hubo un problema actulizando descargando la ultima informacion");
      }
    }
    getGratiphications();
  }, [navigation.isFocused()]);

  return (
    <Screen>
      <Text style={styles.title}>{donee.name}</Text>
      <Image source={{ uri: donee.profilePhoto }} style={styles.doneeImage} />
      {gratificationHistory.length == 0 && (
        <Text style={styles.subtitle}>
          Este Donatario no posee ninguna Gratificacion
        </Text>
      )}
      <FlatList
        data={gratificationHistory}
        keyExtractor={(history) => history.id}
        renderItem={({ item }) => (
          <ListItemComponent title={item.createdAt.split("T")[0]} />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <AppButton
        title="Upload Photo"
        onPress={() =>
          navigation.navigate("PhotoUpload", {
            locationId: locationId,
            doneeId: donee.id,
            path: path,
          })
        }
      ></AppButton>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    ...defaultStyle.largeText,
  },
  subtitle: {
    fontWeight: "500",
    ...defaultStyle.text,
    textAlign: "center",
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
