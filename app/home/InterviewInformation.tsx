import ToDo from "@/components/ToDo";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, ScrollView, StyleSheet, Platform, Dimensions } from "react-native";
import Background2 from "@/components/Background2"; // Importer Background2 som baggrund
import { WebView } from "react-native-webview";

const { height, width } = Dimensions.get("window");

export default function InterviewInformation() {
  const router = useRouter();

  const youtubeUrlMobile = "https://www.youtube.com/embed/dHyq66SG2fo?autoplay=0&modestbranding=1&rel=0&showinfo=0";
  const youtubeUrlWeb = "https://www.youtube.com/embed/dHyq66SG2fo?autoplay=0&modestbranding=1&rel=0&showinfo=0";

  return (
    <Background2>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Beskrivelsen over ToDo */}
        <Text style={styles.description}>
          Before your interview, you must complete a survey and thoroughly
          prepare by reviewing the provided preparation materials. It is
          important to be well-prepared. You can see how and what to prepare for
          by clicking the button below. This will help ensure a successful
          interview process.
        </Text>

        {/* ToDo-komponent */}
        <View style={styles.todoContainer}>
          <ToDo qualificationStepNumber={2} />
        </View>

        {/* Beskrivelsen over videoen */}
        <Text style={styles.videoDescription}>Learn about your journey:</Text>

        {/* Video */}
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
      </ScrollView>
    </Background2>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: -10, // Flyt teksten øverst lidt ned
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5, // Mindre afstand mellem beskrivelse og knapper
  },
  todoContainer: {
    width: "100%",
    marginBottom: -10, // Mindre afstand mellem knapper og teksten efter knapper
  },
  videoDescription: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10, // Reduceret afstand mellem teksten og videoen
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
});
