import React from "react";
import CategorySection from "./CategorySection";
import PricingPlan from "./PricingPlan";
import ProductList from "../comman/ProductList";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
  
    <>
    <CategorySection/>
    <ProductList/>
    <AboutUs/>
    <PricingPlan/>
    </>
  );
};

export default Home;
