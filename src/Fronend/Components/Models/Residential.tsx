import React from 'react';
import '../Styles/Residential.css'; // Import the CSS file
import Prop1 from '../../../assets/Residential/1.jpg';
import Prop2 from '../../../assets/Residential/2.jpg';
import Prop3 from '../../../assets/Residential/3.jpg';
import Prop4 from '../../../assets/Residential/4.jpg';
import Prop5 from '../../../assets/Residential/5.jpg';
import Prop6 from '../../../assets/Residential/6.jpg';
import Prop7 from '../../../assets/Residential/7.jpg';
import Prop8 from '../../../assets/Residential/8.jpg';
import Prop9 from '../../../assets/Residential/9.jpg';
import Prop10 from '../../../assets/Residential/10.jpg';
import Prop11 from '../../../assets/Residential/11.jpg';

const Residential: React.FC = () => {
  const hrefLink = 'https://ac14-2405-204-5215-ab0b-e5f2-e969-3851-b5dd.ngrok-free.app/';

  const properties = [
    { name: 'Godreej Amira', amanities: 'GYM, Swiming pool, Garden', type: 'Urban Housing', room: '2 BHK', owenership: 'Buy', possision: 'May 2025', verified: true, location: 'Indiranagar', price: '₹ 1.5 Cr', backgroundUrl: Prop1 },
    { name: 'Property 2', amanities: 'GYM, Swiming pool, Garden', type: 'Urban Housing', room: '3 BHK', owenership: 'Buy', possision: 'June 2023', verified: true, location: 'Whitefield', price: '₹ 2.2 Cr', backgroundUrl: Prop2 },
    { name: 'Property 3', amanities: 'Clubhouse, Tennis court, Playground', type: 'Villa', room: '4 BHK', owenership: 'Buy', possision: 'December 2022', verified: true, location: 'Electronic City', price: '₹ 3.5 Cr', backgroundUrl: Prop3 },
    { name: 'Property 4', amanities: 'Swimming pool, Gym, Garden', type: 'Apartment', room: '2 BHK', owenership: 'Rent', possision: 'Immediate', verified: false, location: 'Koramangala', price: '₹ 35,000/month', backgroundUrl: Prop4 },
    { name: 'Property 5', amanities: 'Clubhouse, Basketball court, Jogging track', type: 'Villa', room: '5 BHK', owenership: 'Buy', possision: 'April 2024', verified: true, location: 'Sarjapur Road', price: '₹ 4.8 Cr', backgroundUrl: Prop5},
    { name: 'Property 6', amanities: 'Swimming pool, Gym, Garden', type: 'Apartment', room: '1 BHK', owenership: 'Rent', possision: 'Immediate', verified: true, location: 'Marathahalli', price: '₹ 20,000/month', backgroundUrl: Prop6},
    { name: 'Property 7', amanities: 'Clubhouse, Tennis court, Playground', type: 'Villa', room: '3 BHK', owenership: 'Buy', possision: 'July 2023', verified: true, location: 'HSR Layout', price: '₹ 1.8 Cr', backgroundUrl: Prop7},
    { name: 'Property 8', amanities: 'Swimming pool, Gym, Garden', type: 'Apartment', room: '2 BHK', owenership: 'Rent', possision: 'Immediate', verified: true, location: 'JP Nagar', price: '₹ 30,000/month', backgroundUrl: Prop8},
    { name: 'Property 9', amanities: 'Clubhouse, Basketball court, Jogging track', type: 'Villa', room: '4 BHK', owenership: 'Buy', possision: 'October 2022', verified: false, location: 'Bannerghatta Road', price: '₹ 3.2 Cr', backgroundUrl: Prop9},
    { name: 'Property 10', amanities: 'Swimming pool, Gym, Garden', type: 'Apartment', room: '1 BHK', owenership: 'Rent', possision: 'Immediate', verified: true, location: 'BTM Layout', price: '₹ 18,000/month', backgroundUrl: Prop10},
    { name: 'Property 11', amanities: 'Clubhouse, Tennis court, Playground', type: 'Villa', room: '3 BHK', owenership: 'Buy', possision: 'August 2023', verified: true, location: 'Bellandur', price: '₹ 2.1 Cr', backgroundUrl: Prop11},
    { name: 'Property 12', amanities: 'Swimming pool, Gym, Garden', type: 'Apartment', room: '2 BHK', owenership: 'Rent', possision: 'Immediate', verified: true, location: 'Indiranagar', price: '₹ 40,000/month', backgroundUrl: Prop1},
    { name: 'Property 13', amanities: 'Clubhouse, Basketball court, Jogging track', type: 'Villa', room: '4 BHK', owenership: 'Buy', possision: 'November 2022', verified: true, location: 'Whitefield', price: '₹ 3.6 Cr', backgroundUrl: Prop2},
    { name: 'Property 14', amanities: 'Swimming pool, Gym, Garden', type: 'Apartment', room: '1 BHK', owenership: 'Rent', possision: 'Immediate', verified: false, location: 'Electronic City', price: '₹ 22,000/month', backgroundUrl: Prop3},
    { name: 'Property 15', amanities: 'Clubhouse, Tennis court, Playground', type: 'Villa', room: '3 BHK', owenership: 'Buy', possision: 'September 2023', verified: true, location: 'Koramangala', price: '₹ 1.9 Cr', backgroundUrl: Prop4},
    { name: 'Property 16', amanities: 'Swimming pool, Gym, Garden', type: 'Apartment', room: '2 BHK', owenership: 'Rent', possision: 'Immediate', verified: true, location: 'Sarjapur Road', price: '₹ 32,000/month', backgroundUrl: Prop5},
    { name: 'Property 17', amanities: 'Clubhouse, Basketball court, Jogging track', type: 'Villa', room: '4 BHK', owenership: 'Buy', possision: 'January 2023', verified: true, location: 'Marathahalli', price: '₹ 3.8 Cr', backgroundUrl: Prop6},
    { name: 'Property 18', amanities: 'Swimming pool, Gym, Garden', type: 'Apartment', room: '1 BHK', owenership: 'Rent', possision: 'Immediate', verified: true, location: 'HSR Layout', price: '₹ 25,000/month', backgroundUrl: Prop7},
    { name: 'Property 19', amanities: 'Clubhouse, Tennis court, Playground', type: 'Villa', room: '3 BHK', owenership: 'Buy', possision: 'October 2023', verified: false, location: 'JP Nagar', price: '₹ 2.3 Cr', backgroundUrl: Prop8},
    { name: 'Property 20', amanities: 'Swimming pool, Gym, Garden', type: 'Apartment', room: '2 BHK', owenership: 'Rent', possision: 'Immediate', verified: true, location: 'Bannerghatta Road', price: '₹ 28,000/month', backgroundUrl: Prop9},
  ];

  const [typeFilter, setTypeFilter] = React.useState('');
  const [roomFilter, setRoomFilter] = React.useState('');
  const [ownershipFilter, setOwnershipFilter] = React.useState('');
  const [verifiedFilter, setVerifiedFilter] = React.useState(false);
  const [locationFilter, setLocationFilter] = React.useState('');
  const [priceFilter, setPriceFilter] = React.useState('');
  const [possisionFilter, setPossisionFilter] = React.useState('');
  const [amanitiesFilter, setAmanitiesFilter] = React.useState('');

  const handleTypeFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFilter(event.target.value);
  };
  const handleRoomFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRoomFilter(event.target.value);
  };
  const handleOwnershipFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOwnershipFilter(event.target.value);
  };
  const handleVerifiedFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerifiedFilter(event.target.checked);
  };
  const handleLocationFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocationFilter(event.target.value);
  };
  const handlePriceFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceFilter(event.target.value);
  };
  const handlePossisionFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPossisionFilter(event.target.value);
  };
  const handleAmanitiesFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAmanitiesFilter(event.target.value);
  };

  const filteredProperties = properties.filter(property => {
    let isTypeMatch = typeFilter === '' || property.type === typeFilter;
    let isRoomMatch = roomFilter === '' || property.room === roomFilter;
    let isOwnershipMatch = ownershipFilter === '' || property.owenership === ownershipFilter;
    let isVerifiedMatch = !verifiedFilter || property.verified;
    let isLocationMatch = locationFilter === '' || property.location === locationFilter;
    let isPriceMatch = priceFilter === '' || property.price === priceFilter;
    let isPossisionMatch = possisionFilter === '' || property.possision === possisionFilter;
    let isAmanitiesMatch = amanitiesFilter === '' || property.amanities === amanitiesFilter;

    return isTypeMatch && isRoomMatch && isOwnershipMatch && isVerifiedMatch && isLocationMatch && isPriceMatch && isPossisionMatch && isAmanitiesMatch;
  });


  return (
    <div className="residential">
      <div className="filters-panel">
        <div  className='property-filter'>
          <label htmlFor="type-filter">Type:</label>
          <select id="type-filter" value={typeFilter} onChange={handleTypeFilterChange}>
            <option value="">All</option>
            <option value="Urban Housing">Urban Housing</option>
            <option value="Villa">Villa</option>
            <option value="Apartment">Apartment</option>
          </select>
          </div>
        <div  className='property-filter'>
          <label htmlFor="room-filter">Room:</label>
          <select id="room-filter" value={roomFilter} onChange={handleRoomFilterChange}>
            <option value="">All</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
            <option value="5 BHK">5 BHK</option>
          </select>
          </div>
        <div  className='property-filter'>
          <label htmlFor="ownership-filter">Ownership:</label>
          <select id="ownership-filter" value={ownershipFilter} onChange={handleOwnershipFilterChange}>
            <option value="">All</option>
            <option value="Buy">Buy</option>
            <option value="Rent">Rent</option>
          </select>
          </div>
        <div  className='property-filter'>
          <label htmlFor="verified-filter">Verified:</label>
          <input type="checkbox" id="verified-filter" checked={verifiedFilter} onChange={handleVerifiedFilterChange} />
          </div>
        <div  className='property-filter'>
          <label htmlFor="location-filter">Location:</label>
          <select id="location-filter" value={locationFilter} onChange={handleLocationFilterChange}>
            <option value="">All</option>
            <option value="Indiranagar">Indiranagar</option>
            <option value="Whitefield">Whitefield</option>
            <option value="Electronic City">Electronic City</option>
            <option value="Koramangala">Koramangala</option>
            <option value="Sarjapur Road">Sarjapur Road</option>
            <option value="Marathahalli">Marathahalli</option>
            <option value="HSR Layout">HSR Layout</option>
            <option value="JP Nagar">JP Nagar</option>
            <option value="Bannerghatta Road">Bannerghatta Road</option>
            <option value="BTM Layout">BTM Layout</option>
            <option value="Bellandur">Bellandur</option>
          </select>
          </div>
        <div  className='property-filter'>
          <label htmlFor="price-filter">Price:</label>
          <select id="price-filter" value={priceFilter} onChange={handlePriceFilterChange}>
            <option value="">All</option>
            <option value="₹ 18,000/month">₹ 18,000/month</option>
            <option value="₹ 20,000/month">₹ 20,000/month</option>
            <option value="₹ 22,000/month">₹ 22,000/month</option>
            <option value="₹ 25,000/month">₹ 25,000/month</option>
            <option value="₹ 28,000/month">₹ 28,000/month</option>
            <option value="₹ 30,000/month">₹ 30,000/month</option>
            <option value="₹ 32,000/month">₹ 32,000/month</option>
            <option value="₹ 35,000/month">₹ 35,000/month</option>
            <option value="₹ 40,000/month">₹ 40,000/month</option>
          </select>
          </div>
      </div>
      <div className="property-cards">
        {filteredProperties.map((broker, index) => (
          <div key={broker.name} className="property-card" style={{ backgroundImage: `url(${broker.backgroundUrl})` }}>
            <div className="description">{broker.name} is a {broker.verified ? 'Verified' : 'Not Verified'} property is present in prime location of in {broker.location} with amenities: {broker.amanities} available for {broker.owenership} with a starting price of {broker.price} only!!!</div>
            <button className='experience-button' onClick={() => window.location.href = hrefLink}>
              Experience It!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Residential;
