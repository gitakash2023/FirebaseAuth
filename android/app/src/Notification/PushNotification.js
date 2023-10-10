import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const PushNotification = () => {
  const [hasPushNotificationPermission, setHasPushNotificationPermission] = useState(false);
  const [deviceToken, setDeviceToken] = useState(null);

  useEffect(() => {
    // Request user permission for push notifications
    requestPushNotificationPermission();

    // Generate a device token
    getDeviceToken();

    // Register a listener for incoming push notifications
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      // Handle the notification here
      console.log('Push notification received:', remoteMessage);
    });

    return unsubscribe;
  }, []);
// function for request permission
  const requestPushNotificationPermission = async () => {
    try {
       await messaging().requestPermission();
      setHasPushNotificationPermission(true);
      
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      alert('Please grant permission for push notifications in order to receive important updates about our app.');
    }
  };

  const getDeviceToken = async () => {
    try {
      const token = await messaging().getToken();
      if (token) {
        setDeviceToken(token);
        
      } else {
        console.log('Failed to generate device token');
      }
    } catch (error) {
      console.error('Error getting device token:', error);
    }
  };
  const sendPushNotification = async () => {
    try {
      // Send a push notification to the user's device
      await messaging().sendMessage({
        data: {
          title: 'Push notification',
          body: 'This is a push notification!',
        },
        token: deviceToken,
      });
       // Display the title and body content in an alert
    // const notificationTitle = 'Push notification';
    // const notificationBody = 'This is a push notification!';

    // Show an alert with the title and body
    // alert(notificationTitle, notificationBody);
  
     
      
    } catch (error) {
      console.error('Error sending push notification:', error);
    }
  };
  useEffect(()=>{
    sendPushNotification()
  },[])
  

  return (
    <View>
      <Text>Push notification permission granted: {hasPushNotificationPermission ? 'Yes' : 'No'}</Text>
      <Text>{deviceToken}</Text>

      {/* <Button title="Send push notification" onPress={sendPushNotification} /> */}
    </View>
  );
};

export default PushNotification;
