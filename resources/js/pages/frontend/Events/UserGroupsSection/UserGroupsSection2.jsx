// page/frontend/Events/UserGroupsSection/UserGroupsSection2.jsx

// React
import { useState, useEffect, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineStar,
  HiOutlineChat,
  HiOutlineUsers,
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
  HiOutlineClipboardList,
  HiOutlineLightningBolt,
  HiOutlineThumbUp,
  HiOutlineReply,
  HiOutlineBadgeCheck,
} from 'react-icons/hi';
import { HiOutlineUser, HiOutlineTrophy } from 'react-icons/hi2';

const UserGroupsSection2 = ({ config }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    experience: '',
    interests: '',
    newsletter: false,
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [joinedGroups, setJoinedGroups] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareGroup, setShareGroup] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [showForumModal, setShowForumModal] = useState(false);
  const [forumGroup, setForumGroup] = useState(null);
  const [newPostContent, setNewPostContent] = useState('');
  const [forumPosts, setForumPosts] = useState({});
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventGroup, setEventGroup] = useState(null);
  const [rsvpStatus, setRsvpStatus] = useState({});
  const [showLeaderModal, setShowLeaderModal] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [showResourceModal, setShowResourceModal] = useState(false);
  const [resourceGroup, setResourceGroup] = useState(null);
  const modalRef = useRef(null);

  // Get data from config
  const userGroups = useMemo(() => config?.userGroups || [], [config?.userGroups]);
  const stats = config?.stats || [];
  const featuredGroupId = config?.featuredGroupId || (userGroups[0]?.id);

  // Featured group
  const featuredGroup = userGroups.find(g => g.id === featuredGroupId) || userGroups[0];

  // Get unique regions and topics
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

  // Load joined groups from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('joinedUserGroups');
    if (saved) setJoinedGroups(JSON.parse(saved));

    const savedPosts = localStorage.getItem('forumPosts');
    if (savedPosts) setForumPosts(JSON.parse(savedPosts));

    const savedRsvp = localStorage.getItem('rsvpStatus');
    if (savedRsvp) setRsvpStatus(JSON.parse(savedRsvp));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('joinedUserGroups', JSON.stringify(joinedGroups));
  }, [joinedGroups]);

  useEffect(() => {
    localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
  }, [forumPosts]);

  useEffect(() => {
    localStorage.setItem('rsvpStatus', JSON.stringify(rsvpStatus));
  }, [rsvpStatus]);

  // Filter groups
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

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Handle join group
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
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowJoinModal(false);
      setFormData({
        name: '', email: '', company: '', role: '', experience: '',
        interests: '', newsletter: false, terms: false
      });
    }, 3000);
  };

  // Leave group
  const leaveGroup = (groupId, e) => {
    e.stopPropagation();
    setJoinedGroups(joinedGroups.filter(id => id !== groupId));
  };

  // Check if user has joined
  const hasJoined = (groupId) => joinedGroups.includes(groupId);

  // Handle new forum post
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
  };

  // Handle RSVP for event
  const handleRSVP = (groupId, eventId, status) => {
    setRsvpStatus(prev => ({
      ...prev,
      [`${groupId}-${eventId}`]: status
    }));
  };

  // Share group
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

  // Format member count
  const formatMemberCount = (count) => {
    if (!count) return '0 members';
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k members`;
    return `${count} members`;
  };

  // Get group type badge color
  const getTypeBadge = (type) => {
    switch (type) {
      case 'Online': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Hybrid': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      default: return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
    }
  };

  // Format date
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="User Groups Community Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineUsers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Community Network"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Connect with"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Local Professionals"}</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description || "Join a community of supply chain professionals in your area. Share insights, attend events, and grow your network."}
            </p>
          </div>

          {/* Stats Cards */}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  {stat.trend && (
                    <div className={`text-xs mt-1 ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.trend}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Featured Group Banner with Leader Info */}
        {featuredGroup && activeTab !== 'featured' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-grid-white" /></div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Community</span>
                {featuredGroup.isOnline && (<span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">Online Group</span>)}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredGroup.name}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredGroup.description}</p>

              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredGroup.location && (<div className="flex items-center gap-2"><HiOutlineLocationMarker className="w-4 h-4" /><span>{featuredGroup.location.city}, {featuredGroup.location.country}</span></div>)}
                {featuredGroup.memberCount && (<div className="flex items-center gap-2"><HiOutlineUsers className="w-4 h-4" /><span>{formatMemberCount(featuredGroup.memberCount)}</span></div>)}
                {featuredGroup.nextMeetup && (<div className="flex items-center gap-2"><HiOutlineCalendar className="w-4 h-4" /><span>Next: {featuredGroup.nextMeetup}</span></div>)}
              </div>

              {/* Group Leader */}
              {featuredGroup.leader && (
                <div className="items-center gap-3 mb-6 p-3 bg-white/10 rounded-xl inline-flex">
                  {featuredGroup.leader.avatar ? (
                    <img src={featuredGroup.leader.avatar} alt={featuredGroup.leader.name} className="w-10 h-10 rounded-full" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><HiOutlineUser className="w-5 h-5" /></div>
                  )}
                  <div>
                    <p className="text-sm font-semibold">Led by {featuredGroup.leader.name}</p>
                    <p className="text-xs text-white/70">{featuredGroup.leader.title}</p>
                  </div>
                  <button onClick={() => { setSelectedLeader(featuredGroup.leader); setShowLeaderModal(true); }} className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-lg hover:bg-white/30">View Profile</button>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                <button onClick={() => { setSelectedGroup(featuredGroup); setShowJoinModal(true); }} className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                  <HiOutlineUserGroup className="w-5 h-5" />Join This Group<HiOutlineArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => { setForumGroup(featuredGroup); setShowForumModal(true); }} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30">
                  <HiOutlineChat className="w-5 h-5" />View Discussions
                </button>
                <button onClick={() => { setResourceGroup(featuredGroup); setShowResourceModal(true); }} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30">
                  <HiOutlineClipboardList className="w-5 h-5" />Resources
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
              {tab.icon === 'users' ? <HiOutlineUsers className="w-4 h-4" /> : tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> : tab.icon === 'location' ? <HiOutlineLocationMarker className="w-4 h-4" /> : tab.icon === 'globe' ? <HiOutlineGlobe className="w-4 h-4" /> : <HiOutlineHeart className="w-4 h-4" />}
              {tab.label}
              {tab.id === 'joined' && <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">{joinedGroups.length}</span>}
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><HiOutlineSearch className="w-5 h-5 text-gray-400" /></div>
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search groups by name, location, or topic..." className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all">
              <HiOutlineFilter className="w-5 h-5" />Filters {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>
            <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}><HiOutlineViewGrid className="w-5 h-5" /></button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}><HiOutlineViewList className="w-5 h-5" /></button>
            </div>
          </div>
          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label><select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">{regions.map(r => <option key={r} value={r}>{r === 'all' ? 'All Regions' : r}</option>)}</select></div>
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Topic</label><select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">{topics.map(t => <option key={t} value={t}>{t === 'all' ? 'All Topics' : t}</option>)}</select></div>
              </div>
            </div>
          )}
        </div>

        {/* Groups Grid/List */}
        {displayedGroups.length === 0 ? (
          <div className="text-center py-12"><HiOutlineUsers className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" /><p className="text-gray-500 dark:text-gray-400">No user groups found matching your criteria.</p><button onClick={() => { setSearchQuery(''); setSelectedRegion('all'); setSelectedTopic('all'); }} className="mt-4 text-blue-600 hover:underline">Clear filters</button></div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedGroups.map((group) => {
              const isJoined = hasJoined(group.id);
              const groupPosts = forumPosts[group.id] || [];
              const upcomingEvents = group.events?.filter(e => new Date(e.date) > new Date()) || [];

              return (
                <div key={group.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  {group.image && (
                    <div className="relative h-40 overflow-hidden">
                      <img src={group.image} alt={group.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {group.type && (<span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getTypeBadge(group.type)}`}>{group.type}</span>)}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button onClick={(e) => shareGroupHandler(group, e)} className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70"><HiOutlineShare className="w-4 h-4" /></button>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{group.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{group.description}</p>
                    <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      {group.location && (<div className="flex items-center gap-2"><HiOutlineLocationMarker className="w-4 h-4 shrink-0" /><span>{group.location.city}, {group.location.country}</span></div>)}
                      {group.memberCount && (<div className="flex items-center gap-2"><HiOutlineUsers className="w-4 h-4 shrink-0" /><span>{formatMemberCount(group.memberCount)}</span></div>)}
                    </div>
                    {group.topics && group.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">{group.topics.slice(0, 3).map((topic, idx) => (<span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">{topic}</span>))}</div>
                    )}

                    {/* Quick Actions */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {upcomingEvents.length > 0 && (
                        <button onClick={() => { setEventGroup(group); setShowEventModal(true); }} className="text-xs text-blue-600 hover:underline flex items-center gap-1"><HiOutlineCalendar className="w-3 h-3" />{upcomingEvents.length} upcoming</button>
                      )}
                      {groupPosts.length > 0 && (
                        <button onClick={() => { setForumGroup(group); setShowForumModal(true); }} className="text-xs text-green-600 hover:underline flex items-center gap-1"><HiOutlineChat className="w-3 h-3" />{groupPosts.length} discussions</button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {isJoined ? (
                        <>
                          <button onClick={() => { setForumGroup(group); setShowForumModal(true); }} className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-semibold text-sm"><HiOutlineChat className="w-4 h-4" />Discussions</button>
                          <button onClick={(e) => leaveGroup(group.id, e)} className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-red-600 px-4 py-2 rounded-xl font-semibold text-sm">Leave</button>
                        </>
                      ) : (
                        <button onClick={() => { setSelectedGroup(group); setShowJoinModal(true); }} className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm"><HiOutlineUserGroup className="w-4 h-4" />Join Group</button>
                      )}
                      <button onClick={() => setSelectedGroup(selectedGroup === group.id ? null : group.id)} className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">{selectedGroup === group.id ? 'Less' : 'More'}</button>
                    </div>

                    {selectedGroup === group.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        {group.leader && (<div className="mb-3"><p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Group Leader:</p><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"><HiOutlineUser className="w-4 h-4 text-blue-600" /></div><div><p className="text-sm font-medium">{group.leader.name}</p><p className="text-xs text-gray-500">{group.leader.title}</p></div></div></div>)}
                        {upcomingEvents.length > 0 && (<div><p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Upcoming Events:</p><ul className="space-y-1">{upcomingEvents.slice(0, 2).map((event, idx) => (<li key={idx} className="flex items-start gap-2 text-xs text-gray-600"><HiOutlineCalendar className="w-3 h-3 text-blue-500 mt-0.5" /><span>{formatDate(event.date)}: {event.title}</span></li>))}</ul></div>)}
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
                <div key={group.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row gap-6">
                    {group.image && (<div className="md:w-48 h-32 rounded-xl overflow-hidden shrink-0"><img src={group.image} alt={group.name} className="w-full h-full object-cover" /></div>)}
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <div><h3 className="text-xl font-bold text-gray-900 dark:text-white">{group.name}</h3>{group.type && (<span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${getTypeBadge(group.type)}`}>{group.type}</span>)}</div>
                        <div className="flex gap-2"><button onClick={(e) => shareGroupHandler(group, e)} className="p-2 rounded-lg bg-gray-100 text-gray-600"><HiOutlineShare className="w-4 h-4" /></button></div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{group.description}</p>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                        {group.location && <div className="flex items-center gap-1"><HiOutlineLocationMarker className="w-4 h-4" />{group.location.city}, {group.location.country}</div>}
                        {group.memberCount && <div className="flex items-center gap-1"><HiOutlineUsers className="w-4 h-4" />{formatMemberCount(group.memberCount)}</div>}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {isJoined ? (
                          <><button onClick={() => { setForumGroup(group); setShowForumModal(true); }} className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold">Discussions</button><button onClick={(e) => leaveGroup(group.id, e)} className="px-4 py-2 bg-gray-100 text-red-600 rounded-lg text-sm font-semibold">Leave</button></>
                        ) : (<button onClick={() => { setSelectedGroup(group); setShowJoinModal(true); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">Join Group</button>)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Join Group Modal with Terms */}
        {showJoinModal && selectedGroup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowJoinModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()} ref={modalRef}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between"><div><h3 className="text-white font-bold text-lg">Join User Group</h3><p className="text-blue-100 text-xs mt-1">{selectedGroup.name}</p></div><button onClick={() => setShowJoinModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div>
              </div>
              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineCheckCircle className="w-8 h-8 text-green-600" /></div><h4 className="text-xl font-bold mb-2">Welcome to the Group!</h4><p className="text-gray-600 text-sm">You've successfully joined {selectedGroup.name}. Check your email for group updates.</p></div>
                ) : (
                  <form onSubmit={handleJoinGroup} className="space-y-4">
                    <div><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full name *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-200'}`} />{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}</div>
                    <div><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email address *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200'}`} />{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}</div>
                    <div><input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl" /></div>
                    <div className="grid grid-cols-2 gap-3"><input type="text" name="role" placeholder="Job title" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl" /><select name="experience" value={formData.experience} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"><option value="">Experience</option><option value="entry">Entry Level</option><option value="mid">Mid Level</option><option value="senior">Senior Level</option></select></div>
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="w-4 h-4" /><span className="text-sm text-gray-600">Receive email updates about group events</span></label>
                    <label className={`flex items-start gap-2 cursor-pointer ${errors.terms ? 'text-red-500' : ''}`}><input type="checkbox" name="terms" checked={formData.terms} onChange={handleInputChange} className="w-4 h-4 mt-0.5" /><span className="text-sm text-gray-600">I agree to the <a href="#" className="text-blue-600 hover:underline">Community Guidelines</a> *</span></label>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all">Join Group<HiOutlineArrowRight className="inline ml-2 w-4 h-4" /></button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Forum Modal */}
        {showForumModal && forumGroup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowForumModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4 flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">Discussions - {forumGroup.name}</h3>
                <button onClick={() => setShowForumModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                <div className="mb-4">
                  <div className="flex gap-2">
                    <textarea value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)} placeholder="Share your thoughts, ask questions, or start a discussion..." rows="3" className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
                  </div>
                  <div className="flex justify-end mt-2">
                    <button onClick={() => handleNewPost(forumGroup.id)} className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700">Post</button>
                  </div>
                </div>
                <div className="space-y-4">
                  {(forumPosts[forumGroup.id] || []).map((post) => (
                    <div key={post.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"><HiOutlineUser className="w-4 h-4 text-blue-600" /></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between flex-wrap gap-2 mb-1"><p className="font-medium text-sm text-gray-900 dark:text-white">{post.author}</p><p className="text-xs text-gray-500">{formatDate(post.timestamp)}</p></div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{post.content}</p>
                          <div className="flex gap-3 mt-2"><button className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1"><HiOutlineThumbUp className="w-3 h-3" />Like</button><button className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1"><HiOutlineReply className="w-3 h-3" />Reply</button></div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {(forumPosts[forumGroup.id] || []).length === 0 && (<div className="text-center py-8"><HiOutlineChat className="w-12 h-12 mx-auto text-gray-300 mb-3" /><p className="text-gray-500">No discussions yet. Be the first to post!</p></div>)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Modal with RSVP */}
        {showEventModal && eventGroup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowEventModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-purple-600 p-4 flex items-center justify-between"><h3 className="text-white font-bold text-lg">Upcoming Events - {eventGroup.name}</h3><button onClick={() => setShowEventModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div>
              <div className="p-6 max-h-96 overflow-y-auto">
                {eventGroup.events && eventGroup.events.length > 0 ? (
                  <div className="space-y-4">
                    {eventGroup.events.map((event) => {
                      const rsvpKey = `${eventGroup.id}-${event.id}`;
                      const status = rsvpStatus[rsvpKey];
                      return (
                        <div key={event.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1"><HiOutlineCalendar className="w-3 h-3" /><span>{formatDate(event.date)}</span><HiOutlineClock className="w-3 h-3 ml-2" /><span>{event.time}</span></div>
                          {event.location && <div className="flex items-center gap-2 text-xs text-gray-500 mt-1"><HiOutlineLocationMarker className="w-3 h-3" /><span>{event.location}</span></div>}
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{event.description}</p>
                          <div className="flex gap-2 mt-3">
                            {status === 'going' ? (<span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Going ✓</span>) : (<button onClick={() => handleRSVP(eventGroup.id, event.id, 'going')} className="text-xs bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">RSVP: Going</button>)}
                            {status === 'interested' ? (<span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">Interested</span>) : (<button onClick={() => handleRSVP(eventGroup.id, event.id, 'interested')} className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300">Interested</button>)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (<div className="text-center py-8"><HiOutlineCalendar className="w-12 h-12 mx-auto text-gray-300 mb-3" /><p className="text-gray-500">No upcoming events scheduled.</p></div>)}
              </div>
            </div>
          </div>
        )}

        {/* Leader Profile Modal */}
        {showLeaderModal && selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowLeaderModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4 flex items-center justify-between"><h3 className="text-white font-bold text-lg">Community Leader</h3><button onClick={() => setShowLeaderModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div>
              <div className="p-6 text-center">
                {selectedLeader.avatar ? (<img src={selectedLeader.avatar} className="w-24 h-24 rounded-full mx-auto mb-4" />) : (<div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4"><HiOutlineUser className="w-12 h-12 text-blue-600" /></div>)}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{selectedLeader.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{selectedLeader.title}, {selectedLeader.company}</p>
                {selectedLeader.verified && (<div className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full mb-3"><HiOutlineBadgeCheck className="w-3 h-3" />Verified Leader</div>)}
                <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedLeader.bio}</p>
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-left"><p className="text-sm font-semibold">Expertise:</p><div className="flex flex-wrap gap-1 mt-1">{selectedLeader.expertise?.map((exp, idx) => (<span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{exp}</span>))}</div></div>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg font-semibold">Connect with Leader</button>
              </div>
            </div>
          </div>
        )}

        {/* Resources Modal */}
        {showResourceModal && resourceGroup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowResourceModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-orange-600 p-4 flex items-center justify-between"><h3 className="text-white font-bold text-lg">Resources - {resourceGroup.name}</h3><button onClick={() => setShowResourceModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div>
              <div className="p-6 max-h-96 overflow-y-auto">
                {resourceGroup.resources && resourceGroup.resources.length > 0 ? (
                  <div className="space-y-3">
                    {resourceGroup.resources.map((resource, idx) => (
                      <div key={idx} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between"><div><h4 className="font-medium text-gray-900 dark:text-white text-sm">{resource.title}</h4><p className="text-xs text-gray-500 mt-1">{resource.type} • {resource.size}</p></div><button className="text-blue-600 hover:underline text-sm">Download</button></div>
                      </div>
                    ))}
                  </div>
                ) : (<div className="text-center py-8"><HiOutlineClipboardList className="w-12 h-12 mx-auto text-gray-300 mb-3" /><p className="text-gray-500">No resources available yet.</p></div>)}
              </div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareGroup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 p-4"><div className="flex items-center justify-between"><h3 className="font-bold">Share User Group</h3><button onClick={() => setShowShareModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div>
              <div className="p-6"><p className="text-sm text-gray-600 mb-4 text-center">{shareGroup.name}</p><div className="flex flex-col gap-3"><button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg"><HiOutlineLink className="w-4 h-4" />Copy Link</button><button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareGroup.name)}&body=${encodeURIComponent(`${shareGroup.name}\n${shareGroup.description}\n\n${window.location.origin}/user-groups/${shareGroup.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"><HiOutlineMail className="w-4 h-4" />Share via Email</button></div></div>
            </div>
          </div>
        )}

        {/* Start a Group CTA */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <HiOutlineLightningBolt className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Lead a Community?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Start your own user group and bring together supply chain professionals in your area. We'll provide the tools and support you need.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"><HiOutlineUserGroup className="w-5 h-5" />Start a New Group<HiOutlineArrowRight className="w-4 h-4" /></button>
        </div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .bg-grid-slate-100 { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .dark .bg-grid-slate-800 { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .bg-grid-white { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
      `}</style>
    </section>
  );
};

export default UserGroupsSection2;