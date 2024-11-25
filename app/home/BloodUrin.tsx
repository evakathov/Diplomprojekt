import ToDo from "@/components/ToDo";
import { View, Text } from "react-native";

export default function BloodUrin() {
  return (
    <View>
      <Text>Blood and Urin Screen</Text>
      <ToDo qualificationStepNumber={4}></ToDo>
    </View>
  );
}
