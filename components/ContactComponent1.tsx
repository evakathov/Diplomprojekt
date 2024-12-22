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
        Opening hours: 
        Monday - Friday: 08:00 - 15:30 & Wednesday: 15:00 - 18:00
      </Text>

      {/* Knapper */}
      <View style={styles.rowContainer}>
        {/* Call-knap */}
        <TouchableOpacity style={styles.button} onPress={handleCall}>
          <FontAwesome name="phone" size={20} color="#333" />
          <Text style={styles.buttonLabel}>Call</Text>
        </TouchableOpacity>

        {/* Website-knap */}
        <TouchableOpacity style={styles.button} onPress={handleWebsite}>
          <FontAwesome name="home" size={20} color="#333" />
          <Text style={styles.buttonLabel}>Website</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F0EAD6",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%", // Gør komponenten bredere og fylder containeren
    alignSelf: "center", // Centrerer kortet i sin container
  },
  title: {
    fontSize: 20,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#285C4B",
    marginBottom: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#555",
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#888",
    marginBottom: 5,
  },
  openingHours: {
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#888",
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    paddingVertical: 12,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonLabel: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "600",
    color: "#333",
    marginLeft: 10,
  },
});

export default ContactComponent1;
