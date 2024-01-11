import React from 'react';
import './AdminUsers.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import AdminMenuImage from "./imagini/AdminMenuImage.png";
import AdminWorkSpaceImage from './imagini/AdminWorkSpaceImage.png';
import { useNavigate,Link } from "react-router-dom";
import AdminUsersImage from  "./imagini/AdminUsersImage.png";
import EditImage from "./imagini/EditImage.png";
import DeleteImage from "./imagini/DeleteImage.png";

const Admin = () => {
  return (
    <div className="app-container">
      <Meniusus/>

      <div className="title-ADM">
        <img src={FrameImage} alt="" className="frame-image-ADM" />
        <div className="label-container-ADM">
          <label className="label_title-ADM">Panou Administrator</label>
          <div className="row-title-ADM">
            <label className="label_subtitle-ADM">Acasa</label>
            <label className="label_subtitle-ADM">/</label>
            <label className="label_subtitle_admin-ADM">Panou Administrator</label>
          </div>
        </div>
      </div>

      <div className="Container-ADMUsers">
        <div className="Menu-ADMUsers">
          <img src={AdminMenuImage} alt="" className="Admin-menu-img-ADMUsers" />
          <label className="ADMUsers_titles">Panou Administrator</label>
          <div className="options_ADMUsers">
            <Link to="/adminstiri" className="ADMUsers_options">Stiri</Link>
            <Link to="/adminmeciuri" className="ADMUsers_options">Meciuri</Link>
            <Link to="/adminusers" className="ADMUsers_options">Utilizatori</Link>
            <label className="ADMUsers_options">Jucatorii Seniori</label>
            <label className="ADMUsers_options">Staff</label>
          </div>
        </div>  
        <div className="Workspace-ADMUsers">
          <img src={AdminWorkSpaceImage} alt="" className="Admin-workspace-img-ADMUsers" />
          <label className="admin_titles1-ADMUsers">Lista useri</label>
          <div className="workspace-row-ADMUsers">
            <img src={AdminUsersImage} alt="" className="AdminUsersImage-ADMUsers" />
          </div>
          <div className="workspace-row-ADMUsers1">
            <label className="Show_Label_ADMUsers" htmlFor="show">Show</label>
            <select id="show" className="workspace-choicebox-ADMUsers"></select>
            <input type="text" className="workspace-inputs-ADMUsers" placeholder="Search...." />

          </div>

          <div className="workspace-row-ADMUsers2">
            <div className="workspace-collumn-ADMUsers ">
              <label className="label-list-ADMUsers">ID</label>
              <label className="label-exemple-ADMUsers">#123456</label>
              <label className="label-exemple-ADMUsers">#123457</label>
            </div>
            <div className="workspace-collumn-ADMUsers ">
              
              <label className="label-list-ADMUsers">Adresa email</label>
              <label className="label-exemple-ADMUsers">user1@yahoo.com</label>
              <label className="label-exemple-ADMUsers">user2@email.com</label>
            
            </div>
            <div className="workspace-collumn-ADMUsers ">
              
              <label className="label-list-ADMUsers">Data</label>
              <label className="label-exemple-ADMUsers">01/01/2023</label>
              <label className="label-exemple-ADMUsers">02/01/2023</label>
            
            </div>
            <div className="workspace-collumn-ADMUsers ">
              
              <label className="label-list-ADMUsers">Actiuni</label>
              <div className="actions-ADMUsers3">
                 <img src={EditImage} alt="" className="Action-image-ADMUsers" />
                 <img src={DeleteImage} alt="" className="Action-image-ADMUsers" />
               </div>
              <div className="actions-ADMUsers3">
                <img src={EditImage} alt="" className="Action-image-ADMUsers" />
                <img src={DeleteImage} alt="" className="Action-image-ADMUsers" />
              </div>
            
            </div>


          </div>



        </div>
      </div>


    </div>
  );
};

export default Admin;
