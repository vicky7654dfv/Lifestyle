import React, { useState, useEffect } from "react";
import pic1 from "../../assets/DailyRituals/pic1.webp";
import Style from "./DailyRituals.module.css";
import { useNavigate } from "react-router-dom";

export default function DailyRituals() {
    const navigate = useNavigate();
    const [activeSquare, setActiveSquare] = useState(0);
    
    // 4 Revolving Square Sections with Lifestyle Content
    const lifestyleSquares = [
        {
            icon: "🧠",
            title: "Mind Mastery",
            content: "Unlock peak cognitive performance through daily mental exercises and mindfulness practices.",
            highlight: "Enhance Focus by 300%",
            color: "#4A90E2",
            subtext: "15-min morning routine"
        },
        {
            icon: "💪",
            title: "Body Revival",
            content: "Transform your physical health with science-backed movement patterns and recovery protocols.",
            highlight: "Boost Energy Levels",
            color: "#50C878",
            subtext: "Personalized fitness plans"
        },
        {
            icon: "❤️",
            title: "Heart Harmony",
            content: "Cultivate emotional intelligence and meaningful connections for profound life satisfaction.",
            highlight: "Reduce Stress by 65%",
            color: "#FF6B6B",
            subtext: "Daily gratitude practice"
        },
        {
            icon: "✨",
            title: "Soul Awakening",
            content: "Discover your life's purpose and align daily actions with your deepest values and dreams.",
            highlight: "Find Your Purpose",
            color: "#9D4EDD",
            subtext: "Guided meditation sessions"
        }
    ];

    // Decorative orbiting elements (not content squares)
    const orbitElements = [
        { icon: "☀️", size: "small" },
        { icon: "🌙", size: "medium" },
        { icon: "⭐", size: "small" },
        { icon: "💫", size: "large" }
    ];

    // Auto-rotate squares every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSquare((prev) => (prev + 1) % lifestyleSquares.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentSquare = lifestyleSquares[activeSquare];

    return (
        <div className={Style.fullWrap}>
            {/* Background Glow Effects */}
            <div className={Style.bgGlow1} style={{ backgroundColor: currentSquare.color + "15" }}></div>
            <div className={Style.bgGlow2}></div>
            
            {/* Decorative Orbiting Elements */}
            <div className={Style.orbitContainer}>
                {orbitElements.map((element, index) => (
                    <div 
                        key={index} 
                        className={`${Style.orbitElement} ${Style[element.size]}`}
                        style={{ 
                            animationDelay: `${index * 1.5}s`,
                            animationDuration: `${15 + index * 3}s`
                        }}
                    >
                        <span className={Style.orbitIcon}>{element.icon}</span>
                    </div>
                ))}
            </div>

            {/* Header Section */}
            <div className={Style.headerSection} data-aos="fade-down">
                <div className={Style.tagWrapper}>
                    <span className={Style.tagIcon}>⚡</span>
                    <span className={Style.tagline}>Elevated Living</span>
                    <span className={Style.tagIcon}>⚡</span>
                </div>
                <h1 className={Style.mainTitle}>
                    Design Your <span className={Style.highlight}>Ideal Day</span>
                </h1>
                <p className={Style.subtitle}>
                    Transform ordinary routines into extraordinary rituals that elevate every aspect of your life
                </p>
            </div>

            {/* Main Content Area */}
            <div className={Style.contentArea}>
                {/* Left: Revolving Squares Display */}
                <div className={Style.squaresContainer}>
                    <div className={Style.squaresGrid}>
                        {lifestyleSquares.map((square, index) => (
                            <div 
                                key={index}
                                className={`${Style.lifestyleSquare} ${index === activeSquare ? Style.active : ''}`}
                                style={{
                                    borderColor: square.color + "40",
                                    background: index === activeSquare 
                                        ? `linear-gradient(135deg, ${square.color}15, ${square.color}05)` 
                                        : 'rgba(255, 255, 255, 0.95)',
                                    boxShadow: index === activeSquare 
                                        ? `0 0 40px ${square.color}20, 0 20px 60px rgba(0,0,0,0.1)` 
                                        : '0 10px 40px rgba(0,0,0,0.08)',
                                    transform: index === activeSquare ? 'translateY(-10px)' : 'none'
                                }}
                                onClick={() => setActiveSquare(index)}
                            >
                                <div className={Style.squareIcon} style={{ color: square.color }}>
                                    {square.icon}
                                </div>
                                <h3 className={Style.squareTitle}>{square.title}</h3>
                                <div className={Style.squareHighlight} style={{ color: square.color }}>
                                    {square.highlight}
                                </div>
                                <div className={Style.squareSubtext}>{square.subtext}</div>
                                
                                {/* Glow effect for active square */}
                                {index === activeSquare && (
                                    <div className={Style.activeGlow} style={{ backgroundColor: square.color }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    {/* Timer Indicator */}
                    <div className={Style.timerIndicator}>
                        <div className={Style.timerBar}>
                            <div 
                                className={Style.timerProgress}
                                style={{ 
                                    width: `${((activeSquare + 1) / lifestyleSquares.length) * 100}%`,
                                    backgroundColor: currentSquare.color
                                }}
                            ></div>
                        </div>
                        <div className={Style.timerText}>
                            <span style={{ color: currentSquare.color }}>
                                {3 - (Date.now() % 3000) / 1000 | 0}s
                            </span> until next rotation
                        </div>
                    </div>
                </div>

                {/* Center: Large Image with Decorative Frame */}
                <div className={Style.imageSection} data-aos="zoom-in">
                    <div className={Style.imageWrapper}>
                        <img 
                            src={pic1} 
                            alt="Lifestyle transformation" 
                            className={Style.mainImage}
                        />
                        <div className={Style.imageFrame}></div>
                        <div className={Style.imageOverlay}></div>
                        
                        {/* Floating decorative elements around image */}
                        <div className={Style.decorativeDot} style={{ top: '10%', left: '10%' }}></div>
                        <div className={Style.decorativeDot} style={{ top: '20%', right: '15%' }}></div>
                        <div className={Style.decorativeDot} style={{ bottom: '15%', left: '20%' }}></div>
                        <div className={Style.decorativeDot} style={{ bottom: '25%', right: '10%' }}></div>
                    </div>
                </div>

                {/* Right: Active Content Display with Decorative Layout */}
                <div className={Style.contentDisplay}>
                    <div className={Style.contentCard}>
                        <div className={Style.contentHeader}>
                            <div className={Style.contentIcon} style={{ backgroundColor: currentSquare.color + "20" }}>
                                <span style={{ color: currentSquare.color }}>{currentSquare.icon}</span>
                            </div>
                            <h2 className={Style.contentTitle}>
                                {currentSquare.title}
                                <span className={Style.contentTag} style={{ backgroundColor: currentSquare.color + "20", color: currentSquare.color }}>
                                    Active Now
                                </span>
                            </h2>
                        </div>
                        
                        {/* Decorative content layout */}
                        <div className={Style.contentBody}>
                            <div className={Style.quoteMark} style={{ color: currentSquare.color + "40" }}>"</div>
                            <p className={Style.contentText}>
                                {currentSquare.content}
                            </p>
                            <div className={Style.decorativeLine} style={{ backgroundColor: currentSquare.color }}></div>
                            
                            {/* Action Steps */}
                            <div className={Style.actionSteps}>
                                <div className={Style.step}>
                                    <div className={Style.stepNumber} style={{ backgroundColor: currentSquare.color }}>1</div>
                                    <div className={Style.stepText}>Morning meditation session</div>
                                </div>
                                <div className={Style.step}>
                                    <div className={Style.stepNumber} style={{ backgroundColor: currentSquare.color }}>2</div>
                                    <div className={Style.stepText}>Intention setting exercise</div>
                                </div>
                                <div className={Style.step}>
                                    <div className={Style.stepNumber} style={{ backgroundColor: currentSquare.color }}>3</div>
                                    <div className={Style.stepText}>Progress tracking & reflection</div>
                                </div>
                            </div>
                            
                            {/* Stats */}
                            <div className={Style.statsGrid}>
                                <div className={Style.statItem}>
                                    <div className={Style.statNumber} style={{ color: currentSquare.color }}>92%</div>
                                    <div className={Style.statLabel}>Success Rate</div>
                                </div>
                                <div className={Style.statItem}>
                                    <div className={Style.statNumber} style={{ color: currentSquare.color }}>30 Days</div>
                                    <div className={Style.statLabel}>To Habit Formation</div>
                                </div>
                                <div className={Style.statItem}>
                                    <div className={Style.statNumber} style={{ color: currentSquare.color }}>10K+</div>
                                    <div className={Style.statLabel}>Community Members</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className={Style.ctaSection} data-aos="fade-up">
                <div className={Style.ctaCard}>
                    <div className={Style.ctaText}>
                        <h3 className={Style.ctaTitle}>Ready to Transform Your Life?</h3>
                        <p className={Style.ctaSubtitle}>
                            Join our community of mindful individuals building extraordinary lives
                        </p>
                    </div>
                    <button 
                        onClick={() => navigate("/Error")} 
                        className={Style.ritualBtn}
                        style={{
                            background: `linear-gradient(135deg, ${currentSquare.color}, ${currentSquare.color}80)`,
                            boxShadow: `0 10px 30px ${currentSquare.color}40`
                        }}
                    >
                        <span className={Style.btnText}>Begin Your Journey</span>
                        <span className={Style.btnIcon}>→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}