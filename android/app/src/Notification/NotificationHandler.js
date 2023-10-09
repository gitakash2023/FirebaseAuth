import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const NotificationHandler = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Handle foreground notifications here
      Alert.alert('New Notification', remoteMessage.notification.body);
    });

    return unsubscribe; // Clean up when component unmounts
  }, []);

  return null; // Since this component doesn't render anything
};

export default NotificationHandler;
