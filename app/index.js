import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";

export default function index() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>index</Text>
      {/* <Link
        href={`/settings?name=${"Sandesh"}`}
        style={{ textDecorationLine: "underline" }}
      >
        Go to Setting
      </Link> */}
      <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          navigation.navigate("(tabs)", {
            name: "Gaurav",
          });
        }}
      >
        <Text style={{ color: "white", fontSize: 30 }}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
