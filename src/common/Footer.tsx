// const Footer = () => {
//     return (
//       <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
//         <div className="max-w-7xl mx-auto grid grid-cols-2   md:grid-cols-4 gap-8">
//           {/* Left Section */}
//           <div>
//             <h2 className="text-white text-xl font-semibold">Edge Capital</h2>
//             <p className="text-sm mt-2">Investing with an edge</p>
//             <div className="mt-4 flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-md w-fit">
//               <span className="text-gray-400">📩</span>
//               <a href="mailto:hello@edgec.com" className="text-gray-300 text-sm">
//                 hello@edgec.com
//               </a>
//             </div>
//           </div>

//           {/* Navigation */}
//           <div>
//             <h3 className="text-white text-lg font-medium mb-3">Home</h3>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#" className="hover:text-white">About Us</a></li>
//               <li><a href="#" className="hover:text-white">Edge Fund</a></li>
//               <li><a href="#" className="hover:text-white">Edge Impact</a></li>
//               <li><a href="#" className="hover:text-white">Institutional</a></li>
//               <li><a href="#" className="hover:text-white">Contact</a></li>
//               <li><a href="#" className="hover:text-white">FAQs</a></li>
//             </ul>
//           </div>

//           {/* Help Center */}
//           <div>
//             <h3 className="text-white text-lg font-medium mb-3">Help Center</h3>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#" className="hover:text-white">Knowledge Base</a></li>
//               <li><a href="#" className="hover:text-white">Support</a></li>
//               <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
//               <li><a href="#" className="hover:text-white">404</a></li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="text-white text-lg font-medium mb-3">Social</h3>
//             <div className="space-y-2">
//               <a href="#" className="block bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md text-sm text-center">
//                 LinkedIn
//               </a>
//               <a href="#" className="block bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md text-sm text-center">
//                 Twitter / X
//               </a>
//               <a href="#" className="block bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md text-sm text-center">
//                 Instagram
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
//           <p>© 2024 edgecapital. All rights reserved.</p>
//           <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-green-400 text-xs">
//             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//             All Systems Operational
//           </div>
//           <a href="#" className="hover:text-white">Privacy Policy</a>
//         </div>
//       </footer>
//     );
//   };

//   export default Footer;

import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { ArrowRight, Mail } from "lucide-react";

const Footer = () => {
  const [emailHovered, setEmailHovered] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6 md:px-12 lg:px-24">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8
       md:justify-center items-center"
      >
        {/* Left Section */}
        <div className="space-y-8">
          <div className="space-y-1">
            <h2 className="text-white text-3xl font-semibold">Edge Capital</h2>
            <p className="text-gray-500">Investing with an edge</p>
          </div>

          <div
            className="inline-flex items-center border border-gray-700 rounded-md px-4 py-2 transition-colors duration-300 hover:border-gray-500 cursor-pointer group"
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => setEmailHovered(false)}
          >
            <Mail size={18} className="mr-2 opacity-70" />
            <span>hello@edgec.com</span>
            <ArrowRight
              size={18}
              className={`ml-2 transform transition-transform duration-300 ${
                emailHovered ? "translate-x-1" : ""
              }`}
            />
          </div>
        </div>

        <div className="  flex justify-between lg:ml-[10rem] lg:w-[30rem] ">
          {/* Navigation */}
          <div>
            <h3 className="text-white text-lg font-medium mb-3">Home</h3>
            <ul className="space-y-3 ">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Edge Fund
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Edge Impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Institutional
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="text-white text-lg font-medium mb-3">Help Center</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  404
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="lg:ml-[30rem]">
          <h3 className="text-white text-lg font-medium mb-3">Social</h3>
          <div className="space-y-2 flex justify-between lg:block">
            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-[#000000] hover:bg-gray-700 w-[7rem] md:w-[10rem] py-2 rounded-md text-sm"
            >
              <FaLinkedin className="text-lg" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-[#000000] hover:bg-gray-700 w-[7rem] md:w-[10rem] py-2 rounded-md text-sm"
            >
              <FaTwitter className="text-lg" />
              <span>Twitter / X</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-[#000000] hover:bg-gray-700 w-[7rem] md:w-[10rem] py-2 rounded-md text-sm"
            >
              <FaInstagram className="text-lg" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
        <p>© 2024 edgecapital. All rights reserved.</p>
        <a href="#" className="hover:text-white order-last sm:order-none">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
