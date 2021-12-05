import React from "react";

import { Auth } from "aws-amplify";
import { Button } from "react-native";
import AppButton from "./AppButton";

export default function SignOutButton({ updateAuthState, navigation }) {
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

  return <AppButton title="Sign Out" onPress={signOut}></AppButton>;
}
