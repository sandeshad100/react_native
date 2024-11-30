import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <View
    //   style={{
    //     height: 300,
    //     flex: 1,
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     backgroundColor: "red",
    //   }}
    // >
    //   <View style={{ flex: 1, backgroundColor: "black" }} />
    //   <View style={{ flex: 1, backgroundColor: "red" }} />
    //   <View style={{ flex: 1, backgroundColor: "purple" }} />
    // </View>

    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="menu" size={24} color="black " />
        <Text style={styles.headerTxt}>LOGO</Text>
        <MaterialIcons name="call" size={24} color="black " />
      </View>
      <View style={styles.banner}>
        <Image
          style={styles.bannerImg}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQzwjbXzb6hQYGnitjGce_YfI0YY6e6yTzg&s",
          }}
        />
      </View>

      {/* info view  */}
      <View style={styles.infoView}>
        <MaterialIcons name="attach-money" size={24} color="green" />
        <MaterialCommunityIcons name="message" size={24} color="green" />
      </View>

      {/* bottom container  */}
      <View style={styles.bottomContainer}>
        <View style={styles.row}>
          <Card title={"Carpool"} icon={"electric-car"} bgColor="#aee8cb" />
          <Card title={"Bike"} icon={"bike-scooter"} bgColor="#C4DEF6" />
        </View>
        <View style={styles.row}>
          <Card title={"Carpool"} icon={"electric-car"} bgColor="#aee8cb" />
          <Card title={"Bike"} icon={"bike-scooter"} bgColor="#C4DEF6" />
        </View>
        <View style={styles.row}>
          <Card title={"Carpool"} icon={"electric-car"} bgColor="#aee8cb" />
          <Card title={"Bike"} icon={"bike-scooter"} bgColor="#C4DEF6" />
        </View>
      </View>
    </View>
  );
}

// Define the props type
type CardProps = {
  bgColor: string;
  icon: any;
  title: string;
};

const Card: React.FC<CardProps> = ({ bgColor, icon, title }) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <Text style={{ textAlign: "right" }}>{title}</Text>
      <MaterialIcons name={icon} size={70} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTxt: {
    fontWeight: "bold",
    letterSpacing: 10,
    fontSize: 21,
  },
  header: {
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  banner: {
    height: SCREEN_HEIGHT / 3.7,
    backgroundColor: "#ccc",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  bannerImg: {
    height: "85%",
    borderRadius: 12,
  },
  infoView: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 12,
    marginTop: -15,
    marginHorizontal: 20,
  },

  bottomContainer: {
    flex: 1,
    margin: 20,
    gap: 15,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    gap: 15,
  },
  card: {
    flex: 1,
    borderColor: "blue",
    borderRadius: 12,
    padding: 10,
    justifyContent: "space-between",
  },
});
