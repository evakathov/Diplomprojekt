import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Alert,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";
import { LogIndButton } from "../components/LogIndButton";
import { ForgotPasswordButton } from "../components/ForgotPasswordButton";
import { useRouter } from "expo-router";
import DonorStore from "./stores/DonorStore";

const Login: React.FC = () => {
  const [donorId, setDonorId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const [forgotModalVisible, setForgotModalVisible] = useState(false);
  const [contactInput, setContactInput] = useState("");

  const handleLogin = async () => {
    setError(null);

    if (!donorId || !password) {
      setError("Please enter both Username and Password.");
      return;
    }

    // Check for superuser credentials
    if (donorId === "superuser" && password === "secret") {
      Alert.alert("", "Welcome to the SuperUser Site!");
      router.replace("./SuperUserSite");
      return;
    }

    if (donorId !== password) {
      setError("Wrong Username or Password. Please try again.");
      return;
    }

    try {
      const parsedDonorId = parseInt(donorId);
      if (isNaN(parsedDonorId)) {
        setError("Donor ID must be a number.");
        return;
      }

      await DonorStore.fetchDonor(parsedDonorId);

      if (DonorStore.donorObject) {
        Alert.alert("", `Welcome, ${DonorStore.donorObject.firstName}!`);
        router.replace("./(tabs)");
      } else {
        setError("No donor found with the provided ID.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    setForgotModalVisible(true);
  };

  const handleForgotOk = () => {
    if (contactInput.trim() !== "") {
      Alert.alert(
        "", 
        "If the entered email/phone number is recognized, we have sent you a message with a link to reset your password."
      );
    } else {
      Alert.alert("", "The entered email/phone number is not recognized. Please try again.");
    }
    setForgotModalVisible(false);
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
        <EmailInput
          placeholder="Username"
          value={donorId}
          onChangeText={setDonorId}
        />

        <PasswordInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        {error && <Text style={styles.errorText}>{error}</Text>}

        <ForgotPasswordButton onPress={handleForgotPassword} />

        <LogIndButton onPress={handleLogin} />
      </View>

      {/* Modal til glemt password */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={forgotModalVisible}
        onRequestClose={() => setForgotModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setForgotModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Reset Password</Text>
            <Text style={styles.modalDescription}>
              Please enter your email or phone number to reset your password.
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Email or phone number"
              placeholderTextColor="#777"
              onChangeText={setContactInput}
              value={contactInput}
              textAlign="center"
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.actionButton} onPress={handleForgotOk}>
                <Text style={styles.buttonText}>Ok</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => setForgotModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};
export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    position: "static",
    top: 100,
    alignItems: "center",
    backgroundColor: "transparent",
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
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 15,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 10,
    position: "relative",
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 15,
  },
  closeButtonText: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
    marginTop: 15, // rykket lidt op
  },
  modalDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  actionButton: {
    backgroundColor: "#E3EDDC",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    fontSize: 14,
  },
});
