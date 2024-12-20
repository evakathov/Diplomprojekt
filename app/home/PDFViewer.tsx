import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { WebView } from "react-native-webview";
import { useLocalSearchParams } from "expo-router";

export default function PdfViewer() {
  const { url } = useLocalSearchParams<{ url: string }>();

  if (!url) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No PDF URL provided</Text>
      </View>
    );
  }

  if (Platform.OS === "web") {
    // Web-specific rendering using iframe
    return (
      <View style={styles.container}>
        <iframe
          src={url}
          style={{
            width: "100%",
            height: "100%",
            border: "none", // Inline styling for iframe
          }}
          title="PDF Viewer"
        ></iframe>
      </View>
    );
  }

  // Mobile-specific rendering using WebView
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFullscreenVideo={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webview: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: 18,
    color: "#333",
  },
});
