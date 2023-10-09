import React, { useEffect } from 'react';
import {Button} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const PushNotification = () => {
  const getToken = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    //   token
    const token = await messaging().getToken();
    console.log({token})
  };
useEffect(()=>{
    getToken()
},[])
  return <Button title="Send Test Notification" />;
};

export default PushNotification;
