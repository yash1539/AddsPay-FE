import React from "react";

const PricingPlan = () => {
  const list = [
    {
      title: "PREMIUM",
      subTitle: "Hobby",
      price: "Rs.590",
      days: "366 Days",
      items: [
        "1 Listings Submission",
        "366 Days Expiration",
        "5 Aminities",
        "10 Photos",
        "Unlimited Videos",
        "Featured Listing Not Available",
        "0 Featured Listing Submissions",
      ],
    },
    {
      title: "PRO",
      subTitle: "Expert",
      price: "Rs.1180",
      days: "366 Days",
      items: [
        "1 Listings Submission",
        "366 Days Expiration",
        "5 Aminities",
        "Unlimited Photos",
        "Unlimited Videos",
        "Featured Listing Not Available",
        "0 Featured Listing Submissions",
      ],
    },
    {
      title: "UNLIMITED",
      subTitle: "Enteprise",
      price: "Rs.1770",
      days: "366 Days",
      items: [
        "Unlimited Listings Submission",
        "366 Days Expiration",
        "Unlimited Aminities",
        "Unlimited Photos",
        "Unlimited Videos",
        "Featured Listing  Available",
        "1 Featured Listing Submissions",
      ],
    },
  ];
  return (
    // <section>
    //   <div className="container max-w-full mx-auto py-24 px-6">
    //     <h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
    //       Our Packages
    //     </h1>

    //     <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

    //     <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
    //       <div className="relative  flex flex-col md:flex-row items-center">

    //         {list.map((item , index) => {
    //           return (
    //             <div key={index} className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-0 bg-white rounded-lg hover:shadow-xl hover:z-10">
    //               <div className="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
    //                 {item.title}
    //               </div>
    //               <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
    //                 <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
    //                   {item.subTitle}
    //                 </h1>
    //                 <h2 className="text-sm text-blue-500 text-center pb-6">
    //                   <span className="text-3xl">{item.price}</span>
    //                 </h2>
    //               </div>
    //               <div className="flex pl-12 justify-start sm:justify-start mt-3">
    //                 <ul>
    //                   {item.items.map((ele,i) => {
    //                     return (

    //                         <li key={i} className="flex items-center">
    //                           <div className="rounded-full p-2 fill-current text-green-700">
    //                             <svg
    //                               className="w-6 h-6 align-middle text-blue-600"
    //                               width="24"
    //                               height="24"
    //                               viewBox="0 0 24 24"
    //                               fill="none"
    //                               stroke="currentColor"
    //                               strokeWidth="2"
    //                               strokeLinecap="round"
    //                               strokeLinejoin="round"
    //                             >
    //                               <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    //                               <polyline points="22 4 12 14.01 9 11.01"></polyline>
    //                             </svg>
    //                           </div>
    //                           <span className="text-gray-700 text-lg ml-3">
    //                             {ele}
    //                           </span>
    //                         </li>

    //                     );
    //                   })}
    //                 </ul>
    //               </div>

    //               <div className=" flex items-center p-8  uppercase">
    //                 <button
    //                   className="mt-3 text-lg font-semibold
    //       bg-blue-300 w-full text-white rounded-lg
    //       px-6 py-3 block shadow-xl hover:bg-blue-600"
    //                 >
    //                   Select
    //                 </button>
    //               </div>
    //             </div>
    //           );
    //         })}

    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="flex items-center bg-gray-100 lg:h-screen font-poppins dark:bg-gray-900 ">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0 md:px-6">
        <h2 className="mb-4 text-3xl font-bold text-center text-gray-800 md:text-5xl dark:text-gray-400">
          Business Plan for bright future
        </h2>
        <p className="mb-6 text-lg font-medium text-center text-gray-500 md:text-xl dark:text-gray-400">
          Lorem ipsum dor amet ispicious
        </p>
        <div className="flex flex-wrap justify-center pt-8 -mx-3">
          <div className="w-full px-3 mb-14 lg:px-2 md:w-1/2 lg:w-1/3 ">
            <div className="flex flex-col border-b-4 border-blue-400 shadow-md rounded-2xl dark:border-gray-800 dark:bg-gray-800 bg-gray-50">
              <div className="relative flex justify-center">
                <div className="absolute top-0 z-10 flex items-center justify-center -mt-7 ">
                  <h2 className="px-8 py-2 text-xl font-semibold tracking-wide text-center text-gray-200 bg-blue-800 rounded-full lg:text-xl dark:bg-gray-700 dark:text-gray-300">
                    Basic
                  </h2>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 pb-2 border-b border-blue-300 dark:border-gray-600 pt-7">
                {/* <div className="flex items-center dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-blue-700 dark:text-gray-400 bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                    ></path>
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                  </svg>
                  <span className="mr-2 text-2xl font-semibold">06 </span>Users
                </div> */}
                <div className="text-2xl font-bold dark:text-gray-300">
                  <div className="">
                    <span className="text-2xl font-medium text-gray-700 dark:text-gray-300">
                      Rs.590
                    </span>
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                      /Year
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-center py-2">
              <ul className="mt-6 ">
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>1 Listings Submission</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>365 Days Expiration</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>5 Aminities</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>10 Photos</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>Unlimited Videos</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>Feature Listing Not Available</span>
                  </li>
                  <li className="flex items-center font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>0 Feature Listing</span>
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <a
                  href="#"
                  className="inline-block w-full py-2 font-medium text-center text-blue-600 border border-blue-600 rounded-full hover:bg-blue-700 hover:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:hover:text-gray-300 dark:text-gray-400"
                >
                  Buy Now{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-3 mb-14 lg:px-2 md:w-1/2 lg:w-1/3 ">
            <div className="flex flex-col bg-blue-100 border-b-4 border-blue-700 shadow-md dark:border-gray-800 rounded-2xl dark:bg-gray-800">
              <div className="relative flex justify-center">
                <div className="absolute top-0 z-10 flex items-center justify-center -mt-7 ">
                  <h2 className="px-8 py-2 text-xl font-semibold tracking-wide text-center text-gray-200 bg-blue-800 rounded-full lg:text-xl dark:bg-gray-700 dark:text-gray-300">
                    Premium
                  </h2>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 pb-2 border-b border-blue-300 pt-7 dark:border-gray-600">
                {/* <div className="flex items-center dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-blue-700 dark:text-gray-400 bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                    ></path>
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                  </svg>
                  <span className="mr-2 text-2xl font-semibold">25 </span>Users
                </div> */}
                <div className="">
                  <span className="text-2xl font-medium text-gray-700 dark:text-gray-300">
                  Rs.1180
                  </span>
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                    /Year
                  </span>
                </div>
              </div>
              <div className="self-center py-2">
              <ul className="mt-6 ">
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>1 Listings Submission</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>365 Days Expiration</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>5 Aminities</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>Unlimited Photos</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>Unlimited Videos</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>Feature Listing Not Available</span>
                  </li>
                  <li className="flex items-center font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>0 Feature Listing</span>
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <a
                  href="#"
                  className="inline-block w-full py-2 font-medium text-center text-blue-600 border border-blue-600 rounded-full hover:bg-blue-700 hover:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:hover:text-gray-300 dark:text-gray-400"
                >
                  Buy Now{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-3 mb-14 lg:px-2 md:w-1/2 lg:w-1/3 ">
            <div className="flex flex-col border-b-4 border-blue-400 shadow-md rounded-2xl dark:border-gray-800 dark:bg-gray-800 bg-gray-50">
              <div className="relative flex justify-center">
                <div className="absolute top-0 z-10 flex items-center justify-center -mt-7 ">
                  <h2 className="px-8 py-2 text-xl font-semibold tracking-wide text-center text-gray-200 bg-blue-800 rounded-full lg:text-xl dark:bg-gray-700 dark:text-gray-300">
                    Ultimate
                  </h2>
                </div>
              </div>
              <div className="flex  px-4 pb-2 border-b border-blue-300 pt-7 dark:border-gray-600">
                {/* <div className="flex items-center dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-blue-700 dark:text-gray-400 bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                    ></path>
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                  </svg>
                  <span className="mr-2 text-2xl font-semibold">45 </span>Users
                </div> */}
                <div className="">
                  <span className="text-2xl font-medium text-gray-700 dark:text-gray-300">
                    Rs.1770
                  </span>
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                    /Year
                  </span>
                </div>
              </div>
              <div className="self-center py-2">
              <ul className="mt-6 ">
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>1 Listings Submission</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>365 Days Expiration</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>5 Aminities</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>Unlimited Photos</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>Unlimited Videos</span>
                  </li>
                  <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>Feature Listing Available</span>
                  </li>
                  <li className="flex items-center font-medium text-gray-500 dark:text-gray-400">
                    <a href="#" className="mr-2 text-blue-900 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </a>
                    <span>1 Feature Listing</span>
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <a
                  href="#"
                  className="inline-block w-full py-2 font-medium text-center text-blue-600 border border-blue-600 rounded-full hover:bg-blue-700 hover:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:hover:text-gray-300 dark:text-gray-400"
                >
                  Buy Now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
