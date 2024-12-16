import CheckUserQuery from "@/components/CheckUserQuery";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TabTreeScreen() {
  //const AppointmentPage: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>This is the compensation site</Text>
      </View>
      <CheckUserQuery></CheckUserQuery>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
