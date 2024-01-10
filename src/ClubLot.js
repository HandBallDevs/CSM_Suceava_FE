import React from "react";
import "./ClubLot.css";
import FrameImage from "./imagini/frame.png";
//import IconImage from "./imagini/icon.png";
import CrossImage from "./imagini/cross.png";
//import PlaceImage from './imagini/place.png';
import JucatorImage from './imagini/jucator.png';
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
      <div className="frame-overlay-club-seniori">
        <img src={FrameImage} alt="" className="frame-club-seniori" />
        <div className="words-lot-seniori">
          <Link to="/clublot" className="wordslot-list-lot-seniori">
            LOT SENIORI
          </Link>
        </div>
      </div>

      <div className="player-info-senior">
        <img src={JucatorImage} alt="Player" className="player-image-senior" />
        <div className="player-detalii-senior">
          <div className="detalii-item-senior">
            <span className="detalii-label-senior-nume">NUME:</span>
            <span className="detalii-value-senior">Numele golanului</span>
          </div>
          <div className="detalii-item-senior">
            <span className="detalii-label-senior-nume">PRENUME:</span>
            <span className="detalii-value-senior">Prenume</span>
          </div>
          <div className="detalii-item-senior">
            <span className="detalii-label-senior">POZITIE DE JOC</span>
            <span className="detalii-value-senior">pozitie</span>
          </div>
          <div className="detalii-item-senior">
            <span className="detalii-label-senior">NATIONALITATE:</span>
            <span className="detalii-value-senior">nationalitate</span>
          </div>
          <div className="detalii-item-senior">
            <span className="detalii-label-senior">VÂRSTĂ:</span>
            <span className="detalii-value-senior">varsta</span>
          </div>
          <div className="detalii-item-senior">
            <span className="detalii-label-senior">ÎNĂLȚIME:</span>
            <span className="detalii-value-senior">inaltimea</span>
          </div>
        </div>
      </div>

      <Meniujos />
    </div>
  );
};

export default ClubLot;
