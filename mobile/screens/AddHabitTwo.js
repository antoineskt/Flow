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
import Checkbox from "expo-checkbox";
import {
  Agenda,
  Calendar,
  calendarTheme,
  MyCustomList,
  WeekCalendar,
  ExpandableCalendar,
  LocaleConfig,
} from "react-native-calendars";
import moment from "moment";

const AddHabitTwo = () => {
  const [title, setTitle] = useState("");

  const [daysOfWeek, setDaysOfWeek] = useState({
    Lundi: false,
    Mardi: false,
    Mercredi: false,
    Jeudi: false,
    Vendredi: false,
    Samedi: false,
    Dimanche: false,
  });

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const [isChecked, setChecked] = useState(false);

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({ Roboto_900Black, Roboto_400Regular });

  if (!fontsLoaded) {
    return null;
  }

  LocaleConfig.locales["fr"] = {
    monthNames: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    monthNamesShort: [
      "Janv.",
      "Févr.",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juil.",
      "Août",
      "Sept.",
      "Oct.",
      "Nov.",
      "Déc.",
    ],
    dayNames: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
    dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
    today: "Aujourd'hui",
  };
  LocaleConfig.defaultLocale = "fr";

  //ENREGISTREMENT DES DONNES DANS ASYNCSTORAGE
  const saveData = async () => {
    //on trie que les jours selectionnés (true)
    const trueDays = Object.keys(daysOfWeek).filter((day) => daysOfWeek[day]);
    console.log(`je log truedays : ${trueDays}`); //lundi mardi
    console.log(`je log title : ${title}`);

    //ici on a juste des truedays et title on peut transormer le truedays en date réelle

    // Initialiser un objet pour stocker les dates et les titres
    const realDate = {};

    // Parcourir les jours de la semaine
    [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
    ].forEach((day, index) => {
      // Vérifier si le jour est sélectionné par l'utilisateur
      if (trueDays.includes(day)) {
        console.log(
          "le if parsedata fonctionne, inclut donc un jour de la semaine"
        );
        // Créer une date pour ce jour
        const date = moment().day(index + 1);
        console.log(`Création de la date, je log date : ${date}`);

        //mise au bon format
        const dateString = date.format("YYYY-MM-DD");
        console.log(
          `Création du bon format, je log datestring : ${dateString}`
        );

        //créer d'une nouvelle liste pour cette date sous la bonne forme
        realDate[dateString] = [title];
        console.log("création du nouvel objet au bon format réussi");
        console.log(
          `je log le nouvel objet fraichment crée realDate : ${JSON.stringify(
            realDate
          )}`
        );
      }
    });
    console.log(
      "Fin du formatage complet des nouvelles données avec les dates et titres"
    );

    // Récupère les données actuelles de la clé "myKey"
    const currentData = await AsyncStorage.getItem("myKey");
    // Parse les données JSON
    let data = JSON.parse(currentData);
    let dataInKey = JSON.stringify(data);
    console.log("log de dataInKey : " + dataInKey);

    // si il n'y a pas de donnée dans la clef async on crée un nouvel objet
    if (!data) {
      console.log("pas de donné dans la clé");
      data = [];
      data.push(realDate);
      await AsyncStorage.setItem("myKey", JSON.stringify(data));
      console.log("envoi de réelle date dans la cle");
      console.log(`voici le nv objet: ${JSON.stringify(realDate)}`);
      console.log(data);
    } else {
      // si il y a deja des données
      console.log("il y a deja des donnée(data) dans la cle");

      // vérifier si une date similaire existe deja :
      // Parcourir toutes les propriétés de l'objet
      for (let date in realDate) {
        console.log("vérification si une date est similaire dans nos données");
        for (let i = 0; i < data.length; i++) {
          const obj = data[i];
          // check if there is a similar date
          if (obj.hasOwnProperty(date)) {
            console.log(`IL y a une date similaire qui est ${date}`);

            // check if the title for this date already exists in realDate
            const realDateTitles = realDate[date];
            const dataTitles = obj[date];
            for (let j = 0; j < realDateTitles.length; j++) {
              if (dataTitles.includes(realDateTitles[j])) {
                console.log(
                  `Title "${realDateTitles[j]}" already exists for date ${date}`
                );
              } else {
                //ajouter le titre à la liste pour cette date
                //data[date].push(title);
                console.log(
                  `Adding title "${realDateTitles[j]}" for date ${date}`
                );
                obj[date].push(realDateTitles[j]);
                await AsyncStorage.setItem("myKey", JSON.stringify(data));
                
                //realDate[date].push(realDateTitles[j]);
                console.log("Le titre a été ajouté à la liste pour cette date");
              }
            }
            // si il n'y a pas de date similaire dans les données, ajouter les nouvelles dates dans l'objet
          } else {
            console.log("pas de date similaire trouvée dans les données");
            // La date n'existe pas encore, on ajoute la liste entière pour cette date dans l'objet existant
            // data = [{"2023-03-13":["Workout","Natation"],"2023-03-14":["Workout","Natation"]}]
            // on transforme le tableau en objet simple :
            const objetFinal = Object.assign({}, data[0]);

            Object.assign(objetFinal, realDate); //assigne les propriétés de réeldata a data
            console.log(JSON.stringify(objetFinal));
            await AsyncStorage.setItem("myKey", JSON.stringify(objetFinal));
            console.log(`maj de la clef réussie`);
            
            //data[date] = realDate[date];
          }
        }
      }
    }

    // Enregistrez les données mises à jour
    // Si data a été modifié, enregistrer les données mises à jour

    
    

    setTitle("");
    setDaysOfWeek({
      Lundi: false,
      Mardi: false,
      Mercredi: false,
      Jeudi: false,
      Vendredi: false,
      Samedi: false,
      Dimanche: false,
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
            value={daysOfWeek.Lundi}
            onValueChange={(newValue) =>
              setDaysOfWeek((prev) => ({ ...prev, Lundi: newValue }))
            }
            label="Lundi"
          />

          <Checkbox
            value={daysOfWeek.Mardi}
            onValueChange={(newValue) =>
              setDaysOfWeek((prev) => ({ ...prev, Mardi: newValue }))
            }
            label="Mardi"
          />
          <Checkbox
            value={daysOfWeek.Mercredi}
            onValueChange={(newValue) =>
              setDaysOfWeek((prev) => ({ ...prev, Mercredi: newValue }))
            }
            label="Mercredi"
          />
          <Checkbox
            value={daysOfWeek.Jeudi}
            onValueChange={(newValue) =>
              setDaysOfWeek((prev) => ({ ...prev, Jeudi: newValue }))
            }
            label="Jeudi"
          />
          <Checkbox
            value={daysOfWeek.Vendredi}
            onValueChange={(newValue) =>
              setDaysOfWeek((prev) => ({ ...prev, Vendredi: newValue }))
            }
            label="Vendredi"
          />
          <Checkbox
            value={daysOfWeek.Samedi}
            onValueChange={(newValue) =>
              setDaysOfWeek((prev) => ({ ...prev, Samedi: newValue }))
            }
            label="Samedi"
          />
          <Checkbox
            value={daysOfWeek.Dimanche}
            onValueChange={(newValue) =>
              setDaysOfWeek((prev) => ({ ...prev, Dimanche: newValue }))
            }
            label="Dimanche"
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
