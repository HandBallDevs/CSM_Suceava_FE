import React, { useState } from "react";
import "./Stire.css";
import Stire1Image from "./imagini/stire1.png";

const Stire = ({ id, data, titlu, continut, hashtag, poza, pozadelete, onDelete }) => {
  const [editedData, setEditedData] = useState({
    id,
    data,
    titlu,
    continut,
    hashtag,
    poza,
    pozadelete,
  });

  return (
    <div className="player-info-stire">
      <div className="player-detalii-stire">
        <div className="detalii-item-stire">
          <span className="detalii-value-stire-data">{editedData.data}</span>
        </div>
        <div className="detalii-item-stire">
          <span className="detalii-value-stire-titlu">{editedData.titlu}</span>
        </div>
        <div className="detalii-item-stire">
          <span className="detalii-value-stire">{editedData.continut}</span>
        </div>
        <div className="detalii-item-stire">
          <span className="detalii-value-stire-hashtag">
            {editedData.hashtag}
          </span>
        </div>
      </div>
      <img src={editedData.poza} alt="" className="player-image-stire" />
      {onDelete && (
        <img
          src={editedData.pozadelete}
          alt=""
          className="player-image-stire-delete"
          onClick={() => onDelete(editedData.id)}
        />
      )}
    </div>
  );
};

export default Stire;