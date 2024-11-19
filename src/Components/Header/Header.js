import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src='/Assets/mith.png'
          alt="Logo"
          className="header-logo"
          // width={100}
          height={50}
        />
      </div>
      <nav className="header-right">
      <ScrollLink
          to="aboutus" 
          smooth={true}
          duration={500}
          className="header-item"
          style={{cursor:"pointer"}}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="service" // Add an id for the services section if needed
          smooth={true}
          duration={500}
          className="header-item"
          style={{cursor:"pointer"}}
        >
          Service
        </ScrollLink>
        <a href="/registration" className="header-item">Book Service</a>
        {/* <button className="header-item logout-button">Logout</button>s */}
      </nav>
    </header>
  );
};

export default Header;
