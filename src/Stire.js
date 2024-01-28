import React, { useState } from "react";
import "./Stire.css";
import Stire1Image from "./imagini/stire1.png";

const Stire = ({
  data,
  titlu,
  continut,
  hashtag,
  poza

}) => {
  const [editedData, setEditedData] = useState({
    data,
    titlu,
    continut,
    hashtag,
    poza

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
      <img
        src={editedData.poza}
        alt=""
        className="player-image-stire"
      />
    </div>
  );
};

export default Stire;
