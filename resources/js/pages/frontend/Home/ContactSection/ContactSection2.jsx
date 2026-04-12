// page/frontend/Home/ContactSection/ContactSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineChat,
  HiOutlineCheckCircle,
  HiOutlineUser,
  HiOutlinePaperAirplane,
  HiOutlineMap,
  HiOutlineChatAlt,
  HiOutlineUsers
} from 'react-icons/hi';
import {
  HiOutlineEnvelope,
  HiOutlineBuildingOffice,
} from 'react-icons/hi2';

const ContactSection2 = ({ config }) => {
  // State for form submission
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('general');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  // Helper function to safely get email
  const getEmail = () => {
    const email = config?.contactInfo?.email;
    if (!email) return 'support@example.com';
    if (typeof email === 'string') return email;
    if (typeof email === 'object' && email.address) return email.address;
    return 'support@example.com';
  };

  // Helper function to safely get phone
  const getPhone = () => {
    const phone = config?.contactInfo?.phone;
    if (!phone) return '+1 (555) 123-4567';
    if (typeof phone === 'string') return phone;
    if (typeof phone === 'object' && phone.number) return phone.number;
    return '+1 (555) 123-4567';
  };

  // Helper function to safely get phone description
  const getPhoneDescription = () => {
    const phone = config?.contactInfo?.phone;
    if (typeof phone === 'object' && phone.description) return phone.description;
    return 'Mon-Fri, 9am-6pm EST';
  };

  // Helper function to safely get address as string
  const getAddressString = () => {
    const office = config?.contactInfo?.office;
    if (!office) return '123 Business Ave, Suite 100, New York, NY 10001';
    if (typeof office === 'string') return office;
    if (typeof office === 'object' && office.address) return office.address;
    return '123 Business Ave, Suite 100, New York, NY 10001';
  };

  // Helper function to safely get office description
  const getOfficeDescription = () => {
    const office = config?.contactInfo?.office;
    if (typeof office === 'object' && office.description) return office.description;
    return 'Main office location';
  };

  // Helper function to safely get office hours
  const getOfficeHours = () => {
    const hours = config?.contactInfo?.hours;
    if (hours && Array.isArray(hours)) {
      return hours;
    }
    // Default office hours
    return [
      { day: 'Monday - Friday', time: '9:00 - 18:00' },
      { day: 'Saturday', time: '10:00 - 14:00' },
      { day: 'Sunday', time: 'Closed' }
    ];
  };

  // Helper function to safely get social links
  const getSocialLinks = () => {
    if (config?.social?.links && Array.isArray(config.social.links)) {
      return config.social.links;
    }
    return [];
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-blue-500/30">
              <HiOutlineChatAlt className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.prefix}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
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

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">

          {/* Email Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group hover:-translate-y-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-linear-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <HiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">Email Us</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-2 sm:mb-3">
              {typeof config?.contactInfo?.email === 'object' ? config.contactInfo.email.description : '24/7 support'}
            </p>
            <a
              href={`mailto:${getEmail()}`}
              className="text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm hover:text-blue-700 dark:hover:text-blue-300 break-all"
            >
              {getEmail()}
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group hover:-translate-y-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-linear-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <HiOutlinePhone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">Call Us</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-2 sm:mb-3">
              {getPhoneDescription()}
            </p>
            <a
              href={`tel:${getPhone()}`}
              className="text-purple-600 dark:text-purple-400 font-medium text-xs sm:text-sm hover:text-purple-700 dark:hover:text-purple-300"
            >
              {getPhone()}
            </a>
          </div>

          {/* Live Chat Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group hover:-translate-y-1 cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-linear-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <HiOutlineChat className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">Live Chat</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-2 sm:mb-3">Average response: 2 min</p>
            <button className="text-green-600 dark:text-green-400 font-medium text-xs sm:text-sm hover:text-green-700 dark:hover:text-green-300">
              Start chat now →
            </button>
          </div>

          {/* Visit Us Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group hover:-translate-y-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-linear-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <HiOutlineLocationMarker className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">Visit Us</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-2 sm:mb-3">
              {getOfficeDescription()}
            </p>
            <address className="not-italic text-xs sm:text-sm text-yellow-600 dark:text-yellow-400">
              {getAddressString()}
            </address>
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Left Side - Contact Info & Map */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-5 md:space-y-6">

            {/* Office Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-3 sm:mb-4">
                <HiOutlineClock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Office Hours</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {getOfficeHours().map((hour, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-gray-600 dark:text-gray-400">{hour.day}</span>
                    <span className="text-gray-900 dark:text-white font-medium">{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            {config?.map?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-3 sm:mb-4">
                  <HiOutlineMap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400 mr-2" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Our Location</h3>
                </div>
                <div className="rounded-lg sm:rounded-xl overflow-hidden h-40 sm:h-48 bg-gray-200 dark:bg-gray-700">
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
                      Map view
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Social Links */}
            {config?.social?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-3 sm:mb-4">
                  <HiOutlineUsers className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 dark:text-pink-400 mr-2" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Follow Us</h3>
                </div>
                <div className="flex space-x-3 sm:space-x-4">
                  {getSocialLinks().map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all text-xs sm:text-sm"
                      aria-label={link.label}
                    >
                      {typeof link.icon === 'string' ? link.icon : link.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">

              {/* Department Selection */}
              <div className="mb-4 sm:mb-5 md:mb-6">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                  Select Department
                </label>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedDepartment('general')}
                    className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${selectedDepartment === 'general'
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    General Inquiries
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDepartment('sales')}
                    className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${selectedDepartment === 'sales'
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    Sales
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDepartment('support')}
                    className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${selectedDepartment === 'support'
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    Technical Support
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDepartment('billing')}
                    className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${selectedDepartment === 'billing'
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    Billing
                  </button>
                </div>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg sm:rounded-xl flex items-center">
                  <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400 mr-2 shrink-0" />
                  <span className="text-xs sm:text-sm text-green-700 dark:text-green-300">
                    {config?.form?.successMessage || "Thank you for your message! We'll get back to you within 24 hours."}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">

                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                      {config?.form?.fields?.name?.label || 'Full Name'} *
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
                        placeholder={config?.form?.fields?.name?.placeholder || 'John Doe'}
                        className="block w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                      {config?.form?.fields?.email?.label || 'Email Address'} *
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
                        placeholder={config?.form?.fields?.email?.placeholder || 'john@company.com'}
                        className="block w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                    {config?.form?.fields?.company?.label || 'Company Name'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiOutlineBuildingOffice className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required={config?.form?.fields?.company?.required || false}
                      placeholder={config?.form?.fields?.company?.placeholder || 'Your Company'}
                      className="block w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                    {config?.form?.fields?.message?.label || 'Your Message'} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required={config?.form?.fields?.message?.required !== false}
                    placeholder={config?.form?.fields?.message?.placeholder || 'How can we help you?'}
                    className="block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
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
                      {config?.form?.submitText || 'Send Message'}
                      <HiOutlinePaperAirplane className="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-500 mt-3 sm:mt-4">
                  {config?.form?.privacyText || 'By submitting this form, you agree to our '}
                  <Link href={config?.links?.privacy || "/privacy"} className="text-blue-600 dark:text-blue-400 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        {config?.faqLink?.show && (
          <div className="text-center mt-10 sm:mt-12 md:mt-16">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {config.faqLink.text}{' '}
              <Link
                href={config.faqLink.url}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {config.faqLink.linkText}
              </Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection2;