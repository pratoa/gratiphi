import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Auth } from "aws-amplify";
import { SafeAreaView } from "react-native-safe-area-context";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";

export default function ConfirmSignUp({ route, navigation }) {
  const email = route.params.email;
  const [authCode, setAuthCode] = useState("");
  const [error, setError] = useState("");

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(email, authCode);
      console.log("Code Confirmed");
      navigation.navigate("SignIn");
    } catch (error) {
      setError(error);
      console.log("Verification code does not match.", error.code);
    }
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
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
});
