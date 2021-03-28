import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import AppButton from "./../../components/AppButton";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  Linking,
} from "react-native";

const windowHeight = Dimensions.get("window").height;

export default function ExpandedCard({ route }) {
  const item = route.params.item;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={{ uri: item.profilePhoto }}
          style={styles.doneeImage}
        ></Image>
        <View style={styles.detailsContainer}>
          <View style={styles.infoConatiner}>
            <FontAwesome5 name={"birthday-cake"} size={25} color={"#355C96"} />
            <Text style={styles.infoText}>{item.age}</Text>
            <FontAwesome5 name={"map-marker-alt"} size={25} color={"#355C96"} />
            <Text style={styles.infoText}>{item.location.name}</Text>
          </View>
          <Text style={styles.doneeLongBiography}> {item.fullBiography}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"Donate"}
          onPress={() => Linking.openURL("https://gratiphi.org")}
        ></AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    borderRadius: 20,
  },
  doneeImage: {
    width: "100%",
    height: 300,
    height: windowHeight * 0.45,
    borderRadius: 20,
  },
  detailsContainer: {
    width: "100%",
    padding: 10,
  },
  infoConatiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  infoText: {
    paddingLeft: 5,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#355C96",
  },
  doneeLongBiography: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    textAlign: "justify",
    color: "#355C96",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
