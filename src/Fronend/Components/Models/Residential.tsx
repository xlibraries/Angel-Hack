import React from 'react';
import '../Styles/Residential.css'; // Import the CSS file

const Residential: React.FC = () => {
  const hrefLink = 'https://ac14-2405-204-5215-ab0b-e5f2-e969-3851-b5dd.ngrok-free.app/';

  return (
    <div className="residential">
      <div className="filter-panel">
        <div>Buy</div>
        <div>Rent</div>
        <div>Price</div>
      </div>
      <div className="property-cards">
        <div className="property-card">
          <p className=''>Property 1</p>
          <button className='experience-button' onClick={() => window.location.href = hrefLink}>
           Experience
          </button>
        </div>
        <div className="property-card">
          <p className=''>Property 1</p>
          <button className='experience-button' onClick={() => window.location.href = hrefLink}>
           Experience
          </button>
        </div>
        <div className="property-card">
          <p className=''>Property 1</p>
          <button className='experience-button' onClick={() => window.location.href = hrefLink}>
           Experience
          </button>
        </div>
        <div className="property-card">
          <p className=''>Property 1</p>
          <button className='experience-button' onClick={() => window.location.href = hrefLink}>
           Experience
          </button>
        </div>
        <div className="property-card">
          <p className=''>Property 1</p>
          <button className='experience-button' onClick={() => window.location.href = hrefLink}>
           Experience
          </button>
        </div>
        <div className="property-card">
          <p className=''>Property 1</p>
          <button className='experience-button' onClick={() => window.location.href = hrefLink}>
           Experience
          </button>
        </div>
        <div className="property-card">
          <p className=''>Property 1</p>
          <button className='experience-button' onClick={() => window.location.href = hrefLink}>
           Experience
          </button>
        </div>
        <div className="property-card">
          <p className=''>Property 1</p>
          <button className='experience-button' onClick={() => window.location.href = hrefLink}>
           Experience
          </button>
        </div>
        <div className="property-card">
          <p className=''>Property 1</p>
          <button className='experience-button' onClick={() => window.location.href = hrefLink}>
           Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default Residential;
