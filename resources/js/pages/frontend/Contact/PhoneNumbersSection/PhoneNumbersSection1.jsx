// frontend/Contact/PhoneNumbersSection/PhoneNumbersSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineArrowRight,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
} from 'react-icons/hi';

const PhoneNumbersSection1 = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('all');

  const faqs = config?.faqs || [];
  const phoneNumbers = config?.phoneNumbers || [];
  const regions = config?.regions || [];
  const stats = config?.stats || [];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const filteredNumbers = phoneNumbers.filter(number => {
    return activeRegion === 'all' || number.region === activeRegion;
  });

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Phone Numbers"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Emergency Support Banner */}
        <div className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
                <HiOutlinePhone className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Emergency Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">For critical system issues affecting your business operations</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{config?.emergencyNumber || "+1 (888) 999-9999"}</div>
              <p className="text-xs text-gray-500">Available 24/7 for enterprise customers</p>
            </div>
          </div>
        </div>

        {/* Region Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveRegion('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeRegion === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
              }`}
          >
            All Regions
          </button>
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${activeRegion === region.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                }`}
            >
              <span>{region.icon}</span>
              {region.name}
            </button>
          ))}
        </div>

        {/* Phone Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredNumbers.map((number, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <div className={`h-2 ${number.type === 'support' ? 'bg-blue-500' : number.type === 'sales' ? 'bg-green-500' : 'bg-purple-500'}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{number.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{number.department}</h3>
                    <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                      <HiOutlineGlobeAlt className="w-3 h-3" />
                      {number.regionName}
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <a
                    href={`tel:${number.phone}`}
                    className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {number.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <HiOutlineClock className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {number.hours}
                  </div>
                </div>
                <div className="flex items-start gap-2 mb-4">
                  <HiOutlineMail className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {number.email}
                  </div>
                </div>
                <Link
                  href={`tel:${number.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  <HiOutlinePhone className="w-4 h-4" />
                  Call Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search phone numbers or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Results Count */}
        {searchQuery && (
          <div className="text-center mb-4 text-sm text-gray-500">
            Found {filteredFaqs.length} results for "{searchQuery}"
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-start gap-3 pr-4">
                  <div className="text-xl mt-0.5">{faq.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </div>
                    {faq.tags && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {faq.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-blue-500">
                  {openFaq === index ? (
                    <HiOutlineChevronUp className="w-5 h-5" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                  {faq.link && (
                    <Link
                      href={faq.link}
                      className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-3 hover:gap-2 transition-all"
                    >
                      Learn more
                      <HiOutlineArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500">Try adjusting your search to find what you're looking for.</p>
          </div>
        )}

        {/* Callback Request */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HiOutlinePhone className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Request a Callback</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Can't reach us? Leave your number and we'll call you back within 30 minutes during business hours.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="tel"
              placeholder="Your phone number"
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Request
            </button>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineQuestionMarkCircle className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.contactText || "Need help finding the right number? Contact our support team."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Us"}
              <HiOutlineArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Security Note */}
        {config?.showSecurityNote && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
              <HiOutlineShieldCheck className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.securityText || "We never ask for passwords or sensitive information over the phone"}
              </span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default PhoneNumbersSection1;