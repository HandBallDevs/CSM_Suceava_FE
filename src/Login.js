
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

     <div class="title-LOGIN">
        <img src={FrameImage} alt="" className="frame-image-LOGIN" />
        <div class="label-container-LOGIN">
          <label class="label_title-LOGIN">Panou Administartor</label>
          <div class="row-title-LOGIN">
            <label class="label_subtitle-LOGIN">Acasa</label>
            <label class="label_subtitle-LOGIN">/</label>
            <label class="label_subtitle_admin-LOGIN">Panou Administrator</label>
          </div>
        </div>
      </div>
      <div class="container-LOGIN">
      <img src={LoginFrameImage} alt="" className="image-border-LOGIN" />
        <div class="content-LOGIN">
          <label class="content-label-LOGIN">Login</label>
          <div class="container-INPUT-LOGIN">
           <input type="email" id="email" name="email" className="input-LOGIN" placeholder="Email"/>
           <input type="password" id="password" name="password" className="input-LOGIN" placeholder="Password"/>
           <div class="row-retine-LOGIN">
              <label class="save-label-LOGIN">Retine datele de conectare</label>
              <div class="ios-switch">
                <input type="checkbox" id="toggleSwitch"/>
                <label class="ios-switch-label" for="toggleSwitch">
                  <div class="ios-switch-slider"></div>
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
