import Background2 from "@/components/Background2";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function TabTwoScreen() {
  //const AppointmentPage: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <View style={styles.container}>
          <Background2>
            <View>
              <ScrollView>
                <Text> hej</Text>
              </ScrollView>
            </View>
          </Background2>
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  text: {
    fontSize: 18,
  },
});

//export default AppointmentPage;
