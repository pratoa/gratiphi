import React from "react";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

const SCREEN_WIDTH = Dimensions.get("window").width;
export default function AppTextInput({ leftIcon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <MaterialCommunityIcons
          name={leftIcon}
          size={0.035 * SCREEN_WIDTH < 13 ? 15 : 20}
          color={colors.grey}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.grey}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    flexDirection: "row",
    padding: 0.035 * SCREEN_WIDTH < 13 ? 10 : 15,
    marginVertical: 10,
    backgroundColor: colors.lightGrey,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    width: "80%",
    fontSize: 0.035 * SCREEN_WIDTH,
    color: colors.black,
  },
});
