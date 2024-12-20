import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Background from "@/components/Background";
import Header from "@/components/Header";
import QualificationStep from "@/components/QualificationStep";
import LogoutButton from "@/components/LogOutButton";

export default function Index() {
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.logoutContainer}>
          <LogoutButton />
        </View>
        {/* FlatList wraps all scrollable content */}
        <FlatList
          data={[{}]} //placeholder emtpty data, flatlist needs data for initalization, incase data is not yet fetched
          renderItem={() => (
            <>
              <Header />
              <QualificationStep
                onStepPress={(stepNumber: number, stepTitle: string) => {
                  console.log("Step clicked:", stepNumber, stepTitle);
                }}
              />
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
    marginHorizontal: 30,
  },
  scrollContainer: {
   // Adjust padding to align the content properly on the screen
  },
  logoutContainer: {
    marginVertical: 25,
  },
});
