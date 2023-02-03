import {
  ImageBackground,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  Button,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

import React, { useEffect, useState } from "react";

import { useFonts, Roboto_900Black } from "@expo-google-fonts/roboto";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "react-native-vector-icons/FontAwesome";

import CircularProgress from "./components/CircularProgress";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "@rneui/themed";
import { Agenda, calendarTheme, MyCustomList, WeekCalendar, ExpandableCalendar } from "react-native-calendars";

const API_URL =
  Platform.OS === "ios" ? "http://172.20.10.8:5000" : "http://10.0.2.2:5000";

const HomePage = () => {
  const [habits, setHabits] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const navigation = useNavigation();

  const fetchData = async () => {
    const data = await AsyncStorage.getItem("myKey");
    const habits = JSON.parse(data);
    setHabits(habits);
    setLoading(false);
  };

  useEffect(() => {
    //permet l'actualisation de la page avec les nouvelles données
    const unsubscribe = navigation.addListener("focus", fetchData);

    return unsubscribe;
  }, []);

  const [fontsLoaded] = useFonts({ Roboto_900Black });

  if (!fontsLoaded) {
    return null;
  }

  function renderCard({ item }) {
    return (
      <Card>
        <Card.Title style={{ textAlign: "left" }}>{item.title}{item.goals}</Card.Title>
      </Card>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon.Button
          name="user-plus"
          color={"black"}
          backgroundColor={"transparent"}
          onPress={() => navigation.navigate("AddAFriend")}
        ></Icon.Button>

        <View style={styles.iconRight}>
          <Icon.Button
            name="user-circle"
            color={"black"}
            backgroundColor={"transparent"}
            onPress={() => navigation.navigate("Profil")}
          ></Icon.Button>

          <Icon.Button
            name="send"
            color={"black"}
            backgroundColor={"transparent"}
            onPress={() => navigation.navigate("Messages")}
          ></Icon.Button>
        </View>
      </View>

    

      <SafeAreaView style={{ flex: 20}}>
        < Agenda 
        
        // Initially selected day
        selected="2023-01-24"

        items={habits}
        renderItem={(item) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        hideKnob={true} //cache la fleche qui permet d'ouvrir l'ensemble du calendrier/>

          />
      </SafeAreaView>

      <View style={styles.body}>
        <FlatList
          data={habits}
          refreshing={isLoading}
          renderItem={renderCard}
          keyExtractor={(item) => item.title}
        />
      </View>
      

      <View style={styles.footer}>
        <Icon.Button
          name="home"
          color={"black"}
          backgroundColor={"transparent"}
        ></Icon.Button>

        <Icon.Button
          name="bar-chart"
          color={"black"}
          backgroundColor={"transparent"}
          onPress={() => navigation.navigate("Stats")}
        ></Icon.Button>

        <TouchableOpacity onPress={() => navigation.navigate("AddHabitOne")}>
          <LinearGradient colors={["#FF3B01", "#FACA21"]} style={styles.button}>
            <Text style={styles.textbutton}>+</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Icon.Button
          name="group"
          color={"black"}
          backgroundColor={"transparent"}
          onPress={() => navigation.navigate("GroupFriends")}
        ></Icon.Button>

        <Icon.Button
          name="gear"
          color={"black"}
          backgroundColor={"transparent"}
          onPress={() => navigation.navigate("Seetings")}
        ></Icon.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },

  header: {
    width: "100%",
    flexDirection: "row",

    paddingTop: "5%",
    justifyContent: "space-between",
  },

  iconRight: {
    flexDirection: "row",
  },

  logintext: {
    color: "#FF5C00",
    fontFamily: "Roboto_900Black",
    fontSize: 16,
    height: "100%",
    alignSelf: "center",
  },

  body: {
    justifyContent: "space-between",

    flex: 12,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  },

  circle: {
    marginTop: "2%",
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    height: "15%",

    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    boder: 1,
    borderColor: "#EDEDED",
  },

  footer: {
    padding: "2%",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
  },

  button: {
    borderRadius: 20,
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  textbutton: {
    color: "white",
    fontSize: 25,
  },
});

export default HomePage;
