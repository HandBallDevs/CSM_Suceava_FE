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

      <div className="frame-rezultate-meciuri">
        <img src={FrameImage} alt="" className="framerezultate-meciuri" />
        <div className="word-list-rezultate-meciuri">
          <p className="word-rezultate-meciuri">REZULTATE MECIURI</p>
        </div>
      </div>

      <Meniujos />
    </div>
  );
};

export default RezultateMeciuri;
