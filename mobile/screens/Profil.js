import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native"
import React from "react"
import {
  useFonts,
  Roboto_900Black,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import Header from "./components/Header"
import Footer from "./components/Footer"

const Profil = () => {
  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({ Roboto_900Black, Roboto_400Regular })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />

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
    marginBottom: 20,
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
})

export default Profil
