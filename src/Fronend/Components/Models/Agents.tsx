import React from 'react';
import '../Styles/Agents.css'; // Import the CSS file

const Agents: React.FC = () => {
  const hrefLink = 'https://ac14-2405-204-5215-ab0b-e5f2-e969-3851-b5dd.ngrok-free.app/';

  const brokers = [
    { name: 'Broker1', description: 'Experienced in residential and commercial properties.', rating: '1/5', commission: '10%', dealsClosed: 100, verified: true },
    { name: 'Broker2', description: 'Specializes in luxury real estate.', rating: '2/5', commission: '15%', dealsClosed: 200, verified: false },
    { name: 'Broker3', description: 'Known for excellent customer service.', rating: '2/5', commission: '20%', dealsClosed: 150, verified: true },
    { name: 'Broker4', description: 'Experienced in residential and commercial properties.', rating: '4.7/5', commission: '10%', dealsClosed: 100, verified: true },
    { name: 'Broker5', description: 'Specializes in luxury real estate.', rating: '3.5/5', commission: '15%', dealsClosed: 200, verified: false },
    { name: 'Broker6', description: 'Known for excellent customer service.', rating: '4.6/5', commission: '20%', dealsClosed: 150, verified: true },
    { name: 'Broker7', description: 'Experienced in residential and commercial properties.', rating: '4.7/5', commission: '10%', dealsClosed: 100, verified: true },
    { name: 'Broker8', description: 'Specializes in luxury real estate.', rating: '1.5/5', commission: '15%', dealsClosed: 200, verified: false },
    { name: 'Broker9', description: 'Known for excellent customer service.', rating: '2.6/5', commission: '20%', dealsClosed: 150, verified: true },
    { name: 'Broker10', description: 'Experienced in residential and commercial properties.', rating: '4.7/5', commission: '10%', dealsClosed: 100, verified: true },
    { name: 'Broker11', description: 'Specializes in luxury real estate.', rating: '3.5/5', commission: '15%', dealsClosed: 200, verified: false },
    { name: 'Broker12', description: 'Known for excellent customer service.', rating: '2.6/5', commission: '20%', dealsClosed: 150, verified: true },
  ];

  const [ratingFilter, setRatingFilter] = React.useState('');
  const [commissionFilter, setCommissionFilter] = React.useState('');
  const [dealsClosedFilter, setDealsClosedFilter] = React.useState('');
  const [verifiedFilter, setVerifiedFilter] = React.useState(false);

  const handleRatingFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRatingFilter(event.target.value);
  };

  const handleCommissionFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCommissionFilter(event.target.value);
  };

  const handleDealsClosedFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDealsClosedFilter(event.target.value);
  };

  const handleVerifiedFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerifiedFilter(event.target.checked);
  };

  const filteredBrokers = brokers.filter(broker => {
    let isRatingMatch = ratingFilter === '' || parseFloat(broker.rating) >= parseFloat(ratingFilter);
    let isCommissionMatch = commissionFilter === '' || broker.commission >= commissionFilter;
    let isDealsClosedMatch = dealsClosedFilter === '' || broker.dealsClosed >= parseInt(dealsClosedFilter);
    let isVerifiedMatch = !verifiedFilter || broker.verified;

    return isRatingMatch && isCommissionMatch && isDealsClosedMatch && isVerifiedMatch;
  });

  return (
    <div className="residential">
      <div className="filter-panel">
        <div  className='rating-filter'>
          <label htmlFor="rating-filter">Rating:</label>
          <select id="rating-filter" value={ratingFilter} onChange={handleRatingFilterChange}>
            <option value="">All</option>
            <option value="1">1/5</option>
            <option value="2">2/5</option>
            <option value="3">3/5</option>
            <option value="4">4/5</option>
          </select>
        </div>
        <div  className='rating-filter'>
          <label htmlFor="commission-filter">Commission:</label>
          <select id="commission-filter" value={commissionFilter} onChange={handleCommissionFilterChange}>
            <option value="">All</option>
            <option value="10%">10%</option>
            <option value="15%">15%</option>
            <option value="20%">20%</option>
          </select>
        </div>
        <div  className='rating-filter'>
          <label htmlFor="deals-closed-filter">Deals Closed:</label>
          <select id="deals-closed-filter" value={dealsClosedFilter} onChange={handleDealsClosedFilterChange}>
            <option value="">All</option>
            <option value="100">100+</option>
            <option value="150">150+</option>
            <option value="200">200+</option>
          </select>
        </div>
        <div  className='rating-filter'>
          <label htmlFor="verified-filter">Verified:</label>
          <input type="checkbox" id="verified-filter" checked={verifiedFilter} onChange={handleVerifiedFilterChange} />
        </div>
      </div>
      <div className="property-cards">
        {filteredBrokers.map((broker, index) => (
          <div key={broker.name} className="property-card">
            <p className=''>{broker.name}</p>
            <div className="description">{broker.description}</div>
            <div className="rating">{broker.rating}</div>
            <button className='experience-button' onClick={() => window.location.href = hrefLink}>
              Consult Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
