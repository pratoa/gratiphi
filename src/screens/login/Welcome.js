import React, { useEffect, useState, ReactElement } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import AppButton from "../../components/AppButton";

export default function Welcome({
  navigation,
  updateAuthState,
  isUserLoggedIn,
  userGroup,
}) {
  const backgroundImage = "../../../assets/images/el-tigre.jpg";
  const logo = "../../../assets/logo/gratiphi-blue.png";

  useEffect(() => {
    if (isUserLoggedIn === "loggedIn") {
      console.log(userGroup);
      if (userGroup === "gratiphiUser") {
        navigation.replace("Main");
      }
      if (userGroup === "gratiphiAdmin") {
        navigation.replace("Admin");
      }
    }
  });

  return (
    <View style={styles.backgroundContainer}>
      <StatusBar barStyle="light-content" />
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
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: "white", //#355C96"
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
    width: 250,
    height: 250,
  },
});
