import React, { useState, useContext } from "react";
import Style from "../Header/Header.module.css";
import Img from "../../assets/Header/logo.webp";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { SearchContext } from "../SearchContext/SearchContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome2 = location.pathname === "/HomePage2";
  const { getCartItemsCount } = useContext(CartContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // The search is already handled by the context and Grid1 component
    // This prevents form submission and page refresh
  };

  const handleSearchClick = () => {
    // Trigger search when icon is clicked
    // The search functionality is already handled by the context
  };

  return (
    <div data-aos="fade-up" className={Style.headerWrap}>
      <div className={Style.imgWrap}>
        <Link to="/">
          <img src={Img} alt="logo" />
        </Link>
      </div>
      <div className={Style.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
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

      <div className={`${Style.linksWrap} ${menuOpen ? Style.showMenu : ""}`}>
        <ul onClick={() => setMenuOpen(false)}>
          <li className={Style.dropdown}>
            <Link to={isHome2 ? "/" : "/HomePage2"}>
              {isHome2 ? "Home Page 2" : "Home Page 1"}
            </Link>
            <ul className={Style.dropdownMenu}>
              <li>
                <Link to={isHome2 ? "/" : "/HomePage2"}>
                  {isHome2 ? "Home Page 1" : "Home Page 2"}
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/DashBoard">DashBoard</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/FAQ">FAQ</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li className={Style.cartLink}>
            <Link to="/Checkout">
              Checkout
              {getCartItemsCount() > 0 && (
                <span className={Style.cartCount}>{getCartItemsCount()}</span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
