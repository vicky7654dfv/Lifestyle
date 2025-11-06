import React from 'react';
import Style from './Services.module.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import CoreServices from '../../components/CoreServices/CoreServices';
import PremiumServices from '../../components/PremiumServices/PremiumServices';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import CompanyMotive from '../../components/CompanyMotive/CompanyMotive';
import TeamSection from '../../components/TeamSection/TeamSection';

const Services = () => {
  return (
    <div className={Style.servicesContainer}>
      <HeroSection />
      <CompanyMotive />
      <ProcessSection />
      <CoreServices />
      <TeamSection />
      <TestimonialsSection />
      <PremiumServices />
    </div>
  );
};

export default Services;