
import React from 'react';
import './Acasa.css';
import LogoImage from './imagini/logo.png';
import CosImage from './imagini/cos.png';
import UserImage from './imagini/user.png';
import FrameImage from './imagini/frame.png';
import DividerImage from './imagini/divider.png';
import FacebookImage from './imagini/facebook.png';
import InstagramImage from './imagini/instagram.png';
//import IconImage from './imagini/icon.png';
//import CrossImage from './imagini/cross.png';
//import PlaceImage from './imagini/place.png';
import IntoarcereImage from './imagini/intoarcere.png';
import LotImage from './imagini/lot.png';
import CelestinImage from './imaginisponsori/celestin.png';
import FitermanImage from './imaginisponsori/fiterman.png';
import IuliusImage from './imaginisponsori/iulius.png';
import MihuImage from './imaginisponsori/mihu.png';
import OrasulImage from './imaginisponsori/orasul.png';
import PepeneroImage from './imaginisponsori/pepenero.png';
import SiglaImage from './imaginisponsori/sigla.png';
import VivendiImage from './imaginisponsori/vivendi.png';
import LotframeImage from './imagini/lotframe.png';
import ButtonaiciImage from './imagini/buttonaici.png';
import DetaliiImage from './imagini/detalii.png';


const Acasa = () => {
  const handleAcasaClick = () => {
   
  };
  const handleFacebookClick = () => {
    window.location.href = 'https://www.facebook.com/CSUSuceava'; // Redirectionare facebook
  };

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/csusuceava'; // Redirectionare instagram
  };


  return (
    <div className="app-container">
      <div className="word-list">
        <img src={LogoImage} alt="" className="imagelogo" />
        <p className="word csu-suceava">CSU Suceava</p>
        <p className="word acasa" onClick={handleAcasaClick}>
          Acasă
        </p>
        <p className="word">Magazin</p>
        <p className="word">Club</p>
        <p className="word">Meciuri</p>
        <p className="word">Noutăți</p>
        <p className="word contact">Contact</p>
        <p className="word csu-login">Login</p>
        <img src={UserImage} alt="" className="imageuser" />
        <p className="word csu-cos">Coș</p>
        <img src={CosImage} alt="" className="imagecos" />
      </div>
      <img src={LotImage} alt="" className="lot-image" />
      <div className="frame-overlay">
        <img src={FrameImage} alt="" className="frame-image" />
        <div className="word-list-4">
          <p className="word-4 ultimele">Ultimele Noutăți</p>
          <div className="news-container">
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










        <div className="sponsor-container">
      <h2 className="sponsor-heading">Sponsorii noștrii</h2>
      <div className="image-row">
        <div className="image-item">
          <img src={FitermanImage} alt="Sponsor1" className="sponsor-image" />
          <p className="image-caption">
    FITERMAN<br />
    PHARMA
  </p>
        </div>
        <div className="image-item">
          <img src={SiglaImage} alt="Sponsor2" className="sponsor-image" />
          <p className="image-caption">
    UNIVERSITATEA<br />
    ȘTEFAN CEL MARE<br/>
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
    SUCEAVA<br />
    ORAȘUL CETĂȚII DE SCAUN
  </p>
        </div>
        <div className="image-item">
          <img src={PepeneroImage} alt="Sponsor5" className="sponsor-image" />
          <p className="image-caption">PEPENERO</p>
        </div>
        <div className="image-item">
          <img src={MihuImage} alt="Sponsor6" className="sponsor-image" />
          <p className="image-caption">MIHU</p>
        </div>
        <div className="image-item">
          <img src={VivendiImage} alt="Sponsor7" className="sponsor-image" />
          <p className="image-caption">VIVENDI</p>
        </div>
        <div className="image-item">
          <img src={CelestinImage} alt="Sponsor8" className="sponsor-image" />
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
         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={FacebookImage} alt="" className="imagefacebook" onClick={handleFacebookClick} />
        </a>

        {/* Instagram Image with Click Event */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={InstagramImage} alt="" className="imageinstagram" onClick={handleInstagramClick} />
        </a>
        <p className="word-3 termen">Termen si conditii</p>
        <p className="word-3">2023 all rights reserved</p>
      </div>
    </div>
  );
};

export default Acasa;
