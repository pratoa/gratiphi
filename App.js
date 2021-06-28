import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import Amplify, { Auth } from "aws-amplify";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import awsconfig from "./aws-exports";
import Welcome from "./src/screens/login/Welcome";
import BottomTabNavigator from "./src/screens/user/BottomTabNavigator";
import SignIn from "./src/screens/login/SignIn";
import SignUp from "./src/screens/login/SignUp";
import ConfirmSignUp from "./src/screens/login/ConfirmSignUp";
import ExpandedDoneeCard from "./src/screens/user/donate/ExpandedDoneeCard";
import Admin from "./src/screens/admin/Admin";
import colors from "./src/config/colors";
import DoneesAtLocation from "./src/screens/admin/DoneesAtLocation";
import DoneeAdmin from "./src/screens/admin/DoneeAdmin";
import PhotoUpload from "./src/screens/admin/PhotoUpload";

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

const AuthenticationStack = createStackNavigator();
const AdminStack = createStackNavigator();
const RootStack = createStackNavigator();

const AdminStackScreen = (props) => {
  return (
    <AdminStack.Navigator>
      <AdminStack.Screen
        name="Admin"
        options={{
          headerShown: true,
          headerTitle: "Locations",
        }}
      >
        {(screenProps) => (
          <Admin {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AdminStack.Screen>
      <AdminStack.Screen
        name="DoneesAtLocation"
        options={{
          headerShown: true,
          headerTitle: "Donees",
        }}
      >
        {(screenProps) => (
          <DoneesAtLocation
            {...screenProps}
            updateAuthState={props.updateAuthState}
          />
        )}
      </AdminStack.Screen>
      <AdminStack.Screen
        name="DoneeAdmin"
        options={{
          headerShown: true,
        }}
      >
        {(screenProps) => (
          <DoneeAdmin
            {...screenProps}
            updateAuthState={props.updateAuthState}
          />
        )}
      </AdminStack.Screen>
      <AdminStack.Screen
        name="PhotoUpload"
        options={{
          headerShown: true,
        }}
      >
        {(screenProps) => (
          <PhotoUpload
            {...screenProps}
            updateAuthState={props.updateAuthState}
          />
        )}
      </AdminStack.Screen>
    </AdminStack.Navigator>
  );
};

const AuthenticationStackScreen = (props) => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen
        name="Welcome"
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: colors.white,
            shadowOpacity: 0,
            elevation: 0,
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
          headerTitle: "Sign In",
          headerBackTitle: "Back",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
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
          headerTitle: "Create Account",
          headerBackTitle: "Back",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
            shadowOpacity: 0,
          },
        }}
      ></AuthenticationStack.Screen>
      <AuthenticationStack.Screen
        name="ConfirmationSignUp"
        component={ConfirmSignUp}
        options={{
          headerShown: true,
          headerTitle: "Confirm Account",
          headerBackTitle: "Back",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
            shadowOpacity: 0,
          },
        }}
      ></AuthenticationStack.Screen>
    </AuthenticationStack.Navigator>
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
      <RootStack.Navigator initialRouteName="Welcome">
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
          options={({ navigation, route }) => ({
            headerShown: false,
          })}
        >
          {(screenProps) => (
            <AdminStackScreen
              {...screenProps}
              updateAuthState={updateAuthState}
            />
          )}
        </RootStack.Screen>
        <RootStack.Screen
          name="ExpandedCard"
          component={ExpandedDoneeCard}
          options={({ route }) => ({
            headerTitle: "",
            headerBackTitle: "Back",
            headerTintColor: colors.primary,
            headerStyle: {
              backgroundColor: colors.white,
              shadowOpacity: 0,
            },
          })}
        ></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
