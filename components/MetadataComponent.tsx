// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import DonorStore from "@/app/stores/DonorStore";
// import { observer } from "mobx-react-lite";

// interface MetadataProps {
//   stepNumber: number; // Nummeret for trin, hvis metadata skal hentes
//   infoText: string;
// }

// const Metadata: React.FC<MetadataProps> = observer(
//   ({ stepNumber, infoText }) => {
//     const donorObject = DonorStore.donorObject;

//     // Tjek, om donorObject og qualificationSteps er tilgængelige
//     if (!donorObject || !donorObject.Metadata) {
//       return <Text>Loading metadata...</Text>;
//     }

//     // Find det specifikke trin
//     const step = donorObject.Metadata.find(
//       (s) => s.stepNumber === stepNumber
//     );

//     // Hvis trin ikke findes, vis en fallback
//     if (!step || !step.metaDataList) {
//       return <Text>No metadata available for this step.</Text>;
//     }

//     // Map metadata for det valgte trin
//     const metadataList = step.metaDataList.map((metaData) => ({
//       infoText: metaData.metaDataTemplate.infoText,
//       isCompleted: metaData.isCompleted,
//     }));

//     return (
//       <View style={styles.container}>
//         {metadataList.map((item, index) => (
//           <View key={index} style={styles.itemContainer}>
//             <Text style={styles.text}>{item.infoText}</Text>
//             <Text
//               style={[
//                 styles.status,
//                 item.isCompleted ? styles.completed : styles.notCompleted,
//               ]}
//             >
//               {item.isCompleted ? "Completed" : "Not Completed"}
//             </Text>
//           </View>
//         ))}
//       </View>
//     );
//   }
// );

// export default Metadata;

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: "#F9F9F9",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   itemContainer: {
//     marginBottom: 12,
//   },
//   text: {
//     fontSize: 16,
//     color: "#333",
//   },
//   status: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginTop: 4,
//   },
//   completed: {
//     color: "green",
//   },
//   notCompleted: {
//     color: "red",
//   },
// });
