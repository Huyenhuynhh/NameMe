import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default const AddingScreen = ({ navigation }) => {
  const [selectedCourse, setSelectedCourse] = useState("Choose a course");
  const [studentName, setStudentName] = useState("");
  const [image, setImage] = useState(null);

  const handleAdd = async () => {
    console.log('Selected course: ', selectedCourse);
    console.log('Student name: ', studentName);
    console.log('Image URI: ', image);

    try {
      // Save the image URI to local storage
      await AsyncStorage.setItem('imageUri', image);
      console.log('Image URI saved to local storage');
    } catch (error) {
      console.error('Error saving image URI to local storage:', error);
    }

    // Navigate back to the main screen
    navigation.goBack();
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const courses = [
    { label: "CMSC 312", value: "course 1" },
    { label: "CMSC 428", value: "course 2" },
    { label: "CMSC 403", value: "course 3" },
    { label: "CMSC 451", value: "course 3" },
    { label: "CMSC 508", value: "course 3" },
    { label: "CMSC 256", value: "course 3" },
    { label: "CMSC 355", value: "course 3" },
    { label: "CMSC 401", value: "course 3" },
  ];


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "#FFFFFF78",
    paddingRight: 30, // to ensure the text is not behind the icon
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is not behind the icon
    marginBottom: 10,
  },
});


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
    paddingHorizontal: 34,
    paddingTop: 82,
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginTop: -20,
  },
  courseLabel: {
    marginBottom: 5,
    fontSize: 18,
    color: "#FFFFFF",
  },
  coursePicker: {
    width: "100%",
    height: "100%",
    color: "#FFFFFF",
  },
  studentLabel: {
    marginTop: 5,
    fontSize: 18,
    color: "#FFFFFF",
  },
  uploadContainer: {
    marginTop: 5,
    width: "100%",
    height: 176,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadText: {
    fontSize: 18,
    color: "#FFFFFF78",
  },
  nameLabel: {
    marginTop: 10,
    fontSize: 18,
    color: "#FFFFFF",
  },
  nameInput: {
    marginTop: 5,
    fontSize: 18,
    width: "100%",
    height: 58,
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: "transparent",
    paddingLeft: 10,
    color: "#FFFFFF",
  },
  addButton: {
    marginTop: 25,
    alignSelf: "center",
    width: 78,
    height: 42,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});

export default AddingScreen;
