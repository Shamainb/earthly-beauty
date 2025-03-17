import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch, FaUser, FaShoppingCart,
  FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram
} from "react-icons/fa";
import SubscribeForm from "../components/SubscribeForm";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null); // Ref for the mobile menu

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Add event listener when the menu is open
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        {/* Hamburger Menu for Small Screens */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>

        <div className="logo">Earthly Beauty</div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <nav className="nav-links">
          <a href="#">Shop</a>
          <a href="#">About Us</a>
        </nav>

        <div className="icons">
          <FaSearch />
          <FaUser />
          <FaShoppingCart />
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} ref={mobileMenuRef}>
        <div className="close-menu" onClick={closeMenu}>
          <FaTimes /> close
        </div>
        <a href="#" onClick={closeMenu}>Shop</a>
        <a href="#" onClick={closeMenu}>About Us</a>
      </div>

      {/* Main Content */}
      <main className="home-container">
        <h2>Like the comfort of home.</h2>
        <p>Welcome to Earthly Beauty</p>
        <button className="appointment-btn">Book your appointment with us.</button>
      </main>

      {/* Subscribe Section */}
      <div className="subscribe-container">
        <h3>Stay up to date with our special offers, and latest news</h3>
        <SubscribeForm />
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="contact-info">
          <p className="contact-email">📧 info@earthly-beauty.com</p>
          <p className="contact-address">📍 153 Main Road, Sea Point, Equinox Building, 5th Floor</p>
        </div>

        <div className="social-links">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </footer>
    </div>
  );
};

export default Home;