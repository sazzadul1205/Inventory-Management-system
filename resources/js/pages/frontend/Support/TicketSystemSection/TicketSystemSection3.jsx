// page/frontend/Support/TicketSystemSection/TicketSystemSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import { AiOutlineRobot as HiOutlineRobot, } from "react-icons/ai";
import {
  HiOutlinePlus,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineX,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineChat,
  HiOutlinePaperClip,
  HiOutlineEye,
  HiOutlineReply,
  HiOutlineStar,
  HiOutlineRefresh,
  HiOutlineEmojiHappy,
  HiOutlineBell,
  HiOutlineThumbDown,
  HiOutlineCog,
  HiOutlineTemplate,
} from 'react-icons/hi';

const TicketSystemSection3 = ({ config }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSlaModal, setShowSlaModal] = useState(false);
  const [showCannedModal, setShowCannedModal] = useState(false);
  const [showSurveyModal, setShowSurveyModal] = useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [showWorkflowModal, setShowWorkflowModal] = useState(false);
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
  const [workflows, setWorkflows] = useState([]);
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
    aiAccuracy: 94,
  });
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [slaBreaches, setSlaBreaches] = useState([]);
  const [analyticsData, setAnalyticsData] = useState({
    ticketsByDay: [],
    topCategories: [],
    agentPerformance: [],
    responseTrends: [],
  });
  const fileInputRef = useRef(null);
  const replyFileInputRef = useRef(null);

  // Get data from config
  const configTickets = useMemo(() => config?.tickets || [], [config]);

  const configAgents = useMemo(() => config?.agents || [
    { id: 'agent1', name: 'Sarah Johnson', role: 'Senior Support Specialist', avatar: null, skills: ['technical', 'billing'], online: true, efficiency: 92 },
    { id: 'agent2', name: 'Michael Chen', role: 'Support Engineer', avatar: null, skills: ['technical', 'api'], online: true, efficiency: 88 },
    { id: 'agent3', name: 'Emily Rodriguez', role: 'Customer Success Manager', avatar: null, skills: ['account', 'billing'], online: false, efficiency: 95 },
  ], [config]);

  const configCannedResponses = useMemo(() => config?.cannedResponses || [
    { id: 'c1', title: 'Welcome Message', content: 'Thank you for contacting support. We will review your request and get back to you shortly.', category: 'general', usageCount: 156 },
    { id: 'c2', title: 'Password Reset', content: 'To reset your password, please click on "Forgot Password" on the login page. You will receive an email with reset instructions.', category: 'account', usageCount: 89 },
    { id: 'c3', title: 'API Key Generation', content: 'You can generate API keys in your account settings under "Developer Settings". Please ensure you have the necessary permissions.', category: 'technical', usageCount: 234 },
    { id: 'c4', title: 'Billing Inquiry', content: 'For billing inquiries, please visit your account billing page or contact our finance team at finance@example.com.', category: 'billing', usageCount: 67 },
  ], [config]);

  const configSlaPolicies = useMemo(() => config?.slaPolicies || [
    { id: 'sla1', priority: 'urgent', responseTime: 1, resolutionTime: 4, unit: 'hours' },
    { id: 'sla2', priority: 'high', responseTime: 4, resolutionTime: 8, unit: 'hours' },
    { id: 'sla3', priority: 'medium', responseTime: 24, resolutionTime: 48, unit: 'hours' },
    { id: 'sla4', priority: 'low', responseTime: 48, resolutionTime: 72, unit: 'hours' },
  ], [config]);

  const configWorkflows = useMemo(() => config?.workflows || [
    { id: 'w1', name: 'High Priority Escalation', trigger: 'priority = urgent', action: 'assign_to_manager', enabled: true },
    { id: 'w2', name: 'Auto-Close Resolved', trigger: 'status = resolved for 3 days', action: 'close_ticket', enabled: true },
    { id: 'w3', name: 'Spam Detection', trigger: 'contains spam keywords', action: 'mark_as_spam', enabled: true },
  ], [config]);

  const categories = useMemo(() => config?.categories || [
    { id: 'general', name: 'General Inquiry', icon: 'chat', routing: 'agent1', keywords: ['help', 'question', 'how to'] },
    { id: 'technical', name: 'Technical Issue', icon: 'chip', routing: 'agent2', keywords: ['error', 'bug', 'crash', 'not working'] },
    { id: 'billing', name: 'Billing Question', icon: 'cash', routing: 'agent3', keywords: ['invoice', 'payment', 'refund', 'charge'] },
    { id: 'feature', name: 'Feature Request', icon: 'star', routing: 'agent1', keywords: ['suggest', 'idea', 'improve'] },
    { id: 'account', name: 'Account Management', icon: 'user', routing: 'agent3', keywords: ['login', 'password', 'profile'] },
  ], [config]);

  // AI Ticket Classification
  const classifyTicket = useCallback((subject, description) => {
    const text = `${subject} ${description}`.toLowerCase();

    // Predict category based on keywords
    let bestCategory = 'general';
    let maxScore = 0;
    categories.forEach(cat => {
      let score = 0;
      cat.keywords?.forEach(keyword => {
        if (text.includes(keyword)) score += 10;
      });
      if (score > maxScore) {
        maxScore = score;
        bestCategory = cat.id;
      }
    });

    // Predict priority based on urgency words
    let priorityScore = 1;
    const urgentWords = ['urgent', 'asap', 'critical', 'emergency', 'immediately'];
    const highWords = ['high', 'important', 'serious', 'major'];

    urgentWords.forEach(word => {
      if (text.includes(word)) priorityScore = Math.max(priorityScore, 4);
    });
    highWords.forEach(word => {
      if (text.includes(word)) priorityScore = Math.max(priorityScore, 3);
    });

    let predictedPriority = 'medium';
    if (priorityScore >= 4) predictedPriority = 'urgent';
    else if (priorityScore >= 3) predictedPriority = 'high';
    else if (priorityScore >= 2) predictedPriority = 'medium';
    else predictedPriority = 'low';

    // Sentiment analysis
    let sentiment = 'neutral';
    const positiveWords = ['great', 'good', 'awesome', 'love', 'thanks', 'appreciate'];
    const negativeWords = ['bad', 'terrible', 'awful', 'frustrated', 'angry', 'disappointed'];

    let positiveScore = 0, negativeScore = 0;
    positiveWords.forEach(word => { if (text.includes(word)) positiveScore++; });
    negativeWords.forEach(word => { if (text.includes(word)) negativeScore++; });

    if (positiveScore > negativeScore) sentiment = 'positive';
    else if (negativeScore > positiveScore) sentiment = 'negative';

    return { category: bestCategory, priority: predictedPriority, sentiment, confidence: maxScore > 0 ? 75 + Math.min(maxScore, 25) : 65 };
  }, [categories]);

  // AI Predictive Routing
  const predictBestAgent = useCallback((category, priority, sentiment) => {
    const categoryConfig = categories.find(c => c.id === category);
    let bestAgent = categoryConfig?.routing || 'agent1';

    // Override based on priority and sentiment
    if (priority === 'urgent' || sentiment === 'negative') {
      const availableAgents = agents.filter(a => a.online);
      if (availableAgents.length > 0) {
        // Find agent with highest efficiency for urgent tickets
        bestAgent = availableAgents.sort((a, b) => b.efficiency - a.efficiency)[0].id;
      }
    }

    return bestAgent;
  }, [agents, categories]);

  // AI Response Suggestions
  const generateAiResponse = useCallback((ticket) => {
    const suggestions = [];

    if (ticket.priority === 'urgent') {
      suggestions.push("I understand this is urgent. I'm prioritizing your request and will escalate it to our senior team immediately.");
    }

    if (ticket.category === 'technical') {
      suggestions.push("Could you please provide any error messages or screenshots? This will help me troubleshoot more effectively.");
    }

    if (ticket.category === 'billing') {
      suggestions.push("I've reviewed your billing information. Could you please confirm your account details so I can look into this for you?");
    }

    if (ticket.sentiment === 'negative') {
      suggestions.push("I apologize for the inconvenience you're experiencing. Let me work on resolving this for you as quickly as possible.");
    }

    return suggestions;
  }, []);

  // Initialize tickets and apply AI classification to new tickets
  useEffect(() => {
    const savedTickets = localStorage.getItem('supportTickets');
    if (savedTickets && JSON.parse(savedTickets).length > 0) {
      setTickets(JSON.parse(savedTickets));
    } else {
      // Apply AI classification to existing config tickets
      const classifiedTickets = configTickets.map(ticket => {
        const aiClassification = classifyTicket(ticket.subject, ticket.description);
        return { ...ticket, ...aiClassification, predictedAssignee: predictBestAgent(aiClassification.category, aiClassification.priority, aiClassification.sentiment) };
      });
      setTickets(classifiedTickets);
    }

    const savedAgents = localStorage.getItem('supportAgents');
    if (savedAgents) setAgents(JSON.parse(savedAgents));
    else setAgents(configAgents);

    const savedCanned = localStorage.getItem('cannedResponses');
    if (savedCanned) setCannedResponses(JSON.parse(savedCanned));
    else setCannedResponses(configCannedResponses);

    const savedSla = localStorage.getItem('slaPolicies');
    if (savedSla) setSlaPolicies(JSON.parse(savedSla));
    else setSlaPolicies(configSlaPolicies);

    const savedWorkflows = localStorage.getItem('workflows');
    if (savedWorkflows) setWorkflows(JSON.parse(savedWorkflows));
    else setWorkflows(configWorkflows);
  }, [classifyTicket, configAgents, configCannedResponses, configSlaPolicies, configTickets, configWorkflows, predictBestAgent]);

  useEffect(() => {
    localStorage.setItem('supportTickets', JSON.stringify(tickets));
    localStorage.setItem('supportAgents', JSON.stringify(agents));
    localStorage.setItem('cannedResponses', JSON.stringify(cannedResponses));
    localStorage.setItem('slaPolicies', JSON.stringify(slaPolicies));
    localStorage.setItem('workflows', JSON.stringify(workflows));
    updateStats();
    checkSlaBreaches();
    updateAnalytics();
  }, [agents, cannedResponses, checkSlaBreaches, slaPolicies, tickets, updateAnalytics, updateStats, workflows]);

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
  }, [slaPolicies, tickets]);

  // Update analytics
  const updateAnalytics = useMemo(() => () => {
    // Tickets by day (last 7 days)
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toISOString().split('T')[0];
    }).reverse();

    const ticketsByDay = last7Days.map(day => ({
      date: day,
      count: tickets.filter(t => t.createdAt?.startsWith(day)).length,
    }));

    // Top categories
    const categoryCount = {};
    tickets.forEach(t => {
      categoryCount[t.category] = (categoryCount[t.category] || 0) + 1;
    });
    const topCategories = Object.entries(categoryCount).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);

    // Agent performance
    const agentPerformance = agents.map(agent => {
      const agentTickets = tickets.filter(t => t.assignee === agent.id);
      const resolvedTickets = agentTickets.filter(t => t.status === 'resolved');
      const avgResponse = agentTickets.filter(t => t.firstResponseAt).reduce((acc, t) => {
        return acc + (new Date(t.firstResponseAt) - new Date(t.createdAt));
      }, 0) / (agentTickets.filter(t => t.firstResponseAt).length || 1);

      return {
        name: agent.name,
        resolved: resolvedTickets.length,
        total: agentTickets.length,
        avgResponseTime: Math.round(avgResponse / (1000 * 60 * 60) * 10) / 10,
        satisfaction: agentTickets.reduce((acc, t) => acc + (t.satisfaction || 0), 0) / (agentTickets.length || 1),
      };
    });

    setAnalyticsData({ ticketsByDay, topCategories, agentPerformance, responseTrends: ticketsByDay });
  }, [agents, tickets]);

  // Update statistics
  const updateStats = useMemo(() => () => {
    const open = tickets.filter(t => t.status === 'open').length;
    const inProgress = tickets.filter(t => t.status === 'in-progress').length;
    const resolved = tickets.filter(t => t.status === 'resolved').length;

    const responseTimes = tickets
      .filter(t => t.firstResponseAt)
      .map(t => new Date(t.firstResponseAt) - new Date(t.createdAt));
    const avgResponseMs = responseTimes.length > 0 ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length : 0;
    const avgResponseHours = (avgResponseMs / (1000 * 60 * 60)).toFixed(1);

    setStats(prev => ({
      ...prev,
      total: tickets.length,
      open,
      inProgress,
      resolved,
      avgResponseTime: `${avgResponseHours}h`,
      breachedSla: slaBreaches.length,
    }));
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

    if (selectedPriority !== 'all') filtered = filtered.filter(ticket => ticket.priority === selectedPriority);
    if (selectedStatus !== 'all') filtered = filtered.filter(ticket => ticket.status === selectedStatus);
    if (selectedCategory !== 'all') filtered = filtered.filter(ticket => ticket.category === selectedCategory);
    if (selectedAssignee !== 'all') filtered = filtered.filter(ticket => ticket.assignee === selectedAssignee);
    if (activeTab !== 'all') filtered = filtered.filter(ticket => ticket.status === activeTab);

    setFilteredTickets(filtered);
  }, [tickets, searchQuery, selectedPriority, selectedStatus, selectedCategory, selectedAssignee, activeTab]);

  // Handle form input
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

  // Create ticket with AI classification
  const handleCreateTicket = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.description) newErrors.description = 'Description is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const aiClassification = classifyTicket(formData.subject, formData.description);
    const predictedAssignee = predictBestAgent(aiClassification.category, aiClassification.priority, aiClassification.sentiment);

    const newTicket = {
      id: `TKT-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
      subject: formData.subject,
      category: aiClassification.category,
      priority: aiClassification.priority,
      description: formData.description,
      status: 'open',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      attachments: formData.attachments.map(f => f.name),
      contactEmail: formData.contactEmail,
      contactName: formData.contactName,
      assignee: predictedAssignee,
      replies: [],
      firstResponseAt: null,
      satisfaction: null,
      aiConfidence: aiClassification.confidence,
      sentiment: aiClassification.sentiment,
    };

    setTickets(prev => [newTicket, ...prev]);
    setFormSubmitted(true);

    // Auto-reply with AI-generated response
    setTimeout(() => {
      const aiSuggestions = generateAiResponse(newTicket);
      const autoReply = aiSuggestions[0] || "Thank you for contacting support. Our team will review your request and respond shortly.";

      const acknowledgment = {
        id: Date.now(),
        message: autoReply,
        attachments: [],
        isInternal: false,
        createdAt: new Date().toISOString(),
        author: 'AI Assistant',
        authorType: 'ai',
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

  // Add reply with AI assistance
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

  // AI-Powered Auto-Resolution
  const autoResolveTicket = useCallback((ticketId) => {
    const ticket = tickets.find(t => t.id === ticketId);
    if (!ticket) return;

    // Check if ticket can be auto-resolved (e.g., known issue with solution)
    const knownIssues = [
      { pattern: /password reset/i, resolution: "Password reset instructions have been sent to the user's email." },
      { pattern: /api key/i, resolution: "API key generation guide has been sent to the user." },
    ];

    for (const issue of knownIssues) {
      if (issue.pattern.test(ticket.description)) {
        const resolutionReply = {
          id: Date.now(),
          message: issue.resolution,
          attachments: [],
          isInternal: false,
          createdAt: new Date().toISOString(),
          author: 'AI Auto-Resolver',
          authorType: 'ai',
        };

        setTickets(prev => prev.map(t =>
          t.id === ticketId
            ? { ...t, replies: [...(t.replies || []), resolutionReply], status: 'resolved', updatedAt: new Date().toISOString() }
            : t
        ));
        return true;
      }
    }
    return false;
  }, [tickets]);

  const updateTicketStatus = (ticketId, newStatus) => {
    setTickets(prev => prev.map(ticket =>
      ticket.id === ticketId
        ? { ...ticket, status: newStatus, updatedAt: new Date().toISOString() }
        : ticket
    ));
  };

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

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'positive': return <HiOutlineEmojiHappy className="w-4 h-4 text-green-500" />;
      case 'negative': return <HiOutlineThumbDown className="w-4 h-4 text-red-500" />;
      default: return <HiOutlineEmojiHappy className="w-4 h-4 text-gray-400" />;
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

    if (isBreached) return { status: 'breached', label: 'SLA Breached' };
    else if (!hasResponse) {
      const hoursLeft = Math.max(0, Math.ceil((responseDeadline - now) / (1000 * 60 * 60)));
      return { status: 'warning', label: `${hoursLeft}h left` };
    }
    return { status: 'met', label: 'SLA Met' };
  };

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden" role="region" aria-label="Ticket System Premium Hub">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="circuit-pattern-ts" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" /><circle cx="20" cy="20" r="2" fill="#9CA3AF" /><circle cx="80" cy="20" r="2" fill="#9CA3AF" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-ts)" />
        </svg>
      </div>

      {/* AI Insights Widget */}
      <div className="fixed top-20 right-4 z-40 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border p-3 min-w-48">
        <div className="flex items-center gap-2 mb-2"><HiOutlineRobot className="w-4 h-4 text-purple-600" /><span className="text-xs font-semibold text-purple-600">AI Insights</span></div>
        <p className="text-xs text-gray-600">AI Accuracy: {stats.aiAccuracy}%</p>
        <p className="text-xs text-gray-600 mt-1">Auto-resolved: {tickets.filter(t => t.replies?.some(r => r.authorType === 'ai')).length}</p>
        <button onClick={() => setShowAnalyticsModal(true)} className="mt-2 text-xs text-blue-600 hover:underline w-full text-center">View Analytics →</button>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
              <HiOutlineRobot className="w-4 h-4" />
              <span className="text-sm font-medium">{config?.badge || "AI-Powered Support"}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              {config?.title?.prefix || "Intelligent"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Ticket Management"}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">{config?.description || "AI-powered classification, sentiment analysis, predictive routing, and automated workflows for enterprise support."}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-blue-600">{stats.total}</div><div className="text-xs text-gray-500">Total</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-yellow-600">{stats.open}</div><div className="text-xs text-gray-500">Open</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-orange-600">{stats.inProgress}</div><div className="text-xs text-gray-500">Progress</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-green-600">{stats.resolved}</div><div className="text-xs text-gray-500">Resolved</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-purple-600">{stats.avgResponseTime}</div><div className="text-xs text-gray-500">Response</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-red-600">{stats.breachedSla}</div><div className="text-xs text-gray-500">SLA Breach</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-teal-600">{stats.aiAccuracy}%</div><div className="text-xs text-gray-500">AI Accuracy</div></div>
          </div>
        </div>

        {/* SLA Breaches Alert */}
        {slaBreaches.length > 0 && (<div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-xl"><div className="flex items-center gap-2"><HiOutlineBell className="w-5 h-5 text-red-600" /><span className="font-semibold text-red-800">SLA Alert: {slaBreaches.length} ticket(s) have breached SLA</span></div></div>)}

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md"><div className="absolute inset-y-0 left-0 pl-3 flex items-center"><HiOutlineSearch className="w-4 h-4 text-gray-400" /></div><input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="AI-powered search..." className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" /></div>
          <div className="flex gap-2"><button onClick={() => setShowFilterModal(true)} className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 rounded-lg text-sm font-medium border flex items-center gap-2"><HiOutlineFilter className="w-4 h-4" />Filters</button><button onClick={() => setShowCannedModal(true)} className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 rounded-lg text-sm font-medium border flex items-center gap-2"><HiOutlineTemplate className="w-4 h-4" />Canned</button><button onClick={() => setShowSlaModal(true)} className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 rounded-lg text-sm font-medium border flex items-center gap-2"><HiOutlineClock className="w-4 h-4" />SLA</button><button onClick={() => setShowWorkflowModal(true)} className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 rounded-lg text-sm font-medium border flex items-center gap-2"><HiOutlineCog className="w-4 h-4" />Workflows</button><button onClick={() => setShowCreateModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2"><HiOutlinePlus className="w-4 h-4" />New Ticket</button></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 mb-6">
          {['all', 'open', 'in-progress', 'resolved', 'closed'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}>
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
                <tr><th className="px-6 py-3 text-left text-xs font-medium text-gray-500">ID</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Subject / AI Classification</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Status</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Priority</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Sentiment</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Assignee</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500">SLA</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Created</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Actions</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTickets.length === 0 ? (<tr><td colSpan="9" className="px-6 py-12 text-center text-gray-500">No tickets found</td></tr>) : (
                  filteredTickets.map((ticket) => {
                    const slaStatus = getSlaStatus(ticket);
                    const assignee = agents.find(a => a.id === ticket.assignee);
                    return (
                      <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap"><button onClick={() => setSelectedTicket(ticket)} className="text-sm font-mono text-blue-600 hover:underline">{ticket.id}</button></td>
                        <td className="px-6 py-4"><div className="text-sm font-medium">{ticket.subject}</div><div className="flex items-center gap-2 mt-1"><span className="text-xs bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">AI: {ticket.category}</span><span className="text-xs text-gray-400">Confidence: {ticket.aiConfidence}%</span></div></td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(ticket.status)}`}>{ticket.status}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(ticket.priority)}`}>{ticket.priority}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap"><div className="flex items-center gap-1">{getSentimentIcon(ticket.sentiment)}<span className="text-sm capitalize">{ticket.sentiment}</span></div></td>
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

        {/* Create Ticket Modal with AI Classification */}
        {showCreateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowCreateModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Create New Ticket (AI-Powered)</h3><button onClick={() => setShowCreateModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                {formSubmitted ? (<div className="text-center py-8"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineCheckCircle className="w-8 h-8 text-green-600" /></div><h4 className="text-xl font-bold mb-2">Ticket Created!</h4><p className="text-gray-600">AI has classified and routed this ticket.</p></div>) : (
                  <form onSubmit={handleCreateTicket} className="space-y-4">
                    <div><input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl ${errors.subject ? 'border-red-500' : 'border-gray-200'}`} /></div>
                    <div><textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Describe your issue *" rows="5" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none ${errors.description ? 'border-red-500' : 'border-gray-200'}`} /></div>
                    <div className="grid grid-cols-2 gap-3"><input type="text" name="contactName" value={formData.contactName} onChange={handleInputChange} placeholder="Your name" className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /><input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleInputChange} placeholder="Your email" className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /></div>
                    <div><label className="block text-sm text-gray-500 mb-1">Attachments</label><input type="file" multiple onChange={handleInputChange} ref={fileInputRef} className="w-full text-sm text-gray-500 file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700" /></div>
                    <div className="p-3 bg-purple-50 rounded-lg"><p className="text-sm font-medium flex items-center gap-2"><HiOutlineRobot className="w-4 h-4 text-purple-600" />AI will classify and route this ticket</p></div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">Submit Ticket (AI-Powered)</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Reply Modal with AI Suggestions */}
        {showReplyModal && selectedTicket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowReplyModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-green-600 to-teal-600 p-4 sticky top-0"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Reply to #{selectedTicket.id}</h3><button onClick={() => setShowReplyModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                <div className="mb-4 p-3 bg-gray-50 rounded-lg"><p className="text-sm font-medium">{selectedTicket.subject}</p><div className="flex items-center gap-2 mt-1"><span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">AI Classified: {selectedTicket.category}</span><span className="text-xs text-gray-500">Sentiment: {selectedTicket.sentiment}</span></div></div>
                {generateAiResponse(selectedTicket).length > 0 && (<div className="mb-4 p-3 bg-purple-50 rounded-lg"><p className="text-xs font-semibold text-purple-600 mb-2 flex items-center gap-1"><HiOutlineRobot className="w-3 h-3" />AI Suggested Responses</p><div className="flex flex-wrap gap-2">{generateAiResponse(selectedTicket).map((suggestion, idx) => (<button key={idx} onClick={() => setReplyData(prev => ({ ...prev, message: prev.message + (prev.message ? '\n\n' : '') + suggestion }))} className="text-xs bg-white border border-purple-200 rounded-full px-2 py-1 hover:bg-purple-50">{suggestion.substring(0, 50)}...</button>))}</div></div>)}
                <form onSubmit={handleAddReply} className="space-y-4">
                  <div><select name="cannedResponse" value={replyData.cannedResponse} onChange={handleReplyChange} className="w-full px-4 py-2 bg-gray-50 border rounded-lg text-sm"><option value="">Insert canned response...</option>{cannedResponses.map(cr => (<option key={cr.id} value={cr.id}>{cr.title} ({cr.usageCount} uses)</option>))}</select></div>
                  <div><textarea name="message" value={replyData.message} onChange={handleReplyChange} placeholder="Type your reply..." rows="5" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" /></div>
                  <div className="flex items-center gap-3"><label className="flex items-center gap-2"><input type="checkbox" name="isInternal" checked={replyData.isInternal} onChange={handleReplyChange} className="w-4 h-4" /><span className="text-sm text-gray-600">Internal note</span></label></div>
                  <div><label className="block text-sm text-gray-500 mb-1">Attachments</label><input type="file" multiple onChange={handleReplyChange} ref={replyFileInputRef} className="w-full text-sm text-gray-500 file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700" /></div>
                  <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold">Send Reply</button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Modal */}
        {showAnalyticsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowAnalyticsModal(false)}>
            <div className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-teal-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">AI Analytics Dashboard</h3><button onClick={() => setShowAnalyticsModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                <div className="mb-6"><h4 className="font-semibold mb-3">Tickets by Day</h4><div className="flex items-end gap-2 h-32">{analyticsData.ticketsByDay.map((day, idx) => (<div key={idx} className="flex-1 text-center"><div className="bg-blue-500 rounded-t" style={{ height: `${(day.count / Math.max(...analyticsData.ticketsByDay.map(d => d.count), 1)) * 100}px` }} /><span className="text-xs text-gray-500 mt-1">{day.date.slice(5)}</span></div>))}</div></div>
                <div className="grid md:grid-cols-2 gap-6"><div><h4 className="font-semibold mb-3">Top Categories</h4><div className="space-y-2">{analyticsData.topCategories.map((cat, idx) => (<div key={idx} className="flex items-center justify-between"><span className="text-sm">{cat.name}</span><span className="text-sm font-semibold">{cat.count}</span></div>))}</div></div><div><h4 className="font-semibold mb-3">Agent Performance</h4><div className="space-y-3">{analyticsData.agentPerformance.map((agent, idx) => (<div key={idx} className="p-2 bg-gray-50 rounded-lg"><div className="flex items-center justify-between"><span className="font-medium text-sm">{agent.name}</span><span className="text-xs text-green-600">{agent.resolved}/{agent.total} resolved</span></div><div className="flex items-center justify-between mt-1 text-xs text-gray-500"><span>Avg Response: {agent.avgResponseTime}h</span><span>Satisfaction: {agent.satisfaction?.toFixed(1)}★</span></div></div>))}</div></div></div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Modal */}
        {showFilterModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowFilterModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-gray-100 p-4"><div className="flex items-center justify-between"><h3 className="font-bold">Filter Tickets</h3><button onClick={() => setShowFilterModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div><div className="p-6 space-y-4"><div><label className="block text-sm font-medium mb-1">Priority</label><select value={selectedPriority} onChange={(e) => setSelectedPriority(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg"><option value="all">All</option><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option><option value="urgent">Urgent</option></select></div><div><label className="block text-sm font-medium mb-1">Status</label><select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg"><option value="all">All</option><option value="open">Open</option><option value="in-progress">In Progress</option><option value="resolved">Resolved</option><option value="closed">Closed</option></select></div><div><label className="block text-sm font-medium mb-1">Category</label><select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg"><option value="all">All</option>{categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}</select></div><div><label className="block text-sm font-medium mb-1">Assignee</label><select value={selectedAssignee} onChange={(e) => setSelectedAssignee(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg"><option value="all">All</option><option value="unassigned">Unassigned</option>{agents.map(agent => <option key={agent.id} value={agent.id}>{agent.name}</option>)}</select></div><div className="flex gap-2 pt-2"><button onClick={() => { setSelectedPriority('all'); setSelectedStatus('all'); setSelectedCategory('all'); setSelectedAssignee('all'); }} className="flex-1 px-4 py-2 bg-gray-100 rounded-lg">Reset</button><button onClick={() => setShowFilterModal(false)} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg">Apply</button></div></div></div></div>)}

        {/* Canned Responses Modal */}
        {showCannedModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCannedModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-purple-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Canned Responses</h3><button onClick={() => setShowCannedModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6 max-h-96 overflow-y-auto"><div className="space-y-3">{cannedResponses.map((cr) => (<div key={cr.id} className="p-3 bg-gray-50 rounded-lg"><div className="flex items-center justify-between"><p className="font-medium text-sm">{cr.title}</p><button onClick={() => { setReplyData(prev => ({ ...prev, message: prev.message + (prev.message ? '\n\n' : '') + cr.content, cannedResponse: cr.id })); setShowCannedModal(false); }} className="text-xs text-blue-600">Insert</button></div><p className="text-xs text-gray-500 mt-1">{cr.content.substring(0, 100)}...</p><p className="text-xs text-gray-400 mt-1">Used {cr.usageCount} times</p></div>))}</div></div></div></div>)}

        {/* SLA Policies Modal */}
        {showSlaModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSlaModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-orange-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">SLA Policies</h3><button onClick={() => setShowSlaModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><div className="space-y-3">{slaPolicies.map((sla) => (<div key={sla.id} className="p-3 bg-gray-50 rounded-lg"><div className="flex items-center justify-between"><span className="font-medium capitalize">{sla.priority}</span><span className="text-xs text-gray-500">Response: {sla.responseTime}h</span></div><p className="text-xs text-gray-500 mt-1">Resolution SLA: {sla.resolutionTime} hours</p></div>))}</div></div></div></div>)}

        {/* Workflows Modal */}
        {showWorkflowModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowWorkflowModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-indigo-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Automated Workflows</h3><button onClick={() => setShowWorkflowModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><div className="space-y-3">{workflows.map((wf) => (<div key={wf.id} className="p-3 bg-gray-50 rounded-lg"><div className="flex items-center justify-between"><span className="font-medium text-sm">{wf.name}</span><span className={`text-xs px-2 py-0.5 rounded-full ${wf.enabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{wf.enabled ? 'Enabled' : 'Disabled'}</span></div><p className="text-xs text-gray-500 mt-1">Trigger: {wf.trigger}</p><p className="text-xs text-gray-400">Action: {wf.action}</p></div>))}</div></div></div></div>)}

        {/* Ticket Details Modal */}
        {selectedTicket && !showReplyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setSelectedTicket(null)}>
            <div className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Ticket #{selectedTicket.id}</h3><button onClick={() => setSelectedTicket(null)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4"><h2 className="text-xl font-bold">{selectedTicket.subject}</h2><div className="flex gap-2"><span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedTicket.status)}`}>{selectedTicket.status}</span><span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(selectedTicket.priority)}`}>{selectedTicket.priority}</span></div></div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span>Created: {formatDateTime(selectedTicket.createdAt)}</span><span>AI Confidence: {selectedTicket.aiConfidence}%</span><span>Sentiment: {selectedTicket.sentiment}</span></div>
                {selectedTicket.satisfaction && (<div className="mb-4 p-3 bg-yellow-50 rounded-lg flex items-center gap-2"><HiOutlineStar className="w-5 h-5 text-yellow-500" /><span>Customer Satisfaction: {selectedTicket.satisfaction}/5</span></div>)}
                <div className="p-4 bg-gray-50 rounded-xl mb-4"><p className="text-gray-700 whitespace-pre-wrap">{selectedTicket.description}</p>{selectedTicket.attachments?.length > 0 && (<div className="mt-3 flex gap-2">{selectedTicket.attachments.map((att, idx) => (<div key={idx} className="flex items-center gap-1 text-xs text-blue-600"><HiOutlinePaperClip className="w-3 h-3" /><span>{att}</span></div>))}</div>)}</div>
                <div className="mb-4"><h4 className="font-semibold mb-3">Conversation History</h4><div className="space-y-3">{selectedTicket.replies?.length === 0 ? (<p className="text-sm text-gray-500">No replies yet.</p>) : (selectedTicket.replies.map((reply) => (<div key={reply.id} className={`p-3 rounded-lg ${reply.isInternal ? 'bg-yellow-50 border-l-4 border-yellow-500' : reply.authorType === 'ai' ? 'bg-purple-50 border-l-4 border-purple-500' : reply.authorType === 'system' ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-gray-50'}`}><div className="flex items-center justify-between mb-2"><span className="text-sm font-medium">{reply.author}</span><span className="text-xs text-gray-500">{formatDateTime(reply.createdAt)}</span></div><p className="text-sm text-gray-700 whitespace-pre-wrap">{reply.message}</p>{reply.authorType === 'ai' && <p className="text-xs text-purple-600 mt-1">AI-generated response</p>}</div>)))}</div></div>
                <div className="flex gap-3 pt-4 border-t"><button onClick={() => { setShowReplyModal(true); }} className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-semibold">Reply to Ticket</button><button onClick={() => updateTicketStatus(selectedTicket.id, selectedTicket.status === 'open' ? 'in-progress' : 'open')} className="px-4 py-2 bg-gray-100 rounded-lg">Update Status</button><button onClick={() => autoResolveTicket(selectedTicket.id)} className="px-4 py-2 bg-purple-600 text-white rounded-lg">AI Auto-Resolve</button></div>
              </div>
            </div>
          </div>
        )}

        {/* Satisfaction Survey Modal */}
        {showSurveyModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSurveyModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-yellow-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Customer Satisfaction</h3><button onClick={() => setShowSurveyModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><p className="text-sm text-gray-600 mb-4">How would you rate your support experience?</p><div className="flex justify-center gap-2 mb-4">{[1, 2, 3, 4, 5].map(star => (<button key={star} onClick={() => setSurveyData(prev => ({ ...prev, rating: star }))} className={`text-3xl transition-all ${surveyData.rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}>★</button>))}</div><textarea value={surveyData.comment} onChange={(e) => setSurveyData(prev => ({ ...prev, comment: e.target.value }))} placeholder="Any additional feedback?" rows="3" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" /><button onClick={submitSurvey} disabled={surveyData.rating === 0} className="w-full mt-4 py-3 bg-yellow-600 text-white rounded-xl font-semibold disabled:opacity-50">Submit Feedback</button></div></div></div>)}

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"><HiOutlineRobot className="w-12 h-12 mx-auto mb-4" /><h3 className="text-2xl md:text-3xl font-bold mb-4">Experience AI-Powered Support</h3><p className="text-blue-100 mb-6">Intelligent ticket classification, predictive routing, and automated workflows.</p><button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"><HiOutlineChat className="w-5 h-5" />Try AI Assistant</button></div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .bg-grid-white { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
      `}</style>
    </section>
  );
};

export default TicketSystemSection3;