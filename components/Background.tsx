import React from "react";
import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ImageBackground
      source={require("@/assets/images/baggrundhome.png")} // Refererer til baggrundsbilledet
      style={styles.background} // Stil for baggrunden
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

export default Background;

const styles = StyleSheet.create({
  background: {
    flex: 1, // Sikrer, at baggrundsbilledet dækker hele skærmen
    resizeMode: "cover", // Dækker hele baggrunden
  },
  logoContainer: {
    position: "absolute", // Gør det muligt at placere logoet øverst
    top:35, // Juster topmargen for at placere logoet
    left: 20, // Juster venstremargen som nødvendigt
    //zIndex: 10, // Sørger for, at logoet er øverst
  },
  logo: {
    width: 150, // Juster logoets bredde
    height: 120, // Juster logoets højde
    resizeMode: "contain",
  },
  overlay: {
    flex: 1,
    backgroundColor: "transparent", // Sørger for at baggrunden er gennemsigtig
  },
});
