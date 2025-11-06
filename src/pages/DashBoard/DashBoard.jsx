import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './DashBoard.module.css';

const DashBoard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [salesData, setSalesData] = useState(0);
  const [customerGrowth, setCustomerGrowth] = useState(0);
  const navigate = useNavigate();

  // Simulate loading animations
  useEffect(() => {
    const timer1 = setTimeout(() => setSalesData(125000), 500);
    const timer2 = setTimeout(() => setCustomerGrowth(28), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'fashion', label: 'Fashion', icon: '👕' },
    { id: 'electronics', label: 'Electronics', icon: '📱' },
    { id: 'fitness', label: 'Fitness Gear', icon: '💪' },
    { id: 'accessories', label: 'Accessories', icon: '🕶️' },
    { id: 'home', label: 'Home & Living', icon: '🏠' },
    { id: 'trending', label: 'Trending', icon: '🔥' },
    { id: 'analytics', label: 'Analytics', icon: '📈' }
  ];

  const statsData = [
    { 
      label: 'Total Sales', 
      value: `$${(salesData).toLocaleString()}`, 
      change: '+18%', 
      icon: '💰', 
      color: '#007bff',
      description: 'Monthly revenue'
    },
    { 
      label: 'New Customers', 
      value: `${customerGrowth}%`, 
      change: '+12%', 
      icon: '👥', 
      color: '#6ab04c',
      description: 'Growth rate'
    },
    { 
      label: 'Products Sold', 
      value: '2,458', 
      change: '+8%', 
      icon: '🛍️', 
      color: '#ff6b6b',
      description: 'This month'
    },
    { 
      label: 'Avg. Order Value', 
      value: '$89.99', 
      change: '+5%', 
      icon: '📦', 
      color: '#ffd93d',
      description: 'Per customer'
    }
  ];

  const monthlySales = [
    { month: "Jan", sales: 850, revenue: 850000 },
    { month: "Feb", sales: 920, revenue: 920000 },
    { month: "Mar", sales: 780, revenue: 780000 },
    { month: "Apr", sales: 1100, revenue: 1100000 },
    { month: "May", sales: 1250, revenue: 1250000 },
    { month: "Jun", sales: 1400, revenue: 1400000 },
    { month: "Jul", sales: 1600, revenue: 1600000 },
    { month: "Aug", sales: 1550, revenue: 1550000 },
    { month: "Sep", sales: 1800, revenue: 1800000 },
    { month: "Oct", sales: 1950, revenue: 1950000 },
    { month: "Nov", sales: 2100, revenue: 2100000 },
    { month: "Dec", sales: 2400, revenue: 2400000 },
  ];

  const topCategories = [
    { name: 'Smart Wearables', sales: '42K', growth: '+25%', color: '#007bff' },
    { name: 'Athletic Apparel', sales: '38K', growth: '+18%', color: '#6ab04c' },
    { name: 'Home Gadgets', sales: '35K', growth: '+22%', color: '#ff6b6b' },
    { name: 'Fashion Accessories', sales: '31K', growth: '+15%', color: '#ffd93d' }
  ];

  const recentProducts = [
    { 
      name: 'Smart Fitness Watch', 
      category: 'Electronics', 
      price: '$199.99', 
      stock: 45,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop',
      trend: 'up'
    },
    { 
      name: 'Premium Yoga Mat', 
      category: 'Fitness', 
      price: '$49.99', 
      stock: 23,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=150&fit=crop',
      trend: 'up'
    },
    { 
      name: 'Designer Backpack', 
      category: 'Accessories', 
      price: '$129.99', 
      stock: 12,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop',
      trend: 'down'
    }
  ];

  const categoryDistribution = [30, 25, 20, 15, 10];

  // Fashion Section Data
  const fashionProducts = [
    { name: 'Summer Dresses', sales: 234, trend: 'up', inventory: 45 },
    { name: 'Denim Collection', sales: 189, trend: 'up', inventory: 32 },
    { name: 'Formal Wear', sales: 156, trend: 'down', inventory: 28 },
    { name: 'Casual Tops', sales: 278, trend: 'up', inventory: 67 }
  ];

  // Electronics Section Data
  const electronicsProducts = [
    { name: 'Smart Watches', sales: 342, trend: 'up', inventory: 23 },
    { name: 'Wireless Earbuds', sales: 287, trend: 'up', inventory: 45 },
    { name: 'Fitness Trackers', sales: 198, trend: 'up', inventory: 34 },
    { name: 'Smart Home Devices', sales: 165, trend: 'down', inventory: 28 }
  ];

  // Fitness Gear Section Data
  const fitnessProducts = [
    { name: 'Yoga Mats', sales: 156, trend: 'up', inventory: 89 },
    { name: 'Dumbbell Sets', sales: 134, trend: 'up', inventory: 45 },
    { name: 'Resistance Bands', sales: 278, trend: 'up', inventory: 67 },
    { name: 'Fitness Apparel', sales: 345, trend: 'up', inventory: 123 }
  ];

  // Accessories Section Data
  const accessoriesProducts = [
    { name: 'Sunglasses', sales: 189, trend: 'up', inventory: 56 },
    { name: 'Watches', sales: 234, trend: 'up', inventory: 34 },
    { name: 'Backpacks', sales: 167, trend: 'down', inventory: 23 },
    { name: 'Jewelry', sales: 278, trend: 'up', inventory: 78 }
  ];

  // Home & Living Section Data
  const homeProducts = [
    { name: 'Smart Lighting', sales: 145, trend: 'up', inventory: 34 },
    { name: 'Kitchen Gadgets', sales: 267, trend: 'up', inventory: 89 },
    { name: 'Home Decor', sales: 189, trend: 'up', inventory: 156 },
    { name: 'Bedding Sets', sales: 134, trend: 'down', inventory: 67 }
  ];

  // Trending Section Data
  const trendingProducts = [
    { name: 'Eco-friendly Products', growth: '+45%', demand: 'High' },
    { name: 'Smart Home Tech', growth: '+38%', demand: 'Very High' },
    { name: 'Athleisure Wear', growth: '+32%', demand: 'High' },
    { name: 'Sustainable Accessories', growth: '+28%', demand: 'Medium' }
  ];

  // Analytics Section Data
  const analyticsData = [
    { metric: 'Conversion Rate', value: '8.2%', change: '+1.2%' },
    { metric: 'Customer Retention', value: '75%', change: '+5%' },
    { metric: 'Avg. Session Duration', value: '4.2min', change: '+0.8min' },
    { metric: 'Bounce Rate', value: '32%', change: '-3%' }
  ];

  const maxSales = Math.max(...monthlySales.map(m => m.sales));

  const renderProductGrid = (products) => (
    <div className={Style.productGrid}>
      {products.map((product, index) => (
        <div key={index} className={Style.productCard}>
          <div className={Style.productHeader}>
            <h4>{product.name}</h4>
            <span className={`${Style.trendIndicator} ${product.trend === 'up' ? Style.trendUp : Style.trendDown}`}>
              {product.trend === 'up' ? '↗' : '↘'}
            </span>
          </div>
          <div className={Style.productStats}>
            <span>Sales: {product.sales}</span>
            <span>Stock: {product.inventory}</span>
          </div>
          <button className={Style.productBtn} onClick={() => navigate('/Error')}>
            Manage
          </button>
        </div>
      ))}
    </div>
  );

  const renderTrendingGrid = (products) => (
    <div className={Style.trendingGrid}>
      {products.map((product, index) => (
        <div key={index} className={Style.trendingCard}>
          <h4>{product.name}</h4>
          <div className={Style.trendingStats}>
            <span className={Style.growth}>{product.growth}</span>
            <span className={Style.demand}>{product.demand}</span>
          </div>
          <button className={Style.trendingBtn} onClick={() => navigate('/Error')}>
            Analyze
          </button>
        </div>
      ))}
    </div>
  );

  const renderAnalyticsGrid = (data) => (
    <div className={Style.analyticsGrid}>
      {data.map((item, index) => (
        <div key={index} className={Style.analyticsCard}>
          <h4>{item.metric}</h4>
          <div className={Style.analyticsValue}>
            <span>{item.value}</span>
            <span className={Style.analyticsChange}>{item.change}</span>
          </div>
          <button className={Style.analyticsBtn} onClick={() => navigate('/Error')}>
            Details
          </button>
        </div>
      ))}
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.welcomeBanner}>
              <div className={Style.welcomeText}>
                <h2>Welcome to Stackly Lifestyle! 🎉</h2>
                <p>Your complete lifestyle destination. Track performance and discover insights.</p>
              </div>
              <div className={Style.quickActions}>
                <button className={Style.actionBtn} onClick={() => navigate('/Error')}>
                  <span>➕</span> Add Product
                </button>
                <button className={Style.actionBtn} onClick={() => navigate('/Error')}>
                  <span>📊</span> View Reports
                </button>
              </div>
            </div>

            <div className={Style.statsGrid}>
              {statsData.map((stat, index) => (
                <div key={index} className={Style.statCard}>
                  <div className={Style.statHeader}>
                    <div 
                      className={Style.statIcon}
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      {stat.icon}
                    </div>
                    <span className={Style.statChange} style={{ color: stat.color }}>
                      {stat.change}
                    </span>
                  </div>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                  <span className={Style.statDescription}>{stat.description}</span>
                </div>
              ))}
            </div>

            <div className={Style.chartsSection}>
              <div className={Style.chartCard}>
                <div className={Style.chartHeader}>
                  <h3>Monthly Sales Trend</h3>
                  <button className={Style.chartBtn} onClick={() => navigate('/Error')}>View Details</button>
                </div>
                <div className={Style.barChart}>
                  {monthlySales.map((month, index) => (
                    <div key={index} className={Style.barContainer}>
                      <div 
                        className={Style.bar}
                        style={{ height: `${(month.sales / maxSales) * 100}%` }}
                      ></div>
                      <span className={Style.barLabel}>{month.month}</span>
                      <span className={Style.barValue}>{month.sales}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={Style.chartCard}>
                <div className={Style.chartHeader}>
                  <h3>Category Distribution</h3>
                  <button className={Style.chartBtn} onClick={() => navigate('/Error')}>Explore</button>
                </div>
                <div className={Style.donutChart}>
                  {categoryDistribution.map((percentage, index) => (
                    <div 
                      key={index}
                      className={Style.donutSegment}
                      style={{ 
                        '--percentage': percentage,
                        '--color': ['#007bff', '#6ab04c', '#ff6b6b', '#ffd93d', '#6c5ce7'][index],
                        '--offset': categoryDistribution.slice(0, index).reduce((a, b) => a + b, 0)
                      }}
                    ></div>
                  ))}
                  <div className={Style.donutCenter}>
                    <span>Total</span>
                    <strong>100%</strong>
                  </div>
                </div>
                <div className={Style.legend}>
                  {['Fashion', 'Electronics', 'Fitness', 'Accessories', 'Home'].map((label, index) => (
                    <div key={index} className={Style.legendItem}>
                      <span 
                        className={Style.legendColor}
                        style={{ backgroundColor: ['#007bff', '#6ab04c', '#ff6b6b', '#ffd93d', '#6c5ce7'][index] }}
                      ></span>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={Style.additionalGrid}>
              <div className={Style.gridCard}>
                <h3>Top Categories</h3>
                <div className={Style.categoryList}>
                  {topCategories.map((category, index) => (
                    <div key={index} className={Style.categoryItem}>
                      <div className={Style.categoryInfo}>
                        <span className={Style.categoryName}>{category.name}</span>
                        <span className={Style.categorySales}>{category.sales}</span>
                      </div>
                      <div className={Style.categoryGrowth} style={{ color: category.color }}>
                        {category.growth}
                      </div>
                    </div>
                  ))}
                </div>
                <button className={Style.viewAllBtn} onClick={() => navigate('/Error')}>
                  View All Categories
                </button>
              </div>

              <div className={Style.gridCard}>
                <h3>Recent Products</h3>
                <div className={Style.productList}>
                  {recentProducts.map((product, index) => (
                    <div key={index} className={Style.productItem}>
                      <img src={product.image} alt={product.name} />
                      <div className={Style.productInfo}>
                        <span className={Style.productName}>{product.name}</span>
                        <span className={Style.productCategory}>{product.category}</span>
                      </div>
                      <div className={Style.productMeta}>
                        <span className={Style.productPrice}>{product.price}</span>
                        <span className={Style.productStock}>{product.stock} left</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className={Style.viewAllBtn} onClick={() => navigate('/Error')}>
                  Manage Products
                </button>
              </div>
            </div>
          </div>
        );

      case 'fashion':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Fashion Collection 👕</h2>
              <p>Manage your clothing and apparel inventory</p>
            </div>
            <div className={Style.sectionStats}>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>$89.4K</span>
                <span className={Style.statMiniLabel}>Monthly Revenue</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>1,234</span>
                <span className={Style.statMiniLabel}>Products Sold</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>+18%</span>
                <span className={Style.statMiniLabel}>Growth</span>
              </div>
            </div>
            {renderProductGrid(fashionProducts)}
            <div className={Style.sectionActions}>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                Add New Collection
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                View Fashion Analytics
              </button>
            </div>
          </div>
        );

      case 'electronics':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Electronics & Gadgets 📱</h2>
              <p>Smart devices, wearables, and tech accessories</p>
            </div>
            <div className={Style.sectionStats}>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>$124.7K</span>
                <span className={Style.statMiniLabel}>Monthly Revenue</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>992</span>
                <span className={Style.statMiniLabel}>Products Sold</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>+25%</span>
                <span className={Style.statMiniLabel}>Growth</span>
              </div>
            </div>
            {renderProductGrid(electronicsProducts)}
            <div className={Style.sectionActions}>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                Add New Gadget
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                Tech Performance
              </button>
            </div>
          </div>
        );

      case 'fitness':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Fitness Gear 💪</h2>
              <p>Exercise equipment, sportswear, and wellness products</p>
            </div>
            <div className={Style.sectionStats}>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>$67.8K</span>
                <span className={Style.statMiniLabel}>Monthly Revenue</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>1,567</span>
                <span className={Style.statMiniLabel}>Products Sold</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>+22%</span>
                <span className={Style.statMiniLabel}>Growth</span>
              </div>
            </div>
            {renderProductGrid(fitnessProducts)}
            <div className={Style.sectionActions}>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                Add Fitness Product
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                Workout Analytics
              </button>
            </div>
          </div>
        );

      case 'accessories':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Accessories 🕶️</h2>
              <p>Watches, bags, sunglasses, and lifestyle accessories</p>
            </div>
            <div className={Style.sectionStats}>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>$45.3K</span>
                <span className={Style.statMiniLabel}>Monthly Revenue</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>868</span>
                <span className={Style.statMiniLabel}>Products Sold</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>+15%</span>
                <span className={Style.statMiniLabel}>Growth</span>
              </div>
            </div>
            {renderProductGrid(accessoriesProducts)}
            <div className={Style.sectionActions}>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                Add Accessory
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                Style Trends
              </button>
            </div>
          </div>
        );

      case 'home':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Home & Living 🏠</h2>
              <p>Smart home devices, decor, and lifestyle products</p>
            </div>
            <div className={Style.sectionStats}>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>$78.9K</span>
                <span className={Style.statMiniLabel}>Monthly Revenue</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>735</span>
                <span className={Style.statMiniLabel}>Products Sold</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>+19%</span>
                <span className={Style.statMiniLabel}>Growth</span>
              </div>
            </div>
            {renderProductGrid(homeProducts)}
            <div className={Style.sectionActions}>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                Add Home Product
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                Home Trends
              </button>
            </div>
          </div>
        );

      case 'trending':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Trending Products 🔥</h2>
              <p>Discover what's hot and emerging trends</p>
            </div>
            <div className={Style.trendingInsights}>
              <div className={Style.insightCard}>
                <h3>Market Insights</h3>
                <p>Smart home technology and sustainable products showing strongest growth patterns this quarter.</p>
              </div>
              <div className={Style.insightCard}>
                <h3>Customer Behavior</h3>
                <p>Increased demand for eco-friendly and multi-functional lifestyle products.</p>
              </div>
            </div>
            {renderTrendingGrid(trendingProducts)}
            <div className={Style.sectionActions}>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                View Trend Report
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                Market Analysis
              </button>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Business Analytics 📈</h2>
              <p>Comprehensive performance metrics and insights</p>
            </div>
            <div className={Style.analyticsOverview}>
              <div className={Style.analyticsChart}>
                <h3>Performance Overview</h3>
                <div className={Style.metricBars}>
                  {[65, 80, 45, 90, 75, 85].map((value, index) => (
                    <div key={index} className={Style.metricBar} style={{ height: `${value}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
            {renderAnalyticsGrid(analyticsData)}
            <div className={Style.sectionActions}>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                Download Report
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                Advanced Analytics
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>{menuItems.find(item => item.id === activeSection)?.label}</h2>
              <p>Manage your {activeSection} products and analytics</p>
            </div>
            <div className={Style.placeholderContent}>
              <div className={Style.placeholderCard}>
                <h3>{menuItems.find(item => item.id === activeSection)?.label} Management</h3>
                <p>Comprehensive tools for your {activeSection} category</p>
                <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                  Explore {menuItems.find(item => item.id === activeSection)?.label}
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={Style.dashboard}>
      <aside className={Style.sidebar}>
        <div className={Style.sidebarHeader}>
          <div className={Style.logo}>
            <span className={Style.logoIcon}>🛍️</span>
            <h2>Stackly Life</h2>
          </div>
        </div>
        
        <nav className={Style.sidebarNav}>
          <ul>
            {menuItems.map((item) => (
              <li 
                key={item.id}
                className={`${Style.navItem} ${activeSection === item.id ? Style.active : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <span className={Style.navIcon}>{item.icon}</span>
                <span className={Style.navLabel}>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className={Style.sidebarFooter}>
          <div className={Style.adminPanel}>
            <div className={Style.adminHeader}>
              <h3>Admin Panel</h3>
              <span className={Style.adminBadge}>Lifestyle Manager</span>
            </div>
            <div className={Style.adminStats}>
              <div className={Style.adminStat}>
                <span>Total Products</span>
                <strong>1,247</strong>
              </div>
              <div className={Style.adminStat}>
                <span>Active Categories</span>
                <strong>8</strong>
              </div>
            </div>
            <button className={Style.adminBtn} onClick={() => navigate('/Error')}>
              System Settings
            </button>
          </div>
        </div>
      </aside>

      <main className={Style.mainContent}>
        <header className={Style.header}>
          <div className={Style.headerLeft}>
            <h1>Lifestyle Dashboard</h1>
            <p>Comprehensive overview of your lifestyle business</p>
          </div>
          <div className={Style.headerActions}>
            <button className={Style.notificationBtn} onClick={() => navigate('/Error')}>
              <span>🔔</span>
              <span className={Style.notificationBadge}>5</span>
            </button>
            <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
              <span>📊</span> Generate Report
            </button>
            <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
              <span>⚙️</span> Settings
            </button>
          </div>
        </header>

        {renderSection()}
      </main>
    </div>
  );
};

export default DashBoard;