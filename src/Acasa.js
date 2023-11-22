
import React from 'react';
import './Acasa.css';
import LogoImage from './imagini/logo.png';
import CosImage from './imagini/cos.png';
import UserImage from './imagini/user.png';
import FrameImage from './imagini/frame.png';
import DividerImage from './imagini/divider.png';
import FacebookImage from './imagini/facebook.png';
import InstagramImage from './imagini/instagram.png';
import IconImage from './imagini/icon.png';
import CrossImage from './imagini/cross.png';
import PlaceImage from './imagini/place.png';




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
      <img src={IconImage} alt="" className="icon-image" />
      <div className="frame-overlay">
        <img src={FrameImage} alt="" className="frame-image" />
        <div className="word-list-4">
          <p className="word-4 ultimele">Ultimele Noutăți</p>
          <div className="news-container">
            <div className="news-item">
              <p className="word-4 meciul">Meci decisiv pentru CSU Suceava</p>
              <img src={CrossImage} alt="" className="imagecross" />
            </div>
            <div className="news-item">
              <p className="word-4 intoarcere">Întoarcere de situație</p>
              <img src={CrossImage} alt="" className="imagecross" />
            </div>
            <div className="news-item">
              <p className="word-4 noile">Noile calificări</p>
              <img src={CrossImage} alt="" className="imagecross" />
            </div>
          </div>
        </div>
      </div>
      <div className="sponsor-container">
      <h2 className="sponsor-heading">Sponsorii noștrii</h2>
      <div className="image-row">
        <img src={PlaceImage} alt="Place 1" className="place-image" />
        <img src={PlaceImage} alt="Place 2" className="place-image" />
        <img src={PlaceImage} alt="Place 3" className="place-image" />
        <img src={PlaceImage} alt="Place 4" className="place-image" />
        <img src={PlaceImage} alt="Place 5" className="place-image" />
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
