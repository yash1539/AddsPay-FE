import React, { useState } from "react";
import CategoryCard from "../comman/CategoryCard";
import category from "../../utils/category.json";
const CategorySection = () => {
  const [catList]=useState(category)
  return (
    <>
      <div className=" py-20 sm:py-28">
        <div className=" mx-auto rounded-sm shadow-2xl bg-white py-20 max-w-5xl  px-4 lg:px-6">
          <div className="mx-auto    lg:mx-0">
       
            <h2 className="text-3xl  font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
             Our Categories
            </h2>
            <p className="mt-2 text-lg py-10 text-center leading-8 text-gray-600">
              Discover endless options on our website, where we offer a wide
              variety of interesting and unique categories for you to explore.
            </p>
          </div>
          {/* {!category ? (
            <Shimmer />
          ) : ( */}
          <div className="max-w-7xl mx-auto gap-4 grid  grid-cols-3 ">
            {catList.categoryList
              .reverse()
              .splice(0, 9)
              .map((cat) => {
                return <CategoryCard key={cat.img} {...cat} />;
              })}
          </div>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default CategorySection;
