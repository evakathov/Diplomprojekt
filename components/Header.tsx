import React from "react";
import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import LogoutButton from "@/components/LogOutButton";

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
{/*       <Image
        source={require("@/assets/images/fertioLogo.png")}
        style={styles.logo}
      />
      <View style={styles.logoutButtonWrapper}>
        <LogoutButton />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "transparent", // Makes the header background fully transparent
    paddingTop: 60, // Space above the logo
    paddingBottom: 50,
    paddingHorizontal: 16, // Space on the sides
    flexDirection: "row", // Places logo and logout button in the same row
    justifyContent: "space-between", // Logo to the left and logout button to the right
    alignItems: "flex-start", // Aligns items to start at the top
  },
  logo: {
    width: 200, // Adjust the logo's width
    height: 100, // Adjust the logo's height
    resizeMode: "contain", // Preserves the image proportions
    marginBottom: -10, // Moves the logo slightly upward
  },
  logoutButtonWrapper: {
    marginTop: -12, // Moves the logout button slightly downward
    marginRight: -10, // Moves the logout button slightly to the right
  },
});

export default Header;
