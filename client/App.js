import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './src/components/screens/Home'
import Search from './src/components/screens/Search'
import Create from './src/components/screens/Create'
import Login from './src/components/screens/Login'
import Profile from './src/components/screens/Profile'

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const bottomTabScreen = () => {
    return(
      <Tab.Navigator
      screenOptions={({route}) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle:{
            height:80
          },
          tabBarIcon:({focused,size,colour})=>{
            let iconName;
            if(route.name === 'Home'){
              iconName= focused?"home-sharp" : "home-outline";
              size = focused? size + 8 : size + 2;
            }else if(route.name === 'Search'){
              iconName= focused?"search" : "ios-search-outline";
            }else if(route.name === 'Profile'){
              iconName= focused? "ios-person-circle" : "ios-person-outline";
            }

            return <Ionic name={iconName} size={size} color={colour}/>
          }
        })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
    )
  }

  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="bottomTabScreen" component={bottomTabScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
