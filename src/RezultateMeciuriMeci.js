import React, { useState } from "react";
import "./RezultateMeciuri.css";

const Meci = ({ data, meciul, locatia, scorul, pozadelete, onDelete }) => {
  const [editedData, setEditedData] = useState({
    data,
    meciul,
    locatia,
    scorul,
    pozadelete,
  });
  const handleDelete = () => {
    onDelete();
  };

  const handleDeleteClick = () => {
    onDelete(); // Call the onDelete callback from props
  };

  return (
    <div className="rezultate-words-container">
      <div className="infomeci-container">
        <span>{editedData.data}</span>
      </div>
      <div className="infomeci-container">
        <span>{editedData.meciul}</span>
      </div>
      <div className="infomeci-container">
        <span>{editedData.locatia}</span>
      </div>
      <div className="infomeci-container">
        <span>{editedData.scorul}</span>
      </div>

      <div className="infomeci-container">
        <span>
        <img
               src={pozadelete}
               alt=""
               className="player-image-stire-delete"
               onClick={handleDelete}
             />
        </span>
      </div>
    </div>
  );
};

export default Meci;
