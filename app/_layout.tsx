
import Background from "@/components/Background";
import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Expo's persistent storage

const RootLayout = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login-status
  const [isSuperUser, setIsSuperUser] = useState(false); // State for superuser access

/*
// Tjek om der findes en token i AsyncStorage
  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem("esbToken");
    setIsLoggedIn(!!token); // Hvis der er en token, er brugeren logget ind
  };*/

  // Brug useEffect til at navigere baseret på login-status

  // Check login status and navigate accordingly

  useEffect(() => {
    //checkLoginStatus();
    if (!isLoggedIn) {
      router.replace("./Login");
    } else if (isSuperUser) {
      router.replace("./SuperUserSite");
    }
  }, [isLoggedIn, isSuperUser]);

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
};

export default RootLayout;
