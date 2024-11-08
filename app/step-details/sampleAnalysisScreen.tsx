import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function SampleAnalysis() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* QualificationStep modtager navigationen */}
        <QualificationStep
          onStepPress={(stepNumber: any, title: any) => {
            router.push({
              pathname: `./step-details/[id]`,
              params: { id: stepNumber, title },
            });
          }}
        />
      </ScrollView>
    </View>
  );
}
