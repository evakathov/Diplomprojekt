import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

interface Background4Props {
  children: React.ReactNode;
}

const Background4: React.FC<Background4Props> = ({ children }) => {
  return (
    <ImageBackground
      source={require("@/assets/images/baggrundlogind.png")} // Opdateret baggrundsbillede
      style={styles.background}
    >
      {/* Logo i øverste venstre hjørne */}
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/fertioLogo.png")} // Logo bevares
          style={styles.logo}
        />
      </View>

      {/* Børn indhold */}
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start", // Indhold starter øverst
  },
  logoContainer: {
    position: "absolute",
    top: 30, // Justér denne værdi for at flytte logoet op/ned
    left: 20, // Justér denne værdi for at flytte logoet til venstre/højre
  },
  logo: {
    width: 100, // Justér størrelsen af logoet
    height: 40,
    resizeMode: "contain",
  },
  overlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent", // Sørger for gennemsigtig baggrund
  },
});

export default Background4;