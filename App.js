import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import Amplify, { Auth, Hub } from 'aws-amplify'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import awsconfig from './aws-exports'
import Welcome from './src/screens/login/Welcome'
import BottomTabNavigator from './src/screens/BottomTabNavigator'
import SignIn from './src/screens/login/SignIn'
import SignUp from './src/screens/login/SignUp'
import ConfirmSignUp from './src/screens/login/ConfirmSignUp'
import Home from './src/screens/Home'

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
})

function App() {
  const AuthenticationStack = createStackNavigator();
  const AppStack = createStackNavigator();
  
  const AuthenticationNavigator = props => {
    return (
      <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen name="Welcome" component={Welcome}/>
        <AuthenticationStack.Screen name="SignIn">
          {screenProps => (
            <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
          )}
        </AuthenticationStack.Screen>
        <AuthenticationStack.Screen name="SignUp" component={SignUp} />
        <AuthenticationStack.Screen name="ConfirmationSignUp" component={ConfirmSignUp} />
      </AuthenticationStack.Navigator>
    );
  };
  
  const AppNavigator = props => {
    return (
      <AppStack.Navigator>
        <AppStack.Screen name="Home">
          {screenProps => (
            <Home {...screenProps} updateAuthState={props.updateAuthState} />
          )}
        </AppStack.Screen>
      </AppStack.Navigator>
    );
  };

  const Initializing = () => {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );
  };
  let [isUserLoggedIn, setUserLoggedIn] = useState('initializing');

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
      console.log('✅ User is signed in');
      setUserLoggedIn('loggedIn');
    } catch (err) {
      console.log(err);
      console.log('❌ User is not signed in');
      setUserLoggedIn('loggedOut');
      return null;
    }
  }

  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn);
  }

  return (
    <NavigationContainer>
      {isUserLoggedIn === 'initializing' && <Initializing />}
      {isUserLoggedIn === 'loggedIn' && (
        <BottomTabNavigator updateAuthState={updateAuthState} />
      )}
      {isUserLoggedIn === 'loggedOut' && (
        <AuthenticationNavigator updateAuthState={updateAuthState} />
      )}
    </NavigationContainer>
  );
};

export default App;

// const signUpConfig = {
//   hideAllDefaults: true,
//   signUpFields: [
//     {
//       label: 'Email',
//       key: 'email',
//       required: true,
//       displayOrder: 1,
//       type: 'string',
//     },
//     {
//       label: 'Password',
//       key: 'password',
//       required: true,
//       displayOrder: 2,
//       type: 'password',
//     },
//   ],
// };