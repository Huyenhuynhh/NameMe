import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MainScreen from "./screens/MainScreen";
import AddingScreen from "./screens/AddingScreen";
import CMSC312 from "./screens/CMSC312";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        // change header to black
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          optiopns={{ headerShown: false }}
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
        <Stack.Screen
          name="Adding"
          component={AddingScreen}
          optiopns={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="CMSC312" component={CMSC312} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
