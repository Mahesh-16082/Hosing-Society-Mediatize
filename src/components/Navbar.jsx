import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-is-open" : ""}`}>
      
      {/* ==============================
          NAVBAR HEADER
      ================================= */}

      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <img
            src="/housing_society.png"
            alt="Housing Society"
          />
        </a>


        {/* ==============================
            DESKTOP NAVIGATION
        ================================= */}

        <div className="nav-links">

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


        {/* ==============================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >

          {menuOpen ? (
            <span className="close-icon">×</span>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}

        </button>

      </div>


      {/* ==============================
          MOBILE FULL WIDTH DROPDOWN
      ================================= */}

      <div
        className={`mobile-dropdown ${
          menuOpen ? "dropdown-open" : ""
        }`}
      >

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

    </nav>
  );
}

export default Navbar;