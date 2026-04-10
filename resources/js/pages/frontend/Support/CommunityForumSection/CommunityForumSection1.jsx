// page/frontend/Community/CommunityForumSection/CommunityForumSection1.jsx

// React
import { useState, useEffect, useMemo } from 'react';

// Icons
import {
  HiOutlineChat,
  HiOutlineChatAlt2,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineSearch,
  HiOutlineX,
  HiOutlineCheckCircle,
  HiOutlineBell,
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineFire,
  HiOutlineLockClosed,
  HiOutlinePlus,
  HiOutlineSupport,
} from 'react-icons/hi';
import { HiOutlineLightBulb, HiOutlineUserCircle } from 'react-icons/hi2';
import { MdOutlinePin as HiOutlinePin, } from "react-icons/md";

const CommunityForumSection1 = ({ config }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showCreateTopicModal, setShowCreateTopicModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSort, setActiveSort] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [topics, setTopics] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'general',
    content: '',
    tags: [],
  });
  const [replyData, setReplyData] = useState({
    content: '',
  });
  const [errors, setErrors] = useState({});
  const [stats, setStats] = useState({
    totalTopics: 0,
    totalPosts: 0,
    totalUsers: 0,
    onlineUsers: 0,
    newToday: 0,
  });
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [popularTags, setPopularTags] = useState([]);

  // Get data from config
  const configTopics = useMemo(() => config?.topics || [], [config]);

  const configCategories = useMemo(() => config?.categories || [
    { id: 'general', name: 'General Discussion', icon: 'chat', description: 'General conversations about the platform', color: 'bg-blue-100 text-blue-700', postCount: 156 },
    { id: 'announcements', name: 'Announcements', icon: 'megaphone', description: 'Product updates and news', color: 'bg-green-100 text-green-700', postCount: 23 },
    { id: 'help', name: 'Help & Support', icon: 'support', description: 'Get help with technical issues', color: 'bg-purple-100 text-purple-700', postCount: 342 },
    { id: 'feature-requests', name: 'Feature Requests', icon: 'star', description: 'Suggest and vote on new features', color: 'bg-yellow-100 text-yellow-700', postCount: 89 },
    { id: 'tips-tricks', name: 'Tips & Tricks', icon: 'lightbulb', description: 'Share your knowledge and insights', color: 'bg-orange-100 text-orange-700', postCount: 67 },
  ], [config]);

  const configUsers = useMemo(() => config?.users || [
    { id: 'user1', name: 'Sarah Johnson', role: 'Community Manager', avatar: null, reputation: 1245, posts: 342, joinedAt: '2023-01-15', badges: ['Expert', 'Helper'] },
    { id: 'user2', name: 'Michael Chen', role: 'Power User', avatar: null, reputation: 892, posts: 187, joinedAt: '2023-03-20', badges: ['Contributor'] },
    { id: 'user3', name: 'Emily Rodriguez', role: 'Member', avatar: null, reputation: 456, posts: 89, joinedAt: '2023-06-10', badges: [] },
    { id: 'user4', name: 'David Kim', role: 'Moderator', avatar: null, reputation: 2100, posts: 567, joinedAt: '2022-11-01', badges: ['Moderator', 'Expert'] },
  ], [config]);

  // Initialize topics and categories
  useEffect(() => {
    const savedTopics = localStorage.getItem('forumTopics');
    if (savedTopics && JSON.parse(savedTopics).length > 0) {
      setTopics(JSON.parse(savedTopics));
    } else {
      setTopics(configTopics);
    }

    setCategories(configCategories);
    setUsers(configUsers);
    setPopularTags(['api', 'integration', 'dashboard', 'analytics', 'mobile', 'security']);
  }, [configCategories, configTopics, configUsers]);

  useEffect(() => {
    localStorage.setItem('forumTopics', JSON.stringify(topics));
    updateStats();
  }, [topics, updateStats]);

  // Update statistics
  const updateStats = useMemo(() => () => {
    const totalPosts = topics.reduce((sum, topic) => sum + (topic.posts?.length || 0) + 1, 0);
    const newToday = topics.filter(t => {
      const today = new Date().toDateString();
      return new Date(t.createdAt).toDateString() === today;
    }).length;

    setStats({
      totalTopics: topics.length,
      totalPosts,
      totalUsers: users.length,
      onlineUsers: Math.floor(Math.random() * 50) + 20,
      newToday,
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

    // Sort topics
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

  // Handle form input change
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
    const { name, value } = e.target;
    setReplyData(prev => ({ ...prev, [name]: value }));
  };

  // Create new topic
  const handleCreateTopic = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.content) newErrors.content = 'Content is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newTopic = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      content: formData.content,
      tags: formData.tags,
      author: { id: 'currentUser', name: 'You', avatar: null, reputation: 0 },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      views: 0,
      likes: 0,
      posts: [],
      isPinned: false,
      isLocked: false,
    };

    setTopics(prev => [newTopic, ...prev]);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowCreateTopicModal(false);
      setFormData({
        title: '',
        category: 'general',
        content: '',
        tags: [],
      });
    }, 2000);
  };

  // Add reply to topic
  const handleAddReply = (e) => {
    e.preventDefault();
    if (!replyData.content.trim()) return;

    const newReply = {
      id: Date.now(),
      content: replyData.content,
      author: { id: 'currentUser', name: 'You', avatar: null, reputation: 0 },
      createdAt: new Date().toISOString(),
      likes: 0,
    };

    setTopics(prev => prev.map(topic =>
      topic.id === selectedTopic.id
        ? {
          ...topic,
          posts: [...(topic.posts || []), newReply],
          lastActivity: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
        : topic
    ));

    setSelectedTopic(prev => ({
      ...prev,
      posts: [...(prev.posts || []), newReply],
      lastActivity: new Date().toISOString(),
    }));

    setReplyData({ content: '' });
    setShowReplyModal(false);
  };

  // Like topic or post
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

  // Increment view count
  const incrementViews = (topicId) => {
    setTopics(prev => prev.map(topic =>
      topic.id === topicId
        ? { ...topic, views: (topic.views || 0) + 1 }
        : topic
    ));
  };

  // Format date
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

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Community Forum Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineUsers className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Community Forum"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Join the"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Conversation"}</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Connect with fellow users, share knowledge, ask questions, and get the most out of our platform."}
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between"><HiOutlineChat className="w-8 h-8 text-blue-500" /><span className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalTopics}</span></div>
            <p className="text-sm text-gray-500 mt-1">Topics</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between"><HiOutlineChatAlt2 className="w-8 h-8 text-green-500" /><span className="text-2xl font-bold text-gray-900">{stats.totalPosts}</span></div>
            <p className="text-sm text-gray-500 mt-1">Posts</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between"><HiOutlineUsers className="w-8 h-8 text-purple-500" /><span className="text-2xl font-bold text-gray-900">{stats.totalUsers}</span></div>
            <p className="text-sm text-gray-500 mt-1">Members</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between"><HiOutlineUser className="w-8 h-8 text-green-500" /><span className="text-2xl font-bold text-gray-900">{stats.onlineUsers}</span></div>
            <p className="text-sm text-gray-500 mt-1">Online</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between"><HiOutlineFire className="w-8 h-8 text-orange-500" /><span className="text-2xl font-bold text-gray-900">{stats.newToday}</span></div>
            <p className="text-sm text-gray-500 mt-1">New Today</p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center"><HiOutlineSearch className="w-4 h-4 text-gray-400" /></div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search topics..." className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
          </div>
          <div className="flex gap-2">
            <select value={activeSort} onChange={(e) => setActiveSort(e.target.value)} className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm">
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="active">Most Active</option>
              <option value="unanswered">Unanswered</option>
            </select>
            <button onClick={() => setShowCreateTopicModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2"><HiOutlinePlus className="w-4 h-4" />New Topic</button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button onClick={() => setActiveCategory('all')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>All Topics</button>
          {categories.map(category => (
            <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
              {getCategoryIcon(category.id)}
              {category.name}
              <span className="ml-1 text-xs opacity-75">({category.postCount})</span>
            </button>
          ))}
        </div>

        {/* Topics List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Replies</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredTopics.length === 0 ? (
                  <tr><td colSpan="5" className="px-6 py-12 text-center text-gray-500">No topics found</td></tr>
                ) : (
                  filteredTopics.map((topic) => (
                    <tr key={topic.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer" onClick={() => { setSelectedTopic(topic); incrementViews(topic.id); }}>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                            <HiOutlineUserCircle className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              {topic.isPinned && <HiOutlinePin className="w-4 h-4 text-yellow-500" title="Pinned" />}
                              {topic.isLocked && <HiOutlineLockClosed className="w-4 h-4 text-red-500" title="Locked" />}
                              <h3 className="text-sm font-medium text-gray-900 dark:text-white">{topic.title}</h3>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">by {topic.author?.name} • {formatDate(topic.createdAt)}</p>
                            {topic.tags && topic.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-1">
                                {topic.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded-full text-gray-600">#{tag}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
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
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Popular Tags</p>
          <div className="flex flex-wrap gap-2">
            {popularTags.map(tag => (
              <button key={tag} onClick={() => setSearchQuery(tag)} className="px-3 py-1 text-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full hover:bg-gray-100 transition-colors">
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Create Topic Modal */}
        {showCreateTopicModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowCreateTopicModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0">
                <div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Create New Topic</h3><button onClick={() => setShowCreateTopicModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div>
              </div>
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                {formSubmitted ? (
                  <div className="text-center py-8"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineCheckCircle className="w-8 h-8 text-green-600" /></div><h4 className="text-xl font-bold mb-2">Topic Created!</h4><p className="text-gray-600">Your topic has been posted to the community.</p></div>
                ) : (
                  <form onSubmit={handleCreateTopic} className="space-y-4">
                    <div><input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Topic title *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl ${errors.title ? 'border-red-500' : 'border-gray-200'}`} /></div>
                    <div><select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl"><option value="general">General Discussion</option><option value="announcements">Announcements</option><option value="help">Help & Support</option><option value="feature-requests">Feature Requests</option><option value="tips-tricks">Tips & Tricks</option></select></div>
                    <div><textarea name="content" value={formData.content} onChange={handleInputChange} placeholder="Topic content *" rows="6" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none ${errors.content ? 'border-red-500' : 'border-gray-200'}`} /></div>
                    <div><label className="block text-sm font-medium mb-2">Tags (select up to 5)</label><div className="flex flex-wrap gap-2">{popularTags.map(tag => (<label key={tag} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg cursor-pointer"><input type="checkbox" name="tags" value={tag} onChange={handleInputChange} className="w-4 h-4" /><span className="text-sm">#{tag}</span></label>))}</div></div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">Post Topic</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Topic Detail Modal */}
        {selectedTopic && !showReplyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setSelectedTopic(null)}>
            <div className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(selectedTopic.category)}`}>{categories.find(c => c.id === selectedTopic.category)?.name}</span>{selectedTopic.isPinned && <HiOutlinePin className="w-4 h-4 text-yellow-300" />}</div>
                  <button onClick={() => setSelectedTopic(null)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
                </div>
                <h2 className="text-white font-bold text-xl mt-2">{selectedTopic.title}</h2>
              </div>
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                {/* Original Post */}
                <div className="flex gap-4 pb-4 mb-4 border-b border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0"><HiOutlineUserCircle className="w-7 h-7 text-blue-600" /></div>
                  <div className="flex-1"><div className="flex items-center justify-between flex-wrap gap-2"><div><p className="font-medium text-gray-900">{selectedTopic.author?.name}</p><p className="text-xs text-gray-500">{formatDate(selectedTopic.createdAt)}</p></div><div className="flex gap-2"><button onClick={() => likeTopic(selectedTopic.id)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500"><HiOutlineHeart className="w-4 h-4" />{selectedTopic.likes || 0}</button></div></div><p className="text-gray-700 mt-2 whitespace-pre-wrap">{selectedTopic.content}</p>{selectedTopic.tags && (<div className="flex flex-wrap gap-1 mt-3">{selectedTopic.tags.map(tag => (<span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full">#{tag}</span>))}</div>)}</div>
                </div>
                {/* Replies */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Replies ({selectedTopic.posts?.length || 0})</h3>
                  {selectedTopic.posts?.length === 0 ? (<p className="text-sm text-gray-500">No replies yet. Be the first to respond!</p>) : (selectedTopic.posts.map((post) => (<div key={post.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl"><div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0"><HiOutlineUserCircle className="w-6 h-6 text-gray-500" /></div><div className="flex-1"><div className="flex items-center justify-between flex-wrap gap-2"><div><p className="font-medium text-gray-900">{post.author?.name}</p><p className="text-xs text-gray-500">{formatDate(post.createdAt)}</p></div><button onClick={() => likePost(selectedTopic.id, post.id)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500"><HiOutlineHeart className="w-4 h-4" />{post.likes || 0}</button></div><p className="text-gray-700 mt-2 whitespace-pre-wrap">{post.content}</p></div></div>)))}
                </div>
              </div>
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                {selectedTopic.isLocked ? (<p className="text-center text-sm text-red-500">This topic is locked. New replies cannot be added.</p>) : (<button onClick={() => setShowReplyModal(true)} className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold">Reply to Topic</button>)}
              </div>
            </div>
          </div>
        )}

        {/* Reply Modal */}
        {showReplyModal && selectedTopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowReplyModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Reply to Topic</h3><button onClick={() => setShowReplyModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><p className="text-sm text-gray-600 mb-3">Replying to: {selectedTopic.title}</p><form onSubmit={handleAddReply}><textarea name="content" value={replyData.content} onChange={handleReplyChange} placeholder="Write your reply..." rows="6" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" /><button type="submit" className="w-full mt-4 py-3 bg-green-600 text-white rounded-xl font-semibold">Post Reply</button></form></div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default CommunityForumSection1;