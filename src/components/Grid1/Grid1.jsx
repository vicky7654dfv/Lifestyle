import React, { useState, useContext } from "react";
import Style from "./Grid1.module.css";
import Img1 from "../../assets/Grid1/1.webp";
import Img2 from "../../assets/Grid1/2.webp";
import Img3 from "../../assets/Grid1/3.webp";
import Img4 from "../../assets/Grid1/4.webp";
import Img5 from "../../assets/Grid1/5.webp";
import Img6 from "../../assets/Grid1/6.webp";
import Img7 from "../../assets/Grid1/7.webp";
import Img8 from "../../assets/Grid1/8.webp";
import Img9 from "../../assets/Grid1/9.webp";
import Img10 from "../../assets/Grid1/10.webp";
import Img11 from "../../assets/Grid1/11.webp";
import Img12 from "../../assets/Grid1/12.webp";
import Img13 from "../../assets/Grid1/13.webp";
import Img14 from "../../assets/Grid1/14.webp";
import Img15 from "../../assets/Grid1/15.webp";
import Img16 from "../../assets/Grid1/16.webp";
import Img17 from "../../assets/Grid1/17.webp";
import Img18 from "../../assets/Grid1/18.webp";
import Img19 from "../../assets/Grid1/19.webp";
import Img20 from "../../assets/Grid1/20.webp";
import { CartContext } from "../CartContext/CartContext";
import { SearchContext } from "../SearchContext/SearchContext";

export default function Grid1() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext);

  const lifestyleItems = [
    // Men Category (4 items)
    { 
      id: 1, 
      image: Img1, 
      label: "Premium Formal Wear", 
      details: "Elegant business suits for professional settings", 
      cost: 4550, 
      type: "Men" 
    },
    { 
      id: 2, 
      image: Img2, 
      label: "Casual Denim Collection", 
      details: "Comfortable everyday jeans and jackets", 
      cost: 2640, 
      type: "Men" 
    },
    { 
      id: 3, 
      image: Img3, 
      label: "Sports Casual Wear", 
      details: "Breathable athletic-inspired clothing", 
      cost: 1640, 
      type: "Men" 
    },
    { 
      id: 4, 
      image: Img4, 
      label: "Winter Essentials", 
      details: "Warm woolen sweaters and coats", 
      cost: 3240, 
      type: "Men" 
    },

    // Women Category (4 items)
    { 
      id: 5, 
      image: Img5, 
      label: "Evening Gowns", 
      details: "Elegant dresses for special occasions", 
      cost: 5240, 
      type: "Women" 
    },
    { 
      id: 6, 
      image: Img6, 
      label: "Summer Collection", 
      details: "Light and breezy seasonal outfits", 
      cost: 2240, 
      type: "Women" 
    },
    { 
      id: 7, 
      image: Img7, 
      label: "Office Formals", 
      details: "Professional attire for workplace", 
      cost: 3550, 
      type: "Women" 
    },
    { 
      id: 8, 
      image: Img8, 
      label: "Casual Weekend Wear", 
      details: "Comfortable relaxed-fit clothing", 
      cost: 1870, 
      type: "Women" 
    },

    // Gym Category (4 items)
    { 
      id: 9, 
      image: Img9, 
      label: "Performance Activewear", 
      details: "Moisture-wicking gym clothes", 
      cost: 2200, 
      type: "Gym" 
    },
    { 
      id: 10, 
      image: Img10, 
      label: "Training Equipment", 
      details: "Essential fitness gear and accessories", 
      cost: 3800, 
      type: "Gym" 
    },
    { 
      id: 11, 
      image: Img11, 
      label: "Yoga Collection", 
      details: "Flexible and comfortable yoga wear", 
      cost: 1650, 
      type: "Gym" 
    },
    { 
      id: 12, 
      image: Img12, 
      label: "Running Gear", 
      details: "Specialized equipment for runners", 
      cost: 2750, 
      type: "Gym" 
    },

    // Accessories Category (4 items)
    { 
      id: 13, 
      image: Img13, 
      label: "Smart Wearables", 
      details: "Latest technology fitness trackers", 
      cost: 5500, 
      type: "Accessories" 
    },
    { 
      id: 14, 
      image: Img14, 
      label: "Premium Watches", 
      details: "Elegant timepieces for every occasion", 
      cost: 4200, 
      type: "Accessories" 
    },
    { 
      id: 15, 
      image: Img15, 
      label: "Designer Bags", 
      details: "Stylish carry options for daily use", 
      cost: 3200, 
      type: "Accessories" 
    },
    { 
      id: 16, 
      image: Img16, 
      label: "Sunglasses Collection", 
      details: "UV protection with stylish frames", 
      cost: 1800, 
      type: "Accessories" 
    },

    // Home Kits Category (4 items)
    { 
      id: 17, 
      image: Img17, 
      label: "Home Fitness Setup", 
      details: "Complete workout station for home", 
      cost: 8900, 
      type: "Home Kits" 
    },
    { 
      id: 18, 
      image: Img18, 
      label: "Meditation Corner", 
      details: "Peaceful space creation essentials", 
      cost: 3400, 
      type: "Home Kits" 
    },
    { 
      id: 19, 
      image: Img19, 
      label: "Kitchen Wellness", 
      details: "Healthy cooking equipment set", 
      cost: 5200, 
      type: "Home Kits" 
    },
    { 
      id: 20, 
      image: Img20, 
      label: "Sleep Sanctuary", 
      details: "Premium bedding and sleep aids", 
      cost: 6100, 
      type: "Home Kits" 
    }
  ];

  const categories = ["All", "Men", "Women", "Gym", "Accessories", "Home Kits"];

  // Filter by both category and search term
  const filteredItems = lifestyleItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.type === activeCategory;
    const matchesSearch = searchTerm === "" || 
      item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div data-aos="fade" className={Style.gridSection}>
        <div className={Style.sectionHeader}>
          <h2 className={Style.sectionTitle}>Lifestyle Collection</h2>
          <p className={Style.sectionSubtitle}>Curated products for your modern lifestyle</p>
          {searchTerm && (
            <p className={Style.searchResults}>
              Showing {filteredItems.length} results for "{searchTerm}"
            </p>
          )}
        </div>

        <div className={Style.categoryFilters}>
          {categories.map(category => (
            <button
              key={category}
              className={`${Style.categoryBtn} ${activeCategory === category ? Style.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={Style.gridWrap}>
          {filteredItems.map((item) => {
            const cartItem = cart.find(cartItem => cartItem.id === item.id);
            const quantity = cartItem ? cartItem.quantity : 0;
            
            return (
              <div key={item.id} className={Style.gridItem}>
                <div className={Style.imageContainer}>
                  <img src={item.image} alt={item.label} className={Style.productImage} />
                  <div className={Style.overlay}>
                  </div>
                </div>
                <div className={Style.productInfo}>
                  <h3 className={Style.itemLabel}>{item.label}</h3>
                  <p className={Style.itemDetails}>{item.details}</p>
                  <div className={Style.priceSection}>
                    <span className={Style.cost}>₹{item.cost.toLocaleString("en-IN")}</span>
                  </div>
                  <div className={Style.cartControls}>
                    <button
                      onClick={() => removeFromCart(item)}
                      disabled={quantity === 0}
                      className={Style.quantityBtn}
                    >
                      −
                    </button>
                    <span className={Style.quantity}>{quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className={Style.quantityBtn}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className={Style.noResults}>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      <hr />
    </>
  );
}