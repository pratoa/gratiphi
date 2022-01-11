import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

import AppButton from "../../components/common/AppButton";
import Screen from "../../components/common/Screen";

export default function Welcome({
  navigation,
  updateAuthState,
  isUserLoggedIn,
  userGroup,
}) {
  const logo = "../../../assets/logo/gratiphi-blue.png";

  useEffect(() => {
    if (isUserLoggedIn === "loggedIn") {
      console.log(userGroup);
      if (userGroup === "gratiphiUser") {
        navigation.replace("Main");
      }
      if (userGroup === "gratiphiAdmin" || userGroup === "alimentaSuperAdmin") {
        navigation.replace("Admin");
      }
    }
  });

  return (
    <Screen style={styles.container}>
      <Image source={require(logo)} style={styles.logo} />
      <View style={styles.bottomContainer}>
        <AppButton
          title="Sign In"
          onPress={() => navigation.navigate("SignIn")}
        />
        <AppButton
          title="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
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
