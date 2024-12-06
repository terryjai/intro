import React, { useState, useEffect } from "react";
import { Image, StyleSheet,Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,} from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

const VerifyCodeScreen = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(45);

    useEffect(() => {
        const interval = setInterval(() => {
          setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
  
        return () => clearInterval(interval);
    }, []);

        const handleInputChange = (text, index) => {
            const newCode = [...code];
            newCode[index] = text;
            setCode(newCode);

              // Automatically focus on the next input
            if (text.length === 1 && index < 5) {
                refs[index + 1].focus();
            }
    };
  
    const refs = [];

  return (
    <KeyboardAvoidingView style={styles.container}>
    <StatusBar translucent={true} background= "#808080" />
    <Text style={styles.title}>We just sent an SMS</Text>
    <Text style={styles.subtitle}>
    Enter the security code we sent to {"\n"} <Text style={styles.bold}>+32 123456789</Text>
    </Text>
    <TouchableOpacity>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>

      <View style = {styles.codeContainer}>
      {code.map((char, index) => (
          <TextInput
            key={index}
            ref={(input) => (refs[index] = input)}
            style={styles.input}
            value={char}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange(text, index)}
          />
        ))}
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.resendText}>
          Didn’t get the code?{" "}
          <Text style={styles.resendLink} onPress={() => setTimer(45)}>Resend it</Text>
        </Text>
        <Text style={styles.timer}>{timer}s</Text>
      </View>

      <CustomButton title="Done" textColor="White" backgroundColor="#007B5D" onPress={() => navigation.navigation("VerificationComplete")} />
      </KeyboardAvoidingView>
  );
};


export default VerificationScreen

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      justifyContent: "center",
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      textAlign: "center",
      marginBottom: 20,
    },
    bold: {
      fontWeight: "bold",
    },
    editText: {
      color: "#007B5D",
      fontSize: 14,
      textAlign: "center",
      marginBottom: 20,
    },
    codeContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginBottom: 20,
    },
    input: {
      width: 40,
      height: 50,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      textAlign: "center",
      fontSize: 18,
    },
    timerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 30,
    },
    resendText: {
      fontSize: 14,
    },
    resendLink: {
      color: "#007B5D",
      fontWeight: "bold",
    },
    timer: {
      marginLeft: 10,
      fontSize: 14,
      fontWeight: "bold",
    },
  });
  