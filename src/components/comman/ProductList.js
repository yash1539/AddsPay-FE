import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <section className="flex  flex-col items-center my-20 bg-white lg:h-screen ">
    <div className="mx-auto    lg:mx-0">
       
       <h2 className="text-3xl  font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
        Our Categories
       </h2>
       <p className="mt-2 text-lg py-10 text-center leading-8 text-gray-600">
         Discover endless options on our website, where we offer a wide
         variety of interesting and unique categories for you to explore.
       </p>
     </div>
    <div className="px-4 mx-auto py-20 max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:gap-0 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
       
        </div>
    </div>
</section>
  )
}

export default ProductList