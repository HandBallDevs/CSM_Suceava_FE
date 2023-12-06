import React, { useEffect } from 'react';
import './AdminStiri.css';
import Meniusus from './Meniusus';
import FrameImage from './imagini/frame.png';
import AdminMenuImage from './imagini/AdminMenuImage.png';
import AdminWorkSpaceImage from './imagini/AdminWorkSpaceImage.png';
import AdminIndexImage from './imagini/AdminiIndexImage.png';


const AdminStiri = () => {
    useEffect(() => {
        populateDateAndTimeOptions();
      }, []); // Empty dependency array ensures this effect runs only once after mount
    
      const toggleUnderline = (label) => {
        label.classList.toggle('underline');
      };
    
      const populateDateAndTimeOptions = () => {
        // Populate date options for the next 30 days
        const dataSelect = document.getElementById('data');
        const today = new Date();
    
        // Clear existing options
        dataSelect.innerHTML = '';
    
        for (let i = 0; i < 30; i++) {
          const dateOption = new Date();
          dateOption.setDate(today.getDate() + i);
    
          const option = document.createElement('option');
          option.value = dateOption.toISOString().split('T')[0];
          option.text = dateOption.toDateString();
          dataSelect.add(option);
        }
    
        // Populate time options for hours (24-hour format)
        const oraSelect = document.getElementById('ora');
    
        // Clear existing options
        oraSelect.innerHTML = '';
    
        for (let j = 0; j < 24; j++) {
          const hour = ('0' + j).slice(-2);
    
          const option = document.createElement('option');
          option.value = hour;
          option.text = hour + ':00';
          oraSelect.add(option);
        }
      };

  return (
    <div className="app-container">
      <Meniusus />

      <div className="title">
        <img src={FrameImage} alt="" className="frame-image" />
        <div className="label-container">
          <label className="label_title">Panou Administrator</label>
          <div className="row-title">
            <label className="label_subtitle">Acasa</label>
            <label className="label_subtitle">/</label>
            <label className="label_subtitle_admin">Panou Administrator</label>
          </div>
        </div>
      </div>

      <div className="admin">
        <div className="admin_menu">
          <img src={AdminMenuImage} alt="" className="AdminMenuImage" />
          <label className="admin_titles">Panou Administrator</label>
          <div className="options_admin_container">
            <label className="admin_options" onClick={(e) => toggleUnderline(e.target)}>
              Stiri
            </label>
            <label className="admin_options" onClick={(e) => toggleUnderline(e.target)}>
              Meciuri
            </label>
            <label className="admin_options" onClick={(e) => toggleUnderline(e.target)}>
              Utilizatori
            </label>
            <label className="admin_options" onClick={(e) => toggleUnderline(e.target)}>
              Magazin
            </label>
            <label className="admin_options" onClick={(e) => toggleUnderline(e.target)}>
              Jucatori Seniori
            </label>
            <label className="admin_options" onClick={(e) => toggleUnderline(e.target)}>
              Staff
            </label>
            <label className="admin_options" onClick={(e) => toggleUnderline(e.target)}>
              Jucatori Juvenili 
            </label>
          
          </div>
        </div>

        <div className="admin_workspace">
          <img src={AdminWorkSpaceImage} alt="" className="AdminWorkSpaceImage" />
          <label className="admin_titles1">Creaza Stire Noua / Editeaza stire</label>
          <div className="workspace-row">
            <label className="workspace-labels" htmlFor="titlu">
              Titlu
            </label>
            <input type="text" id="titlu" className="workspace-inputs" />

            <label className="workspace-labels" htmlFor="definire">
              Definire #
            </label>
            <input type="text" id="definire" className="workspace-inputs" />
          </div>
          <div className="workspace-row1">
            <label className="workspace-labels1" htmlFor="descriere">
              Descriere
            </label>
            <input type="text" id="descriere" className="workspace-inputs-descriere" />
            <button className="workspace-button">Posteaza stire</button>
            <button className="workspace-button">Salveaza draft</button>
            <button className="workspace-button">Actualizeaza stire</button>
          </div>
          <div className="workspace-row1">
            <label className="workspace-labels">Programeaza postare stire:</label>
            <label className="workspace-labels" htmlFor="data">
              Data:
            </label>
            <select id="data" className="workspace-choicebox"></select>

            <label className="workspace-labels" htmlFor="ora">
              Ora:
            </label>
            <select id="ora" className="workspace-choicebox"></select>
            <button className="workspace-button-programare">Programeaza stire</button>
          </div>
          <div className="workspace-row2">
            <label className="workspace-labels">Incarca intr-o postare:</label>
            <button className="workspace-button-programare">Alege Foto/Video</button>
            <button className="workspace-button-programare">Incarca</button>
          </div>
          <div className="workspace-row">
          <label className="workspace-labels-upper">Stiri publicate</label>
          </div>
          <div className="workspace-row">
          <img src={AdminIndexImage} alt="" className="AdminIndexImage" />

          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminStiri;
