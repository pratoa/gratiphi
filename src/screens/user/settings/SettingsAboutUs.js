import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Screen from "../../../components/common/Screen";
import { default as defaultStyle } from "../../../config/styles";

const logo = "./../../../../assets/logo/gratiphi-blue.png";
const OUR_HISTORY =
  "There’s XX amount of people that are skeptical about making donations because they don’t know if their donation is being used appropriately. Gratiphi Inc was born to help decrease that number and show donors gratification and proof of their support to an organization.";
const OUR_MISSION =
  "Work very closely with nonprofits to obtain evidence of the donation, showcase the great work and therefore improve the donation experience and engagement.";
const OUR_WORK =
  "We are partnered with Alimenta La Solidaridad to support their work of developing sustainable solutions to the food security challenges of Venezuelan families. We will be receiving pictures of proof of the donation (children receiving their respective meals) and sharing via the Gratiphi app to donors.";

export default function SettingsAboutUs({ navigation, updateAuthState }) {
  return (
    <Screen>
      <Image source={require(logo)} style={styles.logo} />
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>History</Text>
        <Text style={styles.description}>{OUR_HISTORY}</Text>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.description}>{OUR_MISSION}</Text>
        <Text style={styles.sectionTitle}>Our Work</Text>
        <Text style={styles.description}>{OUR_WORK}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  sectionTitle: {
    ...defaultStyle.largeText,
    fontWeight: "700",
    marginTop: 7,
  },
  description: {
    ...defaultStyle.smallText,
    textAlign: "justify",
  },
  logo: {
    marginTop: 5,
    width: 180,
    height: 100,
    alignSelf: "center",
  },
});
