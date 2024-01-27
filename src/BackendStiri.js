import React, { useEffect, useState } from 'react';

const BackendStiri = () => {
  const [StiriData, setStiriData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://handballdevsbe.azurewebsites.net/api/stire"
        );
        if (response.ok) {
          const data = await response.json();
          console.log("API Response:", data);

          const ids = data.map(item => item.id);
          console.log("IDs:", ids);

          setStiriData(data);
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

export default BackendStiri;
