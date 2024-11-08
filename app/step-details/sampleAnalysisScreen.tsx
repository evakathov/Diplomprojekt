import MetadataComponent from "@/components/MetadataComponent";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function SampleScreen() {
  return (
    <View style={styles.screen}>
      <MetadataComponent value={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
