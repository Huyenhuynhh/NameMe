import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from "./screens/RegisterScreen";
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          optiopns={{ headerShown: false }}
          screenOptions={{
            headerStyle: { back}
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          optiopns={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          optiopns={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
