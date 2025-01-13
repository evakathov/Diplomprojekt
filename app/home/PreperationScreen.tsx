import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background2 from "@/components/Background2";
import { useRouter } from "expo-router";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PreperationScreen() {
  const router = useRouter(); // Initialiser router
  const [isCompleted, setIsCompleted] = useState(false);

  // Læs status fra AsyncStorage ved opstart
  useEffect(() => {
    const fetchStatus = async () => {
      const storedStatus = await AsyncStorage.getItem("PreparationCompleted");
      setIsCompleted(storedStatus === "true");
    };
    fetchStatus();
  }, []);

  // Håndter tryk på knappen
  // Håndter tryk på knappen
  const handleButtonPress = async () => {
    const newStatus = !isCompleted; // Flip the status
    setIsCompleted(newStatus); // Update state
    await AsyncStorage.setItem("PreparationCompleted", newStatus.toString()); // Gem status i AsyncStorage

    // Navigate only when marked as completed
    if (newStatus) {
      router.push({
        pathname: "/home/PDFViewer",
        params: { url: "https://test-app.donor.4a4b.dk/Interview_prep.pdf" },
      });
    }
  };

  return (
    <Background2>
      <View style={styles.scrollContainer}>
        <View style={styles.opaqueBackground}>
          <Text style={styles.title}>Preparation for Interview</Text>

          {/* Introduktionstekst */}
          <Text style={styles.intro}>
            Prepare thoroughly for the interview by reviewing the provided
            materials. Ensure that you have all the necessary information ready,
            including details about your{" "}
            <Text style={styles.highlightText}>family</Text> and{" "}
            <Text style={styles.highlightText}>medical history</Text>.
          </Text>

          {/* Button */}
          <TouchableOpacity
            style={[styles.button, isCompleted && styles.buttonPressed]}
            onPress={handleButtonPress}
          >
            <Feather
              name="file-text"
              size={20}
              color={isCompleted ? "#4F4F4F" : "#4F4F4F"} // Ændret farve hvis trykket
              style={styles.icon}
            />
            <Text
              style={[
                styles.buttonText,
                isCompleted && styles.buttonTextPressed,
              ]}
            >
              Preparation material
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background2>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 90, // Starter 1,5 cm længere nede
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
    color: "#555",
    textAlign: "left", // Juster tekst til venstre
    marginBottom: 25,
    lineHeight: 24,
  },
  highlightText: {
    color: "#6C8B74",
    fontWeight: "600",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3EDDC", // Light green background
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "flex-start", // Venstrejusterer indholdet
    marginBottom: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonPressed: {
    backgroundColor: "#C5D8B6", // Ændret farve når trykket
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "#4F4F4F",
    marginLeft: 10, // Space between icon and text
  },
  buttonTextPressed: {
    textDecorationLine: "line-through", // Streg gennem teksten
    color: "#4F4F4F", // Samme farve, så det matcher stilen
    textDecorationColor: "#555", // Stregfarve
  },
  icon: {
    marginRight: 10, // Space between icon and text
  },
});
