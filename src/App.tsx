import React from 'react';
import './App.css';
import Header from './Fronend/Header';
import Main from './Fronend/Main';
import PropertyCategories from './Fronend/PropertyCategories';
import ExclusiveDeals from './Fronend/ExclusiveDeals';
import HotListings from './Fronend/HotListings';
import Footer from './Fronend/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <PropertyCategories />
      <div className="deals-listings">
        <ExclusiveDeals />
        <HotListings />
      </div>
      <Footer />
    </div>
  );
};

export default App;