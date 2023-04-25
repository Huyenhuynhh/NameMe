import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuizResult = ({ route }) => {
  const { result } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        {result === "correct"
          ? "Congratulations! You answered the question correctly."
          : "Oops! You answered the question incorrectly."}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 20, // Add some padding to avoid text overflow
  },
});

export default QuizResult;
