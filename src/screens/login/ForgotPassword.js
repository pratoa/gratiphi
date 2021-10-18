import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Auth } from "aws-amplify";

import AppTextInput from "../../components/common/AppTextInput";
import AppButton from "../../components/common/AppButton";
import colors from "../../config/colors";
import Screen from "../../components/common/Screen";

export default function ForgotPassword({ route, navigation }) {
  const [authCode, setAuthCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailAuthenticated, setEmailAuthenticated] = useState(false);

  async function submitForgotPassword() {
    try {
      await Auth.forgotPasswordSubmit(email, authCode, password);
      console.log("Code Confirmed");
      navigation.replace("SignIn");
      setError("");
    } catch (error) {
      setError(error);
    }
  }

  async function sendConfimationCode() {
    try {
      await Auth.forgotPassword(email);
      setError("");
      setEmailAuthenticated(true);
    } catch (error) {
      setError(error);
      setEmailAuthenticated(false);
    }
  }

  return (
    <Screen style={styles.container}>
      {!emailAuthenticated && (
        <>
          <Text style={styles.title}>Verify Email</Text>
          <AppTextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter email address"
            keyboardType="email-address"
          />
          <AppButton title="Send Code" onPress={sendConfimationCode} />
        </>
      )}
      {emailAuthenticated && (
        <>
          <Text style={styles.title}>Verify Code and New Password</Text>
          <AppTextInput
            value={authCode}
            onChangeText={(text) => setAuthCode(text)}
            placeholder="Enter verification code"
            keyboardType="numeric"
          />
          <AppTextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter new password"
          />
          <AppButton
            title="Confirm New Password"
            onPress={submitForgotPassword}
          />
        </>
      )}
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
