import React, { useState } from 'react'

import { Dimensions, SafeAreaView, ScrollView, 
         StyleSheet, Text, View, Image, Modal,
         TouchableOpacity } from 'react-native'

import Header from '../components/Header'

//import TabNavigator from "../navigation/TabNavigator";

import ServicesButton from '../components/ServicesButton'
import CountryButton from '../components/CountryButton'
import CityButton from '../components/CityButton'
import StateButton from '../components/StateButton'
import Submit from '../components/Submit'

const HomeScreen = (navigation) => {
  //services variables and functions
  return (
    <SafeAreaView style = {styles.container}>
      <Header screenTitle = 'Roadside Assistance'/>

      <View style = {styles.slider}>
        <Text style = {styles.bannerText}>Lorem ipsum</Text>
      </View>

{/* <TabNavigator/> */}
      
      <ServicesButton/>
      <CountryButton/>
      <StateButton/>
      <CityButton/>

      <View style = {styles.findProvider}>
        <Submit title = 'Find Provider' color = '#3e4095' onPress={() => navigation.navigate("Feedback")} />
      </View>
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,   
  },
  findProvider: {
    alignItems: 'center',
    marginTop: 20,
  },
  slider:{
    height: 200,
    backgroundColor: '#3e4095',
    alignItems: 'center',
    alignContent: 'center'
  },
  bannerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
})

export default HomeScreen

