import React from "react";
import { View, StyleSheet, Button } from "react-native";
import SignOutButton from "../../components/common/SignOutButton";

export default function Settings({ navigation, updateAuthState }) {
  return (
    <View style={styles.container}>
      <SignOutButton
        updateAuthState={updateAuthState}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});
