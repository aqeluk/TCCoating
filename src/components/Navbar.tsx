import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: "Residential", href: "/residential" },
  { name: "Wall Repair", href: "/commercial" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about-us" },
];

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  }

  return (
    <Popover>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <img
                  className="h-20 w-auto sm:h-20"
                  src="/logo.jpg"
                  alt="TC Coating"
                />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="font-medium text-blue-400 hover:text-blue-300 whitespace-nowrap bg-gray-200 md:bg-transparent md:ml-8 md:py-2 md:rounded-full"
            >
            Contact Us
            </Link>
          </div>
        </nav>
      </div>
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link href='/'>
                <img
                  className="h-8 w-auto"
                  src="/logo.jpg"
                  alt="TC Coating Logo"
                />
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    {item.name}
                </Link>
              ))}
            </div>
            <Link href="/contact-us" className="block w-full px-5 py-3 text-center font-medium text-blue-300 bg-black hover:bg-gray-100">
                Get in Touch
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
