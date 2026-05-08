// page/frontend/Support/TicketSystemSection/TicketSystemSection1.jsx

/**
 * Ticket System Section I - Support Ticket Management & Tracking Hub
 *
 * Unique Design Elements:
 * - Stats Dashboard for Ticket Metrics (Total, Open, In Progress, Resolved, Satisfaction)
 * - Multi-tab Navigation for Ticket Status (All, Open, In Progress, Resolved, Closed)
 * - Search and Filter Functionality (Priority, Status, Category)
 * - Create Ticket Modal with Form Validation
 * - Reply to Ticket Modal with Internal Notes Option
 * - Ticket Details Modal with Conversation History
 * - Ticket Status Update with One-Click Actions
 * - Attachment Support for Tickets and Replies
 * - Priority Badges (Low, Medium, High, Urgent)
 * - Status Badges with Color Coding
 * - localStorage Persistence for Tickets
 * - Responsive Table Layout
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useRef, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineTicket,
  HiOutlinePlus,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineX,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlinePaperClip,
  HiOutlineEye,
  HiOutlineReply,
  HiOutlineStar,
  HiOutlineRefresh,
} from 'react-icons/hi';

const TicketSystemSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [tickets, setTickets] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [replyData, setReplyData] = useState({ message: '', attachments: [], isInternal: false, });
  const [stats, setStats] = useState({ total: 0, open: 0, inProgress: 0, resolved: 0, avgResponseTime: '2.5h', satisfaction: 4.8, });
  const [formData, setFormData] = useState({ subject: '', category: 'general', priority: 'medium', description: '', attachments: [], contactEmail: '', contactName: '', });

  // ===================== REFS =====================
  const fileInputRef = useRef(null);
  const replyFileInputRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const configTickets = useMemo(() => config?.tickets || [], [config]);
  const categories = useMemo(() => config?.categories || [
    { id: 'general', name: 'General Inquiry', icon: 'chat' },
    { id: 'technical', name: 'Technical Issue', icon: 'chip' },
    { id: 'billing', name: 'Billing Question', icon: 'cash' },
    { id: 'feature', name: 'Feature Request', icon: 'star' },
    { id: 'account', name: 'Account Management', icon: 'user' },
  ], [config]);

  // ==================== LOCAL STORAGE & EFFECTS ====================
  useEffect(() => {
    const savedTickets = localStorage.getItem('supportTickets');
    if (savedTickets && JSON.parse(savedTickets).length > 0) {
      setTickets(JSON.parse(savedTickets));
    } else {
      setTickets([...configTickets]);
    }
  }, [configTickets]);

  useEffect(() => {
    localStorage.setItem('supportTickets', JSON.stringify(tickets));
  }, [tickets]);

  // Update statistics
  useEffect(() => {
    const open = tickets.filter(t => t.status === 'open').length;
    const inProgress = tickets.filter(t => t.status === 'in-progress').length;
    const resolved = tickets.filter(t => t.status === 'resolved').length;
    const closed = tickets.filter(t => t.status === 'closed').length;

    setStats({
      total: tickets.length,
      open,
      inProgress,
      resolved,
      closed,
      avgResponseTime: '2.5h',
      satisfaction: 4.8,
    });
  }, [tickets]);

  // Filter tickets based on search, priority, status, category, and active tab
  useEffect(() => {
    let filtered = [...tickets];

    if (searchQuery) {
      filtered = filtered.filter(ticket =>
        ticket.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.id?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedPriority !== 'all') {
      filtered = filtered.filter(ticket => ticket.priority === selectedPriority);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(ticket => ticket.status === selectedStatus);
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(ticket => ticket.category === selectedCategory);
    }

    if (activeTab !== 'all') {
      filtered = filtered.filter(ticket => ticket.status === activeTab);
    }

    setFilteredTickets(filtered);
  }, [tickets, searchQuery, selectedPriority, selectedStatus, selectedCategory, activeTab]);

  // ==================== FORM HANDLERS ====================
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...Array.from(files)]
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleReplyChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setReplyData(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...Array.from(files)]
      }));
    } else {
      setReplyData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.description) newErrors.description = 'Description is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newTicket = {
      id: `TKT-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
      subject: formData.subject,
      category: formData.category,
      priority: formData.priority,
      description: formData.description,
      status: 'open',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      attachments: formData.attachments.map(f => f.name),
      contactEmail: formData.contactEmail,
      contactName: formData.contactName,
      replies: [],
    };

    setTickets(prev => [newTicket, ...prev]);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowCreateModal(false);
      setFormData({
        subject: '',
        category: 'general',
        priority: 'medium',
        description: '',
        attachments: [],
        contactEmail: '',
        contactName: '',
      });
    }, 3000);
  };

  const handleAddReply = (e) => {
    e.preventDefault();
    if (!replyData.message.trim()) return;

    const newReply = {
      id: Date.now(),
      message: replyData.message,
      attachments: replyData.attachments.map(f => f.name),
      isInternal: replyData.isInternal,
      createdAt: new Date().toISOString(),
      author: 'Support Agent',
      authorType: 'agent',
    };

    setTickets(prev => prev.map(ticket =>
      ticket.id === selectedTicket.id
        ? { ...ticket, replies: [...(ticket.replies || []), newReply], updatedAt: new Date().toISOString() }
        : ticket
    ));

    setReplyData({ message: '', attachments: [], isInternal: false });
    setShowReplyModal(false);
  };

  // ==================== UI HANDLERS ====================
  const updateTicketStatus = (ticketId, newStatus) => {
    setTickets(prev => prev.map(ticket =>
      ticket.id === ticketId
        ? { ...ticket, status: newStatus, updatedAt: new Date().toISOString() }
        : ticket
    ));
  };

  const clearFilters = () => {
    setSelectedPriority('all');
    setSelectedStatus('all');
    setSelectedCategory('all');
    setActiveTab('all');
    setSearchQuery('');
  };

  const removeAttachment = (index, isReply = false) => {
    if (isReply) {
      setReplyData(prev => ({
        ...prev,
        attachments: prev.attachments.filter((_, i) => i !== index)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        attachments: prev.attachments.filter((_, i) => i !== index)
      }));
    }
  };

  // ==================== HELPER FUNCTIONS ====================
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'low': return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
      case 'medium': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'high': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'urgent': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'in-progress': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'resolved': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'closed': return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const formatDateTime = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Ticket System Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineTicket className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Support Tickets"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Manage"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Support Tickets"}</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Track, manage, and resolve customer support tickets efficiently. Monitor response times and customer satisfaction."}
          </p>
        </div>

        {/* ==================== STATS DASHBOARD ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineTicket className="w-8 h-8 text-blue-500 dark:text-blue-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Total Tickets</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineClock className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{stats.open}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Open</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineRefresh className="w-8 h-8 text-orange-500 dark:text-orange-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{stats.inProgress}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">In Progress</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineCheckCircle className="w-8 h-8 text-green-500 dark:text-green-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{stats.resolved}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Resolved</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineStar className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{stats.satisfaction}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Satisfaction</p>
          </div>
        </div>

        {/* ==================== ACTION BAR ==================== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <HiOutlineSearch className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tickets by ID, subject, or description..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 dark:text-white"
              aria-label="Search tickets"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilterModal(true)}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Open filters"
            >
              <HiOutlineFilter className="w-4 h-4" />Filters
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
              aria-label="Create new ticket"
            >
              <HiOutlinePlus className="w-4 h-4" />New Ticket
            </button>
          </div>
        </div>

        {/* ==================== TABS ==================== */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 mb-6">
          {['all', 'open', 'in-progress', 'resolved', 'closed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${activeTab === tab
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              aria-label={`Show ${tab} tickets`}
            >
              {tab === 'all' ? 'All Tickets' : tab === 'in-progress' ? 'In Progress' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                {tab === 'all' ? tickets.length : tickets.filter(t => t.status === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* ==================== TICKETS TABLE ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ticket ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Created</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredTickets.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                      No tickets found
                    </td>
                  </tr>
                ) : (
                  filteredTickets.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => setSelectedTicket(ticket)}
                          className="text-sm font-mono text-blue-600 dark:text-blue-400 hover:underline"
                          aria-label={`View ticket ${ticket.id}`}
                        >
                          {ticket.id}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{ticket.subject}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{ticket.description?.substring(0, 50)}...</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(ticket.status)}`}>
                          {ticket.status === 'in-progress' ? 'In Progress' : ticket.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {categories.find(c => c.id === ticket.category)?.name || ticket.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(ticket.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <button
                            onClick={() => { setSelectedTicket(ticket); setShowReplyModal(true); }}
                            className="p-1 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors"
                            title="Reply"
                            aria-label="Reply to ticket"
                          >
                            <HiOutlineReply className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => updateTicketStatus(ticket.id, ticket.status === 'open' ? 'in-progress' : 'open')}
                            className="p-1 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded transition-colors"
                            title="Update Status"
                            aria-label="Update ticket status"
                          >
                            <HiOutlineRefresh className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setSelectedTicket(ticket)}
                            className="p-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                            title="View Details"
                            aria-label="View ticket details"
                          >
                            <HiOutlineEye className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==================== CREATE TICKET MODAL ==================== */}
        {showCreateModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setShowCreateModal(false)}
            role="dialog"
            aria-label="Create New Ticket"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Create New Ticket</h3>
                  <button onClick={() => setShowCreateModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
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
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ticket Created!</h4>
                    <p className="text-gray-600 dark:text-gray-400">Your ticket has been submitted. Our support team will respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleCreateTicket} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                        aria-label="Ticket subject"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        aria-label="Select category"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="technical">Technical Issue</option>
                        <option value="billing">Billing Question</option>
                        <option value="feature">Feature Request</option>
                        <option value="account">Account Management</option>
                      </select>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        aria-label="Select priority"
                      >
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Describe your issue *"
                        rows="5"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-900 dark:text-white placeholder-gray-500 ${errors.description ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                        aria-label="Ticket description"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Your name"
                      />
                      <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Attachments</label>
                      <input
                        type="file"
                        multiple
                        onChange={handleInputChange}
                        ref={fileInputRef}
                        className="w-full text-sm text-gray-500 dark:text-gray-400 file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-900/30 dark:file:text-blue-400 hover:file:bg-blue-100 dark:hover:file:bg-blue-800/40 transition-colors"
                        aria-label="Attach files"
                      />
                    </div>
                    {formData.attachments.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.attachments.map((file, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
                            <HiOutlinePaperClip className="w-3 h-3" />
                            <span className="text-gray-600 dark:text-gray-400">{file.name}</span>
                            <button type="button" onClick={() => removeAttachment(idx)} className="text-red-500 hover:text-red-700 transition-colors" aria-label="Remove attachment">
                              <HiOutlineX className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      aria-label="Submit ticket"
                    >
                      Submit Ticket
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== REPLY MODAL ==================== */}
        {showReplyModal && selectedTicket && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setShowReplyModal(false)}
            role="dialog"
            aria-label="Reply to Ticket"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-green-600 to-teal-600 p-4 sticky top-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Reply to Ticket #{selectedTicket.id}</h3>
                  <button onClick={() => setShowReplyModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{selectedTicket.subject}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Opened on {formatDate(selectedTicket.createdAt)}</p>
                </div>
                <form onSubmit={handleAddReply} className="space-y-4">
                  <div>
                    <textarea
                      name="message"
                      value={replyData.message}
                      onChange={handleReplyChange}
                      placeholder="Type your reply here..."
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-gray-900 dark:text-white placeholder-gray-500"
                      aria-label="Reply message"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="isInternal"
                        checked={replyData.isInternal}
                        onChange={handleReplyChange}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                        aria-label="Internal note"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Internal note (only visible to agents)</span>
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Attachments</label>
                    <input
                      type="file"
                      multiple
                      onChange={handleReplyChange}
                      ref={replyFileInputRef}
                      className="w-full text-sm text-gray-500 dark:text-gray-400 file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 dark:file:bg-green-900/30 dark:file:text-green-400 hover:file:bg-green-100 dark:hover:file:bg-green-800/40 transition-colors"
                      aria-label="Attach files"
                    />
                  </div>
                  {replyData.attachments.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {replyData.attachments.map((file, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
                          <HiOutlinePaperClip className="w-3 h-3" />
                          <span className="text-gray-600 dark:text-gray-400">{file.name}</span>
                          <button type="button" onClick={() => removeAttachment(idx, true)} className="text-red-500 hover:text-red-700 transition-colors" aria-label="Remove attachment">
                            <HiOutlineX className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    aria-label="Send reply"
                  >
                    Send Reply
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ==================== FILTER MODAL ==================== */}
        {showFilterModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowFilterModal(false)}
            role="dialog"
            aria-label="Filter Tickets"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Filter Tickets</h3>
                  <button onClick={() => setShowFilterModal(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
                  <select
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by priority"
                  >
                    <option value="all">All Priorities</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by status"
                  >
                    <option value="all">All Statuses</option>
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by category"
                  >
                    <option value="all">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={clearFilters}
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Reset all filters"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setShowFilterModal(false)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label="Apply filters"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TICKET DETAILS MODAL ==================== */}
        {selectedTicket && !showReplyModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setSelectedTicket(null)}
            role="dialog"
            aria-label="Ticket Details"
            aria-modal="true"
          >
            <div
              className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Ticket #{selectedTicket.id}</h3>
                  <button onClick={() => setSelectedTicket(null)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{selectedTicket.subject}</h2>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedTicket.status)}`}>
                      {selectedTicket.status === 'in-progress' ? 'In Progress' : selectedTicket.status}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(selectedTicket.priority)}`}>
                      {selectedTicket.priority}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 flex-wrap">
                  <span>Created: {formatDateTime(selectedTicket.createdAt)}</span>
                  <span>Updated: {formatDateTime(selectedTicket.updatedAt)}</span>
                  <span>Category: {categories.find(c => c.id === selectedTicket.category)?.name}</span>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl mb-4">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{selectedTicket.description}</p>
                  {selectedTicket.attachments?.length > 0 && (
                    <div className="mt-3 flex gap-2">
                      {selectedTicket.attachments.map((att, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
                          <HiOutlinePaperClip className="w-3 h-3" />
                          <span>{att}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Conversation History</h4>
                  <div className="space-y-3">
                    {selectedTicket.replies?.length === 0 ? (
                      <p className="text-sm text-gray-500 dark:text-gray-400">No replies yet.</p>
                    ) : (
                      selectedTicket.replies.map((reply) => (
                        <div
                          key={reply.id}
                          className={`p-3 rounded-lg ${reply.isInternal ? 'bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500' : 'bg-gray-50 dark:bg-gray-700'}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{reply.author}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{formatDateTime(reply.createdAt)}</span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{reply.message}</p>
                          {reply.isInternal && (
                            <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">Internal note</p>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => { setShowReplyModal(true); }}
                    className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    aria-label="Reply to ticket"
                  >
                    Reply to Ticket
                  </button>
                  <button
                    onClick={() => updateTicketStatus(selectedTicket.id, selectedTicket.status === 'open' ? 'in-progress' : 'open')}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Update ticket status"
                  >
                    Update Status
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

export default TicketSystemSection1;