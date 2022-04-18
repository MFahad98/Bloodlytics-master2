import * as React from 'react';
import { StyleSheet,View, Text,TextInput,Button, Alert,TouchableOpacity,Image,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login.js';
import { useState,useRef,useEffect } from 'react';

// import * as ImagePicker from 'expo-image-picker';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import * as Location from 'expo-location';


import { createDrawerNavigator,DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,   } from '@react-navigation/drawer';

import { AntDesign } from '@expo/vector-icons'; 



function Home() {
  
//  const value="name"

  const _map=useRef(1);
  const [lating,setLating]=useState({})

  const Around = [{ latitude: 31.430966, longitude: 73.1151531 },{ latitude: 31.430566, longitude: 73.1151531 }]
  const title1="hello"
  const dis="fa"
  const checkPermission=async () => {
    const hasPermission=await Location.requestForegroundPermissionsAsync();
    if(hasPermission.status==="granted"){
      const permission=await askPermission();
      return permission
    }
    return true
  };

  const askPermission = async () => {
    const permission=await Location.requestForegroundPermissionsAsync();
    return permission.status==="granted";
  };
  
  const getLocation=async () => {
    try{
      const{granted}=await Location.requestForegroundPermissionsAsync();
      if(!granted)return;
      const{
        coords:{latitude,longitude},
      } = await Location.getCurrentPositionAsync();
      setLating({latitude:latitude,longitude:longitude})
      }catch(err){

      }
  };

  useEffect(()=>{
    checkPermission();
    getLocation()
    // console.log(lating),[]
  })
  
  const [text, setText] = useState('');

  const Cat = () => {
    return (
      <View>
      <MapView.Marker
            coordinate={{latitude:  31.430766,
            longitude: 73.1158531}}
            title={title1}
            description={"description"}> 
            </MapView.Marker><MapView.Marker
            coordinate={{latitude:  31.430466,
            longitude: 73.1158531}}
            title={title1}
            description={"description"}></MapView.Marker></View>
            
    );
  }

  
  return (
      <>
      {/* <ImageBackground style={{ flex: 1}} source = {require('./map.png')}>
      <View style={styles.Mscreen}>
    

       <TextInput style={styles.input} placeholder="Find Doner"  />

       

      <View style={{marginTop:10,width:"20%",height:35,}}>
      
      <TouchableOpacity
      onPress={() => Alert.alert('Thank You 😄')}
      
        style={styles.buttonSearch}>
  
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
       </View> 
      </View>
      <View style={styles.button2} >
      

      <TouchableOpacity
      onPress={() => Alert.alert('Empty 😅')}
      
        style={styles.button2s}>
  
        <Text style={styles.button2Text}>Data Viualization</Text>
      </TouchableOpacity>

      </View>
      
      </ImageBackground> */}
      {/* <Text>Welcome to Bloodlytics</Text> */}
      <TextInput
        style={styles.TEXT}
            keyboardType="name-phone-pad"
            textContentType="username"
            placeholder="Find Your BloodGroup"
            onChangeText={newText => setText(newText)} 
            >
              
            </TextInput>

      <View style={{flex:1,alignItems: 'center', justifyContent:"center"}} >
      <MapView 
      provider={PROVIDER_GOOGLE}
      ref={_map}
      showsUserLocation={true}
      followsUserLocation={true}
      rotateEnabled={true}
      zoomEnabled={true}
      toolbarEnabled={true}
      style={{flex:2,alignItems: 'center', justifyContent:"center",width:"100%"}}
      >
  
      
      {/* different approch for marker */}

      {Around.map((item,index)=>
      <MapView.Marker coordinate={item} key={index} title={"Blood"}
            description={"description"} ></MapView.Marker>)}
   
      {/* another */}
      {text == 'B+'?  <View>
      <MapView.Marker
            coordinate={{latitude:  31.430766,
            longitude: 73.1158531}}
            title={title1}
            description={"description"}> 
            </MapView.Marker><MapView.Marker
            coordinate={{latitude:  31.430466,
            longitude: 73.1158531}}
            title={title1}
            description={"description"}></MapView.Marker></View>
            : text=="A"?<MapView.Marker
            coordinate={{latitude:  31.430166,
            longitude: 73.1158131}}
            title={title1}
            description={"description"}
         />:null }
      
          {/* <MapView.Marker
            coordinate={{latitude:  31.430966,
            longitude: 73.1151131}}
            title={"title"}
            description={"description"}
         /> */}
      </MapView> 
      </View>
    </>

  );
}

function History() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>History Screen </Text>
    
    <Button color="#f24e1e" title="Click"  onPress={() => Alert.alert('Thank you 😉')}/>
  </View>

  );
}

function Report() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Report Screen</Text>
      <Button color="#f24e1e" title="Click"  onPress={() => Alert.alert('Thank you 😉')}/>

    </View>
  );
}

function Donor() {
  return (
      <>
      <View style={styles.Mscreen}>
       <TextInput keyboardType="number-pad"  style={styles.input} placeholder="Your Phone Number"  />

      <View style={{marginTop:10,width:"20%",height:35,}}>
      
      <TouchableOpacity
      onPress={() => Alert.alert('Thank You 😄')}
      
        style={styles.buttonSearch}>
  
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
       </View> 
      </View>
      <View style={styles.button2} >
      

      

      </View>
      

    </>

  );
}


function Help() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact Us</Text>
      <Button color="#f24e1e" title="Click"  onPress={() => Alert.alert('Thank you 😉')}/>

    </View>
  );
}


function CustomDrawerContent(props,navigation) {
  return (
    <>
    <View style={{ flex:1}}>
    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'white'}}>
      <View style={{width:"100%",height:120,backgroundColor:"white",flexDirection:"row",justifyContent:"space-around",alignItems: 'center'}}>
      
      <Image style={styles.logo}  source = {require('./profile.jpg')} />
      <Text>Person Name</Text>
      </View>
      <View style={{backgroundColor:"#ffff",padding:10}}>
      <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>

    <View style={{padding:15,borderWidth:1,borderTopColor:"#f24e1e",borderColor:"white"}}>
      <TouchableOpacity onPress={()=>props.navigation.reset({
        index: 0,

        routes: [
          {
            name: 'Login',
            params: { someParam: 'Param1' },
          },
        ],
      })}  style={{alignItems:"center",justifyContent:"space-around",flexDirection:"row",paddingVertical:10,backgroundColor:"#f24e1e",borderRadius:5,width:"100%" }}>
      
      <AntDesign name="logout" size={18} color="white" />
      <Text style={{color:"white"}}>Log out</Text>
   
      </TouchableOpacity>
    </View>
    </View>
    </>
    );
}



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
     
    <Drawer.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{drawerActiveBackgroundColor:"#f24e1e",drawerActiveTintColor:"white"}}
    >
    
      <Drawer.Screen name="Home" component={Home} options={{
        DrawerIcon:({color})=>(
          <AntDesign name="home" size={24} color="black" />
        )
      }}  />
      <Drawer.Screen name="History" component={History} options={{
        DrawerIcon:({color})=>(
          <AntDesign name="home" size={24} color="black" />
        )
      }}  />
      <Drawer.Screen name="Report" component={Report}
      
      options={{
        DrawerIcon:()=>(
          <AntDesign name="home" size={10} color="black" />
        )
      }}  />

      <Drawer.Screen name="Make Donor" component={Donor} options={{
        DrawerIcon:({color})=>(
          <AntDesign name="Donor" size={24} color="black" />
        )
      }}  />
<Drawer.Screen name="Help" component={Help}  />
 
    </Drawer.Navigator>
    

  
  );
}
export default MyDrawer;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    
   
 
  
    
  },
Mscreen:{flexDirection:"row",width:"100%",alignContent:"space-between",alignItems:"center",justifyContent:"space-around" },
input:{backgroundColor:"white",marginLeft:7,height:35,width:"70%",borderRadius:5,borderColor:"black",padding:2,borderWidth:1,marginTop:10,},
buttonSearch:{ backgroundColor: '#f24e1e',borderRadius:5,width:"100%" ,justifyContent:"center",flexDirection:"row"},
text:{ fontSize: 17,marginLeft:1,marginTop:5,alignItems:"center",height:29,textAlign:"center", color: 'white' },
button2:{flex:1,flexDirection:"column",width:"100%",alignContent:"center",alignItems:"center",justifyContent:"flex-end",marginBottom:20 },
button2s:{ backgroundColor: '#f24e1e',borderRadius:5,width:"40%" ,justifyContent:"center",flexDirection:"row"},
button2Text:{ fontSize: 17,marginLeft:1,marginTop:6,alignItems:"center",height:30,textAlign:"center", color: 'white' },
TEXT: {
  borderColor: "#f24e1e",
  paddingLeft:2,
  width: "100%",
  borderWidth: 1,
  paddingBottom: 5,
},
});
