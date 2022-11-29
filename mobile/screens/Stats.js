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

const Stats = () => {
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
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")} style={styles.touchableOpacity}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.linearCircle}
          >
            <View style={styles.circleWhite}></View>
          </LinearGradient>
          <Text style={styles.circleText}> Meditation</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Homepage")} style={styles.touchableOpacity}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.linearCircle}
          >
            <View style={styles.circleWhite}></View>
          </LinearGradient>
          <Text style={styles.circleText}> Course</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Homepage")} style={styles.touchableOpacity}>
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
          margin: "2%"
        }}
      />

      <View style={styles.body}>
        <Text style={styles.bodyText}>MEILLEUR SERIE</Text>

        <Text style={styles.bodyText}>REUSSITE</Text>
        <Text style={styles.bodyText}>27</Text>

        <Text style={styles.bodyText}>27%</Text>
        <Text style={styles.bodyText}>TERMINEES</Text>

        <Text style={styles.bodyText}>SERIE EN COURS</Text>
        <Text style={styles.bodyText}>124</Text>

        
        <Text style={styles.bodyText}>12</Text>
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
  

  viewValidate: {
    flex: 1,
    padding: "5%",

    justifyContent: "center",
    alignItems: "center"
    
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
    flexDirection: "row"
  },

  linearCircle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    margin: "2%",
    justifyContent: "center",
    alignItems: "center"

  },

  circleWhite: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: "white",
   
    
  },
  
  touchableOpacity: {
    justifyContent: "center",
    alignItems: "center"
  },
  circleText: {
    alignSelf: "center"
  }
  ,

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
    flex: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },

  bodyText: {
    height: "10%",
    marginTop: "2%",
    fontFamily: "Roboto_900Black",
    fontSize: 16,
    width: "50%",
    
   
    textAlign: "center"
  },

  input: {
    height: "15%",

    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    boder: 1,
    borderColor: "#EDEDED",
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

export default Stats;
