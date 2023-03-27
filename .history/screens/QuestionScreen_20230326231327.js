import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const QuestionScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Navigate back to the login screen
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/newlogo.png")} style={styles.logo} />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      <Text style={styles.className}>CMSC 312</Text>
      <Text style={styles.questionNumber}>Question 1</Text>
      <View style={style.container}>
        <View style={styles.questionBackground}>
          <Text style={styles.questionText}>{question}</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.option}>
              <Image
                style={styles.optionImage}
                source={"https://media.gq.com/photos/56bb8a91b89407780bd7d454/16:9/w_2560%2Cc_limit/bieber-16-9-longform.jpg"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Image
                style={styles.optionImage}
                source={
                  "https://media.gq.com/photos/56bb8a91b89407780bd7d454/16:9/w_2560%2Cc_limit/bieber-16-9-longform.jpg"
                }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Image
                style={styles.optionImage}
                source={
                  "https://media.gq.com/photos/56bb8a91b89407780bd7d454/16:9/w_2560%2Cc_limit/bieber-16-9-longform.jpg"
                }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Image
                style={styles.optionImage}
                source={
                  "https://media.gq.com/photos/56bb8a91b89407780bd7d454/16:9/w_2560%2Cc_limit/bieber-16-9-longform.jpg"
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.backButton}>
          <LinearGradient>
            colors={["#030303", "rgba(255,255,255,0.8)"]}
            style={styles.gradient}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logo: {
    width: 95,
    height: 64,
    alignSelf: "center",
    marginTop: 43,
  },
  logoutButton: {
    backgroundColor: "#000",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#fff",
    width: 70,
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 45,
    right: 20,
  },
  logoutText: {
    color: "#fff",
    fontSize: 15,
  },
  className: {
    color: "#fff",
    fontSize: 18,
    marginTop: 30,
    marginLeft: 31,
  },
  questionNumber: {
    color: "#fff",
    fontSize: 25,
    marginTop: 20,
    marginLeft: 132,
  },
  questionBackground: {
    width: 316,
    height: 449,
    borderRadius: 20,
    backgroundColor: 'rgba(55, 49, 49, 0.87)',
    alignItems: 'center',
    paddingTop: 29,
  },
  questionText: {
    width: 247, 
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 31, 
  }, 
  optionsContainer: {
    flextDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  option: {
    width: 115,
    height: 115,
    marginBottom: 20,
  },
  optionImage: {
    width: '100%',
    height: "100%",
    resizeMode: 'cover'
  },
  backButton: {
    width: 198, 
    height: 56,
    borderRadius: 20,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 0.5,
    marginTop: 40,
  },
  gradient: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default QuestionScreen;
