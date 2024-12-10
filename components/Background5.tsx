import React from "react";
import { ImageBackground, StyleSheet, Image, View } from "react-native";

interface Background2Props {
  children: React.ReactNode;
}

const Background2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

export default Background2;

const styles = StyleSheet.create({
  background: {
    flex: 1, // Sikrer, at baggrundsbilledet dækker hele skærmen
    resizeMode: "cover",
  },
  logoContainer: {
    position: "absolute",
    top: 20
    , // Flyt logoet tættere på toppen
    left: 10, // Hold det tæt på venstre hjørne
  },
  logo: {
    width: 100, // Juster logoets størrelse
    height: 100,
    resizeMode: "contain",
  },
});