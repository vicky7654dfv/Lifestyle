import React from "react";
import Style from "./CompanyBuilding.module.css";
import stacklyLogo from "../../assets/Header/logo.png";
import building1 from "../../assets/About/CompanyBuilding/1.webp";
import building2 from "../../assets/About/CompanyBuilding/2.webp";
import building3 from "../../assets/About/CompanyBuilding/3.webp";

export default function CompanyBuilding() {
  return (  
      <section className={Style.stacklySection}>
        <div className={Style.stacklyContainer}>
          {/* Logo Header */}
          <div className={Style.stacklyHeader} data-aos="fade-up">
            <div className={Style.logoContainer}>
              <img src={stacklyLogo} alt="Stackly" className={Style.stacklyLogo} />
            </div>
            <h2 className={Style.stacklyTitle}>Our Global Presence</h2>
            <p className={Style.stacklySubtitle}>
              With headquarters spanning across three continents, Stackly brings world-class 
              lifestyle solutions to your doorstep. Our architectural marvels reflect our 
              commitment to excellence and innovation.
            </p>
          </div>

          {/* Buildings Grid */}
          <div className={Style.buildingsGrid}>
            {/* Building 1 */}
            <div className={Style.buildingCard} data-aos="fade-up" data-aos-delay="200">
              <div className={Style.buildingImageContainer}>
                <img src={building1} alt="Stackly Headquarters" className={Style.buildingImage} />
                <div className={Style.buildingOverlay}>
                  <span className={Style.viewDetails} onClick={() => window.location.href = '/Error'}>View Details</span>
                </div>
              </div>
              <div className={Style.buildingInfo}>
                <h3 className={Style.buildingName}>Stackly Headquarters</h3>
                <p className={Style.buildingLocation}>New York, USA</p>
                <div className={Style.buildingFeatures}>
                  <span className={Style.feature}>🏢 50 Floors</span>
                  <span className={Style.feature}>🌍 North America Hub</span>
                </div>
              </div>
            </div>

            {/* Building 2 */}
            <div className={Style.buildingCard} data-aos="fade-up" data-aos-delay="400">
              <div className={Style.buildingImageContainer}>
                <img src={building2} alt="Stackly Europe" className={Style.buildingImage} />
                <div className={Style.buildingOverlay}>
                  <span className={Style.viewDetails} onClick={() => window.location.href = '/Error'}>View Details</span>
                </div>
              </div>
              <div className={Style.buildingInfo}>
                <h3 className={Style.buildingName}>Stackly Europe</h3>
                <p className={Style.buildingLocation}>London, UK</p>
                <div className={Style.buildingFeatures}>
                  <span className={Style.feature}>🏢 35 Floors</span>
                  <span className={Style.feature}>🇪🇺 European Center</span>
                </div>
              </div>
            </div>

            {/* Building 3 */}
            <div className={Style.buildingCard} data-aos="fade-up" data-aos-delay="600">
              <div className={Style.buildingImageContainer}>
                <img src={building3} alt="Stackly Asia Pacific" className={Style.buildingImage} />
                <div className={Style.buildingOverlay}>
                  <span className={Style.viewDetails} onClick={() => window.location.href = '/Error'}>View Details</span>
                </div>
              </div>
              <div className={Style.buildingInfo}>
                <h3 className={Style.buildingName}>Stackly Asia Pacific</h3>
                <p className={Style.buildingLocation}>Singapore</p>
                <div className={Style.buildingFeatures}>
                  <span className={Style.feature}>🏢 45 Floors</span>
                  <span className={Style.feature}>🌏 APAC Innovation Hub</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className={Style.globalStats} data-aos="fade-up" data-aos-delay="800">
            <div className={Style.statItem}>
              <div className={Style.statIcon}>🌎</div>
              <div className={Style.statContent}>
                <h4 className={Style.statNumber}>3</h4>
                <p className={Style.statLabel}>Continents</p>
              </div>
            </div>
            <div className={Style.statItem}>
              <div className={Style.statIcon}>🏢</div>
              <div className={Style.statContent}>
                <h4 className={Style.statNumber}>15+</h4>
                <p className={Style.statLabel}>Countries</p>
              </div>
            </div>
            <div className={Style.statItem}>
              <div className={Style.statIcon}>👥</div>
              <div className={Style.statContent}>
                <h4 className={Style.statNumber}>2000+</h4>
                <p className={Style.statLabel}>Team Members</p>
              </div>
            </div>
            <div className={Style.statItem}>
              <div className={Style.statIcon}>⭐</div>
              <div className={Style.statContent}>
                <h4 className={Style.statNumber}>12</h4>
                <p className={Style.statLabel}>Years Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
   
  );
}