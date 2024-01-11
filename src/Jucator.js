import React from "react";
import "./Jucator.css";
import FrameImage from "./imagini/frame.png";
//import IconImage from "./imagini/icon.png";
//import CrossImage from "./imagini/cross.png";
//import PlaceImage from './imagini/place.png';
import JucatorImage from './imagini/jucator.png';
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import { Link } from "react-router-dom";




const Jucator = () => {



 
  return (
  
   

      <div className="player-info-senior">
        <img src={JucatorImage} alt="Player" className="player-image-senior" />
        <div className="player-detalii-senior">
          <div className="detalii-item-senior">
            <span className="detalii-label-senior-nume">NUME:</span>
            <span className="detalii-value-senior">nume</span>
          </div>
          <div className="detalii-item-senior">
            <span className="detalii-label-senior-nume">PRENUME:</span>
            <span className="detalii-value-senior">prenume</span>
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
      
   
  );
};

export default Jucator;
