Here's the corrected code:
import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={async () => {
          await Font.loadAsync({
            Inter: require("./assets/fonts/Inter.ttf"),
          });
        }}
        onFinish={() => setIsFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


In the if condition, the variable fontLoaded should be isFontLoaded.
In the AppLoading component, onFinish should use the setIsFontLoaded function instead of setFontLoaded.
The code block containing the AppLoading component should return null instead of a boolean (i.e., false in this case).

