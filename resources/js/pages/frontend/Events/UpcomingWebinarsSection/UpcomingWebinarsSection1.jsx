// page/frontend/Events/UpcomingWebinarsSection/UpcomingWebinarsSection1.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineVideoCamera,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineBell,
  HiOutlineAcademicCap,
  HiOutlineUsers,
} from 'react-icons/hi';
import { HiOutlinePlay, HiOutlineUser } from 'react-icons/hi2';

const UpcomingWebinarsSection1 = ({ config }) => {
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
  });
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('upcoming');
  const [countdowns, setCountdowns] = useState({});
  const modalRef = useRef(null);

  // Get data from config
  const webinars = useMemo(() => config?.webinars || [], [config?.webinars]);
  const stats = config?.stats || [];
  const tabs = config?.tabs || [
    { id: 'upcoming', label: 'Upcoming Webinars' },
    { id: 'recorded', label: 'Recorded Sessions' },
  ];

  // Calculate countdown for each webinar
  const calculateCountdown = useCallback((dateStr) => {
    const eventDate = new Date(dateStr);
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
  }, []);

  // Update countdowns
  useEffect(() => {
    const updateCountdowns = () => {
      const newCountdowns = {};
      webinars.forEach((webinar) => {
        if (webinar.date) {
          newCountdowns[webinar.id] = calculateCountdown(webinar.date);
        }
      });
      setCountdowns(newCountdowns);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, [webinars, calculateCountdown]);

  // Filter webinars
  const upcomingWebinars = webinars.filter((w) => {
    if (!w.date) return false;
    const webinarDate = new Date(w.date);
    const now = new Date();
    return webinarDate > now;
  });

  const recordedWebinars = webinars.filter((w) => {
    if (!w.date) return false;
    const webinarDate = new Date(w.date);
    const now = new Date();
    return webinarDate <= now || w.recordingAvailable;
  });

  const displayedWebinars = activeTab === 'upcoming' ? upcomingWebinars : recordedWebinars;

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Handle registration
  const handleRegister = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.company) newErrors.company = 'Company is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowRegisterModal(false);
      setFormData({ name: '', email: '', company: '', role: '' });
    }, 3000);
  };

  // Add to calendar
  const addToCalendar = (webinar, type) => {
    const links = webinar.calendarLinks;
    if (links && links[type]) {
      window.open(links[type], '_blank');
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Upcoming Webinars Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineVideoCamera className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Live Events"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Upcoming"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Webinars"}</span> {config?.title?.suffix || ""}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Join industry experts as they share insights, strategies, and best practices for supply chain excellence."}
          </p>
        </div>

        {/* Stats Row */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'users' ? <HiOutlineUsers className="w-5 h-5 text-blue-600" /> :
                    stat.icon === 'calendar' ? <HiOutlineCalendar className="w-5 h-5 text-blue-600" /> :
                      stat.icon === 'clock' ? <HiOutlineClock className="w-5 h-5 text-blue-600" /> :
                        <HiOutlineVideoCamera className="w-5 h-5 text-blue-600" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
            >
              {tab.id === 'upcoming' ? <HiOutlineBell className="w-4 h-4" /> : <HiOutlinePlay className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Webinars Grid */}
        {displayedWebinars.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineVideoCamera className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No webinars found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {displayedWebinars.map((webinar) => {
              const countdown = countdowns[webinar.id];
              const isUpcoming = activeTab === 'upcoming' && countdown && !countdown.expired;

              return (
                <div
                  key={webinar.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                >
                  {/* Image */}
                  {webinar.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {webinar.category && (
                        <span className="absolute top-4 left-4 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                          {webinar.category}
                        </span>
                      )}
                      {isUpcoming && countdown && (
                        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-center">
                          <div className="flex gap-2 text-xs">
                            <div>
                              <span className="font-bold text-lg">{countdown.days}</span>
                              <span className="text-xs ml-0.5">d</span>
                            </div>
                            <div>
                              <span className="font-bold text-lg">{countdown.hours}</span>
                              <span className="text-xs ml-0.5">h</span>
                            </div>
                            <div>
                              <span className="font-bold text-lg">{countdown.minutes}</span>
                              <span className="text-xs ml-0.5">m</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {webinar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {webinar.description}
                    </p>

                    {/* Date & Time */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      {webinar.date && (
                        <div className="flex items-center gap-1">
                          <HiOutlineCalendar className="w-4 h-4" />
                          <span>{webinar.date}</span>
                        </div>
                      )}
                      {webinar.time && (
                        <div className="flex items-center gap-1">
                          <HiOutlineClock className="w-4 h-4" />
                          <span>{webinar.time}</span>
                        </div>
                      )}
                      {webinar.duration && (
                        <div className="flex items-center gap-1">
                          <HiOutlineClock className="w-4 h-4" />
                          <span>{webinar.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Speaker */}
                    {webinar.speaker && (
                      <div className="flex items-center gap-3 mb-4">
                        {webinar.speaker.avatar ? (
                          <img
                            src={webinar.speaker.avatar}
                            alt={webinar.speaker.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <HiOutlineUser className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">
                            {webinar.speaker.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {webinar.speaker.title}, {webinar.speaker.company}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    {webinar.tags && webinar.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {webinar.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Attendees */}
                    {webinar.attendees && (
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
                        <HiOutlineUserGroup className="w-3 h-3" />
                        <span>{webinar.attendees.toLocaleString()} registered</span>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => {
                          setSelectedWebinar(webinar);
                          setShowRegisterModal(true);
                        }}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                      >
                        {activeTab === 'upcoming' ? (
                          <>
                            <HiOutlineBell className="w-4 h-4" />
                            Register Now
                          </>
                        ) : (
                          <>
                            <HiOutlinePlay className="w-4 h-4" />
                            Watch Recording
                          </>
                        )}
                        <HiOutlineArrowRight className="w-3 h-3" />
                      </button>

                      {activeTab === 'upcoming' && webinar.calendarLinks && (
                        <div className="relative group/calendar">
                          <button className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm">
                            <HiOutlineCalendar className="w-4 h-4" />
                            Add to Calendar
                          </button>
                          <div className="absolute bottom-full left-0 mb-2 hidden group-hover/calendar:block bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-10 min-w-36">
                            {webinar.calendarLinks.google && (
                              <button
                                onClick={() => addToCalendar(webinar, 'google')}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-lg"
                              >
                                Google Calendar
                              </button>
                            )}
                            {webinar.calendarLinks.outlook && (
                              <button
                                onClick={() => addToCalendar(webinar, 'outlook')}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                Outlook
                              </button>
                            )}
                            {webinar.calendarLinks.ical && (
                              <button
                                onClick={() => addToCalendar(webinar, 'ical')}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 rounded-b-lg"
                              >
                                iCal
                              </button>
                            )}
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => setSelectedWebinar(selectedWebinar === webinar.id ? null : webinar.id)}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                      >
                        {selectedWebinar === webinar.id ? 'Show less' : 'Learn more'}
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {selectedWebinar === webinar.id && webinar.longDescription && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {webinar.longDescription}
                        </p>
                        {webinar.speaker?.bio && (
                          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                            <p className="text-xs text-gray-500 italic">"{webinar.speaker.bio}"</p>
                          </div>
                        )}
                        {webinar.level && (
                          <div className="mt-3 flex items-center gap-2 text-xs">
                            <HiOutlineAcademicCap className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-500">Level: {webinar.level}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Registration Modal */}
        {showRegisterModal && selectedWebinar && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowRegisterModal(false)}
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Register for Webinar</h3>
                  <button onClick={() => setShowRegisterModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Registration Confirmed!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      We've sent the webinar details to your email address.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{selectedWebinar.title}</h4>
                      <p className="text-sm text-gray-500">
                        {selectedWebinar.date} • {selectedWebinar.time}
                      </p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full name"
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email address"
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company"
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.company ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            }`}
                        />
                        {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                      </div>

                      <div>
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          placeholder="Job title (optional)"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      >
                        Complete Registration
                        <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                      </button>
                    </form>

                    <p className="text-center text-xs text-gray-500 mt-4">
                      By registering, you agree to receive webinar reminders and related content.
                    </p>
                  </>
                )}
              </div>
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

export default UpcomingWebinarsSection1;