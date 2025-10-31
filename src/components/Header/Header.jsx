import React, { useState } from "react";
import Style from "../Header/Header.module.css";
import Img from "../../assets/Header/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome2 = location.pathname === "/HomePage2";
  
  return (
    <div data-aos="fade-up" className={Style.headerWrap}>
      <div className={Style.imgWrap}>
        <img src={Img} alt="logo" />
      </div>
      <div className={Style.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div className={Style.inputDiv}>
        <input
          type="text"
          placeholder="Discover your style 💫"
        />
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
            <Link to="/AboutUs">About Us</Link>
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
          <li>
            <Link to="/Checkout">Checkout</Link>
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