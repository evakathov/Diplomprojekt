import ToDo from "@/components/ToDo";
import React from "react";
import { View, Text } from "react-native";

export default function InterviewInformation() {
  return (
    <View>
      <Text>InterviewInformation Screen</Text>
      <ToDo qualificationStepNumber={2}></ToDo>
    </View>
  );
}
