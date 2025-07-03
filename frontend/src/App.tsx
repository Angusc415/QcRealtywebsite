import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Aboutus from './Aboutus';
import Admin from './admin';
import Buying from './buying';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/buying" element={<Buying />} />
      </Routes>
    </Router>
  );
}

export default App;
