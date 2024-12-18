import Background3 from "@/components/Background3";
import ToDo from "@/components/ToDo";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function BloodUrin() {
  return (
    <Background3>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Now you only need one last visit bofore you can start donating! At
            this visit we need to go through three things. It will take about
            45-60 minutes:
          </Text>
          <Text style={styles.listItem}>
            1. We will take a blood and urine sample. It is important that you
            haven't urinated in the last hour before the urine sample.
          </Text>
          <Text style={styles.listItem}>
            2. You need to fill out some documents as part of your contract.
          </Text>
          <Text style={styles.listItem}>
            3. Please bring photos of yourself as a child (aged 2-5 years).
          </Text>
          <Text style={styles.text}>
            See or book your Appointment for the blood and urin test here:
          </Text>
          <TouchableOpacity style={styles.button}>
            <Link href="/appointment">
              <Text style={styles.buttonText}>Appointment</Text>
            </Link>
          </TouchableOpacity>

          <ToDo qualificationStepNumber={4} />

          {/* Additional Information */}
          <Text style={styles.text}>
            After your blood and urine test, you can donate regularly.
          </Text>
          <Text style={styles.text}>
            Now you may donate. Here is a video on how to maintain quality:
          </Text>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="checkmark-circle" size={24} color="white" />
            <Link href="/home/HowToGetGoodSperm">
              <Text style={styles.buttonText}>
                How to Get Good Sperm Quality
              </Text>
            </Link>
          </TouchableOpacity>

          {/* Information about Results */}
          <Text style={styles.text}>
            You will receive information about your results in approximately 6
            weeks. Your samples will be quarantined until the blood and urine
            test is approved, but you will still be compensated.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Link href="/compensation">
              <Text style={styles.buttonText}>
                Learn More About Compensation
              </Text>
            </Link>
          </TouchableOpacity>

          {/* Screening Purpose */}
          <Text style={styles.heading}>WHAT DO WE TEST FOR?</Text>
          <Text style={styles.text}>
            It is an important part of the qualification process that we screen
            you for serious hereditary diseases. The purpose is to minimize the
            risk that children conceived with your sperm inherit a genetic
            defect from you that could cause a serious illness.
          </Text>

          {/* Book Blood and Urine Test */}
          <TouchableOpacity style={styles.bookButton}>
            <Link href="/appointment">
              <Text style={styles.buttonText}>Book Blood and Urine Test</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Background3>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
    paddingTop: 50, // Flytter hele indholdet lidt ned
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#2d2d2d",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
    lineHeight: 22,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
    paddingLeft: 10,
  },
  button: {
    flexDirection: "row", // Gør knappen horisontal
    alignItems: "center",
    backgroundColor: "#A3B78C", // Grøn farve til knappen
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    paddingBottom: 20,
  },
  bookButton: {
    backgroundColor: "#a7c68e",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center", // Centrer indholdet
    alignItems: "center", // Centrer indholdet
    resizeMode: "cover", // Baggrund skal dække hele skærmen
  },
  // contentContainer: {
  //   alignItems: "center", // Centrer alle elementer horisontalt
  //   paddingHorizontal: 20,
  //   paddingVertical: 30,
  //   backgroundColor: "rgba(255, 255, 255, 0.7)", // Lys baggrund for læsbarhed
  //   borderRadius: 15,
  //   width: "90%", // Giver lidt bredde til containeren
  // },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },

  icon: {
    marginRight: 10, // Afstand mellem ikon og tekst
  },
});
