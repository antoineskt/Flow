
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";

import { AddHabitOne, AuthScreen} from "./screens";
import { FirstPage } from "./screens";
import { Signup } from "./screens";
import { Login } from "./screens";
import { HomePage } from "./screens";
import { Stats } from "./screens";
import { GroupFriends } from "./screens";
import { Seetings } from "./screens";
import { AddAFriend } from "./screens";
import { Profil } from "./screens";
import { Messages } from "./screens"; 
import { AddHabitTwo } from "./screens";
import { CreateGroupe } from "./screens"; 
import { CreateGroupeTwo } from "./screens";
import { Premium } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  options={{headerShown: false}} name="Firstpage" component={FirstPage}  />
        <Stack.Screen  options={{headerShown: false}} name="Signup" component={Signup} />
        <Stack.Screen  options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen  options={{headerShown: false}} name="Homepage" component={HomePage} />
        <Stack.Screen  options={{headerShown: false}} name="Stats" component={Stats} />
        <Stack.Screen  options={{headerShown: false}} name="AddHabitOne" component={AddHabitOne} />
        <Stack.Screen  options={{headerShown: false}} name="GroupFriends" component={GroupFriends} />
        <Stack.Screen  options={{headerShown: false}} name="Seetings" component={Seetings} />
        <Stack.Screen  options={{headerShown: false}} name="AddAFriend" component={AddAFriend} />
        <Stack.Screen  options={{headerShown: false}} name="Profil" component={Profil} />
        <Stack.Screen  options={{headerShown: false}} name="Messages" component={Messages} />
        <Stack.Screen  options={{headerShown: false}} name="AddHabitTwo" component={AddHabitTwo} />
        <Stack.Screen  options={{headerShown: false}} name="CreateGroupe" component={CreateGroupe} />
        <Stack.Screen  options={{headerShown: false}} name="CreateGroupeTwo" component={CreateGroupeTwo} />
        <Stack.Screen  options={{headerShown: false}} name="Premium" component={Premium} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
