import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview"; // Husk at installere react-native-webview

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://www.youtube.com/watch?v=MWaY8j8ze3c" }} // Link til videoen
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  webview: {
    flex: 1,
  },
});

export default VideoScreen;
