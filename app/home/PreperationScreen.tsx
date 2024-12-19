import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background2 from "@/components/Background2";
import { useRouter } from "expo-router"; // Importér useRouter

export default function PreperationScreen() {
  const router = useRouter(); // Initialiser router

  return (
    <Background2>
      <View style={styles.container}>
        <Text style={styles.title}>Preparation for Interview</Text>

        {/* Introduktionstekst */}
        <Text style={styles.intro}>
          Prepare thoroughly for the interview by reviewing the provided materials. 
          Ensure that you have all the necessary information ready, including details about 
          your <Text style={styles.highlightText}>family</Text> and <Text style={styles.highlightText}>medical history</Text>. 
          <Text style={styles.italicText}> Get ready to make a great impression.</Text>
        </Text>

        {/* Audio Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: "/home/PDFViewer",
              params: { url: "https://test-app.donor.4a4b.dk/Interview_prep.pdf" },
            })
          }
        >
          <Text style={styles.buttonText}>Preperation material</Text>
        </TouchableOpacity>
      </View>
    </Background2>
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
    color: "#285C4B",
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







