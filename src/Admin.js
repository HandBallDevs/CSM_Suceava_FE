import React from 'react';
import './Admin.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import AdminMenuImage from "./imagini/AdminMenuImage.png";
import AdminInvisibleBackground from "./imagini/AdminInvisibleBackground.png";
import { useNavigate,Link } from "react-router-dom";
const Admin = () => {
  return (
    <div className="app-container">
      <Meniusus/>

      <div className="title-ADM">
        <img src={FrameImage} alt="" className="frame-image-ADM" />
        <div className="label-container-ADM">
          <label className="label_title-ADM">Panou Administrator</label>
          <div className="row-title-ADM">
            <label className="label_subtitle-ADM">Acasa</label>
            <label className="label_subtitle-ADM">/</label>
            <label className="label_subtitle_admin-ADM">Panou Administrator</label>
          </div>
        </div>
      </div>

      <div className="Container-ADM">
        <div className="Menu-ADM">
          <img src={AdminMenuImage} alt="" className="Admin-menu-img-ADM" />
          <label className="ADM_titles">Panou Administrator</label>
          <div className="options_ADM">
            <Link to="/adminstiri" className="ADM_options">Stiri</Link>
            <Link to="/adminmeciuri" className="ADM_options">Meciuri</Link>
            <label className="ADM_options">Utilizatori</label>
            <label className="ADM_options">Magazin</label>
            <label className="ADM_options">Jucatorii Seniori</label>
            <label className="ADM_options">Staff</label>
            <label className="ADM_options">Jucatorii Juvenili</label>
          </div>
        </div>  
        <div className="Workspace-ADM">
          <img src={AdminInvisibleBackground} alt="" className="Admin-workspace-img-ADM" />
        </div>
      </div>


    </div>
  );
};

export default Admin;
