import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, Alert, Picker, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import Signup from './Signup.js';
import Signup1 from './Step1.js';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    }
  }

  loginhandler = async () => {

    var email = this.state.email;
    var pass = this.state.pass;

    if (email == '' || pass == '') {
      alert('Please Fill all fields!');
    }
    else {

      var apiURL = "http://192.168.2.45:80/api/login.php";
      var Data = {
        email: email,
        pass: pass,
      };

      await fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify(Data)
      })
        .then((result) => result.text())
        .then((resultp) => {
          if (resultp != 'yes') {
            alert(resultp);
          }
          else {
            // this.props.navigation.navigate('Welcome to Bloodlytics');
            // alert(resultp);
            this.props.navigation.reset({
                  index: 0,

                  routes: [
                    {
                      name: 'Welcome to Bloodlytics',
                      params: { someParam: 'Param1' },
                    },
                  ],
                });
          }

        })
        .catch((error) => {
          console.log(error);
        })
    }

  }
  render() {
    return (
      <>

        <View style={{ backgroundColor: "white" }}>
          <Image style={styles.logo} source={require('./logo.png')} />
        </View>
        <View style={styles.Mscreen}>

          <Text style={styles.header}>Log in</Text>
          <Text style={styles.p}> Log in with data that you enter during your registration. </Text>

          <TextInput
            style={styles.TEXT}
            keyboardType='email-address'
            textContentType="password"
            placeholder="Email" 
            onChangeText = {email => this.setState({email})}
            />
            
          <TextInput
            style={styles.TEXT}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText = {pass => this.setState({pass})}
            />

          <View style={[{ width: "90%", margin: 10, backgroundColor: "#f24e1e",alignItem:"center",justifyContent:"center", borderRadius: 5 }]}>


            <TouchableOpacity
              // onPress={() => {
              //   // this.loginhandler();
              //   //
              //   this.props.navigation.reset({
              //         index: 0,
    
              //         routes: [
              //           {
              //             name: 'Welcome to Bloodlytics',
              //             params: { someParam: 'Param1' },
              //           },
              //         ],
              //       })
              // }}
              // onPress={this.loginhandler}
              onPress={() => this.props.navigation.navigate('Welcome to Bloodlytics')}
              style={styles.button}>
              <View style={{ marginTop: 8 }}>
                <AntDesign name="login" size={17} color="white" />
              </View>
              <Text style={styles.text}>Log in</Text>
            </TouchableOpacity>


          </View>

          <View style={{flexDirection:"row",width:"100%"}}>
        <View style={{width:"36%",marginLeft:90}}>
      <Text>Create New Account</Text> 
      </View>
       <View style={[{ width: 50,borderRadius:50,height:32, backgroundColor: "white"  ,borderRadius:15}]}>
      
       <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Step1')}
        style={{ backgroundColor: 'white',borderRadius:50,width:"100%" ,justifyContent:"center",flexDirection:"row"}}>
          
        <Text style={{color:"#f24e1e",textDecorationLine:"underline"}}>Sign up</Text>
      </TouchableOpacity>
      </View>
      </View>


          <View style={styles.pic}>
            <Image style={styles.logo2} source={require('./background.jpg')} />
          </View>

        </View>


      </>

    );
  }
}

export default Login;


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
