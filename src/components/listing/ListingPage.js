// import React from 'react'
import ListingCard from "./ListingCard";

// const ListingPage = () => {
//   return (
// <>
// <ListingCard></ListingCard>
//     <ListingCard></ListingCard>
//     <ListingCard></ListingCard>
//     <ListingCard></ListingCard>
//     <ListingCard></ListingCard>
// </>
//     )
// }

// export default ListingPage

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import SearchBar from "../comman/SearchBar";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
// const subCategories = [
//   { name: "Totes", href: "#" },
//   { name: "Backpacks", href: "#" },
//   { name: "Travel Bags", href: "#" },
//   { name: "Hip Bags", href: "#" },
//   { name: "Laptop Sleeves", href: "#" },
// ];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { label: "Accepts Cash", value: "White", checked: false },
      { label: "Accepts Credit Cards", value: "Beige", checked: false },
      { label: "Accepts Online Payments", value: "Blue", checked: true },
      { label: "Delivery", value: "Brown", checked: false },
      { label: "Parking", value: "Green", checked: false },
      //   { value: "purple", label: "Purple", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ListingPage = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    // <>
    //   <SearchBar />
    //   <section>
    //     <div className="py-20 ">
    //       <div className="bg-white">
    //         {/* Mobile filter dialog */}
    //         <Transition.Root show={mobileFiltersOpen} as={Fragment}>
    //           <Dialog
    //             as="div"
    //             className="relative z-40 lg:hidden"
    //             onClose={setMobileFiltersOpen}
    //           >
    //             <Transition.Child
    //               as={Fragment}
    //               enter="transition-opacity ease-linear duration-300"
    //               enterFrom="opacity-0"
    //               enterTo="opacity-100"
    //               leave="transition-opacity ease-linear duration-300"
    //               leaveFrom="opacity-100"
    //               leaveTo="opacity-0"
    //             >
    //               <div className="fixed inset-0 bg-black bg-opacity-25" />
    //             </Transition.Child>

    //             <div className="fixed inset-0 z-40 flex">
    //               <Transition.Child
    //                 as={Fragment}
    //                 enter="transition ease-in-out duration-300 transform"
    //                 enterFrom="translate-x-full"
    //                 enterTo="translate-x-0"
    //                 leave="transition ease-in-out duration-300 transform"
    //                 leaveFrom="translate-x-0"
    //                 leaveTo="translate-x-full"
    //               >
    //                 <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
    //                   <div className="flex items-center justify-between px-4">
    //                     <h2 className="text-lg font-medium text-gray-900">
    //                       Filters
    //                     </h2>
    //                     <button
    //                       type="button"
    //                       className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
    //                       onClick={() => setMobileFiltersOpen(false)}
    //                     >
    //                       <span className="sr-only">Close menu</span>
    //                       <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    //                     </button>
    //                   </div>

    //                   {/* Filters */}
    //                   <form className="mt-4 border-t ">
    //                     <h3 className="sr-only">Categories</h3>

    //                     {filters.map((section) => (
    //                       <Disclosure
    //                         as="div"
    //                         key={section.id}
    //                         className="border-t  px-4 py-6"
    //                       >
    //                         {({ open = true }) => (
    //                           <>
    //                             <h3 className="-mx-2 -my-3 flow-root">
    //                               <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
    //                                 <span className="font-medium text-gray-900">
    //                                   {section.name}
    //                                 </span>
    //                                 <span className="ml-6 flex items-center">
    //                                   {open ? (
    //                                     <MinusIcon
    //                                       className="h-5 w-5"
    //                                       aria-hidden="true"
    //                                     />
    //                                   ) : (
    //                                     <PlusIcon
    //                                       className="h-5 w-5"
    //                                       aria-hidden="true"
    //                                     />
    //                                   )}
    //                                 </span>
    //                               </Disclosure.Button>
    //                             </h3>
    //                             <Disclosure.Panel className="pt-6">
    //                               <div className="space-y-6">
    //                                 {section.options.map((option, optionIdx) => (
    //                                   <div
    //                                     key={option.value}
    //                                     className="flex items-center"
    //                                   >
    //                                     <input
    //                                       id={`filter-mobile-${section.id}-${optionIdx}`}
    //                                       name={`${section.id}[]`}
    //                                       defaultValue={option.value}
    //                                       type="checkbox"
    //                                       defaultChecked={option.checked}
    //                                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    //                                     />
    //                                     <label
    //                                       htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
    //                                       className="ml-3 min-w-0 flex-1 text-gray-500"
    //                                     >
    //                                       {option.label}
    //                                     </label>
    //                                   </div>
    //                                 ))}
    //                               </div>
    //                             </Disclosure.Panel>
    //                           </>
    //                         )}
    //                       </Disclosure>
    //                     ))}
    //                   </form>
    //                 </Dialog.Panel>
    //               </Transition.Child>
    //             </div>
    //           </Dialog>
    //         </Transition.Root>

    //         <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //           <div className="flex items-baseline justify-between border-b  pb-6 ">
    //             <h1 className="text-4xl font-bold tracking-tight text-gray-900">
    //               Listing
    //             </h1>

    //             <div className="flex items-center">
    //               <Menu as="div" className="relative inline-block text-left">
    //                 <div>
    //                   <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
    //                     Sort
    //                     <ChevronDownIcon
    //                       className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
    //                       aria-hidden="true"
    //                     />
    //                   </Menu.Button>
    //                 </div>

    //                 <Transition
    //                   as={Fragment}
    //                   enter="transition ease-out duration-100"
    //                   enterFrom="transform opacity-0 scale-95"
    //                   enterTo="transform opacity-100 scale-100"
    //                   leave="transition ease-in duration-75"
    //                   leaveFrom="transform opacity-100 scale-100"
    //                   leaveTo="transform opacity-0 scale-95"
    //                 >
    //                   <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
    //                     <div className="py-1">
    //                       {sortOptions.map((option) => (
    //                         <Menu.Item key={option.name}>
    //                           {({ active }) => (
    //                             <a
    //                               href={option.href}
    //                               className={classNames(
    //                                 option.current
    //                                   ? "font-medium text-gray-900"
    //                                   : "text-gray-500",
    //                                 active ? "bg-gray-100" : "",
    //                                 "block px-4 py-2 text-sm"
    //                               )}
    //                             >
    //                               {option.name}
    //                             </a>
    //                           )}
    //                         </Menu.Item>
    //                       ))}
    //                     </div>
    //                   </Menu.Items>
    //                 </Transition>
    //               </Menu>

    //               <button
    //                 type="button"
    //                 className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
    //               >
    //                 <span className="sr-only">View grid</span>
    //                 <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
    //               </button>
    //               <button
    //                 type="button"
    //                 className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
    //                 onClick={() => setMobileFiltersOpen(true)}
    //               >
    //                 <span className="sr-only">Filters</span>
    //                 <FunnelIcon className="h-5 w-5" aria-hidden="true" />
    //               </button>
    //             </div>
    //           </div>

    //           <section aria-labelledby="products-heading" className="pb-24 pt-6">
    //             <h2 id="products-heading" className="sr-only">
    //               Products
    //             </h2>

    //             <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
    //               {/* Filters */}
    //               <form className="hidden lg:block">
    //                 {/* <h3 className="sr-only">Categories</h3>
    //             <ul
    //               role="list"
    //               className="space-y-4 border-b  pb-6 text-sm font-medium text-gray-900"
    //             >
    //               {subCategories.map((category) => (
    //                 <li key={category.name}>
    //                   <a href={category.href}>{category.name}</a>
    //                 </li>
    //               ))}
    //             </ul> */}

    //                 {filters.map((section) => (
    //                   <Disclosure
    //                     as="div"
    //                     key={section.id}
    //                     className="border-b  py-6"
    //                   >
    //                     {({ open = true }) => (
    //                       <>
    //                         <h3 className="-my-3 flow-root">
    //                           <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
    //                             <span className="font-medium text-gray-900">
    //                               {section.name}
    //                             </span>
    //                             <span className="ml-6 flex items-center">
    //                               {open ? (
    //                                 <MinusIcon
    //                                   className="h-5 w-5"
    //                                   aria-hidden="true"
    //                                 />
    //                               ) : (
    //                                 <PlusIcon
    //                                   className="h-5 w-5"
    //                                   aria-hidden="true"
    //                                 />
    //                               )}
    //                             </span>
    //                           </Disclosure.Button>
    //                         </h3>
    //                         <Disclosure.Panel className="pt-6">
    //                           <div className="space-y-4">
    //                             {section.options.map((option, optionIdx) => (
    //                               <div
    //                                 key={option.value}
    //                                 className="flex items-center"
    //                               >
    //                                 <input
    //                                   id={`filter-${section.id}-${optionIdx}`}
    //                                   name={`${section.id}[]`}
    //                                   defaultValue={option.value}
    //                                   type="checkbox"
    //                                   defaultChecked={option.checked}
    //                                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    //                                 />
    //                                 <label
    //                                   htmlFor={`filter-${section.id}-${optionIdx}`}
    //                                   className="ml-3 text-sm text-gray-600"
    //                                 >
    //                                   {option.label}
    //                                 </label>
    //                               </div>
    //                             ))}
    //                           </div>
    //                         </Disclosure.Panel>
    //                       </>
    //                     )}
    //                   </Disclosure>
    //                 ))}
    //               </form>

    //               {/* Product grid */}
    //               <div className="lg:col-span-3">
    //                 {/* Your content */}

    //                 <ListingCard></ListingCard>
    //                 <ListingCard></ListingCard>
    //                 <ListingCard></ListingCard>
    //                 <ListingCard></ListingCard>
    //                 <ListingCard></ListingCard>
    //               </div>
    //             </div>
    //           </section>
    //         </main>
    //       </div>
    //     </div>
    //   </section>
    // </>
    <section className="py-20 bg-gray-50 font-poppins ">
      <div className="px-4 py-4 mx-auto max-w-7xl lg:py-6 md:px-6">
        <div className="flex flex-wrap mb-24 -mx-3">
          <div className="w-full pr-2 lg:w-1/4 lg:block">
            <div className="p-4 mb-5 bg-white border   ">
              <h2 className="text-2xl font-bold "> Categories</h2>
              <div className="w-16 pb-2 mb-6 border-b border-rose-600 "></div>
              <ul>
                <li className="mb-4">
                  <label for="" className="flex items-center  ">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg">Biscuits</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label for="" className="flex items-center  ">
                    <input type="checkbox" className="w-4 h-4 mr-2 " />
                    <span className="text-lg">Fruits</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label for="" className="flex items-center ">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg">Seafood</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label for="" className="flex items-center ">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg">Vegetables</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label for="" className="flex items-center ">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg">Frozen Foods &amp; Staples</span>
                  </label>
                </li>
              </ul>
              <a
                href="#"
                className="text-base font-medium text-blue-500 hover:underline dark:text-blue-400"
              >
                View More
              </a>
            </div>
            <div className="p-4 mb-5 bg-white border  ">
              <h2 className="text-2xl font-bold ">Product Status</h2>
              <div className="w-16 pb-2 mb-6 border-b border-rose-600 "></div>
              <ul>
                <li className="mb-4">
                  <label
                    for=""
                    className="flex items-center dark:text-gray-500"
                  >
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg ">In Stock</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label
                    for=""
                    className="flex items-center dark:text-gray-500"
                  >
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg ">On Sale</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="p-4 mb-5 bg-white border  ">
              <h2 className="text-2xl font-bold ">Brand</h2>
              <div className="w-16 pb-2 mb-6 border-b border-rose-600 "></div>
              <ul>
                <li className="mb-4">
                  <label
                    for=""
                    className="flex items-center dark:text-gray-500"
                  >
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg ">Apple</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label
                    for=""
                    className="flex items-center dark:text-gray-500"
                  >
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg ">Oreo</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label
                    for=""
                    className="flex items-center dark:text-gray-500"
                  >
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg ">Mango</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label
                    for=""
                    className="flex items-center dark:text-gray-500"
                  >
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg ">Nebico</span>
                  </label>
                </li>
              </ul>
              <a
                href="#"
                className="text-base font-medium text-blue-500 hover:underline dark:text-blue-400"
              >
                View More
              </a>
            </div>
            <div className="p-4 mb-5 bg-white border  ">
              <h2 className="text-2xl font-bold ">Price</h2>
              <div className="w-16 pb-2 mb-6 border-b border-rose-600 "></div>
              <div>
                <input
                  type="range"
                  className="w-full h-1 mb-4 bg-blue-100 rounded appearance-none cursor-pointer"
                  max="100"
                  value="50"
                />
                <div className="flex justify-between ">
                  <span className="inline-block text-lg font-bold text-blue-400 ">
                    $1
                  </span>
                  <span className="inline-block text-lg font-bold text-blue-400 ">
                    $500
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-3 lg:w-3/4">
            <div className="px-3 mb-4">
              <div className="items-center justify-between hidden px-3 py-2 bg-gray-100 md:flex ">
                <div className="flex">
                  <a
                    href="#"
                    className="inline-block h-full p-2 mr-3 border rounded-md  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-list"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-block h-full p-2 mr-3 border rounded-md  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-grid-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-block h-full p-2 mr-3 border rounded-md  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-grid-3x3-gap-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"></path>
                    </svg>
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <div className="pr-3 border-r border-gray-300">
                    <select
                      name=""
                      id=""
                      className="block w-40 text-base bg-gray-100 cursor-pointer  "
                    >
                      <option value="">Sort by latest</option>
                      <option value="">Sort by Popularity</option>
                      <option value="">Sort by Price</option>
                    </select>
                  </div>
                  <div className="flex items-center pl-3">
                    <p className="text-xs text-gray-400">Show</p>
                    <div className="px-2 py-2 text-xs text-gray-500 ">
                      <select
                        name=""
                        id=""
                        className="block text-base bg-gray-100 cursor-pointer w-11  "
                      >
                        <option value="">15</option>
                        <option value="">17</option>
                        <option value="">19</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center ">
              <ListingCard />
              {/* <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                <div className="border border-gray-300 ">
                  <div className="relative bg-gray-200">
                    <a href="#" className="">
                      <img
                        src="https://i.postimg.cc/hj6h6Vwv/pexels-artem-beliaikin-2292919.jpg"
                        alt=""
                        className="object-cover w-full h-56 mx-auto "
                      />
                    </a>
                  </div>
                  <div className="p-3 ">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-medium ">Product name</h3>
                      <ul className="flex">
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
                      </ul>
                    </div>
                    <p className="text-lg ">
                      <span className="text-green-600 dark:text-green-600">
                        $800.00
                      </span>
                    </p>
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
              </div> */}
              {/* <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
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
                      <ul className="flex">
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
                      </ul>
                    </div>
                    <p className="text-lg ">
                      <span className="text-green-600 dark:text-green-600">
                        $800.00
                      </span>
                    </p>
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
              </div> */}
              {/* <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                <div className="border border-gray-300 ">
                  <div className="relative bg-gray-200">
                    <a href="#" className="">
                      <img
                        src="https://i.postimg.cc/x1dZ1XSV/pexels-k-bra-do-u-10154821.jpg"
                        alt=""
                        className="object-cover w-full h-56 mx-auto "
                      />
                    </a>
                  </div>
                  <div className="p-3 ">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium ">Product name</h3>
                      <ul className="flex">
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
                      </ul>
                    </div>
                    <p className="text-lg ">
                      <span className="text-green-600 dark:text-green-600">
                        $800.00
                      </span>
                    </p>
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
              <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                <div className="border border-gray-300 ">
                  <div className="relative bg-gray-200">
                    <a href="#" className="">
                      <img
                        src="https://i.postimg.cc/Vk57c2jY/pexels-meruyert-gonullu-6152391.jpg"
                        alt=""
                        className="object-cover w-full h-56 mx-auto "
                      />
                    </a>
                  </div>
                  <div className="p-3 ">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium ">Product name</h3>
                      <ul className="flex">
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
                      </ul>
                    </div>
                    <p className="text-lg ">
                      <span className="text-green-600 dark:text-green-600">
                        $800.00
                      </span>
                    </p>
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
              <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                <div className="border border-gray-300 ">
                  <div className="relative bg-gray-200">
                    <a href="#" className="">
                      <img
                        src="https://i.postimg.cc/Dfg5476v/pexels-michael-burrows-7129126.jpg"
                        alt=""
                        className="object-cover w-full h-56 mx-auto "
                      />
                    </a>
                  </div>
                  <div className="p-3 ">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium ">Product name</h3>
                      <ul className="flex">
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
                      </ul>
                    </div>
                    <p className="text-lg ">
                      <span className="text-green-600 dark:text-green-600">
                        $800.00
                      </span>
                    </p>
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
              <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                <div className="border border-gray-300 ">
                  <div className="relative bg-gray-200">
                    <a href="#" className="">
                      <img
                        src="https://i.postimg.cc/MKH0cVX5/pexels-pixabay-264636.jpg"
                        alt=""
                        className="object-cover w-full h-56 mx-auto "
                      />
                    </a>
                  </div>
                  <div className="p-3 ">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium ">Product name</h3>
                      <ul className="flex">
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
                      </ul>
                    </div>
                    <p className="text-lg ">
                      <span className="text-green-600 dark:text-green-600">
                        $800.00
                      </span>
                    </p>
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
              </div> */}
            </div>
            <div className="flex justify-end mt-6">
              <nav aria-label="page-navigation">
                <ul className="flex list-style-none">
                  <li className="page-item disabled ">
                    <a
                      href="#"
                      className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md  hover:text-gray-100 hover:bg-blue-600"
                    >
                      Previous
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 rounded-md text-gray-100 bg-blue-400"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300  dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3  "
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300  dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3 "
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300  dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md "
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ListingPage;
