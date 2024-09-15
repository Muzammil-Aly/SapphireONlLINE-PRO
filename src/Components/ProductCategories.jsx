import React from "react";
import Sliderr from "./Navabar/HeroSection/Sliderr";
import ShopByCategory from "./ProductSection/CategorySection/ShopByCategory";
import Footer from "./Footer/Footer";
import Navbar from "./Navabar/Navbar";

const ProductCategories = () => {
  return (
    <>
      <Navbar />
      <Sliderr />
      <ShopByCategory />
      <Footer />
    </>
  );
};

export default ProductCategories;
