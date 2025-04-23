import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import FeaturedDishes from './components/FeaturedDishes.jsx';
import LandingPage from './components/langingPage.jsx';
import ContactUs from './components/contact.jsx';
import ClientProfile from './components/profile.jsx';
import AboutUs from './components/aboutUs.jsx';
import ReservationCard from './components/card.jsx';
import Responsable from './components/responsable.jsx';
// import Home from './components/Home';  // Add Home component here
//import { useAuth } from './AuthContext.jsx'; // adapte le chemin



function App() {
  //const { isAuthenticated } = useAuth();
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/restaurant" element={<FeaturedDishes />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<ClientProfile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<ReservationCard />} />
        <Route path="/Responsable" element={<Responsable />} />








      </Routes>
    </Router>
  );
}

export default App;
