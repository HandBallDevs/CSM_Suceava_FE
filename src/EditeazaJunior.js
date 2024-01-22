import React, { useState, useEffect } from 'react';
import './EditeazaJucator.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import ImgJucator from "./imagini/PozaJucaror.png";
import { Link, useParams } from "react-router-dom";

const EditeazaJunior = () => {
  const { playerId } = useParams();

  console.log('Player ID from route:', playerId);

  const [loading, setLoading] = useState(true);

  const [playerData, setPlayerData] = useState({
    nume: '',
    prenume: '',
    pozitie: '',
    varsta: '',
    datan: '',
    nationalitate: '',
    inaltime: '',
    descriere: '',
    imagine: '',
  });

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        if (!playerId) {
          console.error('Player ID is undefined.');
          return;
        }
  
        console.log('Fetching data for player ID:', playerId);
  
        const response = await fetch(`https://handballdevsbe.azurewebsites.net/api/staff?tipLot=1&id=${playerId}`);
        console.log('API Response:', response);
  
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched Data:', data);
  
          if (data && data.length > 0) {
            console.log('Fetched Data:', data);
  
            const selectedPlayer = data.find(player => player.id === playerId);
  
            if (selectedPlayer) {
              setPlayerData({
                nume: selectedPlayer.nume,
                prenume: selectedPlayer.prenume,
                pozitie: selectedPlayer.post,
                datan: selectedPlayer.dataNastere,
                nationalitate: selectedPlayer.nationalitate,
                inaltime: selectedPlayer.inaltime,
                descriere: selectedPlayer.descriere,
                imagine: selectedPlayer.urlPoza,
              });
            } else {
              console.error(`Player with ID ${playerId} not found in the response.`);
            }
  
          } else {
            console.error('No data received from the API.');
          }
        } else {
          console.error('API Error:', response.statusText);
        }
      } catch (error) {
        console.error('API Error:', error.message);
      }
    };
  
    // Fetch data when playerId changes
    if (playerId) {
      fetchPlayerData();
    }
  }, [playerId]);
  

  // Rest of your code...

 


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPlayerData({
      ...playerData,
      [id]: value,
    });
  };

  const handleEditeazaJucator = async () => {
    try {
      const updatedData = {
        nume: playerData.nume,
        prenume: playerData.prenume,
        nationalitate: playerData.nationalitate,
        tipLot: 1,
        post: playerData.pozitie,
        urlPoza: playerData.imagine,
        dataNastere: playerData.datan,
        inaltime: parseFloat(playerData.inaltime),
        descriere: playerData.descriere,
      };

      const response = await fetch(`https://handballdevsbe.azurewebsites.net/api/staff/${playerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data);
        // Add any further logic or state updates as needed
      } else {
        console.error('API Error:', response.statusText);
      }
    } catch (error) {
      console.error('API Error:', error.message);
    }
    window.location.reload();
  };
  
  return (
    <div className="app-container">
      <Meniusus/>

      <div className="title-EDIT">
        <img src={FrameImage} alt="" className="frame-image-EDIT" />
          <div className="label-container-EDIT">
                <label className="label_title-EDIT">Panou Administrator</label>
            <div className="row-title-EDIT">
                 <label className="label_subtitle-EDIT">Acasa</label>
                 <label className="label_subtitle-EDIT">/</label>
                 <label className="label_subtitle_Admin-EDIT">Panou Administrator</label>
            </div>
          </div>
      </div>
      <div className='edit_jucator-title'>
        <label className="edit_jucator-title_label">Editeaza jucator lot Juniori</label>
      </div>
      <div className='edit_jucator'>
          <div className='edit_jucator-collumn'>
             <label className="edit_jucator-labels" htmlFor="nume">Nume</label>
             <label className="edit_jucator-labels" htmlFor="prenume">Prenume</label>
             <label className="edit_jucator-labels" htmlFor="pozitie">Pozitie joc</label>
             <label className="edit_jucator-labels" htmlFor="datan">Data nastere</label>
             <label className="edit_jucator-labels" htmlFor="nationalitate">Nationalitate</label>
             <label className="edit_jucator-labels" htmlFor="inaltime">Inaltime</label>
             <label className="edit_jucator-labels" htmlFor="descriere">Descriere</label>
          </div>
          <div className='edit_jucator-collumn'>
          <input type="text" id="nume" className="edit_jucator-input" onChange={handleInputChange} value={playerData.nume ?? ''}/>
          <input type="text" id="prenume" className="edit_jucator-input" onChange={handleInputChange} value={playerData.prenume ?? ''} />
          <input type="text" id="pozitie" className="edit_jucator-input" onChange={handleInputChange} value={playerData.pozitie ?? ''} />
          <input type="text" id="datan" className="edit_jucator-input" onChange={handleInputChange} value={playerData.datan ?? ''} />
          <input type="text" id="nationalitate" className="edit_jucator-input" onChange={handleInputChange} value={playerData.nationalitate ?? ''} />
          <input type="text" id="inaltime" className="edit_jucator-input" onChange={handleInputChange} value={playerData.inaltime ?? ''} />
          <input type="text" id="descriere" className="edit_jucator-input" onChange={handleInputChange} value={playerData.descriere ?? ''} />
        </div>
          <div className='edit_jucator-collumn1'>
            <img src={ImgJucator} alt="" className="iamgine_jucator-edit" />
            <button className="Incarca-imagine-jucator" >Incarca imagine</button>
          </div>

      </div>
      <div className='edit_jucator2'>
      <Link to={'/adminjuniori'}>
          <button className="Incarca-imagine-jucator-ADD" onClick={handleEditeazaJucator}>
            Editeaza junior
          </button>
        </Link>
      </div>

    </div>
  );
};

export default EditeazaJunior;