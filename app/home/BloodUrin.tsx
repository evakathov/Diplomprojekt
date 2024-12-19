import Background from "@/components/Background";
import Background2 from "@/components/Background2";
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
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BloodUrin() {
  return (
    <Background2>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Now you only need one last visit bofore you can donate regularly and
            get compensated!
          </Text>
          {/*<Text style={styles.text}>
            
             At this visit we need to go through three things. It will take about
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
          </Text> */}

          <View style={styles.contentContainer}>
            <View style={styles.buttonGroup}>
              {/* Første tekst og knap */}
              <View style={styles.textButtonContainer}>
                <Text style={styles.text}>
                  See or book your Appointment for the last test here:
                </Text>
                <TouchableOpacity style={styles.bookButton}>
                  <Link href="/appointment">
                    <Icon name={"calendar"} color="white" size={20} />
                    <Text style={styles.buttonText}>Appointment</Text>
                  </Link>
                </TouchableOpacity>
              </View>

              {/* Anden tekst og knap */}
              <View style={styles.textButtonContainer}>
                <Text style={styles.text}>Check your compensation here:</Text>
                <TouchableOpacity style={styles.bookButton}>
                  <Link href="/compensation">
                    <Icon name={"money"} color="white" size={20} />
                    <Text style={styles.buttonText}>Compensation</Text>
                  </Link>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.todoContainer}>
            <ToDo qualificationStepNumber={4} />
          </View>

          {/* Additional Information */}

          <Text style={styles.text}>
            Now you may donate. Here is a video on how to maintain quality:
          </Text>
        </View>
      </ScrollView>
    </Background2>
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
    justifyContent: "center",
    alignItems: "center",
  },

  todoContainer: {
    width: "100%",
    marginBottom: -10, // Mindre afstand mellem knapper og teksten efter knapper
  },
  buttonGroup: {
    flexDirection: "row", // Lægger de to knap-grupper ved siden af hinanden
    justifyContent: "space-between",
    width: "100%",
  },
  textButtonContainer: {
    flexDirection: "column", // Tekst over knappen
    alignItems: "center", // Centrer både tekst og knap
    flex: 1, // Lige meget plads til hver knap-gruppe
    marginHorizontal: 5, // Lidt plads mellem grupperne
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 15,
    width: "90%",
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
    width: "100%",
  },
  bookButton: {
    backgroundColor: "#7DA3C8",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
    flexDirection: "row", // Sørger for at ikonet og teksten står side om side
    justifyContent: "center", // Centrerer indholdet horisontalt
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8, // Giver afstand mellem ikon og tekst
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center", // Centrer indholdet
    alignItems: "center", // Centrer indholdet
    resizeMode: "cover", // Baggrund skal dække hele skærmen
  },

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
  iconTextContainer: {
    flexDirection: "row", // Læg ikonet og teksten ved siden af hinanden
    alignItems: "center", // Centrer begge vertikalt
  },
  icon: {
    marginRight: 10, // Afstand mellem ikon og tekst
  },
});
