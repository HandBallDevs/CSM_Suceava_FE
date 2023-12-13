
import React from 'react';
import './Admin.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import AdminMenuImage from "./imagini/AdminMenuImage.png";
import AdminWorkSpaceImage from "./imagini/AdminWorkSpaceImage.png";
import AdminInvisibleBackground from "./imagini/AdminInvisibleBackground.png";


const Admin = () => {
  const handleAcasaClick = () => {
   
  
  };

  function toggleUnderline(label) {
    label.classList.toggle("underline");
  }

  return (
    <div className="app-container">
     <Meniusus/>

     <div class="title">
        <img src={FrameImage} alt="" className="frame-image" />
        <div class="label-container">
          <label class="label_title">Panou Administartor</label>
          <div class="row-title">
            <label class="label_subtitle">Acasa</label>
            <label class="label_subtitle">/</label>
            <label class="label_subtitle_admin">Panou Administrator</label>
          </div>
        </div>
      </div>

      <div class="admin">
        <div class="admin_menu">
        <img src={AdminMenuImage} alt="" className="AdminMenuImage" />
        <label class="admin_titles">Panou Administrator</label>
        <div class="options_admin_container">
          <label className="admin_options" onClick={(e) => toggleUnderline(e.target)}>Stiri</label>
          <label class="admin_options" onClick={(e) => toggleUnderline(e.target)}>Meciuri</label>
          <label class="admin_options" onClick={(e) => toggleUnderline(e.target)}>Utilizatori</label>
          <label class="admin_options" onClick={(e) => toggleUnderline(e.target)}>Magazin</label>
          <label class="admin_options" onClick={(e) => toggleUnderline(e.target)}>Jucatorii Seniori</label>
          <label class="admin_options" onClick={(e) => toggleUnderline(e.target)}>Staff</label>
          <label class="admin_options" onClick={(e) => toggleUnderline(e.target)}>Jucatorii Juvenili</label>
          </div>
          </div>
        <div class="admin_workspace">
             <img src={AdminInvisibleBackground} alt="" className="AdminWorkSpaceImage" /> 
             
        </div>
      </div>


    </div>
  );
};

export default Admin;
