import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        setModalVisible(true);
        // navigate to the Login screen after 3 seconds
        setTimeout(() => {
          setModalVisible(false);
          navigation.navigate('Login');
        }, 4000); // 3 seconds
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
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 20,
          height: 50,
          backgroundColor: 'white',
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
            color: 'black',
          }}
          onPress={() => navigation.navigate('Login')}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View>
            <View>
              <Text>successfully signup</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default SignUp;
