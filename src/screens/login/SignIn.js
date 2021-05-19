import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { Auth } from "aws-amplify";

import AppTextInput from "../../components/common/AppTextInput";
import AppButton from "../../components/common/AppButton";
import colors from "../../config/colors";
import Screen from "../../components/common/Screen";

const SCREEN_WIDTH = Dimensions.get("window").width;
export default function SignIn({
  navigation,
  updateAuthState,
  updateUserGroup,
}) {
  const logo = "../../../assets/logo/gratiphi-blue-small.png";
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
      <Image source={require(logo)} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.fieldTitle}>Email Address</Text>
        <AppTextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          leftIcon="account"
          placeholder="Enter email address"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <Text style={styles.fieldTitle}>Password</Text>
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
        <TouchableOpacity>
          <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonWrapper}>
          <AppButton title="Login" onPress={signIn} />
          {error !== "" && (
            <Text title={error.message} style={styles.errorText}>
              {error.message}
            </Text>
          )}
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.dontHaveAccount}>
              Don't have an account?
              <Text style={styles.signUpButtonText}> Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    marginTop: 0,
    width: 250,
    height: 180,
  },
  formContainer: {
    position: "absolute",
    bottom: 0.035 * SCREEN_WIDTH < 13 ? 0 : 100,
  },
  fieldTitle: {
    fontSize: 0.035 * SCREEN_WIDTH,
    marginTop: 10,
  },
  forgotPasswordButtonText: {
    marginTop: 0,
    color: colors.primary,
    fontSize: 0.034 * SCREEN_WIDTH,
    fontWeight: "600",
    position: "absolute",
    right: 0,
  },
  dontHaveAccount: {
    color: colors.darkGrey,
    fontSize: 0.034 * SCREEN_WIDTH,
    fontWeight: "600",
  },
  buttonWrapper: {
    alignItems: "center",
    marginTop: 20,
  },
  footerContainer: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButtonText: {
    marginTop: 0,
    color: colors.primary,
    fontSize: 0.034 * SCREEN_WIDTH,
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    alignSelf: "center",
  },
});
