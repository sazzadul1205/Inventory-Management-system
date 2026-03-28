// frontend/Contact/OfficeLocationsSection/OfficeLocationsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineArrowRight,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineUserGroup,
  HiOutlineMap,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const OfficeLocationsSection3 = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('all');
  const [activeCountry, setActiveCountry] = useState('all');
  const [activeView, setActiveView] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [showOfficeModal, setShowOfficeModal] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [activeTab, setActiveTab] = useState('offices');
  const searchRef = useRef(null);

  const faqs = config?.faqs || [];
  const offices = config?.offices || [];
  const regions = config?.regions || [];
  const stats = config?.stats || [];
  const countries = config?.countries || [];
  const serviceCenters = config?.serviceCenters || [];
  const headquarters = config?.headquarters || null;

  useEffect(() => {
    const savedVotes = localStorage.getItem('officeFaqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
    const saved = localStorage.getItem('savedOfficeFaqs');
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
      localStorage.setItem('officeFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  };

  const handleSaveFaq = (faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedOfficeFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const handleExport = () => {
    const exportData = filteredOffices.map(office => ({
      city: office.city,
      country: office.country,
      region: office.region,
      address: office.address,
      phone: office.phone,
      email: office.email,
      hours: office.hours,
      services: office.services,
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'office-locations-export.json');
    linkElement.click();
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredOffices = offices
    .filter(office => {
      const matchesRegion = activeRegion === 'all' || office.region === activeRegion;
      const matchesCountry = activeCountry === 'all' || office.country === activeCountry;
      const matchesSearch = searchQuery === '' ||
        office.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        office.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        office.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (office.services && office.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesRegion && matchesCountry && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.city.localeCompare(b.city);
      if (sortBy === 'country') return a.country.localeCompare(b.country);
      if (sortBy === 'teamSize') return (b.teamSize || 0) - (a.teamSize || 0);
      return 0;
    });

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesSearch;
  });

  const groupedFaqs = (config?.faqCategories || []).reduce((acc, category) => {
    acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
    return acc;
  }, {});

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
      aria-label="Office Locations Knowledge Base"
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

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('offices')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'offices'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            <HiOutlineBuildingOffice className="inline w-4 h-4 mr-2" />
            Office Locations
          </button>
          <button
            onClick={() => setActiveTab('service-centers')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'service-centers'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            <HiOutlineTruck className="inline w-4 h-4 mr-2" />
            Service Centers
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'faq'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            <HiOutlineQuestionMarkCircle className="inline w-4 h-4 mr-2" />
            FAQs
          </button>
        </div>

        {/* Offices Section */}
        {activeTab === 'offices' && (
          <>
            {/* Interactive Map Preview */}
            <div className="mb-12 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-4 text-white">
                <div className="flex items-center gap-2">
                  <HiOutlineMap className="w-5 h-5" />
                  <span className="font-semibold">Global Presence Map</span>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setActiveRegion(region.id)}
                      className={`text-center p-4 rounded-xl transition-all ${
                        activeRegion === region.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 ring-2 ring-blue-500'
                          : 'bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                      }`}
                    >
                      <div className="text-3xl mb-2">{region.icon}</div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{region.name}</div>
                      <div className="text-xs text-gray-500">{region.officeCount} offices</div>
                    </button>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button
                    onClick={() => setActiveRegion('all')}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View All Locations
                  </button>
                </div>
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative" ref={searchRef}>
                <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by city, country, address, or services..."
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
                <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                  <button
                    onClick={() => setActiveView('grid')}
                    className={`px-3 py-2 rounded-lg text-sm transition-all ${
                      activeView === 'grid'
                        ? 'bg-white dark:bg-gray-700 shadow-sm'
                        : 'text-gray-500'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setActiveView('list')}
                    className={`px-3 py-2 rounded-lg text-sm transition-all ${
                      activeView === 'list'
                        ? 'bg-white dark:bg-gray-700 shadow-sm'
                        : 'text-gray-500'
                    }`}
                  >
                    List
                  </button>
                </div>
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
                  <option value="name">Sort by City</option>
                  <option value="country">Sort by Country</option>
                  <option value="teamSize">Sort by Team Size</option>
                </select>
                <button
                  onClick={handleExport}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                  title="Export Locations"
                >
                  <HiOutlineDownload className="w-4 h-4" />
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                  title="Print Locations"
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Country</label>
                    <select
                      value={activeCountry}
                      onChange={(e) => setActiveCountry(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="all">All Countries</option>
                      {countries.map((country, idx) => (
                        <option key={idx} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Results Count */}
            {searchQuery && (
              <div className="text-center mb-4 text-sm text-gray-500">
                Found {filteredOffices.length} locations for "{searchQuery}"
              </div>
            )}

            {/* Offices Grid/List View */}
            {activeView === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredOffices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer group"
                    onClick={() => {
                      setSelectedOffice(office);
                      setShowOfficeModal(true);
                    }}
                  >
                    <div className="h-32 bg-linear-to-r from-blue-500 to-indigo-600 relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-2xl font-bold">{office.city}</div>
                        <div className="text-sm opacity-90 flex items-center gap-1">
                          <span>{office.flag}</span>
                          {office.country}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/20 rounded-full px-2 py-1 text-xs text-white">
                        {office.region === 'nam' ? 'North America' : office.region === 'emea' ? 'EMEA' : office.region === 'apac' ? 'Asia Pacific' : 'Latin America'}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <HiOutlineLocationMarker className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                        <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {office.address}
                        </div>
                      </div>
                      <div className="flex items-start gap-3 mb-3">
                        <HiOutlinePhone className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {office.phone}
                        </div>
                      </div>
                      <div className="flex items-start gap-3 mb-4">
                        <HiOutlineMail className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                        <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {office.email}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {office.services?.slice(0, 3).map((service, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <HiOutlineUserGroup className="w-3 h-3" />
                          <span>{office.teamSize} team members</span>
                        </div>
                        <button className="text-blue-600 text-sm font-semibold hover:underline">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4 mb-12">
                {filteredOffices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                    onClick={() => {
                      setSelectedOffice(office);
                      setShowOfficeModal(true);
                    }}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl">{office.flag}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{office.city}, {office.country}</h3>
                        <div className="text-sm text-gray-500 mt-1">{office.address}</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {office.services?.slice(0, 2).map((service, idx) => (
                            <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 rounded-full">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-gray-600 dark:text-gray-400">{office.phone}</div>
                        <div className="text-xs text-gray-500">{office.teamSize} employees</div>
                      </div>
                      <HiOutlineArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {filteredOffices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No locations found</h3>
                <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={() => {
                    setActiveRegion('all');
                    setActiveCountry('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        )}

        {/* Service Centers Section */}
        {activeTab === 'service-centers' && (
          <div className="mb-12">
            <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <HiOutlineTruck className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Service & Distribution Centers</h3>
                  <p className="text-gray-600 dark:text-gray-400">Our global network of service and distribution centers</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCenters.map((center, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{center.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{center.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <HiOutlineLocationMarker className="w-4 h-4" />
                        {center.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <HiOutlineClock className="w-4 h-4" />
                        {center.hours}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <HiOutlinePhone className="w-4 h-4" />
                        {center.phone}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {center.services.map((service, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                      {center.mapLink && (
                        <Link href={center.mapLink} className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-3 hover:gap-2 transition-all">
                          View on Map
                          <HiOutlineExternalLink className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className="max-w-4xl mx-auto">
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

            {/* FAQ Categories Accordion */}
            <div className="space-y-6 mb-12">
              {(config?.faqCategories || []).map((category) => {
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

            {/* FAQ Empty State */}
            {filteredFaqs.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                <p className="text-gray-500">Try adjusting your search to find what you're looking for.</p>
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
        )}

        {/* Office Modal */}
        {showOfficeModal && selectedOffice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowOfficeModal(false)}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative h-40 bg-linear-to-r from-blue-500 to-indigo-600 rounded-t-3xl">
                <div className="absolute inset-0 bg-black/20 rounded-t-3xl"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="text-2xl font-bold">{selectedOffice.city}</div>
                  <div className="text-sm flex items-center gap-1">
                    <span>{selectedOffice.flag}</span>
                    {selectedOffice.country}
                  </div>
                </div>
                <button
                  onClick={() => setShowOfficeModal(false)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200"
                >
                  <HiOutlineX className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <HiOutlineLocationMarker className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Address</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.address}</div>
                    {selectedOffice.mapLink && (
                      <Link href={selectedOffice.mapLink} className="inline-flex items-center gap-1 text-blue-600 text-xs mt-1 hover:underline">
                        View on Map
                        <HiOutlineExternalLink className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HiOutlinePhone className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Phone</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HiOutlineMail className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HiOutlineClock className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Business Hours</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.hours}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HiOutlineUserGroup className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Team Size</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.teamSize} employees</div>
                  </div>
                </div>
                {selectedOffice.services && (
                  <div className="flex items-start gap-3">
                    <HiOutlineSparkles className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Services</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedOffice.services.map((service, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href={`/contact?office=${selectedOffice.city}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  >
                    Contact This Office
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Corporate Headquarters */}
        {headquarters && (
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <HiOutlineBuildingOffice className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Corporate Headquarters</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Address:</span> {headquarters.address}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Phone:</span> {headquarters.phone}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Email:</span> {headquarters.email}
                </p>
              </div>
              <div className="text-right">
                <Link
                  href="/corporate"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Corporate Information
                  <HiOutlineArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineGlobeAlt className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.contactText || "Can't find what you're looking for? Contact our global support team."}
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default OfficeLocationsSection3; 