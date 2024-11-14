import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sport from './components/Sport';
import VietScolaire from './components/VieScolaire';
import Ecologie from './components/Ecologie';
import Sciences from './components/Sciences';
import Numerique from './components/Numerique';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/vie-scolaire" element={<VietScolaire />} />
          <Route path="/ecologie" element={<Ecologie />} />
          <Route path="/sciences" element={<Sciences />} />
          <Route path="/numerique" element={<Numerique />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;