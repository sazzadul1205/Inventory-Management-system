// page/frontend/Home/NewsletterSection/NewsletterSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineMail,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineUser,
} from 'react-icons/hi';
import { HiOutlineEnvelope } from "react-icons/hi2";

const NewsletterSection1 = ({ config }) => {

  // State for form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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

    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">

            {/* Badge */}
            {config?.badge?.show && config?.badge?.text && (
              <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-blue-200 dark:border-gray-700">
                {config?.badge?.showPulse && (
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                  </span>
                )}
                <HiOutlineMail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-700 dark:text-gray-300" />
                <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                  {config.badge.text}
                </span>
              </div>
            )}

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {config?.heading?.prefix}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {config?.heading?.highlightedText}
              </span>{' '}
              {config?.heading?.suffix}
            </h2>

            {/* Description */}
            {config?.description && (
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                {config.description}
              </p>
            )}

            {/* Benefits List */}
            {config?.benefits?.show && config?.benefits?.items && (
              <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                {config.benefits.items.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 sm:mr-3 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Social Proof */}
            {config?.socialProof?.show && (
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 pt-2 sm:pt-4">
                <div className="flex -space-x-1.5 sm:-space-x-2">
                  {config.socialProof.avatars?.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt="Subscriber"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white dark:border-gray-800"
                      loading="lazy"
                    />
                  ))}
                </div>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {config.socialProof.count}+
                  </span>{' '}
                  {config.socialProof.text}
                </p>
              </div>
            )}
          </div>

          {/* Right Content - Newsletter Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
            {subscribed ? (
              // Success Message
              <div className="text-center py-6 sm:py-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <HiOutlineCheckCircle className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {config?.successMessage?.title || "Thanks for Subscribing!"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  {config?.successMessage?.description || "You've been added to our newsletter. Check your inbox for a welcome email."}
                </p>
                <button
                  onClick={() => setSubscribed(false)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-xs sm:text-sm"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              // Form
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-4 sm:mb-6">
                  {config?.form?.title || "Subscribe to Our Newsletter"}
                </h3>

                {/* Name Field */}
                {config?.form?.showName && (
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineUser className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={config?.form?.namePlaceholder || "Enter your name"}
                        className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                      placeholder={config?.form?.emailPlaceholder || "you@example.com"}
                      className={`block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border ${error ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
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

                {/* Interests/Preferences */}
                {config?.form?.showInterests && config?.form?.interests && (
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                      I'm interested in:
                    </p>
                    <div className="space-y-1.5 sm:space-y-2">
                      {config.form.interests.map((interest, index) => (
                        <label key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                            {interest}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center group text-sm sm:text-base"
                >
                  <span>{config?.form?.buttonText || "Subscribe Now"}</span>
                  <HiOutlineArrowRight className="ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Privacy Policy */}
                <p className="text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-500">
                  {config?.form?.privacyText || "We respect your privacy. Unsubscribe at any time."}
                  {config?.form?.privacyLink && (
                    <>
                      {' '}
                      <Link href={config.form.privacyLink} className="text-blue-600 dark:text-blue-400 hover:underline">
                        Privacy Policy
                      </Link>
                    </>
                  )}
                </p>

                {/* Frequency Note */}
                {config?.form?.frequency && (
                  <p className="text-[10px] sm:text-xs text-center text-gray-400 dark:text-gray-600">
                    {config.form.frequency}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Trust Badges */}
        {config?.trustBadges?.show && config?.trustBadges?.items && (
          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
            {config.trustBadges.items.map((badge, index) => (
              <div key={index} className="flex items-center text-gray-500 dark:text-gray-500">
                <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-green-500" />
                <span className="text-[10px] sm:text-xs">{badge.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection1;