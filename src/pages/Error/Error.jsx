import React from "react";
import { Link } from "react-router-dom";
import Style from "./Error.module.css";
import errorGif from "../../assets/Error/error.gif";

export default function Error() {
  return (
    <div data-aos="fade-up" className={Style.errorContainer}>
      <div className={Style.errorContent}>
        <div className={Style.errorAnimation}>
          <img 
            src={errorGif} 
            alt="404 Error" 
            className={Style.errorGif}
          />
        </div>
        
        <div className={Style.errorText}>
          <h1 className={Style.errorCode}>404</h1>
          <h2 className={Style.errorTitle}>Oops! Page Not Found</h2>
          <p className={Style.errorDescription}>
            The page you're looking for seems to have wandered off into the digital wilderness. 
            Don't worry, even the best explorers sometimes take wrong turns!
          </p>
          
          <div className={Style.errorActions}>
            <Link to="/" className={Style.homeButton}>
              🏠 Back to Home
            </Link>
            <Link to="/Contact" className={Style.contactButton}>
              📞 Get Help
            </Link>
          </div>
          
          <div className={Style.errorTips}>
            <h3>While you're here, why not:</h3>
            <ul>
              <li>Explore our latest collections</li>
              <li>Check out exclusive deals</li>
              <li>Discover trending lifestyle products</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={Style.floatingElements}>
        <div className={Style.floatingElement}></div>
        <div className={Style.floatingElement}></div>
        <div className={Style.floatingElement}></div>
        <div className={Style.floatingElement}></div>
      </div>
    </div>
  );
}