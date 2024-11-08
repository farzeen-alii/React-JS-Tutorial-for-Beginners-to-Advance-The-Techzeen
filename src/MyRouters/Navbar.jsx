import React from 'react';
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
     <ul className='nav'>
        <li><NavLink className='nav-link' to="/">Home</NavLink></li>
        <li><NavLink className='nav-link' to="/about">About</NavLink></li>
        <li><NavLink className='nav-link' to="/services">Services</NavLink></li>
        <li><NavLink className='nav-link' to="/company">Company</NavLink></li>
        <li><NavLink className='nav-link' to="/contact">Contact</NavLink></li>
        <li><NavLink className='nav-link' to="/search">Search</NavLink></li>
        <li><NavLink className='nav-link' to="/login">Login</NavLink></li>
     </ul> 
    </>
  );
}

export default Navbar;
