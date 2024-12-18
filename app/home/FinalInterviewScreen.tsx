import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background6 from "@/components/Background6";
import { useRouter } from "expo-router";

export default function FinalInterviewScreen() {
  const router = useRouter();

  return (
    <Background6>
      <View style={styles.container}>
        <Text style={styles.title}>Final Interview</Text>

        {/* Introduktionstekst */}
        <Text style={styles.intro}>
          Under your final interview, we will record an{" "}
          <Text style={styles.highlightText}>audio</Text>, review your{" "}
          <Text style={styles.highlightText}>donor profile</Text>, and you will write a{" "}
          <Text style={styles.highlightText}>handwritten note</Text>.{" "}
          <Text style={styles.italicText}>Find more information below.</Text>
        </Text>

        {/* Audio Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: "/home/PDFViewer",
              params: { url: "https://test-app.donor.4a4b.dk/Audio_interview_questions.pdf" },
            })
          }
        >
          <Text style={styles.buttonText}>Audio</Text>
        </TouchableOpacity>

        {/* Handwritten Notes Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/home/HandwrittenNoteScreen")}
        >
          <Text style={styles.buttonText}>Handwritten Notes</Text>
        </TouchableOpacity>

        {/* Information Details Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/home/InformationDetailsScreen")}
        >
          <Text style={styles.buttonText}>Information Details</Text>
        </TouchableOpacity>
      </View>
    </Background6>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  intro: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "400",
    color: "#222",
    textAlign: "justify",
    marginBottom: 25,
    lineHeight: 24,
  },
  highlightText: {
    color: "#6C8B74",
    fontWeight: "600",
  },
  italicText: {
    color: "#6C8B74", // Grøn farve
    fontStyle: "italic", // Skråskrift
    fontWeight: "600", // Tyk skrift
  },
  button: {
    backgroundColor: "#E3EDDC",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "#333",
  },
});
