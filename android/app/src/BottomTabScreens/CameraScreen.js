import {View, Text,ActivityIndicator,StyleSheet,TouchableOpacity} from 'react-native';
import React,{useEffect, useRef, useState} from 'react';
import { Camera,useCameraDevice} from "react-native-vision-camera"



const CameraScreen = () => {
  const device = useCameraDevice('back')
  const camera = useRef(null)
 
  //  function to check permission
  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission()
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log(newCameraPermission)
  };
  useEffect(() => {
    checkPermission()
  }, [])
  if (device == null) return <ActivityIndicator />
  //  function for take picture
  const takePicture = async()=>{
    const photo = await camera.current.takePhoto()
    console.log(photo.path)
    console.log("clicked")
  }
  return (
    <View style={{flex:1}}>
      <Camera
      ref={camera}
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      photo
    />
    <TouchableOpacity style={{width:60,height:60,borderRadius:40,backgroundColor:"red",position:'absolute',bottom:50,alignSelf:'center'}} onPress={()=>{
takePicture()
    }}>
      
    </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
