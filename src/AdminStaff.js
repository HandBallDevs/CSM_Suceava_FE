import React from 'react';
import './AdminStaff.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import AdminMenuImage from "./imagini/AdminMenuImage.png";
import AdminWorkSpaceImage from './imagini/AdminWorkSpaceImage.png';
import { useNavigate,Link } from "react-router-dom";
import PlayerEditImage from "./imagini/EditImage.png";
import PlayerDeleteImage from "./imagini/DeleteImage.png";
import AdminJucatorImage from './imagini/jucator.png';

const AdminStaff = () => {
  return (
    <div className="app-container">
      <Meniusus/>

      <div className="title-ADMStaff">
        <img src={FrameImage} alt="" className="frame-image-ADMStaff" />
        <div className="label-container-ADMStaff">
          <label className="label_title-ADMStaff">Panou Administrator</label>
          <div className="row-title-ADMStaff">
            <label className="label_subtitle-ADMStaff">Acasa</label>
            <label className="label_subtitle-ADMStaff">/</label>
            <label className="label_subtitle_admin-ADMStaff">Panou Administrator</label>
          </div>
        </div>
      </div>

      <div className="Container-ADMStaff">
        <div className="Menu-ADMStaff">
          <img src={AdminMenuImage} alt="" className="Admin-menu-img-ADMStaff" />
          <label className="ADMStaff_titles">Panou Administrator</label>
          <div className="options_ADMStaff">
            <Link to="/adminstiri" className="ADMStaff_options">Stiri</Link>
            <Link to="/adminmeciuri" className="ADMStaff_options">Meciuri</Link>
            <Link to="/adminusers" className="ADMStaff_options">Utilizatori</Link>
            <Link to="/adminjucatori" className="ADMStaff_options">Jucatorii Seniori</Link>
            <Link to="/adminstaff" className="ADMStaff_options">Staff</Link>
          </div>
        </div>  
        <div className="Workspace-ADMStaff">
             <div className="Workspace-row-ADMStaff">
                <div className="Workspace-row-ADMStaff1">
                    <label  className="label-filter-ADMStaff" htmlFor="cauta">Cauta :</label>
                    <input type="text" id="cauta" name="cauta" className="textbox-filter-ADMStaff"/>
                    <label  className="label-filter-ADMStaff" htmlFor="filtreaza">Filtreaza dupa :</label>
                    <input type="text" id="filtreaza" name="filtreaza" className="textbox-filter-ADMStaff"/>
                </div>
                <div className="Workspace-row-ADMStaff2">
                    <button className="button-adauga_jucator-ADMStaff"> + Adauga Antrenor </button>
                    <label  className="label-title_j-ADMStaff" >Staff </label>
                </div>
             </div>
             <div className="Workspace-row-ADMStaff3">
                <div className="playercard-ADMStaff">
                    <img src={AdminJucatorImage} alt="Player" className="player-image-senior-ADMStaff" />     
                    <div className="Workspace-infoplayer-collumn">   
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-nume-ADMStaff">NUME:</span>
                            <span className="detalii-value-ADMStaff">Numele </span>
                        </div>
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-nume-ADMStaff">PRENUME:</span>
                            <span className="detalii-value-ADMStaff">Prenumele</span>
                        </div>
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-ADMStaff">POZITIE DE JOC:</span>
                            <span className="detalii-value-ADMStaff">Pozitia</span>
                        </div>
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-ADMStaff">Data nasterii:</span>
                            <span className="detalii-value-ADMStaff">Data</span>
                        </div>
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-ADMStaff">Varsta:</span>
                            <span className="detalii-value-ADMStaff">Varsta</span>
                        </div>
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-ADMStaff">Nationalitate:</span>
                            <span className="detalii-value-ADMStaff">Nationalitate</span>
                        </div>
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-ADMStaff">Inaltime:</span>
                            <span className="detalii-value-ADMStaff">Inaltime</span>
                        </div>
                    </div>
                    <div className="Workspace-actions-collumn">   
                    <Link to="/editeazajucator" className="ADMJucatori_options">
                        <img src={PlayerEditImage} alt="" className="Action-image-ADMJucatori" />
                     </Link> 
                     <img src={PlayerDeleteImage} alt="" className="Action-image-ADMStaff" />      
                    </div>
                </div>

                <div className="playercard-ADMStaff">
                    <img src={AdminJucatorImage} alt="Player" className="player-image-senior-ADMStaff" />     
                    <div className="Workspace-infoplayer-collumn-ADMStaff">   
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-nume-ADMStaff">NUME:</span>
                            <span className="detalii-value-ADMStaff">Numele </span>
                        </div>
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-nume-ADMStaff">PRENUME:</span>
                            <span className="detalii-value-ADMStaff">Prenumele</span>
                        </div>
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-ADMStaff">POZITIE DE JOC:</span>
                            <span className="detalii-value-ADMStaff">Pozitia</span>
                        </div>
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-ADMStaff">Data nasterii:</span>
                            <span className="detalii-value-ADMStaff">Data</span>
                        </div>
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-ADMStaff">Varsta:</span>
                            <span className="detalii-value-ADMStaff">Varsta</span>
                        </div>
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-ADMStaff">Nationalitate:</span>
                            <span className="detalii-value-ADMStaff">Nationalitate</span>
                        </div>
                        <div className="detalii-item-ADMStaff">
                            <span className="detalii-label-ADMStaff">Inaltime:</span>
                            <span className="detalii-value-ADMStaff">Inaltime</span>
                        </div>
                    </div>
                    <div className="Workspace-actions-collumn">   
                    <Link to="/editeazajucator" className="ADMJucatori_options">
                        <img src={PlayerEditImage} alt="" className="Action-image-ADMJucatori" />
                     </Link> 
                     <img src={PlayerDeleteImage} alt="" className="Action-image-ADMStaff" />      
                    </div>
                </div>

                

             </div>
          
        </div>
      </div>


    </div>
  );
};

export default AdminStaff;
