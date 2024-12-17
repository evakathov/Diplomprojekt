import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Background4 from "@/components/Background4";
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
    <Background4>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {compensationData.map((item) => (
            <View key={item.id} style={styles.card}>
              {/* Venstre sektion med ikon og tekst */}
              <View style={styles.leftSection}>
                <Icon name={item.icon} size={30} color="#333" style={styles.icon} />
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              </View>

              {/* Højre sektion med beløb */}
              <View style={styles.amountBox}>
                <Text style={styles.amount}>{item.amount}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Background4>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 150, // Giver plads til logo
    paddingBottom: 50,
  },
  container: {
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F0EAD6", // Lysere beige farve
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  date: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  amountBox: {
    backgroundColor: "#EDE7DB", // Lysere boks til beløbet
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  amount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});

export default CompensationScreen;



