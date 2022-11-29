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

import { useFonts, Roboto_900Black } from "@expo-google-fonts/roboto";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const GroupFriends = () => {
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

      <View style={styles.viewValidate}>
        <TouchableOpacity onPress={() => navigation.navigate("CreateGroupe")}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.buttonValidate}
          >
            <Text style={styles.buttonText}>CREER UN NOUVEAU GROUPE</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.secondViewValidate}>
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.buttonValidate}
          >
            <Text style={styles.buttonText}>NOM DU GROUPE {"\n"}</Text>
            <Text style={styles.textTwo}>MEDITATION 12 JOURS</Text>
            <Text style={styles.textTwo}>ANGLAIS 42 JOURS {"\n"}</Text>

            <TouchableOpacity  onPress={() => navigation.navigate("Homepage")}>
              <Text style={styles.textTwo}>+ AJOUTER UNE HABITUDE {"\n"}</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate("Homepage")}>
              <Text style={styles.textTwo}>+ INVITER DES AMIS</Text>
            </TouchableOpacity>
         
          </LinearGradient>
          
        </TouchableOpacity>
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
    
    flexDirection: "row",
    paddingTop: "5%",
    justifyContent: "space-between",
   
  },

  iconRight: {
    flexDirection: "row",
  },
  
  viewValidate: {
    flex: 1,  
    justifyContent: "center",
    alignItems: "center"  
  },

  secondViewValidate: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
 
  buttonValidate: {
    
    borderRadius: 4,
    paddingVertical: 30,
    paddingHorizontal: 32,
  },

  buttonText: {
    fontFamily: "Roboto_900Black",
    textTransform: "uppercase",
    letterSpacing: 0.04,
    color: "white",

    alignSelf: "center",
  },

  textTwo: {
    fontFamily: "Roboto_900Black",
    textTransform: "uppercase",
    letterSpacing: 0.04,
    color: "white", 
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

export default GroupFriends;
