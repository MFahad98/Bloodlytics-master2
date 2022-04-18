import react from "react";
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


function CustomDrawerContent(props,navigation) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem style={{
              backgroundColor:"red"
            }} labelStyle={{ color: 'white', fontSize: 20 }} label="Help" onPress={() => props.navigation.navigate('Article')} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;