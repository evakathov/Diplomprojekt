import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ToDo from "@/components/ToDo";
import Background6 from "@/components/Background6"; // Importer Background6 som baggrund

export default function DonorProfile() {
  return (
    <Background6>
      <View style={styles.container}>
        <View style={styles.opaqueBackground}>
          {/* Overskrift */}
          <Text style={styles.title}>Donor Profile</Text>

          {/* Introduktionstekst */}
          <Text style={styles.description}>
            Your final interview is an essential step in the donor process.
            Based on this interview, we will create your{" "}
            <Text style={styles.highlightText}>donor profile</Text>.
          </Text>
          <Text style={styles.description}>
            To ensure the best possible profile, you need to complete a{" "}
            <Text style={styles.highlightText}>personality test</Text> and
            review the provided{" "}
            <Text style={styles.highlightText}>information</Text>. This will
            help you prepare for the final interview.
          </Text>

          {/* ToDo-komponent */}
          <ToDo qualificationStepNumber={5} />
        </View>
      </View>
    </Background6>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Sørger for, at indholdet starter tættere på toppen
    paddingHorizontal: 20,
    paddingTop: 10, // Mindre padding for at rykke indholdet op
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
    marginTop: 60, // Mindre margin-top for at rykke baggrunden op
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
    lineHeight: 24,
    marginBottom: 15,
  },
  highlightText: {
    color: "#6C8B74",
    fontWeight: "600",
  },
});
