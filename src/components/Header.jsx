// src/components/Header.jsx

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "@/assets/images/Logo.png";
import { Menu, ShoppingCart, Search, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) => {
    const baseClasses =
      "relative font-semibold text-sm transition-colors duration-200 h-full flex items-center border-b-2 px-2";
    if (isActive) {
      return `${baseClasses} text-green-500 border-green-500`;
    } else {
      return `${baseClasses} text-gray-800 border-transparent group-hover:text-green-500 group-hover:border-green-500`;
    }
  };

  return (
    <header className="relative h-[110px] shadow-md z-20 bg-white">
      <div className="container mx-auto xl:px-24 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="w-1/4 lg:w-1/5 xl:w-1/8 shrink-0">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img
                src={Logo}
                alt="GreenChop Logo"
                className="max-w-full h-auto"
              />
            </Link>
          </div>

          <div className="flex items-center h-full mr-10 xl:mr-33">
            {/* Navigation Menu (Responsive) */}
            <nav
              className={`
                absolute lg:static top-[110px] left-0 w-full lg:w-auto lg:h-full
                lg:bg-transparent shadow-lg lg:shadow-none
                transition-transform duration-300 ease-in-out bg-pink-50
                ${
                  isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0
              `}
            >
              <ul className="flex flex-col lg:flex-row lg:justify-end h-full py-2 lg:py-0 lg:gap-6 px-3 lg:px-0">
                <li className="group h-12 lg:h-full  lg:py-0">
                  {" "}
                  <NavLink
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={getNavLinkClass}
                  >
                    Trang chủ
                  </NavLink>
                </li>
                <li className="group h-12 lg:h-full lg:py-0">
                  <NavLink
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className={getNavLinkClass}
                  >
                    Về Greenchop
                  </NavLink>
                </li>
                <li className="group h-12 lg:h-full lg:py-0">
                  <NavLink
                    to="/products"
                    onClick={() => setIsMenuOpen(false)}
                    className={getNavLinkClass}
                  >
                    Sản phẩm
                  </NavLink>
                </li>
                <li className="group h-12 lg:h-full lg:py-0">
                  <NavLink
                    to="/news"
                    onClick={() => setIsMenuOpen(false)}
                    className={getNavLinkClass}
                  >
                    Tin tức
                  </NavLink>
                </li>
                <li className="group h-12 lg:h-full lg:py-0">
                  <NavLink
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className={getNavLinkClass}
                  >
                    Liên hệ
                  </NavLink>
                </li>
                {/* Icons trên mobile */}
                <li
                  className={`flex lg:hidden items-center gap-6 py-4 px-2 lg:px-0`}
                >
                  <Link
                    to="/cart"
                    onClick={() => setIsMenuOpen(false)}
                    className="relative text-gray-800 hover:text-green-500"
                  >
                    <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 rounded-full bg-orange-500 text-white text-xs font-medium">
                      3
                    </span>
                    <ShoppingCart size={20} />
                  </Link>
                  <a
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-800 hover:text-green-500"
                  >
                    <Search size={20} />
                  </a>
                </li>
              </ul>
            </nav>

            <div className="hidden lg:flex items-center gap-10 h-full ml-10 relative">
              <NavLink
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? " text-green-500 border-b-2 h-full flex items-center"
                    : " text-gray-800 hover:text-green-500 hover:border-b-2 h-full flex items-center"
                }
              >
                <span className="absolute top-10 right-13 flex items-center justify-center w-4 h-4 rounded-full bg-orange-500 text-white text-xs font-medium">
                  3
                </span>
                <ShoppingCart size={20} />
              </NavLink>
              <a href="#" className="text-gray-800 hover:text-green-500">
                <Search size={20} />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden xl:ml-6">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 z-30"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
