import Background2 from "@/components/Background2";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function BloodUrinWhatWhy() {
  return (
    <Background2>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Overskrift */}
          <Text style={styles.title}>Why Do We Test?</Text>

          {/* Tekstsektion */}
          <Text style={styles.description}>
            It is an important part of the qualification process that we screen
            you for serious hereditary diseases. The purpose is to minimize the
            risk that children conceived with your sperm inherit a genetic
            defect from you that could cause a serious illness.
          </Text>

          {/* Sektion 2 */}
          <Text style={styles.title}>What Are We Testing For?</Text>
          <Text style={styles.description}>
            We take blood and urine samples, which we test for sexually
            transmitted diseases and certain genetic disorders. You will, of
            course, be informed of all the results.
          </Text>

          {/* Liste med STD's */}
          <Text style={styles.listTitle}>The STDs we test for include:</Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>• Chlamydia</Text>
            <Text style={styles.listItem}>• Genital Herpes</Text>
            <Text style={styles.listItem}>• Genital Warts</Text>
            <Text style={styles.listItem}>• Gonorrhea</Text>
            <Text style={styles.listItem}>• Syphilis</Text>
            <Text style={styles.listItem}>• HIV/AIDS</Text>
          </View>

          {/* Liste med genetiske sygdomme */}
          <Text style={styles.listTitle}>
            The genetic disorders we test for include:
          </Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>• Cystic Fibrosis</Text>
            <Text style={styles.listItem}>• Hemophilia</Text>
            <Text style={styles.listItem}>• Sickle Cell Anemia</Text>
            <Text style={styles.listItem}>• Huntington's Disease</Text>
          </View>

          {/* Afsluttende afsnit */}
          <Text style={styles.description}>
            You will receive information about your results in approximately 6
            weeks.
            Your samples will be quarantined until the blood and urine test is
            approved, but you will still be compensated.
          </Text>
        </View>
      </ScrollView>
    </Background2>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 90,
    paddingBottom: 30,
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Hvid baggrund
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#285C4B",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#4F4F4F",
    textAlign: "justify",
    lineHeight: 24,
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 18,
    fontFamily: "Georgia",
    fontWeight: "600",
    color: "#285C4B",
    marginBottom: 10,
    marginTop: 15,
  },
  listContainer: {
    marginBottom: 15, // Gør det lettere at læse mellem lister
  },
  listItem: {
    fontSize: 16,
    fontFamily: "Helvetica", // Ensartet skrifttype med resten af teksten
    color: "#4F4F4F",
    marginBottom: 5,
    paddingLeft: 10,
  },
});
