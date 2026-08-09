import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-brand">
        <NavLink to="/">VH</NavLink>
      </div>
      
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        <div className="mobile-theme-toggle">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>

      <div className="nav-actions">
        <div className="desktop-theme-toggle">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
