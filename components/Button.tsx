import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void; // Funktion, der kaldes, når knappen trykkes
  backgroundColor?: string; // Valgfri farve for baggrund
  textColor?: string; // Valgfri farve for tekst
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  backgroundColor = "#007BFF", // Standard baggrundsfarve (blå)
  textColor = "#FFFFFF", // Standard tekstfarve (hvid)
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress} // Udfører onPress fra props
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
