import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import ContactComponent1 from "@/components/ContactComponent1";
import ToDo from "@/components/ToDo";
import Background3 from "@/components/Background3";

const MedicalExamination = () => {
  return (
    <Background3>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.paddingContainer}></View>

        {/* Hvid boks */}
        <View style={styles.mainBox}>
          {/* Overskrift */}
          <Text style={styles.title}>Medical Examination</Text>

          {/* Beskrivelse */}
          <Text style={styles.infoText}>
            You will need to undergo a thorough medical examination with a
            doctor we collaborate with. You must schedule the appointment
            yourself; you can find the contact information below. Additionally,
            please make sure to read the information about the medical
            examination, so you know what to expect.
          </Text>

          {/* ToDo-komponent */}
          <View style={styles.toDoContainer}>
            <ToDo qualificationStepNumber={3}></ToDo>
          </View>

          {/* Kontakt informationer */}
          <View style={styles.contactComponent}>
            <ContactComponent1 />
          </View>
        </View>
      </ScrollView>
    </Background3>
  );
};

const styles = StyleSheet.create({
  paddingContainer: {
    marginTop: 80,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  mainBox: {
    backgroundColor: "#ffffff", // Hvid baggrund
    padding: 20,
    borderRadius: 18,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#285C4B", // Grøn farve
    marginBottom: 15,
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    color: "#4F4F4F",
    paddingBottom: 15,
    lineHeight: 24,
    textAlign: "left",
  },
  toDoContainer: {
    marginBottom: -20, // Juster afstand mellem ToDo-knappen og kontaktkomponent
  },
  contactComponent: {
    width: "100%", // Fylder hele bredden af `mainBox`
    alignSelf: "center", // Justerer midt på
    marginVertical: 10, // Giver lidt afstand op/ned
  },
});

export default MedicalExamination;
