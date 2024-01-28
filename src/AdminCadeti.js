import React, { useState, useEffect } from "react";

import './AdminJucatori.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import AdminMenuImage from "./imagini/AdminMenuImage.png";
import { useNavigate,Link } from "react-router-dom";
import AdminCadetiCard from './AdminCadetiCard';
import { useSpring, animated } from "react-spring";


const AdminCadeti = () => {
  const [playerData, setPlayerData] = useState(null);

  const [searchName, setSearchName] = useState("");
  const [searchPosition, setSearchPosition] = useState("");
  

  // ... (other functions)

  const handleSearchNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchPositionChange = (e) => {
    setSearchPosition(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://handballdevsbe.azurewebsites.net/api/staff?tipLot=2"
        );
        if (response.ok) {
          const data = await response.json();

          // Filter players based on search criteria
          const filteredData = data.filter((player) => {
            const fullName = `${player.nume} ${player.prenume}`.toLowerCase();
            const position = player.post.toLowerCase();

            return (
              fullName.includes(searchName.toLowerCase()) &&
              position.includes(searchPosition.toLowerCase())
            );
          });

          setPlayerData(filteredData);
        } else {
          console.error("API Error:", response.statusText);
        }
      } catch (error) {
        console.error("API Error:", error.message);
      }
    };

    fetchData();
  }, [searchName, searchPosition]);

  

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const calculateAge = (dateString) => {
    const birthDate = new Date(dateString);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };
  const handleUpdate = (id) => {
  // Perform any logic you need before navigating or updating
  console.log(`Update clicked for player with ID: ${id}`);
  // Navigate to EditeazaJucator or perform other actions
};

  const handleDeletePlayer = async (playerId) => {
    try {
      const response = await fetch(`https://handballdevsbe.azurewebsites.net/api/staff?tipLot=2&id=${playerId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        setPlayerData((prevData) => prevData.filter((player) => player.id !== playerId));
        console.log('Player deleted successfully.');
      } else {
        console.error('Error deleting player:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting player:', error.message);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://handballdevsbe.azurewebsites.net/api/staff?tipLot=2"
        );
        if (response.ok) {
          const data = await response.json();
          console.log("API Response:", data);
          setPlayerData(data);
        } else {
          console.error("API Error:", response.statusText);
        }
      } catch (error) {
        console.error("API Error:", error.message);
      }
     
    };

    fetchData();
  }, []);

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
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
            <Link to="/adminjucatori" className="ADMJucatori_options">Jucatorii Seniori</Link>
         
            <Link to="/adminjuniori" className="ADMJucatori_options">Jucatorii Juniori</Link>
            <Link to="/admincadeti" className="ADMJucatori_options">Jucatori Cadeti</Link>
            <Link to="/adminstaff" className="ADMJucatori_options">Staff</Link>
          </div>
        </div>  
        <div className="Workspace-ADMJucatori">
             <div className="Workspace-row-ADMJucatori">
                <div className="Workspace-row-ADMJucatori1">
                    <label  className="label-filter-ADMJucatori" htmlFor="cauta">Cauta jucator :</label>
                    <input type="text" id="cauta" name="cauta" className="textbox-filter-ADMJucatori" value={searchName}
          onChange={handleSearchNameChange}/>
                    <label  className="label-filter-ADMJucatori" htmlFor="filtreaza">Filtreaza dupa :</label>
                    <input type="text" id="filtreaza" name="filtreaza" className="textbox-filter-ADMJucatori" value={searchPosition}
          onChange={handleSearchPositionChange}/>
                </div>
                <div className="Workspace-row-ADMJucatori2">
                <Link to="/adaugacadeti" className="Workspace-row-ADMJucatori2">
                    <button className="button-adauga_jucator-ADMJucatori"> + Adauga Jucator  </button>
                </Link>
                    <label  className="label-title_j-ADMJucatori" >Lot Cadeti </label>
                </div>
             </div>
             
             {playerData && (
  <div className="Workspace-row-ADMJucatori3">
    {playerData.map((player) => (
      <AdminCadetiCard
        key={player.id}  // Use a unique identifier as the key
        id={player.id}
        poza={player.urlPoza}
        nume={player.nume}
        prenume={player.prenume}
        pozitie={player.post}
        nationalitate={player.nationalitate}
        varsta={calculateAge(player.dataNastere)}
        inaltimea={player.inaltime}
        onDelete={handleDeletePlayer}
        onUpdate={handleUpdate}
      />
    ))}
  </div>
)}

              
          
        </div>
      </div>


    </div>
  );
};

export default AdminCadeti;
