
import React from 'react';
import './Contact.css';
import LogoImage from './imagini/logo.png';
import CosImage from './imagini/cos.png';
import UserImage from './imagini/user.png';
import FrameImage from './imagini/frame.png';
import DividerImage from './imagini/divider.png';
import FacebookImage from './imagini/facebook.png';
import InstagramImage from './imagini/instagram.png';
import ContactImage from './imagini/Contact__header.png';
import CallIMG from './imagini/CallIMG.png';
import MapIMG from './imagini/MapIMG.png';
import DirectorIMG from './imagini/DirectorIMG.png';
import CelestinImage from './imaginisponsori/celestin.png';
import FitermanImage from './imaginisponsori/fiterman.png';
import IuliusImage from './imaginisponsori/iulius.png';
import MihuImage from './imaginisponsori/mihu.png';
import OrasulImage from './imaginisponsori/orasul.png';
import PepeneroImage from './imaginisponsori/pepenero.png';
import SiglaImage from './imaginisponsori/sigla.png';
import VivendiImage from './imaginisponsori/vivendi.png';



const Noutati = () => {
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
          <label  class="label_title">Contact</label>
          <div class="row-title">
            <label  class="label_subtitle">Acasa</label>
            <label  class="label_subtitle">/</label>
            <label  class="label_subtitle_Contact">Contact</label>
          </div>
      </div>
      </div>
      
      
      <div class="Contact_Title"> 
          <img src={ContactImage} alt="" className="contact_image" />
          <label  class="label_t">Formular de contact</label>
        </div>
        <label  class="label_Astept">Așteptăm mesajul tău !</label>
        <div class="entry_layer"> 
        <div class="row_label"> 
        <label class="Entry_label" for="nume">Nume*</label>
        <label class="Entry_label" for="email">Email*</label>
        <label class="Entry_label" for="subiect">Subiect</label>
        </div>
        <div class="row_textbox"> 
        <input type="text" id="nume" name="nume" class="textbox" placeholder="Numele intreg..."/>
        <input type="text" id="email" name="email" class="textbox" placeholder="Email..."/>
        <input type="text" id="subiect" name="subiect" class="textbox" placeholder="Subiect...."/>
        </div>
        <div class="row_label"> 
        <label class="Entry_label" for="nume">Mesaj*</label>
        </div>
        <div class="row_textbox"> 
        <input type="text" id="nume" name="nume" class="textbox_mesaj" />
        </div>
        <div class="row_textbox"> 
        <button class="button">Trimite Mesaj</button>
        </div>
        </div>
        <div class="contact"> 
        <div class="row_contact_1"> 
          <div class="column_contact"> 
            <div class="row_contact"> 
              <img src={DirectorIMG} alt="" className="contact-img" />
              <a href="https://usv.ro/team/petru-ghervan/" >
  <label class="contact_label">Director club: prof. univ. dr. Petru GHERVAN</label>
</a>
            </div>
            <div class="row_contact"> 
              <img src={CallIMG} alt="" className="contact-img" />
              <a href="tel:+40230522819" data-phone-number="0230 522819">
              <label class="contact_label">0230522819</label>
              </a>
              <label class="contact_label">, </label>
              <a href="tel:+40741221409" data-phone-number="0741221409">
              <label class="contact_label">0741221409</label>
              </a>
            </div>
          </div>
          <div class="row_contact"> 
            <img src={MapIMG} alt="" className="contact-img1" />
            <a href="https://www.google.com/maps/place/Strada+Universit%C4%83%C8%9Bii+13,+Suceava/@47.6389536,26.2450697,17z/data=!3m1!4b1!4m6!3m5!1s0x4734fc2d44f723cb:0x817fff7ee5ddcc1c!8m2!3d47.63895!4d26.24765!16s%2Fg%2F11cs7c75db?entry=ttu">
  <label class="contact_label" >Adresa: str. Universităţii, nr. 13</label>
</a>
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
      
    <div className="editie">
      <p className="centered-text">Ediție sponsorizată</p>
      <p className="centered-text">2023-2024</p>
    </div>
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

export default Noutati;