
import React from 'react';
import './Noutati.css';

import LogoImage from './imagini/logo.png';
import CosImage from './imagini/cos.png';
import UserImage from './imagini/user.png';
import FrameImage from './imagini/frame.png';
import DividerImage from './imagini/divider.png';
import frame_noutati from './imagini/frame_noutati.png';
import FacebookImage from './imagini/facebook.png';
import InstagramImage from './imagini/instagram.png';
import Stire1 from './imagini/stire1.png';
import Stire2 from './imagini/stire2.png';
import Clasament from './imagini/clasament.png';
import Meciuri_viitoare from './imagini/meciuri_viitoare.png';
import PlaceImage from './imagini/place.png';



const Noutăti = () => {
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
     
      
      <div class="title">
      <img src={FrameImage} alt="" className="frame-image" />
      <div class="label-container">
          <label  class="label_title">Noutăți</label>
          <div class="row-title">
            <label  class="label_subtitle">Acasa</label>
            <label  class="label_subtitle">/</label>
            <label  class="label_subtitle_noutati">Noutăți</label>
          </div>
      </div>
      </div>
   
     
      <div class="container_noutati">
        <img src={frame_noutati} alt="" class="frame_noutati-image"/>
        
        <div class="main-news-container">
        <div class="form-row-container">
          <label for="label1" class="label">Categorie:</label>
          <input type="text" id="label1" class="textbox"/>
          <label for="label2" class="label">Ordine:</label>
          <input type="text" id="label2" class="textbox"/>
          <button class="button">FILTREAZA</button>
        </div>
        <div class="container">
          <div class="news-container">
          <img src={Stire1} alt="" class="News-image"/>
          <img src={Stire2} alt="" class="News-image2"/>
          </div>
          <div class="news-container2">
          <label for="labelMeciuri" class="news-labels">Urmatoarele Meciuri:</label>
          <img src={Meciuri_viitoare} alt="" class="Meciuri_viitoare"/>
          <label for="labelClasament" class="news-labels">Clasament:</label>
           <img src={Clasament} alt="" class="Clasament"/>
          
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

export default Noutăti;
