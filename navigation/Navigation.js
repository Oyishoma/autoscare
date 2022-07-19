import * as React from 'react'
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native' 
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from '../screens/SignUp';
import Login from '../screens/Login';


const Stack = createNativeStackNavigator()

const Navigation = props => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "LogIn">
                <Stack.Screen name = "LogIn" component = {Login} options = {{headerShown: false}}/>
                <Stack.Screen name = "SignUp" component = {Signup} options = {{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
} 

export default Navigation