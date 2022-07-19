import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Contact = () => {
  return (
    <SafeAreaView style = {styles.container}>
    <Header screenTitle = 'Contact Us'/>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },

})

export default Contact

