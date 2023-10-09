import { View, Text } from 'react-native'
import React from 'react'
import NotificationHandler from '../Notification/NotificationHandler'
import PushNotification from '../Notification/PushNotification'

const NotificationScreen = () => {
  return (
    <View>
      {/* <NotificationHandler/> */}
      <PushNotification/>
    </View>
  )
}

export default NotificationScreen