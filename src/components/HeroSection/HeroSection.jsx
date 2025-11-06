import React, { useState, useEffect } from 'react';
import Style from './HeroSection.module.css';
import { useNavigate } from 'react-router-dom';
import Img1 from "../../assets/Services/HeroSection/1.webp"
import Img2 from "../../assets/Services/HeroSection/2.webp"
import Img3 from "../../assets/Services/HeroSection/3.webp"

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Img1,
      title: "Elevate Your Lifestyle",
      subtitle: "Discover premium services tailored for modern living"
    },
    {
      image: Img2,
      title: "Personalized Experiences",
      subtitle: "Services designed around your unique lifestyle needs"
    },
    {
      image: Img3,
      title: "Quality & Convenience",
      subtitle: "Seamless services that enhance your daily life"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={Style.heroSection}>
      <div className={Style.slideshow}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${Style.slide} ${index === currentSlide ? Style.active : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={Style.slideContent}>
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <div className={Style.ctaButtons}>
                <button 
                  className={Style.primaryBtn}
                  onClick={() => navigate("/Error")}
                >
                  Explore Services
                </button>
                <button 
                  className={Style.secondaryBtn}
                  onClick={() => navigate("/Contact")}
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <div className={Style.slideIndicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${Style.indicator} ${index === currentSlide ? Style.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;