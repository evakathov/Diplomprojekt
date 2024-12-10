import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface EmailInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string; // Optional placeholder prop
}

export const EmailInput: React.FC<EmailInputProps> = ({
  value,
  onChangeText,
  placeholder = "Username",
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder} // Use the provided placeholder or default to "Email"
      placeholderTextColor="#888"
      keyboardType="email-address"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
});
