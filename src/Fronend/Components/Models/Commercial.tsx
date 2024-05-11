import React from 'react';
import '../Styles/Residential.css'; // Import the CSS file

const Commercial: React.FC = () => {

  const properties = [
    { name: 'Office Plaza', amenities: 'Conference Rooms, Cafeteria', type: 'Office Space', size: '5000 sq ft', ownership: 'Lease', availability: 'Immediate', verified: true, location: 'Central Business District', price: '₹ 1,00,000/month' },
    { name: 'Tech Park Tower', amenities: 'Fitness Center, Parking', type: 'Office Building', size: '10000 sq ft', ownership: 'Buy', availability: 'June 2024', verified: true, location: 'Tech Hub Area', price: '₹ 10 Crores' },
    { name: 'Commerce Center', amenities: '24/7 Security, High-speed Internet', type: 'Commercial Complex', size: '20000 sq ft', ownership: 'Lease', availability: 'July 2024', verified: true, location: 'Financial District', price: '₹ 2,00,000/month' },
    { name: 'Business Tower', amenities: 'Conference Rooms, Rooftop Garden', type: 'Office Tower', size: '15000 sq ft', ownership: 'Buy', availability: 'Immediate', verified: true, location: 'Downtown Area', price: '₹ 15 Crores' },
    { name: 'Corporate Hub', amenities: 'Cafeteria, Lounge Area', type: 'Commercial Building', size: '8000 sq ft', ownership: 'Lease', availability: 'October 2024', verified: true, location: 'Business Park', price: '₹ 1,20,000/month' },
    { name: 'Executive Plaza', amenities: 'Meeting Rooms, Parking', type: 'Office Complex', size: '12000 sq ft', ownership: 'Buy', availability: 'Immediate', verified: true, location: 'City Center', price: '₹ 12 Crores' },
    { name: 'Tech Innovation Center', amenities: 'Gym, Cafeteria', type: 'Tech Hub Space', size: '25000 sq ft', ownership: 'Lease', availability: 'August 2024', verified: true, location: 'Tech Hub Area', price: '₹ 3,00,000/month' },
    { name: 'Commerce Tower', amenities: 'Conference Rooms, Parking', type: 'Commercial Tower', size: '18000 sq ft', ownership: 'Buy', availability: 'November 2024', verified: true, location: 'Financial District', price: '₹ 18 Crores' },
    { name: 'Business Center', amenities: 'Lounge Area, High-speed Internet', type: 'Office Space', size: '6000 sq ft', ownership: 'Lease', availability: 'Immediate', verified: true, location: 'Central Business District', price: '₹ 80,000/month' },
    { name: 'Corporate Tower', amenities: 'Meeting Rooms, Rooftop Garden', type: 'Commercial Tower', size: '20000 sq ft', ownership: 'Buy', availability: 'Immediate', verified: true, location: 'Business Park', price: '₹ 20 Crores' }
  ];

  const [typeFilter, setTypeFilter] = React.useState('');
  const [ownershipFilter, setOwnershipFilter] = React.useState('');
  const [verifiedFilter, setVerifiedFilter] = React.useState(false);
  const [locationFilter, setLocationFilter] = React.useState('');
  const [priceFilter, setPriceFilter] = React.useState('');
  const [availabilityFilter, setAvailabilityFilter] = React.useState('');
  const [amenitiesFilter, setAmenitiesFilter] = React.useState('');

  const handleTypeFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFilter(event.target.value);
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

  const handleAvailabilityFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAvailabilityFilter(event.target.value);
  };

  const handleAmenitiesFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAmenitiesFilter(event.target.value);
  };

  const filteredProperties = properties.filter(property => {
    let isTypeMatch = typeFilter === '' || property.type === typeFilter;
    let isOwnershipMatch = ownershipFilter === '' || property.ownership === ownershipFilter;
    let isVerifiedMatch = !verifiedFilter || property.verified;
    let isLocationMatch = locationFilter === '' || property.location === locationFilter;
    let isPriceMatch = priceFilter === '' || property.price === priceFilter;
    let isAvailabilityMatch = availabilityFilter === '' || property.availability === availabilityFilter;
    let isAmenitiesMatch = amenitiesFilter === '' || property.amenities === amenitiesFilter;

    return isTypeMatch && isOwnershipMatch && isVerifiedMatch && isLocationMatch && isPriceMatch && isAvailabilityMatch && isAmenitiesMatch;
  });

  return (
    <div className="residential">
      <div className="filters-panel">
        <div className='property-filter'>
          <label htmlFor="type-filter">Type:</label>
          <select id="type-filter" value={typeFilter} onChange={handleTypeFilterChange}>
            <option value="">All</option>
            <option value="Office Space">Office Space</option>
            <option value="Office Building">Office Building</option>
            <option value="Commercial Complex">Commercial Complex</option>
            <option value="Office Tower">Office Tower</option>
            <option value="Commercial Building">Commercial Building</option>
            <option value="Tech Hub Space">Tech Hub Space</option>
            <option value="Commercial Tower">Commercial Tower</option>
          </select>
        </div>
        <div className='property-filter'>
          <label htmlFor="ownership-filter">Ownership:</label>
          <select id="ownership-filter" value={ownershipFilter} onChange={handleOwnershipFilterChange}>
            <option value="">All</option>
            <option value="Buy">Buy</option>
            <option value="Lease">Lease</option>
          </select>
        </div>
        <div className='property-filter'>
          <label htmlFor="verified-filter">Verified:</label>
          <input type="checkbox" id="verified-filter" checked={verifiedFilter} onChange={handleVerifiedFilterChange} />
        </div>
        <div className='property-filter'>
          <label htmlFor="location-filter">Location:</label>
          <select id="location-filter" value={locationFilter} onChange={handleLocationFilterChange}>
            <option value="">All</option>
            <option value="Central Business District">Central Business District</option>
            <option value="Tech Hub Area">Tech Hub Area</option>
            <option value="Financial District">Financial District</option>
            <option value="Downtown Area">Downtown Area</option>
            <option value="Business Park">Business Park</option>
            <option value="City Center">City Center</option>
          </select>
        </div>
        <div className='property-filter'>
          <label htmlFor="price-filter">Price:</label>
          <select id="price-filter" value={priceFilter} onChange={handlePriceFilterChange}>
            <option value="">All</option>
            <option value="₹ 80,000/month">₹ 80,000/month</option>
            <option value="₹ 1,00,000/month">₹ 1,00,000/month</option>
            <option value="₹ 1 Crore">₹ 1 Crore</option>
            <option value="₹ 10 Crores">₹ 10 Crores</option>
            <option value="₹ 1,20,000/month">₹ 1,20,000/month</option>
            <option value="₹ 12 Crores">₹ 12 Crores</option>
            <option value="₹ 2 Crores">₹ 2 Crores</option>
            <option value="₹ 20 Crores">₹ 20 Crores</option>
            <option value="₹ 3,00,000/month">₹ 3,00,000/month</option>
            <option value="₹ 18 Crores">₹ 18 Crores</option>
          </select>
        </div>
        <div className='property-filter'>
          <label htmlFor="availability-filter">Availability:</label>
          <select id="availability-filter" value={availabilityFilter} onChange={handleAvailabilityFilterChange}>
            <option value="">All</option>
            <option value="Immediate">Immediate</option>
            <option value="June 2024">June 2024</option>
            <option value="July 2024">July 2024</option>
            <option value="October 2024">October 2024</option>
            <option value="August 2024">August 2024</option>
            <option value="November 2024">November 2024</option>
          </select>
        </div>
      </div>

      <div className="property-cards">
        {filteredProperties.map((property, index) => (
          <div className="property-card" key={index}>
            <p className=''>{property.name}</p>
            <button className='experience-button'>
              Experience
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commercial;
