import React, { useEffect, useState } from "react";
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



const CalendarMeciuri = () => {
  const [RezultatData, setRezMeciData] = useState([]);
  const [ViMeciData, setViMeciData] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://handballdevsbe.azurewebsites.net/api/meci?statusMeci=0&tipCampionat=0"
        );
        if (response.ok) {
          const data = await response.json();
           // Sort the data by data in descending order
           const sortedData = data.sort((a, b) => b.data.localeCompare(a.data));

           console.log("Sorted Data:", sortedData);
          setRezMeciData(sortedData);
        } else {
          console.error("API Error:", response.statusText);
        }
      } catch (error) {
        console.error("API Error:", error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://handballdevsbe.azurewebsites.net/api/meci?statusMeci=1&tipCampionat=1"
        );
        if (response.ok) {
          const data = await response.json();
          const sortedData = data.sort((a, b) => b.data.localeCompare(a.data));

          console.log("Sorted Data:", sortedData);
          setViMeciData(sortedData);
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
              {RezultatData.slice(0, 1).map((item, index) => (
                <>
                  <div className="image-with-text2" key={index}>
                    <p className="text-deasupra-viitoare">
                      DATA: <br />
                      {new Date(item.data).toLocaleDateString()}
                    </p>
                    <img src={LogoImage} alt="" className="viitoare-image" />
                    <p className="text-sub-club">{item.clubName}</p>
                  </div>
                  <div className="image-with-text2" key={index}>
                    <p className="text-deasupra-ora">
                      {`EDITIA `}
                      <br /> {item.editia}
                    </p>
                    <p className="text-deasupra-vs">{item.ora}</p>
                    <p className="text-between-viitoare">VS</p>
                  </div>
                  <div className="image-with-text2" key={index}>
                    <p className="text-deasupra-viitoare">
                      LOCATIA: <br /> {item.locatia}
                    </p>
                    <img src={item.urlPoza} alt="" className="viitoare-image" />
                
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="frame-viitoare2">
          <img src={FrameImage} alt="" className="frameviitoare2" />
          <div className="word-list-viitoare">
            <p className="word-viitoare rezultate">MECIURILE VIITOARE</p>
            <div className="news-rezultate2">
            {ViMeciData.slice(1, 4).map((item, index) => (
                <>
                  <div className="image-with-text2" key={index}>
                    <p className="text-deasupra-viitoare">
                      DATA: <br />
                      {new Date(item.data).toLocaleDateString()}
                    </p>
                    <img
                      src={LogoImage}
                      alt=""
                      className="viitoare-image"
                    />
                    <p className="text-sub-club">{item.clubName}</p>
                  </div>
                  <div className="image-with-text2" key={index}>
                    <p className="text-deasupra-ora">
                      EDITIA
                      <br /> {item.editia}
                    </p>
                    <p className="text-between-viitoare">VS</p>
                  </div>
                  <div className="image-with-text2" key={index}>
                    <p className="text-deasupra-viitoare">
                      LOCATIA: <br /> {item.locatia}
                    </p>
                    <img
                      src={item.urlPoza}
                      alt=""
                      className="viitoare-image"
                    />
                    
                  </div>
                </>
              ))}
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
