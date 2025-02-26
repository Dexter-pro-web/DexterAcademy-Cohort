import React, { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/nav-logo.png`}
            alt="Logo"
          />
        </div>
        <div className="navbar-links">
          <a href="#" className="nav-link">
            Courses
          </a>
          <a href="#" className="nav-link">
            Payment
          </a>
          <a href="#" className="nav-link">
            Benefits
          </a>
        </div>
        <div className="navbar-contact">
          <button
            className={`contact-button ${isHovered ? "no-arrow" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Contact Us {isHovered ? "" : "➜"}
          </button>
        </div>
      </div>
    </nav>
  );
}
