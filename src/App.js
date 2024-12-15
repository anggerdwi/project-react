import React from "react";
import Navbar from "./components/Navbar"
import ProductComponent from "./components/ProductComponent";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Partnership from "./components/Partnership";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductComponent />
      <AboutUs />
      <Contact />
      <Testimonials />
      <Partnership  />
      <Footer />
    </div>
  );
};

export default App;