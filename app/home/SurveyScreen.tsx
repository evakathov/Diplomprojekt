import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import Background2 from "@/components/Background2";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SurveyScreen() {
  const [initialCompleted, setInitialCompleted] = useState(false);
  const [profileCompleted, setProfileCompleted] = useState(false);

  const STORAGE_KEYS = {
    initial: "InitialQuestionnaireStatus",
    profile: "DonorProfileQuestionnaireStatus",
  };

  // Function to toggle status and open URL if status becomes true
  const handleButtonPress = async (
    url: string,
    type: "initial" | "profile"
  ) => {
    let newStatus;
    if (type === "initial") {
      newStatus = !initialCompleted;
      setInitialCompleted(newStatus);
    } else {
      newStatus = !profileCompleted;
      setProfileCompleted(newStatus);
    }

    try {
      const key =
        type === "initial" ? STORAGE_KEYS.initial : STORAGE_KEYS.profile;
      await AsyncStorage.setItem(key, JSON.stringify(newStatus));

      if (newStatus) {
        if (Platform.OS === "web") {
          window.open(url, "_blank");
        } else {
          await Linking.openURL(url);
        }
      }
    } catch (error) {
      console.error("Failed to toggle status or open URL:", error);
    }
  };

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const initialSavedStatus = await AsyncStorage.getItem(
          STORAGE_KEYS.initial
        );
        const profileSavedStatus = await AsyncStorage.getItem(
          STORAGE_KEYS.profile
        );

        if (initialSavedStatus !== null) {
          setInitialCompleted(JSON.parse(initialSavedStatus));
        }
        if (profileSavedStatus !== null) {
          setProfileCompleted(JSON.parse(profileSavedStatus));
        }
      } catch (error) {
        console.error("Failed to load status from AsyncStorage", error);
      }
    };

    fetchStatus();
  }, []);

  return (
    <Background2>
      <View style={styles.scrollContainer}>
        <View style={styles.opaqueBackground}>
          <Text style={styles.title}>Questionnaires</Text>

          {/* Initial Questionnaire Section */}
          <View style={styles.section}>
            <Text style={styles.sectionDescription}>
              The{" "}
              <Text style={styles.highlightText}>Initial Questionnaire</Text>{" "}
              must be completed{" "}
              <Text style={styles.highlightText}>
                before your first interview
              </Text>
              . This is used to gather important medical and personal details
              about you.
            </Text>
            <TouchableOpacity
              style={[
                styles.button,
                initialCompleted && styles.buttonCompleted,
              ]}
              onPress={() =>
                handleButtonPress(
                  "https://testdonorportal.europeanspermbank.com/register/?invitation=MGDlhD0xtI9sGHBC01xwmqGDuzAVlsfkWDSJLtOj43XRe41zLJ2p0yvPy3S8uNB4I8HcWG7pMBpktEFHuXKinsgRJqmzRNJ4uzQ1xbaZSThZ4nKd3mPLDvhG2C51r2pb-fyRK1BpcTPyYaFN1mp6kOqNiLnmV3HaySRUXgPj0Zs-&returnUrl=%2Fsperm%2Finfo-details-sperm",
                  "initial"
                )
              }
            >
              <Feather
                name="edit"
                size={20}
                color="#4F4F4F"
                style={styles.icon}
              />
              <Text
                style={[
                  styles.buttonText,
                  initialCompleted && styles.buttonTextCompleted,
                ]}
              >
                Initial Questionnaire
              </Text>
            </TouchableOpacity>
          </View>

          {/* Donor Profile Questionnaire Section */}
          <View style={styles.section}>
            <Text style={styles.sectionDescription}>
              The{" "}
              <Text style={styles.highlightText}>
                Donor Profile Questionnaire
              </Text>{" "}
              helps us present you{" "}
              <Text style={styles.highlightText}>
                professionally to customers
              </Text>
              . It should be completed{" "}
              <Text style={styles.highlightText}>
                before your final interview
              </Text>
              .
            </Text>
            <TouchableOpacity
              style={[
                styles.button,
                profileCompleted && styles.buttonCompleted,
              ]}
              onPress={() =>
                handleButtonPress(
                  "https://testdonorportal.europeanspermbank.com/SignIn?returnUrl=%2Fsperm",
                  "profile"
                )
              }
            >
              <Feather
                name="file-text"
                size={20}
                color="#4F4F4F"
                style={styles.icon}
              />
              <Text
                style={[
                  styles.buttonText,
                  profileCompleted && styles.buttonTextCompleted,
                ]}
              >
                Donor Profile Questionnaire
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background2>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 90,
  },
  opaqueBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#285C4B",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
  },
  sectionDescription: {
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#4F4F4F",
    lineHeight: 24,
    marginBottom: 15,
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
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "flex-start",
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
