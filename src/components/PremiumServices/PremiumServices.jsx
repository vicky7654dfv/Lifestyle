import React from 'react';
import Style from './PremiumServices.module.css';
import { useNavigate } from 'react-router-dom';

const PremiumServices = () => {
  const navigate = useNavigate();

  const premiumServices = [
    {
      id: 1,
      title: 'VIP Lifestyle Concierge',
      price: '$149/month',
      description: 'Exclusive personal concierge service with priority access to all lifestyle offerings.',
      benefits: ['24/7 Personal Concierge', 'Priority Booking', 'Exclusive Events', 'Custom Requests'],
      popular: true
    },
    {
      id: 2,
      title: 'Complete Wardrobe Transformation',
      price: '$299/session',
      description: 'Total wardrobe overhaul with professional stylists and personalized shopping.',
      benefits: ['Style Assessment', 'Closet Detox', 'Personal Shopping', 'Seasonal Planning']
    },
    {
      id: 3,
      title: 'Home Styling Service',
      price: '$399/room',
      description: 'Professional home styling to create beautiful, functional living spaces.',
      benefits: ['Space Planning', 'Furniture Selection', 'Decor Styling', 'Accessory Curation']
    }
  ];

  return (
    <section className={Style.premiumServices}>
      <div className={Style.container}>
        <div className={Style.header}>
          <h2>Premium Lifestyle Services</h2>
          <p>Elevate your living experience with our exclusive premium offerings</p>
        </div>
        
        <div className={Style.premiumGrid}>
          {premiumServices.map((service) => (
            <div 
              key={service.id} 
              className={`${Style.premiumCard} ${service.popular ? Style.popular : ''}`}
            >
              {service.popular && <div className={Style.popularBadge}>Most Popular</div>}
              
              <div className={Style.cardHeader}>
                <h3>{service.title}</h3>
                <div className={Style.price}>{service.price}</div>
              </div>
              
              <p className={Style.description}>{service.description}</p>
              
              <ul className={Style.benefitsList}>
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <span className={Style.benefitIcon}>✦</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <button 
                className={service.popular ? Style.popularBtn : Style.premiumBtn}
                onClick={() => navigate("/Error")}
              >
                {service.popular ? 'Get Started' : 'Learn More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;