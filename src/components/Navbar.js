import React from 'react';
import logo from '../images/logo.svg';
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className='header'>
      <img src={logo} />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

  </div>

    
  )
}

export default Navbar;
