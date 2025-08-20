import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/svg/Logo.svg";
import { ProgramsDropDown } from "../ProgramsDropDown";
import LanguageSwitcher from "../LanguageSelector";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("testUserToken"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("testUserToken");
    setToken(null);
    navigate("/");
  };

  return (
    <header className="shadow-md bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="site-logo" className="h-8 md:h-10" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-[15px] font-semibold text-gray-600 hover:text-teal-600"
                >
                  Home
                </Link>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <span className="block px-4 py-2 text-[15px] font-semibold text-gray-600 hover:text-teal-600 cursor-pointer">
                  Programs
                </span>
                {showDropdown && (
                  <ul className="absolute left-0 mt-2 w-72 bg-white border border-gray-300 rounded-md shadow-md z-50">
                    <ProgramsDropDown />
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/finance-tools"
                  className="block px-4 py-2 text-[15px] font-semibold text-gray-600 hover:text-teal-600"
                >
                  Finance Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-[15px] font-semibold text-gray-600 hover:text-teal-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <LanguageSwitcher />

            {!token ? (
            <Link
            to="/signin"
            className="hidden md:block bg-teal-600 text-white px-3 py-1 rounded-lg font-semibold text-xs md:text-sm lg:text-base md:px-6 md:py-2"
          >
            Sign in
          </Link>
            ) : (
              <div className="flex gap-4 items-center">
                <Link
                  to="/user-profile"
                  className="text-2xl text-blue-600 hover:text-blue-800"
                >
                  <FaUserCircle />
                </Link>
                <button
                  onClick={handleLogout}
                  className="hidden md:block text-red-500 hover:text-red-700 text-2xl "
                  title="Logout"
                >
                  <FiLogOut />
                </button>
              </div>
            )}

            {/* Hamburger (faqat mobile) */}
            <button
              className="md:hidden text-3xl text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t shadow-md">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-[15px] font-semibold text-gray-600 hover:text-teal-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <span className="block px-4 py-2 text-[15px] font-semibold text-gray-600 hover:text-teal-600 cursor-pointer">
                  Programs
                </span>
                {showDropdown && (
                  <ul className="absolute left-0 mt-2 w-72 bg-white border border-gray-300 rounded-md shadow-md z-50">
                    <ProgramsDropDown />
                  </ul>
                )}
              </li>
              
              <li>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-[15px] font-semibold text-gray-600 hover:text-teal-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="border-t pt-2">
                {!token ? (
                  <Link
                    to="/signin"
                    className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold inline-block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
