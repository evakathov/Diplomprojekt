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
    "https://www.youtube.com/embed/ebveZy-w2PU?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.europeanspermbank.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=7";
  const youtubeUrlWeb =
    "https://www.youtube.com/embed/ebveZy-w2PU?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.europeanspermbank.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=7";

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
            <Text style={styles.highlightText}>questionnaire</Text> and review
            the{" "}
            <Text style={styles.highlightText}>
              provided preparation material
            </Text>
            . It is important to be well-prepared. This will help ensure a{" "}
            <Text style={styles.highlightText}>
              successful interview process
            </Text>
            .
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
    paddingHorizontal: 1,
  },
  opaqueBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Hvid baggrund med 80% gennemsigtighed
    padding: 5, // Indre afstand
    borderRadius: 18, // Afrundede hjørner
    marginBottom: 15, // Afstand mellem sektioner
    shadowColor: "#000", // Skyggefarve
    shadowOffset: { width: 0, height: 2 }, // Skyggens position
    shadowOpacity: 0.1, // Skyggens gennemsigtighed
    shadowRadius: 4, // Skyggens spredning
    //elevation: 3, // Skygge til Android
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
