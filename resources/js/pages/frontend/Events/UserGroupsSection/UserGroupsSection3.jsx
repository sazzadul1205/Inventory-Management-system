// page/frontend/Events/UserGroupsSection/UserGroupsSection3.jsx

/**
 * User Groups Section III - Premium Community Hub with Gamification & Mentorship
 *
 * Unique Design Elements:
 * - Gamification System (Points & Badges) with Floating User Stats Bar
 * - Stats Cards for Community Metrics
 * - Multi-tab UI (All Groups, Featured, Near You, Online, My Groups)
 * - Mentorship Program with Mentor/Mentee Matching
 * - Job Board with Post Creation
 * - Skill Share Session Hosting
 * - Points System for Community Contributions
 * - Badge System for Achievements
 * - Multi-step Join Form with Skill Selection
 * - Forum Discussions with Points Rewards
 * - Grid/List View Toggle
 * - Search and Filter System
 * - Fully Responsive Layout
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineStar,
  HiOutlineChat,
  HiOutlineUsers,
  HiOutlineAcademicCap,
  HiOutlineMail,
  HiOutlineLink,
  HiOutlineShare,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineHeart,
  HiOutlineLightningBolt,
  HiOutlineThumbUp,
  HiOutlineReply,
  HiOutlineBadgeCheck,
  HiOutlineBriefcase,
} from 'react-icons/hi';
import { HiOutlineUser, HiOutlineTrophy, } from 'react-icons/hi2';

const UserGroupsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [jobPosts, setJobPosts] = useState({});
  const [activeTab, setActiveTab] = useState('all');
  const [userPoints, setUserPoints] = useState(0);
  const [userBadges, setUserBadges] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [forumPosts, setForumPosts] = useState({});
  const [rsvpStatus, setRsvpStatus] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [forumGroup, setForumGroup] = useState(null);
  const [shareGroup, setShareGroup] = useState(null);
  const [joinedGroups, setJoinedGroups] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [skillSessions, setSkillSessions] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [jobBoardGroup, setJobBoardGroup] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showShareModal, setShowShareModal] = useState(false);
  const [showForumModal, setShowForumModal] = useState(false);
  const [skillShareGroup, setSkillShareGroup] = useState(null);
  const [mentorshipGroup, setMentorshipGroup] = useState(null);
  const [mentorshipRequests, setMentorshipRequests] = useState([]);
  const [showJobBoardModal, setShowJobBoardModal] = useState(false);
  const [showMentorshipModal, setShowMentorshipModal] = useState(false);
  const [showSkillShareModal, setShowSkillShareModal] = useState(false);
  const [newJobPost, setNewJobPost] = useState({ title: '', description: '', type: 'full-time', location: '', contact: '' });
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '', experience: '', interests: '', skills: [], mentorshipRole: '', newsletter: false, terms: false, });

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
    { id: 'joined', label: 'My Groups', icon: 'heart' },
  ];

  const availableSkills = [
    'Supply Chain Strategy', 'Inventory Management', 'Logistics', 'Procurement',
    'Data Analytics', 'AI/ML', 'Blockchain', 'Sustainability', 'Risk Management',
    'Warehouse Operations', 'Transportation', 'Demand Forecasting'
  ];

  // ==================== LOCAL STORAGE & EFFECTS ====================
  useEffect(() => {
    const saved = localStorage.getItem('joinedUserGroups');
    if (saved) setJoinedGroups(JSON.parse(saved));
    const savedPosts = localStorage.getItem('forumPosts');
    if (savedPosts) setForumPosts(JSON.parse(savedPosts));
    const savedRsvp = localStorage.getItem('rsvpStatus');
    if (savedRsvp) setRsvpStatus(JSON.parse(savedRsvp));
    const savedPoints = localStorage.getItem('userPoints');
    if (savedPoints) setUserPoints(parseInt(savedPoints));
    const savedBadges = localStorage.getItem('userBadges');
    if (savedBadges) setUserBadges(JSON.parse(savedBadges));
    const savedMentorship = localStorage.getItem('mentorshipRequests');
    if (savedMentorship) setMentorshipRequests(JSON.parse(savedMentorship));
    const savedJobs = localStorage.getItem('jobPosts');
    if (savedJobs) setJobPosts(JSON.parse(savedJobs));
    const savedSkillSessions = localStorage.getItem('skillSessions');
    if (savedSkillSessions) setSkillSessions(JSON.parse(savedSkillSessions));
  }, []);

  useEffect(() => {
    localStorage.setItem('joinedUserGroups', JSON.stringify(joinedGroups));
  }, [joinedGroups]);
  useEffect(() => {
    localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
  }, [forumPosts]);
  useEffect(() => {
    localStorage.setItem('rsvpStatus', JSON.stringify(rsvpStatus));
  }, [rsvpStatus]);
  useEffect(() => {
    localStorage.setItem('userPoints', userPoints.toString());
  }, [userPoints]);
  useEffect(() => {
    localStorage.setItem('userBadges', JSON.stringify(userBadges));
  }, [userBadges]);
  useEffect(() => {
    localStorage.setItem('mentorshipRequests', JSON.stringify(mentorshipRequests));
  }, [mentorshipRequests]);
  useEffect(() => {
    localStorage.setItem('jobPosts', JSON.stringify(jobPosts));
  }, [jobPosts]);
  useEffect(() => {
    localStorage.setItem('skillSessions', JSON.stringify(skillSessions));
  }, [skillSessions]);

  // ==================== HELPER FUNCTIONS ====================
  const filterGroups = (groupList) => {
    return groupList.filter((g) => {
      const matchesSearch = searchQuery === '' ||
        g.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.location?.city?.toLowerCase().includes(searchQuery.toLowerCase());
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
  } else if (activeTab === 'joined') {
    displayedGroups = filterGroups(userGroups.filter(g => joinedGroups.includes(g.id)));
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

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  // ==================== GAMIFICATION FUNCTIONS ====================
  const addPoints = (points) => {
    setUserPoints(prev => prev + points);
  };

  const addBadge = (name, description) => {
    if (!userBadges.some(b => b.name === name)) {
      setUserBadges(prev => [...prev, { name, description, earnedAt: new Date().toISOString() }]);
    }
  };

  // ==================== UI HANDLERS ====================
  const handleJoinGroup = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.terms) newErrors.terms = 'You must agree to the community guidelines';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (selectedGroup && !joinedGroups.includes(selectedGroup.id)) {
      setJoinedGroups([...joinedGroups, selectedGroup.id]);
      addPoints(50, 'Joined a group');
      if (joinedGroups.length + 1 >= 3) {
        addBadge('Community Builder', 'Joined 3+ groups');
      }
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowJoinModal(false);
      setFormData({
        name: '', email: '', company: '', role: '', experience: '',
        interests: '', skills: [], mentorshipRole: '', newsletter: false, terms: false
      });
    }, 3000);
  };

  const leaveGroup = (groupId, e) => {
    e.stopPropagation();
    setJoinedGroups(joinedGroups.filter(id => id !== groupId));
  };

  const hasJoined = (groupId) => joinedGroups.includes(groupId);

  const handleNewPost = (groupId) => {
    if (!newPostContent.trim()) return;
    const newPost = {
      id: Date.now(),
      content: newPostContent,
      author: formData.name || 'Anonymous Member',
      authorAvatar: null,
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: [],
    };
    setForumPosts(prev => ({
      ...prev,
      [groupId]: [newPost, ...(prev[groupId] || [])]
    }));
    setNewPostContent('');
    addPoints(10, 'Created a discussion post');
  };

  const handleNewJobPost = (groupId) => {
    if (!newJobPost.title || !newJobPost.description) return;
    const newJob = {
      id: Date.now(),
      ...newJobPost,
      postedBy: formData.name || 'Anonymous',
      postedAt: new Date().toISOString(),
    };
    setJobPosts(prev => ({
      ...prev,
      [groupId]: [newJob, ...(prev[groupId] || [])]
    }));
    setNewJobPost({ title: '', description: '', type: 'full-time', location: '', contact: '' });
    addPoints(15, 'Posted a job opportunity');
  };

  const handleMentorshipRequest = (mentorId) => {
    const request = {
      id: Date.now(),
      mentorId,
      menteeName: formData.name || 'Anonymous',
      menteeEmail: formData.email,
      status: 'pending',
      requestedAt: new Date().toISOString(),
    };
    setMentorshipRequests(prev => [...prev, request]);
    addPoints(5, 'Requested mentorship');
    alert('Mentorship request sent!');
  };

  const handleSkillShareSession = () => {
    const newSession = {
      id: Date.now(),
      title: `Skill Share: ${formData.skills[0] || 'Supply Chain'}`,
      host: formData.name || 'Anonymous',
      date: new Date(Date.now() + 7 * 86400000).toISOString(),
      attendees: [],
    };
    setSkillSessions(prev => [...prev, newSession]);
    addPoints(30, 'Created a skill share session');
    alert('Skill share session created!');
  };

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

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="User Groups Premium Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-usergroup" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-usergroup)" />
        </svg>
      </div>

      {/* ==================== USER STATS BAR - GAMIFICATION ==================== */}
      <div className="fixed top-20 right-4 z-40 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 min-w-36">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
            <HiOutlineTrophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Your Points</p>
            <p className="text-xl font-bold text-yellow-600 dark:text-yellow-400">{userPoints}</p>
          </div>
        </div>
        {userBadges.length > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
            <div className="flex gap-1">
              {userBadges.slice(0, 3).map((badge, idx) => (
                <div key={idx} className="group relative">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineBadgeCheck className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="absolute bottom-full right-0 mb-1 hidden group-hover:block bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-50">
                    {badge.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineUsers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Professional Network"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Grow Your"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Professional Network"}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description || "Join a vibrant community of supply chain professionals. Find mentors, share skills, discover jobs, and earn recognition for your contributions."}
            </p>
          </div>
          {stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

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
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => { setSelectedGroup(featuredGroup); setShowJoinModal(true); }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Join this group"
                >
                  <HiOutlineUserGroup className="w-5 h-5" />Join This Group
                </button>
                <button
                  onClick={() => { setMentorshipGroup(featuredGroup); setShowMentorshipModal(true); }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                  aria-label="Find a mentor"
                >
                  <HiOutlineAcademicCap className="w-5 h-5" />Find a Mentor
                </button>
                <button
                  onClick={() => { setJobBoardGroup(featuredGroup); setShowJobBoardModal(true); }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                  aria-label="View job board"
                >
                  <HiOutlineBriefcase className="w-5 h-5" />Job Board
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
                    tab.icon === 'globe' ? <HiOutlineGlobe className="w-4 h-4" /> :
                      <HiOutlineHeart className="w-4 h-4" />}
              {tab.label}
              {tab.id === 'joined' && (
                <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">{joinedGroups.length}</span>
              )}
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
              <HiOutlineFilter className="w-5 h-5" />Filters
              {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>
            <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`} aria-label="Grid view">
                <HiOutlineViewGrid className="w-5 h-5" />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`} aria-label="List view">
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
                    {regions.map(r => <option key={r} value={r}>{r === 'all' ? 'All Regions' : r}</option>)}
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
                    {topics.map(t => <option key={t} value={t}>{t === 'all' ? 'All Topics' : t}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ==================== USER GROUPS GRID ==================== */}
        {displayedGroups.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineUsers className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No user groups found.</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedGroups.map((group) => {
              const isJoined = hasJoined(group.id);
              const groupPosts = forumPosts[group.id] || [];
              const groupJobs = jobPosts[group.id] || [];

              return (
                <div key={group.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  {group.image && (
                    <div className="relative h-40 overflow-hidden">
                      <img src={group.image} alt={group.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      {group.type && (
                        <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getTypeBadge(group.type)}`}>
                          {group.type}
                        </span>
                      )}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button onClick={(e) => shareGroupHandler(group, e)} className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors" aria-label="Share group">
                          <HiOutlineShare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{group.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{group.description}</p>
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
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <button
                        onClick={() => { setForumGroup(group); setShowForumModal(true); }}
                        className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="View discussions"
                      >
                        <HiOutlineChat className="w-3 h-3" />{groupPosts.length} posts
                      </button>
                      <button
                        onClick={() => { setJobBoardGroup(group); setShowJobBoardModal(true); }}
                        className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="View jobs"
                      >
                        <HiOutlineBriefcase className="w-3 h-3" />{groupJobs.length} jobs
                      </button>
                      <button
                        onClick={() => { setMentorshipGroup(group); setShowMentorshipModal(true); }}
                        className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="Find mentorship"
                      >
                        <HiOutlineAcademicCap className="w-3 h-3" />Mentorship
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {isJoined ? (
                        <>
                          <button
                            onClick={() => { setForumGroup(group); setShowForumModal(true); }}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors"
                            aria-label="View discussions"
                          >
                            <HiOutlineChat className="w-4 h-4" />Discuss
                          </button>
                          <button
                            onClick={(e) => leaveGroup(group.id, e)}
                            className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-red-600 dark:text-red-400 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Leave group"
                          >
                            Leave
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => { setSelectedGroup(group); setShowJoinModal(true); }}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors"
                          aria-label="Join group"
                        >
                          <HiOutlineUserGroup className="w-4 h-4" />Join Group
                        </button>
                      )}
                      <button
                        onClick={() => { setSkillShareGroup(group); setShowSkillShareModal(true); }}
                        className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors"
                        aria-label="Skill share"
                      >
                        <HiOutlineLightningBolt className="w-4 h-4" />Skill Share
                      </button>
                    </div>
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
                <div key={group.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
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
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{group.description}</p>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                        {group.location && <div className="flex items-center gap-1"><HiOutlineLocationMarker className="w-4 h-4" />{group.location.city}, {group.location.country}</div>}
                        {group.memberCount && <div className="flex items-center gap-1"><HiOutlineUsers className="w-4 h-4" />{formatMemberCount(group.memberCount)}</div>}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {isJoined ? (
                          <>
                            <button onClick={() => { setForumGroup(group); setShowForumModal(true); }} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors" aria-label="View discussions">Discussions</button>
                            <button onClick={(e) => leaveGroup(group.id, e)} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-red-600 dark:text-red-400 rounded-lg text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Leave group">Leave</button>
                          </>
                        ) : (
                          <button onClick={() => { setSelectedGroup(group); setShowJoinModal(true); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors" aria-label="Join group">Join Group</button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== JOIN MODAL WITH SKILLS ==================== */}
        {showJoinModal && selectedGroup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowJoinModal(false)} role="dialog" aria-label="Join User Group" aria-modal="true">
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0">
                <div className="flex items-center justify-between">
                  <div><h3 className="text-white font-bold text-lg">Join User Group</h3><p className="text-blue-100 text-xs mt-1">{selectedGroup.name}</p></div>
                  <button onClick={() => setShowJoinModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal"><HiOutlineX className="w-6 h-6" /></button>
                </div>
              </div>
              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" /></div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Welcome to the Group!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">You've successfully joined. +50 points earned!</p>
                  </div>
                ) : (
                  <form onSubmit={handleJoinGroup} className="space-y-4">
                    <div><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full name *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} aria-label="Your full name" />{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}</div>
                    <div><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email address *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} aria-label="Your email address" />{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}</div>
                    <div><input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="Your company name" /></div>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" name="role" placeholder="Job title" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="Your job title" />
                      <select name="experience" value={formData.experience} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Years of experience">
                        <option value="">Experience</option><option value="entry">Entry Level</option><option value="mid">Mid Level</option><option value="senior">Senior Level</option>
                      </select>
                    </div>

                    {/* Skills Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Skills (select all that apply)</label>
                      <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-2 border border-gray-200 dark:border-gray-600 rounded-xl">
                        {availableSkills.map(skill => (
                          <button key={skill} type="button" onClick={() => handleSkillToggle(skill)} className={`text-xs px-2 py-1 rounded-full transition-all duration-300 ${formData.skills.includes(skill) ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>

                    <select name="mentorshipRole" value={formData.mentorshipRole} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Mentorship interest">
                      <option value="">Interested in...</option><option value="mentor">Being a Mentor</option><option value="mentee">Finding a Mentor</option><option value="both">Both</option>
                    </select>

                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="w-4 h-4" aria-label="Subscribe to newsletter" /><span className="text-sm text-gray-600 dark:text-gray-400">Receive updates about events and opportunities</span></label>
                    <label className={`flex items-start gap-2 cursor-pointer ${errors.terms ? 'text-red-500' : ''}`}><input type="checkbox" name="terms" checked={formData.terms} onChange={handleInputChange} className="w-4 h-4 mt-0.5" aria-label="Agree to guidelines" /><span className="text-sm text-gray-600 dark:text-gray-400">I agree to the Community Guidelines *</span></label>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300" aria-label="Submit join request">Join Group (+50 points)</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== MENTORSHIP MODAL ==================== */}
        {showMentorshipModal && mentorshipGroup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowMentorshipModal(false)} role="dialog" aria-label="Mentorship Program" aria-modal="true">
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-indigo-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Mentorship - {mentorshipGroup.name}</h3>
                  <button onClick={() => setShowMentorshipModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal"><HiOutlineX className="w-6 h-6" /></button>
                </div>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto"><HiOutlineAcademicCap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" /></div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-3">Find a Mentor or Become One</h4>
                </div>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div><p className="font-medium text-gray-900 dark:text-white">Sarah Johnson</p><p className="text-xs text-gray-500">Supply Chain Director • 15+ years</p><div className="flex flex-wrap gap-1 mt-1"><span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-1 rounded">Strategy</span><span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-1 rounded">AI</span></div></div>
                      <button onClick={() => handleMentorshipRequest('sarah')} className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs hover:bg-indigo-700 transition-colors">Request</button>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div><p className="font-medium text-gray-900 dark:text-white">Michael Chen</p><p className="text-xs text-gray-500">Logistics VP • 12+ years</p><div className="flex flex-wrap gap-1 mt-1"><span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-1 rounded">Logistics</span><span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-1 rounded">Operations</span></div></div>
                      <button onClick={() => handleMentorshipRequest('michael')} className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs hover:bg-indigo-700 transition-colors">Request</button>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">Become a Mentor (+100 points)</button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== JOB BOARD MODAL ==================== */}
        {showJobBoardModal && jobBoardGroup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowJobBoardModal(false)} role="dialog" aria-label="Job Board" aria-modal="true">
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-orange-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Job Board - {jobBoardGroup.name}</h3>
                  <button onClick={() => setShowJobBoardModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal"><HiOutlineX className="w-6 h-6" /></button>
                </div>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <input type="text" placeholder="Job Title" value={newJobPost.title} onChange={(e) => setNewJobPost({ ...newJobPost, title: e.target.value })} className="w-full mb-2 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" aria-label="Job title" />
                  <textarea placeholder="Description" value={newJobPost.description} onChange={(e) => setNewJobPost({ ...newJobPost, description: e.target.value })} rows="2" className="w-full mb-2 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none" aria-label="Job description" />
                  <div className="flex gap-2 mb-2">
                    <select value={newJobPost.type} onChange={(e) => setNewJobPost({ ...newJobPost, type: e.target.value })} className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" aria-label="Job type">
                      <option value="full-time">Full-time</option><option value="part-time">Part-time</option><option value="contract">Contract</option>
                    </select>
                    <input type="text" placeholder="Location" value={newJobPost.location} onChange={(e) => setNewJobPost({ ...newJobPost, location: e.target.value })} className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" aria-label="Job location" />
                  </div>
                  <button onClick={() => handleNewJobPost(jobBoardGroup.id)} className="w-full py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors">Post Job (+15 points)</button>
                </div>
                <div className="space-y-3">
                  {(jobPosts[jobBoardGroup.id] || []).map((job) => (
                    <div key={job.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div><p className="font-medium text-gray-900 dark:text-white">{job.title}</p><p className="text-xs text-gray-500">{job.type} • {job.location}</p><p className="text-xs text-gray-400 mt-1">{job.description.substring(0, 100)}...</p></div>
                        <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">Apply</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SKILL SHARE MODAL ==================== */}
        {showSkillShareModal && skillShareGroup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSkillShareModal(false)} role="dialog" aria-label="Skill Share" aria-modal="true">
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Skill Share - {skillShareGroup.name}</h3>
                  <button onClick={() => setShowSkillShareModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal"><HiOutlineX className="w-6 h-6" /></button>
                </div>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto"><HiOutlineLightningBolt className="w-8 h-8 text-purple-600 dark:text-purple-400" /></div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-3">Share Your Expertise</h4>
                  <p className="text-sm text-gray-500">Host a skill share session and earn points</p>
                </div>
                <button onClick={handleSkillShareSession} className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors mb-4">Host a Session (+30 points)</button>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {skillSessions.map((session) => (
                    <div key={session.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="font-medium text-sm text-gray-900 dark:text-white">{session.title}</p>
                      <p className="text-xs text-gray-500">Hosted by {session.host} • {formatDate(session.date)}</p>
                      <button className="mt-1 text-xs bg-emerald-600 text-white px-2 py-1 rounded hover:bg-emerald-700 transition-colors">Join Session</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== FORUM MODAL ==================== */}
        {showForumModal && forumGroup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowForumModal(false)} role="dialog" aria-label="Discussions" aria-modal="true">
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-emerald-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Discussions - {forumGroup.name}</h3>
                  <button onClick={() => setShowForumModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal"><HiOutlineX className="w-6 h-6" /></button>
                </div>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                <div className="mb-4">
                  <textarea value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)} placeholder="Share your thoughts... (+10 points per post)" rows="3" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white placeholder-gray-500 resize-none" aria-label="New post content" />
                  <div className="flex justify-end mt-2">
                    <button onClick={() => handleNewPost(forumGroup.id)} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors" aria-label="Create post">Post</button>
                  </div>
                </div>
                <div className="space-y-4">
                  {(forumPosts[forumGroup.id] || []).map((post) => (
                    <div key={post.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center"><HiOutlineUser className="w-4 h-4 text-blue-600 dark:text-blue-400" /></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between flex-wrap gap-2 mb-1"><p className="font-medium text-sm text-gray-900 dark:text-white">{post.author}</p><p className="text-xs text-gray-500">{formatDate(post.timestamp)}</p></div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{post.content}</p>
                          <div className="flex gap-3 mt-2"><button className="text-xs text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"><HiOutlineThumbUp className="w-3 h-3" />Like</button><button className="text-xs text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"><HiOutlineReply className="w-3 h-3" />Reply</button></div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {(forumPosts[forumGroup.id] || []).length === 0 && (<div className="text-center py-8"><HiOutlineChat className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" /><p className="text-gray-500 dark:text-gray-400">No discussions yet. Be the first to post!</p></div>)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SHARE MODAL ==================== */}
        {showShareModal && shareGroup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)} role="dialog" aria-label="Share Group" aria-modal="true">
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Group</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors" aria-label="Close modal"><HiOutlineX className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="p-6"><p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">{shareGroup.name}</p><div className="flex flex-col gap-3"><button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" aria-label="Copy link"><HiOutlineLink className="w-4 h-4" />Copy Link</button><button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareGroup.name)}&body=${encodeURIComponent(`${shareGroup.name}\n${shareGroup.description}\n\n${window.location.origin}/user-groups/${shareGroup.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Share via email"><HiOutlineMail className="w-4 h-4" />Share via Email</button></div></div>
            </div>
          </div>
        )}

        {/* ==================== START A GROUP CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineLightningBolt className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Lead a Community?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Start your own user group and earn 500 points! Bring together professionals in your area and build your leadership profile.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg" aria-label="Start a new group">
            <HiOutlineUserGroup className="w-5 h-5" />Start a New Group (+500 points)<HiOutlineArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default UserGroupsSection3;