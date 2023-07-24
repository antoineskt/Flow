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
} from "react-native"
import React, { useCallback, useEffect, useState } from "react"
import { useFonts, Roboto_900Black } from "@expo-google-fonts/roboto"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/FontAwesome"
import Footer from "./components/Footer"
import Header from "./components/Header"

const Seetings = () => {
  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({ Roboto_900Black })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate("Premium")}
        >
          <Text style={styles.textTouchableOpacity}>PASSER EN PREMIUM</Text>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate("Profil")}
        >
          <Text style={styles.textTouchableOpacity}>PROFIL</Text>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate("AddHabitTwo")}
        >
          <Text style={styles.textTouchableOpacity}>LAISSEZ NOUS UN AVIS</Text>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate("AddHabitTwo")}
        >
          <Text style={styles.textTouchableOpacity}>CONTACTEZ NOUS</Text>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate("AddHabitTwo")}
        >
          <Text style={styles.textTouchableOpacity}>PARTAGER</Text>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate("AddHabitTwo")}
        >
          <Text style={styles.textTouchableOpacity}>ASTUCES</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    flex: 1,
  },

  body: {
    flex: 10,
  },

  touchableOpacity: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: "6%",
  },

  textTouchableOpacity: {
    fontFamily: "Roboto_900Black",
    textTransform: "uppercase",
  },
})

export default Seetings
