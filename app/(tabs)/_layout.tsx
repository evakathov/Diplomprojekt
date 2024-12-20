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
          tabBarActiveTintColor: "#285c4b", // Color for active icons/text
          tabBarInactiveTintColor: "#8F8F8F", // Color for inactive icons/text
          tabBarStyle: {
            backgroundColor: "#f9f6e0", // Background color of tab bar
            borderTopColor: "#f9f6e0", // Color of the top border line
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
    color: "white",
  },
});
