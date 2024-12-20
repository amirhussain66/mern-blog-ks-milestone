import { Button, Navbar } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const path=useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Apply theme class to the document body
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Navbar className="border-b-2">
      {/* Brand Link */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span
          className="px-2 py-1 bg-gradient-to-r 
          from-indigo-500 via-purple-500 to-pink-500 
          rounded-lg text-white"
        >
          Sahand's
        </span>{' '}
        Blog
      </Link>

      {/* Responsive Menu */}
      <div className="flex items-center space-x-4">
        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6">
          
          <Link to="/" className="hover:text-blue-500 dark:text-white" path="">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500 dark:text-white">
            About
          </Link>
          <Link to="/projects" className="hover:text-blue-500 dark:text-white">
            Projects
          </Link>
        </div>

  

        {/* Search Input */}
        <div className="relative w-full max-w-xs lg:max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className={`pl-10 pr-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
              ${isSearchFocused ? 'w-56' : 'w-36'} 
              lg:w-full transition-all duration-300 ease-in-out`}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        </div>

        {/* Theme Toggle Button */}
        <button
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          onClick={toggleTheme}
        >
          {isDarkTheme ? (
            <FiSun className="text-xl text-yellow-400" />
          ) : (
            <FiMoon className="text-xl text-gray-700" />
          )}
        </button>
        <button
  className="bg-black text-white dark:bg-white dark:text-black font-semibold rounded-lg lg:px-6 lg:py-2 
              sm:text-sm sm:px-4 sm:py-3  transition-all"
>
  SignIn
</button>


              {/* Hamburger Icon for Mobile */}
              <button
          className="lg:hidden text-gray-600 hover:text-gray-900 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-lg z-10 lg:hidden">
          <div className="flex flex-col items-center py-4 space-y-2">
            <Link
              to="/"
              className="block w-full text-center py-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block w-full text-center py-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block w-full text-center py-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
