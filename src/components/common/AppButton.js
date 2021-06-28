import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

import colors from "../../config/colors";

const SCREEN_WIDTH = Dimensions.get("window").width;
function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    padding: 0.034 * SCREEN_WIDTH < 13 ? 10 : 15,
    width: "80%",
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.secondary,
    fontSize: 0.034 * SCREEN_WIDTH,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
