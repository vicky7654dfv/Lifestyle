import React from "react";
import Style from "./Contact.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Error");
  };

  return (
    <div className={Style.contactWrap}>
      {/* Company Branding Section */}
      <div className={Style.companyBrand}>
        <div className={Style.companyLogo}></div>
        <div className={Style.companyInfo}>
          <h3>Stackly</h3>
          <p>Elevating Everyday Lifestyle</p>
        </div>
      </div>

      {/* Top Section */}
      <div className={Style.topSection}>
        <h2>Get In Touch</h2>
        <p>
          We're here to help you live your best life through quality lifestyle products. 
          Whether you have questions about our collections, need style advice, or want to 
          collaborate, our team is dedicated to providing exceptional support.
        </p>
      </div>

      <hr className={Style.sectionDivider} />

      {/* Main Content */}
      <div className={Style.mainContent}>
        {/* Contact Information */}
        <div className={Style.infoBox}>
          <h3>Visit Our Studio</h3>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            <span>
              <strong>Stackly Lifestyle Studio</strong><br />
              Chinna Tirupathi, Salem<br />
              Tamil Nadu – 636008<br />
              <em>Experience our lifestyle collection in person</em>
            </span>
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            <span>
              <strong>+91 9876543210</strong><br />
              <em>Style consultations available</em>
            </span>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <span>
              <strong>hello@stackly.life</strong><br />
              <em>We respond within 2 hours</em>
            </span>
          </p>
          <p>
            <i className="fa-solid fa-clock"></i>
            <span>
              <strong>Mon - Fri: 9:30 AM - 6:30 PM</strong><br />
              <strong>Saturday: 10:00 AM - 4:00 PM</strong><br />
              <em>Sunday: Private appointments only</em>
            </span>
          </p>
          
          {/* Social Links */}
          <div className={Style.socialLinks}>
            <Link to="/Error" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="/Error" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to="/Error" aria-label="Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link to="/Error" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link to="/Error" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest"></i>
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className={Style.formBox}>
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Full Name" 
              required 
              aria-label="Your Name"
            />
            <input 
              type="email" 
              placeholder="Your Email Address" 
              required 
              aria-label="Your Email"
            />
            <input 
              type="tel" 
              placeholder="Phone Number (Optional)" 
              aria-label="Your Phone Number"
            />
            <select aria-label="Inquiry Type" required>
              <option value="">Select Inquiry Type</option>
              <option value="general">General Inquiry</option>
              <option value="products">Product Information</option>
              <option value="style">Style Advice</option>
              <option value="collaboration">Brand Collaboration</option>
              <option value="wholesale">Wholesale Inquiry</option>
              <option value="feedback">Feedback & Suggestions</option>
            </select>
            <textarea 
              placeholder="Tell us how we can help enhance your lifestyle..." 
              rows="6" 
              required 
              aria-label="Your Message"
            ></textarea>
            <button type="submit">
              <i className="fa-solid fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>

      <hr className={Style.sectionDivider} />

      {/* Building Photo Section */}
      <div className={Style.buildingSection}>
        <h3>Our Lifestyle Studio</h3>
        <div className={Style.buildingPhoto}>
          {/* Floating building image with CSS animation */}
        </div>
      </div>

      <hr className={Style.sectionDivider} />

      {/* Map Section */}
      <div className={Style.mapWrap}>
        <h3>Find Our Studio</h3>
        <div className={Style.mapContainer}>
          <iframe
            title="Stackly Lifestyle Studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.548890043977!2d78.14007507459923!3d11.664325042797106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf09e216e9dfd%3A0x3a9828e2c36e5f0b!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}