// page/frontend/Home/NewsletterSection/NewsletterSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF
} from 'react-icons/fa';
import {
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineUser,
} from 'react-icons/hi';
import { HiOutlineEnvelope } from "react-icons/hi2";

const NewsletterSection2 = ({ config }) => {

  // State for form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);

  // Topics
  const topics = config?.topics || [
    "Product Updates",
    "Industry News",
    "Tips & Best Practices",
    "Case Studies",
    "Events & Webinars"
  ];

  // Handle topic toggle
  const handleTopicToggle = (topic) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setSubscribed(true);
    setEmail('');
    setName('');
    setSelectedTopics([]);

    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-blue-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {subscribed ? (
          // Success Message
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <HiOutlineCheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
              {config?.successMessage?.title || "Successfully Subscribed!"}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
              {config?.successMessage?.description || "Thank you for subscribing to our newsletter. You'll receive a confirmation email shortly."}
            </p>
            <button
              onClick={() => setSubscribed(false)}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm sm:text-base"
            >
              Subscribe another email
              <HiOutlineArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        ) : (
          // Form
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                      <HiOutlineUser className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={config?.form?.namePlaceholder || "John Doe"}
                      className="block w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-4 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                      <HiOutlineEnvelope className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                      }}
                      placeholder={config?.form?.emailPlaceholder || "john@example.com"}
                      className={`block w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-4 border ${error ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                        } rounded-lg sm:rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      required
                    />
                  </div>
                  {error && (
                    <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-red-600 dark:text-red-400">
                      {error}
                    </p>
                  )}
                </div>
              </div>

              {/* Topics of Interest */}
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4">
                  Select topics you're interested in:
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => handleTopicToggle(topic)}
                      className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${selectedTopics.includes(topic)
                        ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 sm:px-6 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-xl flex items-center justify-center group text-sm sm:text-base md:text-lg"
              >
                <span>{config?.form?.buttonText || "Subscribe to Newsletter"}</span>
                <HiOutlineArrowRight className="ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Privacy & Terms */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                <p>🔒 No spam, ever</p>
                <span>•</span>
                <p>📧 Unsubscribe anytime</p>
                <span>•</span>
                <Link href={config?.links?.privacy || '/privacy'} className="hover:text-blue-600 dark:hover:text-blue-400">
                  Privacy Policy
                </Link>
              </div>
            </form>
          </div>
        )}

        {/* Social Connect */}
        {config?.social?.show && (
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-3 sm:mb-4">
              {config.social.text || "Connect with us on social media"}
            </p>
            <div className="flex justify-center space-x-3 sm:space-x-4">
              <a
                href={config.social.facebook || "#"}
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors transform hover:scale-110"
              >
                <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href={config.social.twitter || "#"}
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors transform hover:scale-110"
              >
                <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href={config.social.linkedin || "#"}
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors transform hover:scale-110"
              >
                <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        {config?.trustBadges?.show && config?.trustBadges?.items && (
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {config.trustBadges.items.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                  {badge.number}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  {badge.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection2;