import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import Amplify, { Auth } from "aws-amplify";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import awsconfig from "./aws-exports";
import Welcome from "./src/screens/login/Welcome";
import BottomTabNavigator from "./src/screens/BottomTabNavigator";
import SignIn from "./src/screens/login/SignIn";
import SignUp from "./src/screens/login/SignUp";
import ConfirmSignUp from "./src/screens/login/ConfirmSignUp";
import ExpandedDoneeCard from "./src/screens/donate/ExpandedDoneeCard";

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

const AuthenticationStack = createStackNavigator();
const RootStack = createStackNavigator();

const AuthenticationStackScreen = (props) => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen
        name="Welcome"
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "white",
            shadowOpacity: 0,
          },
        }}
      >
        {(screenProps) => (
          <Welcome
            {...screenProps}
            updateAuthState={props.updateAuthState}
            isUserLoggedIn={props.isUserLoggedIn}
          />
        )}
      </AuthenticationStack.Screen>
      <AuthenticationStack.Screen
        name="SignIn"
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitle: "Back",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#355C96",
            shadowOpacity: 0,
          },
        }}
      >
        {(screenProps) => (
          <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AuthenticationStack.Screen>
      <AuthenticationStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitle: "Back",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#355C96",
            shadowOpacity: 0,
          },
        }}
      ></AuthenticationStack.Screen>
      <AuthenticationStack.Screen
        name="ConfirmationSignUp"
        component={ConfirmSignUp}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitle: "Back",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#355C96",
            shadowOpacity: 0,
          },
        }}
      ></AuthenticationStack.Screen>
    </AuthenticationStack.Navigator>
  );
};

const Initializing = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#355C96",
      }}
    >
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

function App() {
  let [isUserLoggedIn, setUserLoggedIn] = useState("initializing");

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
      console.log("✅ User is signed in");
      setUserLoggedIn("loggedIn");
    } catch (err) {
      console.log(err);
      console.log("❌ User is not signed in");
      setUserLoggedIn("loggedOut");
      return null;
    }
  }

  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn);
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Welcome"
          options={{
            headerShown: false,
          }}
        >
          {(screenProps) => (
            <AuthenticationStackScreen
              {...screenProps}
              updateAuthState={updateAuthState}
              isUserLoggedIn={isUserLoggedIn}
            />
          )}
        </RootStack.Screen>
        <RootStack.Screen
          name="Main"
          options={{ headerShown: false, headerLeft: null }}
        >
          {(screenProps) => (
            <BottomTabNavigator
              {...screenProps}
              updateAuthState={updateAuthState}
              isUserLoggedIn={isUserLoggedIn}
            />
          )}
        </RootStack.Screen>
        <RootStack.Screen
          name="ExpandedCard"
          component={ExpandedDoneeCard}
          options={({ route }) => ({
            headerTitle: route.params.item.name,
            headerBackTitle: "Back",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#355C96",
              shadowOpacity: 0,
            },
          })}
        ></RootStack.Screen>
        {/* {isUserLoggedIn === "initializing" && <Initializing />}
        {isUserLoggedIn === "loggedIn" && (
          <BottomTabNavigator updateAuthState={updateAuthState} />
        )}
        {isUserLoggedIn === "loggedOut" && (
          <AuthenticationNavigator updateAuthState={updateAuthState} />
        )} */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
