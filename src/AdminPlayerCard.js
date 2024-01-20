import React, { useState } from "react";
import "./AdminPlayerCard.css";
import { useNavigate,Link } from "react-router-dom";
import PlayerEditImage from "./imagini/EditImage.png";
import PlayerDeleteImage from "./imagini/DeleteImage.png";
import AdminJucatorImage from './imagini/jucator.png';

const AdminPlayerCard = ({ poza,nume, prenume, pozitie, nationalitate, varsta, inaltimea }) => {
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
    <div className="playercard-ADMJucatori">
                    <img src={AdminJucatorImage} alt="Player" className="player-image-senior-ADMJucatori" />     
                    <div className="Workspace-infoplayer-collumn">   
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-nume-ADMJucatori">NUME:</span>
                            <span className="detalii-value-ADMJucatori">{editedData.nume} </span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-nume-ADMJucatori">PRENUME:</span>
                            <span className="detalii-value-ADMJucatori">{editedData.prenume}</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">POZITIE DE JOC:</span>
                            <span className="detalii-value-ADMJucatori">{editedData.pozitie}</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">Varsta:</span>
                            <span className="detalii-value-ADMJucatori">{editedData.varsta}</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">Nationalitate:</span>
                            <span className="detalii-value-ADMJucatori">{editedData.nationalitate}</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">Inaltime:</span>
                            <span className="detalii-value-ADMJucatori">{editedData.inaltimea}</span>
                        </div>
                    </div>
                    <div className="Workspace-actions-collumn">   
                    <Link to="/editeazajucator" className="ADMJucatori_options">
                        <img src={PlayerEditImage} alt="" className="Action-image-ADMJucatori" />
                     </Link> 
                     <img src={PlayerDeleteImage} alt="" className="Action-image-ADMJucatori" />      
                    </div>
                </div>
  );
};

export default AdminPlayerCard;
