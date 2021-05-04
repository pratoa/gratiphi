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

const windowHeight = Dimensions.get("window").height;

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
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={{ uri: donee.profilePhoto }}
          style={styles.doneeImage}
        ></Image>
        <View style={styles.detailsContainer}>
          <View style={styles.infoConatiner}>
            <FontAwesome5
              name={"birthday-cake"}
              size={25}
              color={colors.primary}
            />
            <Text style={styles.infoText}>{item.age}</Text>
            <FontAwesome5
              name={"map-marker-alt"}
              size={25}
              color={colors.primary}
            />
            <Text style={styles.infoText}>{item.location.name}</Text>
          </View>
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
    color: colors.primary,
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
