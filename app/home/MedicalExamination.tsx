import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useRouter } from "expo-router"; // Bruger expo-router i stedet for react-navigation
import ContactComponent1 from "@/components/ContactComponent1";
import Button2 from "@/components/Button2";

const MedicalExamination = () => {
  const router = useRouter(); // Bruger router til navigation

  return (
    <View style={styles.container}>
      {/* ScrollView for at kunne rulle indholdet */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Tekst over knappen */}
        <Text style={styles.infoText}>
          You will need to undergo a thorough medical examination with a doctor
          we collaborate with. You must schedule the appointment yourself; you
          can find the contact information below. Additionally, please make sure
          to read the information's about the medical examination, so you know
          what to expect.
        </Text>

        {/* Knappen navigerer nu ved hjælp af router.push */}
        <Button2
          title="Information about medical examination"
          onPress={() => router.push("./home/VideoScreen")} // Naviger til VideoScreen
        />

        {/* Kontakt informationer */}
        <ContactComponent1 />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 20, // Øget afstand øverst for bedre visning
    paddingBottom: 100, // Sørger for at der er plads nederst, så tabbaren ikke overlapper
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 20,
    paddingBottom: 20,
    textAlign: "left", // Justering af teksten til venstre
  },
});

export default MedicalExamination;
