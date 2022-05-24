import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Button, TextInput,Dimensions,ScrollView, Image, Alert, Picker, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import Signup from './Signup.js';
import Signup1 from './Step1.js';
import {useRoute} from '@react-navigation/native';





function Email ({ navigation }) {
    return(
            <>
            <View style={styles.Mscreen}>
            <TextInput
            style={styles.TEXT}
            keyboardType='email-address'
            textContentType="password"
            placeholder="Please Enter Your Email" 
            onChangeText = {""}
            />
            
        
 <View style={[{ width: "90%", margin: 10, backgroundColor: "#e23a33",alignItem:"center",justifyContent:"center", borderRadius: 5 }]}>


            <TouchableOpacity
            onPress={() => navigation.navigate('Password')}
            style={styles.button}>
            <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>

      </View>
     
        </View>
        </>
    );
}
export default Email;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      header: {
        color: "#e23a33",
        fontSize: 29,
    
      },
      p: {
        color: "#0c0c0c",
        fontSize: 12,
        padding: 15,
        textAlign: "center",
        fontWeight: "bold",
        flexDirection: "column",
        alignSelf: "flex-start",
    
    
      },
      A: {
        color: "#999",
        height: 30,
        width: 200,
        fontSize: 15,
        textAlign: "left",
    
        borderColor: "white",
        borderWidth: 1,
    
        flexDirection: "column",
        alignSelf: "flex-start",
        marginLeft: 18
      },
      TEXT: {
        borderBottomColor: "#e23a33", borderColor: "white", width: "90%", borderWidth: 1, paddingBottom: 5, marginBottom: 10,marginTop:10
      },
      Password: {
        borderBottomColor: "#e23a33", borderTopColor: "#e23a33", borderColor: "white", height: 42, width: "90%", borderWidth: 1, paddingBottom: 5, marginBottom: 10
      },
      BUTTON: {
        width: "90%",
        color: "#e23a33"
      },
      tinyLogo: {
        width: 50,
        height: 50,
      },
      logo: {
        width: 95,
        height: 95,
        alignSelf: "flex-start",
        justifyContent: 'center',
        backgroundColor: "white",
    
        marginLeft: 5,
        marginTop: 5,
    
    
      },
      logo2: {
        width: 260,
        height: 370,
        alignSelf: "flex-end",
        justifyContent: 'flex-end',
        backgroundColor: "white",
    
    
    
    
    
      },
      pic: {
        width: "100%",
        height: 360,
    
        alignSelf: "flex-end",
        justifyContent: 'flex-end',
        backgroundColor: "white",
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 0,
    
      },
      Mscreen: { flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: "white" },
      button: { backgroundColor: '#e23a33', borderRadius: 50, width: "100%", justifyContent: "center", flexDirection: "row" },
      text: { fontSize: 20, marginLeft: 1, marginTop: 2, textAlign: "center", height: 33, color: 'white' }
    
    
    });
    