import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/FontAwesome"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function Header() {
  const navigation = useNavigation()
  return (
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
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",

    paddingTop: "5%",
    justifyContent: "space-between",
  },

  iconRight: {
    flexDirection: "row",
  },
})
