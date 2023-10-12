import { View, Text,Button } from 'react-native'
import React ,{useEffect,useState}from 'react'
import Geolocation from '@react-native-community/geolocation';

const GeolocationScreen = () => {
    const [location, setLocation] = useState(null);
    // Define your geolocation configuration
  const config = {
    skipPermissionRequests: false,
    authorizationLevel: 'auto',
    enableBackgroundLocationUpdates: false,
    locationProvider: 'auto',
  };

  // Set the configuration when the component mounts
  useEffect(() => {
    Geolocation.setRNConfiguration(config);
  }, []);

  // Function to get the current location
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({latitude,longitude})
        console.log('Latitude:', latitude, 'Longitude:', longitude);
      },
      (error) => {
        console.error('Location retrieval error:', error.message);
      },
      {
        timeout: 5000,
        enableHighAccuracy: true,
      }
    );
  };

  return (
    <View>
      <Text> Geolocation </Text>
      <Button title="Get Current Location" onPress={getCurrentLocation} />
      {location && (
        <Text>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
      )}
      
    </View>
  )
}

export default GeolocationScreen