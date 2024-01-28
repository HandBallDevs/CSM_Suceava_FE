import React, { useEffect } from 'react';

const BackDeleteStiri = () => {
  useEffect(() => {
    const fetchMeciIds = async () => {
      try {
        const response = await fetch(
          'https://handballdevsbe.azurewebsites.net/api/stire?utilizatorId=95d60880-cab8-4888-9f71-20e44eb60113'
        );

        if (response.ok) {
          const data = await response.json();
          const meciIdsToDelete = data.map((meci) => meci.id);
          console.log(data)
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
            `https://handballdevsbe.azurewebsites.net/api/stire?utilizatorId=95d60880-cab8-4888-9f71-20e44eb60113&id=${id}`,
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
