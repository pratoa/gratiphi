import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Auth } from "aws-amplify";
import { SafeAreaView } from "react-native-safe-area-context";

import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import Screen from "../../components/Screen";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  async function signUp() {
    try {
      if (password !== confirmPassword) {
        setError("Passwords don't match!");
        error.message = "Passwords don't match!";
        throw error;
      }
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      console.log(user);
      console.log("Sign-up Confirmed");
      navigation.navigate("ConfirmationSignUp", { email: email });
    } catch (err) {
      setError(err);
      console.log("Error signing up...", err.message);
    }
  }

  return (
    <Screen style={style.container}>
      <Text style={styles.title}>Create a new account</Text>
      <AppTextInput
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setUsername(text);
        }}
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
      <AppTextInput
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        leftIcon="lock"
        placeholder="Confirm password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
      />
      <AppButton title="Sign Up" onPress={signUp} />
      {error !== "" && (
        <Text title={error.message} style={styles.errorText}>
          {error.message}
        </Text>
      )}
      <View style={styles.footerButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.forgotPasswordButtonText}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: colors.primary,
    fontSize: 18,
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    alignSelf: "center",
  },
});
