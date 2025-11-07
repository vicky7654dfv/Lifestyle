import React, { useState } from "react";
import Style from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import ImgSide from "../../assets/Header/logo.webp";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic would go here
    alert(`Welcome back to Stackly!\nEmail: ${form.email}`);
    navigate("/Error");
  };

  const handleSocialLogin = (provider) => {
    alert(`Logging in with ${provider}`);
    navigate("/Error");
  };

  return (
    <div className={Style.loginWrap}>
      {/* Page Heading */}
      <div className={Style.pageHeading}>
        <h1>Welcome Back</h1>
        <p>Sign in to your Stackly account and continue your lifestyle journey</p>
      </div>

      <div className={Style.loginContainer}>
        {/* Image Section */}
        <div className={Style.imgWrap}>
          <img src={ImgSide} alt="Stackly Lifestyle" />
          <div className={Style.logoText}>
            <h3>Stackly</h3>
            <p>Elevate Your Everyday</p>
          </div>
        </div>

        {/* Form Section */}
        <form className={Style.loginForm} onSubmit={handleSubmit}>
          <h2>Login</h2>
          
          <input
            type="email"
            className={`${Style.emailClass} ${Style.commonClass}`}
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="password"
            className={`${Style.passwordClass} ${Style.commonClass}`}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {/* Remember Me & Forgot Password */}
          <div className={Style.formOptions}>
            <label className={Style.rememberMe}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={form.rememberMe}
                onChange={handleChange}
              />
              Remember me
            </label>
            <Link to="/Error" className={Style.forgotPassword}>
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className={Style.submitClass}>
            Login
          </button>
          
          {/* Social Login */}
          <div className={Style.socialLogin}>
            <p>Or continue with</p>
            <div className={Style.socialButtons}>
              <button 
                type="button" 
                className={`${Style.socialBtn} ${Style.google}`}
                onClick={() => handleSocialLogin('Google')}
              >
                <i className="fa-brands fa-google"></i>
                Google
              </button>
              <button 
                type="button" 
                className={`${Style.socialBtn} ${Style.facebook}`}
                onClick={() => handleSocialLogin('Facebook')}
              >
                <i className="fa-brands fa-facebook-f"></i>
                Facebook
              </button>
            </div>
          </div>
          
          <button
            type="button"
            className={Style.signUpBtn}
            onClick={() => navigate("/SignUp")}
          >
            Don't have an account? Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}