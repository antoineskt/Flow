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
} from "react-native";

import React, { useCallback, useEffect, useState } from "react";

import { useFonts, Roboto_900Black, Roboto_400Regular } from "@expo-google-fonts/roboto";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Profil = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({ Roboto_900Black, Roboto_400Regular });

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

      <View style={styles.body}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.textTouchableOpacity}>PROFIL</Text>
        </TouchableOpacity>

        <View 
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.textTouchableOpacity}>MON PSEUDO :</Text>
        </TouchableOpacity>

        <TextInput style={styles.textInput}>Henry</TextInput>

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.textTouchableOpacity}>MODIFIER MON PSEUDO :</Text>
        </TouchableOpacity>

        <TextInput style={styles.textInput}></TextInput>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("CreateGroupe")}>
            <LinearGradient
              colors={["#FF3B01", "#FACA21"]}
              style={styles.buttonValidate}
            >
              <Text style={styles.buttonText}>Valider</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Icon.Button
          name="home"
          color={"black"}
          backgroundColor={"transparent"}
          onPress={() => navigation.navigate("Homepage")}
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
    flex: 1,
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

  body: {
    padding: "5%",
    flex: 10,
  },

  touchableOpacity: {
    justifyContent: "center",
    margin: "6%",
  },

  textTouchableOpacity: {
    fontFamily: "Roboto_900Black",
    textTransform: "uppercase",
  },

  textInput: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    paddingLeft: "6%",
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    marginBottom: 20
  },

  buttonValidate: {
    borderRadius: 4,
    paddingVertical: 20,
    marginTop: 20,
  },

  buttonText: {
    fontFamily: "Roboto_900Black",
    textTransform: "uppercase",
    letterSpacing: 0.04,
    color: "white",

    alignSelf: "center",
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

export default Profil;
