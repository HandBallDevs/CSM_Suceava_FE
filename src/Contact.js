import React from "react";
import "./Contact.css";
import FrameImage from "./imagini/frame.png";
import ContactImage from "./imagini/Contact__header.png";
import CallIMG from "./imagini/CallIMG.png";
import MapIMG from "./imagini/MapIMG.png";
import DirectorIMG from "./imagini/DirectorIMG.png";
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";


import { useSpring, animated } from 'react-spring';

const Contact = () => {

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={springProps}>
    <div className="app-container">
      <Meniusus />

      <div className="title-PGContact">
        <img src={FrameImage} alt="" className="frame-image-PGContact" />
        <div className="label-container-PGContact">
          <label className="label_title-PGContact">Contact</label>
          <div className="row-title-PGContact">
            <label className="label_subtitle-PGContact">Acasa</label>
            <label className="label_subtitle-PGContact">/</label>
            <label className="label_subtitle_admin-PGContact">Contact</label>
          </div>
        </div>
      </div>

      <div className="Contact_Title-PGContact">
        <img src={ContactImage} alt="" className="contact_image-PGContact" />
        <label className="label_t-PGContact">Formular de contact</label>
      </div>
      <label className="label_Astept-PGContact">Așteptăm mesajul tău !</label>
      <div className="entry_layer-PGContact">
        <div className="row_label-PGContact">
          <label className="Entry_label-PGContact" htmlFor="nume">
            Nume*
          </label>
          <label className="Entry_label-PGContact" htmlFor="email">
            Email*
          </label>
          <label className="Entry_label-PGContact" htmlFor="subiect">
            Subiect
          </label>
        </div>
        <div className="row_textbox-PGContact">
          <input
            type="text"
            id="nume"
            name="nume"
            className="textbox-PGContact"
            placeholder="Numele intreg..."
          />
          <input
            type="text"
            id="email"
            name="email"
            className="textbox-PGContact"
            placeholder="Email..."
          />
          <input
            type="text"
            id="subiect"
            name="subiect"
            className="textbox-PGContact"
            placeholder="Subiect...."
          />
        </div>
        <div className="row_label-PGContact">
          <label className="Entry_label-PGContact" htmlFor="nume">
            Mesaj*
          </label>
        </div>
        <div className="row_textbox-PGContact">
          <input type="text" id="nume" name="nume" className="textbox_mesaj-PGContact" />
        </div>
        <div className="row_textbox-PGContact">
          <button className="button-PGContact">Trimite Mesaj</button>
        </div>
      </div>
      <div className="contact-PGContact">
        <div className="row_contact_1-PGContact">
          <div className="column_contact-PGContact">
            <div className="row_contact-PGContact">
              <img src={DirectorIMG} alt="" className="contact-img-PGContact" />
              <a href="https://usv.ro/team/petru-ghervan/">
                <label className="contact_label-PGContact">
                  Director club: prof. univ. dr. Petru GHERVAN
                </label>
              </a>
            </div>
            <div className="row_contact-PGContact">
              <img src={CallIMG} alt="" className="contact-img-PGContact" />
              <a href="tel:+40230522819" data-phone-number="0230 522819">
                <label className="contact_label-PGContact">0230522819</label>
              </a>
              <label className="contact_label-PGContact">, </label>
              <a href="tel:+40741221409" data-phone-number="0741221409">
                <label className="contact_label-PGContact">0741221409</label>
              </a>
            </div>
          </div>
          <div className="row_contact-PGContact">
            <img src={MapIMG} alt="" className="contact-img1-PGContact" />
            <a href="https://www.google.com/maps/place/Strada+Universit%C4%83%C8%9Bii+13,+Suceava/@47.6389536,26.2450697,17z/data=!3m1!4b1!4m6!3m5!1s0x4734fc2d44f723cb:0x817fff7ee5ddcc1c!8m2!3d47.63895!4d26.24765!16s%2Fg%2F11cs7c75db?entry=ttu">
              <label className="contact_label-PGContact">
                Adresa: str. Universităţii, nr. 13
              </label>
            </a>
          </div>
        </div>
      </div>
      <Meniujos />
    </div>
    </animated.div>
    
  );
};

export default Contact;
