import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SampleButton from "@/components/SampleButton";
import Background4 from "@/components/Background4";

const SampleScreen = () => {
  return (
    <View style={styles.container}>
      <Background4>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Beskrivelse */}
          <Text style={styles.description}>
            Your samples have been approved. You can find the test results below.
          </Text>

          {/* Knapper */}
          <View style={styles.buttonContainer}>
            <SampleButton
              title="Test results - Sample Analysis"
              onPress={() => {}}
              icon="test-tube"
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
        </ScrollView>
      </Background4>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 100,
    paddingHorizontal: 20,
    paddingBottom: 90,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "left",
  },
  buttonContainer: {
    width: "100%", // Gør knappen bredere
  },
  button: {
    backgroundColor: "#2E7D32", // Mørkegrøn farve
    paddingVertical: 18, // Tykkelse
    paddingHorizontal: 25, // Gør knappen længere
    borderRadius: 8, // Afrundede hjørner
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "row",
    width: "100%", // Fuld bredde
    alignSelf: "center", // Centrerer knappen
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF", // Hvid tekst for kontrast
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default SampleScreen;
