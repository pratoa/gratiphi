
import React, { useState, memo } from "react";
import moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native";

import colors from "./../../../config/colors";
import { color } from "react-native-reanimated";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.8);

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
            <View
              style={{
                flexDirection: "row",
                marginBottom: 5,
                alignItems: "center",
              }}
            >
              <FontAwesome5
                name={"map-marker-alt"}
                size={Math.round(SCREEN_WIDTH * 0.03)}
                color={colors.white}
              />
              <Text style={styles.doneeLocation}>{item.location.name}</Text>
            </View>
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
    height: "100%",
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
    height: SCREEN_WIDTH * 0.3,
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
    fontSize: SCREEN_WIDTH * 0.04,
    fontWeight: "bold",
  },
  doneeAge: {
    color: colors.white,
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: SCREEN_WIDTH * 0.04,
  },
  doneeLocation: {
    color: colors.white,
    paddingLeft: 5,
    fontSize: SCREEN_WIDTH * 0.035,
    fontWeight: "bold",
  },
  doneeSmallBiography: {
    color: colors.white,
    fontSize: SCREEN_WIDTH * 0.035,
  },
});

export default memo(DoneeCard);

