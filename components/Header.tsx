// components/Header.tsx
import React from "react";
import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("@/assets/images/fertioLogo.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f5f1d4",
    padding: 20,
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  headerContainer: {},
  logo: {
    width: 200, // Juster bredde på billedet
    height: 100, // Juster højde på billedet
    resizeMode: "contain", // Bevarer billedets proportioner
  },
});
export default Header;
