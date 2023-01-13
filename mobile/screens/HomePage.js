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
} from "react-native";

import React, { useCallback, useEffect, useState, useParams } from "react";

import { useFonts, Roboto_900Black } from "@expo-google-fonts/roboto";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "react-native-vector-icons/FontAwesome";

import CircularProgress from "./components/CircularProgress";

import { TapGestureHandler, State } from "react-native-gesture-handler";
import Animated, { Value, cond, eq } from "react-native-reanimated";
import { mix, onGestureEvent, withTransition } from "react-native-redash";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL =
  Platform.OS === "ios" ? "http://192.168.1.18:5000" : "http://10.0.2.2:5000";

const HomePage = () => {
  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [goals, setGoals] = useState("");

  const [habit, setHabit] = useState([]);
  const [currentId, setCurrentId] = useState([]);

  // const getAllHabits = async () => {
  //   try {
  //     const response = await fetch(`${API_URL}/${"showAllHabits"}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const json = await response.json();
  //     // ici le bug était que c'était (json.habit), habit étant le nom de la bd mais qui s'affiche pas ds la requete
  //     setData(json);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getAllHabits();
  // }, []);

  // const getCurrentId = async () => {
  //   try {
  //     const response = await fetch(`${API_URL}/${"getCurrentId"}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const json = await response.json();
  //     // ici le bug était que c'était (json.habit), habit étant le nom de la bd mais qui s'affiche pas ds la requete
  //     setCurrentId(json);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getCurrentId();
  // }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@workout_key');
        if (value !== null) {
          const data = JSON.parse(value);
          setTitle(data.title);
          setGoals(data.goals);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  // const getHabitById = async () => {
  //   try {
  //     const response = await fetch(`${API_URL}/${'showHabit'}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 1,
  //       }),
  //     });
  //     const json = await response.json();
  //     // ici le bug était que c'était (json.habit), habit étant le nom de la bd mais qui s'affiche pas ds la requete
  //     setHabit(json);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);

  //   }
  // };

  // useEffect(() => {
  //   getHabitById();
  // }, []);

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({ Roboto_900Black });

  if (!fontsLoaded) {
    return null;
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

      <View style={styles.secondHeader}>
        <Text style={styles.inscription}> 9 Octobre </Text>
      </View>

      <View style={styles.body}>
        <View style={{ flex: 10, padding: 24, backgroundColor: "grey" }}>
          <Text>Title: {title}</Text>
          <Text>Goals: {goals}</Text>
        </View>
        {/* <View style={{ flex: 10, padding: 24, backgroundColor: "grey" }}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Text>
                {item.title}, {item.goals}
              </Text>
            )}
          />
        </View> */}

        {/* <View style={{ flex: 10, padding: 24, backgroundColor: "red" }}>
          <FlatList
            data={currentId}
            renderItem={({ item }) => (
              <Text>
                {item.id}, {item.email}, {item.title}
              </Text>
            )}
          />
        </View> */}

        <View>
          <CircularProgress />
        </View>

        {/* <View style={{ flex: 10, padding: 24 }}>
          <FlatList
            data={habit}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>
                {item.title}, {item.goals}
              </Text>
            )}
          />
        </View> */}

        <View>
          <CircularProgress />
        </View>
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

  secondHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },

  inscription: {
    fontFamily: "Roboto_900Black",
    fontSize: 24,
    color: "black",
    textTransform: "uppercase",

    alignSelf: "center",
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
