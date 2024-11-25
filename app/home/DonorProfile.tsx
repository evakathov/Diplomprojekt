import ToDo from "@/components/ToDo";
import { View, Text } from "react-native";

export default function DonorProfile() {
  return (
    <View>
      <Text> DonorProfile Screen</Text>
      <ToDo qualificationStepNumber={5}></ToDo>
    </View>
  );
}
