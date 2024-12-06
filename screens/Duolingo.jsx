import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

const Duolingo = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} background= "#808080" />
      <Image source={require("./../assets/d-img.png")} style={styles.image} />

      <Text>duolingo</Text>
      <Text>The free, fun, and effective way to learn a language!</Text>

     <View style={styles.buttonContainer}>
     <CustomButton title={'GET STARTED'} textColor={'black'} backgroundColor={'#2BD800'} />
     <CustomButton title={'I ALREADY HAVE AN ACCOUNT'} textColor={'#2BD800'} borderWidth={2} borderColor={'#525D70'} />
     </View>
     
    </View>
  );
};

export default Duolingo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: '100%'
  },

  image: {
    width: 163,
    height: 153,
  },

  description: {
    fontSize: 18,
    color: "white",
    fontWeight: "regular",
    textAlign: "center",
    marginTop: 20,
  },

  duolingoText: {
    fontSize: 40,
    color: "#2BD800",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  buttonContainer:{
    marginTop: 100
  }
});
