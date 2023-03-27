import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('./assets/logo-transparent-png.png')}
            />
            // add more components here
        </View>
    );
}