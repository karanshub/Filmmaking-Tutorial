import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, Outlet } from 'react-router-dom';
import logo from "./images/filmicon.png";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
 // const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener to detect scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div>
     <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
              <img src={logo} alt="filmicon.png" />
           
        </div>
       
      <div>
       <ul className="navbar-links">
          <li><Link to="/navbar/home">Home</Link></li>
          <li><Link to="/navbar/links">Links</Link></li>
          <li><Link to="/navbar/tutorial">Tutorials</Link></li>
          <li><Link to="/navbar/about">About</Link></li>
          <li><Link to="/navbar/contact">Contact</Link></li> 
          <li><button><Link to="/">Logout</Link></button></li>
       </ul>
     </div>
     </nav>
   </div>
    <div>
      <Outlet/>
    </div>
    </>
  );
}

export default Navbar;
