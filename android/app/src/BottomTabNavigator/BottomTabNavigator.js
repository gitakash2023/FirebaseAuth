import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from '../BottomTabScreens/CameraScreen';
import ProductsScreen from '../BottomTabScreens/ProductsScreen';
import NotificationScreen from '../BottomTabScreens/NotificationScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import GeolocationScreen from '../BottomTabScreens/GeolocationScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Camera" component={CameraScreen}  options={{ headerShown: false }} />
    <Tab.Screen name="  Products" component={ProductsScreen}   options={{ headerShown: false }}/>
    <Tab.Screen name="  Notification" component={NotificationScreen}  options={{ headerShown: false }}/>
    <Tab.Screen name="  GeolocationScreen" component={GeolocationScreen}  options={{ headerShown: false }}/>

  </Tab.Navigator>
    
  )
}

export default BottomTabNavigator