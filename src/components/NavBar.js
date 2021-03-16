import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light px-4 border justify-content-md-center">
      <NavLink 
        className="nav-item nav-link text-dark font-weight-bold"
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        className="nav-item nav-link text-dark"
        to="/about"
      >
        About
      </NavLink>
      <NavLink 
        className="nav-item nav-link text-dark"
        to="/listings"
      >
        Listings
      </NavLink>
    </div>
  );
}

export default NavBar;