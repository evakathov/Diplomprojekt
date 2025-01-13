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
import Background2 from "@/components/Background2"; // Baggrundskomponent
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/FontAwesome";

const { height, width } = Dimensions.get("window");

export default function BloodUrineTest() {
  const youtubeUrlMobile =
    "https://www.youtube.com/embed/YaIBUHrvrMM?autoplay=0&modestbranding=1&rel=0&showinfo=0";
  const youtubeUrlWeb =
    "https://www.youtube.com/embed/YaIBUHrvrMM?autoplay=0&modestbranding=1&rel=0&showinfo=0";

  return (
    <Background2>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.paddingContainer}></View>
        <View style={styles.container}>
          {/* Overskrift */}
          <Text style={styles.mainTitle}>Blood & Urine Test</Text>

          {/* Underoverskrift */}
          <Text style={styles.subtitle}>
            During this stage, you will have to do both a blood and a urine
            test. Additionally, you need to upload a baby picture and complete a
            questionnaire, both will be used for your donor profile.
          </Text>

          {/* Information Section */}
          <View style={styles.infoSectionWrapper}>
            <View style={styles.infoSection}>
              <Text style={styles.description}>
                <Text style={styles.boldText}>Your donor coordinator </Text>
                will contact you regarding appointment booking.
              </Text>
              <Text style={styles.description}>
                <Text style={styles.boldText}>The appointment </Text>
                will take about 45-60 minutes.
              </Text>
              <Text style={styles.description}>
                <Text style={styles.boldText}>Firstly, </Text>
                we will take a blood and urine sample. It's important that you
                haven't urinated in the last hour before the urine sample.
              </Text>
              <Text style={styles.description}>
                <Text style={styles.boldText}>Secondly, </Text>
                you need to fill out some documents as part of your contract.
              </Text>
            </View>
          </View>

          {/* ToDo Component */}
          <View style={styles.todoContainer}>
            <ToDo qualificationStepNumber={4} />
          </View>

          {/* Additional Information */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              After your appointment, you can start donating regularly while
              being compensated.
            </Text>
          </View>

          {/* Video Description */}
          <Text style={styles.videoDescription}>Optimizing sperm quality:</Text>

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
    marginTop: 70,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  container: {
    backgroundColor: "#rgba(255, 255, 255, 0.6)", // Hvid baggrund
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    //elevation: 3,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#285c4b",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Georgia",
  },
  subtitle: {
    fontSize: 16,
    color: "#4F4F4F",
    lineHeight: 22,
    marginBottom: 20,
    fontFamily: "Helvetica",
    textAlign: "justify",
  },
  infoSectionWrapper: {
    backgroundColor: "#EDE7DB", // Beige omkreds
    padding: 1,
    borderRadius: 12,
  },
  infoSection: {
    backgroundColor: "#F0EAD6", // Beige baggrund
    padding: 15,
    borderRadius: 8,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#285c4b",
    fontFamily: "Helvetica",
    textAlign: "left",
  },
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 25,
    marginBottom: 10,
    fontFamily: "Helvetica",
  },
  todoContainer: {
    width: "100%",
    marginBottom: 20,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#285c4b",
    textAlign: "center",
    lineHeight: 25,
    marginTop: -25,
  },
  videoDescription: {
    fontSize: 18,
    color: "black",
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  webview: {
    width: width * 0.9,
    height: height * 0.4,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 20,
  },
  webContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
