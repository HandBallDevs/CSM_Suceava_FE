import React, { useEffect } from 'react';
//import IconImage from './imagini/icon.png';
//import CrossImage from './imagini/cross.png';
//import PlaceImage from './imagini/place.png';



// Create a custom hook for making API calls
const Backend = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://handballdevsbe.azurewebsites.net/api/meci"
        );
        if (response.ok) {
          const data = await response.json();
          console.log("API Response:", data);
          // Process the data or set it to state as needed
        } else {
          console.error("API Error:", response.statusText);
        }
      } catch (error) {
        console.error("API Error:", error.message);
      }
    };

    fetchData();
  }, []);
};

export default Backend;
