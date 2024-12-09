import Background2 from "@/components/Background2";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function TabTwoScreen() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingAppointments = [
    { id: 1, date: "November 10, 2024", time: "1:45 PM", location: "Fertio", type: "Blood test" },
    { id: 2, date: "November 20, 2024", time: "5:30 PM", location: "Fertio", type: "Interview 2" },
  ];

  const pastAppointments = [
    { id: 3, date: "November 1, 2024", time: "10:00 AM", location: "Fertio", type: "Interview 1" },
  ];

  const renderAppointment = ({ item }: any) => (
    <View style={styles.appointmentContainer}>
      <View>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{item.type}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Background2>
        <View style={styles.innerContainer}>
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
              style={[styles.tab, activeTab === "past" && styles.activeTabRight]}
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
      </Background2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 150, // Gør plads øverst på siden (ændret til 150 for at rykke tabs længere ned)
  },
  tabsContainer: {
    flexDirection: "row", // Sørger for at tabs vises på samme linje
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#e0e0e0", // Baggrund for hele tabområdet
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
    color: "#888",
  },
  activeTabText: {
    color: "#333",
    fontWeight: "bold",
  },
  appointmentsList: {
    flexGrow: 1,
    paddingBottom: 20, // Plads under listen for bedre visning
  },
  appointmentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  time: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  location: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
  button: {
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 14,
    color: "#333",
  },
});



