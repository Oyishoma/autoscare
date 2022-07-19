import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import ComingSoon from '../screens/ComingSoon';
import ComingSoon2 from '../screens/ComingSoon2.js';
import ComingSoon3 from '../screens/ComingSoon3.js';
import HomeScreen from "../screens/HomeScreen";


//screens
const homeName = 'Home'
const comingSoonName = 'ComingSoon'
const comingSoonName2 = 'ComingSoon2'
const comingSoonName3 = 'ComingSoon3'


const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  return (
    <Tab.Navigator 
        initialRouteName = {homeName} 
        screenOptions = {({route})=> ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName
                let routeName = route.name

                if (routeName === homeName) {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (routeName === comingSoonName) {
                    iconName = focused ? 'settings-sharp' : 'settings-outline' 
                } else if (routeName === comingSoonName2) {
                    iconName = focused ? 'settings-sharp' : 'settings-outline' 
                } else if (routeName === comingSoonName3) {
                    iconName = focused ? 'settings-sharp' : 'settings-outline' 
                } 
                return <Ionicons name = {iconName} size = {size} color = {color}/>
            },
            headerShown: false,
            tabBarActiveTintColor: "#3e4095",
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: {
              paddingBottom: 10,
              fontSize: 10
            },
            flex: 1,
            tabBarStyle:{
              height: 70,
              paddingTop: 10,
            }
        })}
        > 
    
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name = {comingSoonName} component = {ComingSoon} options = {{headerShown: false}} />
      <Tab.Screen name = {comingSoonName2} component = {ComingSoon2} options = {{headerShown: false}}/>
      <Tab.Screen name = {comingSoonName3} component = {ComingSoon3} />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;