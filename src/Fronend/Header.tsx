import React from 'react';
import './Header.css';
import { FaRegBuilding, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-left">
          <li><Link to="/">Twinnel</Link></li>
          <li> <FaRegBuilding /> </li>
        </ul>
        <ul className="nav-center">
          <li><Link to="/residential">Residencial</Link></li>
          <li><Link to="/commercial">Commercial</Link></li>
          <li><Link to="/agents">Agents</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
