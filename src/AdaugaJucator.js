import React, { useState } from 'react';
import './AdaugaJucator.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import ImgJucator from "./imagini/PozaJucaror.png";
import { useNavigate, Link } from "react-router-dom";

const AdaugaJucator = () => {
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    pozitie: '',
    varsta: '',
    datan: '',
    nationalitate: '',
    inaltime: '',
    descriere: '',
    imagine: 'https://csusvsa.blob.core.windows.net/csusvbs/Staffcf34e8a0-4a1b-410f-86ae-5663a1adfd20.png',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

 const handleAdaugaJucator = async () => {
  try {
    const newData = {
      nume: formData.nume,
      prenume: formData.prenume,
      nationalitate: formData.nationalitate,
      tipLot: 0, // You can modify this if needed
      post: formData.pozitie, // Assuming "pozitie" corresponds to "post"
      urlPoza: formData.imagine, // Assuming "imagine" is the image URL
      dataNastere: formData.datan,
      inaltime: parseInt(formData.inaltime), // Ensure inaltime is an integer
      descriere: formData.descriere,
    };

    const response = await fetch('https://handballdevsbe.azurewebsites.net/api/staff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
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
      <Meniusus />

      <div className="title-ADD">
        <img src={FrameImage} alt="" className="frame-image-ADD" />
        <div className="label-container-ADD">
          <label className="label_title-ADD">Panou Administrator</label>
          <div className="row-title-ADD">
            <label className="label_subtitle-ADD">Acasa</label>
            <label className="label_subtitle-ADD">/</label>
            <label className="label_subtitle_Admin-ADD">Panou Administrator</label>
          </div>
        </div>
      </div>

      <div className='ADD_jucator-title'>
        <label className="ADD_jucator-title_label">Adauga jucator lot seniori</label>
      </div>

      <div className='ADD_jucator'>
        <div className='ADD_jucator-collumn'>
        <label className="ADD_jucator-labels" htmlFor="nume">Nume</label>
             <label className="ADD_jucator-labels" htmlFor="prenume">Prenume</label>
             <label className="ADD_jucator-labels" htmlFor="pozitie">Pozitie joc</label>
             <label className="ADD_jucator-labels" htmlFor="varsta">Varsta</label>
             <label className="ADD_jucator-labels" htmlFor="datan">Data nastere</label>
             <label className="ADD_jucator-labels" htmlFor="nationalitate">Nationalitate</label>
             <label className="ADD_jucator-labels" htmlFor="inaltime">Inaltime</label>
             <label className="ADD_jucator-labels" htmlFor="descriere">Descriere</label>
        </div>
        <div className='ADD_jucator-collumn'>
          <input type="text" id="nume" className="ADD_jucator-input" onChange={handleInputChange}/>
            <input type="text" id="prenume" className="ADD_jucator-input" onChange={handleInputChange} />
            <input type="text" id="pozitie" className="ADD_jucator-input" onChange={handleInputChange} />
            <input type="text" id="varsta" className="ADD_jucator-input" onChange={handleInputChange}/>
            <input type="text" id="datan" className="ADD_jucator-input" onChange={handleInputChange}/>
            <input type="text" id="nationalitate" className="ADD_jucator-input" onChange={handleInputChange}/>
            <input type="text" id="inaltime" className="ADD_jucator-input" onChange={handleInputChange}/>
            <input type="text" id="descriere" className="ADD_jucator-input" onChange={handleInputChange}/>
        </div>
        <div className='ADD_jucator-collumn1'>
          <img src={ImgJucator} alt="" className="iamgine_jucator-ADD" />
          <button className="Incarca-imagine-jucator-ADD" >
  Incarca imagine
</button>
        </div>
      </div>

      <div className='ADD_jucator2'>
        <button className="Incarca-imagine-jucator-ADD" onClick={handleAdaugaJucator}>
          Adauga jucator
        </button>
      </div>
    </div>
  );
};

export default AdaugaJucator;
