import React from "react";
import Style from "./Footer.module.css";
import Img1 from "../../assets/Header/logo.webp";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCategory } from "../CategoryContext/CategoryContext";

export default function Footer() {
  const { setActiveCategory } = useCategory();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    
    // If we're not already on the home page, navigate there
    if (window.location.pathname !== "/") {
      navigate("/");
    } else {
      // If we're already on home page, scroll to the grid section
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

  const handleQuickLinkClick = (e, path) => {
    e.preventDefault();
    
    // If we're already on the target page, scroll to top
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // If we're not on target page, navigate to it
      navigate(path);
      
      // Scroll to top after navigation (small delay to ensure page is loaded)
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  const handleSocialLinkClick = (e) => {
    e.preventDefault();
    
    // If we're already on the Error page, scroll to top
    if (location.pathname === "/Error") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // If we're not on Error page, navigate to it
      navigate("/Error");
      
      // Scroll to top after navigation (small delay to ensure page is loaded)
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
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
              <a
                href="/About"
                onClick={(e) => handleQuickLinkClick(e, "/About")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/Services"
                onClick={(e) => handleQuickLinkClick(e, "/Services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/FAQ"
                onClick={(e) => handleQuickLinkClick(e, "/FAQ")}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                onClick={(e) => handleQuickLinkClick(e, "/Contact")}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/SignUp"
                onClick={(e) => handleQuickLinkClick(e, "/SignUp")}
              >
                Sign Up
              </a>
            </li>
            <li>
              <a
                href="/Login"
                onClick={(e) => handleQuickLinkClick(e, "/Login")}
              >
                Login
              </a>
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
            <a
              href="/Error"
              onClick={handleSocialLinkClick}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="/Error"
              onClick={handleSocialLinkClick}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="/Error"
              onClick={handleSocialLinkClick}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="/Error"
              onClick={handleSocialLinkClick}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
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