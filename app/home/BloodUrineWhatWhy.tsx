import Background3 from "@/components/Background3";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function BloodUrinWhatWhy() {
  return (
    <Background3>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.paddingContainer}></View>
        <View style={styles.opaqueBackground}>
          <View style={styles.container}>
            <Text style={styles.heading}> WHY DO WE TEST?</Text>
            <Text style={styles.text}>
              It is an important part of the qualification process that we
              screen you for serious hereditary diseases. The purpose is to
              minimize the risk that children conceived with your sperm inherit
              a genetic defect from you that could cause a serious illness.
            </Text>
            <Text style={styles.heading}> WHAT ARE WE TESTING FOR?</Text>

            <Text style={styles.text}>
              We take blood and urine samples, which we test for sexually
              transmitted diseases and certain genetic disorders. You will, of
              course, be informed of all the results.{"\n"}
              The STD's we are testing for are: {"\n"}
              {"\n"}- Chlamydia {"\n"}- Genital Herpes{"\n"}- Genital Warts
              {"\n"}- Gonorrhea{"\n"}- Syphilis{"\n"}- HIV/AIDS{"\n"}
              {"\n"}The genetic disorders we are testing for are: {"\n"}- Cystic
              Fibrosis{"\n"}- Hemophilia{"\n"}- Sickle Cell Anemia{"\n"}-
              Huntington's Disease{"\n"}
            </Text>
            <Text style={styles.text}>
              You will receive information about your results in approximately 6
              weeks. Your samples will be quarantined until the blood and urine
              test is approved, but you will still be compensated.
            </Text>
          </View>
        </View>
      </ScrollView>
    </Background3>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  paddingContainer: {
    marginTop: 65,
  },
  opaqueBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.75)", // White with 80% opacity
    padding: 5, // Optional, for spacing
    borderRadius: 20, // Optional, for rounded corners
    marginBottom: 5, // Optional, for spacing between sections
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
    paddingHorizontal: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",

    paddingLeft: 10,
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
    marginTop: 10,
    marginBottom: 10,
    color: "#285c4b",
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
