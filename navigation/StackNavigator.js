import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import Contact from "../screens/Contact";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notification" component={NotificationsScreen} />    

    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };