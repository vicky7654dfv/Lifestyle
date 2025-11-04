import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import HomePage1 from "./pages/HomePage1/HomePage1";
import DashBoard from "./pages/DashBoard/DashBoard";
import Services from "./pages/Services/Services";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import Checkout from "./pages/Checkout/Checkout";
import HomePage2 from "./pages/HomePage2/HomePage2";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import AOS from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import { CartProvider } from "./components/CartContext/CartContext";
import { SearchProvider } from "./components/SearchContext/SearchContext";
import ScrollToTop from "./components/ScrollToTop";
import Error from "./pages/Error/Error";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
      <SearchProvider>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route path="/HomePage2" element={<HomePage2 />} />
          <Route path="/About" element={<About />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Error" element={<Error />} />
        </Routes>
        </CartProvider>
        </SearchProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
