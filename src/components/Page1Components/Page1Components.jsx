import React, { useState, useEffect } from 'react';
import Style from "./Page1Components.module.css";
import Img1 from "../../assets/Page1Components/Img1.webp"
import Img2 from "../../assets/Page1Components/Img2.webp"
import Slide1 from "../../assets/Page1Components/1.webp"
import Slide2 from "../../assets/Page1Components/2.webp"
import Slide3 from "../../assets/Page1Components/3.webp"
import { Link } from 'react-router-dom';


export default function Page1Components() {
  const partnersData = [
    {
      id: 1,
      image: Img1,
      name: "Wellness Collective",
      description: "Premium wellness products for modern living",
      newProducts: ["Smart Yoga Mat", "Aromatherapy Diffuser", "Organic Skincare Set"],
      partnership: "Since 2020"
    },
    {
      id: 2,
      image: Img2,
      name: "Urban Living Co.",
      description: "Transforming urban spaces into lifestyle havens",
      newProducts: ["Modular Furniture", "Smart Home Kit", "Minimalist Decor"],
      partnership: "Since 2019"
    }
  ];

  const sliderImages = [
    {
      id: 1,
      image: Slide1,
      title: "Summer Collection 2024",
      description: "Discover the latest trends in lifestyle fashion"
    },
    {
      id: 2,
      image: Slide2,
      title: "Wellness Retreat",
      description: "Transform your daily routine with mindful practices"
    },
    {
      id: 3,
      image: Slide3,
      title: "Home Essentials",
      description: "Curated pieces for your perfect living space"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div data-aos="fade-up" className={Style.mainContainer}>
      {/* Partners Grid Section */}
      <div className={Style.gridContainer}>
        <div className={Style.gridTitle}>
          <h2>Our Premium Partners</h2>
          <p>Discover our curated selection of lifestyle partners and their latest offerings</p>
        </div>
        
        <div className={Style.photosGrid}>
          {partnersData.map((partner) => (
            <div key={partner.id} className={Style.gridItem}>
              <div className={Style.imageContainer}>
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className={Style.partnerImage}
                />
                <div className={Style.hoverOverlay}>
                  <div className={Style.hoverContent}>
                    <h3 className={Style.partnerName}>{partner.name}</h3>
                    <p className={Style.partnerDescription}>{partner.description}</p>
                    <div className={Style.partnershipInfo}>
                      <span className={Style.partnershipBadge}>Partnership: {partner.partnership}</span>
                    </div>
                    <div className={Style.newProducts}>
                      <h4>New Products:</h4>
                      <ul>
                        {partner.newProducts.map((product, index) => (
                          <li key={index}>{product}</li>
                        ))}
                      </ul>
                    </div>
                    <Link to={"/Error"} className={Style.exploreButton}>Explore More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Slider Section */}
      <div className={Style.sliderContainer}>
        <div className={Style.sliderTitle}>
          <h2>Featured Collections</h2>
          <p>Explore our latest lifestyle collections</p>
        </div>
        
        <div className={Style.slider}>
          <div className={Style.sliderTrack}>
            {sliderImages.map((slide, index) => (
              <div
                key={slide.id}
                className={`${Style.slide} ${index === currentSlide ? Style.active : ''}`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className={Style.sliderImage}
                />
                <div className={Style.slideContent}>
                  <h3 className={Style.slideTitle}>{slide.title}</h3>
                  <p className={Style.slideDescription}>{slide.description}</p>
                  <Link to={"/Error"} className={Style.slideButton}>Discover Now</Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Indicators */}
          <div className={Style.sliderIndicators}>
            {sliderImages.map((_, index) => (
              <button
                key={index}
                className={`${Style.indicator} ${index === currentSlide ? Style.active : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}