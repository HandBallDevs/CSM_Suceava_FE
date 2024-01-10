import React from "react";
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
import { useSpring, animated } from 'react-spring';
const Acasa = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <animated.div style={springProps}>

    <div className="app-container">
      <Meniusus />

      <img src={LotImage} alt="" className="lot-image" />

      <div className="frame-overlay">
        <img src={FrameImage} alt="" className="frame-noutati" />
        <div className="word-list-4">
          <p className="word-4 ultimele">Ultimele Noutăți</p>
          <div className="noutati-container">
            <div className="news-item">
              <p className="word-4 meciul">Meci decisiv pentru CSU Suceava</p>
              <img src={IntoarcereImage} alt="" className="imageintoarcere" />
            </div>
            <div className="news-item">
              <p className="word-4 intoarcere">Întoarcere de situație</p>
              <img src={IntoarcereImage} alt="" className="imageintoarcere" />
            </div>
            <div className="news-item">
              <p className="word-4 noile">Noile calificări</p>
              <img src={IntoarcereImage} alt="" className="imageintoarcere" />
            </div>
          </div>
        </div>

        <div className="frame-rezultate">
          <img src={FrameImage} alt="" className="framerezultate" />
          <div className="word-list-6">
            <p className="word-6 rezultate">REZULTATE MECIURI</p>
            <div className="news-rezultate">
              <div className="image-with-text">
                <img src={LogoImage} alt="" className="rezultate-image" />
                <p className="text-between-images">CSU SUCEAVA</p>
              </div>
              <div className="image-with-text">
                <p className="text-between-images2">10-20</p>
                <img src={DetaliiImage} alt="" className="rezultate-image2" />
              </div>
              <div className="image-with-text">
                <img src={LogoImage} alt="" className="rezultate-image" />
                <p className="text-between-images">CSU SUCEAVA</p>
              </div>

              <div className="image-with-text">
                <img src={LogoImage} alt="" className="rezultate-image" />
                <p className="text-between-images">CSU SUCEAVA</p>
              </div>
              <div className="image-with-text">
                <p className="text-between-images2">10-20</p>
                <img src={DetaliiImage} alt="" className="rezultate-image2" />
              </div>
              <div className="image-with-text">
                <img src={LogoImage} alt="" className="rezultate-image" />
                <p className="text-between-images">CSU SUCEAVA</p>
              </div>

              <div className="image-with-text">
                <img src={LogoImage} alt="" className="rezultate-image" />
                <p className="text-between-images">CSU SUCEAVA</p>
              </div>
              <div className="image-with-text">
                <p className="text-between-images2">10-20</p>
                <img src={DetaliiImage} alt="" className="rezultate-image2" />
              </div>
              <div className="image-with-text">
                <img src={LogoImage} alt="" className="rezultate-image" />
                <p className="text-between-images">CSU SUCEAVA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-viitoare">
          <img src={FrameImage} alt="" className="framerezultate" />
          <div className="word-list-6">
            <p className="word-6 rezultate">Meciuri Viitoare</p>
            <div className="news-rezultate">
              <div className="image-with-text">
                <img src={LogoImage} alt="" className="rezultate-image" />
                <p className="text-between-images">CSU SUCEAVA</p>
              </div>
              <div className="image-with-text">
                <p className="text-between-images2">VS</p>
                <img src={DetaliiImage} alt="" className="detalii-image2" />
              </div>
              <div className="image-with-text">
                <img src={LogoImage} alt="" className="rezultate-image" />
                <p className="text-between-images">CSU SUCEAVA</p>
              </div>

              <div className="image-with-text">
                <img src={LogoImage} alt="" className="rezultate-image" />
                <p className="text-between-images">CSU SUCEAVA</p>
              </div>
              <div className="image-with-text">
                <p className="text-between-images2">VS</p>
                <img src={DetaliiImage} alt="" className="detalii-image2" />
              </div>
              <div className="image-with-text">
                <img src={LogoImage} alt="" className="rezultate-image" />
                <p className="text-between-images">CSU SUCEAVA</p>
              </div>

              <div className="image-with-text">
                <img src={LogoImage} alt="" className="rezultate-image" />
                <p className="text-between-images">CSU SUCEAVA</p>
              </div>
              <div className="image-with-text">
                <p className="text-between-images2">VS</p>
                <img src={DetaliiImage} alt="" className="detalii-image2" />
              </div>
              <div className="image-with-text">
                <img src={LogoImage} alt="" className="rezultate-image" />
                <p className="text-between-images">CSU SUCEAVA</p>
              </div>
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
              <img src={ButtonaiciImage} alt="" className="imageaici" />
            </div>
          </div>
        </div>
      </div>
      <Meniujos />
    </div>
    </animated.div>
  );
};

export default Acasa;
