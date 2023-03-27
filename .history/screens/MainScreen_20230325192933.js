import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";

const ClassBox = ({ title }) => (
  <View style={styles.classBox}>
    <Text style={styles.classBoxText}>{title}</Text>
  </View>
);

const MainScreen = ({ navigation }) => {
  const handleAdd = () => {};

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/newlogo.png")} style={styles.logo} />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >
        <View style={styles.classBox}>
          <Text style={styles.className}>CMSC 312</Text>
          <Text style={styles.classDescription}>
            Introduction to Operating System
          </Text>
        </View>
        <View style={styles.classBox}>
          <Text style={styles.className}>CMSC 428</Text>
          <Text style={styles.classDescription}>Mobile Programming</Text>
        </View>
        <View style={styles.classBox}>
          <Text style={styles.className}>CMSC 403</Text>
          <Text style={styles.classDescription}>Programming Languages</Text>
        </View>
        <View style={styles.classBox}>
          <Text style={styles.className}>CMSC 451</Text>
          <Text style={styles.classDescription}>Senior Project I</Text>
        </View>
        <View style={styles.classBox}>
          <Text style={styles.className}>CMSC 508</Text>
          <Text style={styles.classDescription}>Operating System</Text>
        </View>
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
    backgroundColor: "#000",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginTop: 40,
  },
  scrollView: {
    width: 348,
    height: 465,
    marginTop: 20,
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  classBox: {
    width: 140,
    height: 140,
    backgroundColor: "transparent",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  className: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    lineHeight: 22,
    textAlign: "center",
    marginTop: 10,
    marginRight: 5,
  },
  classDescription: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 15,
    textAlign: "center",
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: "transparent",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    right: 30,
  },
  addButtonText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  logoutButton: {
    width: 70,
    height: 41,
    borderRadius: 20,
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 34,
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default MainScreen;