const QuestionScreen = ({ navigation, route }) => {
  const handleLogout = () => {
    // Navigate back to the login screen
    navigation.navigate("Login");
  };

  const classData = route.params.classData;

  return (
    <View style={styles.container}>
      <Image source={require("../assets/newlogo.png")} style={styles.logo} />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      <Text style={styles.className}>{classData.name}</Text>
      <Text style={styles.questionNumber}>Question 1</Text>
      <View style={styles.container}>
        <View style={styles.questionBackground}>
          <Text style={styles.questionText}>Who is this?</Text>
          <View style={styles.optionsContainer}>
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
