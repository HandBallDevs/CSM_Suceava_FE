import React from "react";
import "./DetaliiClub.css";
import FrameImage from "./imagini/frame.png";
//import IconImage from "./imagini/icon.png";
//import CrossImage from './imagini/cross.png';
//import PlaceImage from './imagini/place.png';
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import { Link } from "react-router-dom";
const DetaliiClub = () => {
  return (
    <div className="app-container">
      <Meniusus />

      <div className="frame-overlay-club">
        <img src={FrameImage} alt="" className="frame-club" />
        <div className="words-club">
          <Link to="/clublot" className="wordsclub-list-link">
            LOTUL CLUBULUI
          </Link>
          <Link to="/detaliiclub" className="wordsclub-list-link-detalii">
            
            DETALII CLUB
          </Link>
          <Link to="/clubclasament" className="wordsclub-list-link">
            CLASAMENT FRH
          </Link>
        </div>
      </div>
      <Meniujos />
    </div>
  );
};

export default DetaliiClub;
