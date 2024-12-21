import { useNavigation, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface StepComponentProps {
  stepNumber: number;
  stepTitle: string;
  iconName: string;
  isCompleted: boolean; // bruger isCompleted direkte for at bestemme, om trinnet er aktivt
  onPress: () => void; // onPress-Prop skal bruges ved routing
}

const StepComponent: React.FC<StepComponentProps> = ({
  stepNumber,
  stepTitle,
  iconName,
  isCompleted,
}) => {
  const router = useRouter();

  const getRouteName = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return "SampleAnalysis"; // Rutenavn for trin 1
      case 2:
        return "InterviewInformation"; // Rutenavn for trin 2
      case 3:
        return "MedicalExamination"; // Rutenavn for trin 3
      case 4:
        return "BloodUrin"; // Rutenavn for trin 4
      case 5:
        return "DonorProfile"; // Rutenavn for trin 5
      default:
        return "Index"; // Standardrute
    }
  };

  const handlePress = () => {
    const routeName = getRouteName(stepNumber);
    console.log(`Navigating to: /home/${routeName}`); // Debug
    router.push(`./home/${routeName}`); // Naviger til den rigtige skærm
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.stepContainer}>
      {stepNumber > 1 && <View style={styles.line} />}
      <View style={styles.contentContainer}>
        <View style={[styles.circle, isCompleted && styles.activeCircle]}>
          <MaterialIcons name={iconName} size={30} color="#4f4f4f" />
          <Text style={styles.stepText}>Step {stepNumber}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{stepTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StepComponent;

const styles = StyleSheet.create({
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  contentContainer: {
    flexDirection: "row", // Sørger for, at cirkel og tekst vises side om side
    alignItems: "center",
  },
  line: {
    position: "absolute",
    width: 1,
    height: 40,
    backgroundColor: "#ccc",
    left: 35, // Tilpas placeringen så linjen passer med cirklen
    top: -40, // Justér for placering mellem cirklerne
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 45,
    backgroundColor: "#f5f1d4", // Color for inactive steps
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    position: "relative",
    boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.3)", // Combined shadow properties into boxShadow
    elevation: 6, // Retain for Android-specific shadow
  },
  activeCircle: {
    backgroundColor: "#6c8b74", // Green for active steps
    //boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.3)", // Combined shadow properties into boxShadow
    //elevation: 6, // Retain for Android-specific shadow
  },
  stepText: {
    position: "absolute",
    bottom: 5,
    fontSize: 13,
    color: "#4f4f4f",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4f4f4f",
  },
  description: {
    fontSize: 12,
    color: "#4f4f4f",
  },
});
