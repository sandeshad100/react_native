import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="chats" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
