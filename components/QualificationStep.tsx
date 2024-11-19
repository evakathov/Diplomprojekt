import React from "react";
import { observer } from "mobx-react-lite";
import { View, Text, FlatList } from "react-native";
import QualificationStepStore from "../app/stores/QualificationStepStore";
import StepComponent from "./StepComponent";
import DonorStore from "@/app/stores/DonorStore";

interface QualificationStepProps {
  onStepPress: (stepNumber: number, stepTitle: string) => void;
}

const QualificationStep: React.FC<QualificationStepProps> = observer(
  ({ onStepPress }) => {
    const { donorStep } = QualificationStepStore;

    // const QualificationStep = observer(() => {
    //   const { donorStep } = QualificationStepStore;

    //   console.log(donorStep);

    const getIconName = (stepNumber: number) => {
      switch (stepNumber) {
        case 1:
          return "science"; // Ikon for trin 1
        case 2:
          return "people"; // Ikon for trin 2
        case 3:
          return "hospital"; // Ikon for trin 3
        case 4:
          return "bloodtype"; // Ikon for trin 3
        default:
          return "flag"; // Standardikon
      }
    };

    return (
      <View>
        {donorStep.length > 0 ? (
          <FlatList
            data={donorStep}
            keyExtractor={(item, index) => index.toString()} // har slettet 'item,' foran index
            renderItem={({ item }) => (
              <StepComponent
                stepNumber={item.stepNumber} // Trinnummer fra databasen
                stepTitle={item.stepTitle} // Titel fra databasen
                isCompleted={item.isCompleted} // Aktiv status fra databasen
                iconName={getIconName(item.stepNumber)} // Dynamisk ikonnavn
                onPress={() => onStepPress(item.stepNumber, item.stepTitle)} //bruges ved dynamisk routing
              />
              //<button onClick={()=><DonorStore.updateStep(item.stepNumber)}></button>
            )}
          />
        ) : (
          <Text>Loading donor step...</Text>
        )}

        {JSON.stringify(
          DonorStore.donorObject?.qualificationSteps[3].metaDataList
        )}
      </View>
    );
  }
);
export default QualificationStep;

//State - farven på det givne komponent skal være afhængig af state
