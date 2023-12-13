
import React from 'react';
import './layout.css';
import LogoImage from './imagini/logo.png';
import CosImage from './imagini/cos.png';
import UserImage from './imagini/user.png';
import FrameImage from './imagini/frame.png';
import DividerImage from './imagini/divider.png';
import FacebookImage from './imagini/facebook.png';
import InstagramImage from './imagini/instagram.png';



const Layout = () => {
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
      <img src={FrameImage} alt="" className="frame-image" />

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

export default Layout;
