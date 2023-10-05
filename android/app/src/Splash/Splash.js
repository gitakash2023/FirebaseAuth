// Splash.js
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Add any initialization logic or timers here
    // After a delay or when your app is ready, navigate to the main screen
    setTimeout(() => {
      navigation.navigate('SignUp');
    }, 2000); // 2000 milliseconds (2 seconds) delay for the splash screen
  }, []);

  return (
    <View>
      {/* <Image
        source={require('')} // Replace with the actual path to your image
      /> */}
    </View>
  );
};

export default Splash;
