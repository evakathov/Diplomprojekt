import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Background6 from "@/components/Background6"; // Importer baggrundskomponenten

export default function PersonalityTestScreen() {
  const openPersonalityTest = () => {
    const url = "https://www.16personalities.com/free-personality-test";
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open URL: ", err);
    });
  };

  return (
    <Background6>
      <View style={styles.container}>
        <Text style={styles.title}>Personality Test</Text>

        <Text style={styles.description}>
          To proceed, please take the <Text style={styles.highlightText}>personality test</Text>. 
          This will help us better understand your unique traits. 
        </Text>

        <TouchableOpacity style={styles.button} onPress={openPersonalityTest}>
          <Text style={styles.buttonText}>Take the Personality Test</Text>
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
    paddingTop: 80, // Gør plads til logoet øverst
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
    color: "#555",
    textAlign: "justify",
    marginBottom: 30,
    lineHeight: 24,
  },
  highlightText: {
    color: "#6C8B74", // Grøn farve for at fremhæve
    fontWeight: "600",
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

