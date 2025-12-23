import React, { useState, useContext, useEffect, useRef } from "react";
import Style from "./Header.module.css";
import Img from "../../assets/Header/logo.webp";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const { getCartItemsCount } = useContext(CartContext);
  
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Toggle Dropdown (Mobile)
  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          hamburgerRef.current && 
          !hamburgerRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={Style.header} data-aos="fade-down">
      <div className={Style.headerContainer}>
        
        {/* Logo Section */}
        <div className={Style.logoWrapper}>
          <Link to="/" className={Style.logoContainer} onClick={closeAllMenus}>
            <img src={Img} alt="Lifestyle Logo" className={Style.logo} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={Style.desktopNav}>
          
          {/* Home Dropdown */}
          <div className={Style.homeDropdown}>
            <button className={Style.navLink}>
              Home <i className={`fa-solid fa-chevron-down ${Style.chevron}`}></i>
            </button>
            <div className={Style.dropdownMenu}>
              <Link to="/" className={Style.dropdownItem}>Home Page 1</Link>
              <Link to="/HomePage2" className={Style.dropdownItem}>Home Page 2</Link>
            </div>
          </div>

          <Link to="/About" className={Style.navLink}>About Us</Link>
          <Link to="/DashBoard" className={Style.navLink}>Dashboard</Link>
          <Link to="/Services" className={Style.navLink}>Services</Link>
          <Link to="/FAQ" className={Style.navLink}>FAQ</Link>
          <Link to="/Contact" className={Style.navLink}>Contact</Link>
          
          <div className={Style.checkoutWrapper}>
            <Link to="/Checkout" className={Style.navLink}>
              Checkout
              {getCartItemsCount() > 0 && (
                <span className={Style.cartCount}>{getCartItemsCount()}</span>
              )}
            </Link>
          </div>
          
          {/* Distinct Buttons */}
          <div className={Style.authButtons}>
            <Link to="/SignUp" className={Style.signUpBtn}>Sign Up</Link>
            <Link to="/Login" className={Style.loginBtn}>Login</Link>
          </div>
        </nav>

        {/* Hamburger Button (Mobile) */}
        <button 
          ref={hamburgerRef}
          className={`${Style.mobileMenuButton} ${menuOpen ? Style.close : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={Style.hamburgerLine}></span>
          <span className={Style.hamburgerLine}></span>
          <span className={Style.hamburgerLine}></span>
        </button>

        {/* Mobile Navigation Menu (Acts as Overlay too) */}
        <div 
          ref={menuRef}
          className={`${Style.mobileNav} ${menuOpen ? Style.open : ""}`}
        >
          <div className={Style.mobileLinks}>
            {/* Mobile Dropdown */}
            <div className={Style.mobileDropdownSection}>
              <button 
                className={Style.mobileNavLink} 
                onClick={toggleDropdown}
              >
                Home 
                <i className={`fa-solid fa-chevron-${dropdownOpen ? 'up' : 'down'}`}></i>
              </button>
              
              <div className={`${Style.mobileDropdownMenu} ${dropdownOpen ? Style.show : ''}`}>
                <Link to="/" onClick={closeAllMenus} className={Style.mobileDropdownItem}>Home Page 1</Link>
                <Link to="/HomePage2" onClick={closeAllMenus} className={Style.mobileDropdownItem}>Home Page 2</Link>
              </div>
            </div>

            <Link to="/About" onClick={closeAllMenus} className={Style.mobileNavLink}>About Us</Link>
            <Link to="/DashBoard" onClick={closeAllMenus} className={Style.mobileNavLink}>Dashboard</Link>
            <Link to="/Services" onClick={closeAllMenus} className={Style.mobileNavLink}>Services</Link>
            <Link to="/FAQ" onClick={closeAllMenus} className={Style.mobileNavLink}>FAQ</Link>
            <Link to="/Contact" onClick={closeAllMenus} className={Style.mobileNavLink}>Contact</Link>
            
            <Link to="/Checkout" onClick={closeAllMenus} className={Style.mobileNavLink}>
              Checkout 
              {getCartItemsCount() > 0 && (
                <span className={Style.mobileCartCount}>{getCartItemsCount()}</span>
              )}
            </Link>
            
            <div className={Style.mobileAuthButtons}>
              <Link to="/SignUp" onClick={closeAllMenus} className={Style.mobileSignUpBtn}>Sign Up</Link>
              <Link to="/Login" onClick={closeAllMenus} className={Style.mobileLoginBtn}>Login</Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}