import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ContactComponent1 from "@/components/ContactComponent1";
import ToDo from "@/components/ToDo";
import Background3 from "@/components/Background3"; // Importer Background3

const MedicalExamination = () => {
  return (
    <Background3>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Hardcoded Tekst */}
        <Text style={styles.infoText}>
          You will need to undergo a thorough medical examination with a doctor
          we collaborate with. You must schedule the appointment yourself; you
          can find the contact information below. Additionally, please make sure
          to read the information about the medical examination, so you know
          what to expect.
        </Text>

        {/* ToDo Button */}
        <View style={styles.toDoContainer}>
          <ToDo qualificationStepNumber={3}></ToDo>
        </View>

        {/* Kontakt informationer */}
        <View style={styles.contactComponentContainer}>
          <ContactComponent1 />
        </View>
      </ScrollView>
    </Background3>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 75, // Flytter hele teksten tættere på toppen (reduceret fra 80)
    paddingBottom: 50,
  },
  infoText: {
    fontSize: 16,
    color: "#888",
    marginBottom: 5,
    paddingHorizontal: 20,
    textAlign: "left",
  },
  toDoContainer: {
    marginBottom: 10, // Reduceret afstand mellem knap og næste sektion (flyttet 0,4 cm op)
  },
  contactComponentContainer: {
    marginTop: -45, // Flytter boksen 0,5 cm op
  },
});

export default MedicalExamination;

