import React from 'react';
import Style from './TestimonialsSection.module.css';
import { useNavigate } from 'react-router-dom';

const TestimonialsSection = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: 'Emma Thompson',
      service: 'Personal Styling',
      comment: 'The personal styling service completely transformed my wardrobe! I feel more confident than ever in my daily choices.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'James Wilson',
      service: 'VIP Concierge',
      comment: 'The VIP service is worth every penny. Having a dedicated lifestyle consultant has simplified my life tremendously.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 3,
      name: 'Sophia Martinez',
      service: 'Wardrobe Transformation',
      comment: 'My closet was a mess before the wardrobe revamp. Now its organized, stylish, and truly reflects my personality.',
      rating: 4,
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  ];

  const faqs = [
    {
      question: 'How does the personal styling service work?',
      answer: 'We start with a detailed style assessment, then our expert stylists curate personalized outfits based on your preferences, body type, and lifestyle needs.'
    },
    {
      question: 'What is your service cancellation policy?',
      answer: 'You can cancel any service within 24 hours of booking for a full refund. Monthly subscriptions can be cancelled anytime.'
    },
    {
      question: 'Do you offer international services?',
      answer: 'Yes! We provide virtual styling consultations worldwide and ship our curated products to over 50 countries.'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? Style.starFilled : Style.star}>
        ★
      </span>
    ));
  };

  return (
    <section className={Style.testimonialsSection}>
      <div className={Style.container}>
        <div className={Style.content}>
          {/* Testimonials Side */}
          <div className={Style.testimonialsSide}>
            <h2>Client Success Stories</h2>
            <div className={Style.testimonialsList}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={Style.testimonialCard}>
                  <div className={Style.testimonialHeader}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className={Style.avatar}
                    />
                    <div className={Style.userInfo}>
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.service}</span>
                    </div>
                    <div className={Style.rating}>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className={Style.comment}>"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Side */}
          <div className={Style.faqSide}>
            <h2>Service FAQs</h2>
            <div className={Style.faqList}>
              {faqs.map((faq, index) => (
                <div key={index} className={Style.faqItem}>
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className={Style.contactCta}>
              <h3>Ready to Transform Your Lifestyle?</h3>
              <p>Our team is here to help you discover the perfect services for your needs.</p>
              <button 
                className={Style.ctaButton}
                onClick={() => navigate("/Contact")}
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;