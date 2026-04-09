// page/frontend/Events/EventCalendarSection/EventCalendarSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import { AiOutlineRobot as HiOutlineRobot } from "react-icons/ai";
import {
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineChartBar,
  HiOutlineMail,
  HiOutlineLink,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlinePencil,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineDownload as DownloadIcon,
} from 'react-icons/hi';

const EventCalendarSection3 = ({ config }) => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    time: '',
    endTime: '',
    timezone: 'America/New_York',
    category: '',
    type: '',
    priority: 'medium',
    color: '#3B82F6',
    location: { venue: '', city: '', country: '', virtualLink: '' },
    speaker: { name: '', title: '', company: '', email: '', bio: '' },
    resources: [],
    recurring: { isRecurring: false, frequency: 'weekly', interval: 1, endDate: '', daysOfWeek: [] },
    reminder: { enabled: true, minutes: 60, type: 'email' },
    capacity: { maxAttendees: '', currentWaitList: 0 },
    price: { amount: '', currency: 'USD', earlyBirdPrice: '', earlyBirdDeadline: '' },
    registrationLink: '',
    tags: [],
    status: 'published',
  });
  const [errors, setErrors] = useState({});
  const [currentView, setCurrentView] = useState('month');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [, setSelectedDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [waitListEntries, setWaitListEntries] = useState({});
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareEvent] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportFormat, setExportFormat] = useState('ica');
  const [draggedEvent, setDraggedEvent] = useState(null);
  const [dropTarget, setDropTarget] = useState(null);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [calendarViews] = useState(['personal', 'team', 'company']);
  const [activeCalendar, setActiveCalendar] = useState('personal');
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [analyticsData, setAnalyticsData] = useState({});
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [showAiModal, setShowAiModal] = useState(false);
  const modalRef = useRef(null);

  // Get data from config
  const configEvents = useMemo(() => config?.events || [], [config?.events]);
  const stats = config?.stats || [];

  // Initialize calendar events from config
  useEffect(() => {
    setCalendarEvents(configEvents);
  }, [configEvents]);

  // Get unique categories, types, and priorities
  const categories = useMemo(() => {
    const cats = new Set(calendarEvents.map(e => e.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [calendarEvents]);

  const eventTypes = useMemo(() => {
    const types = new Set(calendarEvents.map(e => e.type).filter(Boolean));
    return ['all', ...Array.from(types)];
  }, [calendarEvents]);

  const priorities = ['all', 'high', 'medium', 'low'];

  // Filter events based on search and filters
  const filteredEvents = useMemo(() => {
    return calendarEvents.filter((event) => {
      const matchesSearch = searchQuery === '' ||
        event.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location?.city?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      const matchesType = selectedType === 'all' || event.type === selectedType;
      const matchesPriority = selectedPriority === 'all' || event.priority === selectedPriority;

      return matchesSearch && matchesCategory && matchesType && matchesPriority;
    });
  }, [calendarEvents, searchQuery, selectedCategory, selectedType, selectedPriority]);

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('calendarRegisteredEvents');
    if (saved) setRegisteredEvents(JSON.parse(saved));

    const savedWaitList = localStorage.getItem('eventWaitList');
    if (savedWaitList) setWaitListEntries(JSON.parse(savedWaitList));

    const savedReminders = localStorage.getItem('eventReminders');
    if (savedReminders) checkReminders(JSON.parse(savedReminders));

    const savedAnalytics = localStorage.getItem('eventAnalytics');
    if (savedAnalytics) setAnalyticsData(JSON.parse(savedAnalytics));
  }, []);

  useEffect(() => {
    localStorage.setItem('calendarRegisteredEvents', JSON.stringify(registeredEvents));
  }, [registeredEvents]);

  useEffect(() => {
    localStorage.setItem('eventWaitList', JSON.stringify(waitListEntries));
  }, [waitListEntries]);

  // Generate analytics
  useEffect(() => {
    const analytics = {
      totalEvents: calendarEvents.length,
      upcomingEvents: calendarEvents.filter(e => new Date(e.startDate) > new Date()).length,
      totalAttendees: registeredEvents.length,
      averageAttendance: calendarEvents.length ? Math.round(registeredEvents.length / calendarEvents.length) : 0,
      popularCategories: {},
      popularTypes: {},
      monthlyTrend: {},
    };

    calendarEvents.forEach(event => {
      if (event.category) analytics.popularCategories[event.category] = (analytics.popularCategories[event.category] || 0) + 1;
      if (event.type) analytics.popularTypes[event.type] = (analytics.popularTypes[event.type] || 0) + 1;
      if (event.startDate) {
        const month = new Date(event.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        analytics.monthlyTrend[month] = (analytics.monthlyTrend[month] || 0) + 1;
      }
    });

    setAnalyticsData(analytics);
    localStorage.setItem('eventAnalytics', JSON.stringify(analytics));
  }, [calendarEvents, registeredEvents]);

  // AI scheduling suggestions
  const generateAISuggestions = useCallback(() => {
    const suggestions = [];
    const busyDays = {};

    calendarEvents.forEach(event => {
      if (event.startDate) {
        const date = new Date(event.startDate).toDateString();
        busyDays[date] = (busyDays[date] || 0) + 1;
      }
    });

    // Suggest less busy days
    const lessBusyDays = Object.entries(busyDays)
      .filter(([, count]) => count < 2)
      .slice(0, 3)
      .map(([date]) => ({ type: 'best_day', date, message: `Consider scheduling on ${new Date(date).toLocaleDateString()} - only ${busyDays[date]} events scheduled` }));

    suggestions.push(...lessBusyDays);

    // Suggest optimal times
    suggestions.push({ type: 'optimal_time', message: 'Based on past events, Tuesday and Thursday afternoons have the highest attendance rates (78% vs 62% average)' });

    // Suggest resource optimization
    suggestions.push({ type: 'resource', message: 'Conference Room A is underutilized (only 2 events in the past month). Consider using it for workshops.' });

    setAiSuggestions(suggestions);
  }, [calendarEvents]);

  // Check reminders
  const checkReminders = (reminders) => {
    const now = new Date();
    reminders.forEach(reminder => {
      const reminderTime = new Date(reminder.time);
      if (reminderTime <= now && !reminder.sent) {
        if (Notification.permission === 'granted') {
          new Notification(`Event Reminder: ${reminder.eventTitle}`, {
            body: `Starts at ${reminder.eventTime} on ${reminder.eventDate}`,
            icon: '/event-icon.png'
          });
        }
        const updatedReminders = reminders.map(r => r.id === reminder.id ? { ...r, sent: true } : r);
        localStorage.setItem('eventReminders', JSON.stringify(updatedReminders));
      }
    });
  };

  // Calendar navigation
  const goToPrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const goToNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const goToToday = () => { setCurrentDate(new Date()); setSelectedDate(new Date()); };
  const goToPrevWeek = () => setCurrentDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000));
  const goToNextWeek = () => setCurrentDate(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000));
  const goToPrevDay = () => setCurrentDate(new Date(currentDate.getTime() - 24 * 60 * 60 * 1000));
  const goToNextDay = () => setCurrentDate(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000));

  const getMonthName = (date) => date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startingDayOfWeek = firstDay.getDay();
    const days = [];
    for (let i = startingDayOfWeek - 1; i >= 0; i--) days.push({ date: new Date(year, month, -i), isCurrentMonth: false });
    for (let i = 1; i <= daysInMonth; i++) days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    return days;
  };

  const getEventsForDate = (date) => {
    return filteredEvents.filter(event => {
      if (!event.startDate) return false;
      return new Date(event.startDate).toDateString() === date.toDateString();
    });
  };

  const getWeekDays = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const getWeekEvents = () => {
    return getWeekDays().map(day => ({ date: day, events: getEventsForDate(day) }));
  };

  // Handle drag and drop
  const handleDragStart = (event, e) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(event));
    setDraggedEvent(event);
  };

  const handleDragOver = (e, date) => {
    e.preventDefault();
    setDropTarget(date);
  };

  const handleDrop = (e, targetDate) => {
    e.preventDefault();
    if (draggedEvent) {
      const updatedEvents = calendarEvents.map(ev => {
        if (ev.id === draggedEvent.id) {
          return { ...ev, startDate: targetDate.toISOString().split('T')[0] };
        }
        return ev;
      });
      setCalendarEvents(updatedEvents);
      setDraggedEvent(null);
      setDropTarget(null);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prev) => ({ ...prev, [parent]: { ...prev[parent], [child]: value } }));
    } else if (name === 'recurring.isRecurring') {
      setFormData((prev) => ({ ...prev, recurring: { ...prev.recurring, isRecurring: checked } }));
    } else if (name === 'recurring.daysOfWeek') {
      const days = formData.recurring.daysOfWeek.includes(value)
        ? formData.recurring.daysOfWeek.filter(d => d !== value)
        : [...formData.recurring.daysOfWeek, value];
      setFormData((prev) => ({ ...prev, recurring: { ...prev.recurring, daysOfWeek: days } }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Handle add/edit event
  const handleSaveEvent = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isEditing && formData.id) {
      setCalendarEvents(prev => prev.map(ev => ev.id === formData.id ? { ...formData, id: ev.id } : ev));
    } else {
      setCalendarEvents(prev => [...prev, { ...formData, id: Date.now() }]);
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowEventModal(false);
      setIsEditing(false);
      setFormData({
        id: null, title: '', description: '', startDate: '', endDate: '', time: '', endTime: '',
        timezone: 'America/New_York', category: '', type: '', priority: 'medium', color: '#3B82F6',
        location: { venue: '', city: '', country: '', virtualLink: '' },
        speaker: { name: '', title: '', company: '', email: '', bio: '' },
        resources: [], recurring: { isRecurring: false, frequency: 'weekly', interval: 1, endDate: '', daysOfWeek: [] },
        reminder: { enabled: true, minutes: 60, type: 'email' },
        capacity: { maxAttendees: '', currentWaitList: 0 },
        price: { amount: '', currency: 'USD', earlyBirdPrice: '', earlyBirdDeadline: '' },
        registrationLink: '', tags: [], status: 'published',
      });
    }, 2000);
  };

  const deleteEvent = (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setCalendarEvents(prev => prev.filter(ev => ev.id !== eventId));
      setShowEventModal(false);
    }
  };

  const editEvent = (event) => {
    setFormData({
      id: event.id, title: event.title || '', description: event.description || '',
      startDate: event.startDate || '', endDate: event.endDate || '', time: event.time || '',
      endTime: event.endTime || '', timezone: event.timezone || 'America/New_York',
      category: event.category || '', type: event.type || '', priority: event.priority || 'medium',
      color: event.color || '#3B82F6',
      location: event.location || { venue: '', city: '', country: '', virtualLink: '' },
      speaker: event.speaker || { name: '', title: '', company: '', email: '', bio: '' },
      resources: event.resources || [],
      recurring: event.recurring || { isRecurring: false, frequency: 'weekly', interval: 1, endDate: '', daysOfWeek: [] },
      reminder: event.reminder || { enabled: true, minutes: 60, type: 'email' },
      capacity: event.capacity || { maxAttendees: '', currentWaitList: 0 },
      price: event.price || { amount: '', currency: 'USD', earlyBirdPrice: '', earlyBirdDeadline: '' },
      registrationLink: event.registrationLink || '', tags: event.tags || [], status: event.status || 'published',
    });
    setIsEditing(true);
    setShowEventModal(true);
  };

  const exportCalendar = () => {
    let content = '';
    let filename = '';
    let mimeType = '';
    if (exportFormat === 'ica') {
      content = generateICalContent();
      filename = 'events.ics';
      mimeType = 'text/calendar';
    } else if (exportFormat === 'csv') {
      content = generateCSVContent();
      filename = 'events.csv';
      mimeType = 'text/csv';
    } else if (exportFormat === 'json') {
      content = JSON.stringify(filteredEvents, null, 2);
      filename = 'events.json';
      mimeType = 'application/json';
    }
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setShowExportModal(false);
  };

  const generateICalContent = () => {
    let ica = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Event Calendar//EN\n`;
    filteredEvents.forEach(event => {
      const startDate = event.startDate.replace(/-/g, '');
      const endDate = (event.endDate || event.startDate).replace(/-/g, '');
      ica += `BEGIN:VEVENT\nUID:${event.id}@eventcalendar\nDTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z\nDTSTART:${startDate}\nDTEND:${endDate}\nSUMMARY:${event.title}\nDESCRIPTION:${event.description || ''}\nLOCATION:${event.location?.city || ''}\nEND:VEVENT\n`;
    });
    ica += 'END:VCALENDAR';
    return ica;
  };

  const generateCSVContent = () => {
    const headers = ['Title', 'Description', 'Start Date', 'End Date', 'Time', 'Category', 'Type', 'Priority', 'Location', 'Price'];
    const rows = filteredEvents.map(event => [event.title, event.description || '', event.startDate, event.endDate || '', event.time || '', event.category || '', event.type || '', event.priority || '', `${event.location?.city || ''}, ${event.location?.country || ''}`, event.price?.amount || 'Free']);
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  };

  const copyLink = () => { if (shareEvent) { navigator.clipboard.writeText(`${window.location.origin}/events/${shareEvent.id}`); alert('Link copied to clipboard!'); } };

  const formatTime = (timeStr) => timeStr || '';

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden" role="region" aria-label="Event Calendar Premium Hub">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="circuit-pattern-ec" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" /><circle cx="20" cy="20" r="2" fill="#9CA3AF" /><circle cx="80" cy="20" r="2" fill="#9CA3AF" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-ec)" />
        </svg>
      </div>

      {/* AI Suggestions Widget */}
      <div className="fixed bottom-4 right-4 z-40">
        <button onClick={() => { generateAISuggestions(); setShowAiModal(true); }} className="bg-linear-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all animate-pulse">
          <HiOutlineRobot className="w-6 h-6" />
        </button>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineCalendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{config?.badge || "Enterprise Calendar"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Intelligent"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Event Management"}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">{config?.description || "AI-powered scheduling, resource management, waitList automation, and advanced analytics for enterprise event planning."}</p>
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

        {/* Calendar Toolbar */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="flex gap-2">
            <button onClick={() => setCurrentView('month')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentView === 'month' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>Month</button>
            <button onClick={() => setCurrentView('week')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentView === 'week' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>Week</button>
            <button onClick={() => setCurrentView('day')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentView === 'day' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>Day</button>
            <button onClick={() => setCurrentView('list')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentView === 'list' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>List</button>
          </div>
          <div className="flex gap-2">
            <button onClick={currentView === 'month' ? goToPrevMonth : currentView === 'week' ? goToPrevWeek : goToPrevDay} className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"><HiOutlineChevronLeft className="w-5 h-5" /></button>
            <button onClick={goToToday} className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium">Today</button>
            <button onClick={currentView === 'month' ? goToNextMonth : currentView === 'week' ? goToNextWeek : goToNextDay} className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"><HiOutlineChevronRight className="w-5 h-5" /></button>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowAnalyticsModal(true)} className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium flex items-center gap-2"><HiOutlineChartBar className="w-4 h-4" />Analytics</button>
            <button onClick={() => setShowExportModal(true)} className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium flex items-center gap-2"><DownloadIcon className="w-4 h-4" />Export</button>
            <button onClick={() => { setIsEditing(false); setShowEventModal(true); }} className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium flex items-center gap-2"><HiOutlinePencil className="w-4 h-4" />Add Event</button>
          </div>
        </div>

        {/* Multi-Calendar Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
          {calendarViews.map(cal => (
            <button key={cal} onClick={() => setActiveCalendar(cal)} className={`px-4 py-2 text-sm font-medium transition-all ${activeCalendar === cal ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
              {cal.charAt(0).toUpperCase() + cal.slice(1)} Calendar
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1"><div className="absolute inset-y-0 left-0 pl-4 flex items-center"><HiOutlineSearch className="w-5 h-5 text-gray-400" /></div><input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search events..." className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl" /></div>
            <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"><HiOutlineFilter className="w-5 h-5" />Filters {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}</button>
          </div>
          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-3 gap-4">
                <div><label className="block text-sm font-medium mb-2">Category</label><select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg">{categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}</select></div>
                <div><label className="block text-sm font-medium mb-2">Event Type</label><select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg">{eventTypes.map(t => <option key={t} value={t}>{t === 'all' ? 'All Types' : t === 'virtual' ? 'Virtual' : t === 'in-person' ? 'In-Person' : 'Hybrid'}</option>)}</select></div>
                <div><label className="block text-sm font-medium mb-2">Priority</label><select value={selectedPriority} onChange={(e) => setSelectedPriority(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg">{priorities.map(p => <option key={p} value={p}>{p === 'all' ? 'All Priorities' : p.charAt(0).toUpperCase() + p.slice(1)}</option>)}</select></div>
              </div>
            </div>
          )}
        </div>

        {/* Calendar Views */}
        {currentView === 'month' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200"><h3 className="text-xl font-semibold text-center">{getMonthName(currentDate)}</h3></div>
            <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700">
              {daysOfWeek.map(day => (<div key={day} className="p-3 text-center text-sm font-semibold text-gray-600 bg-gray-50 dark:bg-gray-800">{day}</div>))}
              {getDaysInMonth(currentDate).map(({ date, isCurrentMonth }, idx) => {
                const dayEvents = getEventsForDate(date);
                const isToday = date.toDateString() === new Date().toDateString();
                return (
                  <div key={idx} onDragOver={(e) => handleDragOver(e, date)} onDrop={(e) => handleDrop(e, date)} className={`min-h-32 p-2 bg-white dark:bg-gray-800 transition-all ${!isCurrentMonth ? 'opacity-40' : ''} ${dropTarget?.toDateString() === date.toDateString() ? 'bg-blue-50 ring-2 ring-blue-500' : ''}`}>
                    <div className="flex justify-between items-start">
                      <span className={`text-sm font-medium inline-flex w-7 h-7 items-center justify-center rounded-full ${isToday ? 'bg-blue-600 text-white' : 'text-gray-700'}`}>{date.getDate()}</span>
                      {dayEvents.length > 0 && <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">{dayEvents.length}</span>}
                    </div>
                    <div className="mt-1 space-y-1">
                      {dayEvents.slice(0, 2).map((event, eventIdx) => (
                        <div key={eventIdx} draggable onDragStart={(e) => handleDragStart(event, e)} onClick={() => editEvent(event)} className="text-xs p-1 rounded truncate cursor-move hover:opacity-80" style={{ backgroundColor: `${event.color}20`, color: event.color, borderLeft: `3px solid ${event.color}` }}>{event.title}</div>
                      ))}
                      {dayEvents.length > 2 && <div className="text-xs text-gray-500 text-center">+{dayEvents.length - 2} more</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {currentView === 'week' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-x-auto">
            <div className="grid grid-cols-7 min-w-96">
              {getWeekEvents().map(({ date, events }, idx) => {
                const isToday = date.toDateString() === new Date().toDateString();
                return (
                  <div key={idx} className="min-h-96 bg-white dark:bg-gray-800" onDragOver={(e) => handleDragOver(e, date)} onDrop={(e) => handleDrop(e, date)}>
                    <div className={`p-3 text-center border-b border-gray-200 ${dropTarget?.toDateString() === date.toDateString() ? 'bg-blue-50' : ''}`}>
                      <div className="text-sm font-medium text-gray-500">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                      <div className={`text-lg font-semibold mt-1 inline-flex w-8 h-8 items-center justify-center rounded-full ${isToday ? 'bg-blue-600 text-white' : 'text-gray-900'}`}>{date.getDate()}</div>
                    </div>
                    <div className="p-2 space-y-2">
                      {events.map((event, eventIdx) => (
                        <div key={eventIdx} draggable onDragStart={(e) => handleDragStart(event, e)} onClick={() => editEvent(event)} className="p-2 rounded-lg cursor-move hover:opacity-80 transition-all" style={{ backgroundColor: `${event.color}20`, borderLeft: `3px solid ${event.color}` }}>
                          <p className="text-xs font-semibold truncate" style={{ color: event.color }}>{event.title}</p>
                          {event.time && <p className="text-xs text-gray-500 mt-1">{formatTime(event.time)}</p>}
                        </div>
                      ))}
                      {events.length === 0 && <div className="text-center text-xs text-gray-400 py-4">No events</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Add/Edit Event Modal */}
        {showEventModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowEventModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()} ref={modalRef}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">{isEditing ? 'Edit Event' : 'Create New Event'}</h3><button onClick={() => setShowEventModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineCheckCircle className="w-8 h-8 text-green-600" /></div><h4 className="text-xl font-bold mb-2">{isEditing ? 'Event Updated!' : 'Event Created!'}</h4></div>
                ) : (
                  <form onSubmit={handleSaveEvent} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3"><div><input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Event Title *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl ${errors.title ? 'border-red-500' : 'border-gray-200'}`} /></div><div><select name="priority" value={formData.priority} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl"><option value="low">Low Priority</option><option value="medium">Medium Priority</option><option value="high">High Priority</option></select></div></div>
                    <div><textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" rows="3" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" /></div>
                    <div className="grid grid-cols-2 gap-3"><div><label className="block text-sm font-medium mb-1">Start Date *</label><input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} className={`w-full px-4 py-3 bg-gray-50 border rounded-xl ${errors.startDate ? 'border-red-500' : 'border-gray-200'}`} /></div><div><label className="block text-sm font-medium mb-1">End Date</label><input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /></div></div>
                    <div className="grid grid-cols-2 gap-3"><div><label className="block text-sm font-medium mb-1">Start Time</label><input type="time" name="time" value={formData.time} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /></div><div><label className="block text-sm font-medium mb-1">End Time</label><input type="time" name="endTime" value={formData.endTime} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /></div></div>
                    <div className="grid grid-cols-2 gap-3"><div><label className="block text-sm font-medium mb-1">Category</label><select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl"><option value="">Select</option><option value="Webinar">Webinar</option><option value="Conference">Conference</option><option value="Workshop">Workshop</option></select></div><div><label className="block text-sm font-medium mb-1">Event Type</label><select name="type" value={formData.type} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl"><option value="">Select</option><option value="virtual">Virtual</option><option value="in-person">In-Person</option><option value="hybrid">Hybrid</option></select></div></div>
                    <div className="grid grid-cols-2 gap-3"><div><label className="block text-sm font-medium mb-1">Event Color</label><input type="color" name="color" value={formData.color} onChange={handleInputChange} className="w-full h-12 px-3 py-1 border rounded-xl" /></div><div><label className="block text-sm font-medium mb-1">Timezone</label><select name="timezone" value={formData.timezone} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl"><option value="America/New_York">Eastern Time</option><option value="America/Chicago">Central Time</option><option value="America/Denver">Mountain Time</option><option value="America/Los_Angeles">Pacific Time</option><option value="Europe/London">GMT</option></select></div></div>
                    <div className="p-4 bg-gray-50 rounded-xl"><label className="flex items-center gap-2"><input type="checkbox" name="recurring.isRecurring" checked={formData.recurring.isRecurring} onChange={handleInputChange} className="w-4 h-4" /><span className="text-sm font-medium">Recurring Event</span></label>{formData.recurring.isRecurring && (<div className="grid grid-cols-2 gap-3 mt-3"><select name="recurring.frequency" value={formData.recurring.frequency} onChange={handleInputChange} className="px-3 py-2 bg-white border rounded-lg"><option value="daily">Daily</option><option value="weekly">Weekly</option><option value="monthly">Monthly</option></select><input type="number" name="recurring.interval" value={formData.recurring.interval} onChange={handleInputChange} className="px-3 py-2 bg-white border rounded-lg" /></div>)}</div>
                    <div className="grid grid-cols-2 gap-3"><div><label className="block text-sm font-medium mb-1">Max Attendees</label><input type="number" name="capacity.maxAttendees" value={formData.capacity.maxAttendees} onChange={handleInputChange} placeholder="Unlimited" className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /></div><div><label className="block text-sm font-medium mb-1">Price</label><input type="text" name="price.amount" value={formData.price.amount} onChange={handleInputChange} placeholder="Free" className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /></div></div>
                    <div className="flex gap-3 pt-4"><button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">{isEditing ? 'Update Event' : 'Create Event'}</button>{isEditing && <button type="button" onClick={() => deleteEvent(formData.id)} className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold">Delete</button>}</div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Modal */}
        {showAnalyticsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAnalyticsModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-teal-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Event Analytics Dashboard</h3><button onClick={() => setShowAnalyticsModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-xl text-center"><p className="text-3xl font-bold text-blue-600">{analyticsData.totalEvents || 0}</p><p className="text-sm text-gray-500">Total Events</p></div>
                  <div className="p-4 bg-green-50 rounded-xl text-center"><p className="text-3xl font-bold text-green-600">{analyticsData.upcomingEvents || 0}</p><p className="text-sm text-gray-500">Upcoming Events</p></div>
                  <div className="p-4 bg-purple-50 rounded-xl text-center"><p className="text-3xl font-bold text-purple-600">{analyticsData.totalAttendees || 0}</p><p className="text-sm text-gray-500">Total Attendees</p></div>
                  <div className="p-4 bg-orange-50 rounded-xl text-center"><p className="text-3xl font-bold text-orange-600">{analyticsData.averageAttendance || 0}</p><p className="text-sm text-gray-500">Avg Attendance</p></div>
                </div>
                <div className="mb-6"><h4 className="font-semibold mb-3">Popular Categories</h4><div className="space-y-2">{Object.entries(analyticsData.popularCategories || {}).map(([cat, count]) => (<div key={cat}><div className="flex justify-between text-sm"><span>{cat}</span><span>{count} events</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(count / (analyticsData.totalEvents || 1)) * 100}%` }} /></div></div>))}</div></div>
                <div><h4 className="font-semibold mb-3">Monthly Trend</h4><div className="space-y-2">{Object.entries(analyticsData.monthlyTrend || {}).slice(-6).map(([month, count]) => (<div key={month}><div className="flex justify-between text-sm"><span>{month}</span><span>{count} events</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-green-600 h-2 rounded-full" style={{ width: `${(count / Math.max(...Object.values(analyticsData.monthlyTrend || { 1: 1 }))) * 100}%` }} /></div></div>))}</div></div>
              </div>
            </div>
          </div>
        )}

        {/* AI Suggestions Modal */}
        {showAiModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAiModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-purple-600 to-pink-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">🤖 AI Scheduling Assistant</h3><button onClick={() => setShowAiModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                {aiSuggestions.map((suggestion, idx) => (
                  <div key={idx} className="mb-4 p-3 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                    <p className="text-sm text-gray-700">{suggestion.message}</p>
                  </div>
                ))}
                <button onClick={generateAISuggestions} className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold">Refresh Suggestions</button>
              </div>
            </div>
          </div>
        )}

        {/* Export Modal */}
        {showExportModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowExportModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Export Calendar</h3><button onClick={() => setShowExportModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><div className="space-y-3"><label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer"><input type="radio" name="format" value="ica" checked={exportFormat === 'ica'} onChange={(e) => setExportFormat(e.target.value)} className="w-4 h-4" /><div><p className="font-medium">iCal (.ics)</p><p className="text-xs text-gray-500">Import into Apple/Google Calendar</p></div></label><label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer"><input type="radio" name="format" value="csv" checked={exportFormat === 'csv'} onChange={(e) => setExportFormat(e.target.value)} className="w-4 h-4" /><div><p className="font-medium">CSV (.csv)</p><p className="text-xs text-gray-500">Excel compatible</p></div></label><label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer"><input type="radio" name="format" value="json" checked={exportFormat === 'json'} onChange={(e) => setExportFormat(e.target.value)} className="w-4 h-4" /><div><p className="font-medium">JSON (.json)</p><p className="text-xs text-gray-500">For developers</p></div></label></div><button onClick={exportCalendar} className="w-full mt-6 py-3 bg-green-600 text-white rounded-xl font-semibold">Export {exportFormat.toUpperCase()}</button></div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 p-4"><div className="flex items-center justify-between"><h3 className="font-bold">Share Event</h3><button onClick={() => setShowShareModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div>
              <div className="p-6"><p className="text-sm text-gray-600 mb-4 text-center">{shareEvent.title}</p><div className="flex flex-col gap-3"><button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg"><HiOutlineLink className="w-4 h-4" />Copy Link</button><button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareEvent.title)}&body=${encodeURIComponent(`${shareEvent.title}\n${shareEvent.description}\n\n${window.location.origin}/events/${shareEvent.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"><HiOutlineMail className="w-4 h-4" />Share via Email</button></div></div>
            </div>
          </div>
        )}
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

export default EventCalendarSection3;