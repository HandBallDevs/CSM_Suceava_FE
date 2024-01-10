import React from "react";
import "./DetaliiClub.css";
import FrameImage from "./imagini/frame.png";
//import IconImage from "./imagini/icon.png";
import CrossImage from "./imagini/cross.png";
//import PlaceImage from './imagini/place.png';
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import CampionatImage from './imagini/Campionat.png';
import CupaRomanieiImage from './imagini/CupaRomaniei.png';
import ParticipariEuropeneImage from './imagini/ParticipariEuropene.png';
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
          Clubul Sportiv Universitar Suceava (CSU Suceava) vizează pentru
          sezonul 2023-2024 performanțe remarcabile în Liga Națională și Cupa
          României, aspirând să ocupe primele poziții în clasament și să
          avanseze în fazele superioare ale competițiilor. Echipa dorește să
          dezvolte continuu jucătorii, să implice suporterii și să construiască
          parteneriate strategice pentru susținerea financiară. Integrarea
          tehnologiei în antrenament și comunicarea eficientă vor completa o
          cultură organizațională bazată pe valori precum profesionalismul și
          respectul. CSU Suceava își propune să devină o prezență marcantă și
          respectată în peisajul handbalistic românesc, evidențiindu-se prin
          performanțe de excepție și implicarea activă în dezvoltarea sportului
          la nivel național.
        </p>
      </div>

      <div className="contenttrofee">
        <h1 className="titlutrofee">TROFEELE CLUBULUI</h1>
        <div className="trofee-container">
          <div className="trofee-item">
            <p className="trofee-word">
              CAMPIONATUL
              <br /> ROMÂNIEI
            </p>
            <img src={CampionatImage} alt="" className="trofee-image" />
          </div>
          <div className="trofee-item">
            <p className="trofee-word">CUPA <br />  ROMÂNIEI</p>
            <img src={CupaRomanieiImage} alt="" className="trofee-image" />
          </div>
          <div className="trofee-item">
            <p className="trofee-word">PARTICIPĂRI  <br /> EUROPENE</p>
            <img src={ParticipariEuropeneImage} alt="" className="trofee-image" />
          </div>
        </div>
      </div>

      <Meniujos />
    </div>
  );
};

export default DetaliiClub;
