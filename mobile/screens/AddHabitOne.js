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
  ScrollView,
} from "react-native"

import React, { useCallback, useEffect, useState } from "react"

import { useFonts, Roboto_900Black } from "@expo-google-fonts/roboto"

import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"

import Icon from "react-native-vector-icons/FontAwesome"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Footer from "./components/Footer"
import Header from "./components/Header"

const AddHabitOne = () => {
  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({ Roboto_900Black })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <Text style={{ fontFamily: "Roboto_900Black", fontSize: 18 }}>
          {" "}
          AJOUTER UNE HABITUDE
        </Text>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <TouchableOpacity
        style={{ flex: 1, justifyContent: "center", paddingLeft: "6%" }}
        onPress={() => navigation.navigate("AddHabitTwo")}
      >
        <Text
          style={{ fontFamily: "Roboto_900Black", textTransform: "uppercase" }}
        >
          Créer une habitude personnalisée
        </Text>
      </TouchableOpacity>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View style={styles.body}>
        <ScrollView>
          <Text
            style={{
              fontFamily: "Roboto_900Black",
              textTransform: "uppercase",
              marginBottom: "5%",
            }}
          >
            Ou utiliser un modèle :
          </Text>
          <Text>SPORT</Text>
          <View>
            <FontAwesome5.Button
              name="walking"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Marcher
            </FontAwesome5.Button>

            <FontAwesome5.Button
              name="running"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Courir
            </FontAwesome5.Button>

            <FontAwesome5.Button
              name="jedi"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
              size={17}
            >
              Workout
            </FontAwesome5.Button>

            <FontAwesome5.Button
              name="swimmer"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
              size={17}
            >
              Natation
            </FontAwesome5.Button>

            <FontAwesome5.Button
              name="pray"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Yoga
            </FontAwesome5.Button>

            <MaterialCommunityIcons.Button
              name="bike"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Vélo
            </MaterialCommunityIcons.Button>

            <Text>SANTÉ</Text>

            <MaterialCommunityIcons.Button
              name="smoking-off"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Ne pas fumer
            </MaterialCommunityIcons.Button>

            <Ionicons.Button
              name="fast-food"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Pas de Fast-Food
            </Ionicons.Button>

            <MaterialCommunityIcons.Button
              name="liquor"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Pas d'alcool
            </MaterialCommunityIcons.Button>

            <MaterialCommunityIcons.Button
              name="spoon-sugar"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Pas de sucre
            </MaterialCommunityIcons.Button>

            <MaterialCommunityIcons.Button
              name="fruit-cherries"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Manger des fruits
            </MaterialCommunityIcons.Button>

            <MaterialCommunityIcons.Button
              name="water"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Boire de l'eau
            </MaterialCommunityIcons.Button>

            <Text>BIEN-ÊTRE</Text>

            <MaterialCommunityIcons.Button
              name="meditation"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Méditation
            </MaterialCommunityIcons.Button>

            <MaterialCommunityIcons.Button
              name="lungs"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Réspiration
            </MaterialCommunityIcons.Button>

            <MaterialCommunityIcons.Button
              name="book"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Lecture
            </MaterialCommunityIcons.Button>

            <MaterialCommunityIcons.Button
              name="book"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Lecture
            </MaterialCommunityIcons.Button>

            <Icon.Button
              name="smile-o"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("Seetings")}
            >
              Gratitude
            </Icon.Button>

            <MaterialCommunityIcons.Button
              name="typewriter"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Tenir un journal
            </MaterialCommunityIcons.Button>

            <Text> LIFESTYLE</Text>
            <Icon.Button
              name="money"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("Seetings")}
            >
              Economiser
            </Icon.Button>

            <FontAwesome5.Button
              name="pencil-ruler"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
              size={17}
            >
              Planifier sa journée
            </FontAwesome5.Button>

            <MaterialCommunityIcons.Button
              name="av-timer"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
            >
              Se lever tot
            </MaterialCommunityIcons.Button>

            <FontAwesome5.Button
              name="money-check-alt"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
              size={17}
            >
              Suivre ses dépenses
            </FontAwesome5.Button>

            <FontAwesome5.Button
              name="book-reader"
              color={"black"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("AddHabitTwo")}
              size={17}
            >
              Etudier
            </FontAwesome5.Button>
          </View>
        </ScrollView>
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

  inscription: {
    fontFamily: "Roboto_900Black",
    fontSize: 24,
    color: "black",
    textTransform: "uppercase",
    height: "100%",
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
    padding: "5%",
    flex: 10,
  },

  bodyText: {
    height: "10%",
    marginTop: "2%",
  },

  input: {
    height: "15%",

    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    boder: 1,
    borderColor: "#EDEDED",
  },
})

export default AddHabitOne
