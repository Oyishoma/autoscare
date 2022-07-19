import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native' 
import Inputs from '../components/Inputs'
import Submit from '../components/Submit'

const SignUp = props => {
    return(
        <ScrollView style = {{backgroundColor: 'white'}}>
            <View style = {styles.container}>
                <Image source = {require('../assets/login_logo.png')} 
                resizeMode = 'center' style = {styles.image}/>
                <Text style = {styles.textTitle}>Let's get Started! </Text>
                <Text style ={styles.textBody}>Create an Account</Text>

                <Inputs name = "Your Name" icon = "user"/>
                <Inputs name = "Your Email" icon = "envelope"/>
                <Inputs name = "(+234-)" icon = "phone"/>
                <Inputs name = "Password" icon = "lock" pass = {true}/>
                <Inputs name = "Confirm Password" icon = "lock" pass = {true}/>
                <Submit title = 'Create Account' color = '#3e4095'/>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {styles.textBody}>Alreaady have an account? </Text>
                    <Text style = {[styles.textBody, {color:'#3e4095'}]} 
                        onPress = {()=>props.navigation.navigate('LogIn')}>
                        Log In Here!
                    </Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 180,
        marginVertical: 10,
        marginTop: 60
    }, 
    textTitle: {
        fontSize: 40,
        marginVertical: 5
    }, 
    textBody:{
        fontSize: 16, 
    }
})

export default SignUp 