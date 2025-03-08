import React, { useState } from "react";
import images from "@/constant/images";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div>
        <header className="bg-[#F8F9FA] border-b border-gray-200">
          <div className="mx-auto px-4 flex justify-between items-center py-3">
            {/* EC Logo */}
            <div>
              <img src={images.landingPage.ECLogo} alt="EC Logo" className="md:h-10 md:w-auto w-[32vw] h-6" />
            </div>

            {/* Mobile Menu Button - visible only on mobile/tablet */}
            <button 
              className="md:hidden flex items-center p-2 text-black"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Desktop Navigation - hidden on mobile */}
            <div className="hidden md:flex items-center justify-center">
              <nav>
                <ul className="flex space-x-3 lg:space-x-6">
                  <li className="text-xs lg:text-sm text-center font-bold">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Home
                    </a>
                  </li>
                  <li className="text-xs lg:text-sm text-center font-bold flex items-center gap-1">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      About Us
                    </a>
                    <div>
                      <img
                        src={images.landingPage.arrow_down}
                        alt="dropdown"
                        className="w-[1rem]"
                      />
                    </div>
                  </li>
                  <li className="text-xs lg:text-sm text-center font-bold">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Edge Fund
                    </a>
                  </li>
                  <li className="text-xs lg:text-sm text-center font-bold flex items-center gap-1">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Edge Impact
                    </a>
                    <div>
                      <img
                        src={images.landingPage.arrow_down}
                        alt="dropdown"
                        className="w-[1rem]"
                      />
                    </div>
                  </li>
                  <li className="text-xs lg:text-sm text-center font-bold">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Institutional
                    </a>
                  </li>
                  <li className="text-xs lg:text-sm text-center font-bold flex items-center gap-1">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Contact
                    </a>
                    <div>
                      <img
                        src={images.landingPage.arrow_down}
                        alt="dropdown"
                        className="w-[1rem]"
                      />
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Buttons - responsive design */}
            <div className="hidden md:flex items-center space-x-2 bg-[#D4DFDF40] border-2 border-white rounded-2xl gap-2 lg:gap-5 p-2 lg:p-3">
              <div className="cursor-pointer">
                <select
                  className="bg-[#D4DFDF40] border-2 border-white px-1 py-1 rounded-md text-xs lg:text-sm 
                 text-center font-bold text-black outline-none cursor-pointer"
                >
                  <option>English</option>
                </select>
              </div>
              <div className="flex items-center gap-1 lg:gap-2 cursor-pointer">
                <div>
                  <img
                    src={images.landingPage.arrow_down}
                    alt="dropdown"
                    className="w-[1rem] cursor-pointer"
                  />
                </div>
                <button className="text-black font-semibold text-xs lg:text-sm cursor-pointer">
                  01 89 70 82 98
                </button>
              </div>
              <button className="bg-black text-white px-4 lg:px-8 py-2 lg:py-3 rounded-md text-xs lg:text-sm font-semibold cursor-pointer">
                Contact us
              </button>
            </div>
          </div>

          {/* Mobile Menu - visible only when menu is open */}
          <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
            <nav className="px-4 pt-2 pb-4 bg-[#F8F9FA] border-t border-gray-200">
              <ul className="space-y-4">
                <li className="text-sm font-bold">
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                    Home
                  </a>
                </li>
                <li className="text-sm font-bold">
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                      About Us
                    </a>
                    <img
                      src={images.landingPage.arrow_down}
                      alt="dropdown"
                      className="w-[1rem]"
                    />
                  </div>
                </li>
                <li className="text-sm font-bold">
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                    Edge Fund
                  </a>
                </li>
                <li className="text-sm font-bold">
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                      Edge Impact
                    </a>
                    <img
                      src={images.landingPage.arrow_down}
                      alt="dropdown"
                      className="w-[1rem]"
                    />
                  </div>
                </li>
                <li className="text-sm font-bold">
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                    Institutional
                  </a>
                </li>
                <li className="text-sm font-bold">
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                      Contact
                    </a>
                    <img
                      src={images.landingPage.arrow_down}
                      alt="dropdown"
                      className="w-[1rem]"
                    />
                  </div>
                </li>
              </ul>
              
              {/* Mobile buttons */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between bg-[#D4DFDF40] border-2 border-white rounded-lg p-2">
                  <select className="bg-transparent text-sm font-bold text-black outline-none">
                    <option>English</option>
                  </select>
                </div>
                <div className="flex items-center justify-between bg-[#D4DFDF40] border-2 border-white rounded-lg p-2">
                  <button className="text-black font-semibold text-sm">
                    01 89 70 82 98
                  </button>
                  <img
                    src={images.landingPage.arrow_down}
                    alt="dropdown"
                    className="w-[1rem]"
                  />
                </div>
                <button className="w-full bg-black text-white py-3 rounded-lg text-sm font-semibold">
                  Contact us
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default NavBar;