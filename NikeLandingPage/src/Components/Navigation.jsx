import React from 'react';
import logoIcon from './Assets/brand_logo.png';
import './style.css';
const Navigation = () =>{
  return (
    <nav>
      <img src={logoIcon}></img>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  )
}
export default Navigation;