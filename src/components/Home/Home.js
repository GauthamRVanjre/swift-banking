import React from "react";
import { Link } from "react-router-dom";
import illustration from "../../assets/image-mockups.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-layout">
        <div className="home-content">
          <h1>Welcome to swift banking</h1>
          <p>A banking system for swift and safe payments</p>
          <div className="buttons-container">
            <Link to="/Transactions">
              <button className="transaction-btn">View Transactions</button>
            </Link>
            <Link to="/Payment">
              <button className="payment-btn">Make Payments</button>
            </Link>
          </div>
        </div>
        <div className="home-illustration">
          <img src={illustration} alt="illustration" />
        </div>
      </div>
    </>
  );
};

export default Home;
