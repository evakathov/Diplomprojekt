import React, { useEffect, useState } from "react";
import Background from "@/components/Background";
import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { observer } from "mobx-react-lite";
import { tokenStore, LoginStates } from "./stores/TokenStore";
import DonorStore from "./stores/DonorStore";
import { jwtDecode } from "jwt-decode";

const RootLayout = observer(() => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Loading state while verifying token

  useEffect(() => {
    const verifyTokenAndFetchData = async () => {
      try {
        // Retrieve the token from AsyncStorage
        const token = await AsyncStorage.getItem("esbToken");
        if (!token) {
          // No token, navigate to login
          router.replace("./Login");
          return;
        }

        // Decode the token to determine user type
        const decodedToken: any = jwtDecode(token);
        const userObject = JSON.parse(decodedToken.user); // Parse user object
        const { donorId } = userObject;

        // Set the token in the tokenStore (maintains session state)
        tokenStore.token = token;
        tokenStore.state = LoginStates.LOGGED_IN; // Use the enum value

        if (donorId) {
          // Fetch donor details
          await DonorStore.fetchDonor(donorId);

          if (DonorStore.donorObject) {
            router.replace("./(tabs)"); // Navigate to main site for donors
          } else {
            console.error("Failed to fetch donor data.");
            router.replace("./Login"); // Redirect to login on failure
          }
        } else {
          router.replace("./SuperUserSite"); // Navigate to superuser site
        }
      } catch (error) {
        console.error("Token verification or data fetch failed:", error);
        router.replace("./Login"); // Navigate to login on error
      } finally {
        setLoading(false);
      }
    };

    verifyTokenAndFetchData();
  }, [router]);

  // Show loading spinner or screen while verifying token
  if (loading) {
    return (
      <Background>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Loading" options={{ title: "Loading..." }} />
        </Stack>
      </Background>
    );
  }

  return (
    <Background>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" options={{ title: "Login" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="SuperUserSite"
          options={{ title: "SuperUser Site" }}
        />
      </Stack>
    </Background>
  );
});

export default RootLayout;
