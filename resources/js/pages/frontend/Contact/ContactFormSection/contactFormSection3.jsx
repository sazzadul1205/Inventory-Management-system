// frontend/Contact/ContactFormSection/ContactFormSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineUser,
  HiOutlineBuildingOffice,
  HiOutlineDocumentText,
  HiOutlinePaperAirplane,
  HiOutlineExclamationTriangle,
  HiOutlineGlobeAlt,
  HiOutlineClipboardList,
  HiOutlineExternalLink,
  HiOutlineX,
  HiOutlineBookmark,
  HiOutlineSearch,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from 'react-icons/hi';

const ContactFormSection3 = ({ config }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    department: '',
    inquiryType: 'general',
    priority: 'normal',
    preferredContact: 'email',
    message: '',
    attachments: [],
    newsletter: false,
    agreeTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showFaq, setShowFaq] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaqCategory, setActiveFaqCategory] = useState('all');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [savedFaqs, setSavedFaqs] = useState([]);
  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  const faqs = config?.faqs || [];
  const faqCategories = config?.faqCategories || [];
  const contactMethods = config?.contactMethods || [];
  const inquiryTypes = config?.inquiryTypes || [];
  const companySizes = config?.companySizes || [];
  const departments = config?.departments || [];
  const stats = config?.stats || [];
  const supportHours = config?.supportHours || [];

  useEffect(() => {
    const savedVotes = localStorage.getItem('contactFaqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
    const saved = localStorage.getItem('savedContactFaqs');
    if (saved) {
      setSavedFaqs(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }));
  };

  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        department: '',
        inquiryType: 'general',
        priority: 'normal',
        preferredContact: 'email',
        message: '',
        attachments: [],
        newsletter: false,
        agreeTerms: false,
      });
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = '';
    }, 1000);
  };

  const handleHelpful = (faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('contactFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  };

  const handleSaveFaq = (faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedContactFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeFaqCategory === 'all' || faq.category === activeFaqCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const highlightedText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Contact Support Center"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
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

        {/* Toggle between Contact Form and FAQ */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setShowFaq(false)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!showFaq
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
          >
            Contact Form
          </button>
          <button
            onClick={() => setShowFaq(true)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${showFaq
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
          >
            Frequently Asked Questions
          </button>
        </div>

        {/* FAQ Section */}
        {showFaq ? (
          <div className="max-w-4xl mx-auto">
            {/* FAQ Search */}
            <div className="mb-8">
              <div className="relative">
                <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveFaqCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFaqCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                  }`}
              >
                All Questions
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFaqCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${activeFaqCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                    }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Results Count */}
            {searchQuery && (
              <div className="text-center mb-4 text-sm text-gray-500">
                Found {filteredFaqs.length} results for "{searchQuery}"
              </div>
            )}

            {/* FAQ Accordion */}
            <div className="space-y-4 mb-12">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-start gap-3 pr-4">
                      <div className="text-xl mt-0.5">{faq.icon}</div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {highlightedText(faq.question, searchQuery)}
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
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSaveFaq(faq.id);
                        }}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <HiOutlineBookmark className={`w-4 h-4 ${savedFaqs.includes(faq.id) ? 'fill-blue-600 text-blue-600' : ''}`} />
                      </button>
                      <div className="text-blue-500">
                        {openFaq === index ? (
                          <HiOutlineChevronUp className="w-5 h-5" />
                        ) : (
                          <HiOutlineChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {highlightedText(faq.answer, searchQuery)}
                      </p>
                      {faq.link && (
                        <Link
                          href={faq.link}
                          className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-3 hover:gap-2 transition-all"
                        >
                          Learn more
                          <HiOutlineExternalLink className="w-3 h-3" />
                        </Link>
                      )}

                      {/* Helpful Section */}
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-gray-500">Was this helpful?</span>
                          <button
                            onClick={() => handleHelpful(faq.id, true)}
                            className={`flex items-center gap-1 text-xs transition-colors ${helpfulVotes[faq.id] === true
                                ? 'text-green-600'
                                : 'text-gray-400 hover:text-green-600'
                              }`}
                          >
                            <HiOutlineThumbUp className="w-4 h-4" />
                            Yes
                          </button>
                          <button
                            onClick={() => handleHelpful(faq.id, false)}
                            className={`flex items-center gap-1 text-xs transition-colors ${helpfulVotes[faq.id] === false
                                ? 'text-red-600'
                                : 'text-gray-400 hover:text-red-600'
                              }`}
                          >
                            <HiOutlineThumbDown className="w-4 h-4" />
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={() => setShowFaq(false)}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Contact Support
                </button>
              </div>
            )}

            {/* Saved FAQs Section */}
            {savedFaqs.length > 0 && searchQuery === '' && activeFaqCategory === 'all' && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HiOutlineBookmark className="w-5 h-5 text-blue-600" />
                  Saved Questions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                      <div className="flex items-start gap-2">
                        <div className="text-xl">{faq.icon}</div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">{faq.question}</div>
                          <button
                            onClick={() => {
                              setActiveFaqCategory(faq.category);
                              setSearchQuery('');
                              setOpenFaq(null);
                            }}
                            className="text-xs text-blue-600 mt-1 hover:underline"
                          >
                            View in {faqCategories.find(c => c.id === faq.category)?.name}
                          </button>
                        </div>
                        <button
                          onClick={() => handleSaveFaq(faq.id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <HiOutlineX className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Contact Form Section */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="text-2xl">{method.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-white">{method.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{method.value}</div>
                        {method.link && (
                          <Link href={method.link} className="text-xs text-blue-600 hover:underline mt-1 inline-block">
                            {method.linkText || 'Contact'}
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Support Hours</h3>
                <div className="space-y-3">
                  {supportHours.map((hour, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <HiOutlineClock className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-900 dark:text-white">{hour.days}</div>
                        <div className="text-xs text-gray-500">{hour.hours}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Global Locations</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <HiOutlineGlobeAlt className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-900 dark:text-white">North America</div>
                      <div className="text-xs text-gray-500">San Francisco, CA</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HiOutlineGlobeAlt className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-900 dark:text-white">EMEA</div>
                      <div className="text-xs text-gray-500">London, UK</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HiOutlineGlobeAlt className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-900 dark:text-white">APAC</div>
                      <div className="text-xs text-gray-500">Singapore</div>
                    </div>
                  </div>
                </div>
              </div>

              {config?.showTrustBadge && (
                <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-5 text-center border border-green-200 dark:border-green-800">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <HiOutlineCheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Response Guarantee</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {config?.trustText || "All inquiries receive a response within 24 hours. Enterprise customers get priority 1-hour response."}
                  </p>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" ref={formRef}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <HiOutlinePaperAirplane className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h3>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Thanks for reaching out. Our support team will get back to you within 24 hours.</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                      <HiOutlineDocumentText className="w-4 h-4 text-gray-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Reference #: INV-{Math.floor(Math.random() * 10000)}</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <HiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full pl-9 pr-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500`}
                          />
                        </div>
                        {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company</label>
                        <div className="relative">
                          <HiOutlineBuildingOffice className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size</label>
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select size</option>
                          {companySizes.map((size, idx) => (
                            <option key={idx} value={size.value}>{size.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Department</label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select department</option>
                          {departments.map((dept, idx) => (
                            <option key={idx} value={dept.value}>{dept.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Inquiry Type</label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                          {inquiryTypes.map((type, idx) => (
                            <option key={idx} value={type.value}>{type.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="normal">Normal - General question</option>
                          <option value="high">High - Important issue</option>
                          <option value="urgent">Urgent - System down</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Contact</label>
                        <select
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="chat">Live Chat</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500`}
                        placeholder="Please describe your question or issue in detail. Include any relevant information that will help us assist you better..."
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Attachments (Optional)</label>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        multiple
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      {formData.attachments.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {formData.attachments.map((file, idx) => (
                            <div key={idx} className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                              <span>{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeAttachment(idx)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <HiOutlineX className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="text-xs text-gray-500 mt-1">Max file size: 10MB. Supported formats: PDF, PNG, JPG, DOC</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label className="text-sm text-gray-600 dark:text-gray-400">
                        Subscribe to our newsletter for product updates and tips
                      </label>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 mt-0.5"
                      />
                      <label className="text-sm text-gray-600 dark:text-gray-400">
                        I agree to the <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> <span className="text-red-500">*</span>
                      </label>
                    </div>
                    {errors.agreeTerms && <p className="text-xs text-red-500 mt-1">{errors.agreeTerms}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <HiOutlineArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                      <HiOutlineExclamationTriangle className="w-3 h-3" />
                      <span>By submitting, you agree to our Privacy Policy. We'll never share your information.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Emergency Contact Banner */}
        {config?.showEmergencyContact && (
          <div className="mt-12 bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <HiOutlineExclamationTriangle className="w-8 h-8 text-red-600" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Emergency Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">For critical system issues affecting your business operations</p>
                </div>
              </div>
              <Link
                href="/emergency"
                className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all inline-flex items-center gap-2"
              >
                <HiOutlinePhone className="w-4 h-4" />
                Emergency Hotline
              </Link>
            </div>
          </div>
        )}

        {/* Knowledge Base Link */}
        <div className="mt-8 text-center">
          <Link
            href="/knowledge-base"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <HiOutlineClipboardList className="w-4 h-4" />
            Browse our complete Knowledge Base
            <HiOutlineArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <style>{`
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        mark {
          background-color: #fef08a;
          color: #1e293b;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #854d0e;
          color: #fef9c3;
        }
      `}</style>
    </section>
  );
};

export default ContactFormSection3;