import React, { useState } from 'react'

import { Dimensions, SafeAreaView, ScrollView, 
         StyleSheet, Text, View, Image, Modal,
         TouchableOpacity } from 'react-native'

import CityModal from '../components/CityModal'


const CityButton = () => {
    const [chooseCity, setChooseCity] = useState('City')
    const [isModalVisible, setisModalVisible] = useState(false)

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const SetCity = (option) => {
        setChooseCity(option)
    }   

  return (
    <View>
      <TouchableOpacity 
        onPress={()=>changeModalVisibility(true)}
        style = {styles.touchableOpacity}>
          <Text style = {styles.text}>{chooseCity}</Text>
      </TouchableOpacity>
          <Modal
            transparent = {true}
            animationType = 'fade'
            visible = {isModalVisible}  
            onRequestClose = {() => changeModalVisibility(false)}
          >
            <CityModal 
              changeModalVisibility = {changeModalVisibility}
              setCity = {SetCity}
              />
              
          </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey'
  }, 
  touchableOpacity: {
    backgroundColor: 'white',
    borderWidth:1,
    borderRadius: 20,
    borderColor: '#eee',
    width: 300,
    height: 60,
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
    elevation: 5,
    shadowColor: 'grey',
  }
})

export default CityButton