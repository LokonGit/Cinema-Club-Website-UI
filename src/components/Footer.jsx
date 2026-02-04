import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="10" width="40" height="30" rx="3" fill="#E63946"/>
                  <rect x="10" y="5" width="30" height="8" rx="2" fill="#E63946"/>
                  <circle cx="20" cy="25" r="5" fill="#0A0E1A"/>
                  <circle cx="30" cy="25" r="5" fill="#0A0E1A"/>
                </svg>
              </div>
              <h3>CINEMA CLUB IITR</h3>
            </div>
            <p className="footer-description">
              Fostering film appreciation and providing a platform for cinematic expression since the dawn of the digital age at IIT Roorkee.
            </p>
          </div>

          <div className="footer-section">
            <h4>NAVIGATE</h4>
            <ul className="footer-links">
              <li><a href="#home">Screenings</a></li>
              <li><a href="#discover">Workshops</a></li>
              <li><a href="#archive">Team</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>SOCIALS</h4>
            <ul className="footer-links">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">DESIGNED FOR CINEPHILES</p>
          <p className="footer-copyright">© 2024 IIT ROORKEE</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
