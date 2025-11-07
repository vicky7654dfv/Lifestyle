import React from "react";
import Style from "./Banner2.module.css";
import BannerVideo from "../../assets/Banner1/vidBg.mp4"; // or .webm
import { Link, useNavigate } from "react-router-dom";

export default function Banner2() {
  const navigate = useNavigate();
  
  return (
    <div className={Style.bannerWrap} data-aos="zoom-in">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className={Style.videoBg}
      >
        <source src={BannerVideo} type="video/mp4" />
        {/* Fallback for different video formats */}
        <source src={BannerVideo.replace('.mp4', '.webm')} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback image in case video doesn't load */}
      <img 
        src="/fallback-banner.jpg" 
        alt="Lifestyle background" 
        className={Style.fallbackImage}
      />
      
      <div className={Style.textWrap}>
        <h3>Live Your Best Life</h3>
        <p>Discover balance, wellness, and joy in everyday moments. Transform your routine into extraordinary experiences.</p>
        <button onClick={() => navigate("/Error")} className={Style.heroBtn}>
          Start Your Journey
        </button>
      </div>
      
      {/* Video overlay for better text readability */}
      <div className={Style.videoOverlay}></div>
    </div>
  );
}