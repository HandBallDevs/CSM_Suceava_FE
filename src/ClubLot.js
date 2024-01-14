import React, { useState, useEffect } from "react";
import "./ClubLot.css";
import FrameImage from "./imagini/frame.png";

import JucatorImage from "./imagini/jucator.png";
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Jucator from "./Jucator";
import { motion } from "framer-motion";
const ClubLot = () => {
  const [playerData, setPlayerData] = useState(null);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const calculateAge = (dateString) => {
    const birthDate = new Date(dateString);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://handballdevsbe.azurewebsites.net/api/staff?tipLot=0"
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
            <Link to="/clublot" className="wordslot-list-lot-seniori-underline">
              LOT SENIORI
            </Link>
            <Link to="/clublotjuniori" className="wordslot-list-lot-seniori">
              LOT JUNIORI
            </Link>
            <Link to="/clublotcadeti" className="wordslot-list-lot-seniori">
              LOT CADETI
            </Link>
          </div>
        </div>
        {playerData && (
          <div className="jucator-container">
            {playerData.map((player, index) => (
              <Jucator
                key={index.id}
                poza={player.urlPoza}
                nume={player.nume}
                prenume={player.prenume}
                pozitie={player.post}
                nationalitate={player.nationalitate}
                varsta={calculateAge(player.dataNastere)}
                inaltimea={player.inaltime}
              />
            ))}
          </div>
        )}

        <Meniujos />
      </div>
    </animated.div>
  );
};

export default ClubLot;
