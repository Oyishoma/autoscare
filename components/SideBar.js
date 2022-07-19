import React from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons'
import { Drawer } from 'react-native-paper';
import Header from './Header';


const Sidebar = (props) => {
  return (
    <View style =  {[styles.container, {flex:1}]}>
      <DrawerContentScrollView {...props}>
      <View style = {{flexDirection: 'row', width: undefined, padding: 20, paddingTop: 28, borderBottomWidth: 1, borderBottomColor: '#fff'}}>
        <Image source={require('../assets/user_image.jpg')} style = {styles.profile}/>
        <Text style = {styles.name}>John Doe </Text>
        </View>
      
        <View>
          <Drawer.Section style = {{flex: 1, marginTop: 15}}> 
            <DrawerItemList {...props}/>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      {/* Sign Button */}
      <Drawer.Section 
        style = {{
            padding: 0,
            backgroundColor: 'white', 
            width: 150, 
            height: 52, 
            borderRadius: 10, 
            alignSelf: 'center',
            marginBottom: 20,
            elevation: 5,
            shadowOpacity: 0.4,
            shadowColor: 'black', 
          }}>
          <DrawerItem 
            label = 'Sign Out' 
            onPress={()=>{}}
            style={{paddingLeft: 20}}
            />
      </Drawer.Section>
      </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e4095',
  },
  profile: {
    width: 80,
    height: 80, 
    borderRadius: 40,
    borderWidth: 3, 
    borderColor: '#fff',
    
  }, 
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8, 
    marginLeft: 20,
    marginTop: 30,
  },
})

export default Sidebar

