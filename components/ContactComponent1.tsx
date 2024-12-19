import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ContactComponent1 = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Doctor</Text>
      <Text style={styles.subTitle}>Fertio</Text>
      <Text style={styles.address}>Struensegade 9, 2 sal</Text>
      <Text style={styles.address}>2200 København N</Text>
      <Text style={styles.openingHours}>Opening hours: 09.00 - 17.00</Text>

      {/* Icons for contact */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="phone" size={28} color="#555" />
          <Text style={styles.iconLabel}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="envelope" size={28} color="#555" />
          <Text style={styles.iconLabel}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="comment" size={28} color="#555" />
          <Text style={styles.iconLabel}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="home" size={28} color="#555" />
          <Text style={styles.iconLabel}>Website</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    margin: 20,
    padding: 20,
    borderRadius: 12,
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)", // Combined shadow properties into boxShadow
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 18,
    color: "#666",
    marginVertical: 5,
  },
  address: {
    fontSize: 16,
    color: "#888",
    marginBottom: 5,
  },
  openingHours: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  iconButton: {
    alignItems: "center",
    padding: 12,
    borderRadius: 50,
    backgroundColor: "#f5f5f5",
    width: 70,
    height: 70,
    justifyContent: "center",
    color: "#888",
    marginBottom: 20,
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 5,
    color: "#333",
  },
});

export default ContactComponent1;
