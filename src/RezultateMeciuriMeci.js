import React, {  useState } from "react";
import "./RezultateMeciuri.css";

const Meci = ({ data, meciul, locatia, scorul }) => {
  const [editedData, setEditedData] = useState({
    data,
    meciul,
    locatia,
    scorul,
  });

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
    </div>
  );
};

export default Meci;
