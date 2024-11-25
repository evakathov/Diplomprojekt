import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ButtonProps = {
  title: string;
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap; // Sørger for, at kun gyldige Ionicons-navne accepteres
};

const Interview1Button: React.FC<ButtonProps> = ({ title, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconTextContainer}>
        <Ionicons name={icon} size={24} color="black" style={styles.icon} />
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A3B78C',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  iconTextContainer: {
    flexDirection: 'row', // Ikon og tekst side om side
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    marginRight: 10, // Afstand mellem ikon og tekst
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Interview1Button;



