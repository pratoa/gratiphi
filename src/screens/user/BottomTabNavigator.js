import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";

import Home from "./Home";
import Donate from "./donate/Donate";
import HistoryDonations from "./HistoryDonations";
import Settings from "./Settings";
import colors from "../../config/colors";
import { Dimensions } from "react-native";

const BottomNavigator = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const DonateStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const SCREEN_WIDTH = Dimensions.get("window").width;
function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Alimenta la Solidaridad",
          headerTitleStyle: {
            fontSize: 0.055 * SCREEN_WIDTH,
            fontWeight: "700",
          },
          headerTintColor: colors.primary,
          headerStyle: {
            backgroundColor: colors.white,
            shadowOpacity: 0,
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

function DonateStackScreen({ props }) {
  return (
    <DonateStack.Navigator initialRouteName="Donate">
      <DonateStack.Screen
        name="Donate"
        children={() => <Donate props={props} />}
        options={{
          headerTitle: "",
          headerTintColor: colors.primary,
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.white,
            shadowOpacity: 0,
          },
        }}
      />
    </DonateStack.Navigator>
  );
}

function HistoryStackScreen({ navigation }) {
  return (
    <HistoryStack.Navigator initialRouteName="History">
      <HistoryStack.Screen
        name="History"
        children={() => <HistoryDonations navigation={navigation} />}
        options={{
          headerTitle: "History",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
            shadowOpacity: 0,
          },
        }}
      />
    </HistoryStack.Navigator>
  );
}

function SettingsStackScreen({ navigation, updateAuthState }) {
  return (
    <SettingsStack.Navigator initialRouteName="Settings">
      <SettingsStack.Screen
        name="Settings"
        children={() => (
          <Settings navigation={navigation} updateAuthState={updateAuthState} />
        )}
        options={{
          headerTitle: "Settings",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
            shadowOpacity: 0,
          },
        }}
      />
    </SettingsStack.Navigator>
  );
}

const BottomTabNavigator = (props) => {
  return (
    <BottomNavigator.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.grey,
      }}
    >
      <BottomNavigator.Screen
        name="Organization"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"list-alt"} size={25} color={color} />
          ),
        }}
      />
      <BottomNavigator.Screen
        name="Donate"
        children={() => <DonateStackScreen props={props} />}
        options={{
          tabBarLabel: "Donate",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="gratipay" size={25} color={color} />
          ),
        }}
      />
      <BottomNavigator.Screen
        name="History"
        children={() => <HistoryStackScreen navigation={props.navigation} />}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"book-open"} size={25} color={color} />
          ),
        }}
      />
      <BottomNavigator.Screen
        name="Settings"
        children={() => (
          <SettingsStackScreen
            navigation={props.navigation}
            updateAuthState={props.updateAuthState}
          />
        )}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"cog"} size={25} color={color} />
          ),
        }}
      />
    </BottomNavigator.Navigator>
  );
};

export default BottomTabNavigator;
