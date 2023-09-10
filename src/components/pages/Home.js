import React from "react";
import CategorySection from "./CategorySection";
import PricingPlan from "./PricingPlan";
import ProductList from "../comman/ProductList";
import AboutUs from "./AboutUs";
import GallerySection from "../comman/GallerySection";
import Banner from "../comman/Banner";

const Home = () => {
  return (
  
    <>
    {/* <SearchBar/> */}
    <Banner/>
    <CategorySection/>
    <ProductList/>
    <GallerySection/>
    <AboutUs/>
    <PricingPlan/>
    </>
  );
};

export default Home;
