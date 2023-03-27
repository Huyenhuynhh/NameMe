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
import { Picker } from "@react-native-picker/picker";

const AddingScreen = ({ navigation }) => {
  const [selectedCourse, setSelectedCourse] = useState("Choose a course");
  const [studentName, setStudentName] = useState("");

  const handleAdd = () => {
    console.log('Selected course: ', selectedCourse);
    console.log()
  }

  const courses = [
    // Add your courses here
    "Course 1",
    "Course 2",
    "Course 3",
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
        <Picker
          selectedValue={selectedCourse}
          style={styles.coursePicker}
          onValueChange={(itemValue) => setSelectedCourse(itemValue)}
        >
          <Picker.Item label="Choose a course" value="Choose a course" />
          {courses.map((course, index) => (
            <Picker.Item key={index} label={course} value={course} />
          ))}
        </Picker>
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
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

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
    marginTop: -5,
    fontSize: 18,
    color: "#FFFFFF",
  },
  coursePickerContainer: {
    marginTop: 5,
    height: 58,
    borderRadius: 10,
    backgroundColor: "#363434",
    justifyContent: "center",
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
    borderRadius: 10,
    backgroundColor: "#363434",
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
    borderRadius: 10,
    backgroundColor: "#363434",
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
