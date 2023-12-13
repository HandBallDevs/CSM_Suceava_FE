import React from "react";
import "./Contact.css";
import FrameImage from "./imagini/frame.png";
import ContactImage from "./imagini/Contact__header.png";
import CallIMG from "./imagini/CallIMG.png";
import MapIMG from "./imagini/MapIMG.png";
import DirectorIMG from "./imagini/DirectorIMG.png";
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";

const Contact = () => {
  const handleAcasaClick = () => {};
  const handleFacebookClick = () => {
    window.location.href = "https://www.facebook.com/CSUSuceava"; // Redirectionare facebook
  };

  const handleInstagramClick = () => {
    window.location.href = "https://www.instagram.com/csusuceava"; // Redirectionare instagram
  };

  return (
    <div className="app-container">
       <Meniusus/>

      <div class="title">
        <img src={FrameImage} alt="" className="frame-image" />
        <div class="label-container">
          <label class="label_title">Contact</label>
          <div class="row-title">
            <label class="label_subtitle">Acasa</label>
            <label class="label_subtitle">/</label>
            <label class="label_subtitle_Contact">Contact</label>
          </div>
        </div>
      </div>

      <div class="Contact_Title">
        <img src={ContactImage} alt="" className="contact_image" />
        <label class="label_t">Formular de contact</label>
      </div>
      <label class="label_Astept">Așteptăm mesajul tău !</label>
      <div class="entry_layer">
        <div class="row_label">
          <label class="Entry_label" for="nume">
            Nume*
          </label>
          <label class="Entry_label" for="email">
            Email*
          </label>
          <label class="Entry_label" for="subiect">
            Subiect
          </label>
        </div>
        <div class="row_textbox">
          <input
            type="text"
            id="nume"
            name="nume"
            class="textbox"
            placeholder="Numele intreg..."
          />
          <input
            type="text"
            id="email"
            name="email"
            class="textbox"
            placeholder="Email..."
          />
          <input
            type="text"
            id="subiect"
            name="subiect"
            class="textbox"
            placeholder="Subiect...."
          />
        </div>
        <div class="row_label">
          <label class="Entry_label" for="nume">
            Mesaj*
          </label>
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
              <a href="https://usv.ro/team/petru-ghervan/">
                <label class="contact_label">
                  Director club: prof. univ. dr. Petru GHERVAN
                </label>
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
              <label class="contact_label">
                Adresa: str. Universităţii, nr. 13
              </label>
            </a>
          </div>
        </div>
      </div>
      <Meniujos />
    </div>
  );
};

export default Contact;
