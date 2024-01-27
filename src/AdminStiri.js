import React, { useEffect } from 'react';
import './AdminStiri.css';
import Meniusus from './Meniusus';
import FrameImage from './imagini/frame.png';
import AdminMenuImage from './imagini/AdminMenuImage.png';
import AdminWorkSpaceImage from './imagini/AdminWorkSpaceImage.png';
import AdminIndexImage from './imagini/AdminiIndexImage.png';
import { Link } from "react-router-dom";

const AdminStiri = () => {
  
  useEffect(() => {
    populateDateAndTimeOptions();
  }, []); // Empty dependency array ensures this effect runs only once after mount

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

      <div className="title-ADMStiri">
        <img src={FrameImage} alt="" className="frame-image-ADMStiri" />
        <div className="label-container-ADMStiri">
          <label className="label_title-ADMStiri">Panou Administrator</label>
          <div className="row-title-ADMStiri">
            <label className="label_subtitle-ADMStiri">Acasa</label>
            <label className="label_subtitle-ADMStiri">/</label>
            <label className="label_subtitle_admin-ADMStiri">Panou Administrator</label>
          </div>
        </div>
      </div>

      <div className="Container-ADMStiri">
        <div className="Menu-ADMStiri">
          <img src={AdminMenuImage} alt="" className="Admin-menu-img-ADMStiri" />
          <label className="ADMStiri_titles">Panou Administrator</label>
          <div className="options_ADMStiri">
            <Link to="/adminstiri" className="ADMStiri_options">Stiri</Link>
            <Link to="/adminmeciuri" className="ADM_options">Meciuri</Link>
            <Link to="/adminjucatori" className="ADMStiri_options">Jucatorii Seniori</Link>
            <Link to="/adminjuniori" className="ADMStiri_options">Jucatorii Juniori</Link>
            <Link to="/admincadeti" className="ADMStiri_options">Jucatori Cadeti</Link>
            <Link to="/adminstaff" className="ADMStiri_options">Staff</Link>
          </div>
        </div>  
        <div className="Workspace-ADMStiri">
          <img src={AdminWorkSpaceImage} alt="" className="Admin-workspace-img-ADMStiri" />
          <label className="admin_titles1-ADMStiri">Creaza Stire Noua / Editeaza stire</label>
          <div className="workspace-row-ADMStiri">
            <label className="workspace-labels-ADMStiri" htmlFor="titlu">
              Titlu
            </label>
            <input type="text" id="titlu" className="workspace-inputs-ADMStiri" />

            <label className="workspace-labels-ADMStiri" htmlFor="definire">
              Definire #
            </label>
            <input type="text" id="definire" className="workspace-inputs-ADMStiri" />
          </div>

          <div className="workspace-row1-ADMStiri">
            <label className="workspace-labels1-ADMStiri" htmlFor="descriere">
              Descriere
            </label>
            <input type="text" id="descriere" className="workspace-inputs-descriere-ADMStiri" />
            <button className="workspace-button-ADMStiri">Posteaza stire</button>
            <button className="workspace-button-ADMStiri">Salveaza draft</button>
            <button className="workspace-button-ADMStiri">Actualizeaza stire</button>
          </div>

          <div className="workspace-row2-ADMStiri">
            <label className="workspace-labels-ADMStiri1">Programeaza postare stire:</label>
            <label className="workspace-labels-ADMStiri" htmlFor="data">
              Data:
            </label>
            <select id="data" className="workspace-choicebox-ADMStiri"></select>

            <label className="workspace-labels-ADMStiri" htmlFor="ora">
              Ora:
            </label>
            <select id="ora" className="workspace-choicebox-ADMStiri"></select>
            <button className="workspace-button-programare-ADMStiri">Programeaza stire</button>
          </div>

          <div className="workspace-row3-ADMStiri">
            <label className="workspace-labels-ADMStiri">Incarca intr-o postare:</label>
            <button className="workspace-button-programare-ADMStiri">Alege Foto/Video</button>
            <button className="workspace-button-programare-ADMStiri">Incarca</button>
          </div>

          <div className="workspace-row-ADMStiri">
            <label className="workspace-labels-upper-ADMStiri">Stiri publicate</label>
          </div>
          
          <div className="workspace-row-ADMStiri">
            <img src={AdminIndexImage} alt="" className="AdminIndexImage-ADMStiri" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminStiri;
