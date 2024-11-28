import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
//import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import SampleButton from "@/components/SampleButton";

//const backgroundImage = require("..assets/images/baggrundsample.png");

// SampleScreen komponenten
const SampleScreen = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={backgroundImage} style={styles.backgroundImage}> */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Overskrift */}
        <Text style={styles.title}>Step 1</Text>

        {/* Beskrivelse */}
        <Text style={styles.description}>
          Your samples have been approved. You can find the test results below.
        </Text>

        {/* Knapper */}
        <SampleButton
          title="Test results - Semen Analysis"
          onPress={() => {}} // Ingen funktionalitet endnu
          icon="test-tube" // Brug det gyldige ikon
          date="October 7, 2024"
        />
        <SampleButton
          title="Test results - Semen Analysis"
          onPress={() => {}} // Ingen funktionalitet endnu
          icon="test-tube" // Brug det gyldige ikon
          date="September 22, 2024"
        />
        <SampleButton
          title="Test results - Semen Analysis"
          onPress={() => {}} // Ingen funktionalitet endnu
          icon="test-tube" // Brug det gyldige ikon
          date="September 7, 2024"
        />
      </ScrollView>
      {/* </ImageBackground> */}

      {/* Bottom Tab Bar */}
      <View style={styles.bottomContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Sørger for at container fylder hele skærmen
    backgroundColor: "#f9f6e0",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 90, // Justeret plads til bunden, så knapperne ikke overlapper
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "left",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
    textAlign: "left",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default SampleScreen;

// //StepDetailScreen.tsx TOM SKÆRM
// import { useLocalSearchParams } from "expo-router";
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default function SampleAnalysisScreen({ route }: any) {
//   const { id } = useLocalSearchParams();
//   //const { stepNumber, title, description } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text>Step ID: {id}</Text>
//       {/* <Text style={styles.stepNumber}>Step Number: {stepNumber}</Text>
//        <Text style={styles.title}>{title}</Text>
//       <Text style={styles.description}>{description}</Text> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   description: {
//     fontSize: 18,
//     marginVertical: 10,
//   },
//   stepNumber: {
//     fontSize: 16,
//     color: "grey",
//   },
// });
