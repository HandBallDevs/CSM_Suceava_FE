import React from "react";
import "./Noutati.css";

import FrameImage from "./imagini/frame.png";
import frame_noutati from "./imagini/frame_noutati.png";
import Stire1 from "./imagini/stire1.png";
import Stire2 from "./imagini/stire2.png";
import Clasament from "./imagini/clasament.png";
import Meciuri_viitoare from "./imagini/meciuri_viitoare.png";
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

      <div class="container_noutati">
        <img src={frame_noutati} alt="" class="frame_noutati-image" />

        <div class="main-news-container">
          <div class="form-row-container">
            <label for="label1" class="label">
              Categorie:
            </label>
            <input type="text" id="label1" class="textbox" />
            <label for="label2" class="label">
              Ordine:
            </label>
            <input type="text" id="label2" class="textbox" />
            <button class="button">FILTREAZA</button>
          </div>
          <div class="container">
            <div class="news-container">
              <img src={Stire1} alt="" class="News-image" />
              <img src={Stire2} alt="" class="News-image2" />
            </div>
            <div class="news-container2">
              <label for="labelMeciuri" class="news-labels">
                Urmatoarele Meciuri:
              </label>
              <img src={Meciuri_viitoare} alt="" class="Meciuri_viitoare" />
              <label for="labelClasament" class="news-labels">
                Clasament:
              </label>
              <img src={Clasament} alt="" class="Clasament" />
            </div>
          </div>
        </div>
      </div>
      <Meniujos/>
    </div>
  );
};

export default Noutăti;
