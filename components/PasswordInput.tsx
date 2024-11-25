import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Password"
      placeholderTextColor="#444"
      secureTextEntry
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});
