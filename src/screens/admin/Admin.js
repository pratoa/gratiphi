import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Screen from "../../components/common/Screen";
import SignOutButton from "../../components/common/SignOutButton";

export default function Admin({ navigation, updateAuthState }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SignOutButton
          updateAuthState={updateAuthState}
          navigation={navigation}
        />
      ),
    });
  }, [navigation]);

  return (
    <Screen style={styles.mainContiner}>
      <Text>Welcome Admin</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  mainContiner: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
