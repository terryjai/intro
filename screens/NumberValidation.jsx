import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PhoneNumberInput from '../components/PhoneNumberInput'
import CustomButton from '../components/CustomButton'

const NumberValidation = () => {
  return (
    <View style={styles.container}>
        {/* TOP SECTION */}
      <View style={styles.flexedContent}>
        <TouchableOpacity>
        <Image source={require('../assets/close-icon.png')} />
        </TouchableOpacity>

        <Text style={styles.topText}>Welcome to SB Remit</Text>
      </View>
      
      {/* DESCRIPTION SECTION */}
      <View>
        <Text style={styles.text1}>Verify your phone 
        number with code</Text>
        <Text style={styles.text2}>We’ll send you a code. It helps keep your account secure</Text>
      </View>
      <View style={styles.phoneText}>
        <Text>Your Phone number</Text>
        <PhoneNumberInput/>
      </View>

      {/* SEND CODE BUTTON */}
      <CustomButton
            title={"Send code"}
            textColor={"white"}
            backgroundColor={"#007B5D"}
            style={styles.buttonContainer}
            buttonStyle={styles.buttonStyle}
          />
    </View>
  )
}

export default NumberValidation

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingHorizontal:10,
        height: '100%',
        // backgroundColor: 'red'
        // height: "100%",
    },
    flexedContent:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 20
    },
    text1:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black'
    },
    
    text2:{
        fontSize: 13,
        fontWeight: "regular",
        color: 'black'
    },
    topText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007B5D'
    },
    phoneText:{
        fontSize: 13,
        fontWeight: 'normal',
        color: '#333333',
        marginTop: 14
    },
    buttonContainer: {
        position: "absolute",
        paddingHorizontal: 20,
        bottom: 30,
        // backgroundColor : 'red',
        padding: 10,
      },

      buttonStyle:{
        // margin: 'auto'
        // width: '100%'
      }
});