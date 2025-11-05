import React from "react";
import Style from "./FounderSection.module.css";
import founder1 from "../../assets/About/FounderSection/1.webp";
import founder2 from "../../assets/About/FounderSection/2.webp";
import founder3 from "../../assets/About/FounderSection/3.webp";

export default function FounderSection() {
  return (
      <section className={Style.foundersSection}>
        <div className={Style.foundersContainer}>
          {/* Section Header */}
          <div className={Style.foundersHeader} data-aos="fade-up">
            <h2 className={Style.foundersTitle}>Meet Our Visionaries</h2>
            <p className={Style.foundersSubtitle}>
              The brilliant minds behind Stackly who transformed a simple idea into a global 
              lifestyle movement. Their passion for innovation and commitment to excellence 
              continues to drive us forward.
            </p>
          </div>

          {/* Founders Grid */}
          <div className={Style.foundersGrid}>
            {/* Founder 1 */}
            <div className={Style.founderCard} data-aos="fade-up" data-aos-delay="200">
              <div className={Style.founderImageContainer}>
                <img src={founder1} alt="Sarah Chen" className={Style.founderImage} />
                <div className={Style.founderOverlay}>
                  <div className={Style.socialLinks}>
                    <a href="/Error" className={Style.socialLink}>in</a>
                    <a href="/Error" className={Style.socialLink}>tw</a>
                    <a href="/Error" className={Style.socialLink}>ig</a>
                  </div>
                </div>
                <div className={Style.founderBadge}>CEO & Founder</div>
              </div>
              <div className={Style.founderInfo}>
                <h3 className={Style.founderName}>Sarah Chen</h3>
                <p className={Style.founderRole}>Chief Executive Officer</p>
                <p className={Style.founderBio}>
                  Former tech innovator with 15+ years in lifestyle retail. Sarah's vision 
                  for accessible luxury transformed the industry landscape.
                </p>
                <div className={Style.founderStats}>
                  <div className={Style.founderStat}>
                    <span className={Style.statValue}>12</span>
                    <span className={Style.statLabel}>Years Leading</span>
                  </div>
                  <div className={Style.founderStat}>
                    <span className={Style.statValue}>50+</span>
                    <span className={Style.statLabel}>Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className={Style.founderCard} data-aos="fade-up" data-aos-delay="400">
              <div className={Style.founderImageContainer}>
                <img src={founder2} alt="Marcus Rodriguez" className={Style.founderImage} />
                <div className={Style.founderOverlay}>
                  <div className={Style.socialLinks}>
                    <a href="/Error" className={Style.socialLink}>in</a>
                    <a href="/Error" className={Style.socialLink}>tw</a>
                    <a href="/Error" className={Style.socialLink}>ig</a>
                  </div>
                </div>
                <div className={Style.founderBadge}>CTO & Co-Founder</div>
              </div>
              <div className={Style.founderInfo}>
                <h3 className={Style.founderName}>Marcus Rodriguez</h3>
                <p className={Style.founderRole}>Chief Technology Officer</p>
                <p className={Style.founderBio}>
                  Tech visionary who built our digital infrastructure from ground up. 
                  Marcus ensures seamless experiences across all platforms.
                </p>
                <div className={Style.founderStats}>
                  <div className={Style.founderStat}>
                    <span className={Style.statValue}>8</span>
                    <span className={Style.statLabel}>Patents</span>
                  </div>
                  <div className={Style.founderStat}>
                    <span className={Style.statValue}>100+</span>
                    <span className={Style.statLabel}>Team Lead</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 3 */}
            <div className={Style.founderCard} data-aos="fade-up" data-aos-delay="600">
              <div className={Style.founderImageContainer}>
                <img src={founder3} alt="Elena Petrova" className={Style.founderImage} />
                <div className={Style.founderOverlay}>
                  <div className={Style.socialLinks}>
                    <a href="/Error" className={Style.socialLink}>in</a>
                    <a href="/Error" className={Style.socialLink}>tw</a>
                    <a href="/Error" className={Style.socialLink}>ig</a>
                  </div>
                </div>
                <div className={Style.founderBadge}>COO & Co-Founder</div>
              </div>
              <div className={Style.founderInfo}>
                <h3 className={Style.founderName}>Elena Petrova</h3>
                <p className={Style.founderRole}>Chief Operations Officer</p>
                <p className={Style.founderBio}>
                  Operations expert who scaled Stackly globally. Elena's strategic 
                  partnerships expanded our reach to 15+ countries.
                </p>
                <div className={Style.founderStats}>
                  <div className={Style.founderStat}>
                    <span className={Style.statValue}>15+</span>
                    <span className={Style.statLabel}>Countries</span>
                  </div>
                  <div className={Style.founderStat}>
                    <span className={Style.statValue}>200+</span>
                    <span className={Style.statLabel}>Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founders Quote */}
          <div className={Style.foundersQuote} data-aos="fade-up" data-aos-delay="800">
            <div className={Style.quoteIcon}>❝</div>
            <p className={Style.quoteText}>
              "We believe that great lifestyle experiences should be accessible to everyone. 
              Our mission is to bridge the gap between luxury and everyday living, creating 
              moments that inspire and transform."
            </p>
            <div className={Style.quoteAuthor}>- The Stackly Founders</div>
          </div>
        </div>
      </section>
  );
}