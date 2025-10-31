import React from "react";
import Style from "./Footer.module.css";
import Img1 from "../../assets/Header/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
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
            <li><Link to={"/About"}>About Us</Link></li>
            <li><Link to={"/Services"}>Services</Link></li>
            <li><Link to={"/FAQ"}>FAQ</Link></li>
            <li><Link to={"/Contact"}>Contact</Link></li>
            <li><Link to={"/SignUp"}>Sign Up</Link></li>
            <li><Link to={"/Login"}>Login</Link></li>
          </ul>
        </div>
        
        <div className={Style.box}>
          <h4>Shop</h4>
          <ul>
            <li><Link to={"/Men"}>Men's Collection</Link></li>
            <li><Link to={"/Women"}>Women's Collection</Link></li>
            <li><Link to={"/Accessories"}>Accessories</Link></li>
            <li><Link to={"/NewArrivals"}>New Arrivals</Link></li>
            <li><Link to={"/Sale"}>Sale & Offers</Link></li>
            <li><Link to={"/GiftCards"}>Gift Cards</Link></li>
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
        <p>© 2025 Stackly Lifestyle Company. All rights reserved. Crafted with passion and style for the modern you.</p>
      </div>
    </>
  );
}