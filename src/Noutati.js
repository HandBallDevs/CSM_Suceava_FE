import React from "react";
import "./Noutati.css";

import FrameImage from "./imagini/frame.png";
import Stire1Image from "./imagini/stire1.png";
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { useEffect } from "react";

import Stire from "./Stire";

const Noutăti = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const [StiriData, setStiriData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://handballdevsbe.azurewebsites.net/api/stire");
        if (response.ok) {
          const data = await response.json();
  
          // Sort the data by dataPostare in descending order
          const sortedData = data.sort((a, b) => b.dataPostare.localeCompare(a.dataPostare));
  
          console.log("Sorted Data:", sortedData);
  
          setStiriData(sortedData);
        } else {
          console.error("API Error:", response.statusText);
        }
      } catch (error) {
        console.error("API Error:", error.message);
      }
    };
  
    fetchData();
  }, []);
  const getRelativeTime = (timestamp) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - new Date(timestamp)) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    for (const [unit, seconds] of Object.entries(intervals)) {
      const interval = Math.floor(diffInSeconds / seconds);
  
      if (interval >= 1) {
        // Switch for unit-specific pluralization
        let unitString;
        switch (unit) {
          case 'year':
            unitString = interval === 1 ? 'an' : 'ani';
            break;
          case 'month':
            unitString = interval === 1 ? 'lună' : 'luni';
            break;
          case 'week':
            unitString = interval === 1 ? 'săptămână' : 'săptămâni';
            break;
          case 'day':
            unitString = interval === 1 ? 'zi' : 'zile';
            break;
          case 'hour':
            unitString = interval === 1 ? 'oră' : 'ore';
            break;
          case 'minute':
            unitString = interval === 1 ? 'minut' : 'minute';
            break;
          default:
            unitString = unit;
        }
  
        return `Acum ${interval} ${unitString}${interval > 1 ? "" : ""}`;
      }
    }
  
    return "Chiar acum";
  };
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
        {StiriData && (
          <div className="stire-container">
            {StiriData.map((stire, index) => (
              <Stire
              key={index}
                poza={stire.urlPoza}
                   data={getRelativeTime(stire.dataPostare)}
                titlu={stire.titlu}
                continut={stire.continut}
                hashtag={stire.hashTaguri}
  
              />
            ))}
          </div>
        )}
      </div>
      <Meniujos />
    </animated.div>
  );
};

export default Noutăti;
