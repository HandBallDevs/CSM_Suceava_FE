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
import { useSpring, animated } from 'react-spring';

const Noutăti = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

 
  return (
    <animated.div style={springProps}>
    <div className="app-container">
      <Meniusus />
      <div className="title-PGNoutati">
        <img src={FrameImage} alt="" className="frame-image-PGNoutati" />
        <div className="label-container-PGNoutati">
          <label className="label_title-PGNoutati">Noutăți</label>
          <div className="row-title-PGNoutati">
            <label className="label_subtitle-PGNoutati">Acasa</label>
            <label className="label_subtitle-PGNoutati">/</label>
            <label className="label_subtitle_admin-PGNoutati">Noutăți</label>
          </div>
        </div>
      </div>

      
      <div className="News-PGNoutati">
        <img src={FrameNoutatiImage} alt="" className="FrameNoutati_image-PGNoutati" />
        <div className="Filter-row-PGNoutati">
          <label  className="label_Filter-PGNoutati" htmlFor="categorie">Categorie</label>
          <input type="text" id="categorie" name="categorie" className="textbox_filter-PGNoutati"/>
          <label  className="label_Filter-PGNoutati" htmlFor="ordine">Ordine</label>
          <input type="text" id="ordine" name="ordine" className="textbox_filter-PGNoutati"/>
          <button className="button_filtreaza-PGNoutati">Filtreaza</button>
        </div>
        <div className="news-row-PGNoutati">
          <div className="news-column-PGNoutati"> 
           <img src={Stire1Image} alt="" className="Stiri_image-PGNoutati" />
            <img src={Stire2Image} alt="" className="Stiri_image-PGNoutati" />
          </div>
          <div className="news-column_1-PGNoutati"> 
           <label  className="label_image_news-PGNoutati" >Urmatoarele meciuri</label>
           <img src={MeciuriViitoareImage} alt="" className="Clasament-Meciuri_image-PGNoutati" />
           <label  className="label_image_news-PGNoutati">Liga Clasament</label>
           <img src={ClasamentImage} alt="" className="Clasament-Meciuri_image-PGNoutati" />
          </div>
        </div>

      </div>

      <Meniujos/>
    </div>
    </animated.div>
  );
};

export default Noutăti;
