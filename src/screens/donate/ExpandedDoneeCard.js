import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function ExpandedCard({ route }) {
  const item = route.params.item;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={item.image} style={styles.doneeImage}></Image>
        <View style={styles.detailsContainer}>
          <View style={styles.infoConatiner}>
            <FontAwesome5 name={"birthday-cake"} size={25} />
            <Text style={styles.infoText}>{item.age}</Text>
            <FontAwesome5 name={"map-marker-alt"} size={25} />
            <Text style={styles.infoText}>{item.location}</Text>
          </View>
          <Text style={styles.doneeLongBiography}> {item.longBiograhy}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    // flexGrow: 1,
    width: "100%",
    minHeight: "100%",
    alignItems: "center",
    // bottom: 0,
    borderRadius: 20,
  },
  doneeImage: {
    width: "100%",
    height: "60%",
    // height: "100%",
    borderRadius: 20,
  },
  detailsContainer: {
    width: "100%",
    // backgroundColor: "blue",
    padding: 10,
  },
  infoConatiner: {
    flexDirection: "row",
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignContent: "center",
  },
  infoText: {
    paddingLeft: 5,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    // backgroundColor: "red",
    alignSelf: "center",
  },
  doneeLongBiography: {
    // flex: 1,
    // backgroundColor: "red",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    textAlign: "justify",
  },
});
