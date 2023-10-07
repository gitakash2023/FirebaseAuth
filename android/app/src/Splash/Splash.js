// Splash.js
import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Splash = () => {
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  // Redirect based on user authentication status
  useEffect(() => {
    if (!initializing) {
      if (user) {
        // User is authenticated, navigate to HomeScreen
        setTimeout(() => {
          navigation.navigate('Home');
        }, 5000);
      } else {
        // User is not authenticated, navigate to LoginScreen
        navigation.navigate('Login');
      }
    }
  }, [initializing, user, navigation]);

  return (
    <View>
      <Text>splash</Text>
    </View>
  );
};

export default Splash;
