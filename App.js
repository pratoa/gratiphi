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
import Admin from "./src/screens/Admin";

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
            userGroup={props.userGroup}
            updateUserGroup={props.updateUserGroup}
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
          <SignIn
            {...screenProps}
            updateAuthState={props.updateAuthState}
            updateUserGroup={props.updateUserGroup}
          />
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
  let [userGroup, setUserGroup] = useState("");

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      let user = await Auth.currentAuthenticatedUser();
      setUserGroup(
        user.signInUserSession.accessToken.payload["cognito:groups"][0]
      );
      console.log("✅ User is signed in");
      setUserLoggedIn("loggedIn");
    } catch (err) {
      console.log(err);
      console.log("❌ User is not signed in");
      setUserLoggedIn("loggedOut");
      return null;
    }
  }

  function updateUserGroup(userGroup) {
    setUserGroup(userGroup);
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
              userGroup={userGroup}
              updateUserGroup={updateUserGroup}
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
          name="Admin"
          options={{ headerShown: false, headerLeft: null }}
        >
          {(screenProps) => (
            <Admin {...screenProps} updateAuthState={updateAuthState}></Admin>
          )}
        </RootStack.Screen>
        <RootStack.Screen
          name="ExpandedCard"
          component={ExpandedDoneeCard}
          options={({ route }) => ({
            headerTitle: route.params.item.firstName,
            headerBackTitle: "Back",
            headerTintColor: "#355C96",
            headerStyle: {
              backgroundColor: "white",
              shadowOpacity: 0,
            },
          })}
        ></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
