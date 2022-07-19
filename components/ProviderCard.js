import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const ProviderCard = () => {
  return (
    <View style = {styles.separator}>  
      <View style = {styles.container}>
      <View style = {styles.image}>
        <Image 
            source = {require('../assets/user_image.jpg')}
            resizeMode = 'stretch'
            style = {styles.image}
        />
        </View>
        <View style = {styles.nameContainer}>
          <Text style = {styles.name}>
            Samuel Ajayi
          </Text>

          <View style = {styles.locationContainer}>
          <Text style = {styles.location}>
              No. 12 JayJayi Cresc. Lagos, Nigeria
          </Text>
          </View>

          <View style = {styles.ratingsContainer}>
            <FontAwesome name="star" size={22} color="#FFBF00" />
            <Text> {' '}</Text>
            <FontAwesome name="star" size={22} color="#FFBF00" />
            <Text> {' '}</Text>
            <FontAwesome name="star" size={22} color="#FFBF00" />
          </View>
      </View>
      </View>
    </View>
  )
}

export default ProviderCard

const styles = StyleSheet.create({
  separator: {
    borderTopColor: '#eee',
    borderTopWidth: 2,
    marginTop: 15
},  
container: {
    flex: 1, 
    flexDirection: 'row',
    marginLeft: 20,
    paddingTop: 20, 
    
    
},
image: {
    width: 70,
    height: 70, 
    borderRadius: 50
},
nameContainer: {
  flex: 1,
  marginLeft: 10
  
},
name: {
  fontSize: 20,
  fontWeight: 'bold'
},
location: {
  fontWeight: 'normal', 
  padding: 2
}, 
ratingsContainer: {
  flex: 1, 
  flexDirection: 'row', 
}
})