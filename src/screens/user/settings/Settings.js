import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import ListItemSeparator from "../../../components/common/ListItemSeparator";
import ListItemComponent from "../../../components/common/ListItemComponent";
import SignOutButton from "../../../components/common/SignOutButton";
import Screen from "../../../components/common/Screen";

const SETTINGS_OPTIONS = [
  { title: "Account", screen: "SettingsAccount" },
  { title: "About Us", screen: "SettingsAboutUs" },
  { title: "T&A", screen: "SettingsTandA" },
];

export default function Settings({ navigation, updateAuthState }) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={SETTINGS_OPTIONS}
        keyExtractor={(option) => option.title}
        renderItem={({ item }) => (
          <ListItemComponent
            title={item.title}
            onPress={() => {
              navigation.navigate(item.screen);
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <SignOutButton
        updateAuthState={updateAuthState}
        navigation={navigation}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
