import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from "../../actions/authActions"

const NavBar = () => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
  }
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
      {currentSeller ? 
        <NavLink 
          onClick={handleClick}
          className="nav-item nav-link text-danger"
          to="/"
        >
          Logout
        </NavLink>
      : 
        <NavLink 
          className="nav-item nav-link text-success"
          activeClassName="font-weight-bold"
          to="/login"
        >
          Login
        </NavLink>
      }
    </div>
  );
}

export default NavBar;