import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import Background6 from "@/components/Background2"; // Behold eksisterende baggrund

const SurveyScreen = () => {
  const openURL = () => {
    const url =
      "https://www.europeanspermbank.com/da?gad_source=1&gclid=CjwKCAiAxea5BhBeEiwAh4t5KxWknfzXfyhTns4IKZcArKsQ0eisCtF-sS2WffZ08EaQORk1H1qTVRoCbgAQAvD_BwE";
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL: ", err)
    );
  };

  return (
    <Background6>
      <View style={styles.container}>
        {/* Beskrivelse */}
        <Text style={styles.description}>
          Before your interview, please complete the survey. It will help us
          understand your profile better.
        </Text>

        {/* Knap */}
        <TouchableOpacity style={styles.button} onPress={openURL}>
          <Text style={styles.buttonText}>Fill out questionnaire</Text>
        </TouchableOpacity>
      </View>
    </Background6>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Flyt indholdet op
    paddingTop: 87, // Flytter teksten 1 cm ned
    paddingHorizontal: 20, // Tilføj lidt indrykning fra venstre og højre
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "left", // Juster teksten fra venstre mod højre
    marginBottom: 20, // Reducér afstand til knappen
  },
  button: {
    backgroundColor: "#FFD700", // Gul farve til knappen
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center", // Centraliserer teksten vertikalt
    justifyContent: "center", // Centraliserer teksten horisontalt
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black", // Sort tekst for kontrast mod gul baggrund
  },
});

export default SurveyScreen;

