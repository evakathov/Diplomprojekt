import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from "react-native";
import Header from "@/components/Header";
import DonorStore from "./stores/DonorStore";

const SuperUserSite = () => {
  const [donorId, setDonorId] = useState<number>();
  const [stepNumber, setStepNumber] = useState<number>();

  const handleUpdateStep = async (
    donorId: number | undefined,
    currentStatus: boolean
  ) => {
    if (
      donorId === undefined ||
      stepNumber === undefined ||
      isNaN(donorId) ||
      isNaN(stepNumber)
    ) {
      Alert.alert("Error", "Both fields must be filled with valid numbers.");
      return;
    }

    console.log(
      `Toggling step ID: ${donorId}, Current status is: ${currentStatus}`
    );

    if (!currentStatus) {
      try {
        await DonorStore.updateStep(donorId, stepNumber);
        Alert.alert(
          "Success",
          `Step ${stepNumber} has been marked as completed for donor ID: ${donorId}.`
        );
      } catch (error) {
        Alert.alert("Error", "Failed to update step. Please try again.");
      }
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/baggrundlogind.png")}
      style={styles.background}
    >
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Superuser Panel</Text>
        <Text style={styles.infoText}>
          Welcome Superuser! {"\n"}Here you can fill out a donor ID and the
          qualification step that the donor has completed. When you click the
          button below, the donor will be able to see that he has completed the
          qualification step.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Donor ID"
          placeholderTextColor="#888"
          value={donorId ? donorId.toString() : ""}
          onChangeText={(text) =>
            setDonorId(text ? parseInt(text, 10) : undefined)
          }
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Step Number"
          placeholderTextColor="#888"
          value={stepNumber ? stepNumber.toString() : ""}
          onChangeText={(text) =>
            setStepNumber(text ? parseInt(text, 10) : undefined)
          }
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleUpdateStep(donorId, false)}
        >
          <Text style={styles.buttonText}>Complete Step</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#285c4b",
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#85acd7",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SuperUserSite;
