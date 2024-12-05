import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const EmailVerifiedScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/verified.png")} style={styles.icon} />
      <Text style={styles.title}>Email verified</Text>
      <Text style={styles.description}>Your email address has been verified successfully.</Text>
      <CustomButton title="Continue" backgroundColor="#007B5D" textColor="white" buttonStyle={styles.button} onPress={() => navigation.navigate("onboarding")} />
    </View>
  );
};

export default EmailVerifiedScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    width: 200,
  },
});
