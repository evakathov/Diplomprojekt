import React from "react";
import { View, StyleSheet } from "react-native";
import ToDo from "@/components/ToDo";
import Background6 from "@/components/Background6"; // Importer Background6 som baggrund

export default function DonorProfile() {
  return (
    <Background6>
      <View style={styles.container}>
        <ToDo qualificationStepNumber={5} />
      </View>
    </Background6>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centrer indholdet vertikalt
    paddingHorizontal: 20,
    paddingTop: 80, // Plads øverst for baggrund og header
  },
});
