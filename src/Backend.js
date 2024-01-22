import React, { useEffect, useState } from 'react';

const Backend = () => {
  const [meciData, setMeciData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://handballdevsbe.azurewebsites.net/api/meci?tipCampionat=0"
        );
        if (response.ok) {
          const data = await response.json();
          console.log("API Response:", data);

          const ids = data.map(item => item.id);
          console.log("IDs:", ids);

          setMeciData(data);
        } else {
          console.error("API Error:", response.statusText);
        }
      } catch (error) {
        console.error("API Error:", error.message);
      }
    };

    fetchData();
  }, []);

  return null; 
};

export default Backend;
