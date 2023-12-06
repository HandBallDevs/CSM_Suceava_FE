import React from "react";
import "./Noutati.css";

import FrameImage from "./imagini/frame.png";
import FrameNoutatiImage from './imagini/frame_noutati.png';
import Stire1Image from './imagini/stire1.png';
import Stire2Image from './imagini/stire2.png';
import MeciuriViitoareImage from './imagini/meciuri_viitoare.png';
import ClasamentImage from './imagini/clasament.png';
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";

const Noutăti = () => {
  const handleAcasaClick = () => {};
 
  return (
    <div className="app-container">
      <Meniusus />
      <div class="title">
        <img src={FrameImage} alt="" className="frame-image" />
        <div class="label-container">
          <label class="label_title">Noutăți</label>
          <div class="row-title">
            <label class="label_subtitle">Acasa</label>
            <label class="label_subtitle">/</label>
            <label class="label_subtitle_noutati">Noutăți</label>
          </div>
        </div>
      </div>

      
      <div className="News">
        <img src={FrameNoutatiImage} alt="" className="FrameNoutati_image" />
        <div className="Filter-row">
          <label  class="label_Filter" for="categorie">Categorie</label>
          <input type="text" id="categorie" name="categorie" class="textbox_filter"/>
          <label  class="label_Filter" for="ordine">Ordine</label>
          <input type="text" id="ordine" name="ordine" class="textbox_filter"/>
          <button class="button_filtreaza">Filtreaza</button>
        </div>
        <div className="news-row">
          <div class="news-column"> 
           <img src={Stire1Image} alt="" className="Stiri_image" />
            <img src={Stire2Image} alt="" className="Stiri_image" />
          </div>
          <div class="news-column_1"> 
           <label  class="label_image_news" >Urmatoarele meciuri</label>
           <img src={MeciuriViitoareImage} alt="" className="Clasament-Meciuri_image" />
           <label  class="label_image_news">Liga Clasament</label>
           <img src={ClasamentImage} alt="" className="Clasament-Meciuri_image" />
          </div>
        </div>

      </div>

      <Meniujos/>
    </div>
  );
};

export default Noutăti;
