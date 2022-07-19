import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FontAwesome } from '@expo/vector-icons'
import RecentActivities from '../components/RecentActivities'
import Submit from '../components/Submit'

const Profile = () => {
  return (
    <View style = {styles.container}>
    <Header screenTitle = 'Profile'/>
      <ScrollView>
        <View style = {styles.bio}>
          <Image source={require('../assets/user_image.jpg')} style = {styles.profileImage}/>
          <Text style = {styles.name}>John Doe </Text>
          <View style = {styles.ratingsContainer}>
              <FontAwesome name="star" size={22} color="#FFBF00" />
              <Text> {' '}</Text>
              <FontAwesome name="star" size={22} color="#FFBF00" />
              <Text> {' '}</Text>
              <FontAwesome name="star" size={22} color="#FFBF00" />
            </View>
        </View>

        <View>
          <View style = {styles.contactInfo}>
            <Text style = {styles.sectionTitle}>Contact Info</Text>
            <View style = {styles.phone}>
              <FontAwesome name="phone" size={22} color="#3e4095" />
              <Text style = {styles.textBody}> {'+234810000000'}</Text>
            </View>
            <View style = {styles.email}>
              <FontAwesome name="envelope" size={22} color="#3e4095" />
              <Text style = {styles.textBody}> {'johndoe@rocketmail.com'}</Text>
            </View>
              
          </View>
        </View>
          
        <View>
          <Text style = {styles.sectionTitle}>Recent Activities</Text>
          <ScrollView style = {{elevation: 5, backgroundColor: 'white'}}>
            <RecentActivities/>
            <RecentActivities/>
            <RecentActivities/>
            <RecentActivities/>
            <RecentActivities/>
          </ScrollView>
        </View>
      </ScrollView>

      <View style = {styles.editProfile}>
        <Submit style = {{alignSelf: 'center'}}title = 'Edit Profile' color = '#3e4095'/>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bio: {
    width: undefined,  
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    elevation: 5
  },
  profileImage: {
    width: 150,
    height: 150, 
    borderRadius: 40,
    borderWidth: 3, 
    borderColor: '#fff'
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  ratingsContainer: {
    flex: 1, 
    flexDirection: 'row', 
    marginBottom: 10
  },
contactInfo: {
  flex: 1,
  paddingTop: 15,
  marginLeft: 15
},
sectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
  marginLeft: 15
},
  phone: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 15,
    borderRadius: 15,
    height: 60,
    marginBottom: 20,
    elevation: 5,
    
  }, 
  email: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 15,
    borderRadius: 15,
    height: 60,
    marginBottom: 20,
    elevation: 5,
  },
  textBody: {
    fontSize: 16, 
    color: 'grey',
    marginLeft: 10
  },
  recentActivities: {
    flex:1,
    shadowColor: "red", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25,
  },
  editProfile: {
    alignItems: 'center'
  },
  button: {
    elevation: 5,
    shadowOpacity: 0.4,
    shadowColor: 'black',
    fontSize: 16, 
    }

})