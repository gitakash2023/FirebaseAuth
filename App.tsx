
import React ,{ useEffect }from 'react';
import StackNav from './android/app/src/StackNavigation.js/StackNav';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';


function App() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return <StackNav />;
}

export default App;
