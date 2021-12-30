import React from "react";

import { Auth } from "aws-amplify";
import { Button } from "react-native";

export default function AdminSignOutButton({ updateAuthState, navigation }) {
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

  return <Button title="Sign Out" onPress={signOut}></Button>;
}
