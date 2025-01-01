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
    marginHorizontal: 2,
  },
  scrollContainer: {
    marginTop: 50,
    // Adjust padding to align the content properly on the screen
  },
  logoutContainer: {
    //marginVertical: 25,
    marginTop: 10,
    zIndex: 10,
  },
  qualificationContainer: {
    //backgroundColor: "white",
    alignItems: "center", // Center horizontally
    marginHorizontal: 35, // Add margin on the sides
    marginTop: 8,
  },
});
