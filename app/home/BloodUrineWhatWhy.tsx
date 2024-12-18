import Background3 from "@/components/Background3";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function BloodUrinWhatWhy() {
  return (
    <Background3>
      <View style={styles.container}>
        <Text> HEj</Text>
        <Text style={styles.text}>
          You will receive information about your results in approximately 6
          weeks. Your samples will be quarantined until the blood and urine test
          is approved, but you will still be compensated.
        </Text>
        <Text style={styles.heading}>WHAT DO WE TEST FOR?</Text>
        <Text style={styles.text}>
          It is an important part of the qualification process that we screen
          you for serious hereditary diseases. The purpose is to minimize the
          risk that children conceived with your sperm inherit a genetic defect
          from you that could cause a serious illness.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="checkmark-circle" size={24} color="white" />
          <Link href="/home/HowToGetGoodSperm">
            <Text style={styles.buttonText}>How to Get Good Sperm Quality</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </Background3>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
    lineHeight: 22,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#2d2d2d",
  },
  button: {
    flexDirection: "row", // Gør knappen horisontal
    alignItems: "center",
    backgroundColor: "#A3B78C", // Grøn farve til knappen
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    paddingBottom: 20,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
