import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../../config/colors";

function AppButton({ title, onPress, style }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style && style.padding ? { padding: style.padding } : "",
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          style && style.fontSize ? { fontSize: style.fontSize } : "",
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "80%",
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.secondary,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
