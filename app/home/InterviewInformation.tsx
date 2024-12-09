import ToDo from "@/components/ToDo";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Background2 from "@/components/Background2"; // Importer Background2 som baggrund

export default function InterviewInformation() {
  const router = useRouter();

  return (
    <Background2>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.description}>
          Before your interview, you must complete a survey and thoroughly
          prepare by reviewing the provided preparation materials. It is
          important to be well-prepared. You can see how and what to prepare for
          by clicking the button below. This will help ensure a successful
          interview process.
        </Text>

        <View style={styles.todoContainer}>
          <ToDo qualificationStepNumber={2} />
        </View>
      </ScrollView>
    </Background2>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  todoContainer: {
    width: "100%",
  },
});



