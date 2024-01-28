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

const NoutatiDelete = () => {
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


  
  const handleDeleteStire = async (id) => {
    try {
      const response = await fetch(
        `https://handballdevsbe.azurewebsites.net/api/stire/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log(`Stire with ID ${id} deleted successfully.`);
  
        setStiriData((prevData) => prevData.filter((stire) => stire.id !== id));
      } else {
        console.error("API Error:", response.statusText);
      }
    } catch (error) {
      console.error("API Error:", error.message);
    }
  };

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
              key={stire.id}
              id={stire.id}
              poza={stire.urlPoza}
              data={getRelativeTime(stire.dataPostare)}
              titlu={stire.titlu}
              continut={stire.continut}
              hashtag={stire.hashTaguri}
              pozadelete={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHHSURBVHgB7VfRUcJAEH17Cf4oztEBJWAHUoFYgEOogBLQCrSDgFgAViBWIB0QG9B84AwzJKx7A2jARC4MDM7I+8gml817t7fJ3gbYEyiPs1/UNcWopBIRgthBrxGGISxgJexrrQtTeuIM0QRZMJlwtTEOA6yBCws4E3isUGEhZuZOqihRXUzZLZCPMarrOK2ESeHC2Ji50RiF/TQfWZU7N6Z3Oa3YcCobJwKVjT2KMMzySeRWw4ozge6pbqbnkWo0I+wxOPxlgp6x4tP+cY9VcDV6u/n2TeChWBpKHsvYESKHS4uVWcrxxOGqE+NcZnNhopS5S4R4xAYQjnM51iX6Z7lsEyNY+6l1TvR1t1hiY7Eh7ovaMxxi/bT7Vi/XLrA3YavveAFTwUwxiWMpjfPqJGNlFcGbRmjbVKwFckXsmhdP0a1TQOuLQEQVUUu58JADuYTZsjhsXXibOAgfhP+GsPRUfTAPKLFxTBk9M6YIgxxU+SqX7C6BmLOlsY9wsDpmg0OOZ4PzfDnSOfrH2qp5S8JsJlK/m+ZcWqnXNJ/Mvrp7WnoBI7doEqYdjjP67MyljhRfyqMdedjqz2BFMJRQ+7Flc/8/8AlBaKgcwYMBHgAAAABJRU5ErkJggg=="}
              onDelete={handleDeleteStire}
  
              />
            ))}
          </div>
        )}
      </div>
      <Meniujos />
    </animated.div>
  );
};

export default NoutatiDelete;
