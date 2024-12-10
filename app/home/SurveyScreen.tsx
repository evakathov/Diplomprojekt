import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
//import { RootStackParamList } from '../App'; // Importer den rigtige type
import { Ionicons } from "@expo/vector-icons"; // Importer Ionicons til knap-ikoner

// const backgroundImage = require('../assets/baggrundint1.png'); // Baggrund

// Definer navigation typen
// type SurveyScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SurveyScreen'>;

const SurveyScreen = () => {
  // Funktion der åbner URL
  const openURL = () => {
    const url =
      "https://www.europeanspermbank.com/da?gad_source=1&gclid=CjwKCAiAxea5BhBeEiwAh4t5KxWknfzXfyhTns4IKZcArKsQ0eisCtF-sS2WffZ08EaQORk1H1qTVRoCbgAQAvD_BwE";
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL: ", err)
    );
  };

  return (
    <View style={styles.container}>
      {/*       <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
       */}{" "}
      <View style={styles.contentContainer}>
        {/* Overskrift */}
        <Text style={styles.title}>Questionnaires</Text>

        {/* Beskrivelse */}
        <Text style={styles.description}>
          As a part of your qualificationprocess, you will have to fill out the
          questionnaires below.
        </Text>
        {/* Knap */}
        <Text style={styles.description}>
          The initial questionnaire should be filled out before your first
          interview. Here you and the donor coordinator will go through your
          answers.
        </Text>
        <TouchableOpacity style={styles.button} onPress={openURL}>
          <Ionicons
            name="checkmark-circle"
            size={24}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Initial questionnaire</Text>
        </TouchableOpacity>
        <Text> </Text>

        <Text style={styles.description}>
          Filling out you donor profile questionnaire is importan for us to make
          the best representation of you for customers to see.
        </Text>
        <TouchableOpacity style={styles.button} onPress={openURL}>
          <Ionicons
            name="checkmark-circle"
            size={24}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Donor profile</Text>
        </TouchableOpacity>
      </View>
      {/*       </ImageBackground>
       */}{" "}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center", // Centrer indholdet
    alignItems: "center", // Centrer indholdet
    resizeMode: "cover", // Baggrund skal dække hele skærmen
  },
  contentContainer: {
    alignItems: "center", // Centrer alle elementer horisontalt
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Lys baggrund for læsbarhed
    borderRadius: 15,
    width: "90%", // Giver lidt bredde til containeren
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    flexDirection: "row", // Gør knappen horisontal
    alignItems: "center",
    backgroundColor: "#A3B78C", // Grøn farve til knappen
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    paddingBottom: 20,
  },
  icon: {
    marginRight: 10, // Afstand mellem ikon og tekst
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default SurveyScreen;
