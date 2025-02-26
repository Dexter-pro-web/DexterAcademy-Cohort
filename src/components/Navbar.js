import React, { useState } from "react";
import "../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/nav-logo.png`}
            alt="Logo"
          />
        </div>
        
        {/* Navbar Links will be hidden on small screens */}
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#courses" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Courses
          </a>
          <a href="#payments" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Payment
          </a>
          <a href="#benefits" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Benefits
          </a>
        </div>

        <div className="navbar-contact">
          <button
            className={`contact-button ${isHovered ? "no-arrow" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => window.location.href = 'mailto:academy@dexterprolimited.com'}
          >
            Contact Us {isHovered ? "" : "➜"}
          </button>
        </div>

        {/* Navbar toggle icon (shown on small screens) */}
        <div className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>
    </nav>
  );
}
