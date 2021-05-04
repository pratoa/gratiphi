import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Auth } from "aws-amplify";

import AppTextInput from "../../components/common/AppTextInput";
import AppButton from "../../components/common/AppButton";
import colors from "../../config/colors";
import Screen from "../../components/common/Screen";

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const logo = "../../../assets/logo/gratiphi-blue-small2.png";

  async function signUp() {
    setError("");
    try {
      //verify all fields have been provided
      //fix responsiveness issues

      if (!firstName) {
        setError("First name is empty, please enter your first name!");
        throw error;
      }

      if (!lastName) {
        setError("Last name is empty, please enter your last name!");
        throw error;
      }

      if (!email) {
        setError("Email is empty, please enter your email!");
        throw error;
      }

      if (!validateEmail(email)) {
        setError("Email is not in en email format, please check your email");
        throw error;
      }

      if (!password) {
        setError("Password is empty, please enter your password!");
        throw error;
      }

      if (!confirmPassword) {
        setError("Password confirmation is empty, please enter your password!");
        throw error;
      }

      if (password !== confirmPassword) {
        setError("Passwords don't match!");
        throw error;
      }
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: { email, firstName, lastName },
      });
      console.log(user);
      console.log("Sign-up Confirmed");
      navigation.navigate("ConfirmationSignUp", { email: email });
    } catch (err) {
      console.log("Error signing up...", err);
    }
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <Screen style={styles.container}>
      <Image source={require(logo)} style={styles.logo} />
      <View style={styles.nameContainer}>
        <View style={styles.firstNameWrapper}>
          <AppTextInput
            value={firstName}
            onChangeText={(text) => {
              setFirstName(text);
            }}
            leftIcon="account"
            placeholder="First name"
            autoCapitalize="words"
            keyboardType="default"
            textContentType="name"
          />
        </View>
        <View style={styles.lastNameWrapper}>
          <AppTextInput
            value={lastName}
            onChangeText={(text) => {
              setLastName(text);
            }}
            leftIcon="account"
            placeholder="Last name"
            autoCapitalize="words"
            keyboardType="default"
            textContentType="name"
          />
        </View>
      </View>
      <AppTextInput
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setUsername(text);
        }}
        leftIcon="account"
        placeholder="Email address"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <AppTextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        leftIcon="lock"
        placeholder="Password"
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
        <Text title={error} style={styles.errorText}>
          {error}
        </Text>
      )}
      <View style={styles.footerButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.alreadyHaveAccount}>
            Already have an account?
            <Text style={styles.forgotPasswordButtonText}> Sign In</Text>
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
  logo: {
    width: 250,
    resizeMode: "contain",
  },
  nameContainer: {
    flexDirection: "row",
    width: "88%",
  },
  firstNameWrapper: {
    flex: 1,
    paddingRight: 5,
  },
  lastNameWrapper: {
    flex: 1,
    paddingLeft: 5,
  },
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  alreadyHaveAccount: {
    color: colors.darkGrey,
    fontSize: 18,
    fontWeight: "600",
  },
  forgotPasswordButtonText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "600",
  },
  errorText: {
    color: colors.danger,
    alignSelf: "center",
  },
});
