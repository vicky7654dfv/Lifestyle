import React from 'react';
import Style from './TeamSection.module.css';
import Img1 from "../../assets/Services/TeamSection/1.webp"
import Img2 from "../../assets/Services/TeamSection/2.webp"
import Img3 from "../../assets/Services/TeamSection/3.webp"
import Img4 from "../../assets/Services/TeamSection/4.webp"
import { useNavigate } from 'react-router-dom';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Head Stylist & Creative Director',
      bio: 'With over 10 years in fashion industry, Sarah brings exceptional expertise in personal styling.',
      image: Img1,
      specialties: ['Personal Styling', 'Wardrobe Consulting', 'Trend Analysis']
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Lifestyle Consultant',
      bio: 'Michael specializes in creating holistic lifestyle experiences that blend fashion with daily living.',
      image: Img2,
      specialties: ['Lifestyle Planning', 'Home Styling', 'Wellness Integration']
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Customer Experience Manager',
      bio: 'Emma ensures every client receives exceptional service and personalized attention throughout their journey.',
      image: Img3,
      specialties: ['Client Relations', 'Service Coordination', 'Quality Assurance']
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Sustainable Fashion Expert',
      bio: 'David is passionate about eco-friendly fashion and sustainable lifestyle practices.',
      image: Img4,
      specialties: ['Sustainable Fashion', 'Ethical Sourcing', 'Eco-styling']
    }
  ];
const navigate= useNavigate();
  return (
    <section className={Style.teamSection}>
      <div className={Style.container}>
        <div className={Style.header}>
          <h2>Meet Our Experts</h2>
          <p>Our dedicated team of lifestyle professionals is here to guide your style journey</p>
        </div>
        
        <div className={Style.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={Style.teamCard}>
              <div className={Style.memberImage}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  onError={(e) => {
                    e.target.src = `https://i.pravatar.cc/400?img=${member.id}`;
                  }}
                />
                <div className={Style.imageOverlay}>
                  <div className={Style.socialLinks}>
                    <span onClick={()=>navigate("/Error")}>👔</span>
                    <span onClick={()=>navigate("/Error")}>💼</span>
                    <span onClick={()=>navigate("/Error")}>📧</span>
                  </div>
                </div>
              </div>
              
              <div className={Style.memberInfo}>
                <h3>{member.name}</h3>
                <p className={Style.role}>{member.role}</p>
                <p className={Style.bio}>{member.bio}</p>
                
                <div className={Style.specialties}>
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className={Style.specialty}>
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;