import React, { useState } from "react";
import "./Jucator.css";
import JucatorImage from './imagini/jucator.png';

const Jucator = ({ poza,nume, prenume, pozitie, nationalitate, varsta, inaltimea }) => {
  const [editedData, setEditedData] = useState({
    poza,
    nume,
    prenume,
    pozitie,
    nationalitate,
    varsta,
    inaltimea,
  });
 

  return (
    <div className="player-info-senior">
     <img src={editedData.poza || JucatorImage} alt="" className="player-image-senior" />
      <div className="player-detalii-senior">
        <div className="detalii-item-senior">
          <span className="detalii-label-senior-nume">NUME:</span>
          <span className="detalii-value-senior">{editedData.nume}</span>
        </div>
        <div className="detalii-item-senior">
          <span className="detalii-label-senior-nume">PRENUME:</span>
          <span className="detalii-value-senior">{editedData.prenume}</span>
        </div>
        <div className="detalii-item-senior">
          <span className="detalii-label-senior">POZITIE DE JOC</span>
          <span className="detalii-value-senior">{editedData.pozitie}</span>
        </div>
        <div className="detalii-item-senior">
          <span className="detalii-label-senior">NATIONALITATE:</span>
          <span className="detalii-value-senior">{editedData.nationalitate}</span>
        </div>
        <div className="detalii-item-senior">
          <span className="detalii-label-senior">VÂRSTĂ:</span>
          <span className="detalii-value-senior">{editedData.varsta}</span>
        </div>
        <div className="detalii-item-senior">
          <span className="detalii-label-senior">ÎNĂLȚIME:</span>
          <span className="detalii-value-senior">{editedData.inaltimea}</span>
        </div>
      </div>
 
    </div>
  );
};

export default Jucator;
