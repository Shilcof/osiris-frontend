import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogOut from './LogOut';

const NavBar = () => {

  const currentSeller = useSelector(store=>store.auth.currentSeller)

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
      {currentSeller ? <LogOut /> : null}
    </div>
  );
}

export default NavBar;