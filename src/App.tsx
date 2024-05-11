import React from 'react';
import './App.css';
import Header from './Fronend/Header';
import Main from './Fronend/Main';
import PropertyCategories from './Fronend/PropertyCategories';
import ExclusiveDeals from './Fronend/ExclusiveDeals';
import HotListings from './Fronend/HotListings';
import Footer from './Fronend/Footer';
import Residential from './Fronend/Components/Residential'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Commercial from './Fronend/Components/Commercial';
import Services from './Fronend/Components/Services';
import Contact from './Fronend/Components/Contact';
import Agents from './Fronend/Components/Agents';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Main />
              <PropertyCategories />
              <div className="deals-listings">
                <ExclusiveDeals />
                <HotListings />
              </div>
            </>
          } />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
