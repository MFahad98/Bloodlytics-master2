import * as React from 'react';
import { StyleSheet,View, Text,TextInput,Button,Dimensions, Alert,TouchableOpacity,Image,ScrollView,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login.js';
import { useState,useRef,useEffect } from 'react';
import DataVisualization from './DataVisualization.js';
// import * as ImagePicker from 'expo-image-picker';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import * as Location from 'expo-location';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { createDrawerNavigator,DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,   } from '@react-navigation/drawer';

import { AntDesign } from '@expo/vector-icons'; 

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


function Home({navigation}) {
  
//  const value="name" jhadjd

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
  global.text1=text;


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
      <TextInput maxLength={3}
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

      {/* {Around.map((item,index)=>
      <MapView.Marker coordinate={item} key={index} title={"Blood"}
            description={"description"} ></MapView.Marker>)} */}
   
      {/* another Marker start */ }
      {text == 'B+'?  <View>
      <MapView.Marker
            coordinate={{latitude:  31.430766,
            longitude: 73.1158531}}
          > 
          <MapView.Callout>
           <View style={{height: 100, width: 200}}>
           <Text> Title </Text>
           <Text> Long Description {'\n'}  Even More Text</Text>
           <Text>Multline Description </Text>
           </View>
            </MapView.Callout>
            </MapView.Marker>
            {/* Marker END */ }

            <MapView.Marker
            coordinate={{latitude:  31.430766,
            longitude: 73.1158531}}
          > 
          <MapView.Callout>
           <View style={{height: 100, width: 200}}>
           <Text> Title </Text>
           <Text> Long Description {'\n'}  Even More Text</Text>
           <Text>Multline Description </Text>
           </View>
            </MapView.Callout>
            </MapView.Marker>
            {/* Marker END */ }

            
            <MapView.Marker
            coordinate={{latitude:  31.430466,
            longitude: 73.1158531}}
            title={title1}
            description={"description  "}>
            </MapView.Marker>
            </View>
             
            : text=="A+"?<MapView.Marker
            coordinate={{latitude:  31.430166,
            longitude: 73.1158131}}
            title={title1}
            description={"description"}
         />:null }
      
          {/* <MapView.Marker
            coordinate={{latitude:  31.430741,
            longitude: 73.1179950}}
            title={"title"}
            description={"description"}
         /> */}
      </MapView> 
      
      

      </View>
      <View style={[{ width: "100%", margintop: 0, backgroundColor: "#e23a33" ,justifyContent:"center",alignItems: 'center',height:40,position:"relative"}]}>
     
     <TouchableOpacity
        onPress={() =>navigation.navigate('DataVisualization',{text:text})}
       style={styles.button1}>
      
       <Text style={styles.text}>Data Visualization</Text>
     </TouchableOpacity>
     </View>

    </>

  );
}

// function DataVisualization1() {

//   return (
//     <ScrollView style={{ flex: 1,  }}>
//     {text1 == 'B+'?  <View>
    
//     <View>
//   <Text>Gender Graph of donors</Text>
//   <BarChart
//     data={{
//       labels: ["Male", "Female"],
//       datasets: [
//         {
//           data: [
//             80,
//             20,
            
//           ]
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     yAxisLabel="%"
//     yAxisSuffix=""
//     yAxisInterval={1} // optional, defaults to 1
//     chartConfig={{
//       backgroundColor: "#e26a00",
//       backgroundGradientFrom: "#321d01",
//       backgroundGradientTo: "#ffa726",
//       decimalPlaces: "", // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16
//       },
//       propsForDots: {
//         r: "6",
//         strokeWidth: "2",
//         stroke: "#ffa726"
//       }
//     }}
//     bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   />
// </View>

// <View>
//   <Text>Health Graph of donors</Text>
//   <BarChart
//     data={{
//       labels: ["Smoker", "Non smoker"],
//       datasets: [
//         {
//           data: [
//             30,
//             60,
            
//           ]
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     yAxisLabel="%"
//     yAxisSuffix=""
//     yAxisInterval={1} // optional, defaults to 1
//     chartConfig={{
//       backgroundColor: "#e26a00",
//       backgroundGradientFrom: "#fb8c00",
//       backgroundGradientTo: "#ffa726",
//       decimalPlaces: "", // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16
//       },
//       propsForDots: {
//         r: "6",
//         strokeWidth: "2",
//         stroke: "#ffa726"
//       }
//     }}
//     bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   />
// </View>


// <View style={{paddingBottom:55}}>
// <Text>Age Graph of donors</Text>
// <PieChart
//     data={[
//   {
//     name: "Age",
//     population: 18,
//     color: "rgba(131, 167, 234, 1)",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "Age",
//     population: 25,
//     color: "#F00",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "Age",
//     population: 35,
//     color: "#060505",
//     legendFontColor: "#7f7c7c",
//     legendFontSize: 15
//   },
//   {
//     name: "Age",
//     population: 40,
//     color: "#ffffff",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "Age",
//     population: 60,
//     color: "rgb(0, 0, 255)",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   }
// ]}
  
//   width={400}
//   height={220}
//   chartConfig={{
//       backgroundColor: "#e26a00",
//       backgroundGradientFrom: "#fb8c00",
//       backgroundGradientTo: "#ffa726",
//       decimalPlaces: "", // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,}}
//   accessor={"population"}
//   backgroundColor={"transparent"}
//   paddingLeft={"15"}

//   center={[5, 10]}
//   absolute 
//   />


// </View>
// </View>:null }
//    </ScrollView>

//   );
// }

function Report() {
  return (
    <View style={{ flex: 1,width: "100%",paddingTop:35,paddingLeft:35,justifyContent: 'flex-start', alignItems: 'flex-start', }}>
      <Text style={{ fontSize: 17,}}>Name:</Text>
      <Text style={{ fontSize: 17,}}>Email:</Text>
      <Text  style={{ fontSize: 17,}}>Age:</Text>
      <Text style={{ fontSize: 17,}}>Gender:</Text>
      <Text style={{ fontSize: 17,}}>Bloodgroup:</Text>

      <Button color="#e23a33" title="Click"  onPress={() => Alert.alert('Thank you 😉')}/>

    </View>
  );
}

function Donor() {
  return (
      <>
      <View style={styles.Mscreen}>
       <Text>Contect us:0311xxxxx</Text>

      

      </View>
      

    </>

  );
}


function Help() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact Us</Text>
      <Button color="#e23a33" title="Click"  onPress={() => Alert.alert('Thank you 😉')}/>

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

    <View style={{padding:15,borderWidth:1,borderTopColor:"#e23a33",borderColor:"white"}}>
      <TouchableOpacity onPress={()=>props.navigation.reset({
        index: 0,

        routes: [
          {
            name: 'Login',
            params: { someParam: 'Param1' },
          },
        ],
      })}  style={{alignItems:"center",justifyContent:"space-around",flexDirection:"row",paddingVertical:10,backgroundColor:"#e23a33",borderRadius:5,width:"100%" }}>
      
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
    screenOptions={{drawerActiveBackgroundColor:"#e23a33",drawerActiveTintColor:"white"}}
    >
    
      <Drawer.Screen name="Home" component={Home} options={{
        DrawerIcon:({color})=>(
          <AntDesign name="home" size={24} color="black" />
        )
      }}  />
      {/* <Drawer.Screen name="DataVisualization1" component={DataVisualization1} options={{
        DrawerIcon:({color})=>(
          <AntDesign name="home" size={24} color="black" />
        )
      }}  /> */}
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
buttonSearch:{ backgroundColor: '#e23a33',borderRadius:5,width:"100%" ,justifyContent:"center",flexDirection:"row"},
text:{ fontSize: 17,marginLeft:1,marginTop:5,alignItems:"center",height:29,textAlign:"center", color: 'white' },
button2:{flex:1,flexDirection:"column",width:"100%",alignContent:"center",alignItems:"center",justifyContent:"flex-end",marginBottom:20 },
button2s:{ backgroundColor: '#e23a33',borderRadius:5,width:"40%" ,justifyContent:"center",flexDirection:"row"},
button2Text:{ fontSize: 17,marginLeft:1,marginTop:6,alignItems:"center",height:30,textAlign:"center", color: 'white' },
TEXT: {
  borderColor: "black",
  paddingLeft:2,
  width: "100%",
  borderWidth: 1,
  paddingBottom: 5,
},
button1:{
  backgroundColor: '#e23a33',borderRadius:5,width:"80%" ,justifyContent:"center",flexDirection:"row"
},
});
