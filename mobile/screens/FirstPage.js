import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native"

import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import logoblanc from "../assets/logoblanc.png"

import { useFonts, Roboto_900Black } from "@expo-google-fonts/roboto"
import { useNavigation } from "@react-navigation/native"

const FirstPage = () => {
  const [fontsLoaded] = useFonts({ Roboto_900Black })
  const navigation = useNavigation()

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.corps}>
      <LinearGradient style={styles.container} colors={["#FF3B01", "#FACA21"]}>
        <Image source={logoblanc} style={styles.logo} />
        <Text
          style={{
            fontFamily: "Roboto_900Black",
            fontSize: 16,
            color: "white",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Atteinds {"\n"}
          tes {"\n"}
          objectifs
        </Text>
      </LinearGradient>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={styles.button}
        >
          <Text style={styles.buttontext}> S'inscrire </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.buttondeux}
        >
          <Text style={styles.buttontextdeux}> Se connecter </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  corps: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },

  container: {
    witdh: "100%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: "72%",
    height: "58%",
  },

  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  button: {
    width: "42%",
    height: "64%",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1%",
  },

  buttondeux: {
    width: "42%",
    height: "64%",
    backgroundColor: "black",
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  buttontext: {
    fontFamily: "Roboto_900Black",
    textTransform: "uppercase",
    letterSpacing: 0.04,
  },

  buttontextdeux: {
    fontFamily: "Roboto_900Black",
    textTransform: "uppercase",
    letterSpacing: 0.04,
    color: "white",
  },
})

export default FirstPage
