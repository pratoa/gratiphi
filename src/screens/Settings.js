import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  unstable_batchedUpdates,
} from "react-native";
import { Auth } from "aws-amplify";

export default function Settings({ updateAuthState }) {
  async function signOut() {
    try {
      console.log(Auth.currentUserInfo);
      await Auth.signOut();
      updateAuthState("loggedOut");
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Sign Out" color="tomato" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});
