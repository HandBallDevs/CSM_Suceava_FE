import React, { useState } from "react";
import "./AdminPlayerCard.css";
import { useNavigate,Link } from "react-router-dom";
import PlayerEditImage from "./imagini/EditImage.png";
import PlayerDeleteImage from "./imagini/DeleteImage.png";
import AdminJucatorImage from './imagini/jucator.png';

const AdminJuniorCard = ({ id,poza,nume, prenume, pozitie, nationalitate, varsta, inaltimea,onDelete,onUpdate}) => {
  const [editedData, setEditedData] = useState({
    poza,
    nume,
    prenume,
    pozitie,
    nationalitate,
    varsta,
    inaltimea,
  
  });

  const handleDelete = () => {
    
    onDelete(id);
  };
  
  const handleUpdate = () => {
    
    onUpdate(id);
  };
  
  
 

  return (
    <div className="playercard-ADMJucatori">
                    <img src={editedData.poza} alt="Player" className="player-image-senior-ADMJucatori" />     
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
                    <Link to={`/editeazacadeti/${id}`} className="ADMJucatori_options" onClick={handleUpdate}>
        <img src={PlayerEditImage} alt="" className="Action-image-ADMJucatori"/>
      </Link>
                     <img src={PlayerDeleteImage} alt="" className="Action-image-ADMJucatori" onClick={handleDelete}/>      
                    </div>
                </div>
  );
};

export default AdminJuniorCard;
