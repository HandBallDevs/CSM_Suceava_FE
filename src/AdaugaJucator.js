import React from 'react';
import './AdaugaJucator.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import ImgJucator from "./imagini/PozaJucaror.png"
import { useNavigate,Link } from "react-router-dom";
const AdaugaJucator = () => {
  return (
    <div className="app-container">
      <Meniusus/>

      <div className="title-ADD">
        <img src={FrameImage} alt="" className="frame-image-ADD" />
          <div className="label-container-ADD">
                <label className="label_title-ADD">Panou Administrator</label>
            <div className="row-title-ADD">
                 <label className="label_subtitle-ADD">Acasa</label>
                 <label className="label_subtitle-ADD">/</label>
                 <label className="label_subtitle_Admin-ADD">Panou Administrator</label>
            </div>
          </div>
      </div>
      <div className='ADD_jucator-title'>
        <label className="ADD_jucator-title_label">Adauga jucator lot seniori</label>
      </div>
      <div className='ADD_jucator'>
          <div className='ADD_jucator-collumn'>
             <label className="ADD_jucator-labels" htmlFor="nume">Nume</label>
             <label className="ADD_jucator-labels" htmlFor="prenume">Prenume</label>
             <label className="ADD_jucator-labels" htmlFor="pozitie">Pozitie joc</label>
             <label className="ADD_jucator-labels" htmlFor="varsta">Varsta</label>
             <label className="ADD_jucator-labels" htmlFor="datan">Data nastere</label>
             <label className="ADD_jucator-labels" htmlFor="nationalitate">Nationalitate</label>
             <label className="ADD_jucator-labels" htmlFor="inaltime">Inaltime</label>
             <label className="ADD_jucator-labels" htmlFor="descriere">Descriere</label>
          </div>
          <div className='ADD_jucator-collumn'>
            <input type="text" id="nume" className="ADD_jucator-input" />
            <input type="text" id="prenume" className="ADD_jucator-input" />
            <input type="text" id="pozitie" className="ADD_jucator-input" />
            <input type="text" id="varsta" className="ADD_jucator-input" />
            <input type="text" id="datan" className="ADD_jucator-input" />
            <input type="text" id="nationalitate" className="ADD_jucator-input" />
            <input type="text" id="inaltime" className="ADD_jucator-input" />
            <input type="text" id="descriere" className="ADD_jucator-input" />
          </div>
          <div className='ADD_jucator-collumn1'>
            <img src={ImgJucator} alt="" className="iamgine_jucator-ADD" />
            <button className="Incarca-imagine-jucator-ADD" >Incarca imagine</button>
          </div>

      </div>
      <div className='ADD_jucator2'>
      <button className="Incarca-imagine-jucator-ADD" >Adauga jucator</button>
      </div>

    </div>
  );
};

export default AdaugaJucator;
