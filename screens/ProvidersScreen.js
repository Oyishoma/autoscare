import { StyleSheet, View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CurrentLocationButton from '../components/CurrentLocationButton'
import ProviderCard from '../components/ProviderCard'
import Submit from '../components/Submit'
//import { FlatList } from 'react-native-gesture-handler'

const ProvidersScreen = () => {
    return (
      <SafeAreaView style = {styles.container}>
        

        <Header screenTitle = 'Providers'/>

        <View style = {styles.useCurrentLocationBtn}>
            <CurrentLocationButton title = 'Use Current Location' color = '#eee'/>
        </View>

        <View style= {styles.resultsHeader}>
            <Text style = {styles.boldText}>
                [Object] 
            </Text>
            <Text style = {styles.textBody}>
                Providers found in 
            </Text>
            <Text style = {styles.boldText}>
                [Object]
            </Text>
        </View>
        <ScrollView>
        <View>
            <ProviderCard/>
            <ProviderCard/>
            <ProviderCard/>
            <ProviderCard/>
            <ProviderCard/> 
            <ProviderCard/> 
            <ProviderCard/> 
        </View>

        </ScrollView>
      <View style = {styles.buttonContainer}>
        <Submit style = {styles.button}title = 'Go to Providers' color = '#3e4095'/>
      </View>
      
     </SafeAreaView>
     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginBottom: 10
    },
    resultsHeader: {
        flexDirection: 'row',
        alignSelf: 'center',
       // marginTop: 10
    },
    textBody: {
        fontSize: 16
    },
    boldText: {
        fontSize: 20
    },
    useCurrentLocationBtn: {
        alignItems: 'center',
        marginTop: 0,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 5,
        width: '60%',
        alignSelf: 'center'
    }, 
    button: {
        elevation: 5,
        shadowOpacity: 0.4,
        shadowColor: 'black',
        fontSize: 16, 
    }
})

export default ProvidersScreen

