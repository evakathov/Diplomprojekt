import React from "react";
import { observer } from "mobx-react-lite";
import { View, Text, FlatList } from "react-native";
import StepComponent from "./StepComponent";
import DonorStore from "@/app/stores/DonorStore";

interface QualificationStepProps {
  onStepPress: (stepNumber: number, stepTitle: string) => void;
}
//FC en funktionel komponent med properties defineret fra/i QualificationStepProps
const QualificationStep: React.FC<QualificationStepProps> = observer(
  ({ onStepPress }) => {
    const donorObject = DonorStore.donorObject;

    if (!donorObject || !donorObject.qualificationSteps) {
      return <Text>Loading donor steps...</Text>;
    }

    const sortedSteps = [...donorObject.qualificationSteps].sort(
      (a, b) => a.stepNumber - b.stepNumber //Her oprettes en kopi af listen qualificationSteps og sorteres efter stepNumber.
    );

    const getIconName = (stepNumber: number) => {
      switch (stepNumber) {
        case 1:
          return { library: "MaterialCommunityIcons", name: "test-tube" };
        case 2:
          return { library: "Feather", name: "users" };
        case 3:
          return { library: "MaterialCommunityIcons", name: "stethoscope" };
        case 4:
          return { library: "Feather", name: "droplet" };
        case 5:
          return { library: "Feather", name: "user" };
        default:
          return { library: "Feather", name: "star" };
      }
    };

    return (
      <View>
        <FlatList
          data={sortedSteps}
          keyExtractor={(item) => item.qualificationStepID.toString()}
          renderItem={({ item }) => {
            const { library, name } = getIconName(item.stepNumber);

            return (
              <StepComponent
                stepNumber={item.stepNumber}
                stepTitle={item.title}
                isCompleted={item.isCompleted}
                iconName={name}
                iconLibrary={library}
                onPress={() => onStepPress(item.stepNumber, item.title)}
              />
            );  
          }}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    );
  }
);

export default QualificationStep;

