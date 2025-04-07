import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBars,
  faXmark,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import images from "@/constant/images";
// import LanguageSwitcher from "@/common/LanguageSwitcher.tsx";
import "../common/GoogleTranslate.css";

interface DropdownState {
  [key: number]: boolean;
}

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (options: object, containerId: string) => void;
      };
    };
  }
}

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState<DropdownState>({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load Google Translate
  // useEffect(() => {
  //   const scriptId = "google-translate-script";

  //   // Prevent duplicate script injection
  //   if (!document.getElementById(scriptId)) {
  //     const script = document.createElement("script");
  //     script.id = scriptId;
  //     script.src =
  //       "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }

  //   // Define the init function globally
  //   window.googleTranslateElementInit = () => {
  //     const translateElement = document.getElementById(
  //       "google_translate_element"
  //     );
  //     if (translateElement && translateElement.children.length === 0) {
  //       new window.google.translate.TranslateElement(
  //         { pageLanguage: "en" },
  //         "google_translate_element"
  //       );
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById("google-translate-script")) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = `
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,nl',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
          }
        `;
      document.body.appendChild(inlineScript);
    };

    addGoogleTranslateScript();
  }, []);

  const toggleNav = () => setIsNavActive(!isNavActive);

  const toggleDropdown = (
    index: number,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setActiveDropdowns({
        ...activeDropdowns,
        [index]: !activeDropdowns[index],
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-[#eef4f5cc] backdrop-blur-md border-b
     border-white z-50 ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link to="/" className="flex-shrink-0">
          <img
            src={images.landingPage.ECLogoSVG}
            alt="Edge Capital"
            className="w-[202px] h-[34px]"
          />
        </Link>

        {/* Google Translate Widget */}
        {/* <div
          id="google_translate_element"
          className="fixed top-[6rem] right-[10rem] p-[10px_6px] rounded-xl  z-[9999] animate-pulse
            text-white text-sm font-inter w-[15remx] md:w-[15rem]  bg-gray-200 flex justify-center"
            backdrop-blur-md
        /> */}

        
        <div className={` ${!isNavActive ? 'block' : 'hidden' } lg:hidden`}>
          <div
            id="google_translate_element"
            className="text-sm  h-[3rem] flex w-auto mr-[1rem] fixed top-[4rem] left-[3%]"
          ></div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ${
            isNavActive ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex-shrink-0">
              <Link to="/" onClick={toggleNav}>
                <img
                  src={images.landingPage.ECLogoSVG}
                  alt="Edge Capital"
                  className="w-[202px] h-[34px]"
                />
              </Link>
            </div>
            <button className="text-2xl text-black" onClick={toggleNav}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-70px)]">
            <ul className="px-4">
              <li className="py-4 border-b border-gray-100">
                <Link
                  to="/"
                  className="text-[#192227] font-semibold block"
                  onClick={toggleNav}
                >
                  Home
                </Link>
              </li>
              <li className="py-4 border-b border-gray-100">
                <a
                  href="#"
                  className="text-[#192227] font-semibold flex justify-between items-center w-full"
                  onClick={(e) => toggleDropdown(1, e)}
                >
                  About Us
                  <FontAwesomeIcon
                    icon={activeDropdowns[1] ? faChevronUp : faChevronDown}
                    className="text-xs"
                  />
                </a>
                {activeDropdowns[1] && (
                  <ul className="ml-4 mt-2">
                    <li className="py-2">
                      <Link
                        to="/about"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        About
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/team"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        Team
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="py-4 border-b border-gray-100">
                <Link
                  to="/edge-fund"
                  className="text-[#192227] font-semibold block"
                  onClick={toggleNav}
                >
                  Edge Fund
                </Link>
              </li>
              <li className="py-4 border-b border-gray-100">
                <a
                  href="#"
                  className="text-[#192227] font-semibold flex justify-between items-center w-full"
                  onClick={(e) => toggleDropdown(2, e)}
                >
                  Edge Impact
                  <FontAwesomeIcon
                    icon={activeDropdowns[2] ? faChevronUp : faChevronDown}
                    className="text-xs"
                  />
                </a>
                {activeDropdowns[2] && (
                  <ul className="ml-4 mt-2">
                    <li className="py-2">
                      <Link
                        to="/edge-connect"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        Edge Connect
                      </Link>
                    </li>
                    {/* <li className="py-2">
                      <Link
                        to="/edge-impact-fund"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        Edge Impact Fund
                      </Link>
                    </li> */}
                    <li className="py-2">
                      <Link
                        to="/edge-cares"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        Edge Cares
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/edge-foundation"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        Edge Horizon Foundation
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/edge-capitla-csr"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        Edge Capital CSR
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="py-4 border-b border-gray-100">
                <Link
                  to="/institutional"
                  className="text-[#192227] font-semibold block"
                  onClick={toggleNav}
                >
                  Institutional
                </Link>
              </li>
              <li className="py-4 border-b border-gray-100">
                <a
                  href="#"
                  className="text-[#192227] font-semibold flex justify-between items-center w-full"
                  onClick={(e) => toggleDropdown(3, e)}
                >
                  Company
                  <FontAwesomeIcon
                    icon={activeDropdowns[3] ? faChevronUp : faChevronDown}
                    className="text-xs"
                  />
                </a>
                {activeDropdowns[3] && (
                  <ul className="ml-4 mt-2">
                    <li className="py-2">
                      <Link
                        to="/contact"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/media"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        Media
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/documents"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        Documents
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/careers"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            <div className="px-4 py-6 border-t border-gray-100 mt-4">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-[#206A7C]"
                />
                <a href="tel:+31613484484" className="font-semibold text-black">
                  +31 6 13 484 484
                </a>
              </div>
              <button className="bg-[#192227] text-white rounded-md px-6 py-3 font-semibold w-full">
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:gap-5 lg:items-center relative">
          <li>
            <Link
              to="/"
              className="text-[#192227] font-semibold hover:text-[#206A7C] transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-[#192227] font-semibold hover:text-[#206A7C] transition-colors flex items-center"
            >
              About Us
              <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
            </a>
            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all">
              <li className="p-3">
                <Link
                  to="/about"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  About
                </Link>
              </li>
              <li className="p-3">
                <Link
                  to="/team"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  Team
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/edge-fund"
              className="text-[#192227] font-semibold hover:text-[#206A7C] transition-colors"
            >
              Edge Fund
            </Link>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-[#192227] font-semibold hover:text-[#206A7C] transition-colors flex items-center"
            >
              Edge Impact
              <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
            </a>
            <ul
              className="absolute top-full left-0 bg-white shadow-lg rounded-md min-w-[180px] opacity-0
             invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all"
            >
              <li className="p-3">
                <Link
                  to="/edge-connect"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  Edge Connect
                </Link>
              </li>
              {/* <li className="p-3">
                <Link
                  to="/edge-impact-fund"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  Edge Impact Fund
                </Link>
              </li> */}
              <li className="p-3">
                <Link
                  to="/edge-cares"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  Edge Cares
                </Link>
              </li>
              <li className="p-3">
                <Link
                  to="/edge-foundation"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  Edge Horizon Foundation
                </Link>
              </li>
              <li className="p-3">
                <Link
                  to="/edge-capitla-csr"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  Edge Capital CSR
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/institutional"
              className="text-[#192227] font-semibold hover:text-[#206A7C] transition-colors"
            >
              Institutional
            </Link>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-[#192227] font-semibold hover:text-[#206A7C] transition-colors flex items-center"
            >
              Company
              <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
            </a>
            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all">
              <li className="p-3">
                <Link
                  to="/contact"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  Contact
                </Link>
              </li>
              <li className="p-3">
                <Link
                  to="/media"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  Media
                </Link>
              </li>
              <li className="p-3">
                <Link
                  to="/documents"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  Documents
                </Link>
              </li>
              <li className="p-3">
                <Link
                  to="/careers"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Desktop Contact */}
        <div
          className="hidden lg:flex items-center border border-white rounded-[15px] 
        p-3 w-[21rem]  relative h-[5rem]"
        >
          {/* <div className="flex items-center mr-4">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#206A7C]" />
            <span className="font-semibold text-black">+31 6 13 484 484</span>
          </div> */}
          <div
            id="google_translate_element"
            className="text-sm  h-[3rem] w-auto mr-[1rem]"
          ></div>

          <button
            className="bg-[#192227] text-white rounded-md px-6 py-3 font-semibold
           hover:bg-[#0e1417] transition-colors absolute right-[1rem] w-auto"
          >
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-2xl cursor-pointer text-black mr-[.5rem]"
          onClick={toggleNav}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
