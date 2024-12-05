import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const VerificationComplete = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("./../assets/v.png")} style={styles.image} />
      <Text style={styles.title}>Verification Complete</Text>
      <Text style={styles.subtitle}>Your phone number has been verified.</Text>
      <CustomButton title="Continue" textColor="white" backgroundColor="#007B5D" onPress={() => navigation.navigate("onboarding")} />
    </View>
  );
};

export default VerificationComplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007B5D",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
});
