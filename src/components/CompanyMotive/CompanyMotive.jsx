import React from 'react';
import Style from './CompanyMotive.module.css';

const CompanyMotive = () => {
  const motives = [
    {
      icon: '💎',
      title: 'Quality First',
      description: 'We believe in delivering exceptional quality in every product and service we offer.'
    },
    {
      icon: '❤️',
      title: 'Customer Centric',
      description: 'Your satisfaction and lifestyle enhancement are at the heart of everything we do.'
    },
    {
      icon: '🌱',
      title: 'Sustainable Living',
      description: 'Promoting eco-friendly practices and sustainable lifestyle choices.'
    },
    {
      icon: '🚀',
      title: 'Innovation Driven',
      description: 'Constantly evolving to bring you the latest trends and innovative solutions.'
    }
  ];

  return (
    <section className={Style.companyMotive}>
      <div className={Style.container}>
        <div className={Style.content}>
          <div className={Style.textSection}>
            <h2>Our Mission & Vision</h2>
            <p className={Style.mission}>
              At Stackly, we're dedicated to enhancing your lifestyle through curated experiences, 
              premium products, and personalized services that inspire confidence and joy in everyday living.
            </p>
            <p className={Style.vision}>
              We envision a world where everyone can express their unique style and live their best life, 
              supported by a community that values quality, sustainability, and meaningful connections.
            </p>
            <div className={Style.stats}>
              <div className={Style.stat}>
                <span className={Style.statNumber}>10K+</span>
                <span className={Style.statLabel}>Happy Customers</span>
              </div>
              <div className={Style.stat}>
                <span className={Style.statNumber}>500+</span>
                <span className={Style.statLabel}>Lifestyle Products</span>
              </div>
              <div className={Style.stat}>
                <span className={Style.statNumber}>50+</span>
                <span className={Style.statLabel}>Expert Stylists</span>
              </div>
            </div>
          </div>
          
          <div className={Style.motivesGrid}>
            {motives.map((motive, index) => (
              <div key={index} className={Style.motiveCard}>
                <div className={Style.motiveIcon}>
                  {motive.icon}
                </div>
                <h3>{motive.title}</h3>
                <p>{motive.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyMotive;