import React, { useState, useEffect } from "react";
const Backend = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example data to be sent to the backend
        const newData = {
          nume: "John",
          prenume: "Doe",
          nationalitate: "US",
          tipLot: 1,
          post: "Player",
          urlPoza: "",
          dataNastere: "1990-01-01T00:00:00.000Z",
          inaltime: 180,
          descriere: "A talented player",
        };

        const response = await fetch('https://handballdevsbe.azurewebsites.net/api/staff', {
          method: 'GET', // or 'PUT' depending on your use case
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
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