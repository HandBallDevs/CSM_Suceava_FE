import React, { useEffect } from 'react';

const BackDeleteMeci = () => {
  useEffect(() => {
    const fetchMeciIds = async () => {
      try {
        const response = await fetch(
          'https://handballdevsbe.azurewebsites.net/api/meci?statusMeci=0&tipCampionat=0'
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
            `https://handballdevsbe.azurewebsites.net/api/meci?statusMeci=0&tipCampionat=0&id=${id}`,
            {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                // Add any additional headers or authentication tokens if needed
              },
            }
          );

          if (response.ok) {
            console.log(`Meci with ID ${id} deleted successfully.`);
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

export default BackDeleteMeci;
