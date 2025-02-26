import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={`${process.env.PUBLIC_URL}/images/academy-logo.png`} alt="Logo" />
          </div>

          <div className="footer-links">
            <div>
              <p>Bootcamps</p>
              <ul>
                <li>Engineering</li>
                <li>Data</li>
                <li>Design</li>
                <li>Leadership</li>
              </ul>
            </div>
            <div>
              <p>About Us</p>
              <ul>
                <li>About Dexter Academy</li>
                <li>Contact Us</li>
                <li>36b Jay Jay Oladimeji Close, Ikate, Lekki, Lagos State</li>
              </ul>
            </div>
            <div>
              <p>Resources</p>
              <ul>
                <li>Curriculum</li>
                <li>Stack</li>
              </ul>
            </div>
            
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Dexter Academy.</p>
          <div className="social-icons">
            <a
              href="https://x.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-x"></i>
            </a>
            <a
              href="https://instagram.com/dexterpro_ltd"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com/company/dexterpro-technology-limited/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
