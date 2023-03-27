import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView, 
    Image, 
    StyleSheet,
} from 'react-native'; 

const ClassBox = ({title}) => (
    <View style={styles.class}>
        <Text style={styles.classBoxText}>{title}</Text>
    </View>
)