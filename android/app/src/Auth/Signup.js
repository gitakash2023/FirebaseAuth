import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <View>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 24,
            color: 'black',
            marginTop: 50,
            color: 'blue',
          }}>
          Signup
        </Text>
      </View>
      <TextInput
        placeholder=" Enter Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{
          width: '85%',
          alignSelf: 'center',
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 50,
          paddingLeft: 20,
        }}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={{
          width: '85%',
          alignSelf: 'center',
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 20,
          paddingLeft: 20,
        }}
      />

      <TouchableOpacity
        style={{
          width: '85%',
          alignSelf: 'center',
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 20,
          height: 50,
          backgroundColor: 'yellow',
        }}
        onPress={handleSignup}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 9,
            color: 'black',
            fontSize: 24,
          }}>
          Signup
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 20,
            color: 'black',
            fontSize: 24,
            color: 'blue',
          }}
          onPress={() => navigation.navigate('Login')}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default SignUp;
