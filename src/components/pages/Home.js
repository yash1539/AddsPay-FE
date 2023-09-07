import React from "react";
import CategorySection from "./CategorySection";
import PricingPlan from "./PricingPlan";
import ProductList from "../comman/ProductList";
import AboutUs from "./AboutUs";
import GallerySection from "../comman/GallerySection";

const Home = () => {
  return (
  
    <>
    <CategorySection/>
    <ProductList/>
    <GallerySection/>
    <AboutUs/>
    <PricingPlan/>
    </>
  );
};

export default Home;
