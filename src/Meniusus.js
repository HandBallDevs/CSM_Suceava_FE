import React from "react";
import "./Meniusus.css";
import LogoImage from "./imagini/logo.png";
import CosImage from "./imagini/cos.png";
import UserImage from "./imagini/user.png";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Meniusus = ({ applyUnderlineStyle }) => {
  return (
    <div className="word-list">
      <img src={LogoImage} alt="" className="imagelogo" />
      <p className="word csu-suceava">CSU SUCEAVA</p>
      <Link to="/" className="word">
       Acasa
      </Link>
      <Link to="/" className="word">
        Magazin
      </Link>
      <Link
        to="/clublot"
        className={`word ${applyUnderlineStyle ? "club-under" : ""}`}
      >
        Club
      </Link>
      <Link to="/" className="word">
        Meciuri
      </Link>
      <Link to="/noutati" className="word">
        Noutăți
      </Link>
      <Link to="/contact" className="word contact">
        Contact
      </Link>
      <Link to="/" className="word csu-login">
        Login
      </Link>
      <img src={UserImage} alt="" className="imageuser" />
      <Link to="/" className="word csu-cos">
        Coș
      </Link>
      <img src={CosImage} alt="" className="imagecos" />
    </div>
  );
};

export default Meniusus;