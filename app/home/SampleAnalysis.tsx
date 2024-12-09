import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SampleButton from "@/components/SampleButton";
import Background4 from "@/components/Background4";

const SampleScreen = () => {
  return (
    <View style={styles.container}>
      <Background4>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Beskrivelse */}
          <Text style={styles.description}>
            Your samples have been approved. You can find the test results below.
          </Text>

          {/* Knapper */}
          <SampleButton
            title="Test results - Sample Analysis"
            onPress={() => {}}
            icon="test-tube"
            date="October 7, 2024"
          />
          <SampleButton
            title="Test results - Sample Analysis"
            onPress={() => {}}
            icon="test-tube"
            date="September 22, 2024"
          />
          <SampleButton
            title="Test results - Sample Analysis"
            onPress={() => {}}
            icon="test-tube"
            date="September 7, 2024"
          />
        </ScrollView>
      </Background4>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 100, // Mindre plads for at rykke teksten og knapperne op
    paddingHorizontal: 20,
    paddingBottom: 90,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20, // Mindre afstand under beskrivelsen
    textAlign: "left",
  },
});

export default SampleScreen;
