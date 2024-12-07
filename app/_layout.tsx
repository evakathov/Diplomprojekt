import Background from "@/components/Background";
import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login-status
  const [isSuperUser, setIsSuperUser] = useState(false); // State for superuser access

  // Check login status and navigate accordingly
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("./LogInd");
    } else if (isSuperUser) {
      router.replace("./SuperUserSite");
    }
  }, [isLoggedIn, isSuperUser]);

  return (
    <Background>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogInd" options={{ title: "Log Ind" }} />
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
