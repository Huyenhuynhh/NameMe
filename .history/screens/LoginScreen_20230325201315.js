import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Animated,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const loadFonts = async () => {
    await Font.loadAsync({
      "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
      "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf")
    });
}

const LoginScreen = ({navigation}) => {
    
    const handleLogin = () => {
      navigation.navigate('Main');
    }

    const handleSignUp = () => {
      navigation.navigate('Register');
    }

    const logoScale = new Animated.Value(0);

    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (!fontsLoaded){
        return (
            <AppLoading
                startAsync={loadFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={console.warn}
            />
        );
    }
    
  return (
    <View
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image source={require("../assets/newlogo.png")} style={styles.logo} />
      <Text style={styles.usernameLabel}>Username</Text>
      <TextInput style={styles.usernameInput} />
      <Text style={styles.passwordLabel}>Password</Text>
      <TextInput style={styles.passwordInput} secureTextEntry />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signupText}>
            <Text style={styles.signupLinkText}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: "#030303",
    alignItems: "center",
  },
  logo: {
    width: 322,
    height: 271,
    resizeMode: "contain",
    marginTop: 82,
  },
  usernameLabel: {
    color: "#FFFFFF",
    fontSize: 18,
    alignSelf: "flex-start",
    marginLeft: 69,
    marginTop: 48,
  },
  usernameInput: {
    width: 252,
    height: 44,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    marginLeft: 69,
    marginTop: 8,
  },
  passwordLabel: {
    color: "#FFFFFF",
    fontSize: 18,
    alignSelf: "flex-start",
    marginLeft: 69,
    marginTop: 24,
  },
  passwordInput: {
    width: 252,
    height: 44,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    marginLeft: 69,
    marginTop: 8,
  },
  signupText: {
    fontFamily: 'Inter-Bold', 
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 20,
    textDecorationLine: 'underline'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 10
  },
  signUpContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    position: 'absolute',
    width: 151,
    height: 42,
    top: 650,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    fontFamily: "Inter-Regular",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: "white",
    textShadowColor: "rgba(168, 66, 66, 1)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  form: {
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
});

export default LoginScreen;
