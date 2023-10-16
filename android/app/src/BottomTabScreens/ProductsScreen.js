import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
// import { Provider } from 'react-redux';
// import Counter from '../Redux/Counter';
// import store from '../Redux/store';

const ProductsScreen = () => {

  async function fetchData() {
    try {
      // Make an HTTP GET request using fetch
      const response = await fetch('');
      
      // Check if the response status is OK (HTTP 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the response as JSON
      const data = await response.json();
  
      
    } catch (error) {
      // Handle any errors that occur during the fetch or data processing
      console.error('Error:', error);
    }
  }
  
  // Call the async function to fetch data
  useEffect(() => {
    fetchData()
  }, [])
  

  
  return (
  
  <>

  </>
  )
}

export default ProductsScreen