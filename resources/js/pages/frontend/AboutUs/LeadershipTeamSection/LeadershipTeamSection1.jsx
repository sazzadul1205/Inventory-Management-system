// frontend/AboutUs/LeadershipTeamSection/LeadershipTeamSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - All from react-icons library
import { AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineMail,
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlineChip,
  HiOutlineUsers,
  HiOutlineLightBulb,
  HiOutlineQuestionMarkCircle,
  HiOutlineUserCircle,
  HiOutlineX,
} from 'react-icons/hi';
import { HiOutlineMegaphone } from 'react-icons/hi2';

const LeadershipTeamSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const departments = config?.departments || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const leaders = useMemo(() => config?.leaders || [], [config?.leaders]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineChevronDown,
      HiOutlineChevronUp,
      HiOutlineSearch,
      HiOutlineMail,
      HiOutlineArrowRight,
      HiOutlineBriefcase,
      HiOutlineAcademicCap,
      HiOutlineGlobeAlt,
      HiOutlineUserGroup,
      HiOutlineChartBar,
      HiOutlineStar,
      HiOutlineSparkles,
      HiOutlineChip,
      HiOutlineMegaphone,
      HiOutlineUsers,
      HiOutlineLightBulb,
      HiOutlineQuestionMarkCircle,
      HiOutlineUserCircle,
      HiOutlineX,
      AiOutlineLinkedin,
      AiOutlineTwitter,
    };
    const IconComponent = icons[iconName] || HiOutlineUserCircle;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Toggle FAQ accordion item
   * @param {number} index - Index of the FAQ to toggle
   */
  const toggleFaq = useCallback((index) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  /**
   * Clear search query
   */
  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  /**
   * Highlight search matches in text
   * @param {string} text - Text to highlight
   * @param {string} query - Search query to highlight
   * @returns {JSX.Element|string} Text with highlighted matches
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-sky-200 dark:bg-sky-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== FILTERED DATA ====================
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = searchQuery === '' ||
        faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesSearch;
    });
  }, [faqs, searchQuery]);

  const filteredLeaders = useMemo(() => {
    return leaders.filter(leader => {
      return activeDepartment === 'all' || leader.department === activeDepartment;
    });
  }, [leaders, activeDepartment]);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Leadership Team"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-sky-50/30 to-transparent dark:from-sky-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-sky-300/5 dark:bg-sky-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-sky-100 dark:bg-sky-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-sky-200 dark:border-sky-800'}`}
            aria-label="Leadership badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-sky-700 dark:text-sky-300'}`}>
              {config?.badge?.text || "Meet Our Leaders"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'The Visionaries'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-sky-600 to-blue-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Behind Our Success'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Our leadership team brings together decades of experience, diverse perspectives, and a shared passion for innovation. Meet the people shaping our strategy and driving our mission forward."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-sky-600 dark:text-sky-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-sky-600 dark:text-sky-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== DEPARTMENT FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveDepartment('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeDepartment === 'all'
              ? 'bg-linear-to-r from-sky-600 to-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            All Leaders
          </button>
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDepartment(dept.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeDepartment === dept.id
                ? 'bg-linear-to-r from-sky-600 to-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {getIcon(dept.icon, "w-3 h-3")}
              {dept.name}
            </button>
          ))}
        </div>

        {/* ==================== LEADERSHIP GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredLeaders.map((leader, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedLeader(leader);
                setShowModal(true);
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer group border border-gray-100 dark:border-gray-700"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedLeader(leader) && setShowModal(true)}
            >
              <div className="relative h-64 bg-linear-to-br from-sky-500 to-blue-600">
                {leader.avatar ? (
                  <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-8xl">
                    {getIcon(leader.icon || "HiOutlineUserCircle", "w-24 h-24")}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">{leader.name}</h3>
                  <p className="text-sm opacity-90">{leader.title}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                  {leader.bio}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    {getIcon("HiOutlineBriefcase", "w-3 h-3")}
                    <span>{leader.experience} years exp.</span>
                  </div>
                  <div className="flex gap-2">
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        className="text-gray-400 hover:text-sky-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${leader.name} on LinkedIn`}
                      >
                        {getIcon("AiOutlineLinkedin", "w-4 h-4")}
                      </a>
                    )}
                    {leader.twitter && (
                      <a
                        href={leader.twitter}
                        className="text-gray-400 hover:text-sky-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${leader.name} on Twitter`}
                      >
                        {getIcon("AiOutlineTwitter", "w-4 h-4")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {getIcon("HiOutlineSearch", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search leadership FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              aria-label="Search FAQs"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Clear search"
              >
                {getIcon("HiOutlineX", "w-5 h-5")}
              </button>
            )}
          </div>
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        {searchQuery && (
          <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
            Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
          </div>
        )}

        {/* ==================== FAQ ACCORDION ==================== */}
        <div className="max-w-6xl mx-auto space-y-4 mb-16">
          {filteredFaqs.map((faq, index) => (
            <div
              key={faq.id || index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                aria-label={openFaq === index ? "Collapse answer" : "Expand answer"}
              >
                <div className="flex items-start gap-3 pr-4">
                  <div className="text-sky-600 dark:text-sky-400 mt-0.5">
                    {getIcon(faq.icon, "w-5 h-5")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {highlightText(faq.question, searchQuery)}
                    </div>
                    {faq.tags && faq.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {faq.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-sky-500 dark:text-sky-400">
                  {openFaq === index ? (
                    <HiOutlineChevronUp className="w-5 h-5" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {highlightText(faq.answer, searchQuery)}
                  </p>
                  {faq.link && (
                    <Link
                      href={faq.link}
                      className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                    >
                      Learn more
                      <HiOutlineArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredFaqs.length === 0 && searchQuery && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("HiOutlineSearch", "w-12 h-12")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search to find what you're looking for.</p>
            <button
              onClick={clearSearch}
              className="mt-4 px-4 py-2 text-sky-600 dark:text-sky-400 font-semibold text-sm hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* ==================== LEADERSHIP MODAL ==================== */}
        {showModal && selectedLeader && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
            role="dialog"
            aria-label="Leader details"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 bg-linear-to-r from-sky-500 to-blue-600 rounded-t-3xl">
                <div className="absolute inset-0 bg-black/20 rounded-t-3xl" />
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                  aria-label="Close modal"
                >
                  {getIcon("HiOutlineX", "w-6 h-6")}
                </button>
              </div>
              <div className="relative px-6 pb-6">
                <div className="absolute -top-16 left-6 w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center text-6xl border-4 border-white dark:border-gray-800">
                  {selectedLeader.avatar ? (
                    <img src={selectedLeader.avatar} alt={selectedLeader.name} className="w-full h-full object-cover rounded-2xl" />
                  ) : (
                    getIcon(selectedLeader.icon || "HiOutlineUserCircle", "w-16 h-16 text-sky-600")
                  )}
                </div>
                <div className="mt-20">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedLeader.name}</h3>
                  <p className="text-sky-600 dark:text-sky-400 font-semibold mb-2">{selectedLeader.title}</p>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon("HiOutlineBriefcase", "w-4 h-4")}
                      <span>{selectedLeader.experience}+ years experience</span>
                    </div>
                    {selectedLeader.education && (
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon("HiOutlineAcademicCap", "w-4 h-4")}
                        <span>{selectedLeader.education}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {selectedLeader.fullBio || selectedLeader.bio}
                  </p>
                  {selectedLeader.previousRoles && selectedLeader.previousRoles.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Previous Experience</h4>
                      <ul className="space-y-1">
                        {selectedLeader.previousRoles.map((role, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            {getIcon("HiOutlineBriefcase", "w-3 h-3")}
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                    {selectedLeader.linkedin && (
                      <a
                        href={selectedLeader.linkedin}
                        className="text-gray-500 hover:text-sky-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${selectedLeader.name} on LinkedIn`}
                      >
                        {getIcon("AiOutlineLinkedin", "w-5 h-5")}
                      </a>
                    )}
                    {selectedLeader.twitter && (
                      <a
                        href={selectedLeader.twitter}
                        className="text-gray-500 hover:text-sky-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${selectedLeader.name} on Twitter`}
                      >
                        {getIcon("AiOutlineTwitter", "w-5 h-5")}
                      </a>
                    )}
                    {selectedLeader.email && (
                      <a
                        href={`mailto:${selectedLeader.email}`}
                        className="text-gray-500 hover:text-sky-600 transition-colors"
                        aria-label={`Email ${selectedLeader.name}`}
                      >
                        {getIcon("HiOutlineMail", "w-5 h-5")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-sky-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineGlobeAlt", "w-6 h-6 text-sky-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Want to meet our leadership team? Contact us to schedule a conversation."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-linear-to-r from-sky-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Get in Touch"}
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default LeadershipTeamSection1;