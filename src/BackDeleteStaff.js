import React, { useEffect } from 'react';


const BackDeleteStaff = () => {
 useEffect(() => {
    const fetchData = async () => {
      try {
        // Example data to be used as criteria for deletion
        const criteria = {
          tiplot: 0
       
        };

        const response = await fetch('https://handballdevsbe.azurewebsites.net/api/staff?tipLot=0', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(criteria),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('API Response:', data);
        } else {
          console.error('API Error:', response.statusText);
        }
      } catch (error) {
        console.error('API Error:', error.message);
      }
    };

    fetchData();
  }, []); // The empty dependency array means this effect runs once when the component mounts

  return null;
}


export default BackDeleteStaff;
