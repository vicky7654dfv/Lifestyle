import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Style from "./Checkout.module.css";
import { CartContext } from "../../components/CartContext/CartContext";

export default function Checkout() {
  const {
    cart,
    removeFromCart,
    addToCart,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState(5);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate order processing
    setOrderPlaced(true);
    clearCart();
  };

  const calculateTotal = () => {
    const subtotal = getCartTotal();
    const shipping = subtotal > 5000 ? 0 : 200;
    const tax = subtotal * 0.18;
    return subtotal + shipping + tax;
  };

  // Auto redirect effect
  useEffect(() => {
    if (orderPlaced) {
      const countdownInterval = setInterval(() => {
        setRedirectCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            navigate("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [orderPlaced, navigate]);

  if (orderPlaced) {
    return (
      <div data-aos="fade-up" className={Style.checkoutContainer}>
        <div className={Style.successMessage}>
          <div className={Style.successIcon}>✓</div>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your purchase. Your order has been confirmed.</p>
          <p className={Style.redirectText}>
            Redirecting to home in {redirectCountdown} seconds...
          </p>
          <Link to="/" className={Style.continueShopping}>
            Continue Shopping Now
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div data-aos="fade-up" className={Style.checkoutContainer}>
        <div className={Style.emptyCartSection}>
          <div className={Style.emptyCartAnimation}>
            <div className={Style.cartIcon}>
              <div className={Style.cartBody}></div>
              <div className={Style.cartHandle}></div>
              <div className={Style.cartWheel}></div>
              <div className={Style.cartWheel}></div>
            </div>
            <div className={Style.floatingItems}>
              <div className={Style.floatingItem}></div>
              <div className={Style.floatingItem}></div>
              <div className={Style.floatingItem}></div>
            </div>
          </div>
          <div className={Style.emptyCartContent}>
            <h2>Your Shopping Cart is Empty</h2>
            <p>
              Looks like you haven't added any items to your cart yet. Start
              exploring our amazing collection!
            </p>
            <div className={Style.emptyCartFeatures}>
              <div className={Style.feature}>
                <span className={Style.featureIcon}>🚚</span>
                <span>Free Shipping Over ₹5000</span>
              </div>
              <div className={Style.feature}>
                <span className={Style.featureIcon}>↩️</span>
                <span>Easy Returns</span>
              </div>
              <div className={Style.feature}>
                <span className={Style.featureIcon}>🔒</span>
                <span>Secure Checkout</span>
              </div>
            </div>
            <Link to="/" className={Style.exploreButton}>
              Start Shopping Now
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div data-aos="fade-up" className={Style.checkoutContainer}>
      <div className={Style.checkoutHeader}>
        <h1>Checkout</h1>
        <p>Complete your purchase</p>
      </div>

      <div className={Style.checkoutContent}>
        <div className={Style.orderSummary}>
          <h2>Order Summary ({getCartItemsCount()} items)</h2>
          <div className={Style.cartItems}>
            {cart.map((item) => (
              <div key={item.id} className={Style.cartItem}>
                <img src={item.image} alt={item.label} className={Style.itemImage} />
                <div className={Style.itemDetails}>
                  <h3>{item.label}</h3>
                  <p>{item.details}</p>
                  <div className={Style.itemPrice}>₹{item.cost.toLocaleString("en-IN")}</div>
                </div>
                <div className={Style.quantityControls}>
                  <button
                    onClick={() => removeFromCart(item)}
                    className={Style.quantityBtn}
                  >
                    −
                  </button>
                  <span className={Style.quantity}>{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className={Style.quantityBtn}
                  >
                    +
                  </button>
                </div>
                <div className={Style.itemTotal}>
                  ₹{(item.cost * item.quantity).toLocaleString("en-IN")}
                </div>
                <button
                  onClick={() => {
                    for (let i = 0; i < item.quantity; i++) {
                      removeFromCart(item);
                    }
                  }}
                  className={Style.removeBtn}
                  title="Remove all items"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className={Style.summaryTotals}>
            <div className={Style.summaryRow}>
              <span>Subtotal:</span>
              <span>₹{getCartTotal().toLocaleString("en-IN")}</span>
            </div>
            <div className={Style.summaryRow}>
              <span>Shipping:</span>
              <span>₹{getCartTotal() > 5000 ? 0 : 200}</span>
            </div>
            <div className={Style.summaryRow}>
              <span>Tax (18%):</span>
              <span>₹{(getCartTotal() * 0.18).toLocaleString("en-IN")}</span>
            </div>
            <div className={Style.summaryRow + ' ' + Style.grandTotal}>
              <span>Total:</span>
              <span>₹{calculateTotal().toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>

        <div className={Style.checkoutForm}>
          <form onSubmit={handlePlaceOrder}>
            <div className={Style.formSection}>
              <h3>Shipping Information</h3>
              <div className={Style.formGroup}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={Style.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={Style.formGroup}>
                <input
                  type="text"
                  name="address"
                  placeholder="Shipping Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={Style.formRow}>
                <div className={Style.formGroup}>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={Style.formGroup}>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={Style.formSection}>
              <h3>Payment Details</h3>
              <div className={Style.formGroup}>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  maxLength="16"
                />
              </div>
              <div className={Style.formRow}>
                <div className={Style.formGroup}>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                    maxLength="5"
                  />
                </div>
                <div className={Style.formGroup}>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    maxLength="3"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className={Style.placeOrderBtn}>
              Place Order - ₹{calculateTotal().toLocaleString("en-IN")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}