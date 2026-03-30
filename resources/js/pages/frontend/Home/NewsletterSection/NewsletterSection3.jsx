// page/frontend/Home/NewsletterSection/NewsletterSection3.jsx

// React
import { useState } from 'react';

// Icons
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
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('weekly');

  const frequencies = [
    { value: 'daily', label: 'Daily', icon: HiOutlineCalendar },
    { value: 'weekly', label: 'Weekly', icon: HiOutlineStar },
    { value: 'monthly', label: 'Monthly', icon: HiOutlineBookOpen },
  ];

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
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Newsletter section"
    >
      {/* Background Pattern - Magazine Style */}
      <div className="absolute inset-0 bg-magazine-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Magazine Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Newsletter badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
              )}
              <span className={`text-sm font-medium ${config.badge.textColor}`}>
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.heading?.prefix}{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {config?.heading?.highlightedText}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 6 L300 6"
                  stroke="url(#headingGradient)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="headingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Main Content - Magazine Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Benefits & Features */}
          <div className="space-y-8">
            {/* Featured Benefit */}
            {config?.featured?.show && (
              <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative">
                  <span className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <HiOutlineGift className="w-4 h-4 mr-2" />
                    {config.featured.badge}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">
                    {config.featured.title}
                  </h3>
                  <p className="text-blue-100 mb-4">
                    {config.featured.description}
                  </p>
                  <div className="flex items-center text-sm">
                    <HiOutlineCheckCircle className="w-5 h-5 mr-2" />
                    <span>Limited time offer</span>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits List */}
            {config?.benefits?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {config.benefits.title}
                </h3>
                <div className="space-y-4">
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
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{benefit.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Testimonials */}
            {config?.testimonials?.show && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2">
                    {config.testimonials.avatars.map((avatar, index) => (
                      <img
                        key={index}
                        src={avatar}
                        alt="Subscriber"
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                      />
                    ))}
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <span className="font-semibold text-gray-900 dark:text-white">4.9</span> from 500+ reviews
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "{config.testimonials.quote}"
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Newsletter Form */}
          <div className="lg:sticky lg:top-24">
            {subscribed ? (
              // Success Message
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiOutlineCheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {config?.successMessage?.title || "Check Your Inbox!"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {config?.successMessage?.description || "We've sent a confirmation link to your email. Please click it to verify your subscription."}
                </p>
                <button
                  onClick={() => setSubscribed(false)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Subscribe with different email
                </button>
              </div>
            ) : (
              // Form
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {config?.form?.title || "Get the Newsletter"}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  {config?.form?.showName && (
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <HiOutlineUser className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={config?.form?.namePlaceholder || "Enter your name"}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  )}

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineEnvelope className="h-5 w-5 text-gray-400" />
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
                        className={`block w-full pl-10 pr-3 py-3 border ${error ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                          } rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        required
                      />
                    </div>
                    {error && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {error}
                      </p>
                    )}
                  </div>

                  {/* Frequency Selection */}
                  {config?.form?.showFrequency && (
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        How often would you like to hear from us?
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {frequencies.map((freq) => {
                          const Icon = freq.icon;
                          return (
                            <button
                              key={freq.value}
                              type="button"
                              onClick={() => setSelectedFrequency(freq.value)}
                              className={`flex flex-col items-center p-4 rounded-xl border transition-all duration-300 ${selectedFrequency === freq.value
                                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg scale-105'
                                  : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                            >
                              <Icon className={`w-5 h-5 mb-2 ${selectedFrequency === freq.value ? 'text-white' : 'text-blue-600 dark:text-blue-400'
                                }`} />
                              <span className="text-sm">{freq.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center group"
                  >
                    <span>{config?.form?.buttonText || "Subscribe Now"}</span>
                    <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Privacy Note */}
                  <p className="text-xs text-center text-gray-500 dark:text-gray-500">
                    {config?.form?.privacyText || "We respect your privacy. Unsubscribe at any time."}
                  </p>
                </form>

                {/* Recent Subscribers */}
                {config?.recent?.show && (
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                          {config.recent.avatars.map((avatar, index) => (
                            <img
                              key={index}
                              src={avatar}
                              alt="Recent subscriber"
                              className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800"
                            />
                          ))}
                        </div>
                        <span className="ml-3 text-gray-600 dark:text-gray-400">
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
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {config.footerNote}
            </p>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-magazine-pattern {
          background-image: 
            linear-gradient(45deg, #e5e7eb 1px, transparent 1px),
            linear-gradient(-45deg, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-magazine-pattern {
          background-image: 
            linear-gradient(45deg, #374151 1px, transparent 1px),
            linear-gradient(-45deg, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default NewsletterSection3;