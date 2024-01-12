import React from 'react';
import './EditeazaJucator.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import ImgJucator from "./imagini/PozaJucaror.png"
import { useNavigate,Link } from "react-router-dom";
const EditeazaJucator = () => {
  return (
    <div className="app-container">
      <Meniusus/>

      <div className="title-EDIT">
        <img src={FrameImage} alt="" className="frame-image-EDIT" />
          <div className="label-container-EDIT">
                <label className="label_title-EDIT">Panou Administrator</label>
            <div className="row-title-EDIT">
                 <label className="label_subtitle-EDIT">Acasa</label>
                 <label className="label_subtitle-EDIT">/</label>
                 <label className="label_subtitle_Admin-EDIT">Panou Administrator</label>
            </div>
          </div>
      </div>
      <div className='edit_jucator-title'>
        <label className="edit_jucator-title_label">Editeaza jucator lot seniori</label>
      </div>
      <div className='edit_jucator'>
          <div className='edit_jucator-collumn'>
             <label className="edit_jucator-labels" htmlFor="nume">Nume</label>
             <label className="edit_jucator-labels" htmlFor="prenume">Prenume</label>
             <label className="edit_jucator-labels" htmlFor="pozitie">Pozitie joc</label>
             <label className="edit_jucator-labels" htmlFor="varsta">Varsta</label>
             <label className="edit_jucator-labels" htmlFor="datan">Data nastere</label>
             <label className="edit_jucator-labels" htmlFor="nationalitate">Nationalitate</label>
             <label className="edit_jucator-labels" htmlFor="inaltime">Inaltime</label>
          </div>
          <div className='edit_jucator-collumn'>
            <input type="text" id="nume" className="edit_jucator-input" />
            <input type="text" id="prenume" className="edit_jucator-input" />
            <input type="text" id="pozitie" className="edit_jucator-input" />
            <input type="text" id="varsta" className="edit_jucator-input" />
            <input type="text" id="datan" className="edit_jucator-input" />
            <input type="text" id="nationalitate" className="edit_jucator-input" />
            <input type="text" id="inaltime" className="edit_jucator-input" />
          </div>
          <div className='edit_jucator-collumn1'>
            <img src={ImgJucator} alt="" className="iamgine_jucator-edit" />
            <button className="Incarca-imagine-jucator" >Incarca imagine</button>
          </div>

      </div>
      <div className='edit_jucator2'>
      <button className="Incarca-imagine-jucator" >Editeaza jucator</button>
      </div>

    </div>
  );
};

export default EditeazaJucator;
