import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Auth } from "aws-amplify";
import { SafeAreaView } from "react-native-safe-area-context";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";

export default function SignIn({ navigation, updateAuthState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function signIn() {
    try {
      await Auth.signIn(email, password);
      console.log("Login Success!");
      updateAuthState("loggedIn");
    } catch (error) {
      setError(error);
      console.log("Error login in...", error.message);
    }
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#355C96",
    fontWeight: "500",
    marginVertical: 15,
  },
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPasswordButtonText: {
    color: "#355C96",
    fontSize: 18,
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    alignSelf: "center",
  },
});
