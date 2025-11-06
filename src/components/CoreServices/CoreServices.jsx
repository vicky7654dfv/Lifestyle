import React from 'react';
import Style from './CoreServices.module.css';
import { useNavigate } from 'react-router-dom';

const CoreServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'Personal Styling',
      description: 'Get personalized fashion recommendations from our expert stylists based on your body type and preferences.',
      features: ['Free Style Consultation', 'Body Type Analysis', 'Occasion-based Styling', 'Seasonal Updates'],
      color: '#007bff'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Express Delivery',
      description: 'Lightning-fast delivery services with multiple options to get your lifestyle products when you need them.',
      features: ['Same Day Delivery', 'Express Shipping', 'Free Shipping Over $99', 'Real-time Tracking'],
      color: '#6ab04c'
    },
    {
      id: 3,
      icon: '🔄',
      title: 'Easy Returns',
      description: 'Hassle-free return policy with quick refunds and exchanges for complete peace of mind.',
      features: ['30-Day Return Window', 'Free Return Shipping', 'Instant Refunds', 'Easy Exchanges'],
      color: '#ff6b6b'
    }
  ];

  return (
    <section className={Style.coreServices}>
      <div className={Style.container}>
        <div className={Style.header}>
          <h2>Our Core Services</h2>
          <p>Designed to enhance your lifestyle experience with premium convenience</p>
        </div>
        
        <div className={Style.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={Style.serviceCard}>
              <div 
                className={Style.serviceIcon}
                style={{ backgroundColor: `${service.color}20` }}
              >
                <span>{service.icon}</span>
              </div>
              
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              <ul className={Style.featuresList}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className={Style.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={Style.serviceBtn}
                style={{ 
                  background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                  border: `2px solid ${service.color}`
                }}
                onClick={() => navigate("/Error")}
              >
                Discover More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;