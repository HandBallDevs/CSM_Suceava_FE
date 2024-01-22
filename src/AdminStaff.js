import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import './AdminStaff.css';
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import AdminMenuImage from "./imagini/AdminMenuImage.png";
import AdminWorkSpaceImage from './imagini/AdminWorkSpaceImage.png';
import { useNavigate,Link } from "react-router-dom";
import AdminStaffCard from "./AdminStaffCard";

const AdminStaff = () => {
    const [playerData, setPlayerData] = useState(null);

  

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

      <div className="title-ADMStaff">
        <img src={FrameImage} alt="" className="frame-image-ADMStaff" />
        <div className="label-container-ADMStaff">
          <label className="label_title-ADMStaff">Panou Administrator</label>
          <div className="row-title-ADMStaff">
            <label className="label_subtitle-ADMStaff">Acasa</label>
            <label className="label_subtitle-ADMStaff">/</label>
            <label className="label_subtitle_admin-ADMStaff">Panou Administrator</label>
          </div>
        </div>
      </div>

      <div className="Container-ADMStaff">
        <div className="Menu-ADMStaff">
          <img src={AdminMenuImage} alt="" className="Admin-menu-img-ADMStaff" />
          <label className="ADMStaff_titles">Panou Administrator</label>
          <div className="options_ADMStaff">
            <Link to="/adminstiri" className="ADMStaff_options">Stiri</Link>
            <Link to="/adminmeciuri" className="ADMStaff_options">Meciuri</Link>
            <Link to="/adminusers" className="ADMStaff_options">Utilizatori</Link>
            <Link to="/adminjucatori" className="ADMStaff_options">Jucatorii Seniori</Link>
            <Link to="/adminjuniori" className="ADMStaff_options">Jucatorii Juniori</Link>
            <Link to="/adminstaff" className="ADMStaff_options">Staff</Link>
          </div>
        </div>  
        <div className="Workspace-ADMStaff">
             <div className="Workspace-row-ADMStaff">
                <div className="Workspace-row-ADMStaff1">
                    <label  className="label-filter-ADMStaff" htmlFor="cauta">Cauta :</label>
                    <input type="text" id="cauta" name="cauta" className="textbox-filter-ADMStaff"/>
                    <label  className="label-filter-ADMStaff" htmlFor="filtreaza">Filtreaza dupa :</label>
                    <input type="text" id="filtreaza" name="filtreaza" className="textbox-filter-ADMStaff"/>
                </div>
                <div className="Workspace-row-ADMStaff2">
                <Link to="/adaugastaff">
                    <button className="button-adauga_jucator-ADMStaff"> + Adauga Antrenor </button>
                </Link>
                    <label  className="label-title_j-ADMStaff" >Staff </label>
                </div>
             </div>
             
             {playerData && (
  <div className="Workspace-row-ADMStaff3">
    {playerData.map((player) => (
      <AdminStaffCard
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

export default AdminStaff;
