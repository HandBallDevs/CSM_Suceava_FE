import React from "react";
import "./Meniujos.css";
import LogoImage from "./imagini/logo.png";
import DividerImage from "./imagini/divider.png";
import FacebookImage from "./imagini/facebook.png";
import InstagramImage from "./imagini/instagram.png";
//import IconImage from './imagini/icon.png';
//import CrossImage from './imagini/cross.png';
//import PlaceImage from './imagini/place.png';
import CelestinImage from "./imaginisponsori/celestin.png";
import FitermanImage from "./imaginisponsori/fiterman.png";
import IuliusImage from "./imaginisponsori/iulius.png";
import MihuImage from "./imaginisponsori/mihu.png";
import OrasulImage from "./imaginisponsori/orasul.png";
import PepeneroImage from "./imaginisponsori/pepenero.png";
import SiglaImage from "./imaginisponsori/sigla.png";
import VivendiImage from "./imaginisponsori/vivendi.png";

const Meniujos = () => {
  const handleAcasaClick = () => {};
  const handleFacebookClick = () => {
    window.location.href = "https://www.facebook.com/CSUSuceava"; // Redirectionare facebook
  };

  const handleInstagramClick = () => {
    window.location.href = "https://www.instagram.com/csusuceava"; // Redirectionare instagram
  };

  return (
    <div className="app-container">
      

      <div className="frame-overlay">
        <div className="sponsor-container">
          <h2 className="sponsor-heading">Sponsorii noștrii</h2>
          <div className="image-row">
            <div className="image-item">
              <img
                src={FitermanImage}
                alt="Sponsor1"
                className="sponsor-image"
              />
              <p className="image-caption">
                FITERMAN
                <br />
                PHARMA
              </p>
            </div>
            <div className="image-item">
              <img src={SiglaImage} alt="Sponsor2" className="sponsor-image" />
              <p className="image-caption">
                UNIVERSITATEA
                <br />
                ȘTEFAN CEL MARE
                <br />
                SUCEAVA
              </p>
            </div>
            <div className="image-item">
              <img src={IuliusImage} alt="Sponsor3" className="sponsor-image" />
              <p className="image-caption">IULIUS MALL SUCEAVA</p>
            </div>
            <div className="image-item">
              <img src={OrasulImage} alt="Sponsor4" className="sponsor-image" />
              <p className="image-caption">
                SUCEAVA
                <br />
                ORAȘUL CETĂȚII DE SCAUN
              </p>
            </div>
            <div className="image-item">
              <img
                src={PepeneroImage}
                alt="Sponsor5"
                className="sponsor-image"
              />
              <p className="image-caption">PEPENERO</p>
            </div>
            <div className="image-item">
              <img src={MihuImage} alt="Sponsor6" className="sponsor-image" />
              <p className="image-caption">MIHU</p>
            </div>
            <div className="image-item">
              <img
                src={VivendiImage}
                alt="Sponsor7"
                className="sponsor-image"
              />
              <p className="image-caption">VIVENDI</p>
            </div>
            <div className="image-item">
              <img
                src={CelestinImage}
                alt="Sponsor8"
                className="sponsor-image"
              />
              <p className="image-caption">CELESTIN</p>
            </div>
          </div>
        </div>
      </div>
      <div className="editie">
        <p className="centered-text">Ediție sponsorizată</p>
        <p className="centered-text">2023-2024</p>
      </div>
      <div className="word-list-2">
        <p className="word-2">Acasă</p>
        <p className="word-2">Magazin</p>
        <p className="word-2">Club</p>
        <p className="word-2">Meciuri</p>
        <p className="word-2">Noutăți</p>
        <p className="word-2 contact-2">Contact</p>
        <img src={LogoImage} alt="" className="imagelogo-2" />
        <p className="word-2 csu-suceava2">CSU Suceava</p>
      </div>
      <img src={DividerImage} alt="" className="divider-image" />

      <div className="word-list-3">
        <p className="word-3">Urmărește-ne și pe </p>
        {/* Facebook Image with Click Event */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={FacebookImage}
            alt=""
            className="imagefacebook"
            onClick={handleFacebookClick}
          />
        </a>

        {/* Instagram Image with Click Event */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={InstagramImage}
            alt=""
            className="imageinstagram"
            onClick={handleInstagramClick}
          />
        </a>
        <p className="word-3 termen">Termen si conditii</p>
        <p className="word-3">2023 all rights reserved</p>
      </div>
    </div>
  );
};

export default Meniujos;
