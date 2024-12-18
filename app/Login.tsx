import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Alert,
} from "react-native";
import { jwtDecode } from "jwt-decode";
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";
import { LogIndButton } from "../components/LogIndButton";
import { ForgotPasswordButton } from "../components/ForgotPasswordButton";
import { useRouter } from "expo-router";
import { observer } from "mobx-react-lite";
import { tokenStore } from "./stores/TokenStore";
import DonorStore from "./stores/DonorStore";

const Login: React.FC = observer(() => {
  const [username, setUsername] = useState<string>(""); // Username input
  const [password, setPassword] = useState<string>(""); // Password input
  const [error, setError] = useState<string | null>(null); // Error message
  const router = useRouter();

  const handleLogin = async () => {
    setError(null); // Clear previous errors

    if (!username || !password) {
      setError("Please enter both Username and Password.");
      return;
    }

    // Check for superuser credentials
    if (username === "superuser" && password === "secret") {
      Alert.alert("Login Successful", "Welcome to the SuperUser Site!");
      router.replace("./SuperUserSite"); // Redirect to the SuperUser site
      return;
    }

    try {
      // Fetch token from backend
      tokenStore.logindata = { username, password };
      await tokenStore.doLogin();

      if (tokenStore.state === "LoggedIn" && tokenStore.token) {
        // Decode token to extract donorId
        const decodedToken: any = jwtDecode(tokenStore.token);

        let donorId;

        try {
          const userObject = JSON.parse(decodedToken.user); // Parse user string
          donorId = userObject.donorId; // Extract donorId
        } catch (parseError) {
          console.error("Failed to parse user object from token:", parseError);
          setError("Failed to extract donor information from the token.");
          return;
        }

        if (donorId) {
          // Fetch donor details using donorId
          await DonorStore.fetchDonor(donorId);

          if (DonorStore.donorObject) {
            Alert.alert(
              "Login Successful",
              `Welcome, ${DonorStore.donorObject.firstName}!`
            );
            router.replace("./(tabs)"); // Redirect to the homepage
          } else {
            setError("No donor found with the provided ID.");
          }
        } else {
          setError("Failed to extract donor information from the token.");
        }
      } else {
        setError("Wrong Username or Password. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("An unexpected error occurred. Please try again.");
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
        {/* Username Input */}
        <EmailInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        {/* Password Input */}
        <PasswordInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        {/* Error Message */}
        {error && <Text style={styles.errorText}>{error}</Text>}

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
});

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
});

///////////////Original Login////////////////////

// const Login: React.FC = () => {
//   const [donorId, setDonorId] = useState<string>(""); // Donor ID input
//   const [password, setPassword] = useState<string>(""); // Password input
//   const [error, setError] = useState<string | null>(null); // Error message
//   const router = useRouter();

//   // Handle login using DonorStore
//   const handleLogin = async () => {
//     setError(null); // Clear previous errors

//     if (!donorId || !password) {
//       setError("Please enter both Username and Password.");
//       return;
//     }

//     // Check for superuser credentials
//     if (donorId === "superuser" && password === "secret") {
//       Alert.alert("Login Successful", "Welcome to the SuperUser Site!");
//       router.replace("./SuperUserSite"); // Redirect to the SuperUser site
//       return;
//     }

//     if (donorId !== password) {
//       setError("Wrong Username or Password. Please try again.");
//       return;
//     }

//     try {
//       const parsedDonorId = parseInt(donorId);
//       if (isNaN(parsedDonorId)) {
//         setError("Donor ID must be a number.");
//         return;
//       }

//       await DonorStore.fetchDonor(parsedDonorId);

//       if (DonorStore.donorObject) {
//         Alert.alert(
//           "Login Successful",
//           `Welcome, ${DonorStore.donorObject.firstName}!`
//         );
//         router.replace("./(tabs)"); // Redirect to the homepage
//       } else {
//         setError("No donor found with the provided ID.");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       setError("An unexpected error occurred. Please try again.");
//     }
//   };

//   return (
//     <ImageBackground
//       source={require("../assets/images/baggrundlogind.png")}
//       style={styles.background}
//     >
//       <View style={styles.logoContainer}>
//         <Image
//           source={require("../assets/images/fertioLogo.png")}
//           style={styles.logo}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         {/* Donor ID Input */}
//         <EmailInput
//           placeholder="Username"
//           value={donorId}
//           onChangeText={setDonorId}
//         />

//         {/* Password Input */}
//         <PasswordInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//         />

//         {/* Error Message */}
//         {error && <Text style={styles.errorText}>{error}</Text>}

//         {/* Forgot Password Button */}
//         <ForgotPasswordButton
//           onPress={() =>
//             Alert.alert(
//               "Forgot Password",
//               "This feature is not implemented yet."
//             )
//           }
//         />

//         {/* Login Button */}
//         <LogIndButton onPress={handleLogin} />
//       </View>
//     </ImageBackground>
//   );
// };
// export default Login;

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logoContainer: {
//     position: "static",
//     top: 100,
//     alignItems: "center",
//     backgroundColor: "transparent",
//   },
//   logo: {
//     width: 150,
//     height: 80,
//     resizeMode: "contain",
//     marginBottom: 20,
//   },
//   inputContainer: {
//     width: "90%",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 16,
//   },
//   errorText: {
//     color: "red",
//     fontSize: 14,
//     marginTop: 5,
//     marginBottom: 15,
//     textAlign: "center",
//   },
// });
