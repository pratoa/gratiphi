import React, { useEffect, useState, ReactElement } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import AppButton from "../../components/AppButton";

export default function Welcome({
  navigation,
  updateAuthState,
  isUserLoggedIn,
}) {
  const backgroundImage = "../../../assets/images/el-tigre.jpg";
  const logo = "../../../assets/images/alimenta-logo.png";

  useEffect(() => {
    if (isUserLoggedIn === "loggedIn") {
      navigation.replace("Main");
    }
  });

  return (
    <View style={styles.backgroundContainer}>
      {/* <ImageBackground source={require(backgroundImage)} style={styles.backgroundImage}> */}
      <View style={styles.container}>
        <Image source={require(logo)} style={styles.logo} />
        <View style={styles.bottomContainer}>
          <AppButton
            title="Sign In"
            onPress={() => navigation.navigate("SignIn")}
            style={styles.button}
          />
          <AppButton
            title="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
            style={styles.button}
          />
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: 35,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  logo: {
    marginTop: 55,
    width: 100,
    height: 100,
  },
});
