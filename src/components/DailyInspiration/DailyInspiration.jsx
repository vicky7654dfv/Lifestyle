import React, { useState, useEffect } from "react";
import Style from "./DailyInspiration.module.css";
import { useNavigate } from "react-router-dom";

export default function DailyInspiration() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  const navigate = useNavigate();

  // Unified Quote List
  const allQuotes = [
    { text: "Rise with purpose, greet the day with gratitude.", author: "Morning Mindfulness" },
    { text: "In the heart of the day, find your flow.", author: "Peak Performance" },
    { text: "The quiet of evening invites us to unwind.", author: "Peaceful Moments" },
    { text: "Sunrise brings new opportunities.", author: "New Beginnings" },
    { text: "Energy flows where attention goes.", author: "Focused Living" },
    { text: "Let go of the day's weight.", author: "Restorative Practice" },
    { text: "Your potential is endless, do what you were created to do.", author: "Inspire Daily" },
    { text: "Happiness is not by chance, but by choice.", author: "Jim Rohn" }
  ];

  const getCurrentTimeCategory = () => {
    const hour = currentTime.getHours();
    if (hour >= 0 && hour < 12) return "morning";
    if (hour >= 12 && hour < 17) return "afternoon";
    return "evening";
  };

  const getGreeting = () => {
    const category = getCurrentTimeCategory();
    const greetings = {
      morning: "Good Morning",
      afternoon: "Good Afternoon", 
      evening: "Good Evening"
    };
    return greetings[category];
  };

  // Clock Ticker
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  // Quote Rotator
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % allQuotes.length);
        setFade(true);
      }, 600);
    }, 3500);

    return () => clearInterval(quoteInterval);
  }, []);

  const currentCategory = getCurrentTimeCategory();
  const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const secondsString = currentTime.toLocaleTimeString([], { second: '2-digit' }).replace(/[^0-9]/g, ''); 

  return (
    <div data-aos="fade-up" className={Style.inspirationWrap}>
      
      {/* Enhanced Connecting Lines SVG */}
      <svg 
        className={Style.connectionLines} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="morningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8008" />
            <stop offset="100%" stopColor="#FFC837" />
          </linearGradient>
          
          <linearGradient id="afternoonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2193b0" />
            <stop offset="100%" stopColor="#6dd5ed" />
          </linearGradient>
          
          <linearGradient id="eveningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8E2DE2" />
            <stop offset="100%" stopColor="#4A00E0" />
          </linearGradient>
          
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 z" fill="#00bcd4" />
          </marker>
          <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 z" fill="#ff8c00" />
          </marker>
          <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 z" fill="#8e2de2" />
          </marker>
        </defs>
        
        {/* Morning Path */}
        <path 
          d="M 30,50 
             A 20,20 0 0,1 50,30
             A 20,20 0 0,1 70,50
             A 20,20 0 0,1 50,70
             A 20,20 0 0,1 30,50
             Z" 
          stroke="url(#morningGradient)"
          strokeWidth="1.2"
          fill="none" 
          className={Style.animPath}
          markerMid="url(#arrowOrange)"
        />
        
        {/* Afternoon Path */}
        <path 
          d="M 20,50 
             A 30,30 0 0,1 50,20
             A 30,30 0 0,1 80,50
             A 30,30 0 0,1 50,80
             A 30,30 0 0,1 20,50
             Z" 
          stroke="url(#afternoonGradient)"
          strokeWidth="1.2"
          fill="none" 
          className={Style.animPath}
          markerMid="url(#arrow)"
        />
        
        {/* Evening Path */}
        <path 
          d="M 10,50 
             A 40,40 0 0,1 50,10
             A 40,40 0 0,1 90,50
             A 40,40 0 0,1 50,90
             A 40,40 0 0,1 10,50
             Z" 
          stroke="url(#eveningGradient)"
          strokeWidth="1.2"
          fill="none" 
          className={Style.animPath}
          markerMid="url(#arrowPurple)"
        />
      </svg>

      <div className={Style.container}>
        <div className={Style.header}>
          <h2>{getGreeting()}, Seeker</h2>
          <p>Your daily dose of mindful inspiration</p>
          
          <div className={Style.timeWrapper}>
            <span className={Style.timeLabel}>Grab Yours Now</span>
            
            <div className={`${Style.timeIndicator} ${Style.rotatingBorder}`}>
              <span className={Style.currentTime}>
                {timeString} 
                <span className={Style.fireSeconds}>:{secondsString}</span>
              </span>
            </div>
          </div>
        </div>

        <div className={`${Style.quoteSection} ${Style.rotatingBorder}`}>
          <div className={`${Style.quoteContainer} ${fade ? Style.burnIn : Style.burnOut}`}>
            <div className={Style.quoteText}>
              "{allQuotes[currentQuote].text}"
            </div>
            <div className={Style.quoteAuthor}>
              — {allQuotes[currentQuote].author}
            </div>
          </div>
        </div>

        <div className={Style.timeCategories}>
          <div className={`${Style.timeCard} ${Style.rotatingBorder} ${currentCategory === 'morning' ? Style.activeTime : ''}`}>
            <div className={Style.timeIcon}>🌅</div>
            <span className={Style.morningText}>Morning</span>
            <div className={Style.timeRange}>12 AM - 12 PM</div>
          </div>
          
          <div className={`${Style.timeCard} ${Style.rotatingBorder} ${currentCategory === 'afternoon' ? Style.activeTime : ''}`}>
            <div className={Style.timeIcon}>☀️</div>
            <span className={Style.afternoonText}>Afternoon</span>
            <div className={Style.timeRange}>12 PM - 5 PM</div>
          </div>
          
          <div className={`${Style.timeCard} ${Style.rotatingBorder} ${currentCategory === 'evening' ? Style.activeTime : ''}`}>
            <div className={Style.timeIcon}>🌙</div>
            <span className={Style.eveningText}>Evening</span>
            <div className={Style.timeRange}>5 PM - 12 AM</div>
          </div>
        </div>

        <button className={Style.inspirationBtn} onClick={() => { navigate("/Error") }}>
          Unlock Full Experience
        </button>
      </div>
    </div>
  );
}