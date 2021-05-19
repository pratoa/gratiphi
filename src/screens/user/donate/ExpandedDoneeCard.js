import React from "react";
import { Auth } from "aws-amplify";
import { FontAwesome5 } from "@expo/vector-icons";
import AppButton from "./../../../components/common/AppButton";
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
import { useEffect, useState } from "react/cjs/react.development";

import colors from "./../../../config/colors";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function ExpandedCard({ route }) {
  const item = route.params.item;
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getCurrentUser();
  });

  async function getCurrentUser() {
    let userInfo = await Auth.currentUserInfo();
    setCurrentUser(await userInfo.username);
  }
  const donee = route.params.item;
  const donateUrl =
    "http://gratiphi.org/donate/" + currentUser + "/" + donee.id;

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={{ uri: donee.profilePhoto }}
          style={styles.doneeImage}
        ></Image>
        <View style={styles.detailsContainer}>
          <Text style={styles.doneeName}>{donee.firstName}</Text>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5
              name={"map-marker-alt"}
              size={SCREEN_WIDTH * 0.045}
              color={colors.grey}
            />
            <Text style={styles.infoText}>{item.location.name}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5
              name={"birthday-cake"}
              size={SCREEN_WIDTH * 0.045}
              color={colors.grey}
            />
            <Text style={styles.infoText}>{item.age}</Text>
          </View>
          <Text style={styles.doneeSection}>Interests</Text>
          <Text style={styles.doneeSection}>Q&A</Text>

          <Text style={styles.doneeLongBiography}> {donee.fullBiography}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"Donate"}
          onPress={() => Linking.openURL(donateUrl)}
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
    // borderRadius: 20,
  },
  doneeImage: {
    width: "90%",
    height: 300,
    height: SCREEN_HEIGHT * 0.45,
    borderRadius: 20,
  },
  detailsContainer: {
    // width: "90%",
    padding: 20,
    // backgroundColor: colors.yellow,
  },
  doneeName: {
    fontSize: SCREEN_WIDTH * 0.06,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  infoConatiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  infoText: {
    paddingLeft: 10,
    fontSize: SCREEN_WIDTH * 0.045,
    // fontWeight: "bold",
    alignSelf: "center",
    color: colors.grey,
  },
  doneeSection: {
    marginTop: 5,
    fontSize: SCREEN_WIDTH * 0.045,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.black,
  },
  doneeLongBiography: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    textAlign: "justify",
    color: colors.primary,
  },
  buttonContainer: {
    alignItems: "center",
  },
});
