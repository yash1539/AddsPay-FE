import React from 'react'

const CategoryCard = ({name,img}) => {
  return (
    <>
    <div className="group relative rounded-lg overflow-hidden shadow-xl   hover:scale-105 transition duration-500 cursor-pointer ">
        <div className="h-100">
          <img
          
            src={img}
            alt="City"
            className="max-h-75 min-h-75 w-full  "
          />
        </div>
        <div className=" h-1/4 p-2 ">
          <p className="mb-1 text-xl font-semibold text-center text-bold text-blue-600">
            <a href="/#" className="">
             {name}
            </a>
          </p>
          {/* <p className="text-sm font-bold text-orange-500">perspiciatis</p> */}
          {/* <div className="flex flex-row justify-between text-xs mt-2">
            <p>perspiciatis</p>
            <p>Sed ut perspiciatis unde omnis iste</p>
          </div> */}
        </div>
      </div>
    </>
  
 
    )
}

export default CategoryCard