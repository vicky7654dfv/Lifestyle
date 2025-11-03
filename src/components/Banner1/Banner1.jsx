import React from 'react';
import Style from "./Banner1.module.css";
import { Link } from 'react-router-dom';

export default function Banner1() {
  // const videoSrc = new URL('../../assets/Banner1/vidBg.mp4', import.meta.url).href;

  return (
    <div data-aos="fade-up" className={Style.bannerContainer}>
      <video
  src="/videos/vidBg.mp4"
  className={Style.backgroundVideo}
  autoPlay
  muted
  loop
  playsInline
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
