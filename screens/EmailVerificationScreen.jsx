import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const EmailVerificationScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} background= "#808080" />
      <Text style={styles.title}>Let’s verify your email</Text>
      <Text style={styles.subtitle}>Your email</Text>
      <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={(text) => setEmail(text)} keyboardType="email-address" autoCapitalize="none" />

      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxText}>I prefer email as my primary form of feedback and contact</Text>
      </View>

      <CustomButton title="Continue" backgroundColor={email ? "#007B5D" : "#B5D5C5"} textColor="white" buttonStyle={styles.button} onPress={() => navigation.navigate("emailSent")} />
    </View>
  );
};

export default EmailVerificationScreen;

const styles = StyleSheet.create({
  container: {

    padding: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: "#333333",
  },
  button: {
    marginTop: 20,
  },
});
