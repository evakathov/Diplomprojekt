import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Background8 from "@/components/Background8";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CompensationScreen = () => {
  const compensationData = [
    {
      id: 1,
      title: "Donation",
      date: "21/10-2024",
      amount: "300 kr",
      icon: "test-tube",
    },
    {
      id: 2,
      title: "Doctor's consultation",
      date: "16/10-2024",
      amount: "600 kr",
      icon: "stethoscope",
    },
  ];

  return (
    <Background8>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Title and Description */}
          <Text style={styles.title}>Compensation</Text>
          <Text style={styles.description}>
            Here you can find an overview of your past compensations.
          </Text>

          {/* Compensation List */}
          {compensationData.map((item) => (
            <View key={item.id} style={styles.card}>
              {/* Left Section */}
              <View style={styles.leftSection}>
                <Icon
                  name={item.icon}
                  size={30}
                  color="#000" // Sorte ikoner
                  style={styles.icon}
                />
                <View>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
              </View>

              {/* Right Section */}
              <View style={styles.amountBox}>
                <Text style={styles.amountText}>{item.amount}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Background8>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 120, // Space for the logo
    paddingBottom: 50,
  },
  container: {
    paddingHorizontal: 20,
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
  card: {
    flexDirection: "row",
    backgroundColor: "#F0EAD6", // Light beige background
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    justifyContent: "space-between",
    alignItems: "center",
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
  icon: {
    marginRight: 15,
  },
  titleText: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "#333",
  },
  dateText: {
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#555",
    marginTop: 4,
  },
  amountBox: {
    backgroundColor: "#fff", // Hvid cirkel til beløbet
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Gør boksen cirkulær
    borderWidth: 1,
    borderColor: "#E3EDDC", // Lys grøn kant
    justifyContent: "center",
    alignItems: "center",
  },
  amountText: {
    fontSize: 14,
    fontFamily: "Helvetica", // Matcher teksten i AppointmentScreen
    fontWeight: "bold",
    color: "#333",
  },
});

export default CompensationScreen;
