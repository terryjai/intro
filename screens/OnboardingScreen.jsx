import { Image, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import Onboarding from "react-native-onboarding-swiper";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

// npm i react-native-swiper

const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Swiper
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        autoplay
      >
        <View style={styles.onboardingContainer}>
          <Image source={require("./../assets/on1.png")} />

          <Text style={styles.title}>Multiple delivery options</Text>
          <Text style={styles.description}>Enjoy best in the market exchange rates</Text>
          <CustomButton title={"Get started"} textColor={"white"} backgroundColor={"#007B5D"} style={styles.buttonContainer} onPress={()=>navigation.navigate('numberValidation')} />
        </View>
        <View style={styles.onboardingContainer}>
          <Image source={require("./../assets/on2.png")} style={styles.on2Image} />

          <Text style={styles.title}>Multiple delivery options</Text>
          <Text style={styles.description}>
            Mobile money, Bank transfer and cash pick up</Text>
          <CustomButton title={"Get started"} textColor={"white"} backgroundColor={"#007B5D"} style={styles.buttonContainer} onPress={()=>navigation.navigate('numberValidation')} />
        </View>
        <View style={styles.onboardingContainer}>
          <Image source={require("./../assets/on3.png")} />

          <Text style={styles.title}>Customer friendly</Text>
          <Text style={styles.description}> Seamless and transparent customer experience at every step of transfer</Text>
          <View style={styles.twoButtonContainer}>
            <CustomButton title={"Register"} textColor={"white"} backgroundColor={"#007B5D"} buttonStyle={styles.twoButton} />
            <CustomButton title={"Sign in"} textColor={"white"} backgroundColor={"#007B5D"} buttonStyle={styles.twoButton} />
          </View>
        </View>
      </Swiper>

      {/* <View style={styles.buttonContainer}>
 
   </View> */}
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  onboardingContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10,
  },

  on2Image: {
    width: 250,
    height: 260,
  },

  //   image: {
  //     width: 163,
  //     height: 153,
  //   },

  description: {
    fontSize: 24,
    color: "#333333",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },

  title: {
    fontSize: 20,
    color: "#007B5D",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
  },

  paginationStyle: {
    position: "absolute",
    top: 550,
  },
  dotStyle: {
    width: 20,
    height: 5,
    borderRadius: 6,
    // backgroundColor: '#007B5D'
  },
  activeDotStyle: {
    width: 20,
    height: 5,
    borderRadius: 6,
    backgroundColor: "#007B5D",
  },
  twoButtonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  twoButton: {
    width: 157,
  },
});
