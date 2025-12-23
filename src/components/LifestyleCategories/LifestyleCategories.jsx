import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './LifestyleCategories.module.css';
import CountUp from 'react-countup';
import { FaSpa, FaPlane, FaLeaf, FaTshirt, FaHome } from 'react-icons/fa';

// Import your images
import Img1 from "../../assets/LifestyleCategories/1.webp";
import Img2 from "../../assets/LifestyleCategories/2.webp";
import Img3 from "../../assets/LifestyleCategories/3.webp";
import Img4 from "../../assets/LifestyleCategories/4.webp";
import Img5 from "../../assets/LifestyleCategories/5.webp";

export default function LifestyleCategories() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  // Rotation state to spin the wheel
  const [rotation, setRotation] = useState(0);

  const categories = [
    {
      id: 1,
      name: "Wellness",
      icon: <FaSpa />,
      image: Img1,
      title: "Rejuvenate Your Soul",
      description: "Experience world-class wellness therapies designed to restore your balance and inner peace.",
      stats: [
        { label: "Therapies", value: 50, suffix: "+" },
        { label: "Experts", value: 120, suffix: "" },
      ],
      color: "#00d2ff" // Cyan
    },
    {
      id: 2,
      name: "Travel",
      icon: <FaPlane />,
      image: Img2,
      title: "Explore the Unseen",
      description: "Curated travel experiences to the most exotic and breathtaking destinations on the planet.",
      stats: [
        { label: "Destinations", value: 200, suffix: "+" },
        { label: "Guides", value: 500, suffix: "" }
      ],
      color: "#ff6b6b" // Red
    },
    {
      id: 3,
      name: "Food",
      icon: <FaLeaf />,
      image: Img3,
      title: "Fuel Your Body",
      description: "Organic, farm-to-table nutrition plans tailored for your specific metabolic needs.",
      stats: [
        { label: "Recipes", value: 1000, suffix: "+" },
        { label: "Farms", value: 85, suffix: "" }
      ],
      color: "#28a745" // Green
    },
    {
      id: 4,
      name: "Fashion",
      icon: <FaTshirt />,
      image: Img4,
      title: "Define Your Style",
      description: "Trendsetting fashion collections that blend comfort with high-end sustainable aesthetics.",
      stats: [
        { label: "Styles", value: 5000, suffix: "+" },
        { label: "Stores", value: 40, suffix: "" }
      ],
      color: "#6f42c1" // Purple
    },
    {
      id: 5,
      name: "Living",
      icon: <FaHome />,
      image: Img5,
      title: "Future of Home",
      description: "Smart home solutions that integrate technology seamlessly into your daily living spaces.",
      stats: [
        { label: "Devices", value: 500, suffix: "+" },
        { label: "Savings", value: 40, suffix: "%" }
      ],
      color: "#fd7e14" // Orange
    }
  ];

  const handleCategoryClick = (index) => {
    setActiveIndex(index);
    // Calculate rotation: Move the clicked item to the "3 o'clock" (0 degree) or top position depending on CSS
    // Here we rotate so the active item is at -90deg (Top) or 0deg (Right)
    const anglePerItem = 360 / categories.length;
    // We want the active index to be at rotation 0 (or whatever starting point).
    // Formula: rotation = -1 * index * angle
    setRotation(-(index * anglePerItem));
  };

  return (
    <section className={Style.container} data-aos="fade-up">
      <div className={Style.header}>
        <h2 className={Style.mainTitle}>Iconic Lifestyle Choices</h2>
        <p className={Style.subtitle}>Spin the wheel to discover your next passion</p>
      </div>

      <div className={Style.wrapper}>
        
        {/* LEFT: SPINNING WHEEL */}
        <div className={Style.wheelSection}>
          <div 
            className={Style.wheelTrack} 
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {categories.map((cat, index) => {
              // Calculate initial placement angle
              const angle = (360 / categories.length) * index;
              return (
                <div 
                  key={cat.id}
                  className={`${Style.wheelItem} ${index === activeIndex ? Style.activeItem : ''}`}
                  // Rotate to place on circle, then counter-rotate item to keep icon upright
                  style={{ 
                    transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`
                  }}
                  onClick={() => handleCategoryClick(index)}
                >
                  <div 
                    className={Style.iconBox}
                    // Counter-rotate the icon itself so it stays upright while wheel spins
                    style={{ transform: `rotate(${-rotation}deg)` }}
                  >
                    {cat.icon}
                  </div>
                  {/* Label only visible when active or hovered */}
                  <span 
                    className={Style.wheelLabel}
                    style={{ 
                        transform: `rotate(${-rotation}deg)`,
                        color: index === activeIndex ? cat.color : '#666'
                    }}
                  >
                    {cat.name}
                  </span>
                </div>
              );
            })}
          </div>
          
          {/* Center Decoration */}
          <div className={Style.centerHub}>
            <div className={Style.hubPulse}></div>
          </div>
        </div>

        {/* RIGHT: CONTENT DISPLAY */}
        <div className={Style.contentSection}>
          <div className={Style.imageFrame}>
            <img 
              src={categories[activeIndex].image} 
              alt={categories[activeIndex].name} 
              className={Style.activeImage}
              key={activeIndex} // Force re-render for animation
            />
            <div className={Style.imageOverlay} style={{ background: categories[activeIndex].color }}></div>
          </div>

          <div className={Style.textFrame}>
            <h4 style={{ color: categories[activeIndex].color }}>
              {categories[activeIndex].name} Collection
            </h4>
            <h2>{categories[activeIndex].title}</h2>
            <p>{categories[activeIndex].description}</p>

            <div className={Style.statsRow}>
              {categories[activeIndex].stats.map((stat, i) => (
                <div key={i} className={Style.statItem}>
                  <h3 style={{ color: categories[activeIndex].color }}>
                    <CountUp end={stat.value} duration={2} separator="," />
                    {stat.suffix}
                  </h3>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <button 
              className={Style.exploreBtn}
              onClick={() => navigate("/Error")}
              style={{ 
                background: categories[activeIndex].color,
                boxShadow: `0 10px 20px ${categories[activeIndex].color}40`
              }}
            >
              Explore Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}