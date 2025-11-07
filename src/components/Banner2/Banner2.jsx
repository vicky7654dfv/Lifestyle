import React from "react";
import Style from "./Banner2.module.css";
import bgVid from "../../assets/Banner2/bgVid.webm";
import { useNavigate } from "react-router-dom";

export default function Banner2() {
  const navigate = useNavigate();
  
  return (
    <div className={Style.bannerWrap} data-aos="zoom-in">
      <video 
        src={bgVid}
        autoPlay 
        muted 
        loop 
        playsInline
        className={Style.videoBg}
      >
        Your browser does not support the video tag.
      </video>
      
      <div className={Style.textWrap}>
        <h3>Live Your Best Life</h3>
        <p>Discover balance, wellness, and joy in everyday moments. Transform your routine into extraordinary experiences.</p>
        <button onClick={() => navigate("/Error")} className={Style.heroBtn}>
          Start Your Journey
        </button>
      </div>
      
      <div className={Style.videoOverlay}></div>
    </div>
  );
}