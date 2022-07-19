import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const Account = props => {
  return (
    <TouchableOpacity style = {[styles.container,{backgroundColor:props.color}]}>
        <FontAwesome style = {styles.accIcon} name = {props.icon}/>
        <Text style = {styles.textTitle}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        width: 135,
        height: 45, 
        marginHorizontal: 20, 
        marginVertical: 20, 
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 5, 
        elevation: 5,
        shadowOpacity: 0.4,
        shadowColor: 'black', 
    }, 
    accIcon:{
        color: 'white', 
        fontSize: 20, 
        marginVertical: 10, 
        marginHorizontal: 10, 
    }, 
    textTitle: {
        color: 'white', 
        fontWeight: '200', 
        fontSize: 18, 
        marginVertical: 10, 
        marginHorizontal: 5
    }
})
export default Account