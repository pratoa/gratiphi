import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import Home from "./Home";
import Donate from "./donate/Donate";
import HistoryDonations from "./HistoryDonations";
import Settings from "./Settings";

const BottomNavigator = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const DonateStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Alimenta la Solidaridad",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#325e9d",
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
          headerTitle: "Donate",
          headerTintColor: "#355C96",
          headerShown: true,
          headerStyle: {
            backgroundColor: "white",
            shadowOpacity: 0,
          },
        }}
      />
    </DonateStack.Navigator>
  );
}

function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator initialRouteName="History">
      <HistoryStack.Screen
        name="History"
        component={HistoryDonations}
        options={{
          headerTitle: "History",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#355C96",
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
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#355C96",
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
        activeTintColor: "#e91e63",
        inactiveTintColor: "grey",
      }}
    >
      <BottomNavigator.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"home"} size={25} color={color} />
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
        component={HistoryStackScreen}
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
