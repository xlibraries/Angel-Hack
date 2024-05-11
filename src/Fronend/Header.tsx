import React from 'react';
import './Header.css';
import { FaRegBuilding, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-left">
          <li> Twinnel </li>
          <li> <FaRegBuilding /> </li>
        </ul>
        <ul className="nav-center">
          <li>Residencial</li>
          <li>Commercial</li>
          <li>Agents</li>
          <li>Services</li>
          <li>Contact</li>
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
    </header>
  );
};

export default Header;
