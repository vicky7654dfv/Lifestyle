import React from "react";
import Style from "./Hero.module.css";
import aboutHero from "../../assets/About/Hero/1.jpg";
import lifestyle1 from "../../assets/About/Hero/2.jpg";
import lifestyle2 from "../../assets/About/Hero/3.jpg";

export default function AboutUs() {
  return (
      <section className={Style.heroSection}>
        <div className={Style.heroContent}>
          <div className={Style.heroText}>
            <h1 data-aos="fade-up" className={Style.heroTitle}>
              Redefining Modern
              <span className={Style.highlight}> Lifestyle</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" className={Style.heroSubtitle}>
              Where elegance meets everyday living. We believe that true style isn't just about 
              what you wear—it's about how you live, what you surround yourself with, and the 
              experiences you create.
            </p>
            <div data-aos="fade-up" data-aos-delay="400" className={Style.heroStats}>
              <div className={Style.stat}>
                <span className={Style.statNumber}>50K+</span>
                <span className={Style.statLabel}>Happy Customers</span>
              </div>
              <div className={Style.stat}>
                <span className={Style.statNumber}>200+</span>
                <span className={Style.statLabel}>Brand Partners</span>
              </div>
              <div className={Style.stat}>
                <span className={Style.statNumber}>5★</span>
                <span className={Style.statLabel}>Rated Service</span>
              </div>
            </div>
          </div>
          
          <div className={Style.heroVisual}>
            <div className={Style.mainImageContainer} data-aos="zoom-in" data-aos-delay="300">
              <img 
                src={aboutHero} 
                alt="Lifestyle" 
                className={Style.mainImage}
              />
              <div className={Style.imageOverlay}></div>
            </div>
            
            <div className={Style.floatingImages}>
              <div 
                className={Style.floatingImage1} 
                data-aos="fade-left" 
                data-aos-delay="500"
              >
                <img src={lifestyle1} alt="Fashion" />
              </div>
              <div 
                className={Style.floatingImage2} 
                data-aos="fade-right" 
                data-aos-delay="700"
              >
                <img src={lifestyle2} alt="Home Decor" />
              </div>
            </div>
          </div>
        </div>
        
        <div className={Style.scrollIndicator}>
          <div className={Style.scrollArrow}></div>
        </div>
      </section>
  );
}