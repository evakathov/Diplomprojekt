import ToDo from "@/components/ToDo";
import { View, Text } from "react-native";

export default function MedicalExamination() {
  return (
    <View>
      <Text> MEdical examination Screen</Text>
      <ToDo qualificationStepNumber={3}></ToDo>
    </View>
  );
}
