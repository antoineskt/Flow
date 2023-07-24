import { View, Text, StyleSheet, Platform, SafeAreaView } from "react-native"
import React, { useEffect, useState } from "react"
import { useFonts, Roboto_900Black } from "@expo-google-fonts/roboto"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Card } from "@rneui/themed"
import { Agenda, LocaleConfig } from "react-native-calendars"
import Footer from "./components/Footer"
import Header from "./components/Header"

const API_URL =
  Platform.OS === "ios" ? "http://192.168.1.18:5000" : "http://10.0.2.2:5000"

const HomePage = () => {
  //const [habits, setHabits] = useState(allAgendaDates);
  const [isLoading, setLoading] = useState(true)
  const [itemsForSelectedDay, setItemsForSelectedDay] = useState({})
  const [allAgendaDates, setAllAgendaDates] = useState({})
  // const allAgendaDates = {
  //   "2023-03-07": ["workout", "natation"],
  //   "2023-03-08": ["swimming", "clope"],
  //   "2023-03-09": ["running", "pizaa"],
  // };

  //recup date du jour
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10),
  )

  const navigation = useNavigation()

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
  }
  LocaleConfig.defaultLocale = "fr"

  const fetchData = async () => {
    console.log("log depuis fetchdata ")
    const data = await AsyncStorage.getItem("myKey")
    const parsedData = JSON.parse(data)
    console.log(`je log paresedData : ${parsedData}`) //[object, object]
    console.log(JSON.stringify(parsedData)) // [{"title":["Workout "],"trueDays":["Mardi","Mercredi"]}]

    setLoading(false)

    if (parsedData != null) {
      const dataFromKeyOk = JSON.stringify(parsedData)
      console.log("je log datafromkeyok : " + dataFromKeyOk) //je log datafromkeyok : [{"2023-03-06":["Workout"],"2023-03-07":["Workout"]}]
      if (Array.isArray(parsedData)) {
        //transormation du tableau en in objet simple :
        const objetFinal = Object.assign({}, parsedData[0])
        console.log(
          "je log le tablo transformé en objet final : " +
            JSON.stringify(objetFinal),
        )
        // const habits = JSON.parse(data);
        // setHabits(habits);
        setAllAgendaDates(objetFinal)
        console.log("objetfinal envoyé dans le state ")
      } else {
        console.log(parsedData)
        setAllAgendaDates(parsedData)
        console.log("objet validé, envoyé dans le state")
      }
    } else {
      console.log("parsedData égal null")
    }
  }

  useEffect(() => {
    //permet l'actualisation de la page avec les nouvelles données
    const unsubscribe = navigation.addListener("focus", fetchData)

    return unsubscribe
  }, [])

  const [fontsLoaded] = useFonts({ Roboto_900Black })

  if (!fontsLoaded) {
    return null
  }

  function renderCard({ item }) {
    return (
      <Card>
        <Card.Title style={{ textAlign: "left" }}>
          {item.title}
          {item.goals}
        </Card.Title>
      </Card>
    )
  }

  console.log("homepage actualisé")

  const getMarkedDates = () => {
    let markedDates = {}
    Object.keys(allAgendaDates).map((date) => {
      //console.log(date);
      markedDates[date] = {
        marked: true,
      }
    })
    //console.log(markedDates);
    return markedDates
  }

  //on récupérer la date cliquée quand on clique(onclick=onUpdate) qu'on passe en propriété
  const onUpdateSelectedDate = (date) => {
    const recupDateCorrespondante = allAgendaDates[date.dateString] //recup le titre qui correspond a la date
    console.log("log de recupDate : " + recupDateCorrespondante) //undefined

    const updatedItemsForSelectedDay = {
      [date.dateString]: recupDateCorrespondante,
    }
    console.log(updatedItemsForSelectedDay) // {"2023-03-XX": undefined}
    setItemsForSelectedDay(updatedItemsForSelectedDay)

    // const eventsForDate = allAgendaDates[date.dateString]; //on recupére la date correspondante cliquée

    // if (eventsForDate) {
    //   console.log(`le jour de la date cliquée est ${typeof date.dateString}`); // 2023-03-02 type string
    //   console.log(`je console log eventsForDate qui est ${eventsForDate}`); // swimiing, clope
    //   console.log(`je log object.values(eventsfordate) : ${Object.values(eventsForDate)}`); // swimming, clope
    //   console.log(`je console log allagendates.eventfordate : ${allAgendaDates.eventsForDate}`); //undefined
    //   setItemsForSelectedDay(Object.values(eventsForDate));

    //   const valueItem = Object.values(eventsForDate);
    //   setItemsForSelectedDay(valueItem);
    //   setItemsForSelectedDay(eventsForDate);

    // } else {
    //   console.log("pas de data");
    // }
  }

  return (
    <View style={styles.container}>
      <Header />

      <SafeAreaView style={{ flex: 20 }}>
        <Agenda
          // Initially selected day
          selected={selectedDate}
          minDate={"2023-01-01"}
          maxDate={"2023-12-31"}
          items={itemsForSelectedDay}
          onDayPress={onUpdateSelectedDate}
          markedDates={getMarkedDates()}
          renderItem={(item) => <Text></Text>}
          // Specify how each date should be rendered. day can be undefined if the item is not first in that day
          renderDay={(day, item) => {
            return <View>{item && <Text>{item}</Text>}</View>
          }}
          hideKnob={true} //cache la fleche qui permet d'ouvrir l'ensemble du calendrier/>
          // Specify what should be rendered instead of ActivityIndicator
          renderEmptyData={() => {
            return <View />
          }}
        />
      </SafeAreaView>

      {/* <View style={styles.body}>
        <FlatList
          data={habits}
          refreshing={isLoading}
          renderItem={renderCard}
          keyExtractor={(item) => item.title}
        />
      </View> */}

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

  header: {
    width: "100%",
    flexDirection: "row",

    paddingTop: "5%",
    justifyContent: "space-between",
  },

  iconRight: {
    flexDirection: "row",
  },

  logintext: {
    color: "#FF5C00",
    fontFamily: "Roboto_900Black",
    fontSize: 16,
    height: "100%",
    alignSelf: "center",
  },

  body: {
    justifyContent: "space-between",

    flex: 12,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: "black",
    fontSize: 16,
  },

  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  appointmentsContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  appointmentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  appointment: {
    backgroundColor: "#428bca",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  appointmentText: {
    color: "white",
    fontWeight: "bold",
  },
  noSelectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noSelectionText: {
    fontSize: 20,
    color: "#428bca",
    textAlign: "center",
  },

  circle: {
    marginTop: "2%",
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    height: "15%",

    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    boder: 1,
    borderColor: "#EDEDED",
  },
})

export default HomePage
