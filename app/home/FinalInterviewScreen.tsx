import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background6 from "@/components/Background6";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from "react-native-vector-icons/Feather";

export default function FinalInterviewScreen() {
  const router = useRouter();
  const [completedButtons, setCompletedButtons] = useState<string[]>([]);

  const STORAGE_KEY = "FinalInterviewStatus";

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const savedStatus = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedStatus !== null) {
          setCompletedButtons(JSON.parse(savedStatus));
        }
      } catch (error) {
        console.error("Failed to load status from AsyncStorage", error);
      }
    };

    fetchStatus();
  }, []);

  const handlePress = async (button: string, action: () => void) => {
    const isCompleted = completedButtons.includes(button);
    const updatedButtons = isCompleted
      ? completedButtons.filter((b) => b !== button) // Remove if already completed
      : [...completedButtons, button]; // Add if not completed

    setCompletedButtons(updatedButtons);

    // Save the updated state to AsyncStorage
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedButtons));
    } catch (error) {
      console.error("Failed to save status to AsyncStorage", error);
    }

    // Only navigate if the button is being set to completed (true)
    if (!isCompleted) {
      action();
    }
  };

  return (
    <Background6>
      <View style={styles.container}>
        <View style={styles.opaqueBackground}>
          <Text style={styles.title}>Final Interview</Text>

          <Text style={styles.intro}>
            Under your final interview, we will record an{" "}
            <Text style={styles.highlightText}>audio</Text>, review your{" "}
            <Text style={styles.highlightText}>donor profile</Text>, and you
            will write a{" "}
            <Text style={styles.highlightText}>handwritten note</Text>.{" "}
            <Text style={styles.italicText}>Find more information below.</Text>
          </Text>

          {/* Audio Button */}
          <TouchableOpacity
            style={[
              styles.button,
              completedButtons.includes("Audio") && styles.buttonCompleted,
            ]}
            onPress={() =>
              handlePress("Audio", () =>
                router.push({
                  pathname: "/home/PDFViewer",
                  params: {
                    url: "https://test-app.donor.4a4b.dk/Audio_interview_questions.pdf",
                  },
                })
              )
            }
          >
            <Feather
              name="headphones"
              size={20}
              color={completedButtons.includes("Audio") ? "#333" : "#333"}
              style={styles.icon}
            />
            <Text
              style={[
                styles.buttonText,
                completedButtons.includes("Audio") &&
                  styles.buttonTextCompleted,
              ]}
            >
              Audio
            </Text>
          </TouchableOpacity>

          {/* Handwritten Notes Button */}
          <TouchableOpacity
            style={[
              styles.button,
              completedButtons.includes("HandwrittenNotes") &&
                styles.buttonCompleted,
            ]}
            onPress={() =>
              handlePress("HandwrittenNotes", () =>
                router.push("/home/HandwrittenNoteScreen")
              )
            }
          >
            <Feather
              name="edit-2"
              size={20}
              color={
                completedButtons.includes("HandwrittenNotes") ? "#333" : "#333"
              }
              style={styles.icon}
            />
            <Text
              style={[
                styles.buttonText,
                completedButtons.includes("HandwrittenNotes") &&
                  styles.buttonTextCompleted,
              ]}
            >
              Handwritten Notes
            </Text>
          </TouchableOpacity>

          {/* Information Details Button */}
          <TouchableOpacity
            style={[
              styles.button,
              completedButtons.includes("InformationDetails") &&
                styles.buttonCompleted,
            ]}
            onPress={() =>
              handlePress("InformationDetails", () =>
                router.push("/home/InformationDetailsScreen")
              )
            }
          >
            <Feather
              name="info"
              size={20}
              color={
                completedButtons.includes("InformationDetails")
                  ? "#333"
                  : "#333"
              }
              style={styles.icon}
            />
            <Text
              style={[
                styles.buttonText,
                completedButtons.includes("InformationDetails") &&
                  styles.buttonTextCompleted,
              ]}
            >
              Final Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background6>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  opaqueBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    //elevation: 3,
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#285C4B",
    marginBottom: 20,
    textAlign: "center",
  },
  intro: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "400",
    color: "#4F4F4F",
    textAlign: "justify",
    marginBottom: 25,
    lineHeight: 24,
  },
  highlightText: {
    color: "#6C8B74",
    fontWeight: "600",
  },
  italicText: {
    color: "#6C8B74",
    fontStyle: "italic",
    fontWeight: "600",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#E3EDDC",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    justifyContent: "flex-start",
    marginBottom: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonCompleted: {
    backgroundColor: "#C5D8B6",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "#4F4F4F",
    marginLeft: 10,
  },
  buttonTextCompleted: {
    color: "#4F4F4F",
    textDecorationLine: "line-through",
    textDecorationColor: "#555",
  },
  icon: {
    marginRight: 10,
  },
});
