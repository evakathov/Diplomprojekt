import React from "react";
import { observer } from "mobx-react-lite";
import { View, Text, FlatList } from "react-native";
import StepComponent from "./StepComponent";
import DonorStore from "@/app/stores/DonorStore";

interface QualificationStepProps {
  onStepPress: (stepNumber: number, stepTitle: string) => void;
}

const QualificationStep: React.FC<QualificationStepProps> = observer(
  ({ onStepPress }) => {
    const donorObject = DonorStore.donorObject;

    // Ensure donorObject and its qualificationSteps exist before rendering
    if (!donorObject || !donorObject.qualificationSteps) {
      return <Text>Loading donor steps...</Text>;
    }

    const getIconName = (stepNumber: number) => {
      switch (stepNumber) {
        case 1:
          return "science";
        case 2:
          return "people";
        case 3:
          return "hospital";
        case 4:
          return "bloodtype";
        case 5:
          return "flag";
        default:
          return "flag";
      }
    };

    return (
      <View>
        <FlatList
          data={donorObject.qualificationSteps}
          keyExtractor={(item) => item.qualificationStepID.toString()}
          renderItem={({ item }) => (
            <StepComponent
              stepNumber={item.stepNumber}
              stepTitle={item.title}
              isCompleted={item.isCompleted}
              iconName={getIconName(item.stepNumber)}
              onPress={() => onStepPress(item.stepNumber, item.title)}
            />
          )}
        />
      </View>
    );
  }
);

export default QualificationStep;
//State - farven på det givne komponent skal være afhængig af state
