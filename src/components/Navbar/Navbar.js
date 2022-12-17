import React, { useState } from "react";
import hamburger from "../../assets/hamburger.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav>
      <div>
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
          <li>Home</li>
          <li>View customers</li>
          <li>Transfer money</li>
          <li>Transaction history</li>
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
