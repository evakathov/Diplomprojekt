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
    paddingBottom: 20,
  },
  icon: {
    marginRight: 10, // Afstand mellem ikon og tekst
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black", // Sort tekst for kontrast mod gul baggrund
  },
});

export default SurveyScreen;

