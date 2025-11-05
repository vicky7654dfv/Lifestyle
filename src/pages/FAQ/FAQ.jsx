import React, { useState } from "react";
import Style from "./FAQ.module.css";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  const faqData = [
    {
      id: 1,
      topic: "Ordering",
      description: "Get help with placing, modifying, and understanding your orders.",
      subtopics: [
        {
          id: "1-1",
          question: "How do I place an order?",
          answer: [
            "Browse our collections and select your favorite lifestyle products",
            "Choose your preferred size, color, and quantity",
            "Add items to cart and proceed to secure checkout",
            "Enter shipping details and confirm your payment"
          ]
        },
        {
          id: "1-2",
          question: "Can I modify or cancel my order after placing it?",
          answer: [
            "Orders can be modified or canceled within 1 hour of placement",
            "Contact our support team immediately for urgent changes",
            "Once shipped, orders cannot be canceled but can be returned"
          ]
        },
        {
          id: "1-3",
          question: "Do I need an account to shop?",
          answer: [
            "Guest checkout is available for quick purchases",
            "Creating an account unlocks exclusive benefits: early access to sales, personalized recommendations, and order tracking"
          ]
        },
        {
          id: "1-4",
          question: "What if a product is out of stock?",
          answer: [
            "Join the waitlist to be notified when it's back in stock",
            "We restock popular items regularly",
            "Explore similar products in our collection"
          ]
        }
      ]
    },
    {
      id: 2,
      topic: "Shipping & Delivery",
      description: "Information on how we get your lifestyle essentials to you.",
      subtopics: [
        {
          id: "2-1",
          question: "What are your delivery options and timelines?",
          answer: [
            "Standard Delivery: 4-6 business days - Free on orders over $50",
            "Express Delivery: 2-3 business days - $9.99",
            "Next Day Delivery: 1 business day - $19.99 (order before 2 PM)"
          ]
        },
        {
          id: "2-2",
          question: "How can I track my order?",
          answer: [
            "Track your order in real-time through your account dashboard",
            "Receive automated email and SMS updates at every shipping milestone",
            "Live tracking available for express and next-day deliveries"
          ]
        },
        {
          id: "2-3",
          question: "Do you offer international shipping?",
          answer: [
            "Yes! We ship to over 50 countries worldwide",
            "International delivery takes 7-14 business days",
            "Customs and import duties may apply depending on your location"
          ]
        },
        {
          id: "2-4",
          question: "What if I'm not available for delivery?",
          answer: [
            "Delivery attempts will be made twice",
            "Safe drop-off locations can be specified during checkout",
            "Packages can be redirected to pickup points or neighbors"
          ]
        }
      ]
    },
    {
      id: 3,
      topic: "Returns & Exchanges",
      description: "Our hassle-free policy on returns, exchanges, and refunds.",
      subtopics: [
        {
          id: "3-1",
          question: "What is your return policy?",
          answer: [
            "30-day hassle-free returns from delivery date",
            "Items must be unworn, unwashed, and with original tags attached",
            "Free return shipping for all members"
          ]
        },
        {
          id: "3-2",
          question: "How do I exchange a product?",
          answer: [
            "Initiate exchange through your account within 30 days",
            "Choose a different size, color, or alternative product",
            "We'll ship the new item once we receive your return"
          ]
        },
        {
          id: "3-3",
          question: "When will I receive my refund?",
          answer: [
            "Refunds processed within 3-5 business days after we receive your return",
            "Original payment method will be credited",
            "You'll receive email confirmation once refund is processed"
          ]
        },
        {
          id: "3-4",
          question: "Are all items eligible for return?",
          answer: [
            "Most items are returnable within 30 days",
            "Final sale items and personalized products cannot be returned",
            "Undergarments and swimwear for hygiene reasons"
          ]
        }
      ]
    },
    {
      id: 4,
      topic: "Products & Sizing",
      description: "Ensure you get the perfect fit and quality every time.",
      subtopics: [
        {
          id: "4-1",
          question: "How do I find the right size?",
          answer: [
            "Use our detailed size guides on each product page",
            "Watch our fit videos for accurate sizing",
            "Contact our style advisors for personalized recommendations"
          ]
        },
        {
          id: "4-2",
          question: "What is your product quality guarantee?",
          answer: [
            "All products are made from premium, sustainable materials",
            "Quality checked by our expert team",
            "1-year craftsmanship warranty on all items"
          ]
        },
        {
          id: "4-3",
          question: "How should I care for my products?",
          answer: [
            "Follow care instructions on product labels",
            "Machine wash cold with similar colors",
            "Air dry or tumble dry low to maintain shape and color",
            "Use eco-friendly detergents for best results"
          ]
        },
        {
          id: "4-4",
          question: "Do you offer sustainable products?",
          answer: [
            "Yes! Our eco-collection features organic cotton, recycled materials, and sustainable production methods",
            "All packaging is 100% recyclable",
            "We're committed to carbon-neutral shipping"
          ]
        }
      ]
    },
    {
      id: 5,
      topic: "Payments & Pricing",
      description: "Questions about payment methods, pricing, and security.",
      subtopics: [
        {
          id: "5-1",
          question: "What payment methods do you accept?",
          answer: [
            "Credit/Debit Cards: Visa, Mastercard, American Express, Discover",
            "Digital Wallets: Apple Pay, Google Pay, PayPal, Venmo",
            "Buy Now, Pay Later: Afterpay, Klarna, Shop Pay Installments",
            "Gift Cards and Store Credit"
          ]
        },
        {
          id: "5-2",
          question: "How can I apply discount codes and promotions?",
          answer: [
            "Enter promo code at checkout in the designated field",
            "Student, military, and first-responder discounts available",
            "Stack multiple codes when allowed (terms apply)",
            "Subscribe to our newsletter for exclusive offers"
          ]
        },
        {
          id: "5-3",
          question: "Is my payment information secure?",
          answer: [
            "256-bit SSL encryption protects all transactions",
            "We're PCI-DSS compliant and never store your payment details",
            "Two-factor authentication available for account security",
            "Regular security audits and monitoring"
          ]
        },
        {
          id: "5-4",
          question: "Why is sales tax applied to my order?",
          answer: [
            "Sales tax applied based on your shipping address state laws",
            "Tax rates vary by location and product category",
            "Tax-exempt organizations can contact support for verification"
          ]
        }
      ]
    },
    {
      id: 6,
      topic: "Account & Support",
      description: "Manage your account and get help when you need it.",
      subtopics: [
        {
          id: "6-1",
          question: "How do I create and manage my account?",
          answer: [
            "Click 'Sign Up' in the header and provide basic information",
            "Access your dashboard to view order history, saved items, and preferences",
            "Update personal details, addresses, and communication preferences anytime"
          ]
        },
        {
          id: "6-2",
          question: "What are the benefits of being a member?",
          answer: [
            "Early access to new collections and sales",
            "Members-only discounts and birthday rewards",
            "Free shipping on all orders",
            "Personalized style recommendations",
            "Access to exclusive events and content"
          ]
        },
        {
          id: "6-3",
          question: "How do I contact customer support?",
          answer: [
            "Live Chat: Available 24/7 on our website",
            "Email: support@lifestylecollection.com (response within 2 hours)",
            "Phone: 1-800-LIFESTYLE (543-3789) Mon-Fri 9AM-9PM EST",
            "Social Media: DM us on Instagram @lifestylecollection"
          ]
        },
        {
          id: "6-4",
          question: "How do I reset my password or update account information?",
          answer: [
            "Click 'Forgot Password' on login page for instant reset link",
            "Update personal information in your account settings",
            "Manage communication preferences and newsletter subscriptions",
            "Download order history and invoices"
          ]
        }
      ]
    },
    {
      id: 7,
      topic: "Sustainability & Ethics",
      description: "Our commitment to responsible fashion and ethical practices.",
      subtopics: [
        {
          id: "7-1",
          question: "What is your sustainability commitment?",
          answer: [
            "100% sustainable packaging by 2024",
            "Carbon-neutral shipping across all deliveries",
            "Ethical manufacturing partnerships with certified factories",
            "Regular sustainability reports published transparently"
          ]
        },
        {
          id: "7-2",
          question: "How do you ensure ethical production?",
          answer: [
            "All manufacturing partners undergo rigorous ethical audits",
            "Fair wages and safe working conditions guaranteed",
            "No child or forced labor in our supply chain",
            "Regular factory visits and continuous improvement programs"
          ]
        },
        {
          id: "7-3",
          question: "Do you have a recycling program?",
          answer: [
            "Yes! Return any worn-out Lifestyle items for recycling",
            "Receive 15% off your next purchase when you recycle with us",
            "Partnership with textile recycling organizations",
            "Circular fashion initiatives to reduce waste"
          ]
        }
      ]
    }
  ];

  return (
    <div className={Style.faqWrap}>
      {/* Floating Background Elements */}
  <div className={Style.floatingElement}></div>
  <div className={Style.floatingElement}></div>
  <div className={Style.floatingElement}></div>
  
      <div className={Style.faqHeader}>
        <h1>Frequently Asked Questions</h1>
        <p className={Style.faqIntro}>
          Welcome to Lifestyle Collection's FAQ hub! Find instant answers to common questions 
          about our premium lifestyle products, shipping, returns, and more. Your satisfaction 
          is our priority—if you need further assistance, our style advisors are here to help.
        </p>
      </div>

      <div className={Style.faqContent}>
        {faqData.map((section, index) => (
          <section key={section.id} className={Style.topicSection}>
            <div className={Style.topicHeader}>
              <span className={Style.topicNumber}>0{section.id}</span>
              <div className={Style.topicTitle}>
                <h2>{section.topic}</h2>
                <p className={Style.topicDescription}>{section.description}</p>
              </div>
            </div>
            
            <div className={Style.questionsGrid}>
              {section.subtopics.map((subtopic) => (
                <article key={subtopic.id} className={Style.questionCard}>
                  <header 
                    className={Style.questionHeader}
                    onClick={() => toggleQuestion(subtopic.id)}
                  >
                    <h3 className={Style.questionText}>{subtopic.question}</h3>
                    <div className={Style.toggleContainer}>
                      <span className={Style.toggleIcon}>
                        {openQuestion === subtopic.id ? (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        )}
                      </span>
                    </div>
                  </header>
                  
                  <div 
                    className={`${Style.answerContent} ${
                      openQuestion === subtopic.id ? Style.answerOpen : Style.answerClosed
                    }`}
                  >
                    <div className={Style.answerBody}>
                      <ul>
                        {subtopic.answer.map((point, pointIndex) => (
                          <li key={pointIndex}>
                            <span className={Style.bulletPoint}></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className={Style.faqFooter}>
        <div className={Style.supportCta}>
          <h3>Still have questions?</h3>
          <p>Our customer care team is available to assist you with any additional inquiries.</p>
          <div className={Style.contactButtons}>
            <button className={Style.primaryButton} onClick={() => window.location.href = '/Error'}>Live Chat Now</button>
            <button className={Style.secondaryButton} onClick={() => window.location.href = '/Contact'}>Support</button>
          </div>
        </div>
      </footer>
    </div>
  );
}