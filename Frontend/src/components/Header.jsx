import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Home", href: "/home", current: false },
  { name: "Courses", href: "#", current: false },
  { name: "Teachers", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <Disclosure
      as="nav"
      className="border-b-2 bg-gray-100 shadow-lg fixed w-full dark:border-gray-500 dark:bg-gray-700"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-buttonColor hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex items-center">
                  <img
                    src="../public/images/logo.png"
                    className="h-10 w-auto"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      // <a
                      //   key={item.name}
                      //   href={item.href}
                      //   className={classNames(
                      //     item.current
                      //       ? "bg-buttonColor text-navbarTextColor hover:text-gray-800"
                      //       : "text-navbarTextColor hover:bg-buttonColor hover:text-gray-800",
                      //     "rounded-md px-3 py-2 text-sm font-medium"
                      //   )}
                      //   aria-current={item.current ? "page" : undefined}
                      // >
                      //   {item.name}
                      // </a>
                      <Link
                        to={ item.href}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-buttonColor text-navbarTextColor hover:text-gray-800 dark:text-slate-100"
                            : "text-navbarTextColor hover:bg-buttonColor hover:text-gray-800 dark:text-slate-100",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                <div className="pt-2 pr-2 ">
                  <DarkMode />
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      
                      <div className="relative w-10 h-10 overflow-hidden bg-buttonColor rounded-full dark:bg-buttonColor">
                        
                      <svg className="absolute w-12 h-12 text-gray-100 -left-1" fill="currentColor" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
                          <path    fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"    clipRule="evenodd"></path>
                      </svg>

                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          //   <a
                          //     href="./Login"
                          //     className={classNames(
                          //       active ? "bg-gray-100" : "",
                          //       "block px-4 py-2 text-sm text-gray-700"
                          //     )}
                          //   >
                          //     Login
                          //   </a>
                          <Link
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            to="/login"
                          >
                            Login
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                            // <a
                            //   href="#"
                            //   className={classNames(
                            //     active ? "bg-gray-100" : "",
                            //     "block px-4 py-2 text-sm text-gray-700"
                            //   )}
                            // >
                            //   Register
                            // </a>
                          <Link
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            to="/signup"
                          >
                            Sign up
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-buttonColor text-gray-800 hover:text-gray-100"
                      : "text-gray-800 hover:bg-buttonColor hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
