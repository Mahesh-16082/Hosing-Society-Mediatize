import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <a href="#home" className="logo" onClick={closeMenu}>
            <img src="/housing_society.png" alt="Housing Society" />
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#status">HOME</a>
            <a href="#about">B06 Tower</a>
            <a href="#plans">FLOOR PLANS</a>
            <a href="#contact">CONTACT</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>

      {/* Dark Overlay */}
      <div
        className={`overlay ${menuOpen ? "overlay-show" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Sidebar */}
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>

        {/* Sidebar Header */}
        <div className="sidebar-header">
          <img
            src="/public/housing_society.png"
            alt="Housing Society"
          />

          <button
            className="close-button"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="sidebar-links">
          <a href="#status" onClick={closeMenu}>
            HOME
          </a>

          <a href="#about" onClick={closeMenu}>
            B06 Tower
          </a>

          <a href="#plans" onClick={closeMenu}>
            FLOOR PLANS
          </a>

          <a href="#contact" onClick={closeMenu}>
            CONTACT
          </a>
        </div>

      </aside>
    </>
  );
}

export default Navbar;