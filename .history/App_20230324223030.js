import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import SplashScreen from "expo-splash-screen";

// ... import your screens

const Stack = createStackNavigator();

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Load fonts, data, or any other assets here
        await Font.loadAsync({
          "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
          "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsAppReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, []);

  if (!isAppReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
  );
};

export default App;