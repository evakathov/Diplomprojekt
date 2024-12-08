import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Stack>
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
      </Stack>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures GestureHandlerRootView fills the screen
  },
});
