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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acasa />} />
        <Route path="/noutati" element={<Noutati />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clubclasament" element={<ClubClasament />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
