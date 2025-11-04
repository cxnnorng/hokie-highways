import React from "react";
import { FaMap, FaRoute } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="container">
        <div className="nav-option">
          <FaMap className="icon" />
          <span>Map</span>
        </div>
        <div className="divider"></div>
        <div className="nav-option">
          <FaRegStar className="icon" />
          <span>Map</span>
        </div>
        <div className="divider"></div>
        <div className="nav-option">
          <FaRoute className="icon" />
          <span>Map</span>
        </div>
        <div className="divider"></div>
        <div className="nav-option">
          <BsGear className="icon" />
          <span>Map</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
