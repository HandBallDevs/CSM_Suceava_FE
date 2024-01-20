import React, { useState ,useEffect} from 'react';
import './EditeazaJucator.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import ImgJucator from "./imagini/PozaJucaror.png"
import { useNavigate, Link, useParams } from "react-router-dom";
  const EditeazaJucator = () => {
    const { playerId } = useParams(); // Assuming you have a route parameter for the player ID
  
    const [formData, setFormData] = useState({
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
  const fetchPlayerData = async (playerId) => {
    try {
      if (!playerId) {
        console.error('Player ID is undefined.');
        return;
      }

      const response = await fetch(`https://handballdevsbe.azurewebsites.net/api/staff?id=${playerId}`);
      if (response.ok) {
        const data = await response.json();
        // Set the form data with the fetched player details
        setFormData({
          nume: data.nume,
          prenume: data.prenume,
          pozitie: data.post,
          datan: data.dataNastere,
          nationalitate: data.nationalitate,
          inaltime: data.inaltime.toString(),
          descriere: data.descriere,
          imagine: data.urlPoza,
        });
      } else {
        console.error('API Error:', response.statusText);
      }
    } catch (error) {
      console.error('API Error:', error.message);
    }
  };

  fetchPlayerData();
}, [playerId]);


    
  
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData({
        ...formData,
        [id]: value,
      });
    };
  
    const handleEditeazaJucator = async () => {
      try {
        const updatedData = {
          nume: formData.nume,
          prenume: formData.prenume,
          nationalitate: formData.nationalitate,
          tipLot: 0,
          post: formData.pozitie,
          urlPoza: formData.imagine,
          dataNastere: formData.datan,
          inaltime: parseFloat(formData.inaltime),
          descriere: formData.descriere,
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
        <label className="edit_jucator-title_label">Editeaza jucator lot seniori</label>
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
            <input type="text" id="nume" className="edit_jucator-input"onChange={handleInputChange}/>
            <input type="text" id="prenume" className="edit_jucator-input" onChange={handleInputChange}/>
            <input type="text" id="pozitie" className="edit_jucator-input" onChange={handleInputChange}/>
            <input type="text" id="datan" className="edit_jucator-input" onChange={handleInputChange}/>
            <input type="text" id="nationalitate" className="edit_jucator-input" onChange={handleInputChange}/>
            <input type="text" id="inaltime" className="edit_jucator-input" onChange={handleInputChange}/>
            <input type="text" id="descriere" className="edit_jucator-input" onChange={handleInputChange}/>
          </div>
          <div className='edit_jucator-collumn1'>
            <img src={ImgJucator} alt="" className="iamgine_jucator-edit" />
            <button className="Incarca-imagine-jucator" >Incarca imagine</button>
          </div>

      </div>
      <div className='edit_jucator2'>
      <Link to={'/adminjucatori'}>
          <button className="Incarca-imagine-jucator-ADD" onClick={handleEditeazaJucator}>
            Editeaza jucator
          </button>
        </Link>
      </div>

    </div>
  );
};

export default EditeazaJucator;
