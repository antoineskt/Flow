import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native"

import React, { useCallback, useEffect, useState } from "react"

import {
  useFonts,
  Roboto_900Black,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import Footer from "./components/Footer"
import Header from "./components/Header"

const CreateGroupeTwo = () => {
  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({ Roboto_900Black, Roboto_400Regular })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.secondHeader}>
        <Text style={styles.textSecondheader}> AJOUTER UNE HABITUDE</Text>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View style={styles.body}>
        <ScrollView>
          <Text style={styles.bodyText}>Nom du groupe:</Text>

          <TextInput style={styles.textInput}>..</TextInput>
          <Text style={styles.bodyText}>Titre:</Text>

          <TextInput style={styles.textInput}>Courir</TextInput>

          <Text style={styles.bodyText}>Objectif:</Text>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <TextInput style={styles.textInput}>3</TextInput>
            <TextInput style={styles.textInput}>KM</TextInput>
            <TextInput style={styles.textInput}>Jours</TextInput>
          </View>

          <Text style={styles.bodyText}>Frequence:</Text>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <TextInput style={styles.textInput}>Quotidien</TextInput>
            <TextInput style={styles.textInput}>Hebdomadaire</TextInput>
            <TextInput style={styles.textInput}>Mensuel</TextInput>
          </View>

          <Text style={styles.bodyText}>Rappel de l'habitude:</Text>

          <TextInput style={styles.textInput}>17h35</TextInput>

          <Text style={styles.bodyText}>Date début:</Text>

          <TextInput style={styles.textInput}>...</TextInput>
          <Text style={styles.bodyText}>Date fin:</Text>
          <TextInput style={styles.textInput}>...</TextInput>
        </ScrollView>
      </View>

      <View style={styles.viewValidate}>
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.buttonValidate}
          >
            <Text style={styles.buttonText}>VALIDER</Text>
          </LinearGradient>
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
  },

  secondHeader: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },

  textSecondheader: {
    fontFamily: "Roboto_900Black",
    fontSize: 19,
    color: "black",
    textTransform: "uppercase",
  },

  body: {
    padding: "5%",
    flex: 10,
  },

  bodyText: {
    margin: "2%",
    fontFamily: "Roboto_900Black",
    fontSize: 17,
    color: "black",
  },

  textInput: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    margin: "2%",

    width: "33%",
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
  },

  viewValidate: {
    flex: 1,
    padding: "5%",

    justifyContent: "center",
  },

  buttonValidate: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  buttonText: {
    fontFamily: "Roboto_900Black",
    textTransform: "uppercase",
    letterSpacing: 0.04,
    color: "white",

    alignSelf: "center",
  },
})

export default CreateGroupeTwo
