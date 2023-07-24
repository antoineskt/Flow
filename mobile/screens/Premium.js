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
import logonoirsmall from "../assets/logonoirsmall.png"

import {
  useFonts,
  Roboto_900Black,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto"

import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"

import Icon from "react-native-vector-icons/FontAwesome"

import Footer from "./components/Footer"
import Header from "./components/Header"

const Premium = () => {
  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({ Roboto_900Black, Roboto_400Regular })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.secondHeader}>
        <View style={{ height: 120, width: 155 }}>
          <Image source={logonoirsmall} style={styles.logo} />
        </View>
      </View>
      <View style={styles.viewValidate}>
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.buttonValidate}
          >
            <Text style={styles.buttonText}>PLAN PREMIUM : </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.textTitre}>HABITUDES ILLIMITÉES</Text>
        <Text style={styles.textBody}>
          Le plan gratuit permet d’avoir uniquement 4 habitudes. Créez dès
          maintenant autant d’habitudes que vous le souhaitez et réalisez vos
          objectifs.
        </Text>

        <Text style={styles.textTitre}>GROUPES ILLIMITÉS</Text>
        <Text style={styles.textBody}>
          Le plan gratuit permet de créer uniquement un groupe. Créez dès
          maintenant autant de groupe que vous le souhaitez avec vos amis.{" "}
        </Text>

        <Text style={styles.textTitre}>NOUVELLE MISE À JOUR</Text>
        <Text style={styles.textBody}>
          De nouvelles MAJ de contenues payantes arrivent, elles seront
          gratuites pour vous
        </Text>
      </View>
      <View style={styles.viewValidate}>
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.buttonValidate}
          >
            <Text style={styles.buttonText}>
              7jours d’essai gratuit 2,99€/mois{" "}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={{ fontSize: 10 }}>
          {" "}
          Abonnement mensuel. Annulable n’importe quand
        </Text>
      </View>

      <View style={styles.viewValidate}>
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.buttonValidate}
          >
            <Text style={styles.buttonText}>premium à VIE 9,99€ une fois </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={{ fontSize: 10 }}>
          Toutes les fonctionnalités Premium à vie pour 9,99€
        </Text>
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
    flex: 3,
  },

  logo: {
    width: undefined,
    height: undefined,
    flex: 1,

    //311 355px
  },

  body: {
    flex: 7,
  },

  viewValidate: {
    flex: 1,
    padding: "5%",

    justifyContent: "center",
    alignItems: "center",
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

  textTitre: {
    fontFamily: "Roboto_900Black",
    margin: "2%",
  },

  textBody: {
    fontFamily: "Roboto_400Regular",
    marginLeft: "2%",
  },
})

export default Premium
