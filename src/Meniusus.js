import React from "react";
import "./Meniusus.css";
import LogoImage from "./imagini/logo.png";
import CosImage from "./imagini/cos.png";
import UserImage from "./imagini/user.png";

const Meniusus = () => {
  const handleAcasaClick = () => {};

  return (
    
      <div className="word-list">
        <img src={LogoImage} alt="" className="imagelogo" />
        <p className="word csu-suceava">CSU Suceava</p>
        <p className="word acasa" onClick={handleAcasaClick}>
          Acasă
        </p>
        <p className="word">Magazin</p>
        <p className="word">Club</p>
        <p className="word">Meciuri</p>
        <p className="word">Noutăți</p>
        <p className="word contact">Contact</p>
        <p className="word csu-login">Login</p>
        <img src={UserImage} alt="" className="imageuser" />
        <p className="word csu-cos">Coș</p>
        <img src={CosImage} alt="" className="imagecos" />
      </div>
   
  );
};

export default Meniusus;
