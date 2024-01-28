import React, { useEffect, useState } from "react";
import "./Acasa.css";
import LogoImage from "./imagini/logo.png";
import FrameImage from "./imagini/frame.png";
//import IconImage from './imagini/icon.png';
//import CrossImage from './imagini/cross.png';
//import PlaceImage from './imagini/place.png';
import IntoarcereImage from "./imagini/intoarcere.png";
import LotImage from "./imagini/lot.png";
import LotframeImage from "./imagini/lotframe.png";
import ButtonaiciImage from "./imagini/buttonaici.png";
import DetaliiImage from "./imagini/detalii.png";
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

const Acasa = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const [RezMeciData, setRezMeciData] = useState([]);
  const [ViMeciData, setViMeciData] = useState([]);
  const [StiriData, setStiriData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://handballdevsbe.azurewebsites.net/api/meci?statusMeci=0&tipCampionat=0"
        );
        if (response.ok) {
          const data = await response.json();
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
          "https://handballdevsbe.azurewebsites.net/api/meci?statusMeci=1&tipCampionat=0"
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://handballdevsbe.azurewebsites.net/api/stire");
        if (response.ok) {
          const data = await response.json();
  
        
          const sortedData = data.sort((a, b) => b.dataPostare.localeCompare(a.dataPostare));
  
          console.log("Sorted Data:", sortedData);
  
          setStiriData(sortedData);
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
    <animated.div style={springProps}>
      <div className="app-container">
        <Meniusus />

        <img src={LotImage} alt="" className="lot-image" />

        <div className="frame-overlay5">
          <img src={FrameImage} alt="" className="frame-noutati" />
          <div className="word-list-4">
            <p className="word-4 ultimele">Ultimele Noutăți</p>
            <div className="noutati-container">
              {StiriData.slice(0, 3).map((item, index) => (
                <div className="news-item" key={index}>
                  <p className="word-4 meciul">{item.titlu}</p>
                  <img src={item.urlPoza} alt="" className="imageintoarcere" />
                </div>
              ))}
            </div>
          </div>

          <div className="frame-rezultate">
            <img src={FrameImage} alt="" className="framerezultate" />
            <div className="word-list-6">
              <p className="word-6 rezultate">REZULTATE MECIURI</p>
              <div className="news-rezultate">
                {RezMeciData.slice(0, 3).map((item, index) => (
                  <>
                    <div className="image-with-text" key={index}>
                      <img src={LogoImage} alt="" className="rezultate-image" />
                      <p className="text-between-images">{"CSU SUCEAVA"}</p>
                    </div>
                    <div className="image-with-text" key={index}>
                      <p className="text-between-images2">
                        {item.scorCSUSV} - {item.scorAdversar}
                      </p>
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Link to="/rezultatemeciuri">
                          <img
                            src={DetaliiImage}
                            alt=""
                            className="rezultate-image2"
                          />
                        </Link>
                      </motion.div>
                    </div>
                    <div className="image-with-text" key={index}>
                      <img
                        src={item.urlPoza}
                        alt=""
                        className="rezultate-image"
                      />
                      <p className="text-between-images">{item.numeAdversar}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="frame-viitoare">
            <img src={FrameImage} alt="" className="framerezultate" />
            <div className="word-list-6">
              <p className="word-6 rezultate">Meciuri Viitoare</p>
              <div className="news-viitoare">
                {ViMeciData.slice(0, 3).map((item, index) => (
                  <>
                    <div className="image-with-text" key={index}>
                      <img src={LogoImage} alt="" className="rezultate-image" />
                      <p className="text-between-images">{"CSU SUCEAVA"}</p>
                    </div>
                    <div className="image-with-text" key={index}>
                      <p className="text-between-images2">{"VS"}</p>
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Link to="/calendarmeciuri">
                          <img
                            src={DetaliiImage}
                            alt=""
                            className="detalii-image2"
                          />
                        </Link>
                      </motion.div>
                    </div>
                    <div className="image-with-text" key={index}>
                      <img
                        src={item.urlPoza}
                        alt=""
                        className="rezultate-image"
                      />
                      <p className="text-between-images">{item.numeAdversar}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="frame-overlay2">
          <img src={LotframeImage} alt="" className="lot-frame" />
          <div className="word-list-5">
            <p className="word-5 intalneste">Intâlnește echipa de seniori</p>
            <div className="news-container2">
              <div className="news-item2">
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <Link to="/clublot">
                    <img src={ButtonaiciImage} alt="" className="imageaici" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Meniujos />
    </animated.div>
  );
};

export default Acasa;
