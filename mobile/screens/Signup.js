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

const API_URL =
  Platform.OS === "ios" ? "http://192.168.1.18:5000" : "http://10.0.2.2:5000";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const navigation = useNavigation();

  //on poste les datas
  const onSubmitHandler = () => {
    const payload = {
      email,
      name,
      password,
    };
    fetch(`${API_URL}/${"signup"}`, {
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

  //on récupére le token
  const onLoggedIn = (token) => {
    fetch(`${API_URL}/private`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) {
            setMessage(jsonRes.message);
          }
          
        } catch (err) {
          console.log(err);
        }

        finally {
          navigation.navigate("Homepage")
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

  const [fontsLoaded] = useFonts({ Roboto_900Black });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.inscription}> INSCRIPTION </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.login}
        >
          <Text style={styles.logintext}> Déjà inscrit ? </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyText}>Nom</Text>

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={setName}
        ></TextInput>

        <Text style={styles.bodyText}>Email</Text>

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={setEmail}
        ></TextInput>

        <Text style={styles.bodyText}>Mot de passe</Text>

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setPassword}
        ></TextInput>

        <Text style={styles.bodyText}>Confirmation de mot de passe</Text>

        {/* Il faut ajouter la condition d'avoir le mm mdp ici */}
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setPassword}
        ></TextInput>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={onSubmitHandler}>
          <LinearGradient colors={["#FF3B01", "#FACA21"]} style={styles.button}>
            <Text style={styles.buttonText}>VALIDER</Text>

            <Text
              style={[styles.message, { color: isError ? "red" : "green" }]}
            >
              {message ? getMessage() : null}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: "100%",
    flex: 1,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    flex: 0.5,
    padding: "10%",
    justifyContent: "space-between",
    height: "100%",
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
    flex: 4,
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
    flex: 2,
    padding: "5%",

    justifyContent: "center",
  },

  button: {
    height: "50%",
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

  message: {
    fontSize: 16,
    marginVertical: "5%",
  },
});

export default Signup;
