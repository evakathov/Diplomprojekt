import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

const { height, width } = Dimensions.get("window");

const VideoScreen = () => {
  const youtubeUrlMobile = "https://www.youtube.com/watch?v=dHyq66SG2fo";
  const youtubeUrlWeb = "https://www.youtube.com/embed/dHyq66SG2fo";

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Watch this video to learn about the medical examination and know what to expect.
      </Text>
      {Platform.OS === "web" ? (
        <div style={styles.webContainer}>
          <iframe
            src={youtubeUrlWeb}
            style={{
              width: "80%",
              height: height * 0.7, // Dynamisk højde for web
            }}
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      ) : (
        <WebView
          source={{ uri: youtubeUrlMobile }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  } as const,
  description: {
    fontSize: 16,
    color: "#333",
    padding: 16,
    textAlign: "center",
  } as const,
  webview: {
    width: width, // Brug hele bredden af skærmen
    height: height * 0.7, // Dynamisk højde på mobil
  } as const,
  webContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as const,
});

export default VideoScreen;


