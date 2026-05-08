// page/frontend/Community/CommunityForumSection/CommunityForumSection3.jsx

/**
 * Community Forum Section III - AI-Powered Gamified Community Hub
 *
 * Unique Design Elements:
 * - AI-Powered Content Moderation (Spam, Inappropriate Content Detection)
 * - AI-Powered Semantic Search with Relevance Scoring
 * - Gamification System (XP Points, Leveling System)
 * - Daily Streak Rewards with Login Tracking
 * - Achievement Badges System
 * - User Level Progress Bar
 * - Analytics Dashboard (Topics by Day, Popular Categories)
 * - AI Moderation Dashboard with Flag Tracking
 * - Private Messaging System with XP Rewards
 * - User Reputation Points
 * - Topic and Post Reporting System
 * - Edit and Delete Content (User/Moderator)
 * - Pin/Lock Topics (Moderator Only)
 * - Top Contributors Leaderboard
 * - Responsive Table Layout with Dark Mode
 *
 * All icons from react-icons (hi, hi2, ai, fa, md)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, Font Awesome, Material Design, AI Icons
import {
  AiOutlineCrown as HiOutlineCrown,
  AiOutlineRobot as HiOutlineRobot,
} from "react-icons/ai";
import { FaAward as HiOutlineAward } from "react-icons/fa";
import {
  HiOutlineChat,
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
  HiOutlineLightBulb,
  HiOutlineSupport,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineChartBar as ChartBarIcon,
} from 'react-icons/hi2';
import { MdOutlinePin as HiOutlinePin } from "react-icons/md";

const CommunityForumSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [users, setUsers] = useState([]);
  const [userXp, setUserXp] = useState(0);
  const [errors, setErrors] = useState({});
  const [topics, setTopics] = useState([]);
  const [reports, setReports] = useState([]);
  const [userLevel, setUserLevel] = useState(1);
  const [categories, setCategories] = useState([]);
  const [dailyStreak, setDailyStreak] = useState(0);
  const [popularTags, setPopularTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMode, setSearchMode] = useState('ai');
  const [nextLevelXp, setNextLevelXp] = useState(100);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeSort, setActiveSort] = useState('recent');
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [userReputation, setUserReputation] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [aiSearchResults, setAiSearchResults] = useState([]);
  const [privateMessages, setPrivateMessages] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyData, setReplyData] = useState({ content: '' });
  const [userAchievements, setUserAchievements] = useState([]);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [aiModerationFlags, setAiModerationFlags] = useState({});
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showAIModeration, setShowAIModeration] = useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [showAiSearchResults, setShowAiSearchResults] = useState(false);
  const [showCreateTopicModal, setShowCreateTopicModal] = useState(false);
  const [reportData, setReportData] = useState({ reason: '', details: '' });
  const [showAchievementsModal, setShowAchievementsModal] = useState(false);
  const [messageData, setMessageData] = useState({ recipient: '', subject: '', content: '' });
  const [formData, setFormData] = useState({ title: '', category: 'general', content: '', tags: [], editContent: '', });
  const [analyticsData, setAnalyticsData] = useState({ topicsByDay: [], popularCategories: [], userActivity: [], peakHours: [], });
  const [stats, setStats] = useState({ totalTopics: 0, totalPosts: 0, totalUsers: 0, onlineUsers: 0, newToday: 0, topContributors: [], weeklyGrowth: 12, engagementRate: 78, });

  // ==================== MEMOIZED DATA ====================
  const configTopics = useMemo(() => config?.topics || [], [config]);
  const configCategories = useMemo(() => config?.categories || [], [config]);
  const configUsers = useMemo(() => config?.users || [], [config]);

  // ==================== HELPER FUNCTIONS ====================
  const moderateContent = useCallback((content) => {
    const flags = [];
    const spamKeywords = ['viagra', 'casino', 'lottery', 'click here', 'earn money'];
    const inappropriateWords = ['hate', 'stupid', 'idiot', 'moron', 'loser'];

    spamKeywords.forEach(word => {
      if (content.toLowerCase().includes(word)) flags.push({ type: 'spam', confidence: 85 });
    });
    inappropriateWords.forEach(word => {
      if (content.toLowerCase().includes(word)) flags.push({ type: 'inappropriate', confidence: 75 });
    });

    if (content.length > 5000) flags.push({ type: 'length', confidence: 60 });
    if ((content.match(/[A-Z]/g) || []).length > content.length * 0.5) flags.push({ type: 'excessive-caps', confidence: 70 });

    // Update moderation flags for analytics
    flags.forEach(flag => {
      setAiModerationFlags(prev => ({
        ...prev,
        [flag.type]: (prev[flag.type] || 0) + 1
      }));
    });

    return { isAppropriate: flags.length === 0, flags, requiresModeration: flags.length > 0 };
  }, []);

  const performAISearch = useCallback((query) => {
    const results = topics.map(topic => {
      let relevance = 0;
      if (topic.title?.toLowerCase().includes(query.toLowerCase())) relevance += 40;
      if (topic.content?.toLowerCase().includes(query.toLowerCase())) relevance += 20;
      if (topic.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))) relevance += 15;
      return { ...topic, relevance: Math.min(relevance + Math.random() * 10, 100) };
    }).filter(t => t.relevance > 30).sort((a, b) => b.relevance - a.relevance);
    setAiSearchResults(results);
    setShowAiSearchResults(true);
  }, [topics]);

  useEffect(() => {
    if (searchQuery.length > 2 && searchMode === 'ai') {
      performAISearch(searchQuery);
    } else {
      setAiSearchResults([]);
      setShowAiSearchResults(false);
    }
  }, [searchQuery, searchMode, performAISearch]);

  const updateStats = useCallback(() => {
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
      weeklyGrowth: 12,
      engagementRate: 78,
    });
  }, [topics, users]);

  const updateAnalytics = useCallback(() => {
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toISOString().split('T')[0];
    }).reverse();

    const topicsByDay = last7Days.map(day => ({
      date: day,
      count: topics.filter(t => t.createdAt?.startsWith(day)).length,
    }));

    const categoryCount = {};
    topics.forEach(t => {
      categoryCount[t.category] = (categoryCount[t.category] || 0) + 1;
    });
    const popularCategories = Object.entries(categoryCount).map(([name, count]) => ({ name, count }));

    setAnalyticsData({ topicsByDay, popularCategories, userActivity: [], peakHours: ['10 AM', '2 PM', '3 PM'] });
  }, [topics]);

  const addXp = useCallback((amount) => {
    let newXp = userXp + amount;
    let newLevel = userLevel;
    let xpNeeded = nextLevelXp;

    while (newXp >= xpNeeded) {
      newLevel++;
      newXp -= xpNeeded;
      xpNeeded = Math.floor(xpNeeded * 1.5);

      setUserAchievements(prev => [...prev, {
        id: Date.now(),
        name: `Level ${newLevel} Achieved!`,
        description: `Reached level ${newLevel}`,
        icon: '🏆',
        earnedAt: new Date().toISOString(),
      }]);
    }

    setUserXp(newXp);
    setUserLevel(newLevel);
    setNextLevelXp(xpNeeded);
  }, [userXp, userLevel, nextLevelXp]);

  const checkDailyStreak = useCallback(() => {
    const lastLogin = localStorage.getItem('lastLogin');
    const today = new Date().toDateString();

    if (lastLogin !== today) {
      const newStreak = dailyStreak + 1;
      if (newStreak === 7) {
        setUserAchievements(prev => [...prev, {
          id: Date.now(),
          name: 'Weekly Warrior!',
          description: '7-day login streak',
          icon: '🔥',
          earnedAt: new Date().toISOString(),
        }]);
        addXp(100);
      }
      if (newStreak === 30) {
        setUserAchievements(prev => [...prev, {
          id: Date.now(),
          name: 'Monthly Master!',
          description: '30-day login streak',
          icon: '👑',
          earnedAt: new Date().toISOString(),
        }]);
        addXp(500);
      }
      setDailyStreak(newStreak);
      localStorage.setItem('lastLogin', today);
      addXp(10);
    }
  }, [addXp, dailyStreak]);

  // ==================== LOCAL STORAGE & EFFECTS ====================
  useEffect(() => {
    const savedTopics = localStorage.getItem('forumTopics');
    if (savedTopics && JSON.parse(savedTopics).length > 0) {
      setTopics(JSON.parse(savedTopics));
    } else {
      setTopics([...configTopics]);
    }

    const savedUsers = localStorage.getItem('forumUsers');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      setUsers([...configUsers]);
    }

    const savedMessages = localStorage.getItem('privateMessages');
    if (savedMessages) setPrivateMessages(JSON.parse(savedMessages));

    const savedReports = localStorage.getItem('forumReports');
    if (savedReports) setReports(JSON.parse(savedReports));

    const savedReputation = localStorage.getItem('userReputation');
    if (savedReputation) setUserReputation(JSON.parse(savedReputation));

    const savedAchievements = localStorage.getItem('userAchievements');
    if (savedAchievements) setUserAchievements(JSON.parse(savedAchievements));

    const savedXp = localStorage.getItem('userXp');
    if (savedXp) {
      const xpData = JSON.parse(savedXp);
      setUserXp(xpData.xp);
      setUserLevel(xpData.level);
    }

    const savedStreak = localStorage.getItem('dailyStreak');
    if (savedStreak) setDailyStreak(parseInt(savedStreak));

    if (configCategories.length > 0) {
      setCategories([...configCategories]);
    } else {
      setCategories([
        { id: 'general', name: 'General Discussion', icon: 'chat', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', postCount: 156 },
        { id: 'announcements', name: 'Announcements', icon: 'megaphone', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', postCount: 23 },
        { id: 'help', name: 'Help & Support', icon: 'support', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300', postCount: 342 },
        { id: 'feature-requests', name: 'Feature Requests', icon: 'star', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300', postCount: 89 },
        { id: 'tips-tricks', name: 'Tips & Tricks', icon: 'lightbulb', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300', postCount: 67 },
      ]);
    }

    setPopularTags(['api', 'integration', 'dashboard', 'analytics', 'mobile', 'security', 'ai', 'automation']);
    setCurrentUser({ id: 'currentUser', name: 'You', role: 'Member', reputation: 150, posts: 12, badges: [], isOnline: true, level: 2, xp: 150 });
  }, [configCategories, configTopics, configUsers]);

  useEffect(() => {
    localStorage.setItem('forumTopics', JSON.stringify(topics));
    localStorage.setItem('forumUsers', JSON.stringify(users));
    localStorage.setItem('privateMessages', JSON.stringify(privateMessages));
    localStorage.setItem('forumReports', JSON.stringify(reports));
    localStorage.setItem('userReputation', JSON.stringify(userReputation));
    localStorage.setItem('userAchievements', JSON.stringify(userAchievements));
    localStorage.setItem('userXp', JSON.stringify({ xp: userXp, level: userLevel }));
    localStorage.setItem('dailyStreak', JSON.stringify(dailyStreak));
  }, [topics, users, privateMessages, reports, userReputation, userAchievements, userXp, userLevel, dailyStreak]);

  useEffect(() => {
    updateStats();
    updateAnalytics();
  }, [updateStats, updateAnalytics]);

  // Filter topics
  useEffect(() => {
    let filtered = [...topics];
    if (activeCategory !== 'all') filtered = filtered.filter(t => t.category === activeCategory);
    if (searchQuery && searchMode !== 'ai') {
      filtered = filtered.filter(topic =>
        topic.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    if (activeSort === 'recent') filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    else if (activeSort === 'popular') filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
    else if (activeSort === 'active') filtered.sort((a, b) => new Date(b.lastActivity) - new Date(a.lastActivity));
    else if (activeSort === 'unanswered') filtered = filtered.filter(t => (t.posts?.length || 0) === 0);
    setFilteredTopics(filtered);
  }, [topics, activeCategory, activeSort, searchQuery, searchMode]);

  // ==================== FORM HANDLERS ====================
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const tagValue = value;
      setFormData(prev => ({
        ...prev,
        tags: checked ? [...prev.tags, tagValue] : prev.tags.filter(t => t !== tagValue)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleReplyChange = (e) => {
    const { name, value } = e.target;
    setReplyData(prev => ({ ...prev, [name]: value }));
  };

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessageData(prev => ({ ...prev, [name]: value }));
  };

  const handleReportChange = (e) => {
    const { name, value } = e.target;
    setReportData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateTopic = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      setErrors({ title: !formData.title ? 'Title required' : '', content: !formData.content ? 'Content required' : '' });
      return;
    }

    const moderation = moderateContent(formData.content);
    const requiresApproval = moderation.requiresModeration && currentUser?.role !== 'Moderator';

    const newTopic = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      content: formData.content,
      tags: formData.tags,
      author: { id: currentUser?.id, name: currentUser?.name, reputation: currentUser?.reputation, level: currentUser?.level },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      views: 0,
      likes: 0,
      posts: [],
      isPinned: false,
      isLocked: false,
      isReported: false,
      status: requiresApproval ? 'pending' : 'approved',
      aiFlags: moderation.flags,
    };

    if (requiresApproval) {
      alert('Your topic has been submitted for moderation review.');
    } else {
      setTopics(prev => [newTopic, ...prev]);
      addXp(25);
      setUserReputation(prev => ({ ...prev, [currentUser?.id]: (prev[currentUser?.id] || 0) + 10 }));

      if (topics.length === 0) {
        setUserAchievements(prev => [...prev, {
          id: Date.now(),
          name: 'First Post!',
          description: 'Created your first topic',
          icon: '📝',
          earnedAt: new Date().toISOString(),
        }]);
      }
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowCreateTopicModal(false);
      setFormData({ title: '', category: 'general', content: '', tags: [], editContent: '' });
    }, 2000);
  };

  const handleAddReply = (e) => {
    e.preventDefault();
    if (!replyData.content.trim()) return;

    const moderation = moderateContent(replyData.content);

    const newReply = {
      id: Date.now(),
      content: replyData.content,
      author: { id: currentUser?.id, name: currentUser?.name, reputation: currentUser?.reputation, level: currentUser?.level },
      createdAt: new Date().toISOString(),
      likes: 0,
      aiFlags: moderation.flags,
    };

    setTopics(prev => prev.map(topic =>
      topic.id === selectedTopic.id
        ? { ...topic, posts: [...(topic.posts || []), newReply], lastActivity: new Date().toISOString() }
        : topic
    ));

    setSelectedTopic(prev => ({
      ...prev,
      posts: [...(prev?.posts || []), newReply],
      lastActivity: new Date().toISOString(),
    }));

    addXp(5);
    setUserReputation(prev => ({ ...prev, [currentUser?.id]: (prev[currentUser?.id] || 0) + 2 }));

    setReplyData({ content: '' });
    setShowReplyModal(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (!formData.editContent) return;

    const moderation = moderateContent(formData.editContent);

    if (selectedPost) {
      setTopics(prev => prev.map(topic =>
        topic.id === selectedTopic.id
          ? {
            ...topic, posts: topic.posts.map(post =>
              post.id === selectedPost.id
                ? { ...post, content: formData.editContent, editedAt: new Date().toISOString(), aiFlags: moderation.flags }
                : post
            )
          }
          : topic
      ));
    } else {
      setTopics(prev => prev.map(topic =>
        topic.id === selectedTopic.id
          ? { ...topic, content: formData.editContent, updatedAt: new Date().toISOString(), aiFlags: moderation.flags }
          : topic
      ));
      setSelectedTopic(prev => ({ ...prev, content: formData.editContent }));
    }

    setShowEditModal(false);
    setFormData(prev => ({ ...prev, editContent: '' }));
  };

  const handleDelete = (topicId, postId = null) => {
    if (!window.confirm('Are you sure you want to delete this?')) return;

    if (postId) {
      setTopics(prev => prev.map(topic =>
        topic.id === topicId ? { ...topic, posts: topic.posts.filter(post => post.id !== postId) } : topic
      ));
      if (selectedTopic?.id === topicId) {
        setSelectedTopic(prev => ({ ...prev, posts: prev.posts.filter(post => post.id !== postId) }));
      }
    } else {
      setTopics(prev => prev.filter(topic => topic.id !== topicId));
      if (selectedTopic?.id === topicId) setSelectedTopic(null);
    }
  };

  const togglePin = (topicId) => {
    setTopics(prev => prev.map(topic =>
      topic.id === topicId ? { ...topic, isPinned: !topic.isPinned } : topic
    ));
  };

  const toggleLock = (topicId) => {
    setTopics(prev => prev.map(topic =>
      topic.id === topicId ? { ...topic, isLocked: !topic.isLocked } : topic
    ));
  };

  const handleReport = (e) => {
    e.preventDefault();
    const newReport = {
      id: Date.now(),
      topicId: selectedTopic?.id,
      postId: selectedPost?.id,
      reason: reportData.reason,
      details: reportData.details,
      reportedBy: currentUser?.id,
      reportedAt: new Date().toISOString(),
      status: 'pending',
    };
    setReports(prev => [...prev, newReport]);
    setShowReportModal(false);
    setReportData({ reason: '', details: '' });
    alert('Report submitted. Our moderators will review it.');
  };

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
      from: currentUser?.id,
      to: recipient.id,
      subject: messageData.subject,
      content: messageData.content,
      createdAt: new Date().toISOString(),
      read: false,
    };

    setPrivateMessages(prev => [...prev, newMessage]);
    setShowMessageModal(false);
    setMessageData({ recipient: '', subject: '', content: '' });
    addXp(2);
    alert('Message sent! +2 XP');
  };

  const likeTopic = (topicId) => {
    setTopics(prev => prev.map(topic =>
      topic.id === topicId ? { ...topic, likes: (topic.likes || 0) + 1 } : topic
    ));
    if (selectedTopic?.id === topicId) {
      setSelectedTopic(prev => ({ ...prev, likes: (prev?.likes || 0) + 1 }));
    }
  };

  const likePost = (topicId, postId) => {
    setTopics(prev => prev.map(topic =>
      topic.id === topicId
        ? {
          ...topic, posts: topic.posts.map(post =>
            post.id === postId ? { ...post, likes: (post.likes || 0) + 1 } : post
          )
        }
        : topic
    ));
    if (selectedTopic?.id === topicId) {
      setSelectedTopic(prev => ({
        ...prev,
        posts: prev?.posts.map(post =>
          post.id === postId ? { ...post, likes: (post.likes || 0) + 1 } : post
        )
      }));
    }
  };

  const incrementViews = (topicId) => {
    setTopics(prev => prev.map(topic =>
      topic.id === topicId ? { ...topic, views: (topic.views || 0) + 1 } : topic
    ));
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowAiSearchResults(false);
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
    return category?.color || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
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

  // Check daily streak on mount
  useEffect(() => {
    checkDailyStreak();
  }, [checkDailyStreak]);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Community Forum Premium Hub"
    >
      {/* ==================== BACKGROUND PATTERN ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-cf" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-cf)" />
        </svg>
      </div>

      {/* ==================== AI MODERATION WIDGET ==================== */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowAIModeration(true)}
          className="bg-linear-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
          aria-label="Open AI moderation"
        >
          <HiOutlineRobot className="w-5 h-5" />
        </button>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
              <HiOutlineRobot className="w-4 h-4" />
              <span className="text-sm font-medium">{config?.badge || "AI-Powered Community"}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              {config?.title?.prefix || "Intelligent"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Community Forum"}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">{config?.description || "AI-powered moderation, gamification, advanced search, and analytics. Connect, learn, and grow with our intelligent community platform."}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{stats.totalTopics}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Topics</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-xl font-bold text-green-600 dark:text-green-400">{stats.totalPosts}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Posts</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-xl font-bold text-purple-600 dark:text-purple-400">{stats.totalUsers}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Members</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-xl font-bold text-green-500 dark:text-green-400">{stats.onlineUsers}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Online</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-xl font-bold text-orange-600 dark:text-orange-400">{stats.newToday}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">New Today</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-xl font-bold text-teal-600 dark:text-teal-400">{stats.engagementRate}%</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Engagement</div>
            </div>
          </div>
        </div>

        {/* ==================== USER XP CARD ==================== */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-4 mb-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                {currentUser?.level}
              </div>
              <div>
                <p className="font-semibold">{currentUser?.name}</p>
                <p className="text-sm opacity-90">Level {currentUser?.level} • {userXp}/{nextLevelXp} XP</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowMessageModal(true)}
                className="px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors"
                aria-label="Messages"
              >
                <HiOutlineMail className="w-4 h-4" />Messages
              </button>
              <button
                onClick={() => { setSelectedUser(currentUser); setShowUserProfile(true); }}
                className="px-4 py-2 bg-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/30 transition-colors"
                aria-label="My profile"
              >
                My Profile
              </button>
              <button
                onClick={() => setShowAnalyticsModal(true)}
                className="px-4 py-2 bg-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/30 transition-colors"
                aria-label="Analytics"
              >
                <ChartBarIcon className="w-4 h-4" />Analytics
              </button>
            </div>
          </div>
        </div>

        {/* ==================== ACTION BAR WITH AI SEARCH ==================== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <HiOutlineSearch className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="AI-powered search..."
              className="w-full pl-10 pr-24 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 dark:text-white"
              aria-label="Search topics"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
              <button
                onClick={() => setSearchMode('ai')}
                className={`px-2 py-0.5 text-xs rounded transition-all duration-300 ${searchMode === 'ai' ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
                aria-label="AI search"
              >
                AI
              </button>
              <button
                onClick={() => setSearchMode('keyword')}
                className={`px-2 py-0.5 text-xs rounded transition-all duration-300 ${searchMode === 'keyword' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
                aria-label="Keyword search"
              >
                Keyword
              </button>
            </div>
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-20 pr-3 flex items-center"
                aria-label="Clear search"
              >
                <HiOutlineX className="w-4 h-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <select
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Sort topics"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="active">Most Active</option>
              <option value="unanswered">Unanswered</option>
            </select>
            <button
              onClick={() => setShowCreateTopicModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
              aria-label="Create new topic"
            >
              <HiOutlinePlus className="w-4 h-4" />New Topic (+25 XP)
            </button>
          </div>
        </div>

        {/* ==================== AI SEARCH RESULTS ==================== */}
        {showAiSearchResults && aiSearchResults.length > 0 && searchMode === 'ai' && (
          <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800 animate-fadeIn">
            <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
              <HiOutlineRobot className="w-4 h-4" />AI Search Results ({aiSearchResults.length})
            </p>
            <div className="space-y-2">
              {aiSearchResults.slice(0, 3).map(result => (
                <div
                  key={result.id}
                  onClick={() => { setSelectedTopic(result); incrementViews(result.id); }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:shadow-md transition-all"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedTopic(result)}
                >
                  <p className="font-medium text-gray-900 dark:text-white">{result.title}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">Relevance: {Math.round(result.relevance)}%</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CATEGORIES ==================== */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === 'all'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            aria-label="Show all topics"
          >
            All Topics
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${category.name} topics`}
            >
              {getCategoryIcon(category.id)}
              {category.name}
              <span className="ml-1 text-xs opacity-75">({category.postCount})</span>
            </button>
          ))}
        </div>

        {/* ==================== TOP CONTRIBUTORS ==================== */}
        <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
            <HiOutlineTrophy className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
            Top Contributors
          </p>
          <div className="flex flex-wrap gap-4">
            {stats.topContributors.map((user, idx) => (
              <button
                key={user.id}
                onClick={() => { setSelectedUser(user); setShowUserProfile(true); }}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label={`View profile of ${user.name}`}
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-sm">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Lvl {user.level} • {user.reputation} pts</p>
                </div>
                {idx === 0 && <HiOutlineCrown className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== TOPICS LIST ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Topic</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Replies</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Views</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredTopics.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                      No topics found
                    </td>
                  </tr>
                ) : (
                  filteredTopics.map((topic) => (
                    <tr
                      key={topic.id}
                      onClick={() => { setSelectedTopic(topic); incrementViews(topic.id); }}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedTopic(topic)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <HiOutlineUserCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              {topic.isPinned && <HiOutlinePin className="w-4 h-4 text-yellow-500 dark:text-yellow-400" title="Pinned" />}
                              {topic.isLocked && <HiOutlineLockClosed className="w-4 h-4 text-red-500 dark:text-red-400" title="Locked" />}
                              <h3 className="text-sm font-medium text-gray-900 dark:text-white">{topic.title}</h3>
                              {topic.aiFlags?.length > 0 && <HiOutlineRobot className="w-3 h-3 text-purple-500 dark:text-purple-400" title="AI moderated" />}
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">by {topic.author?.name} • Lvl {topic.author?.level} • {formatDate(topic.createdAt)}</p>
                            {topic.tags && topic.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-1">
                                {topic.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded-full text-gray-600 dark:text-gray-400">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(topic.category)}`}>
                          {categories.find(c => c.id === topic.category)?.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{topic.posts?.length || 0}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{topic.views || 0}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{formatDate(topic.lastActivity)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==================== POPULAR TAGS ==================== */}
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Popular Tags</p>
          <div className="flex flex-wrap gap-2">
            {popularTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-3 py-1 text-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-300"
                aria-label={`Search by tag: ${tag}`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== CREATE TOPIC MODAL ==================== */}
        {showCreateTopicModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setShowCreateTopicModal(false)}
            role="dialog"
            aria-label="Create New Topic"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Create New Topic (+25 XP, +10 rep)</h3>
                  <button onClick={() => setShowCreateTopicModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                {formSubmitted ? (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Topic Created!</h4>
                    <p className="text-gray-600 dark:text-gray-400">+25 XP and +10 reputation earned!</p>
                  </div>
                ) : (
                  <form onSubmit={handleCreateTopic} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Topic title *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.title ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                        aria-label="Topic title"
                      />
                    </div>
                    <div>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        aria-label="Select category"
                      >
                        {categories.map(cat => (
                          <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        placeholder="Topic content * (AI will moderate for spam/inappropriate content)"
                        rows="6"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-900 dark:text-white placeholder-gray-500 ${errors.content ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                        aria-label="Topic content"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags</label>
                      <div className="flex flex-wrap gap-2">
                        {popularTags.map(tag => (
                          <label key={tag} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                            <input
                              type="checkbox"
                              name="tags"
                              value={tag}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                              aria-label={`Add tag: ${tag}`}
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">#{tag}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      aria-label="Post topic"
                    >
                      Post Topic (+25 XP)
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== TOPIC DETAIL MODAL ==================== */}
        {selectedTopic && !showReplyModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setSelectedTopic(null)}
            role="dialog"
            aria-label="Topic Details"
            aria-modal="true"
          >
            <div
              className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(selectedTopic.category)}`}>
                      {categories.find(c => c.id === selectedTopic.category)?.name}
                    </span>
                    {selectedTopic.isPinned && <HiOutlinePin className="w-4 h-4 text-yellow-300" />}
                    {selectedTopic.aiFlags?.length > 0 && <HiOutlineRobot className="w-4 h-4 text-purple-300" title="AI moderated" />}
                  </div>
                  <div className="flex gap-2">
                    {currentUser?.role === 'Moderator' && (
                      <>
                        <button
                          onClick={() => togglePin(selectedTopic.id)}
                          className="p-1 text-white hover:text-yellow-300 transition-colors"
                          aria-label="Pin topic"
                        >
                          <HiOutlinePin className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleLock(selectedTopic.id)}
                          className="p-1 text-white hover:text-red-300 transition-colors"
                          aria-label="Lock topic"
                        >
                          <HiOutlineLockClosed className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => { setFormData(prev => ({ ...prev, editContent: selectedTopic.content })); setShowEditModal(true); }}
                      className="p-1 text-white hover:text-green-300 transition-colors"
                      aria-label="Edit topic"
                    >
                      <HiOutlinePencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setShowReportModal(true)}
                      className="p-1 text-white hover:text-red-300 transition-colors"
                      aria-label="Report topic"
                    >
                      <HiOutlineFlag className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSelectedTopic(null)}
                      className="text-white hover:text-gray-200 transition-colors"
                      aria-label="Close modal"
                    >
                      <HiOutlineX className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <h2 className="text-white font-bold text-xl mt-2">{selectedTopic.title}</h2>
              </div>
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                {/* Original Post */}
                <div className="flex gap-4 pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => { setSelectedUser(selectedTopic.author); setShowUserProfile(true); }}
                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="View author profile"
                  >
                    <HiOutlineUserCircle className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{selectedTopic.author?.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(selectedTopic.createdAt)} • Lvl {selectedTopic.author?.level} • Rep: {selectedTopic.author?.reputation}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => likeTopic(selectedTopic.id)}
                          className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                          aria-label="Like topic"
                        >
                          <HiOutlineHeart className="w-4 h-4" />
                          {selectedTopic.likes || 0}
                        </button>
                        <button
                          onClick={() => { setSelectedPost(null); setFormData(prev => ({ ...prev, editContent: selectedTopic.content })); setShowEditModal(true); }}
                          className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
                          aria-label="Edit topic"
                        >
                          <HiOutlinePencil className="w-4 h-4" />
                        </button>
                        {(currentUser?.role === 'Moderator' || currentUser?.id === selectedTopic.author?.id) && (
                          <button
                            onClick={() => { handleDelete(selectedTopic.id); setSelectedTopic(null); }}
                            className="text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
                            aria-label="Delete topic"
                          >
                            <HiOutlineTrash className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mt-2 whitespace-pre-wrap">{selectedTopic.content}</p>
                    {selectedTopic.tags && selectedTopic.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {selectedTopic.tags.map(tag => (
                          <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Replies */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Replies ({selectedTopic.posts?.length || 0})</h3>
                  {selectedTopic.posts?.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">No replies yet. Be the first to respond! (+5 XP)</p>
                  ) : (
                    selectedTopic.posts.map((post) => (
                      <div key={post.id} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <button
                          onClick={() => { setSelectedUser(post.author); setShowUserProfile(true); }}
                          className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center hover:opacity-80 transition-opacity"
                          aria-label="View author profile"
                        >
                          <HiOutlineUserCircle className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </button>
                        <div className="flex-1">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">{post.author?.name}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(post.createdAt)} • Lvl {post.author?.level}</p>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => likePost(selectedTopic.id, post.id)}
                                className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                aria-label="Like post"
                              >
                                <HiOutlineHeart className="w-4 h-4" />
                                {post.likes || 0}
                              </button>
                              <button
                                onClick={() => { setSelectedPost(post); setFormData(prev => ({ ...prev, editContent: post.content })); setShowEditModal(true); }}
                                className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
                                aria-label="Edit post"
                              >
                                <HiOutlinePencil className="w-4 h-4" />
                              </button>
                              {(currentUser?.role === 'Moderator' || currentUser?.id === post.author?.id) && (
                                <button
                                  onClick={() => { handleDelete(selectedTopic.id, post.id); }}
                                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
                                  aria-label="Delete post"
                                >
                                  <HiOutlineTrash className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mt-2 whitespace-pre-wrap">{post.content}</p>
                          {post.editedAt && (
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Edited {formatDate(post.editedAt)}</p>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                {selectedTopic.isLocked ? (
                  <p className="text-center text-sm text-red-500 dark:text-red-400">This topic is locked. New replies cannot be added.</p>
                ) : (
                  <button
                    onClick={() => setShowReplyModal(true)}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                    aria-label="Reply to topic"
                  >
                    Reply to Topic (+5 XP)
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== REPLY MODAL ==================== */}
        {showReplyModal && selectedTopic && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowReplyModal(false)}
            role="dialog"
            aria-label="Reply to Topic"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-green-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Reply to Topic (+5 XP, +2 rep)</h3>
                  <button onClick={() => setShowReplyModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Replying to: {selectedTopic.title}</p>
                <form onSubmit={handleAddReply} className="space-y-4">
                  <textarea
                    name="content"
                    value={replyData.content}
                    onChange={handleReplyChange}
                    placeholder="Write your reply... (AI will moderate for spam/inappropriate content)"
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-gray-900 dark:text-white placeholder-gray-500"
                    aria-label="Reply content"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    aria-label="Post reply"
                  >
                    Post Reply (+5 XP)
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ==================== EDIT MODAL ==================== */}
        {showEditModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowEditModal(false)}
            role="dialog"
            aria-label="Edit Content"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-yellow-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Edit Content</h3>
                  <button onClick={() => setShowEditModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <form onSubmit={handleEdit} className="space-y-4">
                  <textarea
                    name="editContent"
                    value={formData.editContent}
                    onChange={handleInputChange}
                    rows="8"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none text-gray-900 dark:text-white placeholder-gray-500"
                    aria-label="Edit content"
                  />
                  <button
                    type="submit"
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    aria-label="Save changes"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ==================== REPORT MODAL ==================== */}
        {showReportModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowReportModal(false)}
            role="dialog"
            aria-label="Report Content"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-red-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Report Content</h3>
                  <button onClick={() => setShowReportModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <form onSubmit={handleReport} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Reason</label>
                    <select
                      name="reason"
                      value={reportData.reason}
                      onChange={handleReportChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white"
                      aria-label="Report reason"
                    >
                      <option value="">Select reason</option>
                      <option value="spam">Spam</option>
                      <option value="harassment">Harassment</option>
                      <option value="inappropriate">Inappropriate content</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Details</label>
                    <textarea
                      name="details"
                      value={reportData.details}
                      onChange={handleReportChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 resize-none text-gray-900 dark:text-white placeholder-gray-500"
                      placeholder="Please provide additional details..."
                      aria-label="Report details"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    aria-label="Submit report"
                  >
                    Submit Report
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ==================== PRIVATE MESSAGE MODAL ==================== */}
        {showMessageModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowMessageModal(false)}
            role="dialog"
            aria-label="Send Private Message"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Send Private Message (+2 XP)</h3>
                  <button onClick={() => setShowMessageModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <form onSubmit={sendPrivateMessage} className="space-y-4">
                  <input
                    type="text"
                    name="recipient"
                    value={messageData.recipient}
                    onChange={handleMessageChange}
                    placeholder="Recipient username"
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Recipient username"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={messageData.subject}
                    onChange={handleMessageChange}
                    placeholder="Subject"
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Message subject"
                  />
                  <textarea
                    name="content"
                    value={messageData.content}
                    onChange={handleMessageChange}
                    rows="5"
                    placeholder="Message content"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-900 dark:text-white placeholder-gray-500"
                    aria-label="Message content"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    aria-label="Send message"
                  >
                    Send Message (+2 XP)
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ==================== USER PROFILE MODAL ==================== */}
        {showUserProfile && selectedUser && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowUserProfile(false)}
            role="dialog"
            aria-label="User Profile"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">User Profile</h3>
                  <button onClick={() => setShowUserProfile(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                  {selectedUser.name.charAt(0)}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{selectedUser.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{selectedUser.role} • Level {selectedUser.level}</p>
                <div className="flex justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedUser.reputation}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Reputation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedUser.posts}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{selectedUser.xp}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">XP</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {selectedUser.badges?.map(badge => (
                    <span key={badge} className="inline-flex items-center gap-1 text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-700 dark:text-gray-300">
                      {getBadgeIcon(badge)}{badge}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Joined {formatDate(selectedUser.joinedAt)}</p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => { setMessageData(prev => ({ ...prev, recipient: selectedUser.name })); setShowMessageModal(true); setShowUserProfile(false); }}
                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors"
                    aria-label="Send message"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ACHIEVEMENTS MODAL ==================== */}
        {showAchievementsModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowAchievementsModal(false)}
            role="dialog"
            aria-label="Achievements"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-yellow-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Your Achievements</h3>
                  <button onClick={() => setShowAchievementsModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                {userAchievements.length === 0 ? (
                  <p className="text-center text-gray-500 dark:text-gray-400">No achievements yet. Start participating to earn badges!</p>
                ) : (
                  <div className="space-y-3">
                    {userAchievements.map(achievement => (
                      <div key={achievement.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div>
                          <p className="font-medium text-sm text-gray-900 dark:text-white">{achievement.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.description}</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{formatDate(achievement.earnedAt)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== AI MODERATION MODAL ==================== */}
        {showAIModeration && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowAIModeration(false)}
            role="dialog"
            aria-label="AI Moderation Dashboard"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">AI Moderation Dashboard</h3>
                  <button onClick={() => setShowAIModeration(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-sm font-semibold text-green-700 dark:text-green-300">AI is active</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Automatically scanning for spam and inappropriate content</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recent Flags</p>
                  <div className="space-y-2">
                    {Object.entries(aiModerationFlags).slice(0, 5).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm">
                        <span className="text-gray-700 dark:text-gray-300">{key}</span>
                        <span className="text-xs text-red-500 dark:text-red-400">{value} flags</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ANALYTICS MODAL ==================== */}
        {showAnalyticsModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowAnalyticsModal(false)}
            role="dialog"
            aria-label="Community Analytics"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-teal-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Community Analytics</h3>
                  <button onClick={() => setShowAnalyticsModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.weeklyGrowth}%</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Weekly Growth</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.engagementRate}%</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Engagement Rate</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Topics by Day</h4>
                  <div className="flex items-end gap-2 h-32">
                    {analyticsData.topicsByDay.map((day, idx) => (
                      <div key={idx} className="flex-1 text-center">
                        <div
                          className="bg-blue-500 rounded-t"
                          style={{ height: `${(day.count / Math.max(...analyticsData.topicsByDay.map(d => d.count), 1)) * 100}px` }}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{day.date.slice(5)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Popular Categories</h4>
                  <div className="space-y-2">
                    {analyticsData.popularCategories.map((cat, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700 dark:text-gray-300">{cat.name}</span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{cat.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineRobot className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Intelligent Community</h3>
          <p className="text-blue-100 dark:text-blue-200 mb-6">Earn XP, unlock achievements, and connect with experts.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg" aria-label="Sign up today">
            <HiOutlineUserAdd className="w-5 h-5" />Sign Up Today
          </button>
        </div>
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default CommunityForumSection3;