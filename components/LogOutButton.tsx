import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import { tokenStore } from "@/app/stores/TokenStore";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await tokenStore.logout();
      router.replace("/Login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
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
    top: 20,
    right: 5,
    backgroundColor: "#F3F4F6",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    elevation: 3,
  },
  logoutContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 6,
  },
});

export default LogoutButton;
