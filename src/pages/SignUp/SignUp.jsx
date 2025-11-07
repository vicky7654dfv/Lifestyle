import React, { useState } from "react";
import Style from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import ImgSide from "../../assets/Header/logo.webp";

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [rules, setRules] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setForm({ ...form, [name]: value });
      }
    } else if (name === "password") {
      setForm({ ...form, [name]: value });
      setRules(validatePassword(value));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!Object.values(rules).every(Boolean)) {
      alert("Password does not meet all requirements");
      return;
    }
    alert(`Welcome to Stackly!\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`);
    navigate("/Error");
  };

  return (
    <div className={Style.signUpWrap}>
      {/* Page Heading */}
      <div className={Style.pageHeading}>
        <h1>Join Our Lifestyle Community</h1>
        <p>Create your Stackly account and discover a world of premium lifestyle experiences</p>
      </div>

      <div className={Style.signUpContainer}>
        {/* Image Section */}
        <div className={Style.imgWrap}>
          <img src={ImgSide} alt="Stackly Lifestyle" />
          <div className={Style.logoText}>
            <h3>Stackly</h3>
            <p>Elevate Your Everyday</p>
          </div>
        </div>

        {/* Form Section */}
        <form className={Style.signUpForm} onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          
          <div className={Style.firstRow}>
            <input
              type="text"
              className={`${Style.nameClass} ${Style.commonClass}`}
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className={`${Style.emailClass} ${Style.commonClass}`}
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="tel"
            className={`${Style.phoneClass} ${Style.commonClass}`}
            name="phone"
            placeholder="Mobile Number (Optional)"
            value={form.phone}
            onChange={handleChange}
          />
          
          <input
            type="password"
            className={`${Style.passwordClass} ${Style.commonClass}`}
            name="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {/* Password Requirements */}
          {form.password && (
            <div className={Style.passwordRequirements}>
              <div className={`${Style.requirement} ${rules.length ? Style.valid : Style.invalid}`}>
                <span className={Style.requirementIcon}>
                  {rules.length ? '✓' : '•'}
                </span>
                At least 8 characters
              </div>
              <div className={`${Style.requirement} ${rules.upper ? Style.valid : Style.invalid}`}>
                <span className={Style.requirementIcon}>
                  {rules.upper ? '✓' : '•'}
                </span>
                One uppercase letter
              </div>
              <div className={`${Style.requirement} ${rules.lower ? Style.valid : Style.invalid}`}>
                <span className={Style.requirementIcon}>
                  {rules.lower ? '✓' : '•'}
                </span>
                One lowercase letter
              </div>
              <div className={`${Style.requirement} ${rules.number ? Style.valid : Style.invalid}`}>
                <span className={Style.requirementIcon}>
                  {rules.number ? '✓' : '•'}
                </span>
                One number
              </div>
              <div className={`${Style.requirement} ${rules.special ? Style.valid : Style.invalid}`}>
                <span className={Style.requirementIcon}>
                  {rules.special ? '✓' : '•'}
                </span>
                One special character
              </div>
            </div>
          )}

          <input
            type="password"
            className={`${Style.confirmPasswordClass} ${Style.commonClass}`}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className={Style.submitClass}>
            Create Account
          </button>
          
          <button
            type="button"
            className={Style.loginBtn}
            onClick={() => navigate("/Login")}
          >
            Already have an account? Login
          </button>
        </form>
      </div>
    </div>
  );
}