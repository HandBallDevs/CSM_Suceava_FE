import React, { useEffect, useState } from "react";
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
import Meci from "./RezultateMeciuriMeci";

const RezultateMeciuri = () => {
  const [RezultatData, setRezMeciData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://handballdevsbe.azurewebsites.net/api/meci?tipCampionat=0"
        );
        if (response.ok) {
          const data = await response.json();
          console.log("API Response:", data);
          setRezMeciData(data);
        } else {
          console.error("API Error:", response.statusText);
        }
      } catch (error) {
        console.error("API Error:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Meniusus />
      <div className="frame-overlay-meciuri">
        <img src={FrameImage} alt="" className="frame-meciuri" />
        <div className="words-club">
          <Link to="/calendarmeciuri" className="wordsmeciuri-list-link">
            CALENDAR MECIURI
          </Link>
          <div className="wordsmeciuri-list-link-calendar">REZULTATE MECIURI</div>
        </div>
      </div>

      <div className="frame-overlay-club-rezultate">
        <img src={FrameImage} alt="" className="frame-club-rezultate" />

        <div className="words-lot-rezultate">
        <div className="wordslot-list-lot-rezultate">
  REZULTATE MECIURI
</div>

          {RezultatData.slice(0, 10).map((rezultat, index) => (
            <Meci
              key={index}
              data={new Date(rezultat.data).toLocaleDateString()}
              meciul={`CSU Suceava vs ${rezultat.numeAdversar}`}
              locatia={rezultat.locatia}
              scorul={`${rezultat.scorCSUSV} - ${rezultat.scorAdversar}`}
            />
          ))}
        </div>
      </div>
      <Meniujos />
    </div>
  );
};

export default RezultateMeciuri;
