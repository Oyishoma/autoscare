import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import HomeScreen from '../screens/HomeScreen';
import Contact from '../screens/Contact';  
import Profile from '../screens/Profile';

import SideBar from '../components/SideBar';
import Providers from '../screens/Providers';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Feedback from '../screens/Feedback';
import About from '../screens/About';



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer >
          <Drawer.Navigator 
            drawerContent={(props) => <SideBar {...props}/>} 
            screenOptions={{
              headerShown: false,
              drawerActiveBackgroundColor: '#fff',
              drawerActiveTintColor: "black",
              drawerInactiveTintColor: '#fff',
              drawerLabelStyle: {
              fontSize: 16
              }
            }}>
        
            <Drawer.Screen name="home" component={TabNavigator} options={{ drawerLabel: 'Home' }}/>
            <Drawer.Screen name="Profile" component={Profile}  options={{ drawerLabel: 'Profile' }} />
            <Drawer.Screen name="BecomeAProvider" component={Providers} options={{ drawerLabel: 'BecomeAProvider' }} />
            <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} options={{ drawerLabel: 'Privacy' }}/>
            <Drawer.Screen name="Feedback" component={Feedback} options={{ drawerLabel: 'Feedback' }}/>
            <Drawer.Screen name="About" component={About} options={{ drawerLabel: 'About' }}/>
            <Drawer.Screen name="Contact Us" component={Contact}  options={{ drawerLabel: 'Contact Us' }}/>
  
          </Drawer.Navigator>
        </NavigationContainer>
      );
}

export default DrawerNavigator

const styles = StyleSheet.create({})