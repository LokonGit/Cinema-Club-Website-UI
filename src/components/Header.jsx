import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="10" width="40" height="30" rx="3" fill="#E63946"/>
                <rect x="10" y="5" width="30" height="8" rx="2" fill="#E63946"/>
                <circle cx="20" cy="25" r="5" fill="#0A0E1A"/>
                <circle cx="30" cy="25" r="5" fill="#0A0E1A"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-title">CINEMA CLUB</span>
              <span className="logo-subtitle">— IIT ROORKEE</span>
            </div>
          </div>
          
          <nav className="nav">
            <a href="#home" className="nav-link">HOME</a>
            <a href="#discover" className="nav-link">DISCOVER</a>
            <a href="#archive" className="nav-link">ARCHIVE</a>
          </nav>
          
          <button className="member-login">Member Login</button>
        </div>
      </div>
    </header>
  )
}

export default Header
