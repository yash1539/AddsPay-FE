import React from "react";

const ListingCard = () => {
  return (
    // <>
    //   {/* <div className="py-6">
    //     <div className=" flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden   mx-auto max-w-sm lg:max-w-3xl">
    //       <div className="relative  block lg:w-1/2 bg-cover bg-[url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')] ">
    //         <button className="h-10 m-3 rounded w-20 text-white absolute top-0 right-0  bg-red-600">
    //           feature
    //         </button>
    //       </div>
    //       <div className="w-full px-8 py-5 lg:w-1/2">
    //         <h2 className="text-2xl font-bold text-gray-700 text-left">
    //           Saini Associates
    //         </h2>
    //         <p className="text-sm text-gray-600 text-left">
    //           adipisicing elit. Dicta modi aliquam veniam quam nemo similique a
    //           expedita. adipisicing elit. Dicta modi aliquam veniam quam nemo
    //           similique a expedita. adipisicing elit. Dicta modi aliquam veniam
    //           quam nemo similique a expedita.
    //         </p>
    //         <div className="flex py-10 justify-center text-center">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    //             />
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    //             />
    //           </svg>
    //           Lorem ipsum dolor sit amet consectetur,
    //         </div>
    //         <div className=" flex items-center  justify-around">
    //           <button className="h-10 m-4 rounded w-1/2 text-white  flex items-center justify-center  bg-green-600">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-4 m-1 h-4"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M4.5 12.75l6 6 9-13.5"
    //               />
    //             </svg>
    //             <span>feature</span>
    //           </button>
    //           <button className="h-10 m-4 rounded w-1/2 text-white flex items-center justify-center   bg-blue-600">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth="1.5"
    //               stroke="currentColor"
    //               className="w-4 h-4 m-1"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M4.5 12.75l6 6 9-13.5"
    //               />
    //             </svg>
    //             <span>feature</span>
    //           </button>

    //         </div>
    //       </div>
    //     </div>
    //   </div> */}

    //   <div className="flex flex-col rounded-l-xl justify-center pb-10">
    //     <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
    //       <div className=" rounded-l-xl relative w-full md:w-3/6 bg-white grid place-items-center">
    //         <img
    //           src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    //           alt="tailwind logo"
    //           className="rounded-l-xl h-[100%]"
    //         />
    //          <button className="h-10 m-3 rounded w-20 text-white absolute top-0 right-0  bg-red-600">
    //           feature
    //         </button>
    //       </div>
    //       <div className="w-full md:w-3/6 bg-white flex flex-col justify-between space-y-2 p-3">
    //         {/* <div className="flex justify-between item-center">
    //           <p className="text-gray-500 font-medium hidden md:block">
    //             Vacations
    //           </p>
    //           <div className="flex items-center">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5 text-yellow-500"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //             </svg>
    //             <p className="text-gray-600 font-bold text-sm ml-1">
    //               4.96
    //               <span className="text-gray-500 font-normal">
    //                 (76 reviews)
    //               </span>
    //             </p>
    //           </div>
    //           <div className="">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5 text-pink-500"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
    //                 clip-rule="evenodd"
    //               />
    //             </svg>
    //           </div>
    //           <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
    //             Superhost
    //           </div>
    //         </div> */}
    //         <h3 className="font-black text-gray-800 md:text-2xl text-xl">
    //           The Majestic and Wonderful Bahamas
    //         </h3>
    //         <p className="md:text-lg text-gray-500 text-base">
    //           The best kept secret of The Bahamas is the country’s sheer size
    //           and diversity. With 16 major islands, The Bahamas is an unmatched
    //           destination
    //         </p>
    //         <div className="flex py-1 justify-center text-center">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    //             />
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    //             />
    //           </svg>
    //           Lorem ipsum dolor sit amet consectetur,
    //         </div>
    //         <div className=" flex items-center  justify-around">
    //           <button className="h-10 m-4 rounded w-1/2 text-white  flex items-center justify-center  bg-green-600">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-4 m-1 h-4"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M4.5 12.75l6 6 9-13.5"
    //               />
    //             </svg>
    //             <span>feature</span>
    //           </button>
    //           <button className="h-10 m-4 rounded w-1/2 text-white flex items-center justify-center   bg-blue-600">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth="1.5"
    //               stroke="currentColor"
    //               className="w-4 h-4 m-1"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M4.5 12.75l6 6 9-13.5"
    //               />
    //             </svg>
    //             <span>feature</span>
    //           </button>

    //           {/* <span className="border-b w-full"></span> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
        <div className="border border-gray-300 ">
          <div className="relative bg-gray-200">
            <a href="#" className="">
              <img
                src="https://i.postimg.cc/pdcRLwSq/pexels-igor-ovsyannykov-205961.jpg"
                alt=""
                className="object-cover w-full h-56 mx-auto "
              />
            </a>
          </div>
          <div className="p-3 ">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-medium ">Product name</h3>
              {/* <ul className="flex">
                <li>
                  <a href=" #">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-4 mr-1 text-gray-700  bi bi-star "
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-4 mr-1 text-gray-700  bi bi-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-4 mr-1 text-gray-700  bi bi-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-4 mr-1 text-gray-700  bi bi-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                    </svg>
                  </a>
                </li>
              </ul> */}
            </div>
            <p className="text-lg">
              <span className="text-green-600 dark:text-green-600">
                $800.00
              </span>
            </p>
            <div className="flex flex-wrap justify-between">

            <button className="h-10 m-3 text-white rounded w-20   top-0 right-0  bg-red-600">
               Featured
           </button>
            <button className="h-10 m-3 text-white rounded w-20   top-0 right-0  bg-blue-600">
               Verified
           </button>
            </div>
          </div>
          <div className="flex justify-between p-4 border-t border-gray-300 ">
            <a
              href="#"
              className="text-gray-500  hover:text-red-500 dark:hover:text-red-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500  hover:text-red-500 dark:hover:text-red-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-4 h-4 bi bi-cart3 "
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500  hover:text-red-500 dark:hover:text-red-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingCard;
