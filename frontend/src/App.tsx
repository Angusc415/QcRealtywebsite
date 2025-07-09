import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Aboutus from './Aboutus';
import Admin from './admin';
import Buying from './buying';
import Contactus from './Contactus';
import Renting from './Renting';
//import PropertyDetail from './PropertyDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/buying" element={<Buying />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Renting" element={<Renting />} />
      </Routes>
    </Router>
  );
}

export default App;
