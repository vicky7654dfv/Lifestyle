import React from "react";
import Img from "../../assets/Grid1/1.jpg";
import Style from "./DailyRituals.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function DailyRituals() {
    const navigate=useNavigate();
  return (
    <div data-aos="fade-up" className={Style.fullWrap}>
      <div className={Style.imgWrap}>
        <img src={Img} alt="Morning rituals" />
        <div className={Style.imageOverlay}></div>
      </div>
      <div className={Style.textAreaWrap}>
        <h2>Transform Your Daily Rituals</h2>
        <p className={Style.para1}>
          Start your day with intention and purpose. Our curated morning routines 
          help you create meaningful habits that set the tone for a productive and 
          balanced day ahead.
        </p>
        <p className={Style.para2}>
          From sunrise meditation to mindful movement and nourishing breakfast 
          rituals, discover how small daily practices can lead to profound life 
          transformations and lasting well-being.
        </p>
        <button onClick={()=>{navigate("/Error")}} className={Style.ritualBtn}>
          <Link to="/Error">Explore Rituals</Link>
        </button>
      </div>
    </div>
  );
}