import React, { useState } from "react";
import images from "@/constant/images";
import "@/component/landingPage/component.css";

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
                  <li className="text-xs lg:text-sm text-center font-semibold inter text-[14px]">
                    <a href="#" className="text-gray-600 hover:text-gray-900 ">
                      Home
                    </a>
                  </li>
                  <li className="text-xs lg:text-sm text-center font-semibold inter text-[14px] flex items-center gap-1">
                    <a href="#" className="text-gray-600 hover:text-gray-900 inter ">
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
                  <li className="text-xs lg:text-sm text-center font-semibold inter text-[14px]">
                    <a href="#" className="text-gray-600 hover:text-gray-900 inter">
                      Edge Fund
                    </a>
                  </li>
                  <li className="text-xs lg:text-sm text-center font-semibold inter text-[14px] flex items-center gap-1">
                    <a href="#" className="text-gray-600 hover:text-gray-900 inter">
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
                  <li className="text-xs lg:text-sm text-center font-semibold inter text-[14px]">
                    <a href="#" className="text-gray-600 hover:text-gray-900 inter">
                      Institutional
                    </a>
                  </li>
                  <li className="text-xs lg:text-sm text-center font-semibold inter text-[14px] flex items-center gap-1">
                    <a href="#" className="text-gray-600 hover:text-gray-900 inter">
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
                 text-center font-semibold inter text-[14px] text-black outline-none cursor-pointer inter"
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
                <button className="text-black font-semibold text-xs lg:text-sm cursor-pointer inter">
                  01 89 70 82 98
                </button>
              </div>
              <button className="bg-black text-white px-4 lg:px-8 py-2 lg:py-3 rounded-md 
              text-xs lg:text-sm font-semibold cursor-pointer inter">
                Contact us
              </button>
            </div>
          </div>

          {/* Mobile Menu - visible only when menu is open */}
          <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
            <nav className="px-4 pt-2 pb-4 bg-[#F8F9FA] border-t border-gray-200">
              <ul className="space-y-4">
                <li className="text-sm font-semibold inter text-[14px]">
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 inter">
                    Home
                  </a>
                </li>
                <li className="text-sm font-semibold inter text-[14px]">
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 inter">
                      About Us
                    </a>
                    <img
                      src={images.landingPage.arrow_down}
                      alt="dropdown"
                      className="w-[1rem]"
                    />
                  </div>
                </li>
                <li className="text-sm font-semibold inter text-[14px]">
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 inter">
                    Edge Fund
                  </a>
                </li>
                <li className="text-sm font-semibold inter text-[14px]">
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 inter">
                      Edge Impact
                    </a>
                    <img
                      src={images.landingPage.arrow_down}
                      alt="dropdown"
                      className="w-[1rem]"
                    />
                  </div>
                </li>
                <li className="text-sm font-semibold inter text-[14px]">
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 inter">
                    Institutional
                  </a>
                </li>
                <li className="text-sm font-semibold inter text-[14px]">
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 inter">
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
                  <select className="bg-transparent text-sm font-semibold inter text-[14px] text-black outline-none inter">
                    <option>English</option>
                  </select>
                </div>
                <div className="flex items-center justify-between bg-[#D4DFDF40] border-2 border-white rounded-lg p-2">
                  <button className="text-black font-semibold text-sm inter">
                    01 89 70 82 98
                  </button>
                  <img
                    src={images.landingPage.arrow_down}
                    alt="dropdown"
                    className="w-[1rem]"
                  />
                </div>
                <button className="w-full bg-black text-white py-3 rounded-lg text-sm font-semibold inter">
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



// "use client"

// import type React from "react"
// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// // Dropdown menu data
// const aboutUsDropdown = [
//   { title: "Our Story", href: "#" },
//   { title: "Team", href: "#" },
//   { title: "Careers", href: "#" },
// ]

// const edgeImpactDropdown = [
//   { title: "Impact Investing", href: "#" },
//   { title: "ESG Framework", href: "#" },
//   { title: "Case Studies", href: "#" },
// ]

// const contactDropdown = [
//   { title: "General Inquiries", href: "#" },
//   { title: "Investor Relations", href: "#" },
//   { title: "Media", href: "#" },
// ]

// interface DropdownProps {
//   items: { title: string; href: string }[]
//   isOpen: boolean
// }

// const NavBar: React.FC = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
//   const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null)

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen)
//     setActiveMobileDropdown(null)
//   }

//   const toggleDropdown = (dropdown: string) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
//   }

//   const toggleMobileDropdown = (dropdown: string) => {
//     setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown)
//   }

//   // Desktop dropdown component
//   const Dropdown = ({ items, isOpen }: DropdownProps) => {
//     return (
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -5 }}
//             transition={{ duration: 0.2 }}
//             className="absolute z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5"
//           >
//             <div className="py-1">
//               {items.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
//                 >
//                   {item.title}
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     )
//   }

//   // Mobile dropdown component
//   const MobileDropdown = ({ items, isOpen }: DropdownProps) => {
//     return (
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="overflow-hidden"
//           >
//             <div className="pl-4 py-1 space-y-2">
//               {items.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className="block py-1 text-sm font-medium text-gray-600 hover:text-gray-900"
//                 >
//                   {item.title}
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     )
//   }

//   // ChevronDown icon component
//   const ChevronDown = ({ className }: { className?: string }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path d="m6 9 6 6 6-6" />
//     </svg>
//   )

//   return (
//     <header className="bg-[#F8F9FA] border-b border-gray-200 font-['Inter']">
//       <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-3">
//           {/* Logo */}
//           <div className="flex items-center">
//             <a href="/" className="flex items-center">
//               <span className="text-[#18181B] font-semibold inter text-[14px] text-xl">Edge</span>
//               <span className="text-[#18181B] font-normal text-xl ml-1">Capital</span>
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden flex items-center p-2 text-black"
//             onClick={toggleMobileMenu}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center justify-center flex-1 ml-10">
//             <nav>
//               <ul className="flex space-x-3 lg:space-x-6">
//                 <li className="text-xs lg:text-sm text-center font-semibold inter text-[14px]">
//                   <a href="#" className="text-gray-600 hover:text-gray-900 px-1 py-2">
//                     Home
//                   </a>
//                 </li>
//                 <li className="text-xs lg:text-sm text-center font-semibold inter text-[14px] relative">
//                   <button
//                     onClick={() => toggleDropdown("aboutUs")}
//                     className="flex items-center gap-1 text-gray-600 hover:text-gray-900 px-1 py-2"
//                   >
//                     About Us
//                     <motion.div
//                       animate={{ rotate: activeDropdown === "aboutUs" ? 180 : 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </motion.div>
//                   </button>
//                   <Dropdown items={aboutUsDropdown} isOpen={activeDropdown === "aboutUs"} />
//                 </li>
//                 <li className="text-xs lg:text-sm text-center font-semibold inter text-[14px]">
//                   <a href="#" className="text-gray-600 hover:text-gray-900 px-1 py-2">
//                     Edge Fund
//                   </a>
//                 </li>
//                 <li className="text-xs lg:text-sm text-center font-semibold inter text-[14px] relative">
//                   <button
//                     onClick={() => toggleDropdown("edgeImpact")}
//                     className="flex items-center gap-1 text-gray-600 hover:text-gray-900 px-1 py-2"
//                   >
//                     Edge Impact
//                     <motion.div
//                       animate={{ rotate: activeDropdown === "edgeImpact" ? 180 : 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </motion.div>
//                   </button>
//                   <Dropdown items={edgeImpactDropdown} isOpen={activeDropdown === "edgeImpact"} />
//                 </li>
//                 <li className="text-xs lg:text-sm text-center font-semibold inter text-[14px]">
//                   <a href="#" className="text-gray-600 hover:text-gray-900 px-1 py-2">
//                     Institutional
//                   </a>
//                 </li>
//                 <li className="text-xs lg:text-sm text-center font-semibold inter text-[14px] relative">
//                   <button
//                     onClick={() => toggleDropdown("contact")}
//                     className="flex items-center gap-1 text-gray-600 hover:text-gray-900 px-1 py-2"
//                   >
//                     Contact
//                     <motion.div
//                       animate={{ rotate: activeDropdown === "contact" ? 180 : 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </motion.div>
//                   </button>
//                   <Dropdown items={contactDropdown} isOpen={activeDropdown === "contact"} />
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           {/* Right Side - Language, Phone, Contact Button */}
//           <div className="hidden md:flex items-center space-x-2 bg-[#D4DFDF40] border border-white rounded-2xl gap-2 lg:gap-5 p-2 lg:p-3">
//             <div className="relative">
//               <select
//                 className="bg-[#D4DFDF40] border border-white px-2 py-1 rounded-md text-xs lg:text-sm 
//                 text-center font-semibold inter text-[14px] text-black outline-none cursor-pointer appearance-none pr-6"
//               >
//                 <option>English</option>
//                 <option>Français</option>
//                 <option>Deutsch</option>
//               </select>
//               <ChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 h-3 w-3" />
//             </div>
//             <div className="flex items-center gap-1 lg:gap-2 cursor-pointer">
//               <button className="text-black font-semibold text-xs lg:text-sm cursor-pointer">01 89 70 82 98</button>
//             </div>
//             <button className="bg-[#18181B] text-white px-4 lg:px-6 py-2 rounded-md text-xs lg:text-sm font-semibold cursor-pointer">
//               Contact us
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden overflow-hidden"
//             >
//               <nav className="px-4 pt-2 pb-4 bg-[#F8F9FA] border-t border-gray-200">
//                 <ul className="space-y-2">
//                   <li className="text-sm font-semibold inter text-[14px]">
//                     <a href="#" className="text-gray-600 hover:text-gray-900 block py-2">
//                       Home
//                     </a>
//                   </li>
//                   <li className="text-sm font-semibold inter text-[14px]">
//                     <div>
//                       <button
//                         onClick={() => toggleMobileDropdown("aboutUs")}
//                         className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 py-2"
//                       >
//                         <span>About Us</span>
//                         <motion.div
//                           animate={{ rotate: activeMobileDropdown === "aboutUs" ? 180 : 0 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <ChevronDown className="h-4 w-4" />
//                         </motion.div>
//                       </button>
//                       <MobileDropdown items={aboutUsDropdown} isOpen={activeMobileDropdown === "aboutUs"} />
//                     </div>
//                   </li>
//                   <li className="text-sm font-semibold inter text-[14px]">
//                     <a href="#" className="text-gray-600 hover:text-gray-900 block py-2">
//                       Edge Fund
//                     </a>
//                   </li>
//                   <li className="text-sm font-semibold inter text-[14px]">
//                     <div>
//                       <button
//                         onClick={() => toggleMobileDropdown("edgeImpact")}
//                         className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 py-2"
//                       >
//                         <span>Edge Impact</span>
//                         <motion.div
//                           animate={{ rotate: activeMobileDropdown === "edgeImpact" ? 180 : 0 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <ChevronDown className="h-4 w-4" />
//                         </motion.div>
//                       </button>
//                       <MobileDropdown items={edgeImpactDropdown} isOpen={activeMobileDropdown === "edgeImpact"} />
//                     </div>
//                   </li>
//                   <li className="text-sm font-semibold inter text-[14px]">
//                     <a href="#" className="text-gray-600 hover:text-gray-900 block py-2">
//                       Institutional
//                     </a>
//                   </li>
//                   <li className="text-sm font-semibold inter text-[14px]">
//                     <div>
//                       <button
//                         onClick={() => toggleMobileDropdown("contact")}
//                         className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 py-2"
//                       >
//                         <span>Contact</span>
//                         <motion.div
//                           animate={{ rotate: activeMobileDropdown === "contact" ? 180 : 0 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <ChevronDown className="h-4 w-4" />
//                         </motion.div>
//                       </button>
//                       <MobileDropdown items={contactDropdown} isOpen={activeMobileDropdown === "contact"} />
//                     </div>
//                   </li>
//                 </ul>

//                 {/* Mobile buttons */}
//                 <div className="mt-6 space-y-3">
//                   <div className="relative bg-[#D4DFDF40] border border-white rounded-lg p-2">
//                     <select className="w-full bg-transparent text-sm font-semibold inter text-[14px] text-black outline-none appearance-none">
//                       <option>English</option>
//                       <option>Français</option>
//                       <option>Deutsch</option>
//                     </select>
//                     <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
//                   </div>
//                   <div className="flex items-center justify-between bg-[#D4DFDF40] border border-white rounded-lg p-2">
//                     <button className="text-black font-semibold text-sm">01 89 70 82 98</button>
//                   </div>
//                   <button className="w-full bg-[#18181B] text-white py-3 rounded-lg text-sm font-semibold">
//                     Contact us
//                   </button>
//                 </div>
//               </nav>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   )
// }

// export default NavBar

