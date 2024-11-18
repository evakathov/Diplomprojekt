import { useNavigation, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface StepComponentProps {
  stepNumber: number;
  title: string;
  iconName: string;
  isCompleted: boolean; // bruger isCompleted direkte for at bestemme, om trinnet er aktivt
  onPress: () => void; // onPress-Prop skal bruges ved routing
}

const StepComponent: React.FC<StepComponentProps> = ({
  stepNumber,
  title,
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
        return "SampleAnalysis"; // Standardrute
    }
  };

  const handlePress = () => {
    const routeName = getRouteName(stepNumber);
    router.push(`./home/${routeName}`); // Naviger til den rigtige skærm
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.stepContainer}>
      {stepNumber > 1 && <View style={styles.line} />}
      <View style={styles.contentContainer}>
        <View style={[styles.circle, isCompleted && styles.activeCircle]}>
          <MaterialIcons name={iconName} size={24} color="#4f4f4f" />
          <Text style={styles.stepText}>Step {stepNumber}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
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
    backgroundColor: "#f5f1d4", // farve for inaktive trin
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  activeCircle: {
    backgroundColor: "#6c8b74", // Grøn for aktive trin
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  stepText: {
    position: "absolute",
    bottom: 5,
    fontSize: 10,
    color: "#4f4f4f",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4f4f4f",
  },
  description: {
    fontSize: 12,
    color: "#4f4f4f",
  },
});

// // VED BRUG AF DYNAMISK ROUTING:
// const StepComponent: React.FC<StepComponentProps> = ({
//   stepNumber,
//   title,
//   iconName,
//   isCompleted,
//   onPress,
// }) => {
//   // Bruger router i stedet for navigation
//   const router = useRouter();

//   const handlePress = () => {
//     router.push({
//       pathname: "./step-details/[id]",
//       params: { id: stepNumber, title },
//     });
//   };

//   return (
//     <TouchableOpacity onPress={onPress} style={styles.stepContainer}>
//       {/* Linje før cirklen */}
//       {stepNumber > 1 && <View style={styles.line} />}
//       <View style={styles.contentContainer}>
//         {/* Cirkel med ikon og stepnummer */}
//         <View style={[styles.circle, isCompleted && styles.activeCircle]}>
//           <MaterialIcons name={iconName} size={24} color="#4f4f4f" />
//           <Text style={styles.stepText}>Step {stepNumber}</Text>
//         </View>
//         {/* Tekst ved siden af cirklen */}
//         <View style={styles.textContainer}>
//           <Text style={styles.title}>{title}</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default StepComponent;

// const styles = StyleSheet.create({
//   stepContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 40,
//   },
//   contentContainer: {
//     flexDirection: "row", // Sørger for, at cirkel og tekst vises side om side
//     alignItems: "center",
//   },
//   line: {
//     position: "absolute",
//     width: 1,
//     height: 40,
//     backgroundColor: "#ccc",
//     left: 35, // Tilpas placeringen så linjen passer med cirklen
//     top: -40, // Justér for placering mellem cirklerne
//   },
//   circle: {
//     width: 70,
//     height: 70,
//     borderRadius: 45,
//     backgroundColor: "#f5f1d4", // farve for inaktive trin
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 16,
//     position: "relative",
//     shadowColor: "#000",
//     shadowOffset: { width: 2, height: 3 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   activeCircle: {
//     backgroundColor: "#6c8b74", // Grøn for aktive trin
//     shadowColor: "#000",
//     shadowOffset: { width: 2, height: 3 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   stepText: {
//     position: "absolute",
//     bottom: 5,
//     fontSize: 10,
//     color: "#4f4f4f",
//   },
//   textContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#4f4f4f",
//   },
//   description: {
//     fontSize: 12,
//     color: "#4f4f4f",
//   },
// });
