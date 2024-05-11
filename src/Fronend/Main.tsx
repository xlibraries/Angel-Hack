import React from 'react';
import './Main.css';

const Main: React.FC = () => {
  return (
    <main className="main">
      <h1>Find your dream property with ease</h1>
      <p>Browse by location, type or price range!</p>
      <form className="search-form">
        <input type="text" placeholder="What property are you looking for?" />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};

export default Main;
