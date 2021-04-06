import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Auth } from "aws-amplify";

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
    <View style={styles.mainContiner}>
      <Text>Welcome Admin</Text>
      <Button title="Sign Out" onPress={signOut}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContiner: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
