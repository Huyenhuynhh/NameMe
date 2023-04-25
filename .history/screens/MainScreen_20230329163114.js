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

const ClassBox = ({ title, onPress }) => (
  <TouchableOpacity style={styles.classBox} onPress={onPress}>
    <Text style={styles.classBoxText}>{title}</Text>
  </TouchableOpacity>
);

const MainScreen = ({ navigation }) => {
  const [classes, setClasses] = useState([]);
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

  const handleAdd = () => {
    navigation.navigate("Adding");
  };

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const handleQuiz = (className) => {
    navigation.navigate("Quiz", { className: className });
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
        {classes.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleQuiz(item.className)}>
            <View style={styles.classBox}>
              <Text style={styles.className}>{item.className}</Text>
              <Text style={styles.classDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
    marginBottom: 34,
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default MainScreen;
