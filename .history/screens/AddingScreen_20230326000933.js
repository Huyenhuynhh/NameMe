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

const AddingScreen = ({ navigation }) => {
  const [selectedCourse, setSelectedCourse] = useState("Choose a course");
  const [studentName, setStudentName] = useState("");

  const handleAdd = () => {
    console.log('Selected course: ', selectedCourse);
    console.log('Student name: ', studentName);
  }

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/newlogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.courseLabel}>Course</Text>
      <View style={styles.coursePickerContainer}>
        <RNPickerSelect
          onValueChange={(ValueItems) => setSelectedCourse(ValueItems)}
          items={courses}
          style={pickerSelectStyles}
          value={selectedCourse}
          placeholder={{
            label: "Select a course...",
            value: null,
            color: "#9EA0A4",
          }}
        />
      </View>
      <Text style={styles.studentLabel}>Student</Text>
      <TouchableOpacity style={styles.uploadContainer}>
        <Text style={styles.uploadText}>Upload Photo</Text>
      </TouchableOpacity>
      <Text style={styles.nameLabel}>Name</Text>
      <TextInput
        style={styles.nameInput}
        value={studentName}
        onChangeText={setStudentName}
        placeholder="Enter student name"
        placeholderTextColor="#FFFFFF78"
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
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
