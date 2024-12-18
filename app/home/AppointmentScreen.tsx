import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Background6 from "@/components/Background6";
import Feather from "react-native-vector-icons/Feather";

const AppointmentScreen = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingAppointments = [
    { id: 1, date: "November 10, 2024", time: "1:45 PM", location: "Fertio", type: "Blood Test" },
    { id: 2, date: "November 20, 2024", time: "5:30 PM", location: "Fertio", type: "Interview 2" },
  ];

  const pastAppointments = [
    { id: 3, date: "November 1, 2024", time: "10:00 AM", location: "Fertio", type: "Interview 1" },
  ];

  const renderAppointment = ({ item }: any) => (
    <View style={styles.appointmentContainer}>
      <View style={styles.leftSection}>
        <View>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.whiteCircle}>
        <Text style={styles.buttonText}>{item.type}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Background6>
      <View style={styles.container}>
        <Text style={styles.title}>Appointments</Text>
        <Text style={styles.description}>
          Here you can find an overview of your upcoming and past appointments.
        </Text>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "upcoming" && styles.activeTabLeft,
            ]}
            onPress={() => setActiveTab("upcoming")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "upcoming" && styles.activeTabText,
              ]}
            >
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "past" && styles.activeTabRight,
            ]}
            onPress={() => setActiveTab("past")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "past" && styles.activeTabText,
              ]}
            >
              Past
            </Text>
          </TouchableOpacity>
        </View>

        {/* Appointment List */}
        <FlatList
          data={
            activeTab === "upcoming" ? upcomingAppointments : pastAppointments
          }
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderAppointment}
          contentContainerStyle={styles.appointmentsList}
        />
      </View>
    </Background6>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#285C4B",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#E3EDDC",
    borderRadius: 25,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 25,
  },
  activeTabLeft: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  activeTabRight: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  tabText: {
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#888",
  },
  activeTabText: {
    color: "#285C4B",
    fontWeight: "bold",
  },
  appointmentsList: {
    paddingBottom: 20,
  },
  appointmentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F0EAD6",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  time: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  location: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
  whiteCircle: {
    backgroundColor: "#fff", // Hvid cirkel
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderColor: "#E3EDDC",
    borderWidth: 1, // Giver en let kant med grøn
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "#333",
  },
});

export default AppointmentScreen;
