import React from "react";

// const Card = ({ title, width }) => (
//   <div className={`bg-gray-300 p-4 ${width}`}>
//     <h2 className="text-lg font-semibold">{title}</h2>
//     {/* Add content for each card */}
//   </div>
// );

const BussinessDetail = () => {
  return (
    <div className="pb-24 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[70%,1fr]  gap-6  pt-9 pb-7">
          <div>
            <div className="p-4 bg-white ">
              <h2 className="text-2xl font-semibold mb-7 font-poppins ">
                13 ways budget calculators are completely overrated guide
              </h2>
              <img
                src="https://i.postimg.cc/Y049f9k2/pexels-zachary-debottis-3656773.jpg"
                alt=""
                className="object-cover w-full h-96"
              />
              <div className="pt-5 pb-5 font-poppins ">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
                <blockquote className="p-6 my-4 italic bg-gray-100 border-l-4 border-blue-500 dark:border-blue-400  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </blockquote>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <br />
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
            <div className="px-4">
              <h2 className="mt-4 text-2xl font-semibold text-gray-900  font-poppins">
                Products
              </h2>
              <div className="w-16 mb-3 border-b-2 border-blue-500 dark:border-gray-400 inset-px"></div>
              {/* <div className="flex flex-wrap gap-2 my-4 font-poppins ">
                        <a className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-300 rounded btn btn-sm hover:bg-blue-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-gray-900 hover:text-white"
                            href="/#">
                            Corporate</a>
                        <a className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-300 rounded btn btn-sm hover:bg-blue-500 hover:text-white dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-gray-900"
                            href="/#">
                            Business</a>
                        <a className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-300 rounded btn btn-sm hover:bg-blue-500 hover:text-white dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-gray-900"
                            href="/#">
                            Field</a>
                    </div> */}
              <div class="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div class="mt-56 bg-white rounded shadow dark:bg-gray-700">
                  <div class="relative z-20 p-6 group">
                    <div class="relative block h-64 mb-4 -mt-56 overflow-hidden rounded -top-full ">
                      <img
                        class="object-cover w-full h-full transition-all group-hover:scale-110"
                        src="https://i.postimg.cc/x8LtrkfV/kenny-eliason-HIz-Gn9-FZDFU-unsplash.jpg"
                        alt=""
                      />
                      <div class="absolute flex flex-col top-4 right-4">
                        <a href="/#" class="flex items-center">
                          <div class="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded dark:bg-gray-700 dark:text-white group-hover:translate-x-0 wishlist hover:bg-blue-200 dark:hover:bg-blue-600 group">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="/#" class="flex items-center">
                          <div class="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded dark:bg-gray-700 dark:text-white group-hover:translate-x-0 wishlist hover:bg-blue-200 dark:hover:bg-blue-600 group">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-cart2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <a href="/#">
                      <h2 class="mb-2 text-xl font-bold text-black dark:text-white">
                        1800X Zoom Level Nikon Lense
                      </h2>
                    </a>
                    <p class="mb-3 text-lg font-bold text-blue-500 dark:text-blue-300 ">
                      <span>$150.00</span>
                      <span class="text-xs font-semibold text-gray-400 line-through ">
                        $200.00
                      </span>
                    </p>
                    <div class="flex gap-1 text-orange-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-4 mb-4 bg-white ">
              <div>
                <h2 className="text-xl font-semibold leading-5 tracking-tight text-gray-900  lg:text-lg">
                  Popular Posts
                </h2>
                <div className="mb-5 border-b-2 border-blue-400 w-28 inset-px "></div>
                <div className="gap-4 pb-3 my-4 border-b dark:border-gray-500 lg:flex ">
                  <div>
                    <a
                      href="# "
                      className="inline-block mt-2 text-xs font-semibold uppercase  "
                    >
                      biography
                    </a>
                    <h2 className="text-lg font-semibold leading-5 tracking-tight text-gray-900  lg:text-xl ">
                      Europe Tour Doesn’t Have To Be Hard
                    </h2>
                    <p className="my-2 text-sm text-gray-700 uppercase dark:text-gray-500">
                      november 12, 2021
                    </p>
                  </div>
                  <div className="w-full h-96 lg:h-32 lg:w-44">
                    <img
                      className="object-cover w-full h-full "
                      src="https://i.postimg.cc/J0czqNhX/pexels-pixabay-2097.jpg "
                      alt=" "
                    />
                  </div>
                </div>
                <div className="gap-4 pb-3 my-4 border-b lg:flex dark:border-gray-500">
                  <div>
                    <a
                      href="# "
                      className="inline-block mt-2 text-xs font-semibold uppercase  "
                    >
                      gossip
                    </a>
                    <h2 className="text-lg font-semibold leading-5 tracking-tight text-gray-900  lg:text-xl ">
                      Europe Tour Doesn’t Have To Be Hard
                    </h2>
                    <p className="my-2 text-sm text-gray-700 uppercase dark:text-gray-500">
                      november 12, 2021
                    </p>
                  </div>
                  <div className="w-full h-96 lg:h-32 lg:w-44">
                    <img
                      className="object-cover w-full h-full "
                      src="https://i.postimg.cc/GmM9VxxJ/pexels-pavel-danilyuk-8381916.jpg "
                      alt=" "
                    />
                  </div>
                </div>
                <div className="pb-3 my-4 border-b lg:gap-4 lg:flex dark:border-gray-500">
                  <div>
                    <a
                      href="# "
                      className="inline-block mt-2 text-xs font-semibold uppercase  "
                    >
                      beauty
                    </a>
                    <h2 className="text-lg font-semibold leading-5 tracking-tight text-gray-900  lg:text-xl ">
                      Europe Tour Doesn’t Have To Be Hard
                    </h2>
                    <p className="my-2 text-sm text-gray-700 uppercase ">
                      november 12, 2021
                    </p>
                  </div>
                  <div className="w-full h-96 lg:h-32 lg:w-44">
                    <img
                      className="object-cover w-full h-full "
                      src="https://i.postimg.cc/KYSTYzB1/pexels-pixabay-356056.jpg "
                      alt=" "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 mb-4 bg-white border rounded shadow  dark:border-gray-900">
              <h2 className="py-2 my-2 text-xl font-semibold leading-5 tracking-tight text-gray-900 font-montserrat lg:text-3xl  lg:mt-3 ">
                Join Our Newsletter
              </h2>
              <input
                type="email "
                name="email "
                id="email "
                autocomplete="email "
                required=""
                className="w-full px-2 py-2 border border-gray-300 rounded  focus:outline-none focus:border-indigo-500 focus-ring-1 focus:ring-indigo-500 "
              />
              <button className="flex justify-center w-full px-4 py-3 mt-4 text-sm font-semibold text-white uppercase bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ">
                Subscribe
              </button>
              <p className="mt-2 text-gray-700 ">
                Join our email list to get new updates and inspirations for
                free.
              </p>
            </div>
            <div>
              <div className="p-4 bg-white ">
                <h2 className="py-2 text-xl font-semibold leading-5 tracking-tight text-gray-900  font-montserrat lg:text-lg ">
                  Follow Us
                </h2>
                <div className="w-24 mb-4 border-b-2 border-blue-400 inset-px "></div>
                <ul className="flex flex-wrap ">
                  <li className="w-1/2 h-32 p-1 social-box">
                    <a
                      href="/#"
                      className="flex flex-col items-center justify-center w-full h-full text-white transition-transform duration-200 ease-in transform bg-blue-800 bg-silver-darker rd-br-full rd-tl-full hover:scale-105"
                    >
                      <svg
                        enable-background="new 0 0 56.693 56.693"
                        height="56.693px"
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 56.693 56.693"
                        className="w-6 h-6 fill-gray-100"
                        width="56.693px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"></path>
                      </svg>
                      <div className="mt-2">Facebook</div>
                    </a>
                  </li>
                  <li className="w-1/2 h-32 p-1 social-box">
                    <a
                      href="
                        "
                      className="flex flex-col items-center justify-center w-full h-full text-white transition-transform duration-200 ease-in transform bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105"
                    >
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-6 h-6 bi bi-instagram"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                        </svg>
                      </div>
                      <div className="mt-2">Instagram</div>
                    </a>
                  </li>
                  <li className="w-1/2 h-32 p-1 social-box">
                    <a
                      href="#
                        "
                      className="flex flex-col items-center justify-center w-full h-full text-white transition-transform duration-200 ease-in transform bg-red-600 bg-silver-darker rd-tr-full rd-bl-full hover:scale-105"
                    >
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-youtube"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                        </svg>
                      </div>
                      <div className="mt-2">Youtube</div>
                    </a>
                  </li>
                  <li className="w-1/2 h-32 p-1 social-box">
                    <a
                      href="#
                        "
                      className="flex flex-col items-center justify-center w-full h-full text-white transition-transform duration-200 ease-in transform bg-sky-600 hover:scale-105"
                    >
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-6 h-6 bi bi-linkedin"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                      </div>
                      <div className="mt-2">Linkedin</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessDetail;
