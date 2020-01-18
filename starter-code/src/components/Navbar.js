import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const navbar = () => {
  return (
    <nav className="nav-style">
      <h1><Link to='/'>WikiCountries</Link></h1>
    </nav>
  )
}

export default navbar;
