import { useState } from 'react';
import { PhotographIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setIsAnimating(true);
  }

  const handleTransitionEnd = () => {
    if (isAnimating) {
      setIsVisible(false);
    }
  }
  if (!isVisible) {
    return null;
  }

  return (
    <div className={`bg-blue-600 transition-all duration-750 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`} onTransitionEnd={handleTransitionEnd}>
      <div className={`max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8`}>
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-blue-800">
              <PhotographIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Explore our painting portfolio!</span>
              <span className="hidden md:inline">Take A Journey Through Our Successful Coating Projects & CALL +44 7385 723318 Today!</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <Link href="/portfolio">
              <div className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium cursor-pointer text-blue-600 bg-white hover:bg-blue-50">
                View Projects
              </div>
            </Link>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={handleClose}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
