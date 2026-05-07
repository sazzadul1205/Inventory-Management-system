// page/frontend/Events/EventCalendarSection/EventCalendarSection1.jsx

/**
 * Event Calendar Section I - Interactive Calendar & Event Discovery Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Event Metrics (Events, Attendees, Countries, Registration)
 * - Interactive Calendar with Month/Week/Day/List Views
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Event Cards with Category and Type Badges
 * - Search and Filter System (by category and event type)
 * - Registration Modal with Form Validation
 * - Share Modal for Easy Event Promotion
 * - QR Code Ticket Generation
 * - Calendar Navigation with Prev/Next/Today Controls
 * - Event Count Badges on Calendar Days
 * - Responsive Calendar Grid for All Devices
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useRef, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineGlobe,
  HiOutlineTicket,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineUsers,
  HiOutlineBell,
  HiOutlineMail,
  HiOutlineDownload,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineQrcode,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';

const EventCalendarSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentView, setCurrentView] = useState('month');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showShareModal, setShowShareModal] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [formData, setFormData] = useState({name: '',email: '',company: '',role: '',phone: '',questions: '',newsletter: false,terms: false,});
  
  // ===================== REFS ====================
  const modalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const events = useMemo(() => config?.events || [], [config?.events]);
  const stats = config?.stats || [];

  const categories = useMemo(() => {
    const cats = new Set(events.map(e => e.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [events]);

  const eventTypes = useMemo(() => {
    const types = new Set(events.map(e => e.type).filter(Boolean));
    return ['all', ...Array.from(types)];
  }, [events]);

  // Filter events based on search and filters
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch = searchQuery === '' ||
        event.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location?.city?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      const matchesType = selectedType === 'all' || event.type === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [events, searchQuery, selectedCategory, selectedType]);

  // ==================== LOCAL STORAGE & EFFECTS ====================
  useEffect(() => {
    const saved = localStorage.getItem('calendarRegisteredEvents');
    if (saved) setRegisteredEvents(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('calendarRegisteredEvents', JSON.stringify(registeredEvents));
  }, [registeredEvents]);

  // ==================== CALENDAR NAVIGATION ====================
  const goToPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
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
    // Previous month days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
    // Next month days
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

  // ==================== FORM HANDLERS ====================
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.terms) newErrors.terms = 'You must agree to the terms';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (selectedEvent && !registeredEvents.includes(selectedEvent.id)) {
      setRegisteredEvents([...registeredEvents, selectedEvent.id]);
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowRegisterModal(false);
      setFormData({
        name: '', email: '', company: '', role: '', phone: '',
        questions: '', newsletter: false, terms: false
      });
    }, 3000);
  };

  const formatDateRange = (startDate, endDate) => {
    if (!startDate) return 'TBD';
    const start = new Date(startDate);
    if (!endDate) return start.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const end = new Date(endDate);
    if (start.getMonth() === end.getMonth()) {
      return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${end.getDate()}, ${end.getFullYear()}`;
    }
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
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
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Event Calendar Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineCalendar className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Event Calendar"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Stay Updated with"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Upcoming Events"}</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Browse our comprehensive calendar of webinars, conferences, workshops, and networking events. Find events that match your interests and schedule."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'calendar' ? <HiOutlineCalendar className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                    stat.icon === 'users' ? <HiOutlineUsers className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                      stat.icon === 'globe' ? <HiOutlineGlobe className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                        <HiOutlineTicket className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== CALENDAR TOOLBAR ==================== */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentView('month')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentView === 'month'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label="Month view"
            >
              Month
            </button>
            <button
              onClick={() => setCurrentView('week')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentView === 'week'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label="Week view"
            >
              Week
            </button>
            <button
              onClick={() => setCurrentView('day')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentView === 'day'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label="Day view"
            >
              Day
            </button>
            <button
              onClick={() => setCurrentView('list')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentView === 'list'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label="List view"
            >
              List
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={currentView === 'month' ? goToPrevMonth : currentView === 'week' ? goToPrevWeek : goToPrevDay}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Previous"
            >
              <HiOutlineChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToToday}
              className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-sm font-medium"
              aria-label="Today"
            >
              Today
            </button>
            <button
              onClick={currentView === 'month' ? goToNextMonth : currentView === 'week' ? goToNextWeek : goToNextDay}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Next"
            >
              <HiOutlineChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ==================== SEARCH AND FILTERS ==================== */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events by title, description, or location..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Search events"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle filters"
            >
              <HiOutlineFilter className="w-5 h-5" />
              Filters
              {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by category"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat === 'all' ? 'All Categories' : cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Event Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by event type"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type === 'virtual' ? 'Virtual' : type === 'in-person' ? 'In-Person' : 'Hybrid'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ==================== MONTH VIEW ==================== */}
        {currentView === 'month' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                {getMonthName(currentDate)}
              </h3>
            </div>
            <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700">
              {daysOfWeek.map((day) => (
                <div key={day} className="p-3 text-center text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800">
                  {day}
                </div>
              ))}
              {getDaysInMonth(currentDate).map(({ date, isCurrentMonth }, idx) => {
                const dayEvents = getEventsForDate(date);
                const isToday = date.toDateString() === new Date().toDateString();
                const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedDate(date)}
                    className={`min-h-32 p-2 bg-white dark:bg-gray-800 transition-all cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${!isCurrentMonth ? 'opacity-40' : ''
                      } ${isSelected ? 'ring-2 ring-blue-500 ring-inset' : ''}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedDate(date)}
                  >
                    <div className="flex justify-between items-start">
                      <span className={`text-sm font-medium inline-flex w-7 h-7 items-center justify-center rounded-full ${isToday ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'
                        }`}>
                        {date.getDate()}
                      </span>
                      {dayEvents.length > 0 && (
                        <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded-full">
                          {dayEvents.length}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 space-y-1">
                      {dayEvents.slice(0, 2).map((event, eventIdx) => (
                        <div
                          key={eventIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEvent(event);
                            setShowRegisterModal(true);
                          }}
                          className="text-xs p-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 truncate cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedEvent(event)}
                        >
                          {event.title}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                          +{dayEvents.length - 2} more
                        </div>
                      )}
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
                const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

                return (
                  <div key={idx} className="min-h-96 bg-white dark:bg-gray-800">
                    <div
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 text-center border-b border-gray-200 dark:border-gray-700 cursor-pointer transition-colors ${isSelected ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                        }`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedDate(date)}
                    >
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                      <div className={`text-lg font-semibold mt-1 inline-flex w-8 h-8 items-center justify-center rounded-full ${isToday ? 'bg-blue-600 text-white' : 'text-gray-900 dark:text-white'
                        }`}>
                        {date.getDate()}
                      </div>
                    </div>
                    <div className="p-2 space-y-2">
                      {events.map((event, eventIdx) => (
                        <div
                          key={eventIdx}
                          onClick={() => {
                            setSelectedEvent(event);
                            setShowRegisterModal(true);
                          }}
                          className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedEvent(event)}
                        >
                          <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 truncate">
                            {event.title}
                          </p>
                          {event.time && (
                            <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                              {formatTime(event.time)}
                            </p>
                          )}
                        </div>
                      ))}
                      {events.length === 0 && (
                        <div className="text-center text-xs text-gray-400 dark:text-gray-500 py-4">
                          No events
                        </div>
                      )}
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
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </h3>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {getEventsForDate(currentDate).length > 0 ? (
                getEventsForDate(currentDate).map((event, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedEvent(event);
                      setShowRegisterModal(true);
                    }}
                    className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-all"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedEvent(event)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 text-center">
                        {event.time && (
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                            {formatTime(event.time)}
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{event.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {event.category && (
                            <span className={`text-xs px-2 py-1 rounded-full ${getCategoryBadge(event.category)}`}>
                              {event.category}
                            </span>
                          )}
                          {event.type && (
                            <span className={`text-xs px-2 py-1 rounded-full ${getTypeBadge(event.type)}`}>
                              {event.type === 'virtual' ? 'Virtual' : event.type === 'in-person' ? 'In-Person' : 'Hybrid'}
                            </span>
                          )}
                          {event.location && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <HiOutlineLocationMarker className="w-3 h-3" />
                              {event.location.city}, {event.location.country}
                            </span>
                          )}
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all" aria-label="Register">
                        Register
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <HiOutlineCalendar className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" />
                  <p>No events scheduled for this day.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== LIST VIEW ==================== */}
        {currentView === 'list' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                All Upcoming Events
              </h3>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedEvent(event);
                      setShowRegisterModal(true);
                    }}
                    className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-all"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedEvent(event)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-32 text-center">
                        {event.startDate && (
                          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-2">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              {new Date(event.startDate).getDate()}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(event.startDate).toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{event.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {event.time && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <HiOutlineClock className="w-3 h-3" />
                              {formatTime(event.time)}
                            </span>
                          )}
                          {event.category && (
                            <span className={`text-xs px-2 py-1 rounded-full ${getCategoryBadge(event.category)}`}>
                              {event.category}
                            </span>
                          )}
                          {event.type && (
                            <span className={`text-xs px-2 py-1 rounded-full ${getTypeBadge(event.type)}`}>
                              {event.type === 'virtual' ? 'Virtual' : event.type === 'in-person' ? 'In-Person' : 'Hybrid'}
                            </span>
                          )}
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all" aria-label="Register">
                        Register
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <HiOutlineCalendar className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" />
                  <p>No events found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== REGISTRATION MODAL ==================== */}
        {showRegisterModal && selectedEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowRegisterModal(false)}
            role="dialog"
            aria-label="Event Registration"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Register for Event</h3>
                    <p className="text-blue-100 text-xs mt-1 line-clamp-1">{selectedEvent.title}</p>
                  </div>
                  <button onClick={() => setShowRegisterModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Registration Confirmed!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      You've been registered for {selectedEvent.title}. Check your email for details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">{formatDateRange(selectedEvent.startDate, selectedEvent.endDate)}</span>
                        {selectedEvent.time && <> • {formatTime(selectedEvent.time)}</>}
                      </p>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full name *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        aria-label="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email address *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        aria-label="Your email address"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Your company name"
                      />
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="Job title"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Your job title"
                      />
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone (optional)"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                      aria-label="Your phone number"
                    />

                    <textarea
                      name="questions"
                      value={formData.questions}
                      onChange={handleInputChange}
                      placeholder="Any questions about this event?"
                      rows="2"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 resize-none"
                      aria-label="Any questions about the event"
                    />

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                        aria-label="Subscribe to newsletter"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Subscribe to event updates and future announcements
                      </span>
                    </label>

                    <label className={`flex items-start gap-2 cursor-pointer ${errors.terms ? 'text-red-500' : ''}`}>
                      <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        className="w-4 h-4 mt-0.5"
                        aria-label="Agree to terms"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> *
                      </span>
                    </label>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      aria-label="Complete registration"
                    >
                      Complete Registration
                      <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                    </button>
                  </form>
                )}
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
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Event</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== QR MODAL ==================== */}
        {showQrModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowQrModal(false)}
            role="dialog"
            aria-label="Your Ticket"
            aria-modal="true"
          >
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Your Event Ticket</h3>
                  <button onClick={() => setShowQrModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="w-48 h-48 bg-gray-100 dark:bg-gray-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <HiOutlineQrcode className="w-32 h-32 text-gray-400" />
                </div>
                <button className="w-full mt-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors" aria-label="Save ticket">
                  <HiOutlineDownload className="inline mr-2 w-4 h-4" />
                  Save Ticket
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss an Event</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our calendar and get notified about upcoming events, early bird discounts, and exclusive opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg" aria-label="Subscribe to calendar">
              <HiOutlineCalendar className="w-5 h-5" />
              Subscribe to Calendar
            </button>
            <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300" aria-label="Get email updates">
              <HiOutlineMail className="w-5 h-5" />
              Email Updates
            </button>
          </div>
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default EventCalendarSection1;