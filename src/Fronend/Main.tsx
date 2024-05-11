import React from 'react';
import './Main.css';

const Main: React.FC = () => {
  return (
    <main className="main">
      <div className="content">
        <h1>Find your dream property with ease</h1>
        <p>Browse by location, type or price range!</p>
        <form className="search-form">
          <input type="text" placeholder="What property are you looking for?" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="image">
        {/* Add your image here */}
      </div>
    </main>
  );
};

export default Main;
