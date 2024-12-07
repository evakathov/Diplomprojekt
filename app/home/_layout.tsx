import { Header } from "@react-navigation/stack";
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="SampleAnalysis"
        options={{ title: "Sample Analysis" }}
      />
      <Stack.Screen
        name="InterviewInformation"
        options={{ title: "Interview & Information" }}
      />
      <Stack.Screen
        name="MedicalExamination"
        options={{ title: "Medical Examination" }}
      />
      <Stack.Screen
        name="BloodUrin"
        options={{ title: "Blood & Urine Test" }}
      />
      <Stack.Screen name="DonorProfile" options={{ title: "Donor Profile" }} />
    </Stack>
  );
}
