import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from "expo-status-bar";



const countryCodes = [
    { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
]

const PhoneNumberInput = () => {
const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
const [phoneNumber, setPhoneNumber] = useState('');
const [dropDownVisible, setDropDownVisible] = useState(false);


const handleDropDown = () =>{
    setDropDownVisible(true)
}


const handleCountrySelect = (country)=>{
setSelectedCountry(country);
setDropDownVisible(false)
}



  return (
    <View style={styles.phoneContainer}>
     <StatusBar translucent={true} background= "#808080" />
     <View style={styles.input}>
        <TouchableOpacity onPress={handleDropDown} style={styles.countryCode}>
            <Text style={styles.flag}>{selectedCountry.flag}</Text>
            <Text style={styles.code}>{selectedCountry.code}</Text>
        </TouchableOpacity>

        <TextInput
        style={styles.phoneInput}
        keyboardType="phone-pad"
        placeholder='Phone Number'
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        maxLength={11}
        />
     </View>

     {dropDownVisible && (
        <View style={styles.dropDownContainer}>

<FlatList
data={countryCodes}
keyExtractor={(item, index) => index.toString()}
renderItem={({item}) => (
<TouchableOpacity onPress={()=>handleCountrySelect(item)} style={styles.dropDownItems}>
    <Text style={styles.flag}>{item.flag}</Text>
    <Text style={styles.code}>{item.code}</Text>
    <Text style={styles.countryName}>{item.name}</Text>
</TouchableOpacity>
)}

/>
            </View>
     )}
    </View>
  )
}

export default PhoneNumberInput

const styles = StyleSheet.create({
    input:{
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        gap: 10,
    },
    countryCode:{
        // width: 100,
        borderWidth: 1,
        borderColor: '#E7EAEB',
        paddingVertical: 8,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap:10,
        paddingHorizontal: 10
    },
    code:{
        fontSize:18,
        fontWeight: 'bold',
        color: 'black'
    },
    phoneInput:{
        borderWidth: 1,
        borderColor: '#E7EAEB',
        borderRadius: 12,
        paddingVertical: 8,
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 20,
        textAlign:'center',
        color: 'black'
    },
    flag:{
        fontSize: 26
    },
    dropDownItems: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        gap:8
    },
    dropDownContainer:{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        maxHeight: 150,
        marginTop: 20,
    },
    countryName: {
        fontSize: 16,
        fontWeight: 'medium'
    },
    phoneContainer:{
        marginTop:16
    }
});