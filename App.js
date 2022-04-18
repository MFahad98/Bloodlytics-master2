import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Ionicons,AntDesign,FontAwesome  } from '@expo/vector-icons';
import { StyleSheet, Text, View ,Button,TextInput,Image,Picker,TouchableOpacity,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { borderBottomColor, textShadowColor} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import Step1 from './Components/Step1.js';
import Step2 from './Components/Step2.js';
import Step3 from './Components/Step3.js';

import MyDrawer from './Components/Nexthome.js';



import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  return (
    <>
    <View style={styles.Hscreen}>
    <View style={styles.logo}>
    <Image style={styles.logo} source = {require('./assets/logo.png')} />
    </View>
    <Text>Welcome to Bloodlytics</Text>
       <View style={[{ width: "90%", margin: 10, backgroundColor: "#f24e1e" ,height:35,borderRadius: 5,alignItems: 'center',justifyContent:"center",overflow:"hidden",}]}>
     
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.button1}>
       <View style={{marginTop:6}}> 
       <AntDesign name="login" size={17} color="white" />
       </View>
        <Text style={styles.text}>Log in</Text>
      </TouchableOpacity>
      </View>
     
      <View style={[{ width: "90%",borderRadius:5,height:35,alignItems: 'center',justifyContent:"center", backgroundColor: "#f24e1e"  }]}>
       <TouchableOpacity
        onPress={() => navigation.navigate('Step1')}
        style={styles.icon}>
          <View style={{marginTop:4}}> 
        <FontAwesome name="sign-in" size={21} color="white" />
        </View>
        <Text style={styles.text2}>Sign up</Text>
      </TouchableOpacity>

      </View>
    </View>
    </>

  );
}



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function App() {
  return (
    <>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign up">
        <Stack.Screen name="Bloodlytics" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Step1" component={Step1} />
        <Stack.Screen name="Step2" component={Step2} />
        <Stack.Screen name="Step3" component={Step3} />
        
        <Stack.Screen name="Welcome to Bloodlytics" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>

    
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    color: "#f24e1e",
    fontSize:29,
    paddingTop:100
  },
  p:{
    color: "#999",
    fontSize:12,
    paddingTop:0,
    textAlign:"center",
    fontWeight:"bold",
    flexDirection:"column",
    alignSelf:"center",
   
 
  },
  A:{
    color: "#999",
    height: 30,
    width: 200,
    fontSize:15,
    textAlign:"left",
  
    borderColor:"white",
    borderWidth:1,
    
    flexDirection:"column",
    alignSelf:"flex-start",
    marginLeft:18
  },
  TEXT:{
    borderBottomColor:"#f24e1e",borderColor:"white",width: "90%",borderWidth:1,paddingBottom:5,marginBottom:10
  },
  Password:{
    borderBottomColor:"#f24e1e",borderTopColor:"#f24e1e",borderColor:"white",height:42,width: "90%",borderWidth:1,paddingBottom:5,marginBottom:10
  },
  BUTTON:{
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
    alignSelf: "center",
 
  
    
  },
  Hscreen:{
    flex: 1, alignItems: 'center',justifyContent:"center", backgroundColor:"white" 
  },
  button1:{
    backgroundColor: '#f24e1e',borderRadius:5,width:"100%" ,justifyContent:"center",flexDirection:"row"
  },

  text:{ fontSize: 20,marginLeft:1,textAlign:"center", color: 'white' },

  text2:{ fontSize: 20,marginLeft:2,textAlign:"center", color: 'white' },
  icon:{ backgroundColor: '#f24e1e',borderRadius:5,width:"100%" ,justifyContent:"center",flexDirection:"row"},

});
