import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ComingSoon3 = () => {
  return (
    <View style = {styles.container}>
      <Image 
        source = {require('../assets/coming-soon-gd28322103_1280.png')} 
        resizeMode = 'stretch' 
        style = {styles.wrap}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 200,
    alignItems: 'center'
    
  },
  wrap: {
    width: 300,
    height: 300,
  }
})

export default ComingSoon3

