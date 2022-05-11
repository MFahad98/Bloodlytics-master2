import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Button, TextInput,Dimensions,ScrollView, Image, Alert, Picker, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import Signup from './Signup.js';
import Signup1 from './Step1.js';
import {useRoute} from '@react-navigation/native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";



function Data () {
  const route=useRoute();
 const text=2;
  return(
      <ScrollView style={{ flex: 1,  }}>
      <Text style={{textDecorationLine:"underline"}}>BloodGroup: {route.params.text}</Text>
  
  {route.params.text == 'B+'?  <View>
      
      <View>
    <Text>Gender of donors</Text>
    <BarChart 
      data={{
        labels: ["Male", "Female"],
        datasets: [
          {
            data: [
              80,
              20,
              
            ]
          }
        ]
      }}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      yAxisLabel=""
      yAxisSuffix=""
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#ece7e2",
        backgroundGradientFrom: "#000000",
        backgroundGradientTo: "#070707",
        decimalPlaces: "", // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#80170e"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 0,
      }}
      fromZero
    />
  </View>
  
  <View>
    <Text>Smoker/Non-Smoker</Text>
    <BarChart
      data={{
        labels: ["Smoker", "Non smoker"],
        datasets: [
          {
            data: [
              30,
              60,
              
            ]
          }
        ]
      }}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      yAxisLabel=""
      yAxisSuffix=""
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#e26a00",
        backgroundGradientTo: "#e26a00",
        decimalPlaces: "", // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 0
      }}
      fromZero
    />
  </View>
  
  
  <View style={{paddingBottom:55}}>
  <Text>Age</Text>
  <PieChart
      data={[
    {
      name: "Age 18",
      population: 10,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Age 20",
      population: 25,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Age 30",
      population: 25,
      color: "#060505",
      legendFontColor: "#7f7c7c",
      legendFontSize: 15
    },
    {
      name: "Age 40",
      population: 30,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Age 50",
      population: 20,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ]}
    
    width={400}
    height={220}
    chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: "", // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,}}
    accessor={"population"}
    backgroundColor={"transparent"}
    paddingLeft={"15"}
  
    center={[5, 10]} 
    />
  
  
  </View>
  </View>:null }
     </ScrollView>
  
    );
    }
export default Data;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    color: "#f24e1e",
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
    borderBottomColor: "#f24e1e", borderColor: "white", width: "90%", borderWidth: 1, paddingBottom: 5, marginBottom: 10
  },
  Password: {
    borderBottomColor: "#f24e1e", borderTopColor: "#f24e1e", borderColor: "white", height: 42, width: "90%", borderWidth: 1, paddingBottom: 5, marginBottom: 10
  },
  BUTTON: {
    width: "90%",
    color: "#f24e1e"
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 100,
    height: 100,
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
  button: { backgroundColor: '#f24e1e', borderRadius: 50, width: "100%", justifyContent: "center", flexDirection: "row" },
  text: { fontSize: 20, marginLeft: 1, marginTop: 2, textAlign: "center", height: 33, color: 'white' }


});
