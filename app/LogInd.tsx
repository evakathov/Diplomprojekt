import React, { useState } from "react";
import { View, StyleSheet, Image, ImageBackground, Alert } from "react-native";
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";
import { LogIndButton } from "../components/LogIndButton";
import { ForgotPasswordButton } from "../components/ForgotPasswordButton";
import { useRouter } from "expo-router";

const LogInd: React.FC = () => {
  const [email, setEmail] = useState<string>(""); // DonorID
  const [password, setPassword] = useState<string>(""); // DonorID som kodeord
  const router = useRouter();

  // Håndtering af login
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Login Error", "Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("https://test-app.donor.4a4b.dk/api/donors/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          donorId: parseInt(email), // Forvent at donorId er en int
          password: password,
        }),
      });

      if (response.ok) {
        const donorData = await response.json();
        Alert.alert("Login Successful", `Welcome, ${donorData.firstName}!`);
        router.replace("./(tabs)");
      } else if (response.status === 401) {
        Alert.alert(
          "Login Error", "Incorrect ID or password. Please try again.");
      } else {
        const errorData = await response.text();
        console.error("Login fejl:", errorData);
        Alert.alert("Login Error", "An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Login fejlede:", error);
      Alert.alert("Login Error", "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/baggrundlogind.png")} // Baggrundsbillede ændret til baggrundlogind.png
      style={styles.background}
    >
      {/* Logo placeret uden for den centrale boks */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/fertioLogo.png")} // Logo
          style={styles.logo}
        />
      </View>

      <View style={styles.inputContainer}>
        {/* Email Input */}
        <EmailInput value={email} onChangeText={setEmail} />

        {/* Password Input */}
        <PasswordInput value={password} onChangeText={setPassword} />

        {/* Forgot Password Link */}
        <ForgotPasswordButton
          onPress={() => Alert.alert("Glemt kodeord", "Funktionaliteten er ikke implementeret endnu.")}
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



