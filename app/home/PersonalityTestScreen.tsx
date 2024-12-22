import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import Background6 from "@/components/Background6";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PersonalityTestScreen() {
  const [isCompleted, setIsCompleted] = useState(false);

  const STORAGE_KEY = "PersonalityTestStatus";

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const savedStatus = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedStatus !== null) {
          setIsCompleted(JSON.parse(savedStatus));
        }
      } catch (error) {
        console.error("Failed to load status from AsyncStorage", error);
      }
    };

    fetchStatus();
  }, []);

  const openPersonalityTest = async () => {
    const url = "https://www.16personalities.com/free-personality-test";
    try {
      await Linking.openURL(url);
      handleComplete();
    } catch (err) {
      console.error("Failed to open URL: ", err);
    }
  };

  const handleComplete = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(true));
      setIsCompleted(true);
    } catch (error) {
      console.error("Failed to save status to AsyncStorage", error);
    }
  };

  return (
    <Background6>
      <View style={styles.container}>
        <View style={styles.opaqueBackground}>
          <Text style={styles.title}>Personality Test</Text>

          <Text style={styles.description}>
            To proceed, please take the{" "}
            <Text style={styles.highlightText}>personality test</Text>. This
            will help us better understand your unique traits.
          </Text>

          <TouchableOpacity
            style={[styles.button, isCompleted && styles.buttonCompleted]}
            onPress={openPersonalityTest}
          >
            <Feather
              name="user-check"
              size={20}
              color={isCompleted ? "#4F4F4F" : "#333"}
              style={styles.icon}
            />
            <Text
              style={[
                styles.buttonText,
                isCompleted && styles.buttonTextCompleted,
              ]}
            >
              Take the Personality Test
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
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#285C4B",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#4F4F4F",
    textAlign: "justify",
    marginBottom: 30,
    lineHeight: 24,
  },
  highlightText: {
    color: "#6C8B74",
    fontWeight: "600",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3EDDC",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonCompleted: {
    backgroundColor: "#C5D8B6",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "#4F4F4F",
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
