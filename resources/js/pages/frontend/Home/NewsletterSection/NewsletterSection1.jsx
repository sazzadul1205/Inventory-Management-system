// page/frontend/Home/NewsletterSection/NewsletterSection1.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineMail,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineUser,
} from 'react-icons/hi';
import { HiOutlineEnvelope } from "react-icons/hi2";

const NewsletterSection1 = ({ config }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Success - in a real app, you'd send this to your API
    setError('');
    setSubscribed(true);
    setEmail('');
    setName('');

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Newsletter section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            {config?.badge?.show && (
              <div
                className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 border ${config.badge.borderColor}`}
                aria-label="Newsletter badge"
              >
                {config.badge.showPulse && (
                  <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                )}
                <HiOutlineMail className={`w-4 h-4 mr-2 ${config.badge.textColor}`} />
                <span className={`text-sm font-medium ${config.badge.textColor}`}>
                  {config.badge.text}
                </span>
              </div>
            )}

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
              {config?.heading?.prefix}{' '}
              <span className={`${config?.heading?.highlightColor}`}>
                {config?.heading?.highlightedText}
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

            {/* Benefits List */}
            {config?.benefits?.show && (
              <div className="space-y-3 pt-4">
                {config.benefits.items.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <HiOutlineCheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Social Proof */}
            {config?.socialProof?.show && (
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  {config.socialProof.avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt="Subscriber"
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {config.socialProof.count}+
                  </span>{' '}
                  {config.socialProof.text}
                </p>
              </div>
            )}
          </div>

          {/* Right Content - Newsletter Form */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
            {subscribed ? (
              // Success Message
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiOutlineCheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {config?.successMessage?.title || "Thanks for Subscribing!"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {config?.successMessage?.description || "You've been added to our newsletter. Check your inbox for a welcome email."}
                </p>
                <button
                  onClick={() => setSubscribed(false)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              // Form
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                  {config?.form?.title || "Subscribe to Our Newsletter"}
                </h3>

                {/* Name Field (Optional) */}
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

                {/* Interests/Preferences (Optional) */}
                {config?.form?.showInterests && (
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      I'm interested in:
                    </p>
                    <div className="space-y-2">
                      {config.form.interests.map((interest, index) => (
                        <label key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
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
                  className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center group"
                >
                  <span>{config?.form?.buttonText || "Subscribe Now"}</span>
                  <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Privacy Policy */}
                <p className="text-xs text-center text-gray-500 dark:text-gray-500">
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
                  <p className="text-xs text-center text-gray-400 dark:text-gray-600">
                    {config.form.frequency}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Trust Badges */}
        {config?.trustBadges?.show && (
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            {config.trustBadges.items.map((badge, index) => (
              <div key={index} className="flex items-center text-gray-500 dark:text-gray-500">
                {badge.icon === 'shield' && <HiOutlineCheckCircle className="w-5 h-5 mr-2 text-green-500" />}
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default NewsletterSection1;