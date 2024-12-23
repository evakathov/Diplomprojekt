import React from "react";
import { TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

export default function HomeLayout() {
  const router = useRouter();

  return (
    <GestureHandlerRootView style={styles.container}>
      <Stack>
        <Stack.Screen
          name="SampleAnalysis"
          options={{
            title: "Step 1 - Sample Analysis",
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Icon name="arrow-back" size={24} color="#4F4F4F" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="InterviewInformation"
          options={{
            title: "Step 2 - Interview & Information",
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Icon name="arrow-back" size={24} color="#4F4F4F" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="MedicalExamination"
          options={{
            title: "Step 3 - Medical Examination",
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Icon name="arrow-back" size={24} color="#4F4F4F" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="BloodUrin"
          options={{
            title: "Step 4 - Blood & Urin Test",
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Icon name="arrow-back" size={24} color="#4F4F4F" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="DonorProfile"
          options={{
            title: "Step 5 - Donor Profile",
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Icon name="arrow-back" size={24} color="#4F4F4F" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="SurveyScreen"
          options={{
            title: "Initial Questionnaire",
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Icon name="arrow-back" size={24} color="#6C8B74" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    padding: 10,
  },
});
