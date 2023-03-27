import React, { useState }from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const loadFonts = async () => {
  await Font.loadAsync({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });
};

const RegisterScreen = () => {

    const onSubmit = () => {
        // handle submit 
    }

    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (!fontsLoaded) {
      return (
        <AppLoading
          startAsync={loadFonts}
          onFinish={() => setFontsLoaded(true)}
          onError={console.warn}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/newlogo.png")} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#FFFFFF"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry
        />
        
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#000000',
    },
    logo: {
        width: 322,
        height: 271,
        borderRadius: 0,
        marginTop: 82,
        marginLeft: 34,
    },
    input: {
        width: 287,
        height: 41,
        backgroundColor: 'transparent',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 51,
        marginTop: 10,
    },
    submitButton: {
        width: 151,
        height: 42,
        backgroundColor: 'transparent',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 119,
        marginTop: 50,
    },
    submitButtonText: {
        fontFamily: 'Inter-Regular',
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: 'left',
        color: '#FFFFFF',
    },
});

export default RegisterScreen;