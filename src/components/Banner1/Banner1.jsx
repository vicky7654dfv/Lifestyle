import React from 'react';
import Style from "./Banner1.module.css";
import { Link } from 'react-router-dom';
import bg from "../../assets/Banner1/bg.webp"

export default function Banner1() {
  return (
    <div data-aos="fade-up" className={Style.bannerContainer}>
      <img
        src={bg}
        className={Style.backgroundImage}
        alt="Lifestyle background"
      />
      <div className={Style.content}>
        <h1 className={Style.title}>LifeStyle</h1>
        <p className={Style.paragraph}>
          Discover your perfect lifestyle. Explore new horizons, embrace wellness,
          and create moments that matter every day.
        </p>
        <Link to="/Error" className={Style.ctaButton}>Explore Now</Link>
      </div>
    </div>
  );
}