import React from 'react';
import './PropertyCategories.css';

const PropertyCategories: React.FC = () => {
  return (
    <section className="property-categories">
      <h2>Property Categories</h2>
      <div className="categories">
        <div className="category">Houses</div>
        <div className="category">Apartment</div>
        <div className="category">Commercial</div>
        <div className="category">Land and Property</div>
        <div className="category">Vacation</div>
        <div className="category">Rental</div>
      </div>
    </section>
  );
};

export default PropertyCategories;
