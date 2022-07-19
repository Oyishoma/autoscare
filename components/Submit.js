import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const Submit = (props) => {
  return (
      <TouchableOpacity style = {[styles.container, {backgroundColor: props.color}]}>
        <Text style = {styles.submitText} >{props.title} </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50, 
        borderColor: 'blue', 
        borderRadius: 10, 
        marginVertical: 10,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 0,
        elevation: 5,
        shadowOpacity: 0.4,
        shadowColor: 'black', 
    }, 
    submitText: {
        fontSize: 20, 
        fontWeight: '200', 
        color: 'white', 
        alignSelf: 'center',
        marginVertical: 10
    }
})

export default Submit