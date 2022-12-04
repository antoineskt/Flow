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

import {
  useFonts,
  Roboto_900Black,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconPicker from "react-native-icon-picker";

const API_URL =
  Platform.OS === "ios" ? "http://192.168.1.18:5000" : "http://10.0.2.2:5000";

const AddHabitTwo = () => {

  const [title, setTitle] = useState("");
  const [goals, setGoals] = useState("");

  const [showIconPicker, setShowIconPicker] = useState(false);

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const navigation = useNavigation();

  const onSubmitHandler = () => {
    const payload = {
      title,
      goals,
    };
    fetch(`${API_URL}/${"createThing"}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            setIsError(true);
            setMessage(jsonRes.message);
          } else {
            onLoggedIn(jsonRes.token);
            setIsError(false);
            setMessage(jsonRes.message);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };

  const [fontsLoaded] = useFonts({ Roboto_900Black, Roboto_400Regular });

  if (!fontsLoaded) {
    return null;
  }

 

  const onSelect = (icon) => {
    setShowIconPicker(false);
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
          autoCapitalize="none"
          onChangeText={setTitle}
        ></TextInput>

        <Text style={styles.bodyText}>Objectif:</Text>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={setGoals}
          ></TextInput>
          <TextInput style={styles.textInput}>KM</TextInput>
          <TextInput style={styles.textInput}>Jours</TextInput>
        </View>

        <Text style={styles.bodyText}>Frequence:</Text>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <TextInput style={styles.textInput}>Quotidien</TextInput>
          <TextInput style={styles.textInput}>Hebdomadaire</TextInput>
          <TextInput style={styles.textInput}>Mensuel</TextInput>
        </View>

        <Text style={styles.bodyText}>Rappel de l'habitude:</Text>

        <TextInput style={styles.textInput}>17h35</TextInput>

        <Text style={styles.bodyText}>Icone:</Text>
        <IconPicker
        showIconPicker={showIconPicker}
        toggleIconPicker={() => setShowIconPicker(!showIconPicker)}
        iconDetails={[
          {
            family: "AntDesign",
            color: "blue",
            icons: [
              "wallet",
              "user",
              "addusergroup",
              "deleteuser",
              "deleteusergroup",
              "adduser",
            ],
          },
          { family: "Entypo", icons: ["wallet"] },
          { family: "FontAwesome", icons: ["google-wallet"] },
          {
            family: "FontAwesome5",
            icons: [
              "wallet",
              "hospital-user",
              "house-user",
              "user-alt-slash",
              "user-cog",
              "user-md",
              "user-tag",
              "user-slash",
            ],
          },
          { family: "Fontisto", icons: ["wallet"] },
          {
            family: "MaterialCommunityIcons",
            icons: ["wallet-membership"],
          },
          {
            family: "MaterialIcons",
            icons: ["wallet-travel", "supervised-user-circle", "verified-user"],
          },
        ]}
        content={<Text style={[styles.textBox]}>Clique pour choisir ton icone</Text>}
        onSelect={onSelect}
      />
          
        


       
      </View>
       {/* <View style={{justifyContent: "space-between", flexDirection: "row" }}>
        <Text style={styles.bodyText}>Date début:</Text>

        <TextInput style={styles.textInput}>...</TextInput>
        <Text style={styles.bodyText}>Date fin:</Text>
        <TextInput style={styles.textInput}>...</TextInput>
        </View> */}

      <View style={styles.viewValidate}>
        <TouchableOpacity onPress={onSubmitHandler}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.buttonValidate}
          >
            <Text style={styles.buttonText}>VALIDER</Text>
            <Text
              style={[styles.message, { color: isError ? "red" : "green" }]}
            >
              {message ? getMessage() : null}
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
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    margin: "2%",

    width: "33%",
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
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
