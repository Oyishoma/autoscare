import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './navigation/DrawerNavigator'
import Login from './screens/Login'
import Navigation from './navigation/Navigation'
import ProvidersScreen from './screens/ProvidersScreen'

const App = () => {
  return (
    //<Navigation/>
    <DrawerNavigator/> 
    //<ProvidersScreen/>
  )
}

export default App

const styles = StyleSheet.create({})