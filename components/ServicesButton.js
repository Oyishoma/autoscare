import React, { useState } from 'react'

import { Dimensions, SafeAreaView, ScrollView, 
         StyleSheet, Text, View, Image, Modal,
         TouchableOpacity } from 'react-native'

import ServicesModal from '../components/ServicesModal'

    const ServicesButton = () => {
        const [chooseData, setChooseData] = useState('Service')
        const [isModalVisible, setisModalVisible] = useState(false)
    
        const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
        }
    
        const setData = (option) => {
        setChooseData(option)
        }

  return (
    <View>
      <TouchableOpacity 
        onPress={()=>changeModalVisibility(true)}
        style = {styles.touchableOpacity}>
          <Text style = {styles.text}>{chooseData}</Text>
      </TouchableOpacity>
          <Modal
            transparent = {true}
            animationType = 'fade'
            visible = {isModalVisible}  
            onRequestClose = {() => changeModalVisibility(false)}
          >
            <ServicesModal 
              changeModalVisibility = {changeModalVisibility}
              setData = {setData}
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

export default ServicesButton

