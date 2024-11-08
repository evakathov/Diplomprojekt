import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MetadataProps {
  value: boolean; // Boolean værdi
}

const MetadataComponent: React.FC<MetadataProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Her kan du læse metadata for step 1:</Text>
      <Text style={[styles.value, value ? styles.true : styles.false]}>
        {value ? "True" : "False"}
      </Text>
    </View>
  );
};

export default MetadataComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center", // Centrerer indholdet
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
  },
  true: {
    color: "green", // Grøn farve for true
  },
  false: {
    color: "red", // Rød farve for false
  },
});
