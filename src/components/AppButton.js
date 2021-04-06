import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
export default function AppButton({ title, onPress }) {
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
    alignItems: "center",
    padding: 15,
    width: "80%",
    backgroundColor: "#355C96", //tomatio
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
