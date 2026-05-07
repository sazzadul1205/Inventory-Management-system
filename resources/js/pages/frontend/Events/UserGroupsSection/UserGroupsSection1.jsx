// page/frontend/Events/UserGroupsSection/UserGroupsSection1.jsx

/**
 * User Groups Section I - Community Networking & Knowledge Sharing Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Community Metrics (Groups, Members, Countries, Meetups)
 * - Hero Section with Featured Group Banner
 * - User Group Cards with Join/Leave Functionality
 * - Search and Filter System (by region and topic)
 * - Tab Navigation for All, Featured, Nearby, and Online Groups
 * - Members Modal to View Group Members
 * - Share Modal for Easy Group Promotion
 * - Join Group Modal with Form Validation
 * - Start a Group Call-to-Action
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Fully Responsive Grid and Card Layouts
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useRef, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineStar,
  HiOutlineUsers,
  HiOutlineMail,
  HiOutlineLink,
  HiOutlineExternalLink,
  HiOutlineShare,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineLightningBolt,
} from 'react-icons/hi';
import { HiOutlineUser, HiOutlineTrophy } from 'react-icons/hi2';

const UserGroupsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [viewMode, setViewMode] = useState('grid');
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [shareGroup, setShareGroup] = useState(null);
  const [joinedGroups, setJoinedGroups] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [membersGroup, setMembersGroup] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showShareModal, setShowShareModal] = useState(false);
  const [expandedGroupId, setExpandedGroupId] = useState(null);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '', experience: '', interests: '', newsletter: false, });

  // ==================== REFS ====================
  const modalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const userGroups = useMemo(() => config?.userGroups || [], [config?.userGroups]);
  const stats = config?.stats || [];
  const featuredGroupId = config?.featuredGroupId || (userGroups[0]?.id);
  const featuredGroup = userGroups.find(g => g.id === featuredGroupId) || userGroups[0];

  const regions = useMemo(() => {
    const reg = new Set(userGroups.map(g => g.region).filter(Boolean));
    return ['all', ...Array.from(reg)];
  }, [userGroups]);

  const topics = useMemo(() => {
    const tops = new Set(userGroups.flatMap(g => g.topics || []));
    return ['all', ...Array.from(tops)];
  }, [userGroups]);

  const tabs = config?.tabs || [
    { id: 'all', label: 'All Groups', icon: 'users' },
    { id: 'featured', label: 'Featured', icon: 'star' },
    { id: 'nearby', label: 'Near You', icon: 'location' },
    { id: 'online', label: 'Online', icon: 'globe' },
  ];

  // ==================== HELPER FUNCTIONS ====================
  // Load joined groups from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('joinedUserGroups');
    if (saved) setJoinedGroups(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('joinedUserGroups', JSON.stringify(joinedGroups));
  }, [joinedGroups]);

  // Filter groups
  const filterGroups = (groupList) => {
    return groupList.filter((g) => {
      const matchesSearch = searchQuery === '' ||
        g.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.location?.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.location?.country?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === 'all' || g.region === selectedRegion;
      const matchesTopic = selectedTopic === 'all' || (g.topics && g.topics.includes(selectedTopic));
      return matchesSearch && matchesRegion && matchesTopic;
    });
  };

  let displayedGroups = [];
  if (activeTab === 'all') {
    displayedGroups = filterGroups(userGroups);
  } else if (activeTab === 'featured') {
    displayedGroups = filterGroups(userGroups.filter(g => g.isFeatured || g.id === featuredGroupId));
  } else if (activeTab === 'nearby') {
    displayedGroups = filterGroups(userGroups.slice(0, 3));
  } else if (activeTab === 'online') {
    displayedGroups = filterGroups(userGroups.filter(g => g.isOnline || g.type === 'Online'));
  }

  // ==================== FORM HANDLERS ====================
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleJoinGroup = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (selectedGroup && !joinedGroups.includes(selectedGroup.id)) {
      setJoinedGroups([...joinedGroups, selectedGroup.id]);
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowJoinModal(false);
      setFormData({
        name: '', email: '', company: '', role: '', experience: '', interests: '', newsletter: false
      });
    }, 3000);
  };

  // ==================== UI HANDLERS ====================
  const leaveGroup = (groupId, e) => {
    e.stopPropagation();
    setJoinedGroups(joinedGroups.filter(id => id !== groupId));
  };

  const hasJoined = (groupId) => joinedGroups.includes(groupId);

  const shareGroupHandler = (group, e) => {
    e.stopPropagation();
    setShareGroup(group);
    setShowShareModal(true);
  };

  const copyLink = () => {
    if (shareGroup) {
      navigator.clipboard.writeText(`${window.location.origin}/user-groups/${shareGroup.id}`);
      alert('Link copied to clipboard!');
    }
  };

  const formatMemberCount = (count) => {
    if (!count) return '0 members';
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k members`;
    return `${count} members`;
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'Online': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Hybrid': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      default: return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="User Groups Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineUsers className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Community"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Join"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "User Groups"}</span> {config?.title?.suffix || "Worldwide"}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Connect with local supply chain professionals, share knowledge, and grow your network. Join a user group near you or start your own."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'users' ? <HiOutlineUsers className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                    stat.icon === 'location' ? <HiOutlineLocationMarker className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                      stat.icon === 'globe' ? <HiOutlineGlobe className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                        <HiOutlineCalendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== FEATURED GROUP BANNER ==================== */}
        {featuredGroup && activeTab !== 'featured' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white" />
            </div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Community</span>
                {featuredGroup.isOnline && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">Online Group</span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredGroup.name}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredGroup.description}</p>

              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredGroup.location && (
                  <div className="flex items-center gap-2">
                    <HiOutlineLocationMarker className="w-4 h-4" />
                    <span>{featuredGroup.location.city}, {featuredGroup.location.country}</span>
                  </div>
                )}
                {featuredGroup.memberCount && (
                  <div className="flex items-center gap-2">
                    <HiOutlineUsers className="w-4 h-4" />
                    <span>{formatMemberCount(featuredGroup.memberCount)}</span>
                  </div>
                )}
                {featuredGroup.nextMeetup && (
                  <div className="flex items-center gap-2">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <span>Next: {featuredGroup.nextMeetup}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setSelectedGroup(featuredGroup);
                    setShowJoinModal(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Join this group"
                >
                  <HiOutlineUserGroup className="w-5 h-5" />
                  Join This Group
                  <HiOutlineArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => window.open(featuredGroup.website, '_blank')}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                  aria-label="Learn more about this group"
                >
                  <HiOutlineExternalLink className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {tab.icon === 'users' ? <HiOutlineUsers className="w-4 h-4" /> :
                tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                  tab.icon === 'location' ? <HiOutlineLocationMarker className="w-4 h-4" /> :
                    <HiOutlineGlobe className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== SEARCH AND FILTERS ==================== */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search groups by name, location, or topic..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Search user groups"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle filters"
            >
              <HiOutlineFilter className="w-5 h-5" />
              Filters
              {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>

            {/* View Toggle */}
            <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="Grid view"
              >
                <HiOutlineViewGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="List view"
              >
                <HiOutlineViewList className="w-5 h-5" />
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by region"
                  >
                    {regions.map((region) => (
                      <option key={region} value={region}>
                        {region === 'all' ? 'All Regions' : region}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Topic</label>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by topic"
                  >
                    {topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic === 'all' ? 'All Topics' : topic}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ==================== USER GROUPS GRID/LIST ==================== */}
        {displayedGroups.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineUsers className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No user groups found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('all');
                setSelectedTopic('all');
              }}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              aria-label="Clear filters"
            >
              Clear filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedGroups.map((group) => {
              const isJoined = hasJoined(group.id);
              const isExpanded = expandedGroupId === group.id;

              return (
                <div
                  key={group.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                >
                  {/* Card Image */}
                  {group.image && (
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={group.image}
                        alt={group.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {group.type && (
                        <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getTypeBadge(group.type)}`}>
                          {group.type}
                        </span>
                      )}

                      <div className="absolute top-4 right-4 flex gap-2">
                        <button
                          onClick={(e) => shareGroupHandler(group, e)}
                          className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                          aria-label="Share group"
                        >
                          <HiOutlineShare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {group.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {group.description}
                    </p>

                    {/* Location & Members */}
                    <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      {group.location && (
                        <div className="flex items-center gap-2">
                          <HiOutlineLocationMarker className="w-4 h-4 shrink-0" />
                          <span>{group.location.city}, {group.location.country}</span>
                        </div>
                      )}
                      {group.memberCount && (
                        <div className="flex items-center gap-2">
                          <HiOutlineUsers className="w-4 h-4 shrink-0" />
                          <span>{formatMemberCount(group.memberCount)}</span>
                        </div>
                      )}
                      {group.nextMeetup && (
                        <div className="flex items-center gap-2">
                          <HiOutlineCalendar className="w-4 h-4 shrink-0" />
                          <span>Next: {group.nextMeetup}</span>
                        </div>
                      )}
                    </div>

                    {/* Topics */}
                    {group.topics && group.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {group.topics.slice(0, 3).map((topic, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                            {topic}
                          </span>
                        ))}
                        {group.topics.length > 3 && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">+{group.topics.length - 3} more</span>
                        )}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {isJoined ? (
                        <>
                          <button
                            onClick={() => {
                              setMembersGroup(group);
                              setShowMembersModal(true);
                            }}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                            aria-label="View members"
                          >
                            <HiOutlineUsers className="w-4 h-4" />
                            Members
                          </button>
                          <button
                            onClick={(e) => leaveGroup(group.id, e)}
                            className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-red-600 dark:text-red-400 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
                            aria-label="Leave group"
                          >
                            Leave
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedGroup(group);
                            setShowJoinModal(true);
                          }}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                          aria-label="Join group"
                        >
                          <HiOutlineUserGroup className="w-4 h-4" />
                          Join Group
                        </button>
                      )}

                      <button
                        onClick={() => setExpandedGroupId(isExpanded ? null : group.id)}
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                        aria-label={isExpanded ? "Show less details" : "Show more details"}
                      >
                        {isExpanded ? 'Less' : 'More'}
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                        {group.organizer && (
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Organized by:</p>
                            <div className="flex items-center gap-2">
                              {group.organizer.avatar ? (
                                <img src={group.organizer.avatar} alt={group.organizer.name} className="w-8 h-8 rounded-full object-cover" />
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                  <HiOutlineUser className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                </div>
                              )}
                              <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{group.organizer.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{group.organizer.title}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {group.upcomingEvents && group.upcomingEvents.length > 0 && (
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Upcoming Events:</p>
                            <ul className="space-y-1">
                              {group.upcomingEvents.slice(0, 2).map((event, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                  <HiOutlineCalendar className="w-3 h-3 text-blue-500 mt-0.5 shrink-0" />
                                  <span>{event.date}: {event.title}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {group.website && (
                          <button
                            onClick={() => window.open(group.website, '_blank')}
                            className="mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                            aria-label="Visit group website"
                          >
                            <HiOutlineExternalLink className="w-3 h-3" />
                            Visit Group Page
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {displayedGroups.map((group) => {
              const isJoined = hasJoined(group.id);

              return (
                <div
                  key={group.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {group.image && (
                      <div className="md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                        <img src={group.image} alt={group.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{group.name}</h3>
                          {group.type && (
                            <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${getTypeBadge(group.type)}`}>
                              {group.type}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button onClick={(e) => shareGroupHandler(group, e)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Share group">
                            <HiOutlineShare className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{group.description}</p>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                        {group.location && <div className="flex items-center gap-1"><HiOutlineLocationMarker className="w-4 h-4" />{group.location.city}, {group.location.country}</div>}
                        {group.memberCount && <div className="flex items-center gap-1"><HiOutlineUsers className="w-4 h-4" />{formatMemberCount(group.memberCount)}</div>}
                        {group.nextMeetup && <div className="flex items-center gap-1"><HiOutlineCalendar className="w-4 h-4" />Next: {group.nextMeetup}</div>}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {isJoined ? (
                          <>
                            <button onClick={() => { setMembersGroup(group); setShowMembersModal(true); }} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors" aria-label="View members">Members</button>
                            <button onClick={(e) => leaveGroup(group.id, e)} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-red-600 dark:text-red-400 rounded-lg text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Leave group">Leave</button>
                          </>
                        ) : (
                          <button onClick={() => { setSelectedGroup(group); setShowJoinModal(true); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors" aria-label="Join group">Join Group</button>
                        )}
                        <button onClick={() => window.open(group.website, '_blank')} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Learn more">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== START A GROUP CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineLightningBolt className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't See a Group in Your Area?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Start your own user group and bring together supply chain professionals in your community. We'll help you get started!
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg" aria-label="Start a new group">
            <HiOutlineUserGroup className="w-5 h-5" />
            Start a New Group
            <HiOutlineArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* ==================== JOIN GROUP MODAL ==================== */}
        {showJoinModal && selectedGroup && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowJoinModal(false)}
            role="dialog"
            aria-label="Join User Group"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Join User Group</h3>
                    <p className="text-blue-100 text-xs mt-1 line-clamp-1">{selectedGroup.name}</p>
                  </div>
                  <button onClick={() => setShowJoinModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Welcome to the Group!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      You've successfully joined {selectedGroup.name}. Check your email for group updates and upcoming events.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleJoinGroup} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full name *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        aria-label="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email address *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        aria-label="Your email address"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Your company name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="Job title"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Your job title"
                      />
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        aria-label="Years of experience"
                      >
                        <option value="">Experience</option>
                        <option value="entry">Entry Level (0-2 years)</option>
                        <option value="mid">Mid Level (3-7 years)</option>
                        <option value="senior">Senior Level (8-15 years)</option>
                        <option value="executive">Executive (15+ years)</option>
                      </select>
                    </div>

                    <select
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      aria-label="Primary interest area"
                    >
                      <option value="">Primary interest (optional)</option>
                      <option value="supply-chain">Supply Chain Management</option>
                      <option value="logistics">Logistics & Transportation</option>
                      <option value="inventory">Inventory Management</option>
                      <option value="procurement">Procurement</option>
                      <option value="analytics">Data Analytics</option>
                    </select>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                        aria-label="Subscribe to newsletter"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Receive email updates about group events and activities
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      aria-label="Submit join request"
                    >
                      Join Group
                      <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== MEMBERS MODAL ==================== */}
        {showMembersModal && membersGroup && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowMembersModal(false)}
            role="dialog"
            aria-label="Group Members"
            aria-modal="true"
          >
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-emerald-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Group Members - {membersGroup.name}</h3>
                  <button onClick={() => setShowMembersModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                {membersGroup.members && membersGroup.members.length > 0 ? (
                  <div className="space-y-3">
                    {membersGroup.members.map((member, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        {member.avatar ? (
                          <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <HiOutlineUser className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white text-sm">{member.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{member.title}, {member.company}</p>
                        </div>
                        {member.isOrganizer && (
                          <span className="ml-auto text-xs bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 px-2 py-0.5 rounded-full">Organizer</span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <HiOutlineUsers className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                    <p className="text-gray-500 dark:text-gray-400">Member list will appear after joining.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== SHARE MODAL ==================== */}
        {showShareModal && shareGroup && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowShareModal(false)}
            role="dialog"
            aria-label="Share User Group"
            aria-modal="true"
          >
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share User Group</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">{shareGroup.name}</p>
                <div className="flex flex-col gap-3">
                  <button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" aria-label="Copy link">
                    <HiOutlineLink className="w-4 h-4" />Copy Link
                  </button>
                  <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareGroup.name)}&body=${encodeURIComponent(`${shareGroup.name}\n${shareGroup.description}\n\n${window.location.origin}/user-groups/${shareGroup.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Share via email">
                    <HiOutlineMail className="w-4 h-4" />Share via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default UserGroupsSection1;