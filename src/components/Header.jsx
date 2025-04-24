import React from 'react'
import Logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <nav className="nav">
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Team</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Header
