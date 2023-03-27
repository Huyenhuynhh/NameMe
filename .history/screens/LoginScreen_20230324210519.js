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

    ig (!fontsLoaded){
        return (
            <AppLoading
                startAsync={loadFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={console.warn}
            />
        );
    }
    const LoginScreen = () => {
  const navigation = useNavigation();
  const logoScale = new Animated.Value(0);

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    // Perform login action
    // Navigate to MainScreen
    navigation.navigate('Main');
  };

  // Animate logo on mount
  React.useEffect(() => {
    Animated.spring(logoScale, {
      toValue: 1,
      friction: 15,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.logo, { transform: [{ scale: logoScale }] }]}
        source={require('../assets/logo.png')}
      />
      <View style={styles.form}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput style={styles.input} placeholder="Enter username" />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter password" secureTextEntry />

        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>Need an account? Sign up here.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#030303',
  },
  logo: {
    width: 322,
    height: 271,
    resizeMode: 'contain',
    transform: [{ scaleY: 1.19 }, { translateY: -0.09 }],
    marginBottom: 50,
  },
  form: {
    width: '80%',
    alignItems: 'center',
  },
  inputLabel: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  signUpText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
  },
});

export default LoginScreen;