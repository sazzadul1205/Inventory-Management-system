// page/frontend/Home/NewsletterSection/NewsletterSection3.jsx

// React
import { useState } from 'react';

// React Icons
import {
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineUser,
  HiOutlineChat,
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineGift,
} from 'react-icons/hi';
import { HiOutlineEnvelope } from "react-icons/hi2";

const NewsletterSection3 = ({ config }) => {

  // State for form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState('weekly');

  // Frequencies
  const frequencies = [
    { value: 'daily', label: 'Daily', icon: HiOutlineCalendar },
    { value: 'weekly', label: 'Weekly', icon: HiOutlineStar },
    { value: 'monthly', label: 'Monthly', icon: HiOutlineBookOpen },
  ];

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
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(45deg,#e5e7eb_1px,transparent_1px),linear-gradient(-45deg,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,#374151_1px,transparent_1px),linear-gradient(-45deg,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Column - Benefits & Features */}
          <div className="space-y-6 sm:space-y-8">

            {/* Featured Benefit */}
            {config?.featured?.show && (
              <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative">
                  <span className="inline-flex items-center bg-white/20 text-white px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold mb-3 sm:mb-4">
                    <HiOutlineGift className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    {config.featured.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                    {config.featured.title}
                  </h3>
                  <p className="text-blue-100 text-sm sm:text-base mb-3 sm:mb-4">
                    {config.featured.description}
                  </p>
                  <div className="flex items-center text-xs sm:text-sm">
                    <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    <span>Limited time offer</span>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits List */}
            {config?.benefits?.show && config?.benefits?.items && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5 md:mb-6">
                  {config.benefits.title}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {config.benefits.items.map((benefit, index) => {
                    const IconComponent =
                      benefit.icon === 'book' ? HiOutlineBookOpen :
                        benefit.icon === 'calendar' ? HiOutlineCalendar :
                          benefit.icon === 'chat' ? HiOutlineChat :
                            benefit.icon === 'heart' ? HiOutlineHeart :
                              benefit.icon === 'star' ? HiOutlineStar :
                                HiOutlineCheckCircle;

                    return (
                      <div key={index} className="flex items-start group">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{benefit.title}</h4>
                          <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Testimonials */}
            {config?.testimonials?.show && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex -space-x-1.5 sm:-space-x-2">
                    {config.testimonials.avatars?.map((avatar, index) => (
                      <img
                        key={index}
                        src={avatar}
                        alt="Subscriber"
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white dark:border-gray-800"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">
                      <span className="font-semibold text-gray-900 dark:text-white">4.9</span> from 500+ reviews
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic">
                  "{config.testimonials.quote}"
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Newsletter Form */}
          <div className="lg:sticky lg:top-24">
            {subscribed ? (
              // Success Message
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-700 text-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <HiOutlineCheckCircle className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {config?.successMessage?.title || "Check Your Inbox!"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  {config?.successMessage?.description || "We've sent a confirmation link to your email. Please click it to verify your subscription."}
                </p>
                <button
                  onClick={() => setSubscribed(false)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm sm:text-base"
                >
                  Subscribe with different email
                </button>
              </div>
            ) : (
              // Form
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  {config?.form?.title || "Get the Newsletter"}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">

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

                  {/* Frequency Selection */}
                  {config?.form?.showFrequency && (
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                        How often would you like to hear from us?
                      </p>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {frequencies.map((freq) => {
                          const Icon = freq.icon;
                          return (
                            <button
                              key={freq.value}
                              type="button"
                              onClick={() => setSelectedFrequency(freq.value)}
                              className={`flex flex-col items-center p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 ${selectedFrequency === freq.value
                                ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg scale-105'
                                : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                            >
                              <Icon className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-2 ${selectedFrequency === freq.value ? 'text-white' : 'text-blue-600 dark:text-blue-400'
                                }`} />
                              <span className="text-[10px] sm:text-xs">{freq.label}</span>
                            </button>
                          );
                        })}
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

                  {/* Privacy Note */}
                  <p className="text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-500">
                    {config?.form?.privacyText || "We respect your privacy. Unsubscribe at any time."}
                  </p>
                </form>

                {/* Recent Subscribers */}
                {config?.recent?.show && (
                  <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center">
                        <div className="flex -space-x-1.5 sm:-space-x-2">
                          {config.recent.avatars?.map((avatar, index) => (
                            <img
                              key={index}
                              src={avatar}
                              alt="Recent subscriber"
                              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white dark:border-gray-800"
                              loading="lazy"
                            />
                          ))}
                        </div>
                        <span className="ml-2 sm:ml-3 text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs">
                          <span className="font-semibold text-gray-900 dark:text-white">+{config.recent.count}</span> joined this week
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        {config?.footerNote && (
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
              {config.footerNote}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection3;