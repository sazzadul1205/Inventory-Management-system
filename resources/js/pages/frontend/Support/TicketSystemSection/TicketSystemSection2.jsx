// page/frontend/Support/TicketSystemSection/TicketSystemSection2.jsx

// React
import { useState, useEffect, useRef, useMemo } from 'react';

// Icons
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
  HiOutlineBell,
  HiOutlineTemplate,
} from 'react-icons/hi';

const TicketSystemSection2 = ({ config }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSlaModal, setShowSlaModal] = useState(false);
  const [showCannedModal, setShowCannedModal] = useState(false);
  const [showSurveyModal, setShowSurveyModal] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAssignee, setSelectedAssignee] = useState('all');
  const [tickets, setTickets] = useState([]);
  const [agents, setAgents] = useState([]);
  const [cannedResponses, setCannedResponses] = useState([]);
  const [slaPolicies, setSlaPolicies] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    category: 'general',
    priority: 'medium',
    description: '',
    attachments: [],
    contactEmail: '',
    contactName: '',
    assignee: '',
  });
  const [replyData, setReplyData] = useState({
    message: '',
    attachments: [],
    isInternal: false,
    cannedResponse: '',
  });
  const [surveyData, setSurveyData] = useState({
    rating: 0,
    comment: '',
  });
  const [errors, setErrors] = useState({});
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    avgResponseTime: '2.5h',
    satisfaction: 4.8,
    breachedSla: 0,
  });
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [slaBreaches, setSlaBreaches] = useState([]);
  const [, setAutoAssignRules] = useState([]);
  const fileInputRef = useRef(null);
  const replyFileInputRef = useRef(null);

  // Get data from config
  const configTickets = useMemo(() => config?.tickets || [], [config]);

  const configAgents = useMemo(() => config?.agents || [
    { id: 'agent1', name: 'Sarah Johnson', role: 'Senior Support Specialist', avatar: null, skills: ['technical', 'billing'], online: true },
    { id: 'agent2', name: 'Michael Chen', role: 'Support Engineer', avatar: null, skills: ['technical', 'api'], online: true },
    { id: 'agent3', name: 'Emily Rodriguez', role: 'Customer Success Manager', avatar: null, skills: ['account', 'billing'], online: false },
  ], [config]);

  const configCannedResponses = useMemo(() => config?.cannedResponses || [
    { id: 'c1', title: 'Welcome Message', content: 'Thank you for contacting support. We will review your request and get back to you shortly.', category: 'general' },
    { id: 'c2', title: 'Password Reset', content: 'To reset your password, please click on "Forgot Password" on the login page. You will receive an email with reset instructions.', category: 'account' },
    { id: 'c3', title: 'API Key Generation', content: 'You can generate API keys in your account settings under "Developer Settings". Please ensure you have the necessary permissions.', category: 'technical' },
    { id: 'c4', title: 'Billing Inquiry', content: 'For billing inquiries, please visit your account billing page or contact our finance team at finance@example.com.', category: 'billing' },
  ], [config]);

  const configSlaPolicies = useMemo(() => config?.slaPolicies || [
    { id: 'sla1', priority: 'urgent', responseTime: 1, resolutionTime: 4, unit: 'hours' },
    { id: 'sla2', priority: 'high', responseTime: 4, resolutionTime: 8, unit: 'hours' },
    { id: 'sla3', priority: 'medium', responseTime: 24, resolutionTime: 48, unit: 'hours' },
    { id: 'sla4', priority: 'low', responseTime: 48, resolutionTime: 72, unit: 'hours' },
  ], [config]);

  const categories = config?.categories || [
    { id: 'general', name: 'General Inquiry', icon: 'chat', routing: 'agent1' },
    { id: 'technical', name: 'Technical Issue', icon: 'chip', routing: 'agent2' },
    { id: 'billing', name: 'Billing Question', icon: 'cash', routing: 'agent3' },
    { id: 'feature', name: 'Feature Request', icon: 'star', routing: 'agent1' },
    { id: 'account', name: 'Account Management', icon: 'user', routing: 'agent3' },
  ];
  const priorities = [
    { id: 'low', name: 'Low', color: 'bg-gray-100 text-gray-700', sla: 48 },
    { id: 'medium', name: 'Medium', color: 'bg-blue-100 text-blue-700', sla: 24 },
    { id: 'high', name: 'High', color: 'bg-orange-100 text-orange-700', sla: 4 },
    { id: 'urgent', name: 'Urgent', color: 'bg-red-100 text-red-700', sla: 1 },
  ];

  // Initialize tickets and agents
  useEffect(() => {
    const savedTickets = localStorage.getItem('supportTickets');
    if (savedTickets && JSON.parse(savedTickets).length > 0) {
      setTickets(JSON.parse(savedTickets));
    } else {
      setTickets(configTickets);
    }

    const savedAgents = localStorage.getItem('supportAgents');
    if (savedAgents) {
      setAgents(JSON.parse(savedAgents));
    } else {
      setAgents(configAgents);
    }

    const savedCanned = localStorage.getItem('cannedResponses');
    if (savedCanned) {
      setCannedResponses(JSON.parse(savedCanned));
    } else {
      setCannedResponses(configCannedResponses);
    }

    const savedSla = localStorage.getItem('slaPolicies');
    if (savedSla) {
      setSlaPolicies(JSON.parse(savedSla));
    } else {
      setSlaPolicies(configSlaPolicies);
    }

    const savedRules = localStorage.getItem('autoAssignRules');
    if (savedRules) {
      setAutoAssignRules(JSON.parse(savedRules));
    }
  }, [configAgents, configCannedResponses, configSlaPolicies, configTickets]);

  useEffect(() => {
    localStorage.setItem('supportTickets', JSON.stringify(tickets));
    localStorage.setItem('supportAgents', JSON.stringify(agents));
    localStorage.setItem('cannedResponses', JSON.stringify(cannedResponses));
    localStorage.setItem('slaPolicies', JSON.stringify(slaPolicies));
    updateStats();
    checkSlaBreaches();
  }, [agents, cannedResponses, checkSlaBreaches, slaPolicies, tickets, updateStats]);

  // Auto-assign ticket based on category and round-robin
  const autoAssignTicket = (category) => {
    const categoryConfig = categories.find(c => c.id === category);
    if (categoryConfig?.routing) {
      return categoryConfig.routing;
    }

    // Round-robin assignment
    const availableAgents = agents.filter(a => a.online);
    if (availableAgents.length === 0) return null;

    const lastAssigned = localStorage.getItem('lastAssignedAgent');
    const nextIndex = (availableAgents.findIndex(a => a.id === lastAssigned) + 1) % availableAgents.length;
    const assignedAgent = availableAgents[nextIndex];
    localStorage.setItem('lastAssignedAgent', assignedAgent.id);
    return assignedAgent.id;
  };

  // Check SLA breaches
  const checkSlaBreaches = useMemo(() => () => {
    const breaches = [];
    const now = new Date();

    tickets.forEach(ticket => {
      if (ticket.status === 'resolved' || ticket.status === 'closed') return;

      const slaPolicy = slaPolicies.find(p => p.priority === ticket.priority);
      if (!slaPolicy) return;

      const createdTime = new Date(ticket.createdAt);
      const responseDeadline = new Date(createdTime.getTime() + slaPolicy.responseTime * 60 * 60 * 1000);
      const resolutionDeadline = new Date(createdTime.getTime() + slaPolicy.resolutionTime * 60 * 60 * 1000);

      const hasResponse = ticket.replies && ticket.replies.length > 0;
      const isResponseBreached = !hasResponse && now > responseDeadline;
      const isResolutionBreached = now > resolutionDeadline;

      if (isResponseBreached || isResolutionBreached) {
        breaches.push({
          ticketId: ticket.id,
          priority: ticket.priority,
          responseBreached: isResponseBreached,
          resolutionBreached: isResolutionBreached,
          responseDeadline,
          resolutionDeadline,
        });
      }
    });

    setSlaBreaches(breaches);
    setStats(prev => ({ ...prev, breachedSla: breaches.length }));
  }, [tickets, slaPolicies]);

  // Update statistics
  const updateStats = useMemo(() => () => {
    const open = tickets.filter(t => t.status === 'open').length;
    const inProgress = tickets.filter(t => t.status === 'in-progress').length;
    const resolved = tickets.filter(t => t.status === 'resolved').length;

    // Calculate average response time
    const responseTimes = tickets
      .filter(t => t.firstResponseAt)
      .map(t => new Date(t.firstResponseAt) - new Date(t.createdAt));
    const avgResponseMs = responseTimes.length > 0
      ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length
      : 0;
    const avgResponseHours = (avgResponseMs / (1000 * 60 * 60)).toFixed(1);

    setStats({
      total: tickets.length,
      open,
      inProgress,
      resolved,
      avgResponseTime: `${avgResponseHours}h`,
      satisfaction: 4.8,
      breachedSla: slaBreaches.length,
    });
  }, [tickets, slaBreaches]);

  // Filter tickets
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

    if (selectedAssignee !== 'all') {
      filtered = filtered.filter(ticket => ticket.assignee === selectedAssignee);
    }

    if (activeTab !== 'all') {
      filtered = filtered.filter(ticket => ticket.status === activeTab);
    }

    setFilteredTickets(filtered);
  }, [tickets, searchQuery, selectedPriority, selectedStatus, selectedCategory, selectedAssignee, activeTab]);

  // Handle form input change
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
    } else if (name === 'cannedResponse') {
      const selected = cannedResponses.find(c => c.id === value);
      if (selected) {
        setReplyData(prev => ({
          ...prev,
          message: prev.message + (prev.message ? '\n\n' : '') + selected.content,
          cannedResponse: value,
        }));
      }
    } else {
      setReplyData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Create new ticket with auto-assignment
  const handleCreateTicket = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.description) newErrors.description = 'Description is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const assignedAgent = autoAssignTicket(formData.category);

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
      assignee: assignedAgent,
      replies: [],
      firstResponseAt: null,
      satisfaction: null,
    };

    setTickets(prev => [newTicket, ...prev]);
    setFormSubmitted(true);

    // Send automated acknowledgment
    setTimeout(() => {
      const acknowledgment = {
        id: Date.now(),
        message: `Thank you for contacting support. Your ticket #${newTicket.id} has been created and assigned to ${agents.find(a => a.id === assignedAgent)?.name || 'an agent'}. We will respond within ${priorities.find(p => p.id === formData.priority)?.sla} hours.`,
        attachments: [],
        isInternal: false,
        createdAt: new Date().toISOString(),
        author: 'System',
        authorType: 'system',
      };

      setTickets(prev => prev.map(ticket =>
        ticket.id === newTicket.id
          ? { ...ticket, replies: [acknowledgment, ...(ticket.replies || [])] }
          : ticket
      ));
    }, 500);

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
        assignee: '',
      });
    }, 3000);
  };

  // Add reply to ticket
  const handleAddReply = (e) => {
    e.preventDefault();
    if (!replyData.message.trim()) return;

    const isFirstResponse = !selectedTicket.firstResponseAt && !replyData.isInternal;

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
        ? {
          ...ticket,
          replies: [...(ticket.replies || []), newReply],
          updatedAt: new Date().toISOString(),
          firstResponseAt: isFirstResponse ? new Date().toISOString() : ticket.firstResponseAt,
          status: ticket.status === 'open' ? 'in-progress' : ticket.status,
        }
        : ticket
    ));

    setReplyData({ message: '', attachments: [], isInternal: false, cannedResponse: '' });
    setShowReplyModal(false);
  };

  // Update ticket status
  const updateTicketStatus = (ticketId, newStatus) => {
    setTickets(prev => prev.map(ticket =>
      ticket.id === ticketId
        ? { ...ticket, status: newStatus, updatedAt: new Date().toISOString() }
        : ticket
    ));
  };

  // Submit satisfaction survey
  const submitSurvey = () => {
    if (surveyData.rating === 0) return;

    setTickets(prev => prev.map(ticket =>
      ticket.id === selectedTicket?.id
        ? { ...ticket, satisfaction: surveyData.rating, satisfactionComment: surveyData.comment }
        : ticket
    ));

    setShowSurveyModal(false);
    setSurveyData({ rating: 0, comment: '' });
    alert('Thank you for your feedback!');
  };

  // Add canned response
  const addCannedResponse = () => {
    const newCanned = {
      id: `c${Date.now()}`,
      title: `New Response ${cannedResponses.length + 1}`,
      content: '',
      category: 'general',
    };
    setCannedResponses(prev => [...prev, newCanned]);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'low': return 'bg-gray-100 text-gray-700';
      case 'medium': return 'bg-blue-100 text-blue-700';
      case 'high': return 'bg-orange-100 text-orange-700';
      case 'urgent': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-700';
      case 'in-progress': return 'bg-yellow-100 text-yellow-700';
      case 'resolved': return 'bg-green-100 text-green-700';
      case 'closed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
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

  const getSlaStatus = (ticket) => {
    const slaPolicy = slaPolicies.find(p => p.priority === ticket.priority);
    if (!slaPolicy) return null;

    const createdTime = new Date(ticket.createdAt);
    const responseDeadline = new Date(createdTime.getTime() + slaPolicy.responseTime * 60 * 60 * 1000);
    const now = new Date();

    const hasResponse = ticket.replies && ticket.replies.length > 0;
    const isBreached = !hasResponse && now > responseDeadline;

    if (isBreached) {
      return { status: 'breached', deadline: responseDeadline, label: 'SLA Breached' };
    } else if (!hasResponse) {
      const hoursLeft = Math.max(0, Math.ceil((responseDeadline - now) / (1000 * 60 * 60)));
      return { status: 'warning', hoursLeft, label: `${hoursLeft}h left to respond` };
    }
    return { status: 'met', label: 'SLA Met' };
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

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Ticket System Center"
    >
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineTicket className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{config?.badge || "Ticket System"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Intelligent"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Ticket Management"}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">{config?.description || "SLA management, automated routing, canned responses, and customer satisfaction tracking."}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border text-center"><div className="text-2xl font-bold text-blue-600">{stats.total}</div><div className="text-xs text-gray-500">Total</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border text-center"><div className="text-2xl font-bold text-yellow-600">{stats.open}</div><div className="text-xs text-gray-500">Open</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border text-center"><div className="text-2xl font-bold text-orange-600">{stats.inProgress}</div><div className="text-xs text-gray-500">In Progress</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border text-center"><div className="text-2xl font-bold text-green-600">{stats.resolved}</div><div className="text-xs text-gray-500">Resolved</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border text-center"><div className="text-2xl font-bold text-purple-600">{stats.avgResponseTime}</div><div className="text-xs text-gray-500">Avg Response</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border text-center"><div className="text-2xl font-bold text-red-600">{stats.breachedSla}</div><div className="text-xs text-gray-500">SLA Breaches</div></div>
          </div>
        </div>

        {/* SLA Breaches Alert */}
        {slaBreaches.length > 0 && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <div className="flex items-center gap-2"><HiOutlineBell className="w-5 h-5 text-red-600" /><span className="font-semibold text-red-800 dark:text-red-300">SLA Alert: {slaBreaches.length} ticket(s) have breached SLA response time</span></div>
            <div className="mt-2 flex flex-wrap gap-2">{slaBreaches.slice(0, 3).map(breach => (<span key={breach.ticketId} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">{breach.ticketId} - {breach.responseBreached ? 'Response SLA' : 'Resolution SLA'}</span>))}</div>
          </div>
        )}

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md"><div className="absolute inset-y-0 left-0 pl-3 flex items-center"><HiOutlineSearch className="w-4 h-4 text-gray-400" /></div><input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search tickets..." className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" /></div>
          <div className="flex gap-2"><button onClick={() => setShowFilterModal(true)} className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 rounded-lg text-sm font-medium border flex items-center gap-2"><HiOutlineFilter className="w-4 h-4" />Filters</button><button onClick={() => setShowCannedModal(true)} className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 rounded-lg text-sm font-medium border flex items-center gap-2"><HiOutlineTemplate className="w-4 h-4" />Canned</button><button onClick={() => setShowSlaModal(true)} className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 rounded-lg text-sm font-medium border flex items-center gap-2"><HiOutlineClock className="w-4 h-4" />SLA</button><button onClick={() => setShowCreateModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2"><HiOutlinePlus className="w-4 h-4" />New Ticket</button></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 mb-6">
          {['all', 'open', 'in-progress', 'resolved', 'closed'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              {tab === 'all' ? 'All Tickets' : tab === 'in-progress' ? 'In Progress' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">{tab === 'all' ? tickets.length : tickets.filter(t => t.status === tab).length}</span>
            </button>
          ))}
        </div>

        {/* Tickets Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700 border-b">
                <tr><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ticket ID</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assignee</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SLA</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredTickets.length === 0 ? (<tr><td colSpan="8" className="px-6 py-12 text-center text-gray-500">No tickets found</td></tr>) : (
                  filteredTickets.map((ticket) => {
                    const slaStatus = getSlaStatus(ticket);
                    const assignee = agents.find(a => a.id === ticket.assignee);
                    return (
                      <tr key={ticket.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap"><button onClick={() => setSelectedTicket(ticket)} className="text-sm font-mono text-blue-600 hover:underline">{ticket.id}</button></td>
                        <td className="px-6 py-4"><div className="text-sm font-medium">{ticket.subject}</div><div className="text-xs text-gray-500">{ticket.description?.substring(0, 50)}...</div></td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(ticket.status)}`}>{ticket.status}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(ticket.priority)}`}>{ticket.priority}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className="text-sm">{assignee?.name || 'Unassigned'}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className={`text-xs px-2 py-1 rounded-full ${slaStatus?.status === 'breached' ? 'bg-red-100 text-red-700' : slaStatus?.status === 'warning' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{slaStatus?.label}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(ticket.createdAt)}</td>
                        <td className="px-6 py-4 whitespace-nowrap"><div className="flex gap-2"><button onClick={() => { setSelectedTicket(ticket); setShowReplyModal(true); }} className="p-1 text-blue-600 hover:bg-blue-50 rounded" title="Reply"><HiOutlineReply className="w-4 h-4" /></button><button onClick={() => updateTicketStatus(ticket.id, ticket.status === 'open' ? 'in-progress' : 'open')} className="p-1 text-yellow-600 hover:bg-yellow-50 rounded" title="Update"><HiOutlineRefresh className="w-4 h-4" /></button><button onClick={() => setSelectedTicket(ticket)} className="p-1 text-gray-600 hover:bg-gray-100 rounded" title="View"><HiOutlineEye className="w-4 h-4" /></button></div></td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Create Ticket Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowCreateModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Create New Ticket</h3><button onClick={() => setShowCreateModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                {formSubmitted ? (<div className="text-center py-8"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineCheckCircle className="w-8 h-8 text-green-600" /></div><h4 className="text-xl font-bold mb-2">Ticket Created!</h4><p className="text-gray-600">An acknowledgment has been sent to the customer.</p></div>) : (
                  <form onSubmit={handleCreateTicket} className="space-y-4">
                    <div><input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl ${errors.subject ? 'border-red-500' : 'border-gray-200'}`} /></div>
                    <div className="grid grid-cols-2 gap-3"><select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl">{categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}</select><select name="priority" value={formData.priority} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl"><option value="low">Low Priority</option><option value="medium">Medium Priority</option><option value="high">High Priority</option><option value="urgent">Urgent</option></select></div>
                    <div><textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Describe your issue *" rows="5" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none ${errors.description ? 'border-red-500' : 'border-gray-200'}`} /></div>
                    <div className="grid grid-cols-2 gap-3"><input type="text" name="contactName" value={formData.contactName} onChange={handleInputChange} placeholder="Your name" className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /><input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleInputChange} placeholder="Your email" className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /></div>
                    <div><label className="block text-sm text-gray-500 mb-1">Attachments</label><input type="file" multiple onChange={handleInputChange} ref={fileInputRef} className="w-full text-sm text-gray-500 file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700" /></div>
                    {formData.attachments.length > 0 && (<div className="flex flex-wrap gap-2">{formData.attachments.map((file, idx) => (<div key={idx} className="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded-lg text-sm"><HiOutlinePaperClip className="w-3 h-3" /><span>{file.name}</span><button type="button" onClick={() => removeAttachment(idx)} className="text-red-500"><HiOutlineX className="w-3 h-3" /></button></div>))}</div>)}
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">Submit Ticket</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Reply Modal with Canned Responses */}
        {showReplyModal && selectedTicket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowReplyModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-green-600 to-teal-600 p-4 sticky top-0"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Reply to #{selectedTicket.id}</h3><button onClick={() => setShowReplyModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                <div className="mb-4 p-3 bg-gray-50 rounded-lg"><p className="text-sm font-medium">{selectedTicket.subject}</p><p className="text-xs text-gray-500 mt-1">Priority: {selectedTicket.priority} | Assignee: {agents.find(a => a.id === selectedTicket.assignee)?.name || 'Unassigned'}</p></div>
                <form onSubmit={handleAddReply} className="space-y-4">
                  <div><select name="cannedResponse" value={replyData.cannedResponse} onChange={handleReplyChange} className="w-full px-4 py-2 bg-gray-50 border rounded-lg text-sm"><option value="">Insert canned response...</option>{cannedResponses.map(cr => (<option key={cr.id} value={cr.id}>{cr.title}</option>))}</select></div>
                  <div><textarea name="message" value={replyData.message} onChange={handleReplyChange} placeholder="Type your reply..." rows="5" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" /></div>
                  <div className="flex items-center gap-3"><label className="flex items-center gap-2"><input type="checkbox" name="isInternal" checked={replyData.isInternal} onChange={handleReplyChange} className="w-4 h-4" /><span className="text-sm text-gray-600">Internal note</span></label></div>
                  <div><label className="block text-sm text-gray-500 mb-1">Attachments</label><input type="file" multiple onChange={handleReplyChange} ref={replyFileInputRef} className="w-full text-sm text-gray-500 file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700" /></div>
                  {replyData.attachments.length > 0 && (<div className="flex flex-wrap gap-2">{replyData.attachments.map((file, idx) => (<div key={idx} className="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded-lg text-sm"><HiOutlinePaperClip className="w-3 h-3" /><span>{file.name}</span><button type="button" onClick={() => removeAttachment(idx, true)} className="text-red-500"><HiOutlineX className="w-3 h-3" /></button></div>))}</div>)}
                  <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold">Send Reply</button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Filter Modal */}
        {showFilterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowFilterModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 p-4"><div className="flex items-center justify-between"><h3 className="font-bold">Filter Tickets</h3><button onClick={() => setShowFilterModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div>
              <div className="p-6 space-y-4">
                <div><label className="block text-sm font-medium mb-1">Priority</label><select value={selectedPriority} onChange={(e) => setSelectedPriority(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg"><option value="all">All</option><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option><option value="urgent">Urgent</option></select></div>
                <div><label className="block text-sm font-medium mb-1">Status</label><select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg"><option value="all">All</option><option value="open">Open</option><option value="in-progress">In Progress</option><option value="resolved">Resolved</option><option value="closed">Closed</option></select></div>
                <div><label className="block text-sm font-medium mb-1">Category</label><select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg"><option value="all">All</option>{categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}</select></div>
                <div><label className="block text-sm font-medium mb-1">Assignee</label><select value={selectedAssignee} onChange={(e) => setSelectedAssignee(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg"><option value="all">All</option><option value="unassigned">Unassigned</option>{agents.map(agent => <option key={agent.id} value={agent.id}>{agent.name}</option>)}</select></div>
                <div className="flex gap-2 pt-2"><button onClick={() => { setSelectedPriority('all'); setSelectedStatus('all'); setSelectedCategory('all'); setSelectedAssignee('all'); }} className="flex-1 px-4 py-2 bg-gray-100 rounded-lg">Reset</button><button onClick={() => setShowFilterModal(false)} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg">Apply</button></div>
              </div>
            </div>
          </div>
        )}

        {/* Canned Responses Modal */}
        {showCannedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCannedModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-purple-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Canned Responses</h3><button onClick={() => setShowCannedModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 max-h-96 overflow-y-auto">
                <button onClick={addCannedResponse} className="w-full mb-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"><HiOutlinePlus className="w-4 h-4" />Add New</button>
                <div className="space-y-3">{cannedResponses.map((cr) => (<div key={cr.id} className="p-3 bg-gray-50 rounded-lg"><div className="flex items-center justify-between"><p className="font-medium text-sm">{cr.title}</p><button onClick={() => { setReplyData(prev => ({ ...prev, message: prev.message + (prev.message ? '\n\n' : '') + cr.content, cannedResponse: cr.id })); setShowCannedModal(false); }} className="text-xs text-blue-600">Insert</button></div><p className="text-xs text-gray-500 mt-1">{cr.content.substring(0, 100)}...</p></div>))}</div>
              </div>
            </div>
          </div>
        )}

        {/* SLA Policies Modal */}
        {showSlaModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSlaModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-orange-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">SLA Policies</h3><button onClick={() => setShowSlaModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><div className="space-y-3">{slaPolicies.map((sla) => (<div key={sla.id} className="p-3 bg-gray-50 rounded-lg"><div className="flex items-center justify-between"><span className="font-medium capitalize">{sla.priority}</span><span className="text-xs text-gray-500">Response: {sla.responseTime}h</span></div><p className="text-xs text-gray-500 mt-1">Resolution SLA: {sla.resolutionTime} hours</p></div>))}</div></div>
            </div>
          </div>
        )}

        {/* Ticket Details Modal */}
        {selectedTicket && !showReplyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setSelectedTicket(null)}>
            <div className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Ticket #{selectedTicket.id}</h3><button onClick={() => setSelectedTicket(null)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4"><h2 className="text-xl font-bold">{selectedTicket.subject}</h2><div className="flex gap-2"><span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedTicket.status)}`}>{selectedTicket.status}</span><span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(selectedTicket.priority)}`}>{selectedTicket.priority}</span></div></div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span>Created: {formatDateTime(selectedTicket.createdAt)}</span><span>Assignee: {agents.find(a => a.id === selectedTicket.assignee)?.name || 'Unassigned'}</span><span>SLA: {getSlaStatus(selectedTicket)?.label}</span></div>
                {selectedTicket.satisfaction && (<div className="mb-4 p-3 bg-yellow-50 rounded-lg flex items-center gap-2"><HiOutlineStar className="w-5 h-5 text-yellow-500" /><span>Customer Satisfaction: {selectedTicket.satisfaction}/5</span>{selectedTicket.satisfactionComment && <span className="text-sm text-gray-600">- {selectedTicket.satisfactionComment}</span>}</div>)}
                <div className="p-4 bg-gray-50 rounded-xl mb-4"><p className="text-gray-700 whitespace-pre-wrap">{selectedTicket.description}</p>{selectedTicket.attachments?.length > 0 && (<div className="mt-3 flex gap-2">{selectedTicket.attachments.map((att, idx) => (<div key={idx} className="flex items-center gap-1 text-xs text-blue-600"><HiOutlinePaperClip className="w-3 h-3" /><span>{att}</span></div>))}</div>)}</div>
                <div className="mb-4"><h4 className="font-semibold mb-3">Conversation History</h4><div className="space-y-3">{selectedTicket.replies?.length === 0 ? (<p className="text-sm text-gray-500">No replies yet.</p>) : (selectedTicket.replies.map((reply) => (<div key={reply.id} className={`p-3 rounded-lg ${reply.isInternal ? 'bg-yellow-50 border-l-4 border-yellow-500' : reply.authorType === 'system' ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-gray-50'}`}><div className="flex items-center justify-between mb-2"><span className="text-sm font-medium">{reply.author}</span><span className="text-xs text-gray-500">{formatDateTime(reply.createdAt)}</span></div><p className="text-sm text-gray-700 whitespace-pre-wrap">{reply.message}</p>{reply.isInternal && <p className="text-xs text-yellow-600 mt-1">Internal note</p>}</div>)))}</div></div>
                <div className="flex gap-3 pt-4 border-t"><button onClick={() => { setShowReplyModal(true); }} className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-semibold">Reply to Ticket</button><button onClick={() => updateTicketStatus(selectedTicket.id, selectedTicket.status === 'open' ? 'in-progress' : 'open')} className="px-4 py-2 bg-gray-100 rounded-lg">Update Status</button>{selectedTicket.status === 'resolved' && !selectedTicket.satisfaction && (<button onClick={() => setShowSurveyModal(true)} className="px-4 py-2 bg-yellow-500 text-white rounded-lg">Request Feedback</button>)}</div>
              </div>
            </div>
          </div>
        )}

        {/* Satisfaction Survey Modal */}
        {showSurveyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSurveyModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-yellow-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Customer Satisfaction</h3><button onClick={() => setShowSurveyModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><p className="text-sm text-gray-600 mb-4">How would you rate your support experience?</p><div className="flex justify-center gap-2 mb-4">{[1, 2, 3, 4, 5].map(star => (<button key={star} onClick={() => setSurveyData(prev => ({ ...prev, rating: star }))} className={`text-3xl transition-all ${surveyData.rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}>★</button>))}</div><textarea value={surveyData.comment} onChange={(e) => setSurveyData(prev => ({ ...prev, comment: e.target.value }))} placeholder="Any additional feedback?" rows="3" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" /><button onClick={submitSurvey} disabled={surveyData.rating === 0} className="w-full mt-4 py-3 bg-yellow-600 text-white rounded-xl font-semibold disabled:opacity-50">Submit Feedback</button></div>
            </div>
          </div>
        )}
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

export default TicketSystemSection2;