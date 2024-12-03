import React from "react";
import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import LogoutButton from "@/components/LogOutButton";

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("@/assets/images/fertioLogo.png")}
        style={styles.logo}
      />
      <View style={styles.logoutButtonWrapper}>
        <LogoutButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#f5f1d4",
    paddingTop: 40, // Luft over logoet
    paddingHorizontal: 16, // Luft til siderne
    flexDirection: "row", // Placerer logo og logudknap på samme række
    justifyContent: "space-between", // Logo til venstre og logudknap til højre
    alignItems: "flex-start", // Sørger for, at logout-knappen starter højere op
  },
  logo: {
    width: 200, // Juster bredde på logoet
    height: 100, // Juster højde på logoet
    resizeMode: "contain", // Bevarer billedets proportioner
    marginBottom: -10, // Trækker logoet lidt længere op
  },
  logoutButtonWrapper: {
    marginTop: -12, // Flytter logout-knappen minimalt ned
    marginRight: -10, // Flytter logout-knappen lidt til højre
  },
});

export default Header;
