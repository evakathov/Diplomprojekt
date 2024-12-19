import React from "react";
import { ImageBackground, StyleSheet, Image, View } from "react-native";

interface Backgroun5Props {
  children: React.ReactNode;
}

const Background5: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ImageBackground
      source={require("@/assets/images/fert.png")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/fertioLogo.png")}
          style={styles.logo}
        />
      </View>
      {children}
    </ImageBackground>
  );
};

export default Background5;

const styles = StyleSheet.create({
  background: {
    flex: 1, // Sikrer, at baggrundsbilledet dækker hele skærmen
    resizeMode: "cover",
  },
  logoContainer: {
    position: "absolute",
    top: 40, // Flytter logoet endnu tættere på toppen
    left: 15, // Justerer lidt fra venstre kant
    alignItems: "flex-start", // Sørger for, at logoet er venstrestillet
  },
  logo: {
    width: 100, // Juster logoets bredde
    height: 100, // Juster logoets højde
    resizeMode: "contain",
  },
});
