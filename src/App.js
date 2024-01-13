// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
//import Layout from './layout';
import Acasa from "./Acasa";
import Noutati from "./Noutati";
import Contact from "./Contact";
//import Meniusus from "./Meniusus";
//import Meniujos from "./Meniujos";
import Admin from "./Admin";
import AdminStiri from "./AdminStiri";
import AdminMeciuri from "./AdminMeciuri";
import AdminUsers from "./AdminUsers"
import ClubClasament from "./ClubClasament";
import ClubLot from "./ClubLot";
import ClubLotJuniori from "./ClubLotJuniori";
import ClubLotCadeti from "./ClubLotCadeti";
import DetaliiClub from "./DetaliiClub";
import Login from "./Login";
import CalendarMeciuri from "./CalendarMeciuri";
import RezultateMeciuri from "./RezultateMeciuri";
import AdminJucatori from "./AdminJucatori";
import AdminStaff from "./AdminStaff";
import EditeazaJucator from "./EditeazaJucator";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acasa />} />
        <Route path="/noutati" element={<Noutati/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clubclasament" element={<ClubClasament />} />
        <Route path="/clublot" element={<ClubLot />} />
        <Route path="/clublotjuniori" element={<ClubLotJuniori />} />
        <Route path="/clublotcadeti" element={<ClubLotCadeti />} />
        <Route path="/detaliiclub" element={<DetaliiClub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminstiri" element={<AdminStiri />} />
        <Route path="/adminmeciuri" element={<AdminMeciuri />} />
        <Route path="/calendarmeciuri" element={<CalendarMeciuri />} />
        <Route path="/rezultatemeciuri" element={<RezultateMeciuri />} />
        <Route path="/adminusers" element={<AdminUsers />} />
        <Route path="/adminjucatori" element={<AdminJucatori />} />
        <Route path="/adminstaff" element={<AdminStaff />} />
        <Route path="/editeazajucator" element={<EditeazaJucator />} />
      


       
      </Routes>
    </Router>
  
    
  );
}

export default App;
