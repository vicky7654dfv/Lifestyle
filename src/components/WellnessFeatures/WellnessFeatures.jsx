import React from 'react';
import Img1 from "../../assets/Grid1/1.jpg";
import Img2 from "../../assets/Grid1/1.jpg";
import Img3 from "../../assets/Grid1/1.jpg";
import Img4 from "../../assets/Grid1/1.jpg";
import Style from "./WellnessFeatures.module.css";

export default function WellnessFeatures() {
  return (
    <div data-aos="fade-up" className={Style.outerWrap}>
      <h2>Pillars of Balanced Living</h2>
      <p>Embrace holistic wellness through our four foundational pillars</p>
      <hr className={Style.divider} />
      
      <div className={Style.featuresWrap}>
        <div className={Style.featureCard}>
          <div className={Style.iconWrapper}>
            <img src={Img1} alt="Mindful Meditation" />
          </div>
          <h3>Mindful Meditation</h3>
          <p>Find inner peace and clarity through guided meditation practices that calm the mind and rejuvenate the spirit.</p>
        </div>
        
        <div className={Style.featureCard}>
          <div className={Style.iconWrapper}>
            <img src={Img2} alt="Nutrition Guide" />
          </div>
          <h3>Nutrition Guide</h3>
          <p>Nourish your body with wholesome recipes and nutritional wisdom for optimal health and vitality.</p>
        </div>
        
        <div className={Style.featureCard}>
          <div className={Style.iconWrapper}>
            <img src={Img3} alt="Fitness Journey" />
          </div>
          <h3>Fitness Journey</h3>
          <p>Transform your body and boost energy with personalized workout routines and fitness guidance.</p>
        </div>
        
        <div className={Style.featureCard}>
          <div className={Style.iconWrapper}>
            <img src={Img4} alt="Mindful Living" />
          </div>
          <h3>Mindful Living</h3>
          <p>Incorporate mindfulness into daily activities for reduced stress and enhanced life satisfaction.</p>
        </div>
      </div>
    </div>
  );
}