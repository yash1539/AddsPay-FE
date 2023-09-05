import React from "react";

const ListingCard = () => {
  return (
    <>
      <div className="py-6">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden   mx-auto max-w-sm lg:max-w-3xl">
          <div className="relative  block lg:w-1/2 bg-cover bg-[url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')] ">
            <button className="h-10 m-3 rounded w-20 text-white absolute top-0 right-0  bg-red-600">
              feature
            </button>
          </div>
          <div className="w-full px-8 py-5 lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-700 text-left">
              Saini Associates
            </h2>
            <p className="text-sm text-gray-600 text-left">
              adipisicing elit. Dicta modi aliquam veniam quam nemo similique a
              expedita. adipisicing elit. Dicta modi aliquam veniam quam nemo
              similique a expedita. adipisicing elit. Dicta modi aliquam veniam
              quam nemo similique a expedita.
            </p>
            <div className="flex py-10 justify-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              Lorem ipsum dolor sit amet consectetur,
            </div>
            <div className=" flex items-center  justify-around">
              <button className="h-10 m-4 rounded w-1/2 text-white  flex items-center justify-center  bg-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 m-1 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>feature</span>
              </button>
              <button className="h-10 m-4 rounded w-1/2 text-white flex items-center justify-center   bg-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 m-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>feature</span>
              </button>

              {/* <span className="border-b w-full"></span> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-screen">
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img
              src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="tailwind logo"
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <p className="text-gray-500 font-medium hidden md:block">
                Vacations
              </p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-600 font-bold text-sm ml-1">
                  4.96
                  <span className="text-gray-500 font-normal">
                    (76 reviews)
                  </span>
                </p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Superhost
              </div>
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
              The Majestic and Wonderful Bahamas
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              The best kept secret of The Bahamas is the country’s sheer size
              and diversity. With 16 major islands, The Bahamas is an unmatched
              destination
            </p>
            <p className="text-xl font-black text-gray-800">
              $110
              <span className="font-normal text-gray-600 text-base">
                /night
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingCard;
