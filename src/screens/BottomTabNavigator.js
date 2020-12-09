import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from './Home';
import Donate from './Donate';
import HistoryDonations from './HistoryDonations';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

export default function BottomTabs({ updateAuthState }) {
    return (
        <Tab.Navigator initialRouteName="Home" 
            tabBarOptions={{showLabel: true, activeTintColor: '#e91e63', inactiveTintColor: 'grey'}}>
                <Tab.Screen name="Home"
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name={'home'} size={25} color={color}/>
                        ),
                    }}
                    children={() => <Home updateAuthState={updateAuthState}/>}
                />
                <Tab.Screen name="Donate"
                    component={Donate}
                    options={{
                        tabBarLabel: "Donate",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name="gratipay" size={25} color={color}/>
                        ),
                    }}
                />
                <Tab.Screen name="HistoryDonations"
                    component={HistoryDonations}
                    options={{
                        tabBarLabel: "History",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name={'book-open'} size={25} color={color}/>
                        ),
                    }}
                />
                <Tab.Screen name="Settings"
                    component={Settings}
                    options={{
                        tabBarLabel: "Settings",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name={'cog'} size={25} color={color}/>
                        ),
                    }}
                />
        </Tab.Navigator>
    )
}