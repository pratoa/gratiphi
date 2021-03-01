import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(WINDOW_WIDTH * 0.8);

export default function DoneeCard({ navigation, item }) {
  const [container, setContainer] = useState(null);

  function openExpandedCard() {
    navigation.navigate("ExpandedCard", { item: item });
  }

  return (
    <View ref={(container) => setContainer(container)}>
      <TouchableWithoutFeedback onPress={() => openExpandedCard()}>
        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.doneeImage} />
          <View style={styles.textContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.doneeName}>{item.name}</Text>
              <Text style={styles.doneeAge}>{item.age}</Text>
            </View>
            <Text style={styles.doneeLocation}>{item.location}</Text>
            <Text style={styles.doneeSmallBiography}>
              {item.shortBiography}
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
    backgroundColor: "white",
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
    color: "white",
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  doneeAge: {
    color: "white",
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
  },
  doneeLocation: {
    color: "white",
    paddingBottom: 5,
    fontSize: 14,
    fontWeight: "600",
  },
  doneeSmallBiography: {
    color: "white",
  },
});
