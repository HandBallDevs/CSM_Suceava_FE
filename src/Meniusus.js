import React from "react";
import "./Meniusus.css";
import LogoImage from "./imagini/logo.png";
import CosImage from "./imagini/cos.png";
import UserImage from "./imagini/user.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Meniusus = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isClubPage =
    pathname === "/clublot" ||
    pathname === "/detaliiclub" ||
    pathname === "/clubclasament";
  const isMeciuriPage =
    pathname === "/calendarmeciuri" || pathname === "/rezultatemeciuri";

  
  return (
    <div className="word-list">
      <motion.img
        src={LogoImage}
        alt=""
        className="imagelogo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <p className="word csu-suceava">CSU SUCEAVA</p>
      <Link to="/" className="word">
        <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}>
          Acasa
        </motion.div>
      </Link>
      <Link
        to="/clublot"
        className={`word ${isClubPage ? "selectare-pagina" : ""}`}
      >
        <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}>
          Club
        </motion.div>
      </Link>
      <Link
        to="/calendarmeciuri"
        className={`word ${isMeciuriPage ? "selectare-pagina" : ""}`}
      >
       <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}>
          Meciuri
        </motion.div>
      </Link>
      <Link
        to="/noutati"
        className={`word ${pathname === "/noutati" ? "selectare-pagina" : ""}`}
      >
        <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}>
          Noutăți
        </motion.div>
      </Link>
      <Link
        to="/contact"
        className={`word contact ${
          pathname === "/contact" ? "selectare-pagina" : ""
        }`}
      >
        <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}>
          Contact
        </motion.div>
      </Link>
      <Link
        to="/login"
        className={`word ${pathname === "/login" ? "selectare-pagina" : ""}`}
      >
        <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}>
          Login
        </motion.div>
      </Link>
      <img src={UserImage} alt="" className="imageuser" />
    </div>
  );
};

export default Meniusus;
