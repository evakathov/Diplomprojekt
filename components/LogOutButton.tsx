import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/LogInd"); // Naviger brugeren tilbage til login
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
      <View style={styles.logoutContent}>
        <Icon name="logout" size={20} color="black" />
        <Text style={styles.logoutText}>Log out</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    position: "absolute",
    top: 20, // Juster højden over logoet
    right: 5, // Flyt knappen tættere på kanten
    backgroundColor: "#F3F4F6", // Lys grå baggrund
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 25, // Rundt design
    flexDirection: "row", // Ikon og tekst ved siden af hinanden
    alignItems: "center",
    zIndex: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Tilføjer skygge på Android
  },
  logoutContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 6, // Plads mellem ikon og tekst
  },
});

export default LogoutButton;
