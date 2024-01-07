import React from "react";
import "./ClubLot.css";
import FrameImage from "./imagini/frame.png";
//import IconImage from "./imagini/icon.png";
//import CrossImage from './imagini/cross.png';
//import PlaceImage from './imagini/place.png';
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import { Link } from "react-router-dom";
const ClubLot = () => {
  return (
    <div className="app-container">
      <Meniusus />

      <div className="frame-overlay-club">
        <img src={FrameImage} alt="" className="frame-club" />
        <div className="words-lot">
          <Link to="/clublot" className="wordslot-list-link-lot">
            LOTUL CLUBULUI
          </Link>
          <Link to="/detaliiclub" className="wordslot-list-link">
            DETALII CLUB
          </Link>
          <Link to="/clubclasament" className="wordslot-list-link">
            CLASAMENT FRH
          </Link>
        </div>
      </div>
      <Meniujos />
      
    </div>
  );
};

export default ClubLot;
