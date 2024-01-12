
import React from 'react';
import './Login.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import LoginFrameImage from "./imagini/LoginFrameImage.png";
import Meniujos from "./Meniujos";
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
  const handleAcasaClick = () => {
   
  
  };

  function toggleUnderline(label) {
    label.classList.toggle("underline");
  }
  

  return (
    <div className="app-container">
     <Meniusus/>

     <div className="title-LOGIN">
        <img src={FrameImage} alt="" className="frame-image-LOGIN" />
        <div className="label-container-LOGIN">
          <label className="label_title-LOGIN">Panou Administartor</label>
          <div className="row-title-LOGIN">
            <label className="label_subtitle-LOGIN">Acasa</label>
            <label className="label_subtitle-LOGIN">/</label>
            <label className="label_subtitle_admin-LOGIN">Panou Administrator</label>
          </div>
        </div>
      </div>
      <div className="container-LOGIN">
      <img src={LoginFrameImage} alt="" className="image-border-LOGIN" />
        <div className="content-LOGIN">
          <label className="content-label-LOGIN">Login</label>
          <div className="container-INPUT-LOGIN">
           <input type="email" id="email" name="email" className="input-LOGIN" placeholder="Email"/>
           <input type="password" id="password" name="password" className="input-LOGIN" placeholder="Password"/>
           <div className="row-retine-LOGIN">
              <label className="save-label-LOGIN">Retine datele de conectare</label>
              <div className="ios-switch">
                <input type="checkbox" id="toggleSwitch"/>
                <label className="ios-switch-label" htmlFor="toggleSwitch">
                  <div className="ios-switch-slider"></div>
                </label>
              </div>
           </div>
          
          </div>
         
          <Link to="/admin" className="Submit-LOGIN">
            Conecteaza-te
          </Link>
          
        </div>
      </div>


      

      <Meniujos />
    </div>
  );
};

export default Login;
