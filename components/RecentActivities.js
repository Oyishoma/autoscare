import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const RecentActivities = () => {
  return (
    <ScrollView>
            <View style = {styles.recentActivities}>
              <FontAwesome name="car" size={22} color="grey" style = {{alignSelf: 'center'}}/>
              <View style = {styles.recentService}>
                <Text style = {styles.recentService}> {'Car Wash'}</Text>
                <Text style = {styles.textBody}> {'24/07/2022'}</Text>
              </View>
              <View>
                <Text style = {styles.pricetag}> ₦300</Text>
              </View>
              
            </View>
          </ScrollView>
  )
}

export default RecentActivities

const styles = StyleSheet.create({
    recentActivities: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        color: 'grey',
        marginTop: 15,
        marginLeft: 15
        
      },
      recentServiceFont: {
    
      },
      recentService: {
        flex: 1,
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold',
        marginLeft: 10, 
        
    
      },
      textBody: {
        fontSize: 16, 
        color: 'grey',
        marginLeft: 10
      },
      pricetag: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-end',
        marginRight: 10,
        color: 'grey'
      }
})