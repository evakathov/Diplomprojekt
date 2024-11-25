import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importér useNavigation

const Button2 = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A3B78C",
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Button2;
