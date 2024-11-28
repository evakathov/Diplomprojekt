import Background from "@/components/Background";
import { Link, Stack } from "expo-router";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useEffect } from "react";

const RootLayout = () => {
  // const router = useRouter();
  // const isLoggedIn = false; // Udskift dette med din login-logik.

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.replace("./login"); // Naviger til loginsiden.
  //   }
  // }, [isLoggedIn]);

  return (
        <Background>
    <Stack>
      {/* <Stack.Screen name="login" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
          </Background>

  );
};
  export default RootLayout;


// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";
// import "react-native-reanimated";

// import { useColorScheme } from "@/hooks/useColorScheme";

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//     </ThemeProvider>
//   );
// }
