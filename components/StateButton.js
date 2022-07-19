import React, { useState } from 'react'

import { Dimensions, SafeAreaView, ScrollView, 
         StyleSheet, Text, View, Image, Modal,
         TouchableOpacity } from 'react-native'

import StateModal from '../components/StateModal'

const StateButton = () => {
    const [chooseState, setChooseState] = useState('State')
    const [isModalVisible, setisModalVisible] = useState(false)

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setState = (option) => {
        setChooseState(option)
    }   
    return (
        <View>
          <TouchableOpacity 
            onPress={()=>changeModalVisibility(true)}
            style = {styles.touchableOpacity}>
              <Text style = {styles.text}>{chooseState}</Text>
          </TouchableOpacity>
              <Modal
                transparent = {true}
                animationType = 'fade'
                visible = {isModalVisible}  
                onRequestClose = {() => changeModalVisibility(false)}
              >
                <StateModal 
                  changeModalVisibility = {changeModalVisibility}
                  setState = {setState}
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
export default StateButton
