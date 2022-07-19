import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FontAwesome } from '@expo/vector-icons'
import { Input } from 'react-native-elements'
import Submit from '../components/Submit'

const Feedback = () => {
  return (
    <SafeAreaView style = {styles.container}>

      <Header screenTitle = 'Feedback'/>

      <View style = {styles.ratingsContainer}>
      <View style = {styles.ratingText}>
        <Text style = {styles.ratingText}> Enjoying AutosCare? Rate us.</Text>
      </View>
      <View style = {styles.ratingStars}>
              <FontAwesome name="star" size={30} color="#FFBF00" />
              <Text> {' '}</Text>
              <FontAwesome name="star" size={30} color="#FFBF00" />
              <Text> {' '}</Text>
              <FontAwesome name="star" size={30} color="#FFBF00" />
              <Text> {' '}</Text>
              <FontAwesome name="star" size={30} color="#FFBF00" />
              <Text> {' '}</Text>
              <FontAwesome name="star" size={30} color="#FFBF00" />
            </View>
      </View>

      <View style = {styles.commentContainer}> 
        <Text style = {styles.commentTextBody}> Do you have any comment or suggestions on how we can improve our app? We'd like to know. Please leave
          it in the comment box below.
        </Text>

        <Input style = {styles.inputBox}
          placeholder = 'Comment...'
          multiline
        />
      </View>
      <View style = {styles.submitFeedback}>
        <Submit style = {{alignSelf: 'center'}}title = 'Submit' color = '#3e4095'/>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  ratingsContainer: {
    alignItems: 'center'
  },
  ratingText: {
    fontSize: 18,
    color: 'grey',
    marginBottom: 10
  },
  ratingStars: {
    flexDirection: 'row',
    marginBottom: 10
  },
  commentContainer: {
    alignItems: 'center',
    //margin: 10
  },
  commentTextBody: {
    fontSize: 18,
    color: 'grey',
    width: '90%',
    marginTop: 10,
    marginBottom: 10
  },
  inputBox: {
    width: '90%', 
    height: 200, 
    padding: 10,
    borderRadius: 20,
    borderColor: "#eee",
    marginVertical: 10,
    borderWidth: 1,
    borderBottomWidth:0,
    backgroundColor: 'white',    
    elevation: 5,
    shadowColor: 'grey',
    
  },
  submitFeedback: {
    alignItems: 'center'
  }
})

export default Feedback

