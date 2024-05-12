import React from 'react';
import './Header.css';
import { FaRegBuilding, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-left header-logo">
          <li className='header-logo'><Link to="/"  style={{ color: 'white' }}>Twinnel</Link></li>
          <li className='header-logo'> <FaRegBuilding /> </li>
        </ul>
        <ul className="nav-center">
          <li className='header-button'><Link to="/residential" style={{ color: 'white' }}>Residencial</Link></li>
          <li className='header-button'><Link to="/commercial"  style={{ color: 'white' }}>Commercial</Link></li>
          <li className='header-button'><Link to="/agents"  style={{ color: 'white' }}>Agents</Link></li>
          <li className='header-button'><Link to="/services"  style={{ color: 'white' }}>Services</Link></li>
          <li className='header-button'><Link to="/contact"  style={{ color: 'white' }}>Contact</Link></li>
        </ul>
        <ul className="nav-end">
          <li>
            <FaSearch />
          </li>
          <li>
            <FaShoppingCart />
          </li>
          <li>
            <FaUser />
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
