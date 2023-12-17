// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
//import Layout from './layout';
import Acasa from "./Acasa";
import Noutati from "./Noutati";
import Contact from "./Contact";
import Meniusus from "./Meniusus";
import Meniujos from "./Meniujos";
import Admin from "./Admin";
import AdminStiri from "./AdminStiri";
import AdminMeciuri from "./AdminMeciuri";
import ClubClasament from "./ClubClasament";
import ClubLot from "./ClubLot";
import DetaliiClub from "./DetaliiClub";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acasa />} />
        <Route path="/noutati" element={<Noutati/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clubclasament" element={<ClubClasament />} />
        <Route path="/clublot" element={<ClubLot />} />
        <Route path="/detaliiclub" element={<DetaliiClub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminstiri" element={<AdminStiri />} />
       


       
      </Routes>
    </Router>
  
    
  );
}

export default App;
