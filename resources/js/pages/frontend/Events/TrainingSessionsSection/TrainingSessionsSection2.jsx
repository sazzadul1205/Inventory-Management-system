// page/frontend/Events/TrainingSessionsSection/TrainingSessionsSection2.jsx

/**
 * Training Sessions Section II - Interactive Learning Hub with Course Player
 *
 * Unique Design Elements:
 * - Stats Cards for Training Metrics (Courses, Students, Hours, Certificates)
 * - Featured Course Banner with Module and Quiz Counts
 * - Course Player Modal with Video Placeholder and Module Navigation
 * - Interactive Quiz System with Multiple Choice and Score Calculation
 * - Assignment Submission with Review Status
 * - Course Progress Tracking with Visual Progress Bar
 * - Completion Certificate Generation
 * - Enrolled Tab with Active Course List
 * - Search and Filter System
 * - Fully Responsive Layout
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useRef, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineTicket,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineStar,
  HiOutlineAcademicCap,
  HiOutlineBell,
  HiOutlineMail,
  HiOutlineLink,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineBadgeCheck,
  HiOutlineDocumentText,
  HiOutlinePlay,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const TrainingSessionsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [viewMode, setViewMode] = useState('grid');
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState({});
  const [assignments, setAssignments] = useState({});
  const [quizCourse, setQuizCourse] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentModule, setCurrentModule] = useState(0);
  const [shareSession, setShareSession] = useState(null);
  const [courseProgress, setCourseProgress] = useState({});
  const [currentCourse, setCurrentCourse] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [showShareModal, setShowShareModal] = useState(false);
  const [enrolledSessions, setEnrolledSessions] = useState([]);
  const [syllabusSession, setSyllabusSession] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [assignmentCourse, setAssignmentCourse] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCoursePlayer, setShowCoursePlayer] = useState(false);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const [certificateSession, setCertificateSession] = useState(null);
  const [assignmentSubmission, setAssignmentSubmission] = useState('');
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '', experience: '', phone: '', questions: '', newsletter: false, terms: false, });

  // ====================== REFS ====================
  const modalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const trainingSessions = useMemo(() => config?.trainingSessions || [], [config?.trainingSessions]);
  const stats = config?.stats || [];
  const featuredSessionId = config?.featuredSessionId || (trainingSessions[0]?.id);
  const featuredSession = trainingSessions.find(s => s.id === featuredSessionId) || trainingSessions[0];

  const levels = useMemo(() => {
    const lev = new Set(trainingSessions.map(s => s.level).filter(Boolean));
    return ['all', ...Array.from(lev)];
  }, [trainingSessions]);

  const formats = useMemo(() => {
    const fmt = new Set(trainingSessions.map(s => s.format).filter(Boolean));
    return ['all', ...Array.from(fmt)];
  }, [trainingSessions]);

  const categories = useMemo(() => {
    const cats = new Set(trainingSessions.map(s => s.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [trainingSessions]);

  const tabs = config?.tabs || [
    { id: 'all', label: 'All Trainings', icon: 'academic' },
    { id: 'featured', label: 'Featured', icon: 'star' },
    { id: 'upcoming', label: 'Upcoming', icon: 'calendar' },
    { id: 'certification', label: 'Certification', icon: 'badge' },
    { id: 'enrolled', label: 'My Learning', icon: 'bookmark' },
  ];

  // ==================== LOCAL STORAGE & EFFECTS ====================
  useEffect(() => {
    const saved = localStorage.getItem('enrolledTrainingSessions');
    if (saved) setEnrolledSessions(JSON.parse(saved));
    const savedProgress = localStorage.getItem('courseProgress');
    if (savedProgress) setCourseProgress(JSON.parse(savedProgress));
    const savedQuizResults = localStorage.getItem('quizResults');
    if (savedQuizResults) setQuizResults(JSON.parse(savedQuizResults));
    const savedAssignments = localStorage.getItem('assignments');
    if (savedAssignments) setAssignments(JSON.parse(savedAssignments));
  }, []);

  useEffect(() => {
    localStorage.setItem('enrolledTrainingSessions', JSON.stringify(enrolledSessions));
  }, [enrolledSessions]);
  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(courseProgress));
  }, [courseProgress]);
  useEffect(() => {
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
  }, [quizResults]);
  useEffect(() => {
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }, [assignments]);

  // ==================== HELPER FUNCTIONS ====================
  const filterSessions = (sessionList) => {
    return sessionList.filter((s) => {
      const matchesSearch = searchQuery === '' ||
        s.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.instructor?.name?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel = selectedLevel === 'all' || s.level === selectedLevel;
      const matchesFormat = selectedFormat === 'all' || s.format === selectedFormat;
      const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
      return matchesSearch && matchesLevel && matchesFormat && matchesCategory;
    });
  };

  const now = new Date();
  const upcomingSessions = trainingSessions.filter(s => {
    if (!s.startDate) return false;
    return new Date(s.startDate) > now;
  });
  const certificationSessions = trainingSessions.filter(s => s.hasCertification);

  let displayedSessions = [];
  if (activeTab === 'all') {
    displayedSessions = filterSessions(trainingSessions);
  } else if (activeTab === 'featured') {
    displayedSessions = filterSessions(trainingSessions.filter(s => s.isFeatured || s.id === featuredSessionId));
  } else if (activeTab === 'upcoming') {
    displayedSessions = filterSessions(upcomingSessions);
  } else if (activeTab === 'certification') {
    displayedSessions = filterSessions(certificationSessions);
  } else if (activeTab === 'enrolled') {
    displayedSessions = filterSessions(trainingSessions.filter(s => enrolledSessions.includes(s.id)));
  }

  // ==================== FORM HANDLERS ====================
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleEnroll = (e) => {
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

    if (selectedSession && !enrolledSessions.includes(selectedSession.id)) {
      setEnrolledSessions([...enrolledSessions, selectedSession.id]);
      if (selectedSession.modules) {
        setCourseProgress(prev => ({
          ...prev,
          [selectedSession.id]: {
            completedModules: [],
            quizScores: {},
            assignmentSubmitted: false,
            overallProgress: 0,
          }
        }));
      }
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowEnrollModal(false);
      setFormData({
        name: '', email: '', company: '', role: '', experience: '',
        phone: '', questions: '', newsletter: false, terms: false
      });
    }, 3000);
  };

  // ==================== UI HANDLERS ====================
  const isEnrolled = (sessionId) => enrolledSessions.includes(sessionId);
  const getProgress = (sessionId) => courseProgress[sessionId]?.overallProgress || 0;

  const markModuleComplete = (sessionId, moduleIndex) => {
    const progress = courseProgress[sessionId];
    if (!progress) return;

    if (!progress.completedModules.includes(moduleIndex)) {
      const newCompleted = [...progress.completedModules, moduleIndex];
      const totalModules = trainingSessions.find(s => s.id === sessionId)?.modules?.length || 1;
      const newProgress = Math.round((newCompleted.length / totalModules) * 100);

      setCourseProgress(prev => ({
        ...prev,
        [sessionId]: {
          ...prev[sessionId],
          completedModules: newCompleted,
          overallProgress: newProgress,
        }
      }));
    }
  };

  const handleQuizSubmit = (sessionId, quizId, answers) => {
    const session = trainingSessions.find(s => s.id === sessionId);
    const quiz = session?.quizzes?.find(q => q.id === quizId);

    if (quiz) {
      let score = 0;
      quiz.questions.forEach((q, idx) => {
        if (answers[idx] === q.correctAnswer) score++;
      });
      const percentage = (score / quiz.questions.length) * 100;
      const passed = percentage >= (quiz.passingScore || 70);

      setQuizResults(prev => ({
        ...prev,
        [`${sessionId}-${quizId}`]: { score: percentage, passed, attempts: (prev[`${sessionId}-${quizId}`]?.attempts || 0) + 1 }
      }));

      if (passed) {
        setCourseProgress(prev => ({
          ...prev,
          [sessionId]: {
            ...prev[sessionId],
            quizScores: { ...prev[sessionId]?.quizScores, [quizId]: percentage },
          }
        }));
      }

      alert(`Quiz completed! Score: ${percentage}% ${passed ? 'Passed!' : 'Failed. Try again.'}`);
      setShowQuizModal(false);
    }
  };

  const handleAssignmentSubmit = (sessionId) => {
    if (!assignmentSubmission.trim()) {
      alert('Please enter your assignment submission');
      return;
    }

    setAssignments(prev => ({
      ...prev,
      [sessionId]: {
        submitted: true,
        content: assignmentSubmission,
        submittedAt: new Date().toISOString(),
        status: 'pending'
      }
    }));

    setCourseProgress(prev => ({
      ...prev,
      [sessionId]: {
        ...prev[sessionId],
        assignmentSubmitted: true,
      }
    }));

    setAssignmentSubmission('');
    setShowAssignmentModal(false);
    alert('Assignment submitted successfully! Our team will review it shortly.');
  };

  const isCourseCompleted = (sessionId) => {
    const progress = courseProgress[sessionId];
    if (!progress) return false;

    const session = trainingSessions.find(s => s.id === sessionId);
    const totalModules = session?.modules?.length || 0;
    const modulesComplete = progress.completedModules?.length || 0;
    const quizzesComplete = session?.quizzes?.every(q => progress.quizScores?.[q.id] >= (q.passingScore || 70)) || true;
    const assignmentComplete = !session?.hasAssignment || progress.assignmentSubmitted;

    return modulesComplete === totalModules && quizzesComplete && assignmentComplete;
  };

  const shareSessionHandler = (session, e) => {
    e.stopPropagation();
    setShareSession(session);
    setShowShareModal(true);
  };

  const copyLink = () => {
    if (shareSession) {
      navigator.clipboard.writeText(`${window.location.origin}/training/${shareSession.id}`);
      alert('Link copied to clipboard!');
    }
  };

  const getLevelBadge = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'intermediate': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'advanced': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getFormatBadge = (format) => {
    switch (format?.toLowerCase()) {
      case 'online': return 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300';
      case 'in-person': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'hybrid': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getPriceDisplay = (price) => {
    if (!price || price === 0) return 'Free';
    return `$${price}`;
  };

  const downloadCertificate = () => {
    alert('Certificate downloaded!');
    setShowCertificateModal(false);
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Training Sessions Learning Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineAcademicCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Professional Development"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Master"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Supply Chain"}</span> {config?.title?.suffix || "with Expert Training"}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description || "Interactive online courses with video lessons, quizzes, assignments, and certificates. Learn at your own pace and advance your career."}
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

        {/* ==================== FEATURED TRAINING BANNER ==================== */}
        {featuredSession && activeTab !== 'featured' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white" />
            </div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Course</span>
                {featuredSession.hasCertification && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">Certificate Included</span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredSession.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredSession.description}</p>
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredSession.duration && (
                  <div className="flex items-center gap-2"><HiOutlineClock className="w-4 h-4" /><span>{featuredSession.duration}</span></div>
                )}
                {featuredSession.modules && (
                  <div className="flex items-center gap-2"><HiOutlineDocumentText className="w-4 h-4" /><span>{featuredSession.modules.length} modules</span></div>
                )}
                {featuredSession.quizzes && (
                  <div className="flex items-center gap-2"><HiOutlineQuestionMarkCircle className="w-4 h-4" /><span>{featuredSession.quizzes.length} quizzes</span></div>
                )}
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => { setSelectedSession(featuredSession); setShowEnrollModal(true); }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Enroll in this course"
                >
                  <HiOutlineTicket className="w-5 h-5" />Enroll Now
                </button>
                <button
                  onClick={() => { setSyllabusSession(featuredSession); setShowSyllabusModal(true); }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                  aria-label="View syllabus"
                >
                  <HiOutlineDocumentText className="w-5 h-5" />View Syllabus
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {tab.icon === 'academic' ? <HiOutlineAcademicCap className="w-4 h-4" /> :
                tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                  tab.icon === 'calendar' ? <HiOutlineCalendar className="w-4 h-4" /> :
                    tab.icon === 'badge' ? <HiOutlineBadgeCheck className="w-4 h-4" /> :
                      <HiOutlineBookmark className="w-4 h-4" />}
              {tab.label}
              {tab.id === 'enrolled' && (
                <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">{enrolledSessions.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== SEARCH AND FILTERS ==================== */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses by title, description, or instructor..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Search courses"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle filters"
            >
              <HiOutlineFilter className="w-5 h-5" />Filters
              {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>
            <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`} aria-label="Grid view">
                <HiOutlineViewGrid className="w-5 h-5" />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`} aria-label="List view">
                <HiOutlineViewList className="w-5 h-5" />
              </button>
            </div>
          </div>
          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 animate-fadeIn">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Level</label>
                  <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Filter by level">
                    {levels.map(l => <option key={l} value={l}>{l === 'all' ? 'All Levels' : l}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Format</label>
                  <select value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Filter by format">
                    {formats.map(f => <option key={f} value={f}>{f === 'all' ? 'All Formats' : f === 'online' ? 'Online' : f === 'in-person' ? 'In-Person' : 'Hybrid'}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Filter by category">
                    {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ==================== TRAINING SESSIONS GRID ==================== */}
        {displayedSessions.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineAcademicCap className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No training sessions found.</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedSessions.map((session) => {
              const enrolled = isEnrolled(session.id);
              const progress = getProgress(session.id);
              const completed = isCourseCompleted(session.id);

              return (
                <div key={session.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  {session.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img src={session.image} alt={session.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      {session.level && (
                        <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getLevelBadge(session.level)}`}>
                          {session.level}
                        </span>
                      )}
                      {session.format && (
                        <span className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full ${getFormatBadge(session.format)}`}>
                          {session.format === 'online' ? 'Online' : session.format === 'in-person' ? 'In-Person' : 'Hybrid'}
                        </span>
                      )}
                      {session.hasCertification && (
                        <span className="absolute bottom-4 left-4 text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">
                          <HiOutlineBadgeCheck className="w-3 h-3 inline mr-1" />Certificate
                        </span>
                      )}
                      {enrolled && progress > 0 && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
                          <div className="h-full bg-emerald-500 transition-all" style={{ width: `${progress}%` }} />
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{session.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{session.description}</p>
                    <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      {session.duration && (
                        <div className="flex items-center gap-2"><HiOutlineClock className="w-4 h-4 shrink-0" /><span>{session.duration}</span></div>
                      )}
                      {session.modules && (
                        <div className="flex items-center gap-2"><HiOutlineDocumentText className="w-4 h-4 shrink-0" /><span>{session.modules.length} modules</span></div>
                      )}
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{getPriceDisplay(session.price)}</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {enrolled ? (
                        <>
                          <button
                            onClick={() => { setCurrentCourse(session); setShowCoursePlayer(true); setCurrentModule(0); }}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors"
                            aria-label="Continue learning"
                          >
                            <HiOutlinePlay className="w-4 h-4" />Continue Learning
                          </button>
                          {completed && session.hasCertification && (
                            <button
                              onClick={() => { setCertificateSession(session); setShowCertificateModal(true); }}
                              className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors"
                              aria-label="Get certificate"
                            >
                              <HiOutlineBadgeCheck className="w-4 h-4" />Certificate
                            </button>
                          )}
                        </>
                      ) : (
                        <button
                          onClick={() => { setSelectedSession(session); setShowEnrollModal(true); }}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors"
                          aria-label="Enroll in course"
                        >
                          <HiOutlineTicket className="w-4 h-4" />Enroll Now
                        </button>
                      )}
                      <button onClick={(e) => shareSessionHandler(session, e)} className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Share course">
                        <HiOutlineShare className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {displayedSessions.map((session) => {
              const enrolled = isEnrolled(session.id);
              return (
                <div key={session.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row gap-6">
                    {session.image && (
                      <div className="md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                        <img src={session.image} alt={session.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{session.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{session.description}</p>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                        {session.duration && <div className="flex items-center gap-1"><HiOutlineClock className="w-4 h-4" />{session.duration}</div>}
                        {session.modules && <div className="flex items-center gap-1"><HiOutlineDocumentText className="w-4 h-4" />{session.modules.length} modules</div>}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {enrolled ? (
                          <button onClick={() => { setCurrentCourse(session); setShowCoursePlayer(true); }} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors" aria-label="Continue learning">
                            Continue Learning
                          </button>
                        ) : (
                          <button onClick={() => { setSelectedSession(session); setShowEnrollModal(true); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors" aria-label="Enroll now">
                            Enroll - {getPriceDisplay(session.price)}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== COURSE PLAYER MODAL ==================== */}
        {showCoursePlayer && currentCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowCoursePlayer(false)} role="dialog" aria-label="Course Player" aria-modal="true">
            <div className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg">{currentCourse.title}</h3>
                  <p className="text-blue-100 text-xs">Module {currentModule + 1} of {currentCourse.modules?.length}</p>
                </div>
                <button onClick={() => setShowCoursePlayer(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close player">
                  <HiOutlineX className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-6">
                  {currentCourse.modules && currentCourse.modules[currentModule] && (
                    <>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{currentCourse.modules[currentModule].title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{currentCourse.modules[currentModule].description}</p>
                      {currentCourse.modules[currentModule].videoUrl && (
                        <div className="aspect-video bg-gray-900 rounded-xl mb-4 flex items-center justify-center">
                          <div className="text-center text-gray-400">
                            <HiOutlinePlay className="w-12 h-12 mx-auto mb-2" />
                            <p>Video player would go here</p>
                          </div>
                        </div>
                      )}
                      <div className="flex gap-3 mt-4">
                        {currentModule > 0 && (
                          <button onClick={() => setCurrentModule(prev => prev - 1)} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label="Previous module">
                            Previous
                          </button>
                        )}
                        {currentModule < (currentCourse.modules.length - 1) && (
                          <button
                            onClick={() => { markModuleComplete(currentCourse.id, currentModule); setCurrentModule(prev => prev + 1); }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            aria-label="Next module"
                          >
                            Next Module
                          </button>
                        )}
                        {currentModule === (currentCourse.modules.length - 1) && (
                          <button
                            onClick={() => { markModuleComplete(currentCourse.id, currentModule); setShowCoursePlayer(false); alert('Course completed!'); }}
                            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                            aria-label="Complete course"
                          >
                            Complete Course
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <div className="w-64 bg-gray-50 dark:bg-gray-700/50 p-4 border-l border-gray-200 dark:border-gray-700">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Course Modules</h5>
                  <div className="space-y-2">
                    {currentCourse.modules?.map((module, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentModule(idx)}
                        className={`w-full text-left p-2 rounded-lg text-sm transition-all duration-300 ${currentModule === idx
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
                          }`}
                        aria-label={`Go to module ${idx + 1}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="line-clamp-1">{idx + 1}. {module.title}</span>
                          {courseProgress[currentCourse.id]?.completedModules.includes(idx) && (
                            <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  {currentCourse.quizzes && currentCourse.quizzes.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => { setQuizCourse(currentCourse); setShowQuizModal(true); }}
                        className="w-full text-left p-2 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-300"
                        aria-label="Take quiz"
                      >
                        📝 Take Quiz
                      </button>
                    </div>
                  )}
                  {currentCourse.hasAssignment && (
                    <div className="mt-2">
                      <button
                        onClick={() => { setAssignmentCourse(currentCourse); setShowAssignmentModal(true); }}
                        className="w-full text-left p-2 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-300"
                        aria-label="Submit assignment"
                      >
                        📋 Submit Assignment
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== QUIZ MODAL ==================== */}
        {showQuizModal && quizCourse && quizCourse.quizzes && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowQuizModal(false)} role="dialog" aria-label="Quiz" aria-modal="true">
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="bg-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Quiz: {quizCourse.quizzes[0]?.title || 'Knowledge Check'}</h3>
                  <button onClick={() => setShowQuizModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close quiz">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {quizCourse.quizzes.map((quiz) => (
                  <div key={quiz.id} className="space-y-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Passing score: {quiz.passingScore || 70}%</p>
                    {quiz.questions.map((question, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <p className="font-medium text-gray-900 dark:text-white mb-3">{idx + 1}. {question.text}</p>
                        <div className="space-y-2">
                          {question.options.map((opt, optIdx) => (
                            <label key={optIdx} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                              <input
                                type="radio"
                                name={`q${idx}`}
                                value={opt}
                                onChange={(e) => setQuizAnswers(prev => ({ ...prev, [`${quiz.id}-${idx}`]: e.target.value }))}
                                className="w-4 h-4"
                                aria-label={`Select answer: ${opt}`}
                              />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => handleQuizSubmit(quizCourse.id, quiz.id, quizAnswers)}
                      className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                      aria-label="Submit quiz"
                    >
                      Submit Quiz
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== ASSIGNMENT MODAL ==================== */}
        {showAssignmentModal && assignmentCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAssignmentModal(false)} role="dialog" aria-label="Assignment Submission" aria-modal="true">
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-orange-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Assignment: {assignmentCourse.title}</h3>
                  <button onClick={() => setShowAssignmentModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2"><strong>Instructions:</strong> Complete the following assignment and submit your response. Our team will review and provide feedback within 3-5 business days.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Write a 500-word analysis of a supply chain challenge you've faced and how you would apply the concepts from this course to solve it.</p>
                </div>
                <textarea
                  value={assignmentSubmission}
                  onChange={(e) => setAssignmentSubmission(e.target.value)}
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  placeholder="Write your assignment here..."
                  aria-label="Assignment submission text"
                />
                <button
                  onClick={() => handleAssignmentSubmit(assignmentCourse.id)}
                  className="w-full mt-4 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors"
                  aria-label="Submit assignment"
                >
                  Submit Assignment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ENROLLMENT MODAL ==================== */}
        {showEnrollModal && selectedSession && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowEnrollModal(false)} role="dialog" aria-label="Enroll in Course" aria-modal="true">
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()} ref={modalRef}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Enroll in Course</h3>
                    <p className="text-blue-100 text-xs mt-1 line-clamp-1">{selectedSession.title}</p>
                  </div>
                  <button onClick={() => setShowEnrollModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
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
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enrollment Confirmed!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">You've been enrolled. Start learning now!</p>
                    <button onClick={() => { setShowCoursePlayer(true); setShowEnrollModal(false); setCurrentModule(0); }} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" aria-label="Start learning">
                      Start Learning →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleEnroll} className="space-y-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Price:</span> {getPriceDisplay(selectedSession.price)}
                      </p>
                    </div>
                    <div>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full name *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} aria-label="Your full name" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email address *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} aria-label="Your email address" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="Your company name" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" name="role" placeholder="Job title" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500" aria-label="Your job title" />
                      <select name="experience" value={formData.experience} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Years of experience">
                        <option value="">Experience</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                    <textarea name="questions" value={formData.questions} onChange={handleInputChange} placeholder="Any questions?" rows="2" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 resize-none" aria-label="Any questions" />
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="w-4 h-4" aria-label="Subscribe to newsletter" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Subscribe to training updates</span>
                    </label>
                    <label className={`flex items-start gap-2 cursor-pointer ${errors.terms ? 'text-red-500' : ''}`}>
                      <input type="checkbox" name="terms" checked={formData.terms} onChange={handleInputChange} className="w-4 h-4 mt-0.5" aria-label="Agree to terms" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">I agree to the Terms *</span>
                    </label>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300" aria-label="Complete enrollment">
                      Complete Enrollment
                      <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== SYLLABUS MODAL ==================== */}
        {showSyllabusModal && syllabusSession && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSyllabusModal(false)} role="dialog" aria-label="Course Syllabus" aria-modal="true">
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Syllabus - {syllabusSession.title}</h3>
                  <button onClick={() => setShowSyllabusModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                {syllabusSession.modules && syllabusSession.modules.length > 0 ? (
                  <div className="space-y-4">
                    {syllabusSession.modules.map((module, idx) => (
                      <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
                        <p className="font-semibold text-gray-900 dark:text-white">Module {idx + 1}: {module.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{module.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <HiOutlineDocumentText className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                    <p className="text-gray-500 dark:text-gray-400">Syllabus will be available upon enrollment.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== CERTIFICATE MODAL ==================== */}
        {showCertificateModal && certificateSession && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCertificateModal(false)} role="dialog" aria-label="Certificate of Completion" aria-modal="true">
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-emerald-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Certificate of Completion</h3>
                  <button onClick={() => setShowCertificateModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineBadgeCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{certificateSession.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Congratulations on completing the course!</p>
                <button onClick={downloadCertificate} className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300" aria-label="Download certificate">
                  <HiOutlineDownload className="w-5 h-5" />Download Certificate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SHARE MODAL ==================== */}
        {showShareModal && shareSession && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)} role="dialog" aria-label="Share Course" aria-modal="true">
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Course</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">{shareSession.title}</p>
                <div className="flex flex-col gap-3">
                  <button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" aria-label="Copy link">
                    <HiOutlineLink className="w-4 h-4" />Copy Link
                  </button>
                  <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareSession.title)}&body=${encodeURIComponent(`${shareSession.title}\n${shareSession.description}\n\n${window.location.origin}/training/${shareSession.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Share via email">
                    <HiOutlineMail className="w-4 h-4" />Share via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Learning Journey Today</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get access to expert-led courses, interactive quizzes, and professional certificates.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg" aria-label="Subscribe for updates">
            <HiOutlineMail className="w-5 h-5" />Subscribe for Updates
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
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default TrainingSessionsSection2;