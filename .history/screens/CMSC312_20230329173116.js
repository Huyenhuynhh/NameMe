import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
const CMSC312Quiz = ({ navigation }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Which photo is Justin Bieber?",
      options: [
        { id: 1, image: require("../assets/photo1.jpeg") },
        { id: 2, image: require("../assets/photo2.jpeg") },
        { id: 3, image: require("../assets/photo3.png") },
        { id: 4, image: require("../assets/photo4.png") },
      ],
      answer: 2,
    },
  ];

  const handleOptionPress = (optionId) => {
    setSelectedOption(optionId);
  };

  const handlePrevButtonPress = () => {
    setQuestionIndex((prevIndex) => prevIndex - 1);
    setSelectedOption(null);
  };

  const handlecheckButtonPress = () => {
    setQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
  };

  const handleFinishButtonPress = () => {
    navigation.navigate("QuizResult");
  };

  const currentQuestion = questions[questionIndex];

  return (
    <View style={styles.container}>
      <Image source={require("../assets/newlogo.png")} style={styles.logo} />
      <View style={styles.questionBackground}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.option,
                selectedOption === option.id && styles.selectedOption,
              ]}
              onPress={() => handleOptionPress(option.id)}
            >
              <Image source={option.image} style={styles.optionImage} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.prevButton}
        onPress={handlePrevButtonPress}
        disabled={questionIndex === 0}
      >
        <Text style={styles.buttonText}>Prev</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.checkButton}
        onPress={
          questionIndex === questions.length - 1
            ? handleFinishButtonPress
            : handlecheckButtonPress
        }
        disabled={selectedOption === null}
      >
        <Text style={styles.buttonText}>
          {questionIndex === questions.length - 1 ? "Finish" : "Next"}
        </Text>
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
    width: 150,
    height: 80,
    resizeMode: "contain",
    marginTop: 40,
  },
  questionBackground: {
    height: 449,
    width: 316,
    left: 37,
    top: 226,
    borderRadius: 20,
    position: "absolute",
    marginTop: -80,
    backgroundColor: "#373131DE",
    justifyContent: "center",
    alignItems: "center",
  },
  questionText: {
    fontFamily: "Inter-Regular",
    fontSize: 20,
    lineHeight: 24,
    color: "#FFFFFF",
    position: "absolute",
    top: 255,
    left: 74,
    width: 247,
    height: 24,
    backgroundColor: "transparent",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  option: {
    width: 115,
    height: 115,
    backgroundColor: "transparent",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  optionImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  selectedOption: {
    borderColor: "#FFD700",
  },
  prevButton: {
    height: 56,
    width: 88,
    borderRadius: 20,
    backgroundColor: "#373131",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 45,
    left: 37,
  },
  checkButton: {
    height: 56,
    width: 198,
    borderRadius: 20,
    backgroundColor: "#030303",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 45,
    right: 37,
    backgroundGradientFrom: "#030303",
    backgroundGradientTo: "#030303",
    borderWidth: 0.5,
    borderColor: "#FFFFFFCC",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 22,
  },
});

export default CMSC312Quiz;
