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
        "Featured Listing Not Available",
        "1 Featured Listing Submissions",
      ],
    },
  ];
  return (
    <section>
      <div className="container max-w-full mx-auto py-24 px-6">
        <h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
          Our Packages
        </h1>
      
        <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

        <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
          <div className="relative block flex flex-col md:flex-row items-center">
            
            
     
            {list.map((item , index) => {
              return (
                <div key={index} className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-0 bg-white rounded-lg hover:shadow-xl hover:z-10">
                  <div className="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
                    {item.title}
                  </div>
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      {item.subTitle}
                    </h1>
                    <h2 className="text-sm text-blue-500 text-center pb-6">
                      <span className="text-3xl">{item.price}</span>
                    </h2>
                  </div>
                  <div className="flex pl-12 justify-start sm:justify-start mt-3">
                    <ul>
                      {item.items.map((ele,i) => {
                        return (
                       
                            <li key={i} className="flex items-center">
                              <div className="rounded-full p-2 fill-current text-green-700">
                                <svg
                                  className="w-6 h-6 align-middle text-blue-600"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                              </div>
                              <span className="text-gray-700 text-lg ml-3">
                                {ele}
                              </span>
                            </li>
                     
                        );
                      })}
                    </ul>
                  </div>

                  <div className=" flex items-center p-8  uppercase">
                    <button
                      className="mt-3 text-lg font-semibold 
          bg-blue-300 w-full text-white rounded-lg 
          px-6 py-3 block shadow-xl hover:bg-blue-600"
                    >
                      Select
                    </button>
                  </div>
                </div>
              );
            })}

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
