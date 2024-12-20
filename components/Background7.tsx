import React from "react";
import { ImageBackground, StyleSheet, Image, View } from "react-native";

interface Background7Props {
  children: React.ReactNode;
}

const Background7: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ImageBackground
      source={require("@/assets/images/baggrundhome.png")} // Du kan ændre baggrundsbilledet, hvis nødvendigt
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/fertioLogo.png")} // Du kan ændre logoet, hvis nødvendigt
          style={styles.logo}
        />
      </View>
      {children}
    </ImageBackground>
  );
};

export default Background7;

const styles = StyleSheet.create({
  background: {
    flex: 1, // Sikrer, at baggrundsbilledet dækker hele skærmen
    resizeMode: "cover",
  },
  logoContainer: {
    position: "absolute",
    top: -10, // Du kan ændre denne værdi for at justere logoets placering
    left: 15, // Justerer lidt fra venstre kant
    alignItems: "flex-start", // Sørger for, at logoet er venstrestillet
  },
  logo: {
    width: 100, // Juster logoets bredde
    height: 100, // Juster logoets højde
    resizeMode: "contain",
  },
});
