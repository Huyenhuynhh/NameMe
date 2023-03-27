import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
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

const LoginScreen = ({ navigation }) => {
    const navigation = useNavigation();
    const logoScale = new Animated.Value(0);

    const [fontsLoaded, setFontsLoaded] = useState(false);

    ig (!fontsLoaded)
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Image
        source={require('../assets/newlogo.png')} 
        style={styles.logo}
      />
      <Text style={styles.usernameLabel}>Username</Text>
      <TextInput style={styles.usernameInput} />
      <Text style={styles.passwordLabel}>Password</Text>
      <TextInput style={styles.passwordInput} secureTextEntry />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          // Handle login functionality here
        }}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RegisterScreen');
        }}
      >
        <Text style={styles.signupText}>
          Need an account?{' '}
          <Text style={styles.signupLinkText}>Sign up here</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  loginButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignSelf: "center",
    marginTop: 24,
  },
  loginButtonText: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000",
  },
});

export default LoginScreen;
