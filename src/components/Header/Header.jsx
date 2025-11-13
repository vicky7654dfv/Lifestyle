import React, { useState, useContext, useEffect, useRef } from "react";
import Style from "../Header/Header.module.css";
import Img from "../../assets/Header/logo.webp";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { SearchContext } from "../SearchContext/SearchContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome2 = location.pathname === "/HomePage2";
  const { getCartItemsCount } = useContext(CartContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchClick = () => {
    // Search functionality handled by context
  };

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

      <div className={Style.inputDiv}>
        <form onSubmit={handleSearchSubmit} className={Style.searchForm}>
          <input
            type="text"
            placeholder="Discover your style 💫"
            value={searchTerm}
            onChange={handleSearchChange}
            className={Style.searchInput}
          />
          <button
            type="submit"
            className={Style.searchButton}
            onClick={handleSearchClick}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
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