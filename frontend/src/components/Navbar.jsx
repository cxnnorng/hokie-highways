import React from "react";
import { FaMap, FaRoute } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import "../css/Navbar.css";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="nav-option">
          <FaMap className="icon" />
          <span>Map</span>
        </div>
        </Link>
        
        <div className="divider"></div>
        <Link to="/favorites" style={{ textDecoration: 'none' }}>
        <div className="nav-option">
          <FaRegStar className="icon" />
          <span>Favorite Routes</span>
        </div>
        </Link>
        <div className="divider"></div>
        <Link to="/trip" style={{ textDecoration: 'none' }}>
        <div className="nav-option">
          <FaRoute className="icon" />
          <span>Plan a Trip</span>
        </div>
        </Link>
        <div className="divider"></div>
        <Link to="/settings" style={{ textDecoration: 'none' }}>
        <div className="nav-option">
          
          <BsGear className="icon" />
          <span>Settings</span>
        </div>
        </Link>
        
      </nav>
    </div>
  );
};

export default Navbar;
