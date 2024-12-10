// import Background from "@/components/Background";
// import { Stack } from "expo-router";
// import { useRouter } from "expo-router";
// import { useEffect, useState } from "react";

// const RootLayout = () => {
//   const router = useRouter();
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login-status

//   // Brug useEffect til at navigere til login, hvis brugeren ikke er logget ind.
//   useEffect(() => {
//     if (!isLoggedIn) {
//       router.replace("./LogInd"); // Naviger til login-siden, hvis brugeren ikke er logget ind
//     }
//   }, [isLoggedIn]);

//   return (
//     <Background>
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="LogInd" options={{ title: "Log Ind" }} />
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       </Stack>
//     </Background>
//   );
// };

// export default RootLayout;

import Background from "@/components/Background";
import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Expo's persistent storage

const RootLayout = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login-status

  // Tjek om der findes en token i AsyncStorage
  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem("authToken");
    setIsLoggedIn(!!token); // Hvis der er en token, er brugeren logget ind
  };

  // Brug useEffect til at navigere baseret på login-status
  useEffect(() => {
    checkLoginStatus();
    if (!isLoggedIn) {
      router.replace("./LogInd"); // Naviger til login-siden, hvis brugeren ikke er logget ind
    }
  }, [isLoggedIn]);

  return (
    <Background>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Logind" options={{ title: "Log Ind" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Background>
  );
};

export default RootLayout;
