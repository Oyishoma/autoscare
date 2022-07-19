import React, { Component } from 'react'
import {View, StyleSheet, Text, Image, ScrollView, TextInput} from 'react-native' 
import Icon from 'react-native-vector-icons/FontAwesome'
import { FontAwesome } from '@expo/vector-icons';
import {Input} from 'react-native-elements'

class Inputs extends Component {
    state = {isFocused: false}

    onFocusChange = () => {
        this.setState({isFocused: true})
    }
  render() {
    return (
      <View 
        style = {[styles.container, {borderColor: this.state.isFocused ?
         '#0779e4': '#eee'}]}>
          <Input
            placeholder = {this.props.name}
            onFocus = {this.onFocusChange}
            inputContainerStyle = {styles.inputContainer}
            inputStyle = {styles.inputText}
            secureTextEntry = {this.props.pass}
            leftIcon = {
              <FontAwesome 
                name= {this.props.icon} 
                size={22} 
                color= {this.state.isFocused ? "#3e4095" : "grey"} 
              />
            }
          />
       
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '90%', 
    height: 50, 
    borderRadius: 50,
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: 'white',    
    elevation: 5,
    shadowColor: 'grey',

  }, 
  inputContainer: {
    borderBottomWidth: 0,

  },
  inputText: {
    color:'#0779e4',
    fontWeight: 'normal', 
    marginLeft: 5,
  },
})

export default Inputs

