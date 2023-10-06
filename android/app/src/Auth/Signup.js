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
        }, 2000); // 3 seconds
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
          backgroundColor: 'blue',
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
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>successfully signup</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default SignUp;
