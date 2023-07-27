import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { useFonts, Roboto_900Black } from "@expo-google-fonts/roboto"
import { useNavigation } from "@react-navigation/native"
import Header from "./components/Header"
import Footer from "./components/Footer"

const Message = () => {
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
          marginBottom: "5%",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto_900Black",
            fontSize: 20,
            textTransform: "uppercase",
          }}
        >
          Messages
        </Text>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View style={styles.body}>
        <Text style={styles.nameDm}>Alexandrie</Text>

        <Text style={styles.textDm}>Thank you ! That was very useful</Text>

        <Text style={styles.nameDm}></Text>

        <Text style={styles.textDm}></Text>
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

  nameDm: {
    height: "10%",
    marginTop: "2%",
  },

  textDm: {
    height: "15%",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    boder: 1,
    borderColor: "#EDEDED",
  },
})

export default Message
