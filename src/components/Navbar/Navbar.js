import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../../assets/hamburger.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav>
      <div className="nav-logo">
        <div>SWIFT BANKING</div>
      </div>
      <div
        className={
          isNavExpanded
            ? "nav-links-container nav-links-parent"
            : "nav-links-container"
        }
      >
        <ul className="nav-links">
          <Link to="/">
            <li className="nav-items">Home</li>
          </Link>
          <Link to="/customers">
            <li className="nav-items">View customers</li>
          </Link>
          <Link to="/payment">
            <li className="nav-items">Transfer money</li>
          </Link>
          <Link to="/transactions">
            <li className="nav-items">Transaction history</li>
          </Link>
          <Link to="/register">
            <li className="nav-items">Register</li>
          </Link>
        </ul>
      </div>
      <div className="hamburger-icon">
        <button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <img src={hamburger} alt="hamburger" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
