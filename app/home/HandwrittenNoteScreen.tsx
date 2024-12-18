import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background6 from "@/components/Background6";
import Feather from "react-native-vector-icons/Feather"; // Brug Feather-ikoner
import { useRouter } from "expo-router";

export default function HandwrittenNotesScreen() {
  const router = useRouter();

  return (
    <Background6>
      <View style={styles.container}>
        <Text style={styles.title}>Handwritten Notes</Text>

        {/* Første afsnit */}
        <Text style={styles.description}>
          Your online profile will include a <Text style={styles.highlightText}>handwritten note</Text> with a greeting to a potential donor child.
        </Text>

        {/* Tredje afsnit */}
        <Text style={styles.description}>
          Below, you will find a <Text style={styles.highlightText}>guide</Text> and a <Text style={styles.highlightText}>template</Text> to help you craft a meaningful message.
        </Text>

        {/* Guide Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: "/home/PDFViewer",
              params: { url: "https://test-app.donor.4a4b.dk/Handwritten_message_quide.pdf" },
            })
          }
        >
          <Feather name="book-open" size={20} color="#333" style={styles.icon} />
          <Text style={styles.buttonText}>Guide</Text>
        </TouchableOpacity>

        {/* Template Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: "/home/PDFViewer",
              params: { url: "https://test-app.donor.4a4b.dk/Handwritten_message_template.pdf" },
            })
          }
        >
          <Feather name="edit" size={20} color="#333" style={styles.icon} />
          <Text style={styles.buttonText}>Template</Text>
        </TouchableOpacity>

        {/* Please Note */}
        <Text style={[styles.description, styles.noteText]}>
          <Text style={styles.noteTitle}>Please Note: </Text>
          Your greeting must be in <Text style={styles.highlightText}>English</Text>. We would appreciate it if you could take some time to think about what you would like to write.
        </Text>
      </View>
    </Background6>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "400",
    color: "#222",
    textAlign: "justify",
    marginBottom: 15,
    lineHeight: 24,
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
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
    width: "90%",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  noteTitle: {
    fontWeight: "bold",
    color: "#222",
  },
  noteText: {
    marginTop: 20, // Lidt afstand over "Please Note"
  },
});
