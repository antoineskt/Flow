import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { useFonts, Roboto_900Black } from "@expo-google-fonts/roboto"
import { useNavigation } from "@react-navigation/native"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Calendar, LocaleConfig } from "react-native-calendars"

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

const Stats = () => {
  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({ Roboto_900Black })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />

      {/* <View style={styles.viewValidate}>
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.buttonValidate}
          >
            <Text style={styles.buttonText}>TOUTES HABITUDES CONFONDUES</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.viewCircle}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Homepage")}
          style={styles.touchableOpacity}
        >
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.linearCircle}
          >
            <View style={styles.circleWhite}></View>
          </LinearGradient>
          <Text style={styles.circleText}> Meditation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Homepage")}
          style={styles.touchableOpacity}
        >
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.linearCircle}
          >
            <View style={styles.circleWhite}></View>
          </LinearGradient>
          <Text style={styles.circleText}> Course</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Homepage")}
          style={styles.touchableOpacity}
        >
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.linearCircle}
          >
            <View style={styles.circleWhite}></View>
          </LinearGradient>
          <Text style={styles.circleText}> Ne pas fumer</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: StyleSheet.hairlineWidth,
          margin: "2%",
        }}
      /> */}

      <View style={styles.body}>
        <View style={styles.stats}>
          <Text style={styles.bodyText}>MEILLEUR SERIE</Text>

          <Text style={styles.bodyText}>REUSSITE</Text>
          <Text style={styles.bodyText}>27</Text>

          <Text style={styles.bodyText}>27%</Text>
          <Text style={styles.bodyText}>TERMINEES</Text>

          <Text style={styles.bodyText}>SERIE EN COURS</Text>
          <Text style={styles.bodyText}>124</Text>

          <Text style={styles.bodyText}>12</Text>
        </View>

        <Calendar
          // Initially visible month. Default = now
          initialDate={"2023-01-23"}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={"2023-01-01"}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={"2023-12-31"}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log("selected day", day)
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {
            console.log("selected day", day)
          }}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log("month changed", month)
          }}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
          firstDay={1}
        />
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

  viewValidate: {
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

  viewCircle: {
    justifyContent: "center",
    flexDirection: "row",
  },

  linearCircle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    margin: "2%",
    justifyContent: "center",
    alignItems: "center",
  },

  circleWhite: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: "white",
  },

  touchableOpacity: {
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    alignSelf: "center",
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
    flex: 10,
  },

  stats: {
    padding: "1%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  bodyText: {
    fontFamily: "Roboto_900Black",
    fontSize: 16,
    width: "50%",
    textAlign: "center",
  },

  input: {
    height: "15%",

    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    boder: 1,
    borderColor: "#EDEDED",
  },
})

export default Stats
