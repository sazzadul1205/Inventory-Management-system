// frontend/FAQ/GeneralQuestionsSection/GeneralQuestionsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineQuestionMarkCircle,
  HiOutlineArrowRight,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineChat,
  HiOutlineMailOpen
} from 'react-icons/hi';

const GeneralQuestionsSection2 = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showContactForm, setShowContactForm] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    question: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const searchRef = useRef(null);

  const faqs = config?.faqs || [];
  const categories = config?.categories || [];
  const popularQuestions = config?.popularQuestions || [];
  const stats = config?.stats || [];

  useEffect(() => {
    const savedVotes = localStorage.getItem('faqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleHelpful = (faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('faqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.question) return;
    setTimeout(() => {
      setContactSubmitted(true);
      setTimeout(() => {
        setShowContactForm(false);
        setContactSubmitted(false);
        setContactForm({ name: '', email: '', question: '' });
      }, 2000);
    }, 500);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
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
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="General Questions"
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
            <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Popular Questions */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
            Popular Questions
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

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8" ref={searchRef}>
          <div className="relative">
            <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
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
          {searchQuery && (
            <div className="text-center mt-2 text-sm text-gray-500">
              Found {filteredFaqs.length} results
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

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
                      {highlightedText(faq.question, searchQuery)}
                    </div>
                    {faq.category && (
                      <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
                        {categories.find(c => c.id === faq.category)?.name || faq.category}
                      </span>
                    )}
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
                        className={`flex items-center gap-1 text-xs transition-colors ${
                          helpfulVotes[faq.id] === true
                            ? 'text-green-600'
                            : 'text-gray-400 hover:text-green-600'
                        }`}
                      >
                        <HiOutlineThumbUp className="w-4 h-4" />
                        Yes
                      </button>
                      <button
                        onClick={() => handleHelpful(faq.id, false)}
                        className={`flex items-center gap-1 text-xs transition-colors ${
                          helpfulVotes[faq.id] === false
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
              onClick={() => setShowContactForm(true)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Ask a Question
            </button>
          </div>
        )}

        {/* Contact Support Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Live Chat Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Chat with our support team for immediate assistance
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2">
              <HiOutlineChat className="w-4 h-4" />
              Start Chat
            </button>
          </div>
          
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Send us your question and we'll respond within 24 hours
            </p>
            <button
              onClick={() => setShowContactForm(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2"
            >
              <HiOutlineMailOpen className="w-4 h-4" />
              Send Email
            </button>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowContactForm(false)}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ask a Question</h3>
                <button onClick={() => setShowContactForm(false)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              {!contactSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      required
                    />
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Question *</label>
                    <textarea
                      rows={4}
                      value={contactForm.question}
                      onChange={(e) => setContactForm({ ...contactForm, question: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  >
                    Send Question
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="text-5xl mb-3">✅</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Question Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-400">Our team will respond within 24 hours.</p>
                </div>
              )}
              <p className="text-xs text-gray-500 text-center mt-4">We'll never share your email with third parties.</p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineQuestionMarkCircle className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.contactText || "Still have questions? We're here to help."}
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
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default GeneralQuestionsSection2;