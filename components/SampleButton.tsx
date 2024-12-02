import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"; // Importer MaterialCommunityIcons
import Icon from "react-native-vector-icons/FontAwesome";

// Opdater ButtonProps til at inkludere 'date' som en prop
type ButtonProps = {
  title: string;
  onPress: () => void;
  icon: string; // Ikon for knappen
  date: string; // Datoen for testresultatet
};

const SampleButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  icon,
  date,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconTextContainer}>
        <MaterialCommunityIcons
          name="test-tube-empty"
          size={24}
          color="black"
        />
        <Text style={styles.buttonText}>{title}</Text>
        {/* Tilføj checkmark-ikonet hvis isCompleted er true */}
        <Icon name="check" size={20} color="green" style={styles.checkMark} />
      </View>
      {/* Tilføj datoen under knappen */}

      <Text style={styles.dateText}>{date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a7c68e",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
  iconTextContainer: {
    flexDirection: "row", // Ikon og tekst side om side
    alignItems: "center",
    justifyContent: "flex-start", // Sørger for, at tekst og ikon er i samme linje til venstre
  },
  icon: {
    marginRight: 10, // Afstand mellem ikon og tekst
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  dateText: {
    fontSize: 14,
    color: "#888",
    marginTop: 5, // Sørger for lidt afstand mellem knappen og datoen
  },
  checkMark: {
    marginLeft: "auto",
  },
});

export default SampleButton;
