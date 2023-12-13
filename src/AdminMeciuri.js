import React, { useEffect } from 'react';
import './AdminMeciuri.css';
import Meniusus from './Meniusus';
import FrameImage from './imagini/frame.png';
import AdminMenuImage from './imagini/AdminMenuImage.png';
import AdminWorkSpaceImage from './imagini/AdminWorkSpaceImage.png';
import AdminIndexImage from './imagini/AdminiIndexImage.png';


const AdminMeciuri = () => {
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

      <div className="title-ADMmeciuri">
        <img src={FrameImage} alt="" className="frame-image-ADMmeciuri" />
        <div className="label-container-ADMmeciuri">
          <label className="label_title-ADMmeciuri">Panou Administrator</label>
          <div className="row-title-ADMmeciuri">
            <label className="label_subtitle-ADMmeciuri">Acasa</label>
            <label className="label_subtitle-ADMmeciuri">/</label>
            <label className="label_subtitle_admin-ADMmeciuri">Panou Administrator</label>
          </div>
        </div>
      </div>

      <div className="admin-ADMmeciuri">
        <div className="admin_menu-ADMmeciuri">
          <img src={AdminMenuImage} alt="" className="AdminMenuImage-ADMmeciuri" />
          <label className="admin_titles-ADMmeciuri">Panou Administrator</label>
          <div className="options_admin_container-ADMmeciuri">
            <label className="admin_options-ADMmeciuri" onClick={(e) => toggleUnderline(e.target)}>
              Stiri
            </label>
            <label className="admin_options-ADMmeciuri" onClick={(e) => toggleUnderline(e.target)}>
              Meciuri
            </label>
            <label className="admin_options-ADMmeciuri" onClick={(e) => toggleUnderline(e.target)}>
              Utilizatori
            </label>
            <label className="admin_options-ADMmeciuri" onClick={(e) => toggleUnderline(e.target)}>
              Magazin
            </label>
            <label className="admin_options-ADMmeciuri" onClick={(e) => toggleUnderline(e.target)}>
              Jucatori Seniori
            </label>
            <label className="admin_options-ADMmeciuri" onClick={(e) => toggleUnderline(e.target)}>
              Staff
            </label>
            <label className="admin_options-ADMmeciuri" onClick={(e) => toggleUnderline(e.target)}>
              Jucatori Juvenili 
            </label>
          
          </div>
        </div>

        <div className="admin_workspace-ADMmeciuri">
          <img src={AdminWorkSpaceImage} alt="" className="AdminWorkSpaceImage-ADMmeciuri" />
          <label className="admin_titles1-ADMmeciuri">Creaza Meci nou / Editeaza meciuri</label>
            <div className="workspace-row-ADMmeciuri">
                <div className="workspace-collumn-ADMmeciuri">
                    <label className="workspace-labels-ADMmeciuri" htmlFor="liga">Liga:</label>
                    <label className="workspace-labels-ADMmeciuri" htmlFor="data">Data:</label>
                    <label className="workspace-labels-ADMmeciuri" htmlFor="locatia">Locatia:</label>
                    <label className="workspace-labels-ADMmeciuri" htmlFor="ora">Ora:</label>
                    <label className="workspace-labels-ADMmeciuri" htmlFor="tipmeci">Tip meci:</label>
                </div>
                <div className="workspace-collumn-input-ADMmeciuri">
                    <input type="text" id="liga" className="workspace-inputs-ADMmeciuri" />
                    <select id="data" className="workspace-choicebox-ADMmeciuri"></select>
                    <input type="text" id="locatia" className="workspace-inputs-ADMmeciuri" />
                    <select id="ora" className="workspace-choicebox-ADMmeciuri"></select>
                    <input type="text" id="tipmeci" className="workspace-inputs-ADMmeciuri" />
                </div>
                <div className="workspace-collumn-ADMmeciuri">
                    <label className="workspace-labels-ADMmeciuri" htmlFor="gazde">Gazde:</label>
                    <label className="workspace-labels-ADMmeciuri" htmlFor="oaspeti">Oaspeti:</label>
                    <label className="workspace-labels-ADMmeciuri" htmlFor="scorgazde">Scor gazde:</label>
                    <label className="workspace-labels-ADMmeciuri" htmlFor="scoroaspeti">Scor oaspeti:</label>
                </div>
                <div className="workspace-collumn-input-ADMmeciuri">
                    <input type="text" id="gazde" className="workspace-inputs-ADMmeciuri" />
                    <input type="text" id="oaspeti" className="workspace-inputs-ADMmeciuri" />
                    <input type="text" id="scorgazde" className="workspace-inputs-ADMmeciuri" />
                    <input type="text" id="scoroaspeti" className="workspace-inputs-ADMmeciuri" />
                   
                </div>
                


            </div>
            <div className="workspace-row1-ADMmeciuri">
                <button className="workspace-button-submit-ADMmeciuri">Creaza meci nou</button>
                <button className="workspace-button-submit-ADMmeciuri">Actualizeaza meci</button>
            </div>
            <div className="workspace-row-index-ADMmeciuri">
                <label className="workspace-labels-upper-ADMmeciuri">Meciuri publicate</label>
            </div>
            <div className="workspace-row-index-ADMmeciuri">
                <img src={AdminIndexImage} alt="" className="AdminIndexImage-ADMmeciuri" />

            </div>
          

        </div>
      </div>
    </div>
  );
};

export default AdminMeciuri;
