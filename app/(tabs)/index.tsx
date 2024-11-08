import QualificationStep from "@/components/QualificationStep";
import React from "react";

import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Header from "@/components/Header";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />
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

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Header />
//       <ScrollView contentContainerStyle={styles.content}>
//         <QualificationStep />
//       </ScrollView>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000", // sort farve
  },
  content: {
    padding: 16,
  },
});
