import React, { useState, memo } from "react";
import moment from "moment";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native";

import colors from "./../../../config/colors";

const WINDOW_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(WINDOW_WIDTH * 0.8);

function DoneeCard({ navigation, item }) {
  const now = moment();
  const birthDate = moment(item.birthDate, "YYYY-MM-DD");
  item.age = moment.duration(now.diff(birthDate)).years();

  function openExpandedCard() {
    navigation.navigate("ExpandedCard", { item: item });
  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => openExpandedCard()}>
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: item.profilePhoto }}
            style={styles.doneeImage}
          />
          <View style={styles.textContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.doneeName}>{item.firstName}</Text>
              <Text style={styles.doneeAge}>{item.age}</Text>
            </View>
            <Text style={styles.doneeLocation}>{item.location.name}</Text>
            <Text style={styles.doneeSmallBiography}>
              {item.smallBiography}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: "99%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  doneeImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    // flexWrap: "wrap",
    position: "absolute",
    height: "18%",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "rgba(0,0,0,.5)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  doneeName: {
    color: colors.white,
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  doneeAge: {
    color: colors.white,
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
  },
  doneeLocation: {
    color: colors.white,
    paddingBottom: 5,
    fontSize: 14,
    fontWeight: "600",
  },
  doneeSmallBiography: {
    color: colors.white,
  },
});

export default memo(DoneeCard);
