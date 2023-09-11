import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import NavBanner from "./NavBanner";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";

import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
  XMarkIcon
} from "@heroicons/react/20/solid";
import { auth } from "../../firebase";

const callsToAction = [
  { name: "Account", icon: Cog6ToothIcon },
  { name: "Sign Out", icon: ArrowLeftOnRectangleIcon },
];

const Navbar = ({ user }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
    return () => {};
  }, [location]);
  const HandleProfileClick = (type) => {
    if (type === "Account") {
    } else {
      signOut(auth)
        .then(() => {
          // User has signed out.
          localStorage.clear();
        })
        .catch((error) => {
          console.error("Error signing out:", error);
        });
    }
  };
  return (
    <>
      <NavBanner />
      <header className="bg-white shadow-2xl">
        <nav
          className="mx-auto flex max-w-7xl  items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="http://techiedom.com/addspay/uploads/website-images/logo-2023-08-18-12-12-06-6341.png"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link
              to="/"
              className={
                "text-sm font-semibold leading-6 text-gray-900" +
                (url === "/" ? " text-blue-700" : "")
              }
            >
              Home
            </Link>
            <Link
              to="/listing"
              className={
                "text-sm font-semibold leading-6 text-gray-900" +
                (url === "/listing" ? " text-blue-700" : "")
              }
            >
              Listings
            </Link>
            <Link
              to="/pricing"
              className={
                "text-sm font-semibold leading-6 text-gray-900" +
                (url === "/pricing" ? " text-blue-700" : "")
              }
            >
              Pricing Plan
            </Link>

            <Link
              to="/about"
              className={
                "text-sm font-semibold leading-6 text-gray-900" +
                (url === "/about" ? " text-blue-700" : "")
              }
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={
                "text-sm font-semibold leading-6 text-gray-900" +
                (url === "/contact" ? " text-blue-700" : "")
              }
            >
              Contact us
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {user == null ? (
              <Link
                to="/login"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log In <span aria-hidden="true">&rarr;</span>
              </Link>
            ) : (
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  <img
                    src={user.photoURL}
                    className="h-8 w-8 rounded-full "
                    alt=""
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -right-2/4 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      <div className="flex flex-wrap mb-1">
                        <div className="px-4 ">
                          <img
                            className="object-cover w-20 h-20 p-2 rounded-full"
                            alt=""
                            src={user.photoURL}
                          />
                        </div>
                        <div className="flex-grow px-4">
                          <a href="/#" className="text-black ">
                            <span className="mr-2 text-lg font-medium dark:text-gray-400">
                              {user.displayName}
                            </span>
                          </a>
                          <div className="flex items-center my-1 text-xs text-gray-600 dark:text-gray-400">
                            <span className="font-normal text-gray-600 dark:text-gray-400">
                              {user.email}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          onClick={() => {
                            HandleProfileClick(item.name);
                          }}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-blue-100"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            )}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="http://techiedom.com/addspay/uploads/website-images/logo-2023-08-18-12-12-06-6341.png"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="/"
                    className={
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" +
                      (url === "/" ? " text-blue-700" : "")
                    }
                  >
                    Home
                  </Link>
                  <Link
                    to="/listing"
                    className={
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" +
                      (url === "/listing" ? " text-blue-700" : "")
                    }
                  >
                    Listings
                  </Link>
                  <Link
                    to="/pricing"
                    className={
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" +
                      (url === "/pricing" ? " text-blue-700" : "")
                    }
                  >
                    Pricing Plan
                  </Link>

                  <Link
                    to="/about"
                    className={
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" +
                      (url === "/about" ? " text-blue-700" : "")
                    }
                  >
                    About Us
                  </Link>

                  <Link
                    to="/contact"
                    className={
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" +
                      (url === "/contact" ? " text-blue-700" : "")
                    }
                  >
                    Contact us
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Navbar;
