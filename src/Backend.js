import React, { useEffect } from 'react';
import "./Acasa.css";
import LogoImage from "./imagini/logo.png";
import FrameImage from "./imagini/frame.png";
//import IconImage from './imagini/icon.png';
//import CrossImage from './imagini/cross.png';
//import PlaceImage from './imagini/place.png';
import IntoarcereImage from "./imagini/intoarcere.png";
import LotImage from "./imagini/lot.png";
import LotframeImage from "./imagini/lotframe.png";
import ButtonaiciImage from "./imagini/buttonaici.png";
import DetaliiImage from "./imagini/detalii.png";
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';



const Backend = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example data to be sent to the backend
        const newData = {
          id: "63060884-bfed-4f9b-21a0-08dc12df3ecc",
          nume: "John",
          prenume: "Doe",
          nationalitate: "ROMAN",
          tipLot: 1,
          post: "Player",
          urlPoza: "",
          dataNastere: "1990-01-01T00:00:00.000Z",
          inaltime: 180,
          descriere: "A talented player",
        };

        const response = await fetch('https://handballdevsbe.azurewebsites.net/api/staff', {
          method: 'PUT', // or 'PUT' depending on your use case
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
          },
          body: JSON.stringify(newData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('API Response:', data);
        } else {
          console.error('API Error:', response.statusText);
        }
      } catch (error) {
        console.error('API Error:', error.message);
      }
    };

    fetchData();
  }, []);


}


export default Backend;
