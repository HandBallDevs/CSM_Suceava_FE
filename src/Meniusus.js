import React from "react";
import "./Meniusus.css";
import LogoImage from "./imagini/logo.png";
import CosImage from "./imagini/cos.png";
import UserImage from "./imagini/user.png";
import { Link, useLocation } from "react-router-dom";

const Meniusus = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isClubPage =
  pathname === "/clublot" || pathname === "/detaliiclub" || pathname === "/clubclasament";
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
        className={`word ${isClubPage ? "selectare-pagina" : ""}`}
      >
        Club
      </Link>
      <Link to="/" className="word">
        Meciuri
      </Link>
      <Link to="/noutati" className={`word ${pathname === '/noutati' ? 'selectare-pagina' : ''}`}>
        Noutăți
      </Link>
      <Link
        to="/contact"
        className={`word contact ${
          pathname === "/contact" ? "selectare-pagina" : ""
        }`}
      >
        Contact
      </Link>
      <Link to="/login" className={`word ${pathname === '/login' ? 'selectare-pagina' : ''}`}>
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
