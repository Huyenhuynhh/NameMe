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
