import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React from 'react'

const OPTIONS = [
    "Abia", "Adamawa", "Akwa Ibom",
    "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
    "Delta","Ebonyi",  "Edo",  "Ekiti", "Enugu",
    "FCT - Abuja", "Gombe",   "Imo",  "Jigawa",   "Kaduna",   
    "Kano",   "Katsina", "Kebbi","Kogi", "Kwara","Lagos","Nasarawa",
    "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
    "Sokoto", "Taraba",  "Yobe",  "Zamfara"
  ]

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const StateModal = (props) => {
    const onPressItem = (option) => {
        props.changeModalVisibility(false)
        props.setState(option)  
      } 
  
      const option = OPTIONS.map((item, index) => {
          return (
              <TouchableOpacity
                  style = {styles.option} 
                  key = {index}
                  onPress = {() => onPressItem(item)}
              >
                  <Text style = {styles.text}>
                      {item}
                  </Text>
              </TouchableOpacity>
          )
      })
  
    return (
      <TouchableOpacity 
          onPress={() => props.changeModalVisibility(false)}
          style = {styles.container}
      >
          <View style = {[styles.modal, {width: WIDTH - 20, height: HEIGHT/1.5}]}>
              <ScrollView>
                  {option}
              </ScrollView>
          </View>
  
      </TouchableOpacity>
    )
  }
  
 
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
      },
  
      modal: {
          backgroundColor: 'white',
          borderRadius: 10, 
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
      },
      option: {
          alignItems: 'flex-start'
      }, 
      text: {
          margin: 20,
          fontSize: 20,
          fontWeight: 'normal'
      }
  })
  
export default StateModal