// resources/js/shared/Footer.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

// Icons
import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiClock,
} from 'react-icons/hi2';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  // Current year
  const currentYear = new Date().getFullYear();

  // Quick links
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  // Services
  const services = [
    { name: 'Inventory Management', path: '/services/inventory' },
    { name: 'Warehouse Solutions', path: '/services/warehouse' },
    { name: 'Transport & Logistics', path: '/services/logistics' },
    { name: 'Supply Chain Optimization', path: '/services/supply-chain' },
    { name: 'Real-time Tracking', path: '/services/tracking' },
  ];

  // Contact info
  const contactInfo = [
    { icon: HiMapPin, text: '123 Business Avenue, Dhaka, Bangladesh', href: 'https://maps.google.com' },
    { icon: HiPhone, text: '+880 1234-567890', href: 'tel:+8801234567890' },
    { icon: HiEnvelope, text: 'info@sazzad-inventory.com', href: 'mailto:info@sazzad-inventory.com' },
    { icon: HiClock, text: 'Mon - Sat: 9:00 AM - 8:00 PM', href: null },
  ];

  // Social links
  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400 dark:hover:text-blue-300' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-700 dark:hover:text-blue-400' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-600 dark:hover:text-pink-400' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white relative border-t border-gray-200 dark:border-gray-800">

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About Sazzad</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Sazzad Inventory & Logistics provides comprehensive inventory management
              and logistics solutions tailored to your business needs. With years of
              experience, we ensure efficiency and reliability in every delivery.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 dark:text-gray-400 ${social.color} transition-colors duration-300`}
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-600 dark:bg-indigo-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-600 dark:bg-indigo-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 group"
                        {...(item.href.includes('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        <Icon className="h-5 w-5 mt-0.5 shrink-0 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        <span className="text-sm">{item.text}</span>
                      </a>
                    ) : (
                      <div className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                        <Icon className="h-5 w-5 mt-0.5 shrink-0" />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 pb-6">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Get the latest updates on our services and offers
            </p>

            {/* Newsletter Form */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p className="text-center md:text-left">
            &copy; {currentYear} Sazzad Inventory & Logistics. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;