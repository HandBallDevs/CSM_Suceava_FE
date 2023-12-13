import React from "react";
import "./ClubLot.css";
import FrameImage from "./imagini/frame.png";
//import IconImage from "./imagini/icon.png";
//import CrossImage from './imagini/cross.png';
//import PlaceImage from './imagini/place.png';
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import { Link } from 'react-router-dom';
const ClubLot = () => {
  return (
    <div className="app-container">
     <Meniusus applyUnderlineStyle={true} />

      <div className="frame-overlay-club">
        <img src={FrameImage} alt="" className="frame-club" />
        <div className="words-lot">
          <p>LOTUL CLUBULUI</p>
          <p>DETALII CLUB</p>
          <p>CLASAMENT FRH</p>
        </div>
      
      </div>
      <iframe
          title="Background iFrame"
          src="https://frh.ro/clasament.php?id=552#clasament" 
           style={{ display: 'block', margin: '0 auto' }}
          className="icon-clasament"
        />
      <Meniujos />
    </div>
  );
};

export default ClubLot;
