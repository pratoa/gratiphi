import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Auth } from "aws-amplify";

import AppTextInput from "../../components/common/AppTextInput";
import AppButton from "../../components/common/AppButton";
import colors from "../../config/colors";
import Screen from "../../components/common/Screen";

export default function ConfirmSignUp({
  route,
  navigation,
  updateAuthState,
  updateUserGroup,
}) {
  const email = route.params.email;
  const password = route.params.password;
  const [authCode, setAuthCode] = useState("");
  const [error, setError] = useState("");

  async function confirmSignUp() {
    try {
      var confirmPromise = await Auth.confirmSignUp(email, authCode);
      if (confirmPromise == "SUCCESS") {
        let user = await Auth.signIn(email, password);
        updateUserGroup(
          user.signInUserSession.accessToken.payload["cognito:groups"][0]
        );
        updateAuthState("loggedIn");
        console.log("Code Confirmed");
        navigation.replace("Main");
      }
    } catch (error) {
      setError(error);
      console.log("Verification code does not match.", error.code);
    }
  }

  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Confirm Sign Up</Text>
      <AppTextInput
        value={authCode}
        onChangeText={(text) => setAuthCode(text)}
        leftIcon="numeric"
        placeholder="Enter verification code"
        keyboardType="numeric"
      />
      <AppButton title="Confirm Sign Up" onPress={confirmSignUp} />
      {error !== "" && (
        <Text title={error.message} style={styles.errorText}>
          {error.message}
        </Text>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "500",
    marginVertical: 15,
  },
  errorText: {
    color: "red",
    alignSelf: "center",
  },
});
