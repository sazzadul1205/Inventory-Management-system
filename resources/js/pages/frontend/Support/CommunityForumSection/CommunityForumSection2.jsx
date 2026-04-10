// page/frontend/Community/CommunityForumSection/CommunityForumSection2.jsx

// React
import { useState, useEffect, useMemo } from 'react';

// Icons
import { AiOutlineCrown as HiOutlineCrown, } from "react-icons/ai";
import { FaAward as HiOutlineAward, } from "react-icons/fa";
import {
  HiOutlineChat,
  HiOutlineUsers,
  HiOutlineSearch,
  HiOutlineX,
  HiOutlineCheckCircle,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineUserAdd,
  HiOutlineTrash,
  HiOutlineFlag,
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineBadgeCheck,
  HiOutlineLockClosed,
  HiOutlinePencil,
  HiOutlinePlus,
  HiOutlineUserCircle,
  HiOutlineShieldCheck,
  HiOutlineSupport,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineLightBulb,
} from 'react-icons/hi2';
import { MdOutlinePin as HiOutlinePin, } from "react-icons/md";

const CommunityForumSection2 = ({ config }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showCreateTopicModal, setShowCreateTopicModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSort, setActiveSort] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [topics, setTopics] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [privateMessages, setPrivateMessages] = useState([]);
  const [reports, setReports] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'general',
    content: '',
    tags: [],
    editContent: '',
  });
  const [replyData, setReplyData] = useState({ content: '' });
  const [messageData, setMessageData] = useState({ recipient: '', subject: '', content: '' });
  const [reportData, setReportData] = useState({ reason: '', details: '' });
  const [errors, setErrors] = useState({});
  const [stats, setStats] = useState({
    totalTopics: 0,
    totalPosts: 0,
    totalUsers: 0,
    onlineUsers: 0,
    newToday: 0,
    topContributors: [],
  });
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [popularTags, setPopularTags] = useState([]);
  const [userReputation, setUserReputation] = useState({});

  // Get data from config
  const configTopics = useMemo(() => config?.topics || [], [config]);

  const configCategories = useMemo(() => config?.categories || [
    { id: 'general', name: 'General Discussion', icon: 'chat', description: 'General conversations', color: 'bg-blue-100 text-blue-700', postCount: 156, moderation: false },
    { id: 'announcements', name: 'Announcements', icon: 'megaphone', description: 'Product updates', color: 'bg-green-100 text-green-700', postCount: 23, moderation: true },
    { id: 'help', name: 'Help & Support', icon: 'support', description: 'Technical help', color: 'bg-purple-100 text-purple-700', postCount: 342, moderation: false },
    { id: 'feature-requests', name: 'Feature Requests', icon: 'star', description: 'Suggest features', color: 'bg-yellow-100 text-yellow-700', postCount: 89, moderation: false },
    { id: 'tips-tricks', name: 'Tips & Tricks', icon: 'lightbulb', description: 'Share knowledge', color: 'bg-orange-100 text-orange-700', postCount: 67, moderation: false },
  ], [config]);

  const configUsers = useMemo(() => config?.users || [
    { id: 'user1', name: 'Sarah Johnson', role: 'Community Manager', avatar: null, reputation: 1245, posts: 342, joinedAt: '2023-01-15', badges: ['Expert', 'Helper', 'Moderator'], isOnline: true, title: 'Community Expert' },
    { id: 'user2', name: 'Michael Chen', role: 'Power User', avatar: null, reputation: 892, posts: 187, joinedAt: '2023-03-20', badges: ['Contributor'], isOnline: true, title: 'API Specialist' },
    { id: 'user3', name: 'Emily Rodriguez', role: 'Member', avatar: null, reputation: 456, posts: 89, joinedAt: '2023-06-10', badges: [], isOnline: false, title: '' },
    { id: 'user4', name: 'David Kim', role: 'Moderator', avatar: null, reputation: 2100, posts: 567, joinedAt: '2022-11-01', badges: ['Moderator', 'Expert'], isOnline: true, title: 'Senior Moderator' },
  ], [config]);

  // Initialize data
  useEffect(() => {
    const savedTopics = localStorage.getItem('forumTopics');
    if (savedTopics && JSON.parse(savedTopics).length > 0) {
      setTopics(JSON.parse(savedTopics));
    } else {
      setTopics(configTopics);
    }

    const savedUsers = localStorage.getItem('forumUsers');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      setUsers(configUsers);
    }

    const savedMessages = localStorage.getItem('privateMessages');
    if (savedMessages) setPrivateMessages(JSON.parse(savedMessages));

    const savedReports = localStorage.getItem('forumReports');
    if (savedReports) setReports(JSON.parse(savedReports));

    const savedReputation = localStorage.getItem('userReputation');
    if (savedReputation) setUserReputation(JSON.parse(savedReputation));

    setCategories(configCategories);
    setPopularTags(['api', 'integration', 'dashboard', 'analytics', 'mobile', 'security']);
    setCurrentUser({ id: 'currentUser', name: 'You', role: 'Member', reputation: 150, posts: 12, badges: [], isOnline: true });
  }, [configCategories, configTopics, configUsers]);

  useEffect(() => {
    localStorage.setItem('forumTopics', JSON.stringify(topics));
    localStorage.setItem('forumUsers', JSON.stringify(users));
    localStorage.setItem('privateMessages', JSON.stringify(privateMessages));
    localStorage.setItem('forumReports', JSON.stringify(reports));
    localStorage.setItem('userReputation', JSON.stringify(userReputation));
    updateStats();
  }, [topics, users, privateMessages, reports, userReputation, updateStats]);

  // Update statistics
  const updateStats = useMemo(() => () => {
    const totalPosts = topics.reduce((sum, topic) => sum + (topic.posts?.length || 0) + 1, 0);
    const newToday = topics.filter(t => {
      const today = new Date().toDateString();
      return new Date(t.createdAt).toDateString() === today;
    }).length;

    const topContributors = [...users].sort((a, b) => b.reputation - a.reputation).slice(0, 5);

    setStats({
      totalTopics: topics.length,
      totalPosts,
      totalUsers: users.length,
      onlineUsers: users.filter(u => u.isOnline).length,
      newToday,
      topContributors,
    });
  }, [topics, users]);

  // Filter and sort topics
  useEffect(() => {
    let filtered = [...topics];

    if (activeCategory !== 'all') {
      filtered = filtered.filter(t => t.category === activeCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(topic =>
        topic.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (activeSort === 'recent') {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (activeSort === 'popular') {
      filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (activeSort === 'active') {
      filtered.sort((a, b) => new Date(b.lastActivity) - new Date(a.lastActivity));
    } else if (activeSort === 'unanswered') {
      filtered = filtered.filter(t => (t.posts?.length || 0) === 0);
    }

    setFilteredTopics(filtered);
  }, [topics, activeCategory, activeSort, searchQuery]);

  // Handle form input
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prev => ({ ...prev, tags: [...prev.tags, value] }));
      } else {
        setFormData(prev => ({ ...prev, tags: prev.tags.filter(t => t !== value) }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleReplyChange = (e) => {
    setReplyData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleMessageChange = (e) => {
    setMessageData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReportChange = (e) => {
    setReportData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Create new topic with reputation gain
  const handleCreateTopic = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      setErrors({ title: 'Title required', content: 'Content required' });
      return;
    }

    const newTopic = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      content: formData.content,
      tags: formData.tags,
      author: { id: currentUser.id, name: currentUser.name, avatar: null, reputation: currentUser.reputation },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      views: 0,
      likes: 0,
      posts: [],
      isPinned: false,
      isLocked: false,
      isReported: false,
    };

    setTopics(prev => [newTopic, ...prev]);

    // Award reputation points
    setUserReputation(prev => ({
      ...prev,
      [currentUser.id]: (prev[currentUser.id] || 0) + 10
    }));

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowCreateTopicModal(false);
      setFormData({ title: '', category: 'general', content: '', tags: [], editContent: '' });
    }, 2000);
  };

  // Add reply with reputation gain
  const handleAddReply = (e) => {
    e.preventDefault();
    if (!replyData.content.trim()) return;

    const newReply = {
      id: Date.now(),
      content: replyData.content,
      author: { id: currentUser.id, name: currentUser.name, avatar: null, reputation: currentUser.reputation },
      createdAt: new Date().toISOString(),
      likes: 0,
    };

    setTopics(prev => prev.map(topic =>
      topic.id === selectedTopic.id
        ? {
          ...topic,
          posts: [...(topic.posts || []), newReply],
          lastActivity: new Date().toISOString(),
        }
        : topic
    ));

    setSelectedTopic(prev => ({
      ...prev,
      posts: [...(prev.posts || []), newReply],
      lastActivity: new Date().toISOString(),
    }));

    // Award reputation points for replying
    setUserReputation(prev => ({
      ...prev,
      [currentUser.id]: (prev[currentUser.id] || 0) + 2
    }));

    setReplyData({ content: '' });
    setShowReplyModal(false);
  };

  // Edit topic/post
  const handleEdit = (e) => {
    e.preventDefault();
    if (!formData.editContent) return;

    if (selectedPost) {
      // Edit reply
      setTopics(prev => prev.map(topic =>
        topic.id === selectedTopic.id
          ? {
            ...topic,
            posts: topic.posts.map(post =>
              post.id === selectedPost.id
                ? { ...post, content: formData.editContent, editedAt: new Date().toISOString() }
                : post
            )
          }
          : topic
      ));
    } else {
      // Edit topic
      setTopics(prev => prev.map(topic =>
        topic.id === selectedTopic.id
          ? { ...topic, content: formData.editContent, updatedAt: new Date().toISOString() }
          : topic
      ));
      setSelectedTopic(prev => ({ ...prev, content: formData.editContent }));
    }

    setShowEditModal(false);
    setFormData(prev => ({ ...prev, editContent: '' }));
  };

  // Delete topic/post (moderator only)
  const handleDelete = (topicId, postId = null) => {
    if (!window.confirm('Are you sure you want to delete this?')) return;

    if (postId) {
      // Delete reply
      setTopics(prev => prev.map(topic =>
        topic.id === topicId
          ? { ...topic, posts: topic.posts.filter(post => post.id !== postId) }
          : topic
      ));
      if (selectedTopic?.id === topicId) {
        setSelectedTopic(prev => ({
          ...prev,
          posts: prev.posts.filter(post => post.id !== postId)
        }));
      }
    } else {
      // Delete topic
      setTopics(prev => prev.filter(topic => topic.id !== topicId));
      if (selectedTopic?.id === topicId) setSelectedTopic(null);
    }
  };

  // Pin/unpin topic (moderator only)
  const togglePin = (topicId) => {
    setTopics(prev => prev.map(topic =>
      topic.id === topicId
        ? { ...topic, isPinned: !topic.isPinned }
        : topic
    ));
  };

  // Lock/unlock topic (moderator only)
  const toggleLock = (topicId) => {
    setTopics(prev => prev.map(topic =>
      topic.id === topicId
        ? { ...topic, isLocked: !topic.isLocked }
        : topic
    ));
  };

  // Report content
  const handleReport = (e) => {
    e.preventDefault();
    const newReport = {
      id: Date.now(),
      topicId: selectedTopic?.id,
      postId: selectedPost?.id,
      reason: reportData.reason,
      details: reportData.details,
      reportedBy: currentUser.id,
      reportedAt: new Date().toISOString(),
      status: 'pending',
    };
    setReports(prev => [...prev, newReport]);
    setShowReportModal(false);
    setReportData({ reason: '', details: '' });
    alert('Report submitted. Our moderators will review it.');
  };

  // Send private message
  const sendPrivateMessage = (e) => {
    e.preventDefault();
    if (!messageData.recipient || !messageData.subject || !messageData.content) return;

    const recipient = users.find(u => u.name === messageData.recipient);
    if (!recipient) {
      alert('Recipient not found');
      return;
    }

    const newMessage = {
      id: Date.now(),
      from: currentUser.id,
      to: recipient.id,
      subject: messageData.subject,
      content: messageData.content,
      createdAt: new Date().toISOString(),
      read: false,
    };

    setPrivateMessages(prev => [...prev, newMessage]);
    setShowMessageModal(false);
    setMessageData({ recipient: '', subject: '', content: '' });
    alert('Message sent!');
  };

  // Like topic/post
  const likeTopic = (topicId) => {
    setTopics(prev => prev.map(topic =>
      topic.id === topicId
        ? { ...topic, likes: (topic.likes || 0) + 1 }
        : topic
    ));
    if (selectedTopic?.id === topicId) {
      setSelectedTopic(prev => ({ ...prev, likes: (prev.likes || 0) + 1 }));
    }
  };

  const likePost = (topicId, postId) => {
    setTopics(prev => prev.map(topic =>
      topic.id === topicId
        ? {
          ...topic, posts: topic.posts.map(post =>
            post.id === postId
              ? { ...post, likes: (post.likes || 0) + 1 }
              : post
          )
        }
        : topic
    ));
    if (selectedTopic?.id === topicId) {
      setSelectedTopic(prev => ({
        ...prev,
        posts: prev.posts.map(post =>
          post.id === postId
            ? { ...post, likes: (post.likes || 0) + 1 }
            : post
        )
      }));
    }
  };

  const incrementViews = (topicId) => {
    setTopics(prev => prev.map(topic =>
      topic.id === topicId
        ? { ...topic, views: (topic.views || 0) + 1 }
        : topic
    ));
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    const icons = {
      chat: <HiOutlineChat className="w-4 h-4" />,
      megaphone: <HiOutlineBell className="w-4 h-4" />,
      support: <HiOutlineSupport className="w-4 h-4" />,
      star: <HiOutlineStar className="w-4 h-4" />,
      lightbulb: <HiOutlineLightBulb className="w-4 h-4" />,
    };
    return icons[category?.icon] || <HiOutlineChat className="w-4 h-4" />;
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category?.color || 'bg-gray-100 text-gray-700';
  };

  const getBadgeIcon = (badge) => {
    switch (badge) {
      case 'Expert': return <HiOutlineAward className="w-3 h-3" />;
      case 'Helper': return <HiOutlineSupport className="w-3 h-3" />;
      case 'Moderator': return <HiOutlineShieldCheck className="w-3 h-3" />;
      case 'Contributor': return <HiOutlineStar className="w-3 h-3" />;
      default: return <HiOutlineBadgeCheck className="w-3 h-3" />;
    }
  };

  return (
    <section className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden" role="region" aria-label="Community Forum Hub">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineUsers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{config?.badge || "Community Forum"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Connect with"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Fellow Users"}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">{config?.description || "Engage with the community, earn reputation, send private messages, and help shape the future of our platform."}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border text-center"><div className="text-2xl font-bold text-blue-600">{stats.totalTopics}</div><div className="text-xs text-gray-500">Topics</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border text-center"><div className="text-2xl font-bold text-green-600">{stats.totalPosts}</div><div className="text-xs text-gray-500">Posts</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border text-center"><div className="text-2xl font-bold text-purple-600">{stats.totalUsers}</div><div className="text-xs text-gray-500">Members</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border text-center"><div className="text-2xl font-bold text-green-500">{stats.onlineUsers}</div><div className="text-xs text-gray-500">Online</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border text-center"><div className="text-2xl font-bold text-orange-600">{stats.newToday}</div><div className="text-xs text-gray-500">New Today</div></div>
          </div>
        </div>

        {/* User Profile Widget */}
        <div className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">{currentUser.name.charAt(0)}</div><div><p className="font-semibold text-gray-900">{currentUser.name}</p><div className="flex items-center gap-2"><span className="text-sm text-gray-500">Reputation: {currentUser.reputation}</span><span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{currentUser.role}</span></div></div></div>
            <div className="flex gap-2"><button onClick={() => setShowMessageModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2"><HiOutlineMail className="w-4 h-4" />Messages</button><button onClick={() => setShowUserProfile(true)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">My Profile</button></div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md"><div className="absolute inset-y-0 left-0 pl-3 flex items-center"><HiOutlineSearch className="w-4 h-4 text-gray-400" /></div><input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search topics..." className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" /></div>
          <div className="flex gap-2"><select value={activeSort} onChange={(e) => setActiveSort(e.target.value)} className="px-4 py-2 bg-white dark:bg-gray-800 border rounded-lg text-sm"><option value="recent">Most Recent</option><option value="popular">Most Popular</option><option value="active">Most Active</option><option value="unanswered">Unanswered</option></select><button onClick={() => setShowCreateTopicModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2"><HiOutlinePlus className="w-4 h-4" />New Topic</button></div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button onClick={() => setActiveCategory('all')} className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700'}`}>All Topics</button>
          {categories.map(category => (<button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700'}`}>{getCategoryIcon(category.id)}{category.name}<span className="ml-1 text-xs opacity-75">({category.postCount})</span></button>))}
        </div>

        {/* Top Contributors */}
        <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-xl border">
          <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2"><HiOutlineTrophy className="w-4 h-4 text-yellow-500" />Top Contributors</p>
          <div className="flex flex-wrap gap-4">
            {stats.topContributors.map((user, idx) => (
              <button key={user.id} onClick={() => { setSelectedUser(user); setShowUserProfile(true); }} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">{user.name.charAt(0)}</div>
                <div><p className="text-sm font-medium">{user.name}</p><p className="text-xs text-gray-500">{user.reputation} pts</p></div>
                {idx === 0 && <HiOutlineCrown className="w-4 h-4 text-yellow-500" />}
              </button>
            ))}
          </div>
        </div>

        {/* Topics List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700 border-b">
                <tr><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Topic</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Replies</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Views</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Activity</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTopics.length === 0 ? (<tr><td colSpan="5" className="px-6 py-12 text-center text-gray-500">No topics found</td></tr>) : (
                  filteredTopics.map((topic) => (
                    <tr key={topic.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => { setSelectedTopic(topic); incrementViews(topic.id); }}>
                      <td className="px-6 py-4"><div className="flex items-start gap-3"><div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"><HiOutlineUserCircle className="w-6 h-6 text-blue-600" /></div><div><div className="flex items-center gap-2">{topic.isPinned && <HiOutlinePin className="w-4 h-4 text-yellow-500" />}{topic.isLocked && <HiOutlineLockClosed className="w-4 h-4 text-red-500" />}<h3 className="text-sm font-medium">{topic.title}</h3></div><p className="text-xs text-gray-500 mt-1">by {topic.author?.name} • {formatDate(topic.createdAt)}</p>{topic.tags?.length > 0 && (<div className="flex flex-wrap gap-1 mt-1">{topic.tags.slice(0, 3).map(tag => (<span key={tag} className="text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">#{tag}</span>))}</div>)}</div></div></td>
                      <td className="px-6 py-4"><span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(topic.category)}`}>{categories.find(c => c.id === topic.category)?.name}</span></td>
                      <td className="px-6 py-4 text-sm text-gray-500">{topic.posts?.length || 0}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{topic.views || 0}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{formatDate(topic.lastActivity)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl"><p className="text-sm font-medium mb-3">Popular Tags</p><div className="flex flex-wrap gap-2">{popularTags.map(tag => (<button key={tag} onClick={() => setSearchQuery(tag)} className="px-3 py-1 text-sm bg-white border rounded-full hover:bg-gray-100">#{tag}</button>))}</div></div>

        {/* Create Topic Modal */}
        {showCreateTopicModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowCreateTopicModal(false)}><div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-linear-to-r from-blue-600 to-purple-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Create New Topic (+10 reputation)</h3><button onClick={() => setShowCreateTopicModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6 max-h-[80vh] overflow-y-auto">{formSubmitted ? (<div className="text-center py-8"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineCheckCircle className="w-8 h-8 text-green-600" /></div><h4 className="text-xl font-bold mb-2">Topic Created!</h4><p className="text-gray-600">+10 reputation points earned!</p></div>) : (<form onSubmit={handleCreateTopic} className="space-y-4"><div><input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Topic title *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl ${errors.title ? 'border-red-500' : 'border-gray-200'}`} /></div><div><select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl"><option value="general">General Discussion</option><option value="announcements">Announcements</option><option value="help">Help & Support</option><option value="feature-requests">Feature Requests</option><option value="tips-tricks">Tips & Tricks</option></select></div><div><textarea name="content" value={formData.content} onChange={handleInputChange} placeholder="Topic content *" rows="6" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none ${errors.content ? 'border-red-500' : 'border-gray-200'}`} /></div><div><label className="block text-sm font-medium mb-2">Tags</label><div className="flex flex-wrap gap-2">{popularTags.map(tag => (<label key={tag} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg cursor-pointer"><input type="checkbox" name="tags" value={tag} onChange={handleInputChange} className="w-4 h-4" /><span className="text-sm">#{tag}</span></label>))}</div></div><button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">Post Topic (+10 rep)</button></form>)}</div></div></div>)}

        {/* Topic Detail Modal */}
        {selectedTopic && !showReplyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setSelectedTopic(null)}>
            <div className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(selectedTopic.category)}`}>{categories.find(c => c.id === selectedTopic.category)?.name}</span>{selectedTopic.isPinned && <HiOutlinePin className="w-4 h-4 text-yellow-300" />}</div>
                  <div className="flex gap-2">
                    {currentUser.role === 'Moderator' && (<><button onClick={() => togglePin(selectedTopic.id)} className="p-1 text-white hover:text-yellow-300" title="Pin"><HiOutlinePin className="w-4 h-4" /></button><button onClick={() => toggleLock(selectedTopic.id)} className="p-1 text-white hover:text-red-300" title="Lock"><HiOutlineLockClosed className="w-4 h-4" /></button></>)}
                    <button onClick={() => { setFormData(prev => ({ ...prev, editContent: selectedTopic.content })); setShowEditModal(true); }} className="p-1 text-white hover:text-green-300" title="Edit"><HiOutlinePencil className="w-4 h-4" /></button>
                    <button onClick={() => setShowReportModal(true)} className="p-1 text-white hover:text-red-300" title="Report"><HiOutlineFlag className="w-4 h-4" /></button>
                    <button onClick={() => setSelectedTopic(null)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
                  </div>
                </div>
                <h2 className="text-white font-bold text-xl mt-2">{selectedTopic.title}</h2>
              </div>
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                {/* Original Post */}
                <div className="flex gap-4 pb-4 mb-4 border-b border-gray-200">
                  <button onClick={() => { setSelectedUser(selectedTopic.author); setShowUserProfile(true); }} className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0"><HiOutlineUserCircle className="w-7 h-7 text-blue-600" /></button>
                  <div className="flex-1"><div className="flex items-center justify-between flex-wrap gap-2"><div><p className="font-medium text-gray-900">{selectedTopic.author?.name}</p><p className="text-xs text-gray-500">{formatDate(selectedTopic.createdAt)} • Reputation: {selectedTopic.author?.reputation}</p></div><div className="flex gap-2"><button onClick={() => likeTopic(selectedTopic.id)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500"><HiOutlineHeart className="w-4 h-4" />{selectedTopic.likes || 0}</button><button onClick={() => { setSelectedPost(null); setFormData(prev => ({ ...prev, editContent: selectedTopic.content })); setShowEditModal(true); }} className="text-sm text-gray-500 hover:text-blue-500"><HiOutlinePencil className="w-4 h-4" /></button><button onClick={() => { handleDelete(selectedTopic.id); setSelectedTopic(null); }} className="text-sm text-gray-500 hover:text-red-500"><HiOutlineTrash className="w-4 h-4" /></button></div></div><p className="text-gray-700 mt-2 whitespace-pre-wrap">{selectedTopic.content}</p>{selectedTopic.tags && (<div className="flex flex-wrap gap-1 mt-3">{selectedTopic.tags.map(tag => (<span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full">#{tag}</span>))}</div>)}</div>
                </div>
                {/* Replies */}
                <div className="space-y-4"><h3 className="font-semibold text-gray-900 mb-3">Replies ({selectedTopic.posts?.length || 0})</h3>{selectedTopic.posts?.length === 0 ? (<p className="text-sm text-gray-500">No replies yet. Be the first to respond!</p>) : (selectedTopic.posts.map((post) => (<div key={post.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl"><button onClick={() => { setSelectedUser(post.author); setShowUserProfile(true); }} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"><HiOutlineUserCircle className="w-6 h-6 text-gray-500" /></button><div className="flex-1"><div className="flex items-center justify-between flex-wrap gap-2"><div><p className="font-medium text-gray-900">{post.author?.name}</p><p className="text-xs text-gray-500">{formatDate(post.createdAt)} • Reputation: {post.author?.reputation}</p></div><div className="flex gap-2"><button onClick={() => likePost(selectedTopic.id, post.id)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500"><HiOutlineHeart className="w-4 h-4" />{post.likes || 0}</button><button onClick={() => { setSelectedPost(post); setFormData(prev => ({ ...prev, editContent: post.content })); setShowEditModal(true); }} className="text-sm text-gray-500 hover:text-blue-500"><HiOutlinePencil className="w-4 h-4" /></button><button onClick={() => { handleDelete(selectedTopic.id, post.id); }} className="text-sm text-gray-500 hover:text-red-500"><HiOutlineTrash className="w-4 h-4" /></button></div></div><p className="text-gray-700 mt-2 whitespace-pre-wrap">{post.content}</p>{post.editedAt && <p className="text-xs text-gray-400 mt-1">Edited {formatDate(post.editedAt)}</p>}</div></div>)))}</div>
              </div>
              <div className="p-4 border-t border-gray-200 bg-gray-50">{selectedTopic.isLocked ? (<p className="text-center text-sm text-red-500">This topic is locked. New replies cannot be added.</p>) : (<button onClick={() => setShowReplyModal(true)} className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold">Reply to Topic (+2 rep)</button>)}</div>
            </div>
          </div>
        )}

        {/* Reply Modal */}
        {showReplyModal && selectedTopic && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowReplyModal(false)}><div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-green-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Reply to Topic (+2 reputation)</h3><button onClick={() => setShowReplyModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><p className="text-sm text-gray-600 mb-3">Replying to: {selectedTopic.title}</p><form onSubmit={handleAddReply}><textarea name="content" value={replyData.content} onChange={handleReplyChange} placeholder="Write your reply..." rows="6" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" /><button type="submit" className="w-full mt-4 py-3 bg-green-600 text-white rounded-xl font-semibold">Post Reply (+2 rep)</button></form></div></div></div>)}

        {/* Edit Modal */}
        {showEditModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowEditModal(false)}><div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-yellow-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Edit Content</h3><button onClick={() => setShowEditModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><form onSubmit={handleEdit}><textarea name="editContent" value={formData.editContent} onChange={handleInputChange} rows="8" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" /><button type="submit" className="w-full mt-4 py-3 bg-yellow-600 text-white rounded-xl font-semibold">Save Changes</button></form></div></div></div>)}

        {/* Report Modal */}
        {showReportModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowReportModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-red-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Report Content</h3><button onClick={() => setShowReportModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><form onSubmit={handleReport}><div><label className="block text-sm font-medium mb-1">Reason</label><select name="reason" value={reportData.reason} onChange={handleReportChange} className="w-full px-4 py-2 bg-gray-50 border rounded-lg mb-3"><option value="">Select reason</option><option value="spam">Spam</option><option value="harassment">Harassment</option><option value="inappropriate">Inappropriate content</option><option value="other">Other</option></select></div><div><label className="block text-sm font-medium mb-1">Details</label><textarea name="details" value={reportData.details} onChange={handleReportChange} rows="4" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" placeholder="Please provide additional details..." /></div><button type="submit" className="w-full mt-4 py-3 bg-red-600 text-white rounded-xl font-semibold">Submit Report</button></form></div></div></div>)}

        {/* Private Message Modal */}
        {showMessageModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowMessageModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-blue-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Send Private Message</h3><button onClick={() => setShowMessageModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><form onSubmit={sendPrivateMessage}><input type="text" name="recipient" value={messageData.recipient} onChange={handleMessageChange} placeholder="Recipient username" className="w-full px-4 py-2 bg-gray-50 border rounded-lg mb-3" /><input type="text" name="subject" value={messageData.subject} onChange={handleMessageChange} placeholder="Subject" className="w-full px-4 py-2 bg-gray-50 border rounded-lg mb-3" /><textarea name="content" value={messageData.content} onChange={handleMessageChange} rows="5" placeholder="Message content" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" /><button type="submit" className="w-full mt-4 py-3 bg-blue-600 text-white rounded-xl font-semibold">Send Message</button></form></div></div></div>)}

        {/* User Profile Modal */}
        {showUserProfile && selectedUser && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowUserProfile(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-linear-to-r from-blue-600 to-purple-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">User Profile</h3><button onClick={() => setShowUserProfile(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6 text-center"><div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4"><HiOutlineUserCircle className="w-16 h-16 text-blue-600" /></div><h4 className="text-xl font-bold mb-1">{selectedUser.name}</h4><p className="text-sm text-gray-500 mb-2">{selectedUser.role}</p><div className="flex justify-center gap-4 mb-4"><div className="text-center"><div className="text-2xl font-bold text-blue-600">{selectedUser.reputation}</div><div className="text-xs text-gray-500">Reputation</div></div><div className="text-center"><div className="text-2xl font-bold text-green-600">{selectedUser.posts}</div><div className="text-xs text-gray-500">Posts</div></div><div className="text-center"><div className="text-2xl font-bold text-yellow-600">{selectedUser.badges?.length || 0}</div><div className="text-xs text-gray-500">Badges</div></div></div><div className="flex flex-wrap gap-1 justify-center mb-4">{selectedUser.badges?.map(badge => (<span key={badge} className="inline-flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">{getBadgeIcon(badge)}{badge}</span>))}</div><p className="text-sm text-gray-600">Joined {formatDate(selectedUser.joinedAt)}</p><div className="flex gap-2 mt-4"><button onClick={() => { setMessageData(prev => ({ ...prev, recipient: selectedUser.name })); setShowMessageModal(true); setShowUserProfile(false); }} className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm">Send Message</button></div></div></div></div>)}

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"><HiOutlineUsers className="w-12 h-12 mx-auto mb-4" /><h3 className="text-2xl md:text-3xl font-bold mb-4">Join the Community</h3><p className="text-blue-100 mb-6">Share your knowledge, earn reputation, and connect with experts.</p><button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"><HiOutlineUserAdd className="w-5 h-5" />Sign Up Today</button></div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        .bg-grid-slate-100 { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .dark .bg-grid-slate-800 { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
      `}</style>
    </section>
  );
};

export default CommunityForumSection2;