import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const Logout = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      await auth().signOut(); // Firebase logout
      navigation.navigate('Login'); // Navigate to the Login screen after logout
     
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Signout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
