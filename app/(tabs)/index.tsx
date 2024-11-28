import QualificationStep from "@/components/QualificationStep";
import React from "react";
import { router } from "expo-router";
//import { getRouteName } from "../routeMapping"; // Sørg for korrekt sti

import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Header from "@/components/Header";
import { useRouter } from "expo-router";
import ToDo from "@/components/ToDo";
import Background from "@/components/Background";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Background>
        <Header />

        <ScrollView contentContainerStyle={styles.content}>
          {/* QualificationStep modtager navigationen */}
          <QualificationStep
            onStepPress={function (
              stepNumber: number,
              stepTitle: string
            ): void {}}

            //onStepPress={(stepNumber: number, title: string) => {
            //const routeName = getRouteName(title); // Hent korrekt filnavn
            //router.push(`./home/${routeName}`); // Naviger til den tilsvarende side
            // }}
          />
          {/* <QualificationStep
          onStepPress={(stepNumber, stepTitle) => {
            router.push(`./home/${stepTitle}`); // Naviger til den tilsvarende home skærm
          }}
        /> */}
        </ScrollView>
      </Background>
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
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1, // Sørger for at baggrundsbilledet fylder hele skærmen
    justifyContent: "center", // Justering af indhold i baggrundsbilledet
  },
});
