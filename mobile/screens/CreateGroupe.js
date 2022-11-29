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
  } from "react-native";
  
  import React, { useCallback, useEffect, useState } from "react";
  
  import { useFonts, Roboto_900Black } from "@expo-google-fonts/roboto";
  
  import { useNavigation } from "@react-navigation/native";
  import { LinearGradient } from "expo-linear-gradient";
  
  import Icon from "react-native-vector-icons/FontAwesome";
  import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import Ionicons from "react-native-vector-icons/Ionicons";
  
  const CreateGroupe = () => {
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
  
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <Text> AJOUTER UNE HABITUDE</Text>
        </View>
  
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
  
        <View style={styles.body}>
  
        <Button title = "Créer une habitude personalisé" onPress={() => navigation.navigate("CreateGroupeTwo")}></Button>
          <ScrollView>
            
  
            <Text>SPORT</Text>
            <View>
              <FontAwesome5.Button
                name="walking"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Marcher
              </FontAwesome5.Button>
  
              <FontAwesome5.Button
                name="running"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Courir
              </FontAwesome5.Button>
  
              <FontAwesome5.Button
                name="jedi"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
                size={17}
              >
                Workout
              </FontAwesome5.Button>
  
              <FontAwesome5.Button
                name="swimmer"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
                size={17}
              >
                Natation
              </FontAwesome5.Button>
  
              <FontAwesome5.Button
                name="pray"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Yoga
              </FontAwesome5.Button>
  
              <MaterialCommunityIcons.Button
                name="bike"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Vélo
              </MaterialCommunityIcons.Button>
  
              <Text>SANTÉ</Text>
  
              <MaterialCommunityIcons.Button
                name="smoking-off"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Ne pas fumer
              </MaterialCommunityIcons.Button>
  
              <Ionicons.Button
                name="fast-food"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Pas de Fast-Food
              </Ionicons.Button>
  
              <MaterialCommunityIcons.Button
                name="liquor"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Pas d'alcool
              </MaterialCommunityIcons.Button>
  
              <MaterialCommunityIcons.Button
                name="spoon-sugar"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Pas de sucre
              </MaterialCommunityIcons.Button>
  
              <MaterialCommunityIcons.Button
                name="fruit-cherries"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Manger des fruits
              </MaterialCommunityIcons.Button>
  
              <MaterialCommunityIcons.Button
                name="water"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Boire de l'eau
              </MaterialCommunityIcons.Button>
  
              <Text>BIEN-ÊTRE</Text>
  
              <MaterialCommunityIcons.Button
                name="meditation"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Méditation
              </MaterialCommunityIcons.Button>
  
              <MaterialCommunityIcons.Button
                name="lungs"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Réspiration
              </MaterialCommunityIcons.Button>
  
              <MaterialCommunityIcons.Button
                name="book"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Lecture
              </MaterialCommunityIcons.Button>
  
              <MaterialCommunityIcons.Button
                name="book"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
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
                onPress={() => navigation.navigate("CreateGroupeTwo")}
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
                onPress={() => navigation.navigate("CreateGroupeTwo")}
                size={17}
              >
                Planifier sa journée
              </FontAwesome5.Button>
  
  
              <MaterialCommunityIcons.Button
                name="av-timer"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
              >
                Se lever tot
              </MaterialCommunityIcons.Button>
  
              <FontAwesome5.Button
                name="money-check-alt"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
                size={17}
              >
                Suivre ses dépenses
              </FontAwesome5.Button>
  
              
              <FontAwesome5.Button
                name="book-reader"
                color={"black"}
                backgroundColor={"transparent"}
                onPress={() => navigation.navigate("CreateGroupeTwo")}
                size={17}
              >
                Etudier
              </FontAwesome5.Button>
              
  
            
            </View>
          </ScrollView>
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
      flex: 1,
    },
  
    header: {
      width: "100%",
      flexDirection: "row",
      flex: 2,
      paddingTop: "5%",
      justifyContent: "space-between",
      height: "100%",
    },
  
    iconRight: {
      flexDirection: "row",
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
  
    footer: {
      flex: 1,
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
  
  export default CreateGroupe;
  