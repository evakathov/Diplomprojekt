
// import MetadataComponent from "@/components/MetadataComponent";
// import { router, useLocalSearchParams } from "expo-router";
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import mockStepData from "../stores/mockStepData";

// export default function StepDetailScreen() {
//   const { id } = useLocalSearchParams();
//   const stepData = mockStepData[Number(id)] || {
//     title: "Unknown Step",
//     isCompleted: false,
//     qualificationStep: { id: 0, stepName: "Unknown" },
//     metaDataTemplate: { id: 0, templateName: "Unknown Template" },
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.top}>
//         <Text style={styles.stepNumber}>
//           Step nummer: {stepData.qualificationStep.id}
//         </Text>
//       </View>

//       <Text style={styles.title}>{stepData.title}</Text>
//       <Text style={styles.description}>
//         Qualification Step: {stepData.qualificationStep.stepName}
//       </Text>
//       <Text style={styles.description}>
//         Metadata Template: {stepData.metaDataTemplate.templateName}
//       </Text>
//       <Text style={styles.status}>
//         Status: {stepData.isCompleted ? "Completed" : "Not Completed"}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   top: {
//     flex: 1,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     padding: 20,
//   },
//   stepNumber: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
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
//   description: {
//     fontSize: 16,
//     marginVertical: 5,
//   },
//   status: {
//     marginTop: 20,
//     fontSize: 16,
//     color: "green",
//   },
// });

// // export default function StepDetailScreen() {
// //   const { id, title } = useLocalSearchParams();

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Step {id}</Text>
// //       <Text style={styles.subtitle}>{title}</Text>
// //       <Text style={styles.dynamicContent}>
// //         {getDynamicContent(id as string)}
// //       </Text>
// //     </View>
// //   );
// // }

// // // Funktion til at hente dynamisk indhold baseret på trin
// // const getDynamicContent = (id: string) => {
// //   switch (id) {
// //     case "1":
// //       return <MetadataComponent label="Sample analysis" value={true} />;
// //     case "2":
// //       return (
// //         <MetadataComponent label="Interview og information" value={true} />
// //       );
// //     case "3":
// //       return <MetadataComponent label="Medicinsk undersøgelse" value={false} />;
// //     case "4":
// //       return <MetadataComponent label="Blod- og urinprøve" value={true} />;
// //     case "5":
// //       return <MetadataComponent label="Donorprofil" value={false} />;
// //     default:
// //       return "Ukendt trin.";
// //   }
// // };
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     padding: 20,
// //   },
// //   label: {},
// //   title: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //   },
// //   subtitle: {
// //     fontSize: 18,
// //     marginVertical: 10,
// //   },
// //   dynamicContent: {
// //     marginTop: 20,
// //     fontSize: 16,
// //     textAlign: "center",
// //   },
// // });

