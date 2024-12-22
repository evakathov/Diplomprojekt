import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import Background6 from "@/components/Background2"; // Background component
import { Ionicons } from "@expo/vector-icons"; // Icons for buttons

const SurveyScreen = () => {
  // State to track completed buttons
  const [completed, setCompleted] = useState({
    initialQuestionnaire: false,
    donorProfile: false,
  });

  // Function to handle button clicks
  const handleButtonClick = (key: string, url: string) => {
    setCompleted((prev) => ({ ...prev, [key]: true }));
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL: ", err)
    );
  };

  return (
    <Background6>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Questionnaires</Text>
          <Text style={styles.description}>
            As part of your qualification process, you will need to complete the
            following questionnaires.
          </Text>

          {/* Initial Questionnaire */}
          <Text style={styles.description}>
            The initial questionnaire should be completed before your first
            interview.
          </Text>
          <TouchableOpacity
            style={[
              styles.button,
              completed.initialQuestionnaire && styles.buttonCompleted,
            ]}
            onPress={() =>
              handleButtonClick(
                "initialQuestionnaire",
                "https://testdonorportal.europeanspermbank.com/register/?invitation=MGDlhD0xtI9sGHBC01xwmqGDuzAVlsfkWDSJLtOj43XRe41zLJ2p0yvPy3S8uNB4I8HcWG7pMBpktEFHuXKinsgRJqmzRNJ4uzQ1xbaZSThZ4nKd3mPLDvhG2C51r2pb-fyRK1BpcTPyYaFN1mp6kOqNiLnmV3HaySRUXgPj0Zs-&returnUrl=%2Fsperm%2Finfo-details-sperm"
              )
            }
          >
            <Ionicons
              name={
                completed.initialQuestionnaire
                  ? "checkmark-done-circle"
                  : "checkmark-circle"
              }
              size={24}
              color="white"
              style={styles.icon}
            />
            <Text
              style={[
                styles.buttonText,
                completed.initialQuestionnaire && styles.buttonTextCompleted,
              ]}
            >
              Initial Questionnaire
            </Text>
          </TouchableOpacity>

          {/* Donor Profile */}
          <Text style={styles.description}>
            Completing your donor profile helps us present you best to
            customers.
          </Text>
          <TouchableOpacity
            style={[
              styles.button,
              completed.donorProfile && styles.buttonCompleted,
            ]}
            onPress={() =>
              handleButtonClick(
                "donorProfile",
                "https://testdonorportal.europeanspermbank.com/SignIn?returnUrl=%2Fsperm"
              )
            }
          >
            <Ionicons
              name={
                completed.donorProfile
                  ? "checkmark-done-circle"
                  : "checkmark-circle"
              }
              size={24}
              color="white"
              style={styles.icon}
            />
            <Text
              style={[
                styles.buttonText,
                completed.donorProfile && styles.buttonTextCompleted,
              ]}
            >
              Donor Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background6>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  contentContainer: {
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 15,
    width: "90%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A3B78C",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonCompleted: {
    backgroundColor: "#C5D8B6",
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  buttonTextCompleted: {
    textDecorationLine: "line-through",
    textDecorationColor: "#555",
  },
});

export default SurveyScreen;
