import React, { useEffect } from 'react';


const BackAdaugaStaff = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example data to be sent to the backend
        const newData = {
          nume: "Ianis",
          prenume: "Hagi",
          nationalitate: "ROMAN",
          tipLot: 1,
          post: "Atacant",
          urlPoza: "",
          dataNastere: "1992-01-01",
          inaltime: 151,
          descriere: "Un jucator crucial"
        };

        const response = await fetch('https://handballdevsbe.azurewebsites.net/api/staff', {
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
  return null;


}


export default BackAdaugaStaff;
