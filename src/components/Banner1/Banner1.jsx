import React from 'react';
import Style from "./Banner1.module.css";
import { Link } from 'react-router-dom';
// Changed import to a video file (ensure you have a .mp4 file in this path)
import bgVideo from "../../assets/Banner1/bgVideo.mp4" 

export default function Banner1() {
  return (
    <div data-aos="fade-up" className={Style.bannerContainer}>
      {/* Replaced img with video tag */}
      <video
        src={bgVideo}
        className={Style.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Optional: Overlay to make text readable on top of video */}
      <div className={Style.overlay}></div>

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