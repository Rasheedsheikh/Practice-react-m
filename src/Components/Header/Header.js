import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import { useLocation, Link } from 'react-router-dom'; // Import necessary hooks
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const location = useLocation(); // Get the current location

  // Check if the current route is part of '/admin' using a regular expression
  const isAdminRoute = /^\/admin(\/|$)/.test(location.pathname); // Matches any /admin route

  return (
    <header className="header">
      <div className="header-left">
        <img
          src='/Assets/mith.png'
          alt="Logo"
          className="header-logo"
          height={50}
        />
      </div>
      <nav className="header-right">
        {isAdminRoute ? (
          <>
            <Link to="/admin" className="header-item">Home</Link>
            <Link to="/admin/orders" className="header-item">Orders</Link>
          </>
        ) : (
          <>
            <ScrollLink
              to="aboutus"
              smooth={true}
              duration={500}
              className="header-item"
              style={{ cursor: "pointer" }}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="service"
              smooth={true}
              duration={500}
              className="header-item"
              style={{ cursor: "pointer" }}
            >
              Service
            </ScrollLink>
          </>
        )}
        <a href="/registration" className="header-item">Book Service</a>
      </nav>
    </header>
  );
};

export default Header;
