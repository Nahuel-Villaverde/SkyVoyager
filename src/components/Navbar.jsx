import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path) => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsNavbarHidden(true); // Oculta el navbar
      } else {
        setIsNavbarHidden(false); // Muestra el navbar
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${isNavbarHidden ? 'hidden' : ''}`}>
      <div className="nav-container">
        <div className="nav-title">
          <span onClick={() => handleLinkClick('home')}>Sky Voyager</span>
        </div>
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <span className='nav-links-span' onClick={() => handleLinkClick('launch')}>Launch</span>
          </li>
          <li>
            <span className='nav-links-span' onClick={() => handleLinkClick('technology')}>Technology</span>
          </li>
          <li>
            <span className='nav-links-span' onClick={() => handleLinkClick('destinations')}>Destinations</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
