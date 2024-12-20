import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface SampleButtonProps {
  title: string;
  onPress: () => void;
  icon: string;
  date: string;
}

const SampleButton: React.FC<SampleButtonProps> = ({ title, onPress, icon, date }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/* Ikon til venstre */}
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color="#000000" /> {/* Sort ikon */}
      </View>

      {/* Tekstindhold */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      {/* Tjek-tegn til højre */}
      <Icon name="check" size={24} color="#000000" style={styles.checkIcon} /> {/* Sort tjek-tegn */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C5D8B6", // Grøn baggrundsfarve
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 15, // Afstand mellem ikon og tekst
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "#000000", // Sort tekstfarve
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#000000", // Sort tekstfarve for dato
  },
  checkIcon: {
    marginLeft: 10, // Afstand mellem tekst og tjek-tegn
  },
});

export default SampleButton;
