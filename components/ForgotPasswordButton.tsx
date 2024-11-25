import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ForgotPasswordButtonProps {
  onPress: () => void;
}

export const ForgotPasswordButton: React.FC<ForgotPasswordButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    color: '#0a7ea4',
    marginBottom: 20,
    fontSize: 14,
  },
});
