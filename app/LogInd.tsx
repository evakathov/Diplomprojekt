import React, { useState } from "react";
import { View, StyleSheet, Image, ImageBackground, Alert } from "react-native";
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";
import { LogIndButton } from "../components/LogIndButton";
import { ForgotPasswordButton } from "../components/ForgotPasswordButton";
import { useRouter } from "expo-router";
import DonorStore from "./stores/DonorStore";

const LogInd: React.FC = () => {
  const [donorId, setDonorId] = useState<string>(""); // Donor ID input
  const [password, setPassword] = useState<string>(""); // Unused password
  const router = useRouter();

  // Handle login using DonorStore
  const handleLogin = async () => {
    if (!donorId) {
      Alert.alert("Login Error", "Please enter your Donor ID.");
      return;
    }

    try {
      const parsedDonorId = parseInt(donorId);
      if (isNaN(parsedDonorId)) {
        Alert.alert("Login Error", "Donor ID must be a number.");
        return;
      }

      await DonorStore.fetchDonor(parsedDonorId);

      if (DonorStore.donorObject) {
        Alert.alert(
          "Login Successful",
          `Welcome, ${DonorStore.donorObject.firstName}!`
        );
        router.replace("./(tabs)"); // Redirect to the homepage
      } else {
        Alert.alert(
          "Login Error",
          "No donor found with the provided ID. Please try again."
        );
      }
    } catch (error) {
      console.error("Login failed:", error);
      Alert.alert(
        "Login Error",
        "An unexpected error occurred. Please try again."
      );
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/baggrundlogind.png")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/fertioLogo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputContainer}>
        {/* Donor ID Input */}
        <EmailInput
          placeholder="Enter Donor ID"
          value={donorId}
          onChangeText={setDonorId}
        />

        {/* Password Input (hardcoded, no functionality) */}
        <PasswordInput
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
        />

        {/* Forgot Password Button */}
        <ForgotPasswordButton
          onPress={() =>
            Alert.alert(
              "Forgot Password",
              "This feature is not implemented yet."
            )
          }
        />

        {/* Login Button */}
        <LogIndButton onPress={handleLogin} />
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
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: "contain",
    marginBottom: 20,
  },
  inputContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});

export default LogInd;



