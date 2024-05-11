import React from 'react';
import './HotListings.css';

const HotListings: React.FC = () => {
  return (
    <section className="hot-listings">
      <h2>Hot Listings</h2>
      <div className="listings-container">
        <div className="listing">
          <h3>Spacious villa with</h3>
          <button>Add to cart</button>
        </div>
        <div className="listing">
          <h3>Fine Dining Experience</h3>
        </div>
        <div className="listing">
          <h3>Mountain view villa with</h3>
        </div>
      </div>

      <h2>Property Category</h2>
      <div className="listings-container">
        <div className="listing">
          <h3>Unbuilt Housing</h3>
          <button>Add to cart</button>
        </div>
        <div className="listing">
          <h3>Urban Living</h3>
        </div>
        <div className="listing">
          <h3>Villa/ Indenpendent House</h3>
        </div>
        <div className="listing">
          <h3>Rented Housing</h3>
        </div>
        <div className="listing">
          <h3>PGs</h3>
        </div>
        <div className="listing">
          <h3>Plot/ Land</h3>
        </div>
        <div className="listing">
          <h3>Buy Commercial</h3>
        </div>
        <div className="listing">
          <h3>Lease Commercial</h3>
        </div>
      </div>
    </section>
  );
};

export default HotListings;
