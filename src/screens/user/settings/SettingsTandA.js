import React from "react";
import { StyleSheet, Linking, FlatList } from "react-native";

import ListItemSeparator from "../../../components/common/ListItemSeparator";
import ListItemComponent from "../../../components/common/ListItemComponent";
import Screen from "../../../components/common/Screen";
import { default as defaultStyle } from "../../../config/styles";

const SETTINGS_T_AND_A = [
  {
    title: "Privacy Policy",
    uri: "https://gratification-proof114704-dev.s3.amazonaws.com/public/resources/Gratiphi+Test+Privacy+Policy.pdf",
  },
  {
    title: "Terms and Agreement",
    uri: "https://gratification-proof114704-dev.s3.amazonaws.com/public/resources/Gratiphi+Test+T%26A.pdf",
  },
];

export default function SettingsTandA({ navigation, updateAuthState }) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={SETTINGS_T_AND_A}
        keyExtractor={(option) => option.title}
        renderItem={({ item }) => (
          <ListItemComponent
            title={item.title}
            onPress={() => {
              Linking.openURL(item.uri);
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
