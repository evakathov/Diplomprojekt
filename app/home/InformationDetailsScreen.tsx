import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Background6 from "@/components/Background6";

export default function InformationDetailsScreen() {
  return (
    <Background6>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Information Details</Text>

        {/* Profile Review */}
        <Text style={styles.sectionTitle}>Profile review</Text>
        <Text style={styles.sectionDescription}>
          We review your donor profile together.
        </Text>

        {/* Interview */}
        <Text style={styles.sectionTitle}>Interview</Text>
        <Text style={styles.sectionDescription}>
          We will do a short interview in <Text style={styles.boldText}>English</Text>. The interview is recorded and will be a part of your online donor profile. This interview is available as an audio recording. You can find more information about this under <Text style={styles.highlightText}>Audio</Text>.
        </Text>

        {/* Handwritten Greetings */}
        <Text style={styles.sectionTitle}>Handwritten greetings</Text>
        <Text style={styles.sectionDescription}>
          Your online profile will include a handwritten note with a greeting to a potential donor child. Find the <Text style={styles.highlightText}>guide</Text> and <Text style={styles.highlightText}>template</Text> under <Text style={styles.highlightText}>Handwritten Note</Text>.
        </Text>

        {/* Questions */}
        <Text style={styles.sectionTitle}>Do you have any questions?</Text>
        <Text style={styles.sectionDescription}>
          If you have any questions, you are very welcome to reply to this email or call <Text style={styles.highlightText}>+45 8877 1757</Text>.
        </Text>

        {/* Final Greeting */}
        <Text style={styles.finalGreeting}>We look forward to seeing you!</Text>
      </ScrollView>
    </Background6>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 90,
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Georgia",
    fontWeight: "600", // Tyk skrift
    color: "#333",
    marginBottom: 5,
    marginTop: 15,
  },
  sectionDescription: {
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#222",
    textAlign: "justify",
    lineHeight: 24,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
    color: "#222",
  },
  highlightText: {
    color: "#6C8B74",
    fontWeight: "600",
  },
  finalGreeting: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    marginTop: 15,
  },
});
