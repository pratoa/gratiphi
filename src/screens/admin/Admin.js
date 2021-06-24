import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Auth } from "aws-amplify";
import Screen from "../../components/common/Screen";
import { NavigationContainer } from "@react-navigation/native";

export default function Admin({ navigation, updateAuthState }) {
  async function signOut() {
    try {
      console.log(Auth.currentUserInfo);
      await Auth.signOut();
      updateAuthState("loggedOut");
      navigation.replace("Welcome");
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  }

  return (
    <Screen style={styles.mainContiner}>
      <Text>Welcome Admin</Text>
      <Button title="Sign Out" onPress={signOut}></Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  mainContiner: {
    justifyContent: "center",
  },
});