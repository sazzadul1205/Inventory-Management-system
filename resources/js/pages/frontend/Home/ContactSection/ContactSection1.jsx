// page/frontend/Home/ContactSection/ContactSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineUser,
  HiOutlinePaperAirplane
} from 'react-icons/hi';
import {
  HiOutlineEnvelope,
  HiOutlineBuildingOffice2,
} from 'react-icons/hi2';

const ContactSection1 = ({ config }) => {
  // State for form submission
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
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
            <span className="text-blue-600 dark:text-blue-400 relative inline-block">
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

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Side - Contact Info */}
          <div className="space-y-6 sm:space-y-8">

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">

              {/* Email Card */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <HiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  Email Us
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                  {config?.contactInfo?.email?.description || "Get back within 24 hours"}
                </p>
                <a
                  href={`mailto:${config?.contactInfo?.email?.address || 'support@example.com'}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base hover:text-blue-700 dark:hover:text-blue-300 transition-colors break-all"
                >
                  {config?.contactInfo?.email?.address || 'support@example.com'}
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-linear-to-br from-purple-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <HiOutlinePhone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  Call Us
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                  {config?.contactInfo?.phone?.description || "Mon-Fri, 9am-6pm EST"}
                </p>
                <a
                  href={`tel:${config?.contactInfo?.phone?.number || '+15551234567'}`}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium text-sm sm:text-base hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  {config?.contactInfo?.phone?.number || '+1 (555) 123-4567'}
                </a>
              </div>

              {/* Office Card */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-linear-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <HiOutlineLocationMarker className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  Visit Us
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                  {config?.contactInfo?.office?.description || "Main office location"}
                </p>
                <address className="not-italic text-xs sm:text-sm text-green-600 dark:text-green-400">
                  {config?.contactInfo?.office?.address || '123 Business Ave, Suite 100, New York, NY 10001'}
                </address>
              </div>

              {/* Hours Card */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-linear-to-br from-yellow-500 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <HiOutlineClock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  Business Hours
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  {config?.contactInfo?.hours?.map((hour, idx) => (
                    <div key={idx} className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-600 dark:text-gray-400">{hour.day}</span>
                      <span className="text-gray-900 dark:text-white font-medium">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            {config?.map?.show && (
              <div className="rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-48 bg-gray-200 dark:bg-gray-700">
                {config.map.embedUrl ? (
                  <iframe
                    src={config.map.embedUrl}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Office location"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                    Map placeholder
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              {config?.form?.title || "Send Us a Message"}
            </h3>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg sm:rounded-xl flex items-center">
                <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400 mr-2" />
                <span className="text-xs sm:text-sm text-green-700 dark:text-green-300">
                  {config?.form?.successMessage || "Thank you for your message! We'll get back to you soon."}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                  {config?.form?.fields?.name?.label || "Your Name"} *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineUser className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={config?.form?.fields?.name?.required !== false}
                    placeholder={config?.form?.fields?.name?.placeholder || "John Doe"}
                    className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                  {config?.form?.fields?.email?.label || "Email Address"} *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineEnvelope className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required={config?.form?.fields?.email?.required !== false}
                    placeholder={config?.form?.fields?.email?.placeholder || "john@company.com"}
                    className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                  {config?.form?.fields?.company?.label || "Company Name"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineBuildingOffice2 className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={config?.form?.fields?.company?.placeholder || "Your Company"}
                    className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                  {config?.form?.fields?.message?.label || "Your Message"} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required={config?.form?.fields?.message?.required !== false}
                  placeholder={config?.form?.fields?.message?.placeholder || "How can we help you?"}
                  className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 md:py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    {config?.form?.submitText || "Send Message"}
                    <HiOutlinePaperAirplane className="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </button>

              {/* Privacy Notice */}
              <p className="text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-500 mt-3 sm:mt-4">
                {config?.form?.privacyText || "By submitting this form, you agree to our "}
                <Link href={config?.links?.privacy || "/privacy"} className="text-blue-600 dark:text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection1;