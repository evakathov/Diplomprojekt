import React from "react";
import { ImageBackground, StyleSheet, Image, View } from "react-native";

interface Background2Props {
  children: React.ReactNode;
}

const Background2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ImageBackground
      source={require("@/assets/images/baggrundsample.png")}
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
    flex: 1,
    resizeMode: "cover", // Sørger for, at baggrundsbilledet fylder hele skærmen
    position: "absolute", // Holder baggrunden på plads
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logoContainer: {
    position: "absolute",
    top: -10, // Justér placeringen tættere på toppen
    left: 15, // Justér fra venstre kant
    //zIndex: 1, // Sørger for, at logoet vises over baggrunden
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    marginTop: 90, // Sørger for plads under logoet
  },
});
