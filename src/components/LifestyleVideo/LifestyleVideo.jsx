import React from "react";
import Style from "./LifestyleVideo.module.css";
import { useNavigate } from "react-router-dom";

export default function LifestyleVideo() {
    const navigate=useNavigate();
  return (
    <div data-aos="fade-up" className={Style.fullWrap}>
      <div className={Style.textAreaWrap}>
        <h2>Experience Mindful Living</h2>
        <p className={Style.para1}>
          Journey through a day of intentional living and discover how mindfulness 
          transforms ordinary moments into extraordinary experiences.
        </p>
        <p className={Style.para2}>
          From sunrise meditation to evening reflections, witness the power of 
          presence in creating a life filled with purpose, joy, and authentic 
          connections.
        </p>
        <button className={Style.videoBtn} onClick={()=>{navigate("/Error")}}>
          <a 
            href="https://www.youtube.com/embed/YD9QLw5vBZQ" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            🌟 WATCH JOURNEY
          </a>
        </button>
      </div>
      <div className={Style.videoWrap}>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/YD9QLw5vBZQ"
          title="Mindful Living Journey"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={Style.videoGlow}></div>
      </div>
    </div>
  );
}