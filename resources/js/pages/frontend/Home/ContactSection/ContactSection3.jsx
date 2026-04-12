// page/frontend/Home/ContactSection/ContactSection3.jsx

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
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlinePaperAirplane,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
} from 'react-icons/hi';

const ContactSection3 = ({ config }) => {
  // State for form submission
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [activeTab, setActiveTab] = useState('message');
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
      setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#9ca3af_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,#4b5563_1px,transparent_0)] bg-size-[40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-lg shadow-amber-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
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

        {/* Hero Contact Card */}
        <div className="bg-linear-to-br from-amber-500 to-pink-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 mb-10 sm:mb-12 md:mb-16 text-white relative overflow-hidden">

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-16 -right-16 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-8 items-center">

            {/* Left Content */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                {config?.hero?.title || "We'd Love to Hear From You"}
              </h3>
              <p className="text-amber-100 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                {config?.hero?.subtitle || "Our team is ready to help with any questions you might have."}
              </p>

              {/* Response Time Badge */}
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                <HiOutlineLightningBolt className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium">
                  {config?.hero?.responseTime || "Average response: 2 hours"}
                </span>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">24/7</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-amber-100">Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">15min</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-amber-100">Avg. Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">98%</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-amber-100">Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">50+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-amber-100">Experts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options - 3 Column Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">

          {/* Email Option */}
          <div className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1 text-center relative overflow-hidden">
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-linear-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <HiOutlineMail className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 md:mb-3">Email Us</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 md:mb-4">
                Get back within 24 hours
              </p>
              <a
                href={`mailto:${config?.contactInfo?.email || 'support@example.com'}`}
                className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium text-xs sm:text-sm hover:text-amber-700 dark:hover:text-amber-300 break-all"
              >
                {config?.contactInfo?.email || 'support@example.com'}
                <HiOutlineArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Phone Option */}
          <div className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1 text-center relative overflow-hidden">
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-linear-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <HiOutlinePhone className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 md:mb-3">Call Us</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 md:mb-4">
                Mon-Fri, 9am-6pm EST
              </p>
              <a
                href={`tel:${config?.contactInfo?.phone || '+15551234567'}`}
                className="inline-flex items-center text-pink-600 dark:text-pink-400 font-medium text-xs sm:text-sm hover:text-pink-700 dark:hover:text-pink-300"
              >
                {config?.contactInfo?.phone || '+1 (555) 123-4567'}
                <HiOutlineArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Chat Option */}
          <div className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1 text-center relative overflow-hidden cursor-pointer">
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-linear-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <HiOutlineChat className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 md:mb-3">Live Chat</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 md:mb-4">
                Average response: 2 min
              </p>
              <button className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium text-xs sm:text-sm hover:text-purple-700 dark:hover:text-purple-300">
                Start chat now
                <HiOutlineArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content - Two Column Layout with Tabs */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Left Side - Location & Info */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-5 md:space-y-6">

            {/* Office Location Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                  <HiOutlineLocationMarker className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Our Office</h3>
              </div>
              <address className="not-italic text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                {config?.office?.address || '123 Business Avenue, Suite 100, New York, NY 10001'}
              </address>

              {/* Map Preview */}
              {config?.map?.show && (
                <div className="rounded-lg sm:rounded-xl overflow-hidden h-28 sm:h-32 bg-gray-200 dark:bg-gray-700 mb-3 sm:mb-4">
                  {config.map.embedUrl ? (
                    <iframe
                      src={config.map.embedUrl}
                      className="w-full h-full"
                      style={{ border: 0 }}
                      loading="lazy"
                      title="Office location"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                      Map preview
                    </div>
                  )}
                </div>
              )}

              {/* Direction Link */}
              <a
                href={config?.office?.mapsUrl || "https://maps.google.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-medium hover:text-amber-700 dark:hover:text-amber-300"
              >
                Get directions
                <HiOutlineArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>

            {/* Office Hours Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                  <HiOutlineClock className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Office Hours</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {config?.officeHours?.map((hour, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-gray-600 dark:text-gray-400">{hour.day}</span>
                    <span className="text-gray-900 dark:text-white font-medium">{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Card */}
            {config?.social?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                    <HiOutlineUsers className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Connect With Us</h3>
                </div>
                <div className="flex space-x-2 sm:space-x-3">
                  {config.social.links?.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-linear-to-r hover:from-amber-500 hover:to-pink-500 transition-all text-xs sm:text-sm"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Contact Form with Tabs */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4 sm:mb-6 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('message')}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'message'
                      ? 'border-amber-500 text-amber-600 dark:text-amber-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                >
                  Send Message
                </button>
                <button
                  onClick={() => setActiveTab('support')}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'support'
                      ? 'border-amber-500 text-amber-600 dark:text-amber-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                >
                  Technical Support
                </button>
                <button
                  onClick={() => setActiveTab('sales')}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'sales'
                      ? 'border-amber-500 text-amber-600 dark:text-amber-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                >
                  Sales Inquiry
                </button>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg sm:rounded-xl flex items-center">
                  <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400 mr-2 shrink-0" />
                  <span className="text-xs sm:text-sm text-green-700 dark:text-green-300">
                    {config?.form?.successMessage || "Thank you for your message! We'll get back to you soon."}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">

                  {/* Name Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">

                  {/* Company Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={activeTab === 'support' ? "Technical issue description" : activeTab === 'sales' ? "Pricing inquiry" : "What is this regarding?"}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Priority Selection for Support Tab */}
                {activeTab === 'support' && (
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                      Priority Level
                    </label>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <label className="flex items-center">
                        <input type="radio" name="priority" value="low" className="mr-1 sm:mr-2" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Low</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="priority" value="medium" className="mr-1 sm:mr-2" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Medium</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="priority" value="high" className="mr-1 sm:mr-2" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">High</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="priority" value="urgent" className="mr-1 sm:mr-2" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Urgent</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 md:py-4 bg-linear-to-r from-amber-500 to-pink-500 text-white font-semibold rounded-lg sm:rounded-xl hover:from-amber-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
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
                      Send Message
                      <HiOutlinePaperAirplane className="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-500 mt-3 sm:mt-4">
                  By submitting this form, you agree to our{' '}
                  <Link href={config?.links?.privacy || "/privacy"} className="text-amber-600 dark:text-amber-400 hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        {config?.trustBadges?.show && (
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4">
              <div className="flex items-center">
                <HiOutlineShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">SSL Secure</span>
              </div>
              <div className="w-px h-3 sm:h-4 bg-gray-300 dark:bg-gray-700" />
              <div className="flex items-center">
                <HiOutlineLockClosed className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Privacy Protected</span>
              </div>
              <div className="w-px h-3 sm:h-4 bg-gray-300 dark:bg-gray-700" />
              <div className="flex items-center">
                <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">24/7 Support</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection3;