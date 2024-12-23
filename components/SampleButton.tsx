import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface SampleButtonProps {
  title: string;
  onPress: () => void;
  icon: string;
  date: string;
}

const SampleButton: React.FC<SampleButtonProps> = ({
  title,
  onPress,
  icon,
  date,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/* Icon on the left */}
      <View style={styles.iconContainer}>
        <Icon name={icon || "alert-circle"} size={24} color="#000000" />
      </View>

      {/* Text content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      {/* Checkmark icon on the right */}
      <Icon name="check" size={24} color="#000000" style={styles.checkIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C5D8B6", // Green background color
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2, // Shadow for Android
  },
  iconContainer: {
    marginRight: 15, // Space between icon and text
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "#000000", // Black text color
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#000000", // Black text color for date
  },
  checkIcon: {
    marginLeft: 10, // Space between text and check icon
  },
});

export default SampleButton;
