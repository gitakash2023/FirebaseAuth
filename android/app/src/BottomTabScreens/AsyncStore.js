import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const AsyncStore = () => {
  const [preference, setPreference] = useState('');
  const storeUserPreference = async () => {
    try {
      await AsyncStorage.setItem('userPreference', preference);
      console.log('Preference stored successfully');
    } catch (error) {
      console.error('Error storing preference:', error);
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Enter your preference"
        value={preference}
        onChangeText={text => setPreference(text)}
      />
      <Button title="click me" onPress={storeUserPreference} />
    </View>
  );
};

export default AsyncStore;
