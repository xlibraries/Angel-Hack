import React from 'react';
import '../Styles/Agents.css'; // Import the CSS file

const Agents: React.FC = () => {
  const hrefLink = 'https://ac14-2405-204-5215-ab0b-e5f2-e969-3851-b5dd.ngrok-free.app/';

  const brokers = [
    { name: 'Broker1', description: 'Experienced in residential and commercial properties.', rating: '4.7/5' },
    { name: 'Broker2', description: 'Specializes in luxury real estate.', rating: '4.5/5' },
    { name: 'Broker3', description: 'Known for excellent customer service.', rating: '4.6/5' },
    { name: 'Broker4', description: 'Expert in the downtown real estate market.', rating: '4.8/5' },
    { name: 'Broker5', description: 'Has a strong network in the suburban market.', rating: '4.9/5' },
    { name: 'Broker6', description: 'Skilled negotiator for the best prices.', rating: '4.7/5' },
    { name: 'Broker7', description: 'Has a keen eye for potential investment properties.', rating: '4.5/5' },
    { name: 'Broker8', description: 'Experienced in helping first-time home buyers.', rating: '4.6/5' },
    { name: 'Broker9', description: 'Specializes in eco-friendly properties.', rating: '4.8/5' },
    { name: 'Broker10', description: 'Has a deep understanding of the local real estate market.', rating: '4.9/5' },
    { name: 'Broker11', description: 'Known for quick and efficient transactions.', rating: '4.7/5' },
    { name: 'Broker12', description: 'Experienced in both buying and selling properties.', rating: '4.5/5' },
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

  const filteredBrokers = brokers.filter((broker) => {
    let isRatingMatch = true;
    let isCommissionMatch = true;
    let isDealsClosedMatch = true;
    let isVerifiedMatch = true;

    const brokers = [
      { name: 'Broker1', description: 'Experienced in residential and commercial properties.', rating: '4.7/5', commission: '10%' },
      { name: 'Broker2', description: 'Specializes in luxury real estate.', rating: '4.5/5', commission: '15%' },
      { name: 'Broker3', description: 'Known for excellent customer service.', rating: '4.6/5', commission: '20%' },
      { name: 'Broker4', description: 'Expert in the downtown real estate market.', rating: '4.8/5', commission: '25%' },
      { name: 'Broker5', description: 'Has a strong network in the suburban market.', rating: '4.9/5', commission: '30%' },
      { name: 'Broker6', description: 'Skilled negotiator for the best prices.', rating: '4.7/5', commission: '10%' },
      { name: 'Broker7', description: 'Has a keen eye for potential investment properties.', rating: '4.5/5', commission: '15%' },
      { name: 'Broker8', description: 'Experienced in helping first-time home buyers.', rating: '4.6/5', commission: '20%' },
      { name: 'Broker9', description: 'Specializes in eco-friendly properties.', rating: '4.8/5', commission: '25%' },
      { name: 'Broker10', description: 'Has a deep understanding of the local real estate market.', rating: '4.9/5', commission: '30%' },
      { name: 'Broker11', description: 'Known for quick and efficient transactions.', rating: '4.7/5', commission: '10%' },
      { name: 'Broker12', description: 'Experienced in both buying and selling properties.', rating: '4.5/5', commission: '15%' },
    ];

    return isRatingMatch && isCommissionMatch && isDealsClosedMatch && isVerifiedMatch;
  });

  return (
    <div className="residential">
      <div className="filter-panel">
        <div>
          <label htmlFor="rating-filter">Rating:</label>
          <select id="rating-filter" value={ratingFilter} onChange={handleRatingFilterChange}>
            <option value="">All</option>
            <option value="4.7/5">4.7/5</option>
            <option value="4.5/5">4.5/5</option>
            <option value="4.6/5">4.6/5</option>
            <option value="4.8/5">4.8/5</option>
            <option value="4.9/5">4.9/5</option>
          </select>
        </div>
        <div>
          <label htmlFor="commission-filter">Commission:</label>
          <select id="commission-filter" value={commissionFilter} onChange={handleCommissionFilterChange}>
            <option value="">All</option>
            <option value="10%">10%</option>
            <option value="15%">15%</option>
            <option value="20%">20%</option>
            <option value="25%">25%</option>
            <option value="30%">30%</option>
          </select>
        </div>
        <div>
          <label htmlFor="deals-closed-filter">Deals Closed:</label>
          <select id="deals-closed-filter" value={dealsClosedFilter} onChange={handleDealsClosedFilterChange}>
            <option value="">All</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
          </select>
        </div>
        <div>
          <label htmlFor="verified-filter">Verified:</label>
          <input id="verified-filter" type="checkbox" checked={verifiedFilter} onChange={handleVerifiedFilterChange} />
        </div>
      </div>
      <div className="property-cards">
        {filteredBrokers.map((broker, index) => (
          <div key={index} className="property-card">
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
