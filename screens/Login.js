import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native' 
import Inputs from '../components/Inputs'
import Submit from '../components/Submit'
import Account from '../components/Account'
//import { FontAwesome } from '@expo/vector-icons';
//import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Login = props => {
    return(    
        <ScrollView style = {{backgroundColor: 'white'}}>
            <View style = {styles.container}>   
                <Image 
                    source = {require('../assets/login_logo.png')}
                    resizeMode = 'center'
                    style = {styles.image} />

                <Text style = {styles.textTitle}> Welcome </Text>
                <Text style = {styles.textBody}> Log in to your account</Text>
                <View style = {{marginTop: 20}}/>
                <Inputs name = "Email of Phone Number" icon = "user"/>
                <Inputs name = "Password" icon = "lock" pass={true}/>
                <View style = {{width: '90%'}}>
                <Text style = {[styles.textBody, {alignSelf: 'flex-end', color: 'blue'}]}
                        onPress = {() => props.navigation.navigate('LogIn')}>
                        Forgot Password?
                </Text>
                </View>
                <Submit title = 'Log In' color = '#3e4095'/>
                <Text style = {styles.textBody}>Or Connect with:</Text>
                 <View style = {{flexDirection: 'row'}}>
                    <Account color = "#3e4095" icon = 'facebook' title = 'Facebook'/>
                    <Account color = "#ec482f" icon = 'google' title = 'Google'/>
                </View>
                <View style = {{flexDirection: 'row', marginVertical: 5}}>
                    <Text style = {styles.textBody}>Don't have an account yet?</Text>
                    <Text style = {[styles.textBody, {color: '#3e4095'}]} 
                        onPress = {() => props.navigation.navigate('SignUp')} >
                        Sign In
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    image:{
        marginVertical: 10,
        width: 300,
        height:200,
    },
    textTitle: {
        fontSize: 40,
        fontWeight: 'bold', 
        marginVertical: 10,
    },
    textBody: {
        fontSize: 16,
        fontWeight: '100',
        marginTop: 10
    }
})

export default Login