import React from 'react';
import { Link } from 'react-router-dom';
import Bella from '../../assets/images/Rectangle 48.jpg'
import './Header.css';

const Header = () => (
 <nav className="header">
    <img className="headerImg" src={Bella} alt="Bella" width="80" />
    <ul className="nav-menu-list">
      <li className="nav-menu-list__button"><Link to="/">Home</Link></li>
      <li className="nav-menu-list__button"><Link to="/about">About</Link></li>
      <li className="nav-menu-list__button"><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Header;


