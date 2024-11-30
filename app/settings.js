import { View, Text, Button } from "react-native";
import React from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

export default function settings() {
  const route = useRouter();
  const params = useLocalSearchParams();
  console.log(params);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Settings Page</Text>
      <Text
        style={{ textDecorationLine: "underline" }}
        onPress={() => {
          route.back();
        }}
      >
        Back
      </Text>
    </View>
  );
}
