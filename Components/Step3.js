import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';


//Validation functions
//required
// const isValidObjfield = (obj) => {
//   return Object.values(obj).every((value) => value.trim());
// };

// //error msg
// const updateError = (error, stateUpdater) => {
//   stateUpdater(error);
//   setTimeout(() => {
//     stateUpdater("");
//   }, 2500);
// };
// //email validation
// const isValidEmail = (value) => {
//   const regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//   return regx.test(value);
// };

// function Signup({ navigation }) {

//   const [userInfo, setuserInfo] = useState({
//     fullName: "",
//     email: "",
//     gender: "",
//     age: "",
//     StreetNo: "",
//     HouseNO: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const {
//     fullName,
//     email,
//     gender,
//     age,
//     StreetNo,
//     HouseNO,
//     password,
//     confirmPassword,
//   } = userInfo;

//   const onChangehandler = (value, fieldName) => {
//     setuserInfo({ ...userInfo, [fieldName]: value });
//   };

//   const [error, setError] = useState("");
//   //Checking condiction
//   const isValidfoam = () => {
//     if (!isValidObjfield(userInfo))
//       return updateError("Required all fields", setError);

//     if (!fullName.trim() || fullName.length < 3)
//       return updateError("Invalid name", setError);
//     if (!isValidEmail(email)) return updateError("Invalid Email", setError);
//     if (!password.trim() || password.length < 8)
//       return updateError("Password is less than 8 ch", setError);
//     if (password != confirmPassword)
//       return updateError("Password not match", setError);

//     return true;
//   };
//   const submitFoam = () => {
//     if (isValidfoam()) console.log(userInfo);
//   };

//   const [selectedValue, setSelectedValue] = useState("Select");
// alert value of selected colony
// const Show=(value)=>{
//   Alert.alert(value)
// }

// extra for getting value of select
// Alert.alert(selectedValue)

export class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', email: '', pass: '', cpass: '', age: '', stnum: '', hnum: '', cnum: 'Madina-Town', gen: 'Male', bgroup: 'AB+', smk: 'Smoker' };
    // this.subscribe = firestore().collection("brecord"),onSnapshot(docs => {
    //   let brecord = []
    //   docs.forEach(doc => {brecord.push(doc.data())})
    //   console.log(this.state);
    // })
  }

  // signuphandler = async () => {
  //   var name = this.state.name;
  //   var email = this.state.email;
  //   var pass = this.state.pass;
  //   var cpass = this.state.cpass;
  //   var age = this.state.age;
  //   var stnum = this.state.stnum;
  //   var hnum = this.state.hnum;
  //   var cnum = this.state.cnum;
  //   var gen = this.state.gen;
  //   var bgroup = this.state.bgroup;
  //   var smk = this.state.smk;

  //   if (name == '' || email == '' || pass == '' || cpass == '' || age == '' || stnum == '' || hnum == '' || cnum == '' || gen == '' || bgroup == '' || smk == '') {
  //     alert('Required fields are Missing');
  //   }
  //   else{
  //     firestore().collection('break').add({
  //       name: name,
  //       email: email,
  //       pass: pass,
  //       age: age,
  //       stnum: stnum,
  //       hnum: hnum,
  //       cnum: cnum,
  //       gen: gen,
  //       bgroup: bgroup,
  //       smk: smk,
  //     })
  //   }
  // }

  signgo = async () => {
    // var name = await AsyncStorage.getItem('name1');
    // var email = await AsyncStorage.getItem('email1');
    // var pass = await AsyncStorage.getItem('pass1');
    // var cpass = await AsyncStorage.getItem('cpass1');
    // alert(name+ '<br>' + email+ '<br>' + pass);
    // this.props.navigation.navigate('Step3');

    var gen = this.state.gen;
    var bgroup = this.state.bgroup;
    var smk = this.state.smk;

    if (gen == '' || bgroup == '' || smk == ''){
      alert('Required fields are Missing');
    }
    else{

      var name1 = await AsyncStorage.getItem('name1');
      var email1 = await AsyncStorage.getItem('email1');
      var pass1 = await AsyncStorage.getItem('pass1');
      var cpass1 = await AsyncStorage.getItem('cpass1');
      var age1 = await AsyncStorage.getItem('age1');
      var stnum1 = await AsyncStorage.getItem('stnum1');
      var hnum1 = await AsyncStorage.getItem('hnum1');
      var cnum1 = await AsyncStorage.getItem('cnum1');
      var gen1 = gen;
      var bgroup1 = bgroup;
      var smk1 = smk;
      // alert(name1+ ' ' + email1+ ' ' + pass1+ ' ' + age1+ ' ' + stnum1+ ' ' + hnum1+ ' ' + cnum1+ ' ' + gen1+ ' ' + bgroup1+ ' ' + smk1);
      // this.props.navigation.navigate('Step3');

      var apiURL = "http://192.168.0.104:80/api/insert.php";
        var Data = {
          name: name1,
          email: email1,
          pass: pass1,
          cpass: cpass1,
          age: age1,
          stnum: stnum1,
          hnum: hnum1,
          cnum: cnum1,
          gen: gen1,
          bgroup: bgroup1,
          smk: smk1
        };

        await fetch(apiURL, {
          method: 'POST',
          body: JSON.stringify(Data)
        })
          .then((response) => response.text())
          .then((responsejson) => {
            // alert(responsejson[0].Message);
            alert(responsejson);
          })

          .catch((error) => {
            // alert('ERROR ' + error);
            console.log(error);
          })
          .done();
        this.props.navigation.navigate('Login');
      }

  }



  signuphandler = async () => {
    var name = this.state.name;
    var email = this.state.email;
    var pass = this.state.pass;
    var cpass = this.state.cpass;
    var age = this.state.age;
    var stnum = this.state.stnum;
    var hnum = this.state.hnum;
    var cnum = this.state.cnum;
    var gen = this.state.gen;
    var bgroup = this.state.bgroup;
    var smk = this.state.smk;

    if (name == '' || email == '' || pass == '' || cpass == '' || age == '' || stnum == '' || hnum == '' || cnum == '' || gen == '' || bgroup == '' || smk == '') {
      alert('Required fields are Missing');
    }
    else {

      const regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!regx.test(email)) {
        alert('Please enter a valid email');
        //  var msg = 'Please enter a valid email';
      }
      else if (pass.length < 8) {
        alert('Password must be greater than 8');
      }
      else if (cpass !== pass) {
        alert('Password does not match');
      }
      else {
        const passcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/;
        if (!passcheck.test(pass)) {
          alert('Enter Password requirements!');
        }
        var apiURL = "http://192.168.0.104:80/api/insert.php";
        // var headers = {
        //   'Accept' : 'application/json',
        //   'Content-Type' : 'application/json'
        // };
        var Data = {
          name: name,
          email: email,
          pass: pass,
          cpass: cpass,
          age: age,
          stnum: stnum,
          hnum: hnum,
          cnum: cnum,
          gen: gen,
          bgroup: bgroup,
          smk: smk
        };

        await fetch(apiURL, {
          method: 'POST',
          // headers : {"Content-Type": "application/json"},
          body: JSON.stringify(Data)
        })
          .then((response) => response.text())
          .then((responsejson) => {
            // alert(responsejson[0].Message);
            alert(responsejson);
          })

          .catch((error) => {
            // alert('ERROR ' + error);
            console.log(error);
          })
          .done();
        this.props.navigation.navigate('Login');
      }



      // .then((response) => {
      //   if(response.status == 200){
      //     console.log('response =>', response);
      //   }
      // })
      // .catch((error) => {
      //   alert(error);
      // });
    };
  }


  render() {
    return (
      <>
      <ScrollView>
        <View style={{ backgroundColor: "white" }}>
          <Image style={styles.logo} source={require("./logo.png")} />
        </View>
        <View style={styles.Mscreen}>
          <Text style={styles.header}>Sign up</Text>

{/* 
          <TextInput
            style={styles.TEXT}
            keyboardType="name-phone-pad"
            textContentType="username"
            placeholder="Name"
            onChangeText={name => this.setState({ name })}
          // value={fullName}
          // onChangeText={(value) => onChangehandler(value, "fullName")}
          /> 

          <TextInput
            style={styles.TEXT}
            keyboardType="email-address"
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          // value={email}
          // onChangeText={(value) => onChangehandler(value, "email")}
          />
          <Text style={styles.msg1}>Please Enter Right Email Formate.</Text>

          <TextInput
            style={styles.TEXT}
            keyboardType="email-address"
            textContentType="password"
            placeholder="Password"
            onChangeText={pass => this.setState({ pass })}
            // value={password}
            // onChangeText={(value) => onChangehandler(value, "password")}
            secureTextEntry={true}
          />
          <Text style={styles.msg}>Password must contain 8 chracters, Capital letters, small letters, numbers and special characters.</Text>
 
          <TextInput
            secureTextEntry
            style={styles.TEXT}
            keyboardType="email-address"
            textContentType="password"
            placeholder="Confirm Password"
            onChangeText={cpass => this.setState({ cpass })}
          // value={confirmPassword}
          // onChangeText={(value) => onChangehandler(value, "confirmPassword")}

          />

          <TextInput
            style={styles.TEXT}
            keyboardType="numeric"
            textContentType="password"
            placeholder="Age"
            onChangeText={age => this.setState({ age })}
          // value={age}
          // onChangeText={(value) => onChangehandler(value, "age")}
          />

          <TextInput
            style={styles.TEXT}
            keyboardType="numeric"
            textContentType="password"
            placeholder="Street no"
            onChangeText={stnum => this.setState({ stnum })}
          // value={StreetNo}
          // onChangeText={(value) => onChangehandler(value, "StreetNo")}
          />

          <TextInput
            style={styles.TEXT}
            keyboardType="numeric"
            textContentType="password"
            placeholder="House no"
            onChangeText={hnum => this.setState({ hnum })}
          // value={HouseNO}
          // onChangeText={(value) => onChangehandler(value, "HouseNO")}
          />

          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              width: "90%",
              borderColor: "white",
              borderBottomColor: "red",
            }}
          >
            <Text style={styles.A}>Select Colony:</Text>
            <Picker
              selectedValue={this.state.cnum}
              style={{
                borderColor: "white",
                borderWidth: 1,
                width: 120,
                color: "#999",
              }}
              // onValueChange={val => this.setState({val})}
              onValueChange={(itemValue, itemIndex) => this.setState({ cnum: itemValue })
              }
            >
              <Picker.Item label="Madina-Town" value="Madina-Town" />
              <Picker.Item label="Mansoorabad" value="Mansoorabad" />
              <Picker.Item label="Farooqabad" value="Farooqabad" />
              <Picker.Item label="Kohainoor" value="Kohainoor" />
            </Picker>
          </View>*/}

          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              width: "90%",
              borderColor: "white",
              borderBottomColor: "red",
            }}
          >
            <Text style={styles.A}>Select Gender:</Text>
            <Picker
              selectedValue={this.state.gen}
              style={{
                borderColor: "white",
                borderWidth: 1,
                width: 120,
                color: "#999",
              }}
              // onValueChange={val => this.setState({val})}
              onValueChange={(itemValue, itemIndex) => this.setState({ gen: itemValue })
              }
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              width: "90%",
              borderColor: "white",
              borderBottomColor: "red",
            }}

          >
            <Text style={styles.A}>Select BloodGroup:</Text>
            <Picker
              selectedValue={this.state.bgroup}
              style={{
                borderColor: "white",
                borderWidth: 1,
                width: 120,
                color: "#999",
              }}
              onValueChange={(itemValue, itemIndex) => this.setState({ bgroup: itemValue })
              }
            >
              <Picker.Item label="AB+" value="AB+" />
              <Picker.Item label="AB-" value="AB-" />
              <Picker.Item label="B+" value="B+" />
              <Picker.Item label="B-" value="B-" />
              <Picker.Item label="A+" value="A+" />
              <Picker.Item label="A-" value="A-" />
              <Picker.Item label="O+" value="O+" />
              <Picker.Item label="O-" value="O-" />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              borderWidth: 1,
              borderColor: "white",
              borderBottomColor: "red",
            }}
          >
            <Text style={styles.A}>Select you are smoker/non-smoker:</Text>
            <Picker
              selectedValue={this.state.smk}
              style={{ width: 120, color: "#999" }}
              // onValueChange={val => this.setState({val})}
              onValueChange={(itemValue, itemIndex) => this.setState({ smk: itemValue })
              }
            >
              <Picker.Item label="Smoker" value="Smoker" />
              <Picker.Item label="Non-Smoker" value="Non-Smoker" />
            </Picker>
          </View>
          <View style={styles.pic}>
            <Image style={styles.logo2} source={require("./blood-donor.jpg")} />
          </View>
          <View
         
            style={[
              {
                width: "25%",
                margin: 10,
                marginTop:-63,
                marginLeft:260,   
                backgroundColor: "#e23a33",
                borderRadius: 5,
               
              },
            ]}
          > 
       
            {/*<TouchableOpacity onPress={() => this.props.navigation.navigate('Step4')} style={styles.button1}>*/}
            <TouchableOpacity onPress={this.signgo} style={styles.button1}>
              <View style={{ marginTop: 5 }}>
                <AntDesign name="checksquareo" size={21} color="white" />
              </View>
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
          </View>
          
        </View></ScrollView>
      </>
    );
  }
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#e23a33",
    fontSize: 29,
  },
  p: {
    color: "#0c0c0c",
    fontSize: 12,
    paddingTop: 0,
    textAlign: "center",
    fontWeight: "bold",
    flexDirection: "column",
    alignSelf: "center",
  },
  A: {
    color: "#999",
    height: 50,
    width: 200,
    fontSize: 15,
    textAlign: "left",
    alignItems: "center",
    marginLeft: 0,
    paddingTop: 12,
  },
  TEXT: {
    borderBottomColor: "#e23a33",
    borderColor: "white",
    width: "90%",
    borderWidth: 1,
    paddingBottom: 5,
  },
  Password: {
    borderBottomColor: "#e23a33",
    borderColor: "white",
    height: 40,
    width: "90%",
    borderWidth: 1,
  },
  BUTTON: {
    width: "90%",
    color: "#e23a33",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 95,
    height: 95,
    alignSelf: "flex-start",
    justifyContent: "center",
    backgroundColor: "white",

    marginLeft: 5,
    marginTop: 5,
  },
  logo2: {
    width: 210,
    height: 170,
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white",

    opacity: 1,
  },
  pic: {
    width: "90%",
    height: 190,
    opacity: 1,
    
    marginTop:230,
    backgroundColor: "white",
    alignItems: "flex-start",
  },
  Mscreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  errors: {
    backgroundColor: "#e23a33",
    color: "white",
    width: "100%",
    textAlign: "center",
  },
  button1: {
    backgroundColor: "#e23a33",
    borderRadius: 5,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    marginLeft: 1,
    marginTop: 2,
    alignItems: "center",
    height: 33,
    textAlign: "center",
    color: "white",
  },
  msg1: {
    color: "#e23a33",
    fontSize: 12,
    marginBottom: 10,
    marginRight: 165,
  },
  msg: {
    color: "#e23a33",
    fontSize: 12,
    marginBottom: 10,
  },
});
