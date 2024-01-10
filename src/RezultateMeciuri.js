import React from "react";
import "./RezultateMeciuri.css";
//import LogoImage from "./imagini/logo.png";
import FrameImage from "./imagini/frame.png";
//import IconImage from './imagini/icon.png';
//import CrossImage from './imagini/cross.png';
//import PlaceImage from './imagini/place.png';
//import IntoarcereImage from "./imagini/intoarcere.png";
//import LotImage from "./imagini/lot.png";
//import LotframeImage from "./imagini/lotframe.png";
//import ButtonaiciImage from "./imagini/buttonaici.png";
//import DetaliiImage from "./imagini/detalii.png";
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import { Link } from "react-router-dom";

const RezultateMeciuri = () => {
  return (
    <div className="app-container">
      <Meniusus />
      <div className="frame-overlay-meciuri">
        <img src={FrameImage} alt="" className="frame-meciuri" />
        <div className="words-club">
          <Link to="/calendarmeciuri" className="wordsmeciuri-list-link">
            CALENDAR MECIURI
          </Link>
          <Link
            to="/rezultatemeciuri"
            className="wordsmeciuri-list-link-rezultate"
          >
            REZULTATE MECIURI
          </Link>
        </div>
      </div>

      <div className="frame-overlay-club-rezultate">
        <img src={FrameImage} alt="" className="frame-club-rezultate" />
        <div className="words-lot-rezultate">
          <Link to="/clublot" className="wordslot-list-lot-rezultate">
            REZULTATE MECIURI
          </Link>
          <div className="rezultate-words-container">
            <div className="infomeci-container">
              <span>Data</span>
              <p className="additionalmeci-info">13/02/20</p>
              
            </div>
            <div className="infomeci-container">
              <span>Meciuri</span>
              <p className="additionalmeci-info">CSU Suceava vs Team B</p>
            </div>
            <div className="infomeci-container">
              <span>Ora</span>
              <p className="additionalmeci-info">20:30</p>
            </div>
            <div className="infomeci-container">
              <span>Scor</span>
              <p className="additionalmeci-info">45-30</p>
            </div>
          </div>
          
          
        </div>
      </div>
      <Meniujos />
    </div>
  );
};

export default RezultateMeciuri;
