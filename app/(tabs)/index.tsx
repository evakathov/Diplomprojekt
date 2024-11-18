import QualificationStep from "@/components/QualificationStep";
import React from "react";
import { router } from "expo-router";
import { getRouteName } from "../routeMapping"; // Sørg for korrekt sti

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "@/components/Header";
import { useRouter } from "expo-router";
import Button from "@/components/Button";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        {/* QualificationStep modtager navigationen */}
        <QualificationStep
          onStepPress={function (stepNumber: number, title: string): void {
            throw new Error("Function not implemented.");
          }} //onStepPress={(stepNumber: number, title: string) => {
          //const routeName = getRouteName(title); // Hent korrekt filnavn
          //router.push(`./home/${routeName}`); // Naviger til den tilsvarende side
          // }}
        />
        <QualificationStep
          onStepPress={(stepNumber: any, title: any) => {
            router.push({
              pathname: `./home/${title}`,
              //params: { title }, // Hvis du også vil sende titlen som parameter
            });
          }}
          // onStepPress={(stepNumber: any, title: any) => {
          //   router.push({
          //     pathname: `./step-details/[id]`,
          //     params: { id: stepNumber, title },
          //   });
          // }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("./home/01SampleAnalysisScreen")}
        >
          <Text style={styles.buttonText}>Go to Step Screen</Text>
        </TouchableOpacity>

        <Button
          title="Go to Step Screen"
          onPress={() => router.push("./home/stepScreen")} // Navigation specificeret her
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
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
