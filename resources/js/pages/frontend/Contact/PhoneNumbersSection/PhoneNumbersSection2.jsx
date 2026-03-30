// frontend/Contact/PhoneNumbersSection/PhoneNumbersSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineDeviceMobile,
  HiOutlineFlag,
} from 'react-icons/hi';

const PhoneNumbersSection2 = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [sortBy, setSortBy] = useState('department');
  const [showFilters, setShowFilters] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [callbackNumber, setCallbackNumber] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [showNumberModal, setShowNumberModal] = useState(false);
  const searchRef = useRef(null);

  const faqs = config?.faqs || [];
  const phoneNumbers = config?.phoneNumbers || [];
  const regions = config?.regions || [];
  const stats = config?.stats || [];
  const departments = config?.departments || [];

  useEffect(() => {
    const savedVotes = localStorage.getItem('phoneFaqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
    const saved = localStorage.getItem('savedPhoneFaqs');
    if (saved) {
      setSavedFaqs(JSON.parse(saved));
    }
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleHelpful = (faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('phoneFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  };

  const handleSaveFaq = (faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedPhoneFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (!callbackNumber) return;
    setTimeout(() => {
      setCallbackSubmitted(true);
      setTimeout(() => {
        setCallbackSubmitted(false);
        setCallbackNumber('');
      }, 3000);
    }, 500);
  };

  const handleExport = () => {
    const exportData = filteredNumbers.map(number => ({
      department: number.department,
      type: number.type,
      region: number.regionName,
      phone: number.phone,
      hours: number.hours,
      email: number.email,
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${  encodeURIComponent(dataStr)}`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'phone-numbers-export.json');
    linkElement.click();
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredNumbers = phoneNumbers
    .filter(number => {
      const matchesRegion = activeRegion === 'all' || number.region === activeRegion;
      const matchesType = activeType === 'all' || number.type === activeType;
      const matchesSearch = searchQuery === '' ||
        number.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        number.phone.includes(searchQuery) ||
        number.regionName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesType && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'department') return a.department.localeCompare(b.department);
      if (sortBy === 'region') return a.regionName.localeCompare(b.regionName);
      return 0;
    });

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesSearch;
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

  const getTypeColor = (type) => {
    switch(type) {
      case 'support': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'sales': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'billing': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'partnership': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Phone Numbers Help Center"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
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

        {/* Emergency Support Banner */}
        <div className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
                <HiOutlinePhone className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Emergency Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">For critical system issues affecting your business operations</p>
              </div>
            </div>
            <div className="text-center">
              <a href={`tel:${config?.emergencyNumber || "+18889999999"}`} className="text-3xl font-bold text-red-600 hover:underline">
                {config?.emergencyNumber || "+1 (888) 999-9999"}
              </a>
              <p className="text-xs text-gray-500 mt-1">Available 24/7 for enterprise customers</p>
            </div>
          </div>
        </div>

        {/* Department Quick Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {departments.map((dept) => (
            <button
              key={dept.type}
              onClick={() => setActiveType(dept.type === activeType ? 'all' : dept.type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeType === dept.type
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
              }`}
            >
              <span>{dept.icon}</span>
              {dept.name}
            </button>
          ))}
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

        {/* Search and Action Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative" ref={searchRef}>
            <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by department, region, or phone number..."
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
              <option value="department">Sort by Department</option>
              <option value="region">Sort by Region</option>
            </select>
            <button
              onClick={handleExport}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
              title="Export Numbers"
            >
              <HiOutlineDownload className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
              title="Print Numbers"
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Department Type</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveType('all')}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${activeType === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                      }`}
                  >
                    All
                  </button>
                  {departments.map((dept) => (
                    <button
                      key={dept.type}
                      onClick={() => setActiveType(dept.type)}
                      className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-1 ${activeType === dept.type
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                        }`}
                    >
                      <span>{dept.icon}</span>
                      {dept.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveRegion('all')}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${activeRegion === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                      }`}
                  >
                    All
                  </button>
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setActiveRegion(region.id)}
                      className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-1 ${activeRegion === region.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                        }`}
                    >
                      <span>{region.icon}</span>
                      {region.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        {searchQuery && (
          <div className="text-center mb-4 text-sm text-gray-500">
            Found {filteredNumbers.length} numbers for "{searchQuery}"
          </div>
        )}

        {/* Phone Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredNumbers.map((number, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer group"
              onClick={() => {
                setSelectedNumber(number);
                setShowNumberModal(true);
              }}
            >
              <div className={`h-1 ${number.type === 'support' ? 'bg-blue-500' : number.type === 'sales' ? 'bg-green-500' : number.type === 'billing' ? 'bg-purple-500' : 'bg-orange-500'}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{number.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{number.department}</h3>
                      <div className="flex items-center gap-1 mt-0.5">
                        <HiOutlineFlag className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{number.regionName}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(number.type)}`}>
                    {number.type === 'support' ? 'Support' : number.type === 'sales' ? 'Sales' : number.type === 'billing' ? 'Billing' : 'Partnership'}
                  </span>
                </div>
                <div className="mb-4">
                  <a
                    href={`tel:${number.phone}`}
                    className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:underline"
                    onClick={(e) => e.stopPropagation()}
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
                  <div className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    {number.email}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <HiOutlineDeviceMobile className="w-3 h-3" />
                    <span>Click to call</span>
                  </div>
                  <button className="text-blue-600 text-sm font-semibold hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNumbers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No phone numbers found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => {
                setActiveRegion('all');
                setActiveType('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Number Modal */}
        {showNumberModal && selectedNumber && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowNumberModal(false)}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <div className={`h-2 ${selectedNumber.type === 'support' ? 'bg-blue-500' : selectedNumber.type === 'sales' ? 'bg-green-500' : selectedNumber.type === 'billing' ? 'bg-purple-500' : 'bg-orange-500'} rounded-t-3xl`} />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{selectedNumber.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedNumber.department}</h3>
                      <div className="flex items-center gap-1 mt-0.5">
                        <HiOutlineFlag className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{selectedNumber.regionName}</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setShowNumberModal(false)} className="text-gray-500 hover:text-gray-700">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
                <div className="mb-4">
                  <a
                    href={`tel:${selectedNumber.phone}`}
                    className="text-3xl font-bold text-blue-600 dark:text-blue-400 hover:underline block text-center py-3 bg-gray-50 dark:bg-gray-700 rounded-xl"
                  >
                    {selectedNumber.phone}
                  </a>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <HiOutlineClock className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">Hours</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{selectedNumber.hours}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HiOutlineMail className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">Email</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{selectedNumber.email}</div>
                    </div>
                  </div>
                  {selectedNumber.alternateNumber && (
                    <div className="flex items-start gap-3">
                      <HiOutlinePhone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">Alternate Number</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{selectedNumber.alternateNumber}</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex gap-3">
                  <a
                    href={`tel:${selectedNumber.phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  >
                    <HiOutlinePhone className="w-4 h-4" />
                    Call Now
                  </a>
                  <Link
                    href={`/contact?department=${selectedNumber.department}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                  >
                    <HiOutlineMail className="w-4 h-4" />
                    Email
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Frequently Asked Questions
          </h3>

          {/* FAQ Search */}
          <div className="mb-6">
            <div className="relative">
              <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 mb-12">
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
                    <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSaveFaq(faq.id);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleSaveFaq(faq.id);
                      }
                    }}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label={savedFaqs.includes(faq.id) ? 'Remove bookmark' : 'Save bookmark'}
                  >
                    <HiOutlineBookmark className={`w-4 h-4 ${savedFaqs.includes(faq.id) ? 'fill-blue-600 text-blue-600' : ''}`} />
                  </span>
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

          {/* FAQ Empty State */}
          {filteredFaqs.length === 0 && searchQuery && (
            <div className="text-center py-8">
              <p className="text-gray-500">No FAQs found for "{searchQuery}"</p>
            </div>
          )}

          {/* Saved FAQs Section */}
          {savedFaqs.length > 0 && searchQuery === '' && (
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
                            setSearchQuery(faq.question.substring(0, 30));
                            setOpenFaq(null);
                          }}
                          className="text-xs text-blue-600 mt-1 hover:underline"
                        >
                          View Answer
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

        {/* Callback Request */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HiOutlinePhone className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Request a Callback</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Can't reach us? Leave your number and we'll call you back within 30 minutes during business hours.
          </p>
          {!callbackSubmitted ? (
            <form onSubmit={handleCallbackSubmit} className="max-w-md mx-auto flex gap-3">
              <input
                type="tel"
                value={callbackNumber}
                onChange={(e) => setCallbackNumber(e.target.value)}
                placeholder="Your phone number"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Request
              </button>
            </form>
          ) : (
            <div className="max-w-md mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-green-600">
                <HiOutlineThumbUp className="w-5 h-5" />
                <span>Callback request received! We'll call you shortly.</span>
              </div>
            </div>
          )}
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

export default PhoneNumbersSection2;
