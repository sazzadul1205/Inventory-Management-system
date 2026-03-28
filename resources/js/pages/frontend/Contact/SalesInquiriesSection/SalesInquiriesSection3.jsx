// frontend/FAQ/SalesInquiriesSection/SalesInquiriesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineX,
  HiOutlineDownload,
  HiOutlinePlay,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
} from 'react-icons/hi';

const SalesInquiriesSection3 = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showQuoteCalculator, setShowQuoteCalculator] = useState(false);
  const [showComparisonTable, setShowComparisonTable] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [calculatorValues, setCalculatorValues] = useState({
    users: 10,
    skus: 5000,
    locations: 3,
    annualBilling: true,
    addons: {
      advancedAnalytics: false,
      customIntegrations: false,
      dedicatedSupport: false,
      apiAccess: false,
      whiteLabel: false,
    }
  });
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    industry: '',
    timeline: 'asap',
    budget: 'not-sure',
    message: '',
    preferredContact: 'email',
    newsletter: false,
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const searchRef = useRef(null);

  const faqs = config?.faqs || [];
  const categories = config?.categories || [];
  const popularQuestions = config?.popularQuestions || [];
  const stats = config?.stats || [];
  const plans = config?.plans || [];
  const enterpriseFeatures = config?.enterpriseFeatures || [];
  const industries = config?.industries || [];
  const testimonials = config?.testimonials || [];

  useEffect(() => {
    const savedVotes = localStorage.getItem('salesFaqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
    const saved = localStorage.getItem('savedSalesFaqs');
    if (saved) {
      setSavedFaqs(JSON.parse(saved));
    }
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleHelpful = (faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('salesFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  };

  const handleSaveFaq = (faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedSalesFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setTimeout(() => {
      setContactSubmitted(true);
      setTimeout(() => {
        setShowContactForm(false);
        setContactSubmitted(false);
        setContactForm({
          name: '', email: '', phone: '', company: '', companySize: '', industry: '',
          timeline: 'asap', budget: 'not-sure', message: '', preferredContact: 'email', newsletter: false
        });
      }, 2000);
    }, 500);
  };

  const handleExport = () => {
    const exportData = filteredFaqs.map(faq => ({
      question: faq.question,
      answer: faq.answer,
      category: categories.find(c => c.id === faq.category)?.name || faq.category,
      tags: faq.tags
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'sales-faq-export.json');
    linkElement.click();
  };

  const handlePrint = () => {
    window.print();
  };

  const calculateQuote = () => {
    let basePrice = 99;
    if (calculatorValues.users > 20) basePrice += (calculatorValues.users - 20) * 3;
    if (calculatorValues.skus > 10000) basePrice += Math.floor((calculatorValues.skus - 10000) / 1000) * 10;
    if (calculatorValues.locations > 1) basePrice += (calculatorValues.locations - 1) * 50;
    if (calculatorValues.addons.advancedAnalytics) basePrice += 100;
    if (calculatorValues.addons.customIntegrations) basePrice += 200;
    if (calculatorValues.addons.dedicatedSupport) basePrice += 300;
    if (calculatorValues.addons.apiAccess) basePrice += 150;
    if (calculatorValues.addons.whiteLabel) basePrice += 500;
    if (calculatorValues.annualBilling) basePrice = basePrice * 0.8;
    return Math.round(basePrice);
  };

  const filteredFaqs = faqs
    .filter(faq => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'recent') return b.updatedAt?.localeCompare(a.updatedAt) || 0;
      if (sortBy === 'popular') return (b.views || 0) - (a.views || 0);
      if (sortBy === 'helpful') return (helpfulVotes[b.id] ? 1 : 0) - (helpfulVotes[a.id] ? 1 : 0);
      return 0;
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

  const groupedFaqs = categories.reduce((acc, category) => {
    acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
    return acc;
  }, {});

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Sales Inquiries Knowledge Base"
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

        {/* Testimonials Carousel */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xl">
                    {testimonial.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Choose Your Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center text-sm font-semibold py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-6 text-center">
                  <div className="text-4xl mb-3">{plan.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h4>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}
                    {plan.price !== 'Custom' && <span className="text-sm text-gray-500 font-normal">/{plan.billing}</span>}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
                  <ul className="space-y-2 mb-6 text-left">
                    {plan.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.ctaLink}
                    className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all ${plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    {plan.ctaText}
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => setShowComparisonTable(!showComparisonTable)}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              {showComparisonTable ? 'Hide detailed comparison' : 'View detailed pricing comparison'}
              <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${showComparisonTable ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        {showComparisonTable && (
          <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Users</td>
                    <td className="px-6 py-4 text-center text-sm">Up to 5</td>
                    <td className="px-6 py-4 text-center text-sm">Up to 20</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">SKUs</td>
                    <td className="px-6 py-4 text-center text-sm">1,000</td>
                    <td className="px-6 py-4 text-center text-sm">10,000</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Locations</td>
                    <td className="px-6 py-4 text-center text-sm">1</td>
                    <td className="px-6 py-4 text-center text-sm">Up to 5</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">API Access</td>
                    <td className="px-6 py-4 text-center text-sm">❌</td>
                    <td className="px-6 py-4 text-center text-sm">✅ Basic</td>
                    <td className="px-6 py-4 text-center text-sm">✅ Full</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Support Response Time</td>
                    <td className="px-6 py-4 text-center text-sm">48 hours</td>
                    <td className="px-6 py-4 text-center text-sm">24 hours</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">1 hour</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dedicated Account Manager</td>
                    <td className="px-6 py-4 text-center text-sm">❌</td>
                    <td className="px-6 py-4 text-center text-sm">❌</td>
                    <td className="px-6 py-4 text-center text-sm">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Custom Integrations</td>
                    <td className="px-6 py-4 text-center text-sm">❌</td>
                    <td className="px-6 py-4 text-center text-sm">❌</td>
                    <td className="px-6 py-4 text-center text-sm">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Quote Calculator CTA */}
        <div className="mb-8">
          <button
            onClick={() => setShowQuoteCalculator(!showQuoteCalculator)}
            className="mx-auto block px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all items-center gap-2"
          >
            <HiOutlineChartBar className="w-5 h-5" />
            {showQuoteCalculator ? 'Hide Quote Calculator' : 'Get a Custom Quote'}
          </button>
        </div>

        {/* Quote Calculator */}
        {showQuoteCalculator && (
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Custom Quote Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Users
                </label>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={calculatorValues.users}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, users: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="text-center text-sm text-blue-600 mt-1">{calculatorValues.users} users</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of SKUs
                </label>
                <input
                  type="range"
                  min="100"
                  max="500000"
                  step="100"
                  value={calculatorValues.skus}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, skus: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="text-center text-sm text-blue-600 mt-1">{calculatorValues.skus.toLocaleString()} SKUs</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Locations
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={calculatorValues.locations}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, locations: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="text-center text-sm text-blue-600 mt-1">{calculatorValues.locations} locations</div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Add-ons</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calculatorValues.addons.advancedAnalytics}
                      onChange={(e) => setCalculatorValues({
                        ...calculatorValues,
                        addons: { ...calculatorValues.addons, advancedAnalytics: e.target.checked }
                      })}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Advanced Analytics (+$100/mo)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calculatorValues.addons.customIntegrations}
                      onChange={(e) => setCalculatorValues({
                        ...calculatorValues,
                        addons: { ...calculatorValues.addons, customIntegrations: e.target.checked }
                      })}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Custom Integrations (+$200/mo)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calculatorValues.addons.dedicatedSupport}
                      onChange={(e) => setCalculatorValues({
                        ...calculatorValues,
                        addons: { ...calculatorValues.addons, dedicatedSupport: e.target.checked }
                      })}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Dedicated Account Manager (+$300/mo)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calculatorValues.addons.apiAccess}
                      onChange={(e) => setCalculatorValues({
                        ...calculatorValues,
                        addons: { ...calculatorValues.addons, apiAccess: e.target.checked }
                      })}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Full API Access (+$150/mo)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calculatorValues.addons.whiteLabel}
                      onChange={(e) => setCalculatorValues({
                        ...calculatorValues,
                        addons: { ...calculatorValues.addons, whiteLabel: e.target.checked }
                      })}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">White Label (+$500/mo)</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calculatorValues.annualBilling}
                    onChange={(e) => setCalculatorValues({ ...calculatorValues, annualBilling: e.target.checked })}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Annual billing (save 20%)</span>
                </label>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                <div className="text-4xl font-bold text-blue-600">${calculateQuote()}</div>
                <div className="text-sm text-gray-500">per month</div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Request This Quote
                </button>
                <p className="text-xs text-gray-500 mt-2">*Final pricing may vary based on specific requirements</p>
              </div>
            </div>
          </div>
        )}

        {/* Enterprise Features */}
        <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise Features</h3>
            <p className="text-gray-600 dark:text-gray-400">Everything in Professional, plus:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Questions */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
            Popular Sales Questions
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {popularQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(question)}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 transition-all"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Search and Action Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative" ref={searchRef}>
            <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search sales questions..."
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
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
            >
              <HiOutlineFilter className="w-4 h-4" />
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="helpful">Most Helpful</option>
            </select>
            <button
              onClick={handleExport}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
              title="Export FAQs"
            >
              <HiOutlineDownload className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
              title="Print FAQs"
            >
              <HiOutlinePrinter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${activeCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                      }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-1 ${activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                        }`}
                    >
                      <span>{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="helpful">Most Helpful</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        {searchQuery && (
          <div className="text-center mb-4 text-sm text-gray-500">
            Found {filteredFaqs.length} results for "{searchQuery}"
          </div>
        )}

        {/* Category Accordion View */}
        <div className="space-y-6 mb-12">
          {categories.map((category) => {
            const categoryFaqs = groupedFaqs[category.id] || [];
            if (categoryFaqs.length === 0 && searchQuery) return null;

            const isExpanded = expandedCategories[category.id] || searchQuery !== '';

            return (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">{categoryFaqs.length} questions</span>
                    {isExpanded ? (
                      <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
                    {categoryFaqs.map((faq, idx) => (
                      <div key={idx} className="p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <button
                          onClick={() => toggleFaq(`${category.id}-${idx}`)}
                          className="w-full text-left flex justify-between items-center"
                        >
                          <div className="flex items-start gap-3 pr-4">
                            <div className="text-xl mt-0.5">{faq.icon}</div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 dark:text-white">
                                {highlightedText(faq.question, searchQuery)}
                              </div>
                              {faq.tags && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {faq.tags.slice(0, 2).map((tag, tagIdx) => (
                                    <span key={tagIdx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
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
                              {openFaq === `${category.id}-${idx}` ? (
                                <HiOutlineChevronUp className="w-5 h-5" />
                              ) : (
                                <HiOutlineChevronDown className="w-5 h-5" />
                              )}
                            </div>
                          </div>
                        </button>

                        {openFaq === `${category.id}-${idx}` && (
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
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
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => setShowContactForm(true)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Contact Sales
            </button>
          </div>
        )}

        {/* Saved FAQs Section */}
        {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
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
                          setActiveCategory(faq.category);
                          setSearchQuery('');
                          setOpenFaq(null);
                        }}
                        className="text-xs text-blue-600 mt-1 hover:underline"
                      >
                        View in {categories.find(c => c.id === faq.category)?.name}
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

        {/* Sales Resources Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">📘</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Sales Brochure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Download our comprehensive sales brochure</p>
            <Link
              href="/downloads/sales-brochure.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <HiOutlineDownload className="w-4 h-4" />
              Download
            </Link>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🎥</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Product Demo</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Watch the platform in action</p>
            <Link
              href="/videos/demo"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <HiOutlinePlay className="w-4 h-4" />
              Watch Demo
            </Link>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Case Studies</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">See how businesses succeed</p>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <HiOutlineBookOpen className="w-4 h-4" />
              Read Now
            </Link>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">📄</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">ROI Whitepaper</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Calculate your potential ROI</p>
            <Link
              href="/whitepaper/roi"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              Download
            </Link>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowContactForm(false)}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Sales</h3>
                <button onClick={() => setShowContactForm(false)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              <div className="p-6">
                {!contactSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company *</label>
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Industry</label>
                      <select
                        value={contactForm.industry}
                        onChange={(e) => setContactForm({ ...contactForm, industry: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      >
                        <option value="">Select industry</option>
                        {industries.map((ind, idx) => (
                          <option key={idx} value={ind.value}>{ind.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size</label>
                      <select
                        value={contactForm.companySize}
                        onChange={(e) => setContactForm({ ...contactForm, companySize: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500-1000">500-1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Timeline</label>
                      <select
                        value={contactForm.timeline}
                        onChange={(e) => setContactForm({ ...contactForm, timeline: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      >
                        <option value="asap">ASAP (within 2 weeks)</option>
                        <option value="next-month">Next month</option>
                        <option value="quarter">Next quarter</option>
                        <option value="planning">Just exploring</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Budget Range</label>
                      <select
                        value={contactForm.budget}
                        onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      >
                        <option value="not-sure">Not sure yet</option>
                        <option value="under-1k">Under $1,000/month</option>
                        <option value="1k-5k">$1,000 - $5,000/month</option>
                        <option value="5k-10k">$5,000 - $10,000/month</option>
                        <option value="10k+">$10,000+/month</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                      <textarea
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        placeholder="Tell us about your business needs and requirements..."
                        required
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={contactForm.newsletter}
                        onChange={(e) => setContactForm({ ...contactForm, newsletter: e.target.checked })}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <label className="text-sm text-gray-600 dark:text-gray-400">
                        Subscribe to product updates and industry insights
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                    >
                      Request Consultation
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <div className="text-5xl mb-3">✅</div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Request Sent!</h4>
                    <p className="text-gray-600 dark:text-gray-400">A sales representative will contact you within 24 hours.</p>
                  </div>
                )}
                <p className="text-xs text-gray-500 text-center mt-4">We'll never share your information with third parties.</p>
              </div>
            </div>
          </div>
        )}

        {/* Schedule Demo CTA */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineCalendar className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Ready to see the platform in action?
            </span>
            <Link
              href={config?.demoLink || "/schedule-demo"}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Schedule a Demo
              <HiOutlineArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Sales Support CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineUsers className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.contactText || "Have questions about pricing or need a custom quote? Our sales team is here to help."}
            </span>
            <Link
              href={config?.contactLink || "/contact-sales"}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Sales"}
              <HiOutlineArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Enterprise Guarantee */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
              <HiOutlineShieldCheck className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "Enterprise plans include dedicated account manager, custom SLAs, and 24/7 priority support"}
              </span>
            </div>
          </div>
        )}
      </div>

      <style>{`
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
        input[type="range"] {
          -webkit-appearance: none;
          background: #e5e7eb;
          height: 4px;
          border-radius: 2px;
        }
        input[type="range"]:focus {
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }
        @media print {
          .no-print, button, .bg-noise-pattern {
            display: none !important;
          }
          body {
            background: white;
          }
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default SalesInquiriesSection3;