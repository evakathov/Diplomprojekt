import React, { useState } from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { EmailInput } from "../../components/EmailInput";
import { PasswordInput } from "../../components/PasswordInput";
import { LogIndButton } from "../../components/LogIndButton";
import { ForgotPasswordButton } from "../../components/ForgotPasswordButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/images/baggrundsample.png")}
      style={styles.background}
    >
      {/* Logo placeret uden for den centrale boks */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/fertioLogo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.container}>
        {/* Email Input */}
        <EmailInput value={email} onChangeText={setEmail} />

        {/* Password Input */}
        <PasswordInput value={password} onChangeText={setPassword} />

        {/* Forgot Password Link */}
        <ForgotPasswordButton
          onPress={() => console.log("Forgot Password Pressed")}
        />

        {/* Login Button */}
        <LogIndButton onPress={() => console.log("Login Pressed")} />
      </View>
    </ImageBackground>
  );
}

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
  container: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
