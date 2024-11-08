// // app/step-detail/[id].tsx
// import { router, useLocalSearchParams } from "expo-router";
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default function StepDetailScreen() {
//   const { id, title } = useLocalSearchParams();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Step {id}</Text>
//       <Text style={styles.subtitle}>{title}</Text>
//       <Text style={styles.dynamicContent}>
//         {getDynamicContent(id as string)}
//       </Text>
//     </View>
//   );
// }

// // Funktion til at hente dynamisk indhold baseret på trin
// const getDynamicContent = (id: string) => {
//   switch (id) {
//     case "1":
//       router.push("./step-details/sampleAnalysisScreen"); // Naviger til SampleAnalysisScreen for trin 1
//       break;
//     case "2":
//       return "Trin 2 indhold: Interview og information.";
//     case "3":
//       return "Trin 3 indhold: Medicinsk undersøgelse.";
//     case "4":
//       return "Trin 4 indhold: Blod- og urinprøve.";
//     case "5":
//       return "Trin 5 indhold: Se din donorprofil.";
//     default:
//       return "Ukendt trin.";
//   }
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 18,
//     marginVertical: 10,
//   },
//   dynamicContent: {
//     marginTop: 20,
//     fontSize: 16,
//     textAlign: "center",
//   },
// });
