import React, { useState } from "react";
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
import { useRouter } from "expo-router";
import templateIdMapping from "./TemplateMapping";
import Icon from "react-native-vector-icons/FontAwesome";

interface ToDoProps {
  qualificationStepNumber: number;
}

const ToDo = observer(({ qualificationStepNumber }: ToDoProps) => {
  const donorObject = DonorStore.donorObject;
  const router = useRouter();

  // State to track the currently clicked subStepID
  const [clickedSubStep, setClickedSubStep] = useState<number | null>(null);

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
    currentStatus: boolean,
    route: string
  ) => {
    console.log(
      `Toggling step ID: ${metaDataId}, Current status: ${currentStatus}`
    );

    try {
      // Set clickedSubStep to track the clicked task
      setClickedSubStep(metaDataId);

      // Update the backend only if `isCompleted` is false
      if (!currentStatus) {
        await DonorStore.updateSubStep(metaDataId);

        // Update local state to reflect the change
        runInAction(() => {
          const metaData = metaDataList.find((m) => m.subStepID === metaDataId);
          if (metaData) {
            metaData.isCompleted = true;
          }
        });

        console.log(`Step ID ${metaDataId} status updated to completed.`);
      }

      // Always route to the next screen
      if (route) {
        router.push(route as `./home/${string}`);
      }
    } catch (error) {
      console.error("Error toggling step:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {metaDataList.map((meta) => {
        const mapping = templateIdMapping[meta.metaDataTemplate.templateID] || {
          icon: "default-icon",
          route: "/default-route",
        };

        const isClicked = clickedSubStep === meta.subStepID;
        const isCompleted = meta.isCompleted;
        const iconColor = isClicked || isCompleted ? "white" : "#000";

        return (
          <TouchableOpacity
            key={meta.subStepID}
            style={[
              styles.taskButton,
              (isClicked || isCompleted) && styles.taskButtonCompleted,
            ]}
            onPress={() =>
              handleButtonClick(meta.subStepID, isCompleted, mapping.route)
            }
          >
            <View style={styles.buttonContent}>
              <Icon name={mapping.icon} size={20} color={iconColor} />
              <Text
                style={[
                  styles.taskButtonText,
                  (isClicked || isCompleted) && styles.taskButtonTextCompleted,
                ]}
              >
                {meta.metaDataTemplate.infoText}
              </Text>
              {isCompleted && (
                <Icon
                  name="check"
                  size={20}
                  color="green"
                  style={styles.checkMark}
                />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
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
  taskButton: {
    backgroundColor: "#E3EDDC",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "row",
    // Shadow for Android
    elevation: 6,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  taskButtonCompleted: {
    backgroundColor: "#a7c68e",
    elevation: 4, // Optional: More pronounced shadow for completed tasks
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  taskButtonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    marginLeft: 10,
    flex: 1,
  },
  taskButtonTextCompleted: {
    fontSize: 16,
    color: "white",
    fontWeight: "normal",
    textDecorationLine: "line-through",
    marginLeft: 10,
    flex: 1,
  },
  checkMark: {
    marginLeft: 10,
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
});

export default ToDo;
