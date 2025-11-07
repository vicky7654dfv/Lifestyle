import React from 'react';
import Img1 from "../../assets/WellnessFeatures/1.webp";
import Img2 from "../../assets/WellnessFeatures/2.webp";
import Img3 from "../../assets/WellnessFeatures/3.webp";
import Img4 from "../../assets/WellnessFeatures/4.webp";
import Style from "./WellnessFeatures.module.css";

export default function WellnessFeatures() {
  // Debug: Check if images are loading
  console.log('Image paths:', {
    img1: Img1,
    img2: Img2,
    img3: Img3,
    img4: Img4
  });

  return (
    <div data-aos="fade-up" className={Style.outerWrap}>
      <h2>Pillars of Balanced Living</h2>
      <p>Embrace holistic wellness through our four foundational pillars</p>
      <hr className={Style.divider} />
      
      <div className={Style.featuresWrap}>
        <div className={Style.featureCard}>
          <div className={Style.iconWrapper}>
            <img 
              src={Img1} 
              alt="Mindful Meditation" 
              onError={(e) => {
                console.error('Image 1 failed to load');
                e.target.style.display = 'none';
              }}
            />
          </div>
          <h3>Mindful Meditation</h3>
          <p>Find inner peace and clarity through guided meditation practices that calm the mind and rejuvenate the spirit.</p>
        </div>
        
        <div className={Style.featureCard}>
          <div className={Style.iconWrapper}>
            <img 
              src={Img2} 
              alt="Nutrition Guide" 
              onError={(e) => {
                console.error('Image 2 failed to load');
                e.target.style.display = 'none';
              }}
            />
          </div>
          <h3>Nutrition Guide</h3>
          <p>Nourish your body with wholesome recipes and nutritional wisdom for optimal health and vitality.</p>
        </div>
        
        <div className={Style.featureCard}>
          <div className={Style.iconWrapper}>
            <img 
              src={Img3} 
              alt="Fitness Journey" 
              onError={(e) => {
                console.error('Image 3 failed to load');
                e.target.style.display = 'none';
              }}
            />
          </div>
          <h3>Fitness Journey</h3>
          <p>Transform your body and boost energy with personalized workout routines and fitness guidance.</p>
        </div>
        
        <div className={Style.featureCard}>
          <div className={Style.iconWrapper}>
            <img 
              src={Img4} 
              alt="Mindful Living" 
              onError={(e) => {
                console.error('Image 4 failed to load');
                e.target.style.display = 'none';
              }}
            />
          </div>
          <h3>Mindful Living</h3>
          <p>Incorporate mindfulness into daily activities for reduced stress and enhanced life satisfaction.</p>
        </div>
      </div>
    </div>
  );
}