import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";




const CircularProgress = () => {
  return (
    <View style={styles.container}>
      <Pressable 
        onLongPress={()=>{console.log("cc")}}
        style={({ pressed }) => ({

          borderColor: pressed ? "orange" : "transparent",
          width: 150,
          height: 150,
          borderWidth: 20,
          borderRadius: 75,
         
          justifyContent: "center",
          alignItems: "center",
        })}
      >
      
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderWidth: 15,
    borderRadius: 75,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  
});

export default CircularProgress;
