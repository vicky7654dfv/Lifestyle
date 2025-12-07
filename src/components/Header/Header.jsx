import React, { useState, useContext, useEffect, useRef } from "react";
import Style from "../Header/Header.module.css";
import Img from "../../assets/Header/logo.webp";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome2 = location.pathname === "/HomePage2";
  const { getCartItemsCount } = useContext(CartContext);
  
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleHomePageNavigation = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const handleMobileLinkClick = () => {
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
        setMenuOpen(false);
        setDropdownOpen(false);
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

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [menuOpen]);

  return (
    <div data-aos="fade-up" className={Style.headerWrap}>
      <div className={Style.imgWrap}>
        <a href="/">
          <img src={Img} alt="logo" />
        </a>
      </div>
      
      {/* Hamburger/X Button */}
      <div 
        ref={hamburgerRef}
        className={Style.hamburger} 
        onClick={toggleMenu}
      >
        {menuOpen ? '✕' : '☰'}
      </div>

      {/* Navigation Menu */}
      <div 
        ref={menuRef}
        className={`${Style.linksWrap} ${menuOpen ? Style.showMenu : ""}`}
      >
        <ul>
          <li className={Style.dropdown}>
            <div className={Style.dropdownHeader}>
              <Link 
                to={isHome2 ? "/" : "/HomePage2"} 
                onClick={handleMobileLinkClick}
                className={Style.homePageLink}
              >
                {isHome2 ? "Home Page 2" : "Home Page 1"}
              </Link>
              <button 
                className={Style.dropdownToggle} 
                onClick={toggleDropdown}
                aria-label="Toggle dropdown"
              >
                <i className={`fa-solid fa-chevron-${dropdownOpen ? 'up' : 'down'}`}></i>
              </button>
            </div>
            <ul className={`${Style.dropdownMenu} ${dropdownOpen ? Style.showDropdown : ''}`}>
              <li>
                <Link 
                  to={isHome2 ? "/" : "/HomePage2"} 
                  onClick={handleHomePageNavigation}
                >
                  {isHome2 ? "Home Page 1" : "Home Page 2"}
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/About" onClick={handleMobileLinkClick}>About Us</Link>
          </li>
          <li>
            <Link to="/DashBoard" onClick={handleMobileLinkClick}>DashBoard</Link>
          </li>
          <li>
            <Link to="/Services" onClick={handleMobileLinkClick}>Services</Link>
          </li>
          <li>
            <Link to="/FAQ" onClick={handleMobileLinkClick}>FAQ</Link>
          </li>
          <li>
            <Link to="/Contact" onClick={handleMobileLinkClick}>Contact</Link>
          </li>
          <li className={Style.cartLink}>
            <Link to="/Checkout" onClick={handleMobileLinkClick}>
              Checkout
              {getCartItemsCount() > 0 && (
                <span className={Style.cartCount}>{getCartItemsCount()}</span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/SignUp" onClick={handleMobileLinkClick}>Sign Up</Link>
          </li>
          <li>
            <Link to="/Login" onClick={handleMobileLinkClick}>Login</Link>
          </li>
        </ul>
        
        {/* Close Button for Mobile */}
        <div className={Style.mobileCloseButton} onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-times"></i> Close Menu
        </div>
      </div>
      
      {/* Overlay for mobile when menu is open */}
      {menuOpen && <div className={Style.menuOverlay} onClick={() => setMenuOpen(false)}></div>}
    </div>
  );
}