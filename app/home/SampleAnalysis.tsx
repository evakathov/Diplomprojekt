import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SampleButton from "@/components/SampleButton";
import Background4 from "@/components/Background4";

const SampleScreen = () => {
  return (
    <Background4>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.opaqueBackground}>
          {/* Overskrift */}
          <Text style={styles.title}>Sample Analysis</Text>

          {/* Beskrivelse */}
          <Text style={styles.description}>
            Your samples have been approved. You can find the{" "}
            <Text style={styles.highlightText}>test results</Text> below.
          </Text>

          {/* Knapper */}
          <View style={styles.buttonContainer}>
            <SampleButton
              title="Test results - Sample Analysis"
              onPress={() => {}}
              icon="test-tube" // Replace with a valid MaterialCommunityIcons name
              date="October 7, 2024"
            />
          </View>
          <View style={styles.buttonContainer}>
            <SampleButton
              title="Test results - Sample Analysis"
              onPress={() => {}}
              icon="test-tube"
              date="September 22, 2024"
            />
          </View>
          <View style={styles.buttonContainer}>
            <SampleButton
              title="Test results - Sample Analysis"
              onPress={() => {}}
              icon="test-tube"
              date="September 7, 2024"
            />
          </View>
        </View>
      </ScrollView>
    </Background4>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 80, // Justeret for at kompensere for headeren
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  opaqueBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    //elevation: 3,
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#285C4B",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#4F4F4F",
    textAlign: "justify",
    lineHeight: 22,
    marginBottom: 20,
  },
  highlightText: {
    color: "#6C8B74", // Grøn farve for fremhævning
    fontWeight: "600",
  },
  buttonContainer: {
    marginBottom: 10, // Mindre afstand mellem knapperne
  },
});

export default SampleScreen;
