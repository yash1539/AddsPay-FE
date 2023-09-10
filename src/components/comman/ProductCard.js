import React from 'react'

const ProductCard = () => {
  return (
    <div className="p-6 border-t border-b border-r first:border-l dark:border-gray-700 dark:bg-gray-900">
                <div className="relative">
                    <a href="/#" className="block">
                        <img src="https://i.postimg.cc/hP5c3MG4/pexels-melvin-buezo-2529148.jpg"
                            className="object-cover w-full h-64 rounded" alt=""/>
                    </a>
                </div>
                <div className="pt-6">
                    <a href="/#"
                        className="flex px-4 py-2 mb-4 font-bold text-white uppercase bg-blue-600 rounded-full w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 icon icon-tabler icon-tabler-plus"
                            width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                            fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        <span className="text-sm">
                            Add To Cart
                        </span>
                        
                    </a>

                    <a href="/#" className="">
                        <p className="mb-2 text-lg font-bold text-black dark:text-gray-400"><span
                                className="text-xl font-bold text-black dark:text-gray-300">Rs 129,000
                                
                            </span></p>
                        <p className="text-gray-500">
                            Adidas Nike Shoe With No Strings
                        </p>
                    </a>

                    <div className="relative flex items-center justify-between"></div>
                </div>
            </div>
  )
}

export default ProductCard