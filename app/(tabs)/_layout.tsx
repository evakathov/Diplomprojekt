import { Tabs } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#6C8B74", // Grøn farve til aktive ikoner/tekst
          tabBarInactiveTintColor: "#555", // Neutral farve til inaktive ikoner/tekst
          tabBarStyle: {
            backgroundColor: "#F0EAD6", // Lys beige baggrund
            borderTopWidth: 2,
            borderTopColor: "#6C8B74", // Grøn kantlinje
            height: 65, // Justeret højde for bedre design
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 3,
          },
          tabBarLabelStyle: {
            fontSize: 12, // Gør teksten lidt større
            fontFamily: "Helvetica", // Konsistent skrifttype
            fontWeight: "600", // Fremhævning af teksten
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"} // Brug understøttet ikon
                color={color}
                size={21} // Gør ikonerne større
              />
            ),
          }}
        />
        <Tabs.Screen
          name="appointment"
          options={{
            title: "Appointments",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "calendar" : "calendar-outline"} // Brug understøttet ikon
                color={color}
                size={21}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="compensation"
          options={{
            title: "Compensation",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "cash-outline" : "card-outline"} // Brug understøttede ikoner
                color={color}
                size={21}
              />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Sørger for at `GestureHandlerRootView` fylder hele skærmen
  },
});
