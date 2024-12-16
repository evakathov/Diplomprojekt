import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background2 from "@/components/Background2"; // Bruger baggrundskomponenten

const PreperationScreen = () => {
  const handleButtonPress = () => {
    // Håndter knaptryk, f.eks. naviger eller vis en alert
    console.log("Button Pressed");
  };

  return (
    <Background2>
      <View style={styles.container}>
        {/* Tekstbeskrivelse */}
        <Text style={styles.description}>
          Prepare thoroughly for the interview by reviewing the provided materials. 
          Ensure that you have all the necessary information ready, including details about 
          your family and medical history.
        </Text>

        {/* Knap */}
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>View Preperation Materials</Text>
        </TouchableOpacity>
      </View>
    </Background2>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centrerer indholdet vertikalt
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center", // Centrerer teksten horisontalt
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FFD700", // Gul farve til knappen
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center", // Centrerer knappen horisontalt
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black", // Sort tekst for kontrast
  },
});

export default PreperationScreen;










