import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { useRouter } from "expo-router";

interface StepComponentProps {
  stepNumber: number;
  stepTitle: string;
  iconName: string;
  iconLibrary: string; // Biblioteket til ikonet
  isCompleted: boolean;
  onPress: () => void;
}

const StepComponent: React.FC<StepComponentProps> = ({
  stepNumber,
  stepTitle,
  iconName,
  iconLibrary,
  isCompleted,
  onPress,
}) => {
  const IconComponent =
    iconLibrary === "MaterialCommunityIcons" ? MaterialCommunityIcons : Feather;

  const router = useRouter();

  const getRouteName = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return "SampleAnalysis";
      case 2:
        return "InterviewInformation";
      case 3:
        return "MedicalExamination";
      case 4:
        return "BloodUrin";
      case 5:
        return "DonorProfile";
      default:
        return "Index";
    }
  };

  const handlePress = () => {
    const routeName = getRouteName(stepNumber);
    router.push(`./home/${routeName}`);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        onPress(); // Ekstern handling
        handlePress(); // Navigation til næste skærm
      }}
      style={styles.stepContainer}
    >
      {stepNumber > 1 && <View style={styles.line} />}
      <View style={styles.contentContainer}>
        <View style={[styles.circle, isCompleted && styles.activeCircle]}>
          <IconComponent name={iconName} size={30} color="#4f4f4f" />
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
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    position: "absolute",
    width: 1,
    height: 60, // Forlæng stregen for større cirkel
    backgroundColor: "#ccc",
    left: 45, // Centreret i forhold til større cirkel
    top: -40, // Flyttet op for at passe til cirklernes position
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 45,
    backgroundColor: "#f5f1d4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    position: "relative",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  activeCircle: {
    backgroundColor: "#6c8b74",
  },
  stepText: {
    position: "absolute",
    bottom: 15,
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
});
