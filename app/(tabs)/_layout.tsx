import { Tabs } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#6c8b74", // Color for active icons/text
          tabBarInactiveTintColor: "#8F8F8F", // Color for inactive icons/text
          tabBarStyle: {
            backgroundColor: "#e2dec0", // Background color of tab bar
            borderTopColor: "#333", // Color of the top border line
          },
          tabBarLabelStyle: {
            fontSize: 12, // Adjust text size
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="appointment"
          options={{
            title: "Appointment",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "code-slash" : "code-slash-outline"}
                color={color}
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
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                color={color}
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
    flex: 1, // Ensure GestureHandlerRootView fills the screen
  },
});
