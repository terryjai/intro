import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const EmailSentScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your email</Text>
      <Text style={styles.description}>Please check your inbox and tap the link in the email we’ve just sent to:</Text>
      <Text style={styles.email}>balogunkriku@gmail.com</Text>
      <TouchableOpacity>
        <Text style={styles.resendLink}>Resend it</Text>
      </TouchableOpacity>

      <CustomButton title="Open email" backgroundColor="#007B5D" textColor="white" buttonStyle={styles.button} onPress={() => navigation.navigate("emailVerified")} />
      <CustomButton title="I’ll do it later" backgroundColor="#CCCCCC" textColor="#333333" buttonStyle={styles.button} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EmailSentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007B5D",
    marginBottom: 20,
  },
  resendLink: {
    color: "#007B5D",
    fontSize: 14,
    textAlign: "right",
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
  },
});
