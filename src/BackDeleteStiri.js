import React, { useEffect } from 'react';

const BackDeleteStiri = () => {
  useEffect(() => {
    const fetchMeciIds = async () => {
      try {
        const response = await fetch(
          'https://handballdevsbe.azurewebsites.net/api/stire'
        );

        if (response.ok) {
          const data = await response.json();
          const meciIdsToDelete = data.map((meci) => meci.id);
          deleteMecisByIds(meciIdsToDelete);
        } else {
          console.error('API Error:', response.statusText);
        }
      } catch (error) {
        console.error('API Error:', error.message);
      }
    };

    const deleteMecisByIds = async (ids) => {
      try {
        for (const id of ids) {
          const response = await fetch(
            `https://handballdevsbe.azurewebsites.net/api/stire/${id}`,
            {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
               
              },
            }
          );

          if (response.ok) {
            console.log(`Stire with ID ${id} deleted successfully.`);
          } else {
            console.error(`Failed to delete Meci with ID ${id}.`);
          }
        }
      } catch (error) {
        console.error('API Error:', error.message);
      }
    };

    fetchMeciIds();
  }, []);

  return null;
};

export default BackDeleteStiri;
