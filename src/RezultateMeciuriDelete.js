import React, { useEffect, useState } from "react";
import "./RezultateMeciuri.css";
import FrameImage from "./imagini/frame.png";
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import { Link } from "react-router-dom";
import Meci from "./RezultateMeciuriMeci";

const RezultateMeciuriDelete = () => {
  const [RezultatData, setRezMeciData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://handballdevsbe.azurewebsites.net/api/meci?statusMeci=0&tipCampionat=0"
        );
        if (response.ok) {
          const data = await response.json();

          // Sort the data by data in descending order
          const sortedData = data.sort((a, b) => b.data.localeCompare(a.data));

          console.log("Sorted Data:", sortedData);

          setRezMeciData(sortedData);
        } else {
          console.error("API Error:", response.statusText);
        }
      } catch (error) {
        console.error("API Error:", error.message);
      }
    };

    fetchData();
  }, []);


  const handleDeleteMeci = async (id) => {
    try {
      const response = await fetch(
        `https://handballdevsbe.azurewebsites.net/api/meci?statusMeci=0&tipCampionat=0&id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log(`Meci with ID ${id} deleted successfully.`);
        // Update the state after deletion
        setRezMeciData((prevData) => prevData.filter((meci) => meci.id !== id));
      } else {
        console.error("API Error:", response.statusText);
      }
    } catch (error) {
      console.error("API Error:", error.message);
    }
  };
  

  return (
    <div className="app-container">
      <Meniusus />
      <div className="frame-overlay-meciuri">
        <img src={FrameImage} alt="" className="frame-meciuri" />
        <div className="words-club">
          <Link to="/calendarmeciuri" className="wordsmeciuri-list-link">
            CALENDAR MECIURI
          </Link>
          <div className="wordsmeciuri-list-link-calendar">
            REZULTATE MECIURI
          </div>
        </div>
      </div>

      <div className="frame-overlay-club-rezultate">
      <div className="wordslot-list-lot-rezultate">REZULTATE MECIURI</div>
        <img src={FrameImage} alt="" className="frame-club-rezultate" />
      
        <div className="words-lot-rezultate">
          
        <div className="meci-container">
       
         
          
          
          {RezultatData.slice(0,10 ).map((rezultat, index) => (
            <Meci
            key={rezultat.id}
            data={new Date(rezultat.data).toLocaleDateString()}
            meciul={`CSU Suceava vs ${rezultat.numeAdversar}`}
            locatia={rezultat.locatia}
            scorul={`${rezultat.scorCSUSV} - ${rezultat.scorAdversar}`}
            pozadelete={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHHSURBVHgB7VfRUcJAEH17Cf4oztEBJWAHUoFYgEOogBLQCrSDgFgAViBWIB0QG9B84AwzJKx7A2jARC4MDM7I+8gml817t7fJ3gbYEyiPs1/UNcWopBIRgthBrxGGISxgJexrrQtTeuIM0QRZMJlwtTEOA6yBCws4E3isUGEhZuZOqihRXUzZLZCPMarrOK2ESeHC2Ji50RiF/TQfWZU7N6Z3Oa3YcCobJwKVjT2KMMzySeRWw4ozge6pbqbnkWo0I+wxOPxlgp6x4tP+cY9VcDV6u/n2TeChWBpKHsvYESKHS4uVWcrxxOGqE+NcZnNhopS5S4R4xAYQjnM51iX6Z7lsEyNY+6l1TvR1t1hiY7Eh7ovaMxxi/bT7Vi/XLrA3YavveAFTwUwxiWMpjfPqJGNlFcGbRmjbVKwFckXsmhdP0a1TQOuLQEQVUUu58JADuYTZsjhsXXibOAgfhP+GsPRUfTAPKLFxTBk9M6YIgxxU+SqX7C6BmLOlsY9wsDpmg0OOZ4PzfDnSOfrH2qp5S8JsJlK/m+ZcWqnXNJ/Mvrp7WnoBI7doEqYdjjP67MyljhRfyqMdedjqz2BFMJRQ+7Flc/8/8AlBaKgcwYMBHgAAAABJRU5ErkJggg=="
            }
            onDelete={() => handleDeleteMeci(rezultat.id)}
            />
          ))}
        </div>
        </div>

      </div>
      <Meniujos />
    </div>
  );
};

export default RezultateMeciuriDelete;
