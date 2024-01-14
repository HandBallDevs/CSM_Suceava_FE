import React, { useEffect } from 'react';
//import IconImage from './imagini/icon.png';
//import CrossImage from './imagini/cross.png';
//import PlaceImage from './imagini/place.png';


const BackAdaugaMeci = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example data to be sent to the backend
        const newData = {
          tipCampionat: 0,
          editia: "Golanilor",
          statusMeci: 0,
          data: "2024-01-14",
          urlPoza: "",
          numeAdversar: "Echipa mia",
          locatia: "La mine acasa",
          linkLive: "",
          acasa: true,
          scorCSUSV: 0,
          scorAdversar: 0
        };

        const response = await fetch('https://handballdevsbe.azurewebsites.net/api/meci', {
          method: 'POST', //put la update,post la adaugare
          headers: {
            'Content-Type': 'application/json',
         
          },
          body: JSON.stringify(newData),
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
  }, []);


}


export default BackAdaugaMeci;
