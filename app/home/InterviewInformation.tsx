import ToDo from "@/components/ToDo";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function InterviewInformation() {
  const router = useRouter();

  return (
    // Julianes_RN_Branch
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Overskrift */}
        <Text style={styles.title}>Step 2 - Interview</Text>
        {/* Beskrivelse */}
        <Text style={styles.description}>
          Before your interview, you must complete a survey and thoroughly
          prepare by reviewing the provided preparation materials. It is
          important to be well-prepared, you can see how and what to prepare for
          clikcking the button below. This will help ensure a successful
          interview process.
        </Text>

        <ToDo qualificationStepNumber={2} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f6e0",
  },
  backgroundImage: {
    flex: 1, // Sørger for at baggrundsbilledet fylder hele skærmen
    justifyContent: "center", // Justering af indhold i baggrundsbilledet
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 30, // Justering for overskriften
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "left", // Sørg for at overskriften starter til venstre
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
});
