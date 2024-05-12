import React from 'react';
import '../Styles/Agents.css'; // Import the CSS file
import Agent1 from '../../../assets/Brokers/1.jpg';
import Agent2 from '../../../assets/Brokers/2.jpg';
import Agent3 from '../../../assets/Brokers/3.jpg';
import Agent4 from '../../../assets/Brokers/4.jpg';
import Agent5 from '../../../assets/Brokers/5.jpg';
import Agent6 from '../../../assets/Brokers/6.jpg';
import Agent7 from '../../../assets/Brokers/7.jpg';
import Agent8 from '../../../assets/Brokers/8.jpg';
import Agent9 from '../../../assets/Brokers/9.jpg';


const Agents: React.FC = () => {
  const hrefLink = 'https://ac14-2405-204-5215-ab0b-e5f2-e969-3851-b5dd.ngrok-free.app/';

  const brokers = [
    { name: 'Rashi', description: 'Experienced in residential and commercial properties.', rating: '3/5', commission: '10%', dealsClosed: 100, verified: true, backgroundUrl: Agent1  },
    { name: 'Aman', description: 'Specializes in luxury real estate.', rating: '2/5', commission: '15%', dealsClosed: 200, verified: false, backgroundUrl: Agent2  },
    { name: 'Manas', description: 'Known for excellent customer service.', rating: '2/5', commission: '20%', dealsClosed: 150, verified: true, backgroundUrl: Agent3  },
    { name: 'Bardi', description: 'Experienced in residential and commercial properties.', rating: '4.7/5', commission: '10%', dealsClosed: 100, verified: true, backgroundUrl: Agent4  },
    { name: 'Rahul', description: 'Specializes in luxury real estate.', rating: '3.5/5', commission: '15%', dealsClosed: 200, verified: false, backgroundUrl: Agent5  },
    { name: 'Rajesh', description: 'Known for excellent customer service.', rating: '4.6/5', commission: '20%', dealsClosed: 150, verified: true, backgroundUrl: Agent6  },
    { name: 'Ram', description: 'Experienced in residential and commercial properties.', rating: '4.7/5', commission: '10%', dealsClosed: 100, verified: true, backgroundUrl: Agent7  },
    { name: 'Jay', description: 'Specializes in luxury real estate.', rating: '1.5/5', commission: '15%', dealsClosed: 200, verified: false, backgroundUrl: Agent8},
    { name: 'Prajwal', description: 'Known for excellent customer service.', rating: '2.6/5', commission: '20%', dealsClosed: 150, verified: true, backgroundUrl: Agent9},
    { name: 'Mohan', description: 'Experienced in residential and commercial properties.', rating: '4.7/5', commission: '10%', dealsClosed: 100, verified: true, backgroundUrl: Agent2},
    { name: 'Raju', description: 'Specializes in luxury real estate.', rating: '3.5/5', commission: '15%', dealsClosed: 200, verified: false, backgroundUrl: Agent3},
    { name: 'Jena', description: 'Known for excellent customer service.', rating: '2.6/5', commission: '20%', dealsClosed: 150, verified: true, backgroundUrl: Agent4},
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
    <div className="agents">
      <div className="filter-panel">
        <div className='rating-filter'>
          <label htmlFor="rating-filter">Rating:</label>
          <select id="rating-filter" value={ratingFilter} onChange={handleRatingFilterChange}>
            <option value="">All</option>
            <option value="1">1/5</option>
            <option value="2">2/5</option>
            <option value="3">3/5</option>
            <option value="4">4/5</option>
          </select>
        </div>
        <div className='rating-filter'>
          <label htmlFor="commission-filter">Commission:</label>
          <select id="commission-filter" value={commissionFilter} onChange={handleCommissionFilterChange}>
            <option value="">All</option>
            <option value="10%">10%</option>
            <option value="15%">15%</option>
            <option value="20%">20%</option>
          </select>
        </div>
        <div className='rating-filter'>
          <label htmlFor="deals-closed-filter">Deals Closed:</label>
          <select id="deals-closed-filter" value={dealsClosedFilter} onChange={handleDealsClosedFilterChange}>
            <option value="">All</option>
            <option value="100">100+</option>
            <option value="150">150+</option>
            <option value="200">200+</option>
          </select>
        </div>
        <div className='rating-filter'>
          <label htmlFor="verified-filter">Verified:</label>
          <input type="checkbox" id="verified-filter" checked={verifiedFilter} onChange={handleVerifiedFilterChange} />
        </div>
      </div>
      <div className="property-cards">
        {filteredBrokers.map((broker, index) => (
          <div key={broker.name} className="property-card" style={{ backgroundImage: `url(${broker.backgroundUrl})` }}>
            <div className="description">{broker.name } is {broker.verified ? 'Verified' : 'Not Verified'} via Twinnel  has {broker.description} with a {broker.rating} of, so far has closed {broker.dealsClosed} with an average commision of {broker.commission} </div>
            <div className="verified"></div>
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
