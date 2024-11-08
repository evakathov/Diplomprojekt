import React from "react";
import { ImageBackground, StyleSheet, Image, View } from "react-native";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ImageBackground
      source={require("@/assets/images/fert.png")} // Refererer til baggrundsbilledet
      style={styles.background} // Stil for baggrunden
    >
      {children}
    </ImageBackground>
  );
};

export default Background;

const styles = StyleSheet.create({
  background: {
    flex: 1, // Sikrer, at baggrundsbilledet dækker hele skærmen
    resizeMode: "cover", // Dækker hele baggrunden
  },
  logoContainer: {
    position: "absolute", // Gør det muligt at placere logoet øverst
    top: 50, // Juster topmargen for at placere logoet
    left: 20, // Juster venstremargen som nødvendigt
    zIndex: 10, // Sørger for, at logoet er øverst
  },
  logo: {
    width: 120, // Juster logoets bredde
    height: 50, // Juster logoets højde
    resizeMode: "contain", // Bevarer logoets aspect ratio
  },
});
