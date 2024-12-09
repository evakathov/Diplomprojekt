import React from "react";
import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

interface Background2Props {
  children: React.ReactNode;
}

const Background2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ImageBackground
      source={require("@/assets/images/baggrundint1.png")}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

export default Background2;

const styles = StyleSheet.create({
  background: {
    flex: 1, // Sikrer, at baggrundsbilledet dækker hele skærmen
    resizeMode: "cover", // Dækker hele baggrunden
  },
  overlay: {
    flex: 1,
    backgroundColor: "transparent", // Sørger for at baggrunden er gennemsigtig
  },
});
