import React from "react";
import { ImageBackground, StyleSheet, Image, View } from "react-native";

interface Background2Props {
  children: React.ReactNode;
}

const Background2: React.FC<Background2Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* Baggrundsbillede */}
      <ImageBackground
        source={require("@/assets/images/baggrundint1.png")}
        style={styles.background}
      >
        {/* Logo placeret fast */}
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/fertioLogo.png")}
            style={styles.logo}
          />
        </View>
      </ImageBackground>

      {/* Indhold oven på baggrunden */}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default Background2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    zIndex: 1, // Sørger for, at logoet vises over baggrunden
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
