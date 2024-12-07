import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TabTwoScreen() {
  //const AppointmentPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text> Hej</Text>
    </View>
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

//export default AppointmentPage;
