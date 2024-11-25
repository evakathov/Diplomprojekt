import React from "react";
import { observer } from "mobx-react-lite";
import { runInAction } from "mobx";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DonorStore from "@/app/stores/DonorStore";

interface ToDoProps {
  qualificationStepNumber: number;
}

const ToDo = observer(({ qualificationStepNumber }: ToDoProps) => {
  const donorObject = DonorStore.donorObject;

  if (!donorObject) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const step = donorObject.qualificationSteps.find(
    (s) => s.stepNumber === qualificationStepNumber
  );

  if (!step) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          No metadata found for step {qualificationStepNumber}
        </Text>
      </View>
    );
  }

  const metaDataList = step.metaDataList;

  const handleButtonClick = async (
    metaDataId: number,
    currentStatus: boolean
  ) => {
    console.log(
      `Toggling step ID: ${metaDataId}, Current status: ${currentStatus}`
    );

    try {
      // Call DonorStore.updateStep to update the backend
      await DonorStore.updateStep(metaDataId);

      // Update the local state if the backend call is successful
      runInAction(() => {
        const metaData = metaDataList.find((m) => m.subStepID === metaDataId);
        if (metaData) {
          metaData.isCompleted = !currentStatus;
        }
      });

      console.log(`Step ID ${metaDataId} status updated successfully.`);
    } catch (error) {
      console.error("Error toggling step:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Step {qualificationStepNumber}</Text>
      <Text style={styles.description}>
        Below are the tasks for this step. Please complete them.
      </Text>
      {metaDataList.map((meta) => (
        <TouchableOpacity
          key={meta.subStepID}
          style={[
            styles.taskButton,
            meta.isCompleted && styles.taskButtonCompleted,
          ]}
          onPress={() => handleButtonClick(meta.subStepID, meta.isCompleted)}
        >
          <Text style={styles.taskButtonText}>
            {meta.metaDataTemplate.infoText}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "left",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "left",
  },
  loadingText: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    color: "#D9534F",
    textAlign: "center",
  },
  taskButton: {
    backgroundColor: "#E3EDDC",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  taskButtonCompleted: {
    backgroundColor: "#7C68EE",
  },
  taskButtonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
});

export default ToDo;
