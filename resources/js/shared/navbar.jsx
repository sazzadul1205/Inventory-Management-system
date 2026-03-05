import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import {
  HiHome,
  HiInformationCircle,
  HiBriefcase,
  HiMail,
  HiMenu,
  HiX,
  HiLogin,
  HiUserAdd,
} from 'react-icons/hi';

import Icon from '../../../public/Icon.png';

// Routes
import { login, register } from '@/routes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items array
  const navItems = [
    { name: 'Home', path: '/', icon: HiHome },
    { name: 'About', path: '/about', icon: HiInformationCircle },
    { name: 'Services', path: '/services', icon: HiBriefcase },
    { name: 'Contact', path: '/contact', icon: HiMail },
  ];

  // Auth buttons array
  const authButtons = [
    { name: 'Login', path: login.url(), icon: HiLogin, primary: false },
    { name: 'Register', path: register.url(), icon: HiUserAdd, primary: true },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <img
                src={Icon} // place your logo in public/logo.png
                alt="Sazzadul Inventory and Logistics"
                className="w-48 h-auto object-contain group-hover:opacity-90 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Auth buttons */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
              {authButtons.map((button) => (
                <Link
                  key={button.name}
                  href={button.path}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${button.primary
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                >
                  <button.icon className="h-4 w-4" />
                  <span>{button.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="flex items-center space-x-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-3 rounded-md text-base font-medium transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}

          {/* Mobile auth buttons */}
          <div className="pt-4 pb-3 border-t border-gray-200 mt-2">
            <div className="flex items-center space-x-2 px-2">
              {authButtons.map((button) => (
                <Link
                  key={button.name}
                  href={button.path}
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${button.primary
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  <button.icon className="h-4 w-4" />
                  <span>{button.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Active route indicator - optional */}
      <div className="h-0.5 bg-linear-to-r from-indigo-500 to-purple-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
    </nav>
  );
};

export default Navbar;
