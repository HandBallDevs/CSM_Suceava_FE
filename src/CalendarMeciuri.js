import React from "react";
import "./CalendarMeciuri.css";
import LogoImage from "./imagini/logo.png";
import FrameImage from "./imagini/frame.png";
//import IconImage from './imagini/icon.png';
//import CrossImage from './imagini/cross.png';
//import PlaceImage from './imagini/place.png';
//import IntoarcereImage from "./imagini/intoarcere.png";
//import LotImage from "./imagini/lot.png";
//import LotframeImage from "./imagini/lotframe.png";
//import ButtonaiciImage from "./imagini/buttonaici.png";
import DetaliiImage from "./imagini/detalii.png";
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Backend from "./Backend";
import BackAdaugaStaff from "./BackAdaugaStaff";
import BackAdaugaMeci from "./BackAdaugaMeci";

const CalendarMeciuri = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={springProps}>
      <div className="app-container">
        <Meniusus />
        <BackAdaugaMeci />


        <div className="frame-overlay-meciuri">
          <img src={FrameImage} alt="" className="frame-meciuri" />
          <div className="words-club">
            <Link
              to="/calendarmeciuri"
              className="wordsmeciuri-list-link-calendar"
            >
              CALENDAR MECIURI
            </Link>
            <Link to="/rezultatemeciuri" className="wordsmeciuri-list-link">
              REZULTATE MECIURI
            </Link>
          </div>
        </div>
        <div className="frame-urmatorul">
          <img src={FrameImage} alt="" className="frameurmatorul" />
          <div className="word-list-urmatorul">
            <p className="word-urmatorul rezultate">URMATORUL MECI</p>
            <div className="news-rezultate2">
              <div className="image-with-text2">
                <p className="text-deasupra-viitoare">
                  DATA: <br />
                  02/11/2023
                </p>
                <img src={LogoImage} alt="" className="viitoare-image" />
                <p className="text-sub-club">CSU SUCEAVA</p>
              </div>
              <div className="image-with-text2">
                <p className="text-deasupra-ora">
                  LIGA
                  <br /> ZIMBRILOR
                </p>
                <p className="text-deasupra-vs">17:30</p>
                <p className="text-between-viitoare">VS</p>

                <img src={DetaliiImage} alt="" className="detalii-image4" />
              </div>
              <div className="image-with-text2">
                <p className="text-deasupra-viitoare">
                  LOCATIA: <br /> SALA POLIVALENTA
                </p>
                <img src={LogoImage} alt="" className="viitoare-image" />
                <p className="text-sub-club">CSU SUCEAVA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-viitoare2">
          <img src={FrameImage} alt="" className="frameviitoare2" />
          <div className="word-list-viitoare">
            <p className="word-viitoare rezultate">MECIURILE VIITOARE</p>
            <div className="news-rezultate2">
              <div className="image-with-text2">
                <p className="text-deasupra-viitoare">
                  DATA: <br />
                  02/11/2023
                </p>
                <img src={LogoImage} alt="" className="viitoare-image" />
                <p className="text-sub-club">CSU SUCEAVA</p>
              </div>
              <div className="image-with-text2">
                <p className="text-deasupra-ora">
                  LIGA
                  <br /> ZIMBRILOR
                </p>
                <p className="text-deasupra-vs">17:30</p>
                <p className="text-between-viitoare">VS</p>

                <img src={DetaliiImage} alt="" className="detalii-image3" />
              </div>
              <div className="image-with-text2">
                <p className="text-deasupra-viitoare">
                  LOCATIA: <br /> SALA POLIVALENTA
                </p>
                <img src={LogoImage} alt="" className="viitoare-image" />
                <p className="text-sub-club">CSU SUCEAVA</p>
              </div>

              <div className="image-with-text2">
                <p className="text-deasupra-viitoare">
                  DATA: <br /> 02/11/2023
                </p>
                <img src={LogoImage} alt="" className="viitoare-image" />
                <p className="text-sub-club">CSU SUCEAVA</p>
              </div>
              <div className="image-with-text2">
                <p className="text-deasupra-ora">
                  LIGA
                  <br /> ZIMBRILOR
                </p>
                <p className="text-deasupra-vs">17:30</p>
                <p className="text-between-viitoare">VS</p>
                <img src={DetaliiImage} alt="" className="detalii-image3" />
              </div>
              <div className="image-with-text2">
                <p className="text-deasupra-viitoare">
                  LOCATIA: <br /> SALA POLIVALENTA
                </p>
                <img src={LogoImage} alt="" className="viitoare-image" />
                <p className="text-sub-club">CSU SUCEAVA</p>
              </div>
            </div>
          </div>
        </div>

        <Meniujos />
        <Backend />
      </div>
    </animated.div>
  );
};

export default CalendarMeciuri;
