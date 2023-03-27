import React, { useEffect } from "react";
import { StatusBar, StyleSheet, View, Image, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  const logoScale = new Animated.Value(0);

  useEffect(() => {
    const animateLogo = () => {
      Animated.spring(logoScale, {
        toValue: 1,
        friction: 15,
        tension: 100,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          navigation.navigate("Login");
        }, 1200);
      });
    };

    animateLogo();
  }, [navigation, logoScale]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.Image
        style={[styles.logo, { transform: [{ scale: logoScale }] }]}
        source={require('../assets/newlogo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body {
    background-color: 'black'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#030303",
  },
  logo: {
    width: 390,
    height: 844,
    resizeMode: "contain",
  },
});

export default SplashScreen;
