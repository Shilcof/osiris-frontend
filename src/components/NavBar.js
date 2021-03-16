import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light px-4 border">
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/about"
      >
        About
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/listings"
      >
        Listings
      </NavLink>
    </div>
  );
}

export default NavBar;