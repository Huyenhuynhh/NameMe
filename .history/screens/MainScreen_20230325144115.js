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
    <View style={styles.classBox}>
        <Text style={styles.classBoxText}>{title}</Text>
    </View>
);

const MainText = ({ navigation }) => {
    const handleAdd = () => {

    };

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
    <View style={styles.container}>
      <Image
        source={require('./path/to/newlogo.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}>
        <ClassBox title="CMSC 312" />
        {/* Add more class boxes as needed */}
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginTop: 30,
  },
  addButton: {
    position: 'absolute',
    right: 30,
    top: 30
}