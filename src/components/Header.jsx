import React from 'react'
import Logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <nav className="nav">
        <ul>
      <li><NavLink to="/" className={({ isActive}) => (isActive ? "active" : "")}>Home</NavLink></li>
      <li><NavLink to="/about" className={({ isActive}) => (isActive ? "active" : "")}>About</NavLink></li>
      <li> <NavLink to="/services" className={({ isActive}) => (isActive ? "active" : "")}>Services</NavLink></li>
      <li> <NavLink to="/team" className={({ isActive}) => (isActive ? "active" : "")}>Team</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive}) => (isActive ? "active" : "")}>Contact</NavLink></li>
    </ul>
        </nav>
      
    </div>
  )
}

export default Header
