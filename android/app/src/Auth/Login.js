import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressToNavigateSign = () => {
    navigation.navigate('SignUp');
  };
  const onPressToLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Welcome ');
        navigation.navigate('Home');
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
            color: 'black',
          }}>
          Login
        </Text>
      </View>
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{
          width: '85%',
          alignSelf: 'center',
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 50,
          paddingLeft: 20,
        }}
      />
      <TextInput
        placeholder="Enter  password"
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
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 20,
          height: 50,
          backgroundColor: 'white',
        }}>
        <Text
          onPress={onPressToLogin}
          style={{
            alignSelf: 'center',
            marginTop: 9,
            color: 'black',
            fontSize: 24,
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressToNavigateSign}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 20,
            color: 'black',
            fontSize: 24,
            color: 'black',
          }}>
          Not have an account? Sign up here
        </Text>
      </TouchableOpacity>
      
    </>
  );
};

export default Login;
