import React from "react";
import "./DetaliiClub.css";
import FrameImage from "./imagini/frame.png";
//import IconImage from "./imagini/icon.png";
import CrossImage from './imagini/cross.png';
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
      <div className="istoriaclubului">
        <h1 className="istoriaclub">ISTORIA CLUBULUI</h1>
        <p className="text-istorie">
          CSU Suceava (Clubul Sportiv Universitar din Suceava) este o echipă de
          handbal din municipiul Suceava, România. Cea mai mare performanță a
          echipei este accederea în finala Cupei Challenge, pierdută în fața
          echipei CS UCM Reșița. În competițiile interne, CSU Suceava a câștigat
          medalia de bronz în Liga Națională, în sezonul 2010-2011, s-a clasat
          pe locul III în Cupa României, în sezonul 2022-2023.
        </p>
      </div>

      <div className="istoriaclubului">
        <h1 className="istoriaclub">VIZIUNEA CLUBULUI</h1>
        <p className="text-istorie">
          CSU Suceava (Clubul Sportiv Universitar din Suceava) este o echipă de
          handbal din municipiul Suceava, România. Cea mai mare performanță a
          echipei este accederea în finala Cupei Challenge, pierdută în fața
          echipei CS UCM Reșița. În competițiile interne, CSU Suceava a câștigat
          medalia de bronz în Liga Națională, în sezonul 2010-2011, s-a clasat
          pe locul III în Cupa României, în sezonul 2022-2023.
        </p>
      </div>

      
        <div className="contenttrofee">
          <h1 className="titlutrofee">TROFEELE CLUBULUI</h1>
          <div className="trofee-container">
          <img src={CrossImage} alt="" className="trofee-image" />
          <img src={CrossImage} alt="" className="trofee-image" />
          <img src={CrossImage} alt="" className="trofee-image" />
          </div>
          <p className="long-text">{/* Your long text goes here */}</p>
        </div>
  

      <Meniujos />
    </div>
  );
};

export default DetaliiClub;
