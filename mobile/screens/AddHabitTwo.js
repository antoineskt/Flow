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
  
  
  
} from "react-native";

import React, { useCallback, useEffect, useState } from "react";


import {
  useFonts,
  Roboto_900Black,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkbox from 'expo-checkbox';

const API_URL =
  Platform.OS === "ios" ? "http://192.168.1.18:5000" : "http://10.0.2.2:5000";

const AddHabitTwo = () => {
  const [title, setTitle] = useState("");
  
  const [daysOfWeek, setDaysOfWeek] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({ Roboto_900Black, Roboto_400Regular });

  if (!fontsLoaded) {
    return null;
  }


  //ENREGISTREMENT DES DONNES DANS ASYNCSTORAGE
  const saveData = async () => {
    // Récupère les données actuelles de la clé "myKey"
    const currentData = await AsyncStorage.getItem("myKey");
    // Parse les données JSON
    let data = JSON.parse(currentData);
    // Si il n'y a pas de données précédentes, créer un tableau vide
    if (!data) {
      data = [];
    }
    // Vérifie si l'objet existe déjà
    let habitExist = data.find((item) => item.title === title);

    if (!habitExist) {
      // Ajoutez les données saisies par l'utilisateur
      data.push({ title, daysOfWeek });
    }
    // Enregistrez les données mises à jour
    await AsyncStorage.setItem("myKey", JSON.stringify(data));
    setTitle("");
    setDaysOfWeek({
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    });
    navigation.navigate("Homepage");
  };

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
        <Text style={styles.textSecondheader}> AJOUTER UNE HABITUDE</Text>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View style={styles.body}>
        <Text style={styles.bodyText}>Titre:</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Entre ton titre ici"
          onChangeText={(text) => setTitle(text)}
          value={title}
        />



        <Text style={styles.bodyText}>Quels jours répéter l'objectif ? </Text>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        
      <Checkbox
        value={daysOfWeek.Monday}
        onValueChange={(newValue) =>
          setDaysOfWeek((prev) => ({ ...prev, Monday: newValue }))
        }
        label="Monday"
      />
      
      <Checkbox
        value={daysOfWeek.Tuesday}
        onValueChange={(newValue) =>
          setDaysOfWeek((prev) => ({ ...prev, Tuesday: newValue }))
        }
        label="Tuesday"
      />
      <Checkbox
        value={daysOfWeek.Wednesday}
        onValueChange={(newValue) =>
          setDaysOfWeek((prev) => ({ ...prev, Wednesday: newValue }))
        }
        label="Wednesday"
      />
      <Checkbox
        value={daysOfWeek.Thursday}
        onValueChange={(newValue) =>
          setDaysOfWeek((prev) => ({ ...prev, Thursday: newValue }))
        }
        label="Thursday"
      />
      <Checkbox
        value={daysOfWeek.Friday}
        onValueChange={(newValue) =>
          setDaysOfWeek((prev) => ({ ...prev, Friday: newValue }))
        }
        label="Friday"
      />
      <Checkbox
        value={daysOfWeek.Saturday}
        onValueChange={(newValue) =>
          setDaysOfWeek((prev) => ({ ...prev, Saturday: newValue }))
        }
        label="Saturday"
      />
      <Checkbox
        value={daysOfWeek.Sunday}
        onValueChange={(newValue) =>
          setDaysOfWeek((prev) => ({ ...prev, Sunday: newValue }))
        }
        label="Sunday"
      />
      </View>

      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>

        <Text>Lun</Text>
        <Text>Mar</Text>
        <Text>Mer</Text>
        <Text>Jeu</Text> 
        <Text>Ven</Text> 
        <Text>Sam</Text>
        <Text>Dim</Text>
        
      </View>


        {/* <Text style={styles.bodyText}>Icone:</Text> */}

        {/* <View>
          <FontAwesome5.Button
            name="walking"
            color={"black"}
            backgroundColor={"transparent"}
            onPress={() => navigation.navigate("AddHabitTwo")}
          />

          <FontAwesome5.Button
            name="running"
            color={"black"}
            backgroundColor={"transparent"}
            onPress={() => navigation.navigate("AddHabitTwo")}
          />
        </View> */}

        
      </View>

      <View style={styles.viewValidate}>
        <TouchableOpacity onPress={saveData}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.buttonValidate}
          >
            <Text style={styles.buttonText}>VALIDER</Text>
            <Text
              style={[styles.message, { color: isError ? "red" : "green" }]}
            >
              {/* {message ? getMessage() : null} */}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
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
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    margin: "2%",

    width: "33%",
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
  },

  iconInput: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    margin: "2%",

    width: "6%",
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
    textAlign: "center",
    borderRadius: 100,
  },

  image: {
    justifyContent: "center",
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

export default AddHabitTwo;
