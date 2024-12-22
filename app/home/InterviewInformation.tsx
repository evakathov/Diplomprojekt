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
import Background2 from "@/components/Background2"; // Importer Background2 som baggrund
import { WebView } from "react-native-webview";

const { height, width } = Dimensions.get("window");

export default function InterviewInformation() {
  const router = useRouter();

  const youtubeUrlMobile =
    "https://www.youtube.com/embed/dHyq66SG2fo?autoplay=0&modestbranding=1&rel=0&showinfo=0";
  const youtubeUrlWeb =
    "https://www.youtube.com/embed/dHyq66SG2fo?autoplay=0&modestbranding=1&rel=0&showinfo=0";

  return (
    <Background2>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.paddingContainer}></View>
        <View style={styles.opaqueBackground}>
          {/* Overskrift */}
          <Text style={styles.title}>Interview & Information</Text>

          {/* Beskrivelse */}
          <Text style={styles.description}>
            Before your first interview, you must complete a{" "}
            <Text style={styles.highlightText}>questionnaire</Text> and review the{" "}
            <Text style={styles.highlightText}>provided preparation material</Text>.{" "}
            It is important to be well-prepared.{" "}
            This will help ensure a{" "}
            <Text style={styles.highlightText}>successful interview process</Text>.
          </Text>

          {/* ToDo-komponent */}
          <View style={styles.todoContainer}>
            <ToDo qualificationStepNumber={2} />
          </View>

          {/* Video Sektion */}
          <Text style={styles.videoDescription}>Learn about your journey:</Text>
          {Platform.OS === "web" ? (
            <View style={styles.webContainer}>
              <iframe
                src={youtubeUrlWeb}
                style={{
                  width: "85%", // Reduceret bredde for bedre proportioner
                  height: height * 0.4, // Gør videoen mindre høj
                  borderRadius: 10, // Lidt afrundede hjørner
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
    marginTop: 75,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 15,
  },
  opaqueBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // White with 80% opacity
    padding: 5, // Optional, for spacing
    borderRadius: 18, // Optional, for rounded corners
    marginBottom: 15, // Optional, for spacing between sections
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#285C4B",
    marginBottom: 0,
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#4F4F4F",
    padding: 20, // Tilpasser indrykket på begge sider
    lineHeight: 24, // Forbedrer læsbarheden
    textAlign: "left", // Venstrejusteret tekst
    marginBottom: -15, // Reduceret afstand mellem beskrivelse og ToDo
  },
  todoContainer: {
    width: "100%",
    marginTop: 0, // Reduceret afstand mellem beskrivelse og ToDo
    marginBottom: -15, // Afstand mellem ToDo og video
  },
  videoDescription: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15, // Reduceret afstand mellem teksten og videoen
    textAlign: "center",
    fontWeight: "bold",
  },
  webview: {
    width: width * 0.9, // Justeret bredde til 90% af skærmen
    height: height * 0.4, // Gør videoen mindre høj
    borderRadius: 10, // Afrundede hjørner
    alignSelf: "center",
    marginBottom: 20, // Afstand under videoen
  },
  webContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20, // Afstand under videoen
  },
  highlightText: {
    color: "#6C8B74", // Grøn farve
    fontWeight: "bold", // Fed for at fremhæve ordene
    fontFamily: "Helvetica", // Matcher det eksisterende layout
  },
});

