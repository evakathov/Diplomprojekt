import ToDo from "@/components/ToDo";
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import Background2 from "@/components/Background2";
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/FontAwesome";

const { height, width } = Dimensions.get("window");

export default function InterviewInformation() {
  const router = useRouter();

  const youtubeUrlMobile =
    "https://www.youtube.com/watch?v=YaIBUHrvrMM&ab_channel=EuropeanSpermBank";
  const youtubeUrlWeb =
    "https://www.youtube.com/watch?v=YaIBUHrvrMM&ab_channel=EuropeanSpermBank";

  const renderBoldFirstWord = (text: string) => {
    const words = text.split(" ");
    const firstWord = words.shift();
    const restOfText = words.join(" ");
    return (
      <Text>
        <Text style={styles.boldText}>{firstWord} </Text>
        <Text style={styles.description}>{restOfText}</Text>
      </Text>
    );
  };

  return (
    <Background2>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.paddingContainer}></View>
        <View style={styles.opaqueBackground}>
          {/* Header Section */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              During this stage, you will have to do both a blood and a urine
              test.
            </Text>
          </View>
          {/* Information Section */}
          <View style={styles.textContainer}>
            {renderBoldFirstWord(
              "Your donor coordinator will contact you regarding appointment booking."
            )}
            {renderBoldFirstWord(
              "The appointment will take about 45-60 minutes."
            )}
            <Icon name="circle" size={12} color="#285c4b" style={styles.icon} />
            {renderBoldFirstWord(
              "Firstly, we will take a blood and urine sample. It's important that you haven't urinated in the last hour before the urine sample."
            )}
            {renderBoldFirstWord(
              "Secondly, you need to fill out some documents as part of your contract."
            )}
          </View>

          {/* ToDo Component */}
          <View style={styles.todoContainer}>
            <ToDo qualificationStepNumber={4} />
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              After your appointment you can start donating regularly while
              being compensated.
            </Text>
          </View>

          {/* Video Description */}
          <Text style={styles.videoDescription}>Improving sperm quality:</Text>

          {/* Video Section */}
          {Platform.OS === "web" ? (
            <View style={styles.webContainer}>
              <iframe
                src={youtubeUrlWeb}
                style={{
                  width: "85%",
                  height: height * 0.4,
                  borderRadius: 10,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </View>
          ) : (
            <WebView
              source={{ uri: youtubeUrlMobile }}
              style={styles.webview}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsFullscreenVideo={true}
              mediaPlaybackRequiresUserAction={true}
              scalesPageToFit={true}
            />
          )}
        </View>
      </ScrollView>
    </Background2>
  );
}

const styles = StyleSheet.create({
  paddingContainer: {
    marginTop: 60,
  },
  opaqueBackground: {
    backgroundColor: "rgba(248, 246, 226, 0.75)", // White with 80% opacity
    padding: 5, // Optional, for spacing
    borderRadius: 20, // Optional, for rounded corners
    marginBottom: 5, // Optional, for spacing between sections
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerContainer: {
    marginBottom: 20, // Increased margin for spacing between sections
    paddingHorizontal: 15,
    paddingVertical: 15, // Increased vertical padding
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center", // Center the content
  },
  headerText: {
    fontSize: 25, // Increased font size for better readability
    fontWeight: "bold",
    color: "#285c4b",
    textAlign: "center",
    lineHeight: 30, // Increased line height for better readability and spacing
    marginVertical: 10, // Added margin for spacing around the text
  },
  textContainer: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    //shadowColor: "#000",
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.1,
    //shadowRadius: 3,
    //elevation: 3,
    alignItems: "flex-start",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#285c4b",
  },
  description: {
    fontSize: 16,
    color: "#888",
    padding: 20,
    lineHeight: 25,
  },
  icon: {
    marginVertical: 10,
    alignSelf: "center",
  },
  todoContainer: {
    width: "100%",
  },
  videoDescription: {
    fontSize: 18,
    color: "black",
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  webview: {
    width: width * 0.9,
    height: height * 0.4,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
  webContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
