import React from "react";
import Style from "./Footer.module.css";
import Img1 from "../../assets/Header/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import { useCategory } from "../CategoryContext/CategoryContext";

export default function Footer() {
  const { setActiveCategory } = useCategory();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    
    // If we're not already on the home page, navigate there
    if (window.location.pathname !== "/") {
      navigate("/");
    } else {
      // If we're already on home page, scroll to the grid section
      // Use a more reliable selector that matches Grid1's structure
      setTimeout(() => {
        const gridSection = document.querySelector('[data-aos="fade"]');
        if (gridSection) {
          gridSection.scrollIntoView({ 
            behavior: "smooth", 
            block: "start",
            inline: "nearest"
          });
        }
      }, 100);
    }
  };

  return (
    <>
      <div data-aos="fade-up" className={Style.footerWrap}>
        <div className={Style.box}>
          <img src={Img1} alt="Stackly Logo" />
          <p>
            To redefine modern fashion by blending creativity, comfort, and
            sustainability — making Stackly a global symbol of confidence and
            style.
          </p>
          <Link to={"/About"}>
            <button className={Style.aboutBtn}>
              More about company <i className="fa-solid fa-angles-right"></i>
            </button>
          </Link>
        </div>

        <div className={Style.box}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={"/About"}>About Us</Link>
            </li>
            <li>
              <Link to={"/Services"}>Services</Link>
            </li>
            <li>
              <Link to={"/FAQ"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/Contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/SignUp"}>Sign Up</Link>
            </li>
            <li>
              <Link to={"/Login"}>Login</Link>
            </li>
          </ul>
        </div>

        <div className={Style.box}>
          <h4>Shop</h4>
          <ul>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("Men");
                }}
                className={Style.categoryLink}
              >
                Men's Collection
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("Women");
                }}
                className={Style.categoryLink}
              >
                Women's Collection
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("Accessories");
                }}
                className={Style.categoryLink}
              >
                Accessories
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("Gym");
                }}
                className={Style.categoryLink}
              >
                Gym
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("Home Kits");
                }}
                className={Style.categoryLink}
              >
                Home Kits
              </a>
            </li>
          </ul>
        </div>

        <div className={Style.box}>
          <h4>Headquarters</h4>
          <ul className={Style.contactInfo}>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              Chinna tirupathi, Salem
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              +91 9876543210
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              info@thestackly.com
            </li>
            <li>
              <i className="fa-solid fa-calendar-days"></i>
              Mon - Fri: 09:30 AM - 06:30 PM
            </li>
          </ul>
        </div>

        <div className={Style.box}>
          <h4>Follow Us On</h4>
          <p>
            Stay connected with Stackly for the latest fashion trends, style
            updates, and tips to elevate your wardrobe with confidence.
          </p>
          <div className={Style.media}>
            <Link to={"/Error"} className={Style.socialLink}>
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link to={"/Error"} className={Style.socialLink}>
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to={"/Error"} className={Style.socialLink}>
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link to={"/Error"} className={Style.socialLink}>
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className={Style.bottomFooter}>
        <hr />
        <p>
          © 2025 Stackly Lifestyle Company. All rights reserved. Crafted with
          passion and style for the modern you.
        </p>
      </div>
    </>
  );
}