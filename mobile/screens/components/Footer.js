import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import Icon from "react-native-vector-icons/FontAwesome"

export default function Footer() {
  const navigation = useNavigation()
  return (
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
  )
}

const styles = StyleSheet.create({
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
})
