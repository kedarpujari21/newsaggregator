import React, { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {

  const [menuOpen, setMenuOpen]=useState(false);

  const toggleMenu=()=>{
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='navbar'>
    <div className='nav-logo'>
      <a href='/'>Informo</a>
    </div>

     {/*Hamburger Menu */}
     {/*Add the "open" class to the hamburger div when the menu is open, enabling specific styles or animations for the open state. */}
     <div className={`hamburger ${menuOpen ? "open":""}`} onClick={toggleMenu}>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
     </div>
     {/*Navbar links*/}
    <ul className={`navbar-links ${menuOpen ? "active":""}`}>
      <li><a href='/'>Home</a></li>
      <li className='dropdown'>
         <a href='#'>Categories</a>
         <ul className='dropdown-menu'>
            <li><a href='/categories/politics'>Politics</a></li>
            <li><a href='/categories/sports'>Sports</a></li>
            <li><a href='/categories/business'>Business</a></li>
            <li><a href='/categories/technology'>Technology</a></li>
         </ul>
     </li>
     <li><a href='/trending'>Trending</a></li>
     <li><a href='/favorites'>Favourites</a></li>
     <li><a href='/liveupdates'>Live Updates</a></li>
    </ul>

    {/* Navbar Actions*/}
    <div className="navbar-actions">
        <a href="/login" className="btn">Login</a>
    </div>
    </nav>
  )
}

export default Navbar
