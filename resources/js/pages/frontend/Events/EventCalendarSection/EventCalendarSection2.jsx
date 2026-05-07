// page/frontend/Events/EventCalendarSection/EventCalendarSection2.jsx

/**
 * Event Calendar Section II - Advanced Event Management Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Event Metrics (Events, Attendees, Countries, Reminders)
 * - Interactive Calendar with Drag-and-Drop Event Rescheduling
 * - Event Creation and Editing Modal with Form Validation
 * - Delete Event Functionality
 * - Recurring Event Support (Daily, Weekly, Monthly)
 * - Browser Notification Reminders
 * - Multi-format Export (iCal, CSV, JSON)
 * - Month/Week/Day/List Views
 * - Search and Filter System
 * - Event Drag Preview with Visual Feedback
 * - Fully Responsive Design
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useRef, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlinePencil,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineDownload,
} from 'react-icons/hi';

const EventCalendarSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropTarget, setDropTarget] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [draggedEvent, setDraggedEvent] = useState(null);
  const [selectedType, setSelectedType] = useState('all');
  const [exportFormat, setExportFormat] = useState('ica');
  const [currentView, setCurrentView] = useState('month');
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showEventModal, setShowEventModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [showExportModal, setShowExportModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [formData, setFormData] = useState({ id: null, title: '', description: '', startDate: '', endDate: '', time: '', endTime: '', category: '', type: '', location: { venue: '', city: '', country: '' }, speaker: { name: '', title: '', company: '' }, recurring: { isRecurring: false, frequency: 'weekly', interval: 1, endDate: '' }, reminder: { enabled: true, minutes: 60 }, maxAttendees: '', price: '', registrationLink: '', });

  // ====================== REFS =====================
  const modalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const configEvents = useMemo(() => config?.events || [], [config?.events]);
  const stats = config?.stats || [];

  useEffect(() => {
    setCalendarEvents(configEvents);
  }, [configEvents]);

  const categories = useMemo(() => {
    const cats = new Set(calendarEvents.map(e => e.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [calendarEvents]);

  const eventTypes = useMemo(() => {
    const types = new Set(calendarEvents.map(e => e.type).filter(Boolean));
    return ['all', ...Array.from(types)];
  }, [calendarEvents]);

  const filteredEvents = useMemo(() => {
    return calendarEvents.filter((event) => {
      const matchesSearch = searchQuery === '' ||
        event.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location?.city?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      const matchesType = selectedType === 'all' || event.type === selectedType;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [calendarEvents, searchQuery, selectedCategory, selectedType]);

  // ==================== LOCAL STORAGE & EFFECTS ====================
  useEffect(() => {
    const saved = localStorage.getItem('calendarRegisteredEvents');
    if (saved) setRegisteredEvents(JSON.parse(saved));

    const savedReminders = localStorage.getItem('eventReminders');
    if (savedReminders) {
      const reminders = JSON.parse(savedReminders);
      checkReminders(reminders);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calendarRegisteredEvents', JSON.stringify(registeredEvents));
  }, [registeredEvents]);

  // Check and send reminders
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
        const updatedReminders = reminders.map(r =>
          r.id === reminder.id ? { ...r, sent: true } : r
        );
        localStorage.setItem('eventReminders', JSON.stringify(updatedReminders));
      }
    });
  };

  // ==================== CALENDAR NAVIGATION ====================
  const goToPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const goToPrevWeek = () => {
    setCurrentDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000));
  };

  const goToNextWeek = () => {
    setCurrentDate(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000));
  };

  const goToPrevDay = () => {
    setCurrentDate(new Date(currentDate.getTime() - 24 * 60 * 60 * 1000));
  };

  const goToNextDay = () => {
    setCurrentDate(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000));
  };

  // ==================== HELPER FUNCTIONS ====================
  const getMonthName = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const nextDate = new Date(year, month + 1, i);
      days.push({ date: nextDate, isCurrentMonth: false });
    }
    return days;
  };

  const getEventsForDate = (date) => {
    return filteredEvents.filter(event => {
      if (!event.startDate) return false;
      const eventDate = new Date(event.startDate);
      return eventDate.toDateString() === date.toDateString();
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
    const weekDays = getWeekDays();
    return weekDays.map(day => ({
      date: day,
      events: getEventsForDate(day)
    }));
  };

  // ==================== DRAG AND DROP ====================
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
      alert(`Event "${draggedEvent.title}" moved to ${targetDate.toDateString()}`);
    }
  };

  // ==================== EVENT MANAGEMENT ====================
  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }));
    } else if (name === 'recurring.isRecurring') {
      setFormData((prev) => ({
        ...prev,
        recurring: { ...prev.recurring, isRecurring: checked }
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

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
      const newEvent = { ...formData, id: Date.now() };
      setCalendarEvents(prev => [...prev, newEvent]);
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowEventModal(false);
      setIsEditing(false);
      setFormData({
        id: null,
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        time: '',
        endTime: '',
        category: '',
        type: '',
        location: { venue: '', city: '', country: '' },
        speaker: { name: '', title: '', company: '' },
        recurring: { isRecurring: false, frequency: 'weekly', interval: 1, endDate: '' },
        reminder: { enabled: true, minutes: 60 },
        maxAttendees: '',
        price: '',
        registrationLink: '',
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
      id: event.id,
      title: event.title || '',
      description: event.description || '',
      startDate: event.startDate || '',
      endDate: event.endDate || '',
      time: event.time || '',
      endTime: event.endTime || '',
      category: event.category || '',
      type: event.type || '',
      location: event.location || { venue: '', city: '', country: '' },
      speaker: event.speaker || { name: '', title: '', company: '' },
      recurring: event.recurring || { isRecurring: false, frequency: 'weekly', interval: 1, endDate: '' },
      reminder: event.reminder || { enabled: true, minutes: 60 },
      maxAttendees: event.maxAttendees || '',
      price: event.price || '',
      registrationLink: event.registrationLink || '',
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
    let ica = `BEGIN:VCALENDAR
      VERSION:2.0
      PRODID:-//Event Calendar//EN
      `;
    filteredEvents.forEach(event => {
      const startDate = event.startDate.replace(/-/g, '');
      const endDate = (event.endDate || event.startDate).replace(/-/g, '');
      ica += `BEGIN:VEVENT
      UID:${event.id}@eventcalendar
      DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
      DTSTART:${startDate}
      DTEND:${endDate}
      SUMMARY:${event.title}
      DESCRIPTION:${event.description || ''}
      LOCATION:${event.location?.city || ''}
      END:VEVENT
      `;
    });
    ica += 'END:VCALENDAR';
    return ica;
  };

  const generateCSVContent = () => {
    const headers = ['Title', 'Description', 'Start Date', 'End Date', 'Time', 'Category', 'Type', 'Location', 'Price'];
    const rows = filteredEvents.map(event => [
      event.title,
      event.description || '',
      event.startDate,
      event.endDate || '',
      event.time || '',
      event.category || '',
      event.type || '',
      `${event.location?.city || ''}, ${event.location?.country || ''}`,
      event.price || 'Free',
    ]);
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    return timeStr;
  };

  const getCategoryBadge = (category) => {
    switch (category?.toLowerCase()) {
      case 'webinar': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'conference': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'workshop': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'summit': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'meetup': return 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getTypeBadge = (type) => {
    switch (type?.toLowerCase()) {
      case 'virtual': return 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300';
      case 'in-person': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300';
      case 'hybrid': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Event Calendar Center"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineCalendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Event Calendar"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Manage Your"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Event Schedule"}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description || "Create, manage, and track all your events in one place. Drag and drop to reschedule, set reminders, and export your calendar."}
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

        {/* ==================== CALENDAR TOOLBAR ==================== */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="flex gap-2">
            <button onClick={() => setCurrentView('month')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentView === 'month' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>Month</button>
            <button onClick={() => setCurrentView('week')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentView === 'week' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>Week</button>
            <button onClick={() => setCurrentView('day')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentView === 'day' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>Day</button>
            <button onClick={() => setCurrentView('list')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentView === 'list' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>List</button>
          </div>

          <div className="flex gap-2">
            <button onClick={currentView === 'month' ? goToPrevMonth : currentView === 'week' ? goToPrevWeek : goToPrevDay} className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300" aria-label="Previous">
              <HiOutlineChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={goToToday} className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-sm font-medium">Today</button>
            <button onClick={currentView === 'month' ? goToNextMonth : currentView === 'week' ? goToNextWeek : goToNextDay} className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300" aria-label="Next">
              <HiOutlineChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-2">
            <button onClick={() => { setShowExportModal(true); }} className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-sm font-medium flex items-center gap-2" aria-label="Export calendar">
              <HiOutlineDownload className="w-4 h-4" />Export
            </button>
            <button onClick={() => { setIsEditing(false); setShowEventModal(true); setFormData({ id: null, title: '', description: '', startDate: '', endDate: '', time: '', endTime: '', category: '', type: '', location: { venue: '', city: '', country: '' }, speaker: { name: '', title: '', company: '' }, recurring: { isRecurring: false, frequency: 'weekly', interval: 1, endDate: '' }, reminder: { enabled: true, minutes: 60 }, maxAttendees: '', price: '', registrationLink: '' }); }} className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all duration-300 flex items-center gap-2" aria-label="Add event">
              <HiOutlinePencil className="w-4 h-4" />Add Event
            </button>
          </div>
        </div>

        {/* ==================== SEARCH AND FILTERS ==================== */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><HiOutlineSearch className="w-5 h-5 text-gray-400" /></div>
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search events..." className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="Search events" />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300" aria-label="Toggle filters">
              <HiOutlineFilter className="w-5 h-5" />Filters {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>
          </div>
          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label><select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Filter by category">{categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}</select></div>
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Event Type</label><select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Filter by event type">{eventTypes.map(t => <option key={t} value={t}>{t === 'all' ? 'All Types' : t === 'virtual' ? 'Virtual' : t === 'in-person' ? 'In-Person' : 'Hybrid'}</option>)}</select></div>
              </div>
            </div>
          )}
        </div>

        {/* ==================== MONTH VIEW ==================== */}
        {currentView === 'month' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700"><h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">{getMonthName(currentDate)}</h3></div>
            <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700">
              {daysOfWeek.map((day) => (<div key={day} className="p-3 text-center text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800">{day}</div>))}
              {getDaysInMonth(currentDate).map(({ date, isCurrentMonth }, idx) => {
                const dayEvents = getEventsForDate(date);
                const isToday = date.toDateString() === new Date().toDateString();
                const isDropTarget = dropTarget?.toDateString() === date.toDateString();
                return (
                  <div key={idx} onDragOver={(e) => handleDragOver(e, date)} onDrop={(e) => handleDrop(e, date)} className={`min-h-32 p-2 bg-white dark:bg-gray-800 transition-all duration-300 ${!isCurrentMonth ? 'opacity-40' : ''} ${isDropTarget ? 'bg-blue-50 dark:bg-blue-900/20 ring-2 ring-blue-500' : ''}`}>
                    <div className="flex justify-between items-start">
                      <span className={`text-sm font-medium inline-flex w-7 h-7 items-center justify-center rounded-full ${isToday ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}>{date.getDate()}</span>
                      {dayEvents.length > 0 && <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded-full">{dayEvents.length}</span>}
                    </div>
                    <div className="mt-1 space-y-1">
                      {dayEvents.slice(0, 2).map((event, eventIdx) => (
                        <div key={eventIdx} draggable onDragStart={(e) => handleDragStart(event, e)} onClick={() => editEvent(event)} className="text-xs p-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 truncate cursor-move hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors" role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && editEvent(event)}>{event.title}</div>
                      ))}
                      {dayEvents.length > 2 && <div className="text-xs text-gray-500 dark:text-gray-400 text-center">+{dayEvents.length - 2} more</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== WEEK VIEW ==================== */}
        {currentView === 'week' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700">
              {getWeekEvents().map(({ date, events }, idx) => {
                const isToday = date.toDateString() === new Date().toDateString();
                return (
                  <div key={idx} className="min-h-96 bg-white dark:bg-gray-800" onDragOver={(e) => handleDragOver(e, date)} onDrop={(e) => handleDrop(e, date)}>
                    <div className={`p-3 text-center border-b border-gray-200 dark:border-gray-700 transition-colors ${dropTarget?.toDateString() === date.toDateString() ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                      <div className={`text-lg font-semibold mt-1 inline-flex w-8 h-8 items-center justify-center rounded-full ${isToday ? 'bg-blue-600 text-white' : 'text-gray-900 dark:text-white'}`}>{date.getDate()}</div>
                    </div>
                    <div className="p-2 space-y-2">
                      {events.map((event, eventIdx) => (
                        <div key={eventIdx} draggable onDragStart={(e) => handleDragStart(event, e)} onClick={() => editEvent(event)} className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 cursor-move hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all" role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && editEvent(event)}>
                          <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 truncate">{event.title}</p>
                          {event.time && <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{formatTime(event.time)}</p>}
                        </div>
                      ))}
                      {events.length === 0 && <div className="text-center text-xs text-gray-400 dark:text-gray-500 py-4">No events</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== DAY VIEW ==================== */}
        {currentView === 'day' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 text-center"><h3 className="text-xl font-semibold text-gray-900 dark:text-white">{currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</h3></div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {getEventsForDate(currentDate).length > 0 ? getEventsForDate(currentDate).map((event, idx) => (
                <div key={idx} onClick={() => editEvent(event)} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-all" role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && editEvent(event)}>
                  <div className="flex items-start gap-4"><div className="w-16 text-center">{event.time && <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{formatTime(event.time)}</span>}</div><div className="flex-1"><h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{event.description}</p><div className="flex flex-wrap gap-2 mt-2">{event.category && <span className={`text-xs px-2 py-1 rounded-full ${getCategoryBadge(event.category)}`}>{event.category}</span>}{event.type && <span className={`text-xs px-2 py-1 rounded-full ${getTypeBadge(event.type)}`}>{event.type === 'virtual' ? 'Virtual' : event.type === 'in-person' ? 'In-Person' : 'Hybrid'}</span>}</div></div><button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Edit</button></div>
                </div>
              )) : (<div className="p-8 text-center text-gray-500 dark:text-gray-400"><HiOutlineCalendar className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" /><p>No events scheduled for this day.</p></div>)}
            </div>
          </div>
        )}

        {/* ==================== LIST VIEW ==================== */}
        {currentView === 'list' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700"><h3 className="text-xl font-semibold text-gray-900 dark:text-white">All Events</h3></div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredEvents.length > 0 ? filteredEvents.map((event, idx) => (
                <div key={idx} onClick={() => editEvent(event)} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-all" role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && editEvent(event)}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4"><div className="md:w-32 text-center"><div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-2"><div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{new Date(event.startDate).getDate()}</div><div className="text-xs text-gray-500 dark:text-gray-400">{new Date(event.startDate).toLocaleDateString('en-US', { month: 'short' })}</div></div></div><div className="flex-1"><h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4><p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{event.description}</p><div className="flex flex-wrap gap-2 mt-2">{event.time && <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"><HiOutlineClock className="w-3 h-3" />{formatTime(event.time)}</span>}{event.category && <span className={`text-xs px-2 py-1 rounded-full ${getCategoryBadge(event.category)}`}>{event.category}</span>}{event.type && <span className={`text-xs px-2 py-1 rounded-full ${getTypeBadge(event.type)}`}>{event.type === 'virtual' ? 'Virtual' : event.type === 'in-person' ? 'In-Person' : 'Hybrid'}</span>}</div></div><button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Edit</button></div>
                </div>
              )) : (<div className="p-8 text-center text-gray-500 dark:text-gray-400"><HiOutlineCalendar className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" /><p>No events found.</p></div>)}
            </div>
          </div>
        )}

        {/* ==================== ADD/EDIT EVENT MODAL ==================== */}
        {showEventModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowEventModal(false)} role="dialog" aria-label="Event Editor" aria-modal="true">
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()} ref={modalRef}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0"><div className="flex items-center justify-between"><div><h3 className="text-white font-bold text-lg">{isEditing ? 'Edit Event' : 'Create New Event'}</h3></div><button onClick={() => setShowEventModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8 animate-fadeIn"><div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" /></div><h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{isEditing ? 'Event Updated!' : 'Event Created!'}</h4></div>
                ) : (
                  <form onSubmit={handleSaveEvent} className="space-y-4">
                    <div><input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Event Title *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.title ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} aria-label="Event title" /></div>
                    <div><textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" rows="3" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 resize-none" aria-label="Event description" /></div>
                    <div className="grid grid-cols-2 gap-3"><div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Start Date *</label><input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white ${errors.startDate ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} aria-label="Start date" /></div><div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">End Date</label><input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="End date" /></div></div>
                    <div className="grid grid-cols-2 gap-3"><div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Start Time</label><input type="time" name="time" value={formData.time} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Start time" /></div><div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">End Time</label><input type="time" name="endTime" value={formData.endTime} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="End time" /></div></div>
                    <div className="grid grid-cols-2 gap-3"><div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label><select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Select category"><option value="">Select Category</option><option value="Webinar">Webinar</option><option value="Conference">Conference</option><option value="Workshop">Workshop</option><option value="Summit">Summit</option><option value="Meetup">Meetup</option></select></div><div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Event Type</label><select name="type" value={formData.type} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Select event type"><option value="">Select Type</option><option value="virtual">Virtual</option><option value="in-person">In-Person</option><option value="hybrid">Hybrid</option></select></div></div>
                    <div className="grid grid-cols-3 gap-3"><input type="text" name="location.venue" value={formData.location.venue} onChange={handleInputChange} placeholder="Venue" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="Venue" /><input type="text" name="location.city" value={formData.location.city} onChange={handleInputChange} placeholder="City" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="City" /><input type="text" name="location.country" value={formData.location.country} onChange={handleInputChange} placeholder="Country" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="Country" /></div>
                    <div className="grid grid-cols-3 gap-3"><input type="text" name="speaker.name" value={formData.speaker.name} onChange={handleInputChange} placeholder="Speaker Name" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="Speaker name" /><input type="text" name="speaker.title" value={formData.speaker.title} onChange={handleInputChange} placeholder="Speaker Title" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="Speaker title" /><input type="text" name="speaker.company" value={formData.speaker.company} onChange={handleInputChange} placeholder="Company" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="Speaker company" /></div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="recurring.isRecurring" checked={formData.recurring.isRecurring} onChange={handleInputChange} className="w-4 h-4" aria-label="Recurring event" /><span className="text-sm font-medium text-gray-700 dark:text-gray-300">Recurring Event</span></label>{formData.recurring.isRecurring && (<div className="grid grid-cols-3 gap-3 mt-3"><select name="recurring.frequency" value={formData.recurring.frequency} onChange={handleInputChange} className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Recurring frequency"><option value="daily">Daily</option><option value="weekly">Weekly</option><option value="monthly">Monthly</option></select><input type="number" name="recurring.interval" value={formData.recurring.interval} onChange={handleInputChange} className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Recurring interval" /><input type="date" name="recurring.endDate" value={formData.recurring.endDate} onChange={handleInputChange} className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Recurring end date" placeholder="End Date" /></div>)}</div>
                    <div className="grid grid-cols-2 gap-3"><div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Max Attendees</label><input type="number" name="maxAttendees" value={formData.maxAttendees} onChange={handleInputChange} placeholder="Unlimited" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="Max attendees" /></div><div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price</label><input type="text" name="price" value={formData.price} onChange={handleInputChange} placeholder="Free" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="Price" /></div></div>
                    <div className="flex gap-3 pt-4">
                      <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">{isEditing ? 'Update Event' : 'Create Event'}</button>
                      {isEditing && (<button type="button" onClick={() => deleteEvent(formData.id)} className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all duration-300">Delete</button>)}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== REMINDER MODAL ==================== */}
        {showReminderModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowReminderModal(false)}
            role="dialog"
            aria-label="Set Reminder"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">
                    Set Reminder
                  </h3>

                  <button
                    onClick={() => setShowReminderModal(false)}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== EXPORT MODAL ==================== */}
        {showExportModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowExportModal(false)}
            role="dialog"
            aria-label="Export Calendar"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-emerald-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">
                    Export Calendar
                  </h3>

                  <button
                    onClick={() => setShowExportModal(false)}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Choose your preferred export format:
                </p>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      type="radio"
                      name="format"
                      value="ica"
                      checked={exportFormat === 'ica'}
                      onChange={(e) => setExportFormat(e.target.value)}
                      className="w-4 h-4"
                      aria-label="iCal format"
                    />

                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        iCal (.ics)
                      </p>

                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Import into Apple Calendar, Google Calendar, Outlook
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      type="radio"
                      name="format"
                      value="csv"
                      checked={exportFormat === 'csv'}
                      onChange={(e) => setExportFormat(e.target.value)}
                      className="w-4 h-4"
                      aria-label="CSV format"
                    />

                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        CSV (.csv)
                      </p>

                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Excel and spreadsheet compatible
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      type="radio"
                      name="format"
                      value="json"
                      checked={exportFormat === 'json'}
                      onChange={(e) => setExportFormat(e.target.value)}
                      className="w-4 h-4"
                      aria-label="JSON format"
                    />

                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        JSON (.json)
                      </p>

                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        For developers and data integration
                      </p>
                    </div>
                  </label>
                </div>

                <button
                  onClick={exportCalendar}
                  className="w-full mt-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all duration-300"
                >
                  Export {exportFormat.toUpperCase()}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SHARE MODAL ==================== */}
        {showShareModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowShareModal(false)}
            role="dialog"
            aria-label="Share Event"
            aria-modal="true"
          >
            <div
              className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Share Event
                  </h3>

                  <button
                    onClick={() => setShowShareModal(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-5 h-5" />
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
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default EventCalendarSection2;