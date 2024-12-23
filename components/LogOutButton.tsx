import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Platform } from "react-native";
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
        <Icon name="logout" size={20} color="#4F4F4F" />
        <Text style={styles.logoutText}>Log out</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    position: "absolute",
    top: 25,
    right: 5,
    backgroundColor: "#F3F4F6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
      },
    }),
  },
  logoutContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    color: "#4F4F4F",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});

export default LogoutButton;
