import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ClassBox = ({ title }) => (
  <View style={styles.classBox}>
    <Text style={styles.classBoxText}>{title}</Text>
  </View>
);

const MainScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://128.172.245.98:3000/classes");
        const data = await response.json();
        setClasses(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [classes] = useState([
    {
      id: 1,
      name: "CMSC 312",
      description: "Introduction to Operating System",
    },
    {
      id: 2,
      name: "CMSC 428",
      description: "Mobile Programming",
    },
    {
      id: 3,
      name: "CMSC 403",
      description: "Programming Languages",
    },
    {
      id: 4,
      name: "CMSC 401",
      description: "Algorithm and Advanced Data Structure",
    },
    {
      id: 5,
      name: "CMSC 256",
      description: "Introduction to Programming Language",
    },
    {
      id: 6,
      name: "CMSC 425",
      description: "Software Testing",
    },
  ]);

  const handleAdd = () => {
    navigation.navigate("AddingScreen");
  };

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/newlogo.png")} style={styles.logo} />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <View style={styles.flatListContainer}>
        <FlatList
          data={classes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.classBox}
              onPress={() =>
                onPress={(navigation.navigate("QuestionScreen", { classData: item })}
              }
            >
              <Text style={styles.className}>{item.name}</Text>
              <Text style={styles.classDescription}>{item.description}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.scrollContainer}
        />
      </View>

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
    padding: 20,
    justifyContent: "space-between",
  },
  flatListContainer: {
    width: 400,
    height: 400,
    marginTop: 20,
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
    marginRight: 20,
    marginLeft: 20,
    marginHorizontal: 10,
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
    marginTop: -3,
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
    marginTop: 20,
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default MainScreen;
