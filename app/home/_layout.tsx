import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Stack>
        <Stack.Screen
          name="SampleAnalysis"
          options={{ title: "Step 1 - Sample Analysis" }}
        />
        <Stack.Screen
          name="InterviewInformation"
          options={{ title: "Step 2 - Interview & Information" }}
        />
        <Stack.Screen
          name="MedicalExamination"
          options={{ title: "Step 3 - Medical Examination" }}
        />
        <Stack.Screen
          name="BloodUrin"
          options={{ title: "Step 4 - Blood & Urin Test" }}
        />
        <Stack.Screen
          name="DonorProfile"
          options={{ title: "Step 5 - Donor Profile" }}
        />
        <Stack.Screen
          name="SurveyScreen"
          options={{ title: "Initial Questionnaire " }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures GestureHandlerRootView fills the <screen
    //kommentar
  },
});
