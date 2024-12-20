import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Background from "@/components/Background";
import Header from "@/components/Header";
import QualificationStep from "@/components/QualificationStep";

export default function Index() {
  return (
    <Background>
      <View style={styles.container}>
        {/* FlatList wraps all scrollable content */}
        <FlatList
          data={[{}]} // placeholder empty data, flatlist needs data for initialization, in case data is not yet fetched
          renderItem={() => (
            <>
              <Header />
              <View style={styles.qualificationContainer}>
                <QualificationStep
                  onStepPress={(stepNumber: number, stepTitle: string) => {
                    console.log("Step clicked:", stepNumber, stepTitle);
                  }}
                />
              </View>
            </>
          )}
          keyExtractor={() => "unique"}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingTop: 50, // Adjust padding to align the content properly on the screen
  },
  qualificationContainer: {
    alignItems: "center", // Center horizontally
    marginHorizontal: 20, // Add margin on the sides
  },
});
