import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ContactComponent1 = () => {
  const handleCall = () => {
    Linking.openURL("tel:+4533139070");
  };

  const handleWebsite = () => {
    Linking.openURL("https://lvbh.dk/");
  };

  return (
    <View style={styles.card}>
      {/* Titel og separator */}
      <Text style={styles.title}>Lægerne ved Botanisk Have</Text>
      <View style={styles.separator} />

      {/* Adresse */}
      <Text style={styles.subTitle}>Marlene Askær Iversen og Niels Iversen</Text>
      <Text style={styles.address}>Øster Farimagsgade 7, st</Text>
      <Text style={styles.address}>1353, København K</Text>
      <Text style={styles.openingHours}>
        Opening hours: Monday - Friday: 08:00 - 15:30 & Wednesday: 15:00 - 18:00
      </Text>

      {/* Knapper */}
      <View style={styles.rowContainer}>
        {/* Call-knap */}
        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <View style={styles.callContent}>
            <FontAwesome name="phone" size={20} color="#555" />
            <Text style={styles.callLabel}>Call</Text>
          </View>
          <Text style={styles.phoneNumber}>+45 33 13 90 70</Text>
        </TouchableOpacity>

        {/* Website-knap */}
        <TouchableOpacity style={styles.websiteButton} onPress={handleWebsite}>
          <FontAwesome name="home" size={20} color="#555" />
          <Text style={styles.buttonLabel}>Website</Text>
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
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 16,
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
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Sørger for plads mellem knapperne
    marginTop: 20,
  },
  callButton: {
    flex: 1, // Lige bredde som Website-knap
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10, // Mellemrum mellem knapperne
    justifyContent: "space-between",
  },
  websiteButton: {
    flex: 1, // Lige bredde som Call-knap
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginLeft: 10, // Mellemrum mellem knapperne
  },
  callContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5, // Lidt afstand mellem Call og nummer
  },
  callLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  phoneNumber: {
    fontSize: 12,
    color: "#555",
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center", // Centrer teksten
  },
});

export default ContactComponent1;
