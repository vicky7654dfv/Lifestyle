import React, { useState, useEffect } from "react";
import Style from "./DailyInspiration.module.css";
import { useNavigate } from "react-router-dom";

export default function DailyInspiration() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true);

  const navigate=useNavigate();

  const timeBasedQuotes = {
    morning: [
      {
        text: "Rise with purpose, greet the day with gratitude, and let each moment unfold with intention.",
        author: "Morning Mindfulness"
      },
      {
        text: "The first hours of the day set the rhythm for everything that follows. Make them count.",
        author: "Daily Rituals"
      },
      {
        text: "Sunrise brings new opportunities. What will you create with your fresh start today?",
        author: "New Beginnings"
      }
    ],
    afternoon: [
      {
        text: "In the heart of the day, find your flow. Let productivity meet presence in perfect harmony.",
        author: "Peak Performance"
      },
      {
        text: "The afternoon sun reminds us: even at our busiest, there's always space for a mindful pause.",
        author: "Mindful Living"
      },
      {
        text: "Energy flows where attention goes. Direct yours toward what truly matters this afternoon.",
        author: "Focused Living"
      }
    ],
    evening: [
      {
        text: "As daylight fades, reflect on today's blessings and prepare for tomorrow's possibilities.",
        author: "Evening Reflection"
      },
      {
        text: "The quiet of evening invites us to unwind, recharge, and appreciate life's simple joys.",
        author: "Peaceful Moments"
      },
      {
        text: "Let go of the day's weight. Evening is for restoration and connecting with what matters most.",
        author: "Restorative Practice"
      }
    ]
  };

  const getCurrentTimeCategory = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "morning";
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

  const getQuotes = () => {
    return timeBasedQuotes[getCurrentTimeCategory()];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % getQuotes().length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const quotes = getQuotes();

  return (
    <div data-aos="fade-up" className={Style.inspirationWrap}>
      <div className={Style.container}>
        <div className={Style.header}>
          <h2>{getGreeting()}, Seeker</h2>
          <p>Your daily dose of mindful inspiration</p>
          <div className={Style.timeIndicator}>
            <span className={Style.currentTime}>
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>

        <div className={Style.quoteSection}>
          <div className={`${Style.quoteContainer} ${fade ? Style.fadeIn : Style.fadeOut}`}>
            <div className={Style.quoteText}>
              "{quotes[currentQuote].text}"
            </div>
            <div className={Style.quoteAuthor}>
              — {quotes[currentQuote].author}
            </div>
          </div>

          <div className={Style.quoteProgress}>
            {quotes.map((_, index) => (
              <div
                key={index}
                className={`${Style.progressDot} ${index === currentQuote ? Style.active : ''}`}
              />
            ))}
          </div>
        </div>

        <div className={Style.timeCategories}>
          <div className={`${Style.timeCard} ${getCurrentTimeCategory() === 'morning' ? Style.activeTime : ''}`}>
            <div className={Style.timeIcon}>🌅</div>
            <span>Morning</span>
            <div className={Style.timeRange}>5AM - 12PM</div>
          </div>
          <div className={`${Style.timeCard} ${getCurrentTimeCategory() === 'afternoon' ? Style.activeTime : ''}`}>
            <div className={Style.timeIcon}>☀️</div>
            <span>Afternoon</span>
            <div className={Style.timeRange}>12PM - 5PM</div>
          </div>
          <div className={`${Style.timeCard} ${getCurrentTimeCategory() === 'evening' ? Style.activeTime : ''}`}>
            <div className={Style.timeIcon}>🌙</div>
            <span>Evening</span>
            <div className={Style.timeRange}>5PM - 5AM</div>
          </div>
        </div>

        <button className={Style.inspirationBtn} onClick={()=>{navigate("/Error")}}>
          Get Personalized Inspiration
        </button>
      </div>
    </div>
  );
}