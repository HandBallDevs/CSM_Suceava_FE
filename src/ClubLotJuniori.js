import React, { useState, useEffect } from "react";
import "./ClubLot.css";
import FrameImage from "./imagini/frame.png";
//import IconImage from "./imagini/icon.png";
//import CrossImage from "./imagini/cross.png";
//import PlaceImage from './imagini/place.png';
import JucatorImage from "./imagini/jucator.png";
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Jucator from "./Jucator";

const ClubLotJuniori = () => {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://handballdevsbe.azurewebsites.net/api/staff"
        );
        if (response.ok) {
          const data = await response.json();
          console.log("API Response:", data);
          setPlayerData(data);
        } else {
          console.error("API Error:", response.statusText);
        }
      } catch (error) {
        console.error("API Error:", error.message);
      }
    };

    fetchData();
  }, []);

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={springProps}>
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
            <Link to="/clublotjuniori" className="wordslot-list-lot-seniori-underline">
              LOT JUNIORI
            </Link>
            <Link to="/clublotcadeti" className="wordslot-list-lot-seniori">
              LOT CADETI
            </Link>
          </div>
        </div>
        <div className="jucator-container">
          <Jucator />
          <Jucator />
          <Jucator />
          <Jucator />
          <Jucator />
          <Jucator />
        </div>

        <Meniujos />
      </div>
    </animated.div>
  );
};

export default ClubLotJuniori;
