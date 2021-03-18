import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light px-4 border justify-content-md-center">
      <NavLink 
        className="nav-item nav-link text-dark"
        activeClassName="font-weight-bold"
        exact to="/"
      >
        Home
      </NavLink>
      <NavLink 
        className="nav-item nav-link text-dark"
        activeClassName="font-weight-bold"
        to="/about"
      >
        About
      </NavLink>
      <NavLink 
        className="nav-item nav-link text-dark"
        activeClassName="font-weight-bold"
        to="/listings"
      >
        Listings
      </NavLink>
    </div>
  );
}

export default NavBar;