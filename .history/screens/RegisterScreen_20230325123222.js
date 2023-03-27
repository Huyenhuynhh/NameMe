import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const RegisterScreen = () => {

    const onSubmit = () => {
        // handle submit 
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
        <TouchableOpacity sytle/>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 322,
        height: 271,
        borderRadius: 0,
        marginTop: 82,
        marginLeft: 34,
    },
})

export default RegisterScreen;