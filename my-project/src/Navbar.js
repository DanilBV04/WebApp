import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className='header'>
            <nav className='nav container'>
                <div className={"nav__menu"} id="nav-menu">
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link">
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/news" className="nav__link">
               Analysis
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/about-us"
               className="nav__link"
             >
               Upload
             </NavLink>
           </li>
           </ul>
       </div>
       <div className="nav__toggle" id="nav-toggle">
         <IoMenu />
       </div>
     </nav>
   </header>
 );
};

export default Navbar;