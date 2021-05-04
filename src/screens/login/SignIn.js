import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Auth } from "aws-amplify";

import AppTextInput from "../../components/common/AppTextInput";
import AppButton from "../../components/common/AppButton";
import colors from "../../config/colors";
import Screen from "../../components/common/Screen";

export default function SignIn({
  navigation,
  updateAuthState,
  updateUserGroup,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function signIn() {
    try {
      let user = await Auth.signIn(email, password);
      console.log("Login Success!");
      updateUserGroup(
        user.signInUserSession.accessToken.payload["cognito:groups"][0]
      );
      updateAuthState("loggedIn");
    } catch (error) {
      setError(error);
      console.log("Error login in...", error.message);
    }
  }

  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Sign in to your account</Text>
      <AppTextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        leftIcon="account"
        placeholder="Enter email address"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <AppTextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        leftIcon="lock"
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
      />
      <AppButton title="Login" onPress={signIn} />
      {error !== "" && (
        <Text title={error.message} style={styles.errorText}>
          {error.message}
        </Text>
      )}
      <View style={styles.footerButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.forgotPasswordButtonText}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordButtonText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
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
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPasswordButtonText: {
    marginTop: 10,
    color: colors.primary,
    fontSize: 18,
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    alignSelf: "center",
  },
});
