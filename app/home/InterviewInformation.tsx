import Interview1Button from "@/components/Interview1Button";
import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function InterviewInformation() {
  return (
    <View>
      <Text>InterviewInformation Screen</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Overskrift */}
          <Text style={styles.title}>Step 2 - Interview</Text>
          
          {/* Beskrivelse */}
          <Text style={styles.description}>
            Before your interview, you must complete a survey and thoroughly prepare by reviewing the provided preparation materials. It is important to be well-prepared, as this will help ensure a successful interview process.
          </Text>
          
          {/* Knapper */}
          <Interview1Button
            title="Survey"
            onPress={() => navigation.navigate('SurveyScreen')} // Navigere til SurveyScreen
            icon="document" // Sørg for at bruge korrekt ikon navn
          />
          <Interview1Button
            title="Preparation for Interview"
            onPress={() => navigation.navigate('PreparationScreen')} // Navigere til PreparationScreen
            icon="book" // Sørg for at bruge korrekt ikon navn
          />
          <Interview1Button
            title="Appointment"
            onPress={() => navigation.navigate('AppointmentScreen')} // Navigere til AppointmentScreen
            icon="calendar" // Sørg for at bruge korrekt ikon navn
          />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9F9',
    },
    backgroundImage: {
      flex: 1, // Sørger for at baggrundsbilledet fylder hele skærmen
      justifyContent: 'center', // Justering af indhold i baggrundsbilledet
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      paddingTop: 30, // Justering for overskriften
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
      textAlign: 'left', // Sørg for at overskriften starter til venstre
    },
    description: {
      fontSize: 16,
      color: '#555',
      marginBottom: 30,
    },
  });