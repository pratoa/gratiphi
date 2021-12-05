import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { View, Text, StyleSheet } from "react-native";

import AppTextInput from "../../../components/common/AppTextInput";
import AppButton from "../../../components/common/AppButton";
import colors from "../../../config/colors";
import Screen from "../../../components/common/Screen";
import { default as defaultStyle } from "../../../config/styles";

export default function SettingsAccount({ navigation, updateAuthState }) {
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      let user = await Auth.currentAuthenticatedUser();
      setName(user.attributes["custom:first_name"]);
      setLastName(user.attributes["custom:last_name"]);
      setEmail(user.attributes.email);
      setNewName(user.attributes["custom:first_name"]);
      setNewLastName(user.attributes["custom:last_name"]);
      setNewEmail(user.attributes.email);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  async function saveAccount() {
    let attributesToUpdate = {};
    if (name !== newName) attributesToUpdate["custom:first_name"] = newName;
    if (lastName !== newLastName)
      attributesToUpdate["custom:last_name"] = newLastName;
    if (email !== newEmail) attributesToUpdate["email"] = newEmail;

    if (Object.keys(attributesToUpdate).length > 0) {
      try {
        await Auth.updateUserAttributes(user, attributesToUpdate);
        getUser();
        alert("Successfully updated account");
      } catch (error) {
        alert("There was an error updating your account");
      }
    }
  }

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [user, setUser] = useState();
  return (
    <Screen style={styles.container}>
      <View style={styles.rowWrapper}>
        <Text style={defaultStyle.smallText}>First Name</Text>
        <AppTextInput
          value={newName}
          leftIcon="account"
          placeholder="First name"
          autoCapitalize="words"
          keyboardType="default"
          textContentType="name"
          onChangeText={(text) => {
            setNewName(text);
          }}
        />
      </View>
      <View style={styles.rowWrapper}>
        <Text style={defaultStyle.smallText}>Last Name</Text>
        <AppTextInput
          value={newLastName}
          leftIcon="account"
          placeholder="Last name"
          autoCapitalize="words"
          keyboardType="default"
          textContentType="name"
          onChangeText={(text) => {
            setNewLastName(text);
          }}
        />
      </View>
      <View style={styles.rowWrapper}>
        <Text style={defaultStyle.smallText}>Email</Text>
        <AppTextInput
          value={newEmail}
          leftIcon="account"
          placeholder="Email address"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={(text) => {
            setNewEmail(text);
          }}
        />
      </View>
      <AppButton title="Save" onPress={saveAccount} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  rowWrapper: {
    padding: 5,
    alignItems: "flex-start",
  },
  errorText: {
    color: colors.danger,
    alignSelf: "center",
  },
});
