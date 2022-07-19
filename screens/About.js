import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Header screenTitle = 'About'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
})

export default About

