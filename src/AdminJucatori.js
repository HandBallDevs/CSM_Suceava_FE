import React from 'react';
import './AdminJucatori.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import AdminMenuImage from "./imagini/AdminMenuImage.png";
import AdminWorkSpaceImage from './imagini/AdminWorkSpaceImage.png';
import { useNavigate,Link } from "react-router-dom";
import PlayerEditImage from "./imagini/EditImage.png";
import PlayerDeleteImage from "./imagini/DeleteImage.png";
import AdminJucatorImage from './imagini/jucator.png';

const AdminJucatori = () => {
  return (
    <div className="app-container">
      <Meniusus/>

      <div className="title-ADMJucatori">
        <img src={FrameImage} alt="" className="frame-image-ADMJucatori" />
        <div className="label-container-ADMJucatori">
          <label className="label_title-ADMJucatori">Panou Administrator</label>
          <div className="row-title-ADMJucatori">
            <label className="label_subtitle-ADMJucatori">Acasa</label>
            <label className="label_subtitle-ADMJucatori">/</label>
            <label className="label_subtitle_admin-ADMJucatori">Panou Administrator</label>
          </div>
        </div>
      </div>

      <div className="Container-ADMJucatori">
        <div className="Menu-ADMJucatori">
          <img src={AdminMenuImage} alt="" className="Admin-menu-img-ADMJucatori" />
          <label className="ADMJucatori_titles">Panou Administrator</label>
          <div className="options_ADMJucatori">
            <Link to="/adminstiri" className="ADMJucatori_options">Stiri</Link>
            <Link to="/adminmeciuri" className="ADMJucatori_options">Meciuri</Link>
            <Link to="/adminusers" className="ADMJucatori_options">Utilizatori</Link>
            <Link to="/adminjucatori" className="ADMJucatori_options">Jucatorii Seniori</Link>
            <Link to="/adminstaff" className="ADMJucatori_options">Staff</Link>
          </div>
        </div>  
        <div className="Workspace-ADMJucatori">
             <div className="Workspace-row-ADMJucatori">
                <div className="Workspace-row-ADMJucatori1">
                    <label  class="label-filter-ADMJucatori" for="cauta">Cauta jucator :</label>
                    <input type="text" id="cauta" name="cauta" class="textbox-filter-ADMJucatori"/>
                    <label  class="label-filter-ADMJucatori" for="filtreaza">Filtreaza dupa :</label>
                    <input type="text" id="filtreaza" name="filtreaza" class="textbox-filter-ADMJucatori"/>
                </div>
                <div className="Workspace-row-ADMJucatori2">
                    <button class="button-adauga_jucator-ADMJucatori"> + Adauga Jucator </button>
                    <label  class="label-title_j-ADMJucatori" >Lot seniori </label>
                </div>
             </div>
             <div className="Workspace-row-ADMJucatori3">
                <div className="playercard-ADMJucatori">
                    <img src={AdminJucatorImage} alt="Player" className="player-image-senior-ADMJucatori" />     
                    <div className="Workspace-infoplayer-collumn">   
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-nume-ADMJucatori">NUME:</span>
                            <span className="detalii-value-ADMJucatori">Numele </span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-nume-ADMJucatori">PRENUME:</span>
                            <span className="detalii-value-ADMJucatori">Prenumele</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">POZITIE DE JOC:</span>
                            <span className="detalii-value-ADMJucatori">Pozitia</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">Data nasterii:</span>
                            <span className="detalii-value-ADMJucatori">Data</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">Varsta:</span>
                            <span className="detalii-value-ADMJucatori">Varsta</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">Nationalitate:</span>
                            <span className="detalii-value-ADMJucatori">Nationalitate</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">Inaltime:</span>
                            <span className="detalii-value-ADMJucatori">Inaltime</span>
                        </div>
                    </div>
                    <div className="Workspace-actions-collumn">   
                     <img src={PlayerEditImage} alt="" className="Action-image-ADMJucatori" />
                     <img src={PlayerDeleteImage} alt="" className="Action-image-ADMJucatori" />      
                    </div>
                </div>

                <div className="playercard-ADMJucatori">
                    <img src={AdminJucatorImage} alt="Player" className="player-image-senior-ADMJucatori" />     
                    <div className="Workspace-infoplayer-collumn">   
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-nume-ADMJucatori">NUME:</span>
                            <span className="detalii-value-ADMJucatori">Numele </span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-nume-ADMJucatori">PRENUME:</span>
                            <span className="detalii-value-ADMJucatori">Prenumele</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">POZITIE DE JOC:</span>
                            <span className="detalii-value-ADMJucatori">Pozitia</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">Data nasterii:</span>
                            <span className="detalii-value-ADMJucatori">Data</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">Varsta:</span>
                            <span className="detalii-value-ADMJucatori">Varsta</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">Nationalitate:</span>
                            <span className="detalii-value-ADMJucatori">Nationalitate</span>
                        </div>
                        <div className="detalii-item-ADMJucatori">
                            <span className="detalii-label-ADMJucatori">Inaltime:</span>
                            <span className="detalii-value-ADMJucatori">Inaltime</span>
                        </div>
                    </div>
                    <div className="Workspace-actions-collumn">   
                     <img src={PlayerEditImage} alt="" className="Action-image-ADMJucatori" />
                     <img src={PlayerDeleteImage} alt="" className="Action-image-ADMJucatori" />      
                    </div>
                </div>

                

             </div>
          
        </div>
      </div>


    </div>
  );
};

export default AdminJucatori;
