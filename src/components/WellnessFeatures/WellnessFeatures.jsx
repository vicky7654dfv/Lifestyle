import React from 'react';
import { Link } from "react-router-dom";
import Img1 from "../../assets/WellnessFeatures/1.webp";
import Img2 from "../../assets/WellnessFeatures/2.webp";
import Img3 from "../../assets/WellnessFeatures/3.webp";
import Img4 from "../../assets/WellnessFeatures/4.webp";
import Style from "./WellnessFeatures.module.css";

export default function WellnessFeatures() {
  const features = [
    {
      id: 1,
      image: Img1,
      title: "Mindful Meditation",
      description: "Discover inner peace through guided meditation practices that calm the mind, reduce stress, and rejuvenate your spirit. Perfect for beginners and experienced practitioners alike.",
      icon: "🧘"
    },
    {
      id: 2,
      image: Img2,
      title: "Nutrition Guide",
      description: "Nourish your body with scientifically-backed nutritional wisdom. Learn to prepare wholesome meals that fuel your body for optimal health and vitality.",
      icon: "🥗"
    },
    {
      id: 3,
      image: Img3,
      title: "Fitness Journey",
      description: "Transform your physical health with personalized workout routines. From yoga to strength training, find the perfect fitness path for your goals.",
      icon: "💪"
    },
    {
      id: 4,
      image: Img4,
      title: "Mindful Living",
      description: "Incorporate mindfulness into every aspect of your daily life. Learn techniques to reduce anxiety, improve focus, and enhance overall life satisfaction.",
      icon: "✨"
    }
  ];

  return (
    <div data-aos="fade-up" className={Style.outerWrap}>
      {/* Decorative Background Elements */}
      <div className={Style.bgDecor}>
        <div className={Style.bgCircle1}></div>
        <div className={Style.bgCircle2}></div>
      </div>

      {/* Header Section */}
      <div className={Style.headerContent}>
        <h2>Pillars of Holistic Wellness</h2>
        <p>
          Discover the four foundational pillars that create a balanced, fulfilling lifestyle. 
          Each pillar is designed to support your journey toward complete well-being.
        </p>
        <hr className={Style.divider} />
      </div>

      {/* Features Grid */}
      <div className={Style.featuresWrap}>
        {features.map((feature) => (
          <div key={feature.id} className={Style.featureCard} data-aos="fade-up" data-aos-delay={feature.id * 100}>
            {/* Large Image Container */}
            <div className={Style.iconWrapper}>
              <img 
                src={feature.image} 
                alt={feature.title}
                loading="lazy"
                onError={(e) => {
                  console.error(`Image ${feature.id} failed to load`);
                  e.target.style.display = 'none';
                  // Show icon as fallback
                  const fallback = document.createElement('div');
                  fallback.className = Style.fallbackIcon;
                  fallback.innerHTML = feature.icon;
                  fallback.style.fontSize = '4rem';
                  e.target.parentNode.appendChild(fallback);
                }}
              />
            </div>

            {/* Content */}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>

            {/* Enhanced Button */}
            <Link to="/Error" className={Style.exploreBtn}>
              <span>Explore More</span>
              <span className={Style.btnIcon}>→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}