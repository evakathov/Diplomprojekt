import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ContactComponent1 from "@/components/ContactComponent1";
import ToDo from "@/components/ToDo";
import Background3 from "@/components/Background3"; // Importer Background3

const MedicalExamination = () => {
  return (
    <Background3>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.paddingContainer}></View>
        <View style={styles.opaqueBackground}>
          {/* Hardcoded Tekst */}
          <Text style={styles.infoText}>
            You will need to undergo a thorough medical examination with a
            doctor we collaborate with. You must schedule the appointment
            yourself; you can find the contact information below. Additionally,
            please make sure to read the information about the medical
            examination, so you know what to expect.
          </Text>

          {/* ToDo Button */}
          <View style={styles.toDoContainer}>
            <ToDo qualificationStepNumber={3}></ToDo>
          </View>

          {/* Kontakt informationer */}
          <View style={styles.contactComponentContainer}>
            <ContactComponent1 />
          </View>
        </View>
      </ScrollView>
    </Background3>
  );
};

const styles = StyleSheet.create({
  paddingContainer: {
    marginTop: 65,
  },
  opaqueBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // White with 80% opacity
    padding: 10, // Optional, for spacing
    borderRadius: 18, // Optional, for rounded corners
    marginBottom: 5, // Optional, for spacing between sections
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#888",
    paddingHorizontal: 20,
    textAlign: "left",
    lineHeight: 24,
    paddingTop: 10,
  },
  toDoContainer: {
    marginBottom: 10, // Reduceret afstand mellem knap og næste sektion (flyttet 0,4 cm op)
  },
  contactComponentContainer: {
    marginTop: -45, // Flytter boksen 0,5 cm op
  },
});

export default MedicalExamination;
