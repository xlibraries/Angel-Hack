import React from 'react';
import './Header.css';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>PROPE</li>
          <li>SEARCH</li>
          <li>LISTI</li>
          <li>CONTACT</li>
          <li><FaSearch /></li>
          <li><FaShoppingCart /></li>
          <li><FaUser /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
