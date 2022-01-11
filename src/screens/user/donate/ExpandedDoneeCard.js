import React from "react";
import { Auth } from "aws-amplify";
import { FontAwesome5 } from "@expo/vector-icons";
import AppButton from "./../../../components/common/AppButton";
import { default as defaultStyle } from "../../../config/styles";
import { View, Text, Image, StyleSheet, Linking } from "react-native";
import { useEffect, useState } from "react/cjs/react.development";

import colors from "./../../../config/colors";
import { FlatList } from "react-native-gesture-handler";

export default function ExpandedCard({ route }) {
  const item = route.params.item;
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getCurrentUser();
  });

  async function getCurrentUser() {
    let userInfo = await Auth.currentUserInfo();
    console.info("SESSION: ", await Auth.currentSession());
    setCurrentUser(await userInfo.username);
  }
  const donee = route.params.item;
  const donateUrl = `http://gratiphi.org/donate/${currentUser}/${donee.id}`;

  const questions = [
    {
      id: 1,
      question: "This is question 1",
      answer: "This is answer 1",
    },
    {
      id: 2,
      question: "This is question 2",
      answer: "This is answer 2",
    },
    {
      id: 3,
      question: "This is question 3",
      answer: "This is answer 3",
    },
    {
      id: 4,
      question: "This is question 4",
      answer: "This is answer 4",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <FlatList
        ListHeaderComponent={
          <>
            <Image
              source={{ uri: donee.profilePhotoUrl }}
              style={styles.doneeImage}
            ></Image>
            <View style={styles.detailsContainer}>
              <Text style={styles.doneeName}>{donee.firstName}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5
                  name={"map-marker-alt"}
                  size={defaultStyle.SCREEN_WIDTH * 0.045}
                  color={colors.grey}
                />
                <Text style={styles.infoText}>{item.location.country}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5
                  name={"birthday-cake"}
                  size={defaultStyle.SCREEN_WIDTH * 0.045}
                  color={colors.grey}
                />
                <Text style={styles.infoText}>{item.age} years old</Text>
              </View>
              <Text style={styles.doneeSection}>Interests</Text>
              <Text style={styles.doneeSection}>Q&A</Text>
            </View>
          </>
        }
        scrollEnabled={true}
        data={questions}
        numColumns={1}
        backgroundColor={colors.white}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionsContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.questionNumber}>{index + 1}.</Text>
              <Text style={styles.question}> {item.question}</Text>
            </View>
            <Text style={styles.answer}>{item.answer}</Text>
          </View>
        )}
        ListFooterComponent={
          <>
            {/* <Text style={styles.doneeLongBiography}>
              {" "}
              {donee.fullBiography}
            </Text> */}
          </>
        }
      />
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
  doneeImage: {
    width: "90%",
    height: defaultStyle.SCREEN_HEIGHT * 0.45,
    borderRadius: 20,
    alignSelf: "center",
  },
  detailsContainer: {
    paddingLeft: 20,
  },
  doneeName: {
    fontWeight: "bold",
    ...defaultStyle.largeText,
  },
  infoConatiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  infoText: {
    paddingLeft: 10,
    color: colors.grey,
    ...defaultStyle.mediumText,
  },
  doneeSection: {
    marginTop: 5,
    fontWeight: "bold",
    ...defaultStyle.mediumText,
  },
  questionsContainer: {
    paddingLeft: 20,
    marginTop: 5,
  },
  questionNumber: {
    fontWeight: "500",
    ...defaultStyle.smallText,
  },
  question: {
    ...defaultStyle.smallText,
  },
  answer: {
    fontWeight: "700",
    ...defaultStyle.smallText,
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
