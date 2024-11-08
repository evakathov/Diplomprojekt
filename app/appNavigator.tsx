// AppNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Index from "./(tabs)";
import StepScreen from "./stepScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen
          name="StepScreen"
          component={StepScreen}
          options={{ title: "Step Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
