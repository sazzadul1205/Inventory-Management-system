// page/frontend/Events/TrainingSessionsSection/TrainingSessionsSection3.jsx

// React
import { useState, useEffect, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineClock,
  HiOutlineTicket,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineStar,
  HiOutlineChat,
  HiOutlineVideoCamera,
  HiOutlineUsers,
  HiOutlineAcademicCap,
  HiOutlineChartBar,
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
  HiOutlineHeart,
  HiOutlineClipboardList,
  HiOutlineBadgeCheck,
  HiOutlineDocumentText,
  HiOutlinePlay,
  HiOutlineQuestionMarkCircle,
  HiOutlineChatAlt2,
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const TrainingSessionsSection3 = ({ config }) => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    experience: '',
    phone: '',
    questions: '',
    newsletter: false,
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [enrolledSessions, setEnrolledSessions] = useState([]);
  const [courseProgress, setCourseProgress] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState({});
  const [assignments, setAssignments] = useState({});
  const [peerReviews, setPeerReviews] = useState({});
  const [liveClassAttendance, setLiveClassAttendance] = useState({});
  const [chatMessages, setChatMessages] = useState({});
  const [, setRaisedHands] = useState({});
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareSession, setShareSession] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [certificateSession, setCertificateSession] = useState(null);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const [syllabusSession, setSyllabusSession] = useState(null);
  const [showCoursePlayer, setShowCoursePlayer] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [currentModule, setCurrentModule] = useState(0);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [quizCourse, setQuizCourse] = useState(null);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [assignmentCourse, setAssignmentCourse] = useState(null);
  const [assignmentSubmission, setAssignmentSubmission] = useState('');
  const [showPeerReviewModal, setShowPeerReviewModal] = useState(false);
  const [peerReviewCourse, setPeerReviewCourse] = useState(null);
  const [peerReviewSubmission, setPeerReviewSubmission] = useState('');
  const [showLiveClassModal, setShowLiveClassModal] = useState(false);
  const [liveClassCourse, setLiveClassCourse] = useState(null);
  const [newChatMessage, setNewChatMessage] = useState('');
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [analyticsCourse, setAnalyticsCourse] = useState(null);
  const [showDiscussionModal, setShowDiscussionModal] = useState(false);
  const [discussionCourse, setDiscussionCourse] = useState(null);
  const [discussionPosts, setDiscussionPosts] = useState({});
  const [newDiscussionPost, setNewDiscussionPost] = useState('');
  const modalRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Get data from config
  const trainingSessions = useMemo(() => config?.trainingSessions || [], [config]);
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
    { id: 'live', label: 'Live Classes', icon: 'video' },
    { id: 'certification', label: 'Certification', icon: 'badge' },
    { id: 'enrolled', label: 'My Learning', icon: 'bookmark' },
  ];

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('enrolledTrainingSessions');
    if (saved) setEnrolledSessions(JSON.parse(saved));

    const savedProgress = localStorage.getItem('courseProgress');
    if (savedProgress) setCourseProgress(JSON.parse(savedProgress));

    const savedQuizResults = localStorage.getItem('quizResults');
    if (savedQuizResults) setQuizResults(JSON.parse(savedQuizResults));

    const savedAssignments = localStorage.getItem('assignments');
    if (savedAssignments) setAssignments(JSON.parse(savedAssignments));

    const savedPeerReviews = localStorage.getItem('peerReviews');
    if (savedPeerReviews) setPeerReviews(JSON.parse(savedPeerReviews));

    const savedAttendance = localStorage.getItem('liveClassAttendance');
    if (savedAttendance) setLiveClassAttendance(JSON.parse(savedAttendance));

    const savedDiscussionPosts = localStorage.getItem('discussionPosts');
    if (savedDiscussionPosts) setDiscussionPosts(JSON.parse(savedDiscussionPosts));
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

  useEffect(() => {
    localStorage.setItem('peerReviews', JSON.stringify(peerReviews));
  }, [peerReviews]);

  useEffect(() => {
    localStorage.setItem('liveClassAttendance', JSON.stringify(liveClassAttendance));
  }, [liveClassAttendance]);

  useEffect(() => {
    localStorage.setItem('discussionPosts', JSON.stringify(discussionPosts));
  }, [discussionPosts]);

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

  const liveSessions = trainingSessions.filter(s => s.hasLiveClasses);
  const certificationSessions = trainingSessions.filter(s => s.hasCertification);

  let displayedSessions = [];
  if (activeTab === 'all') {
    displayedSessions = filterSessions(trainingSessions);
  } else if (activeTab === 'featured') {
    displayedSessions = filterSessions(trainingSessions.filter(s => s.isFeatured || s.id === featuredSessionId));
  } else if (activeTab === 'live') {
    displayedSessions = filterSessions(liveSessions);
  } else if (activeTab === 'certification') {
    displayedSessions = filterSessions(certificationSessions);
  } else if (activeTab === 'enrolled') {
    displayedSessions = filterSessions(trainingSessions.filter(s => enrolledSessions.includes(s.id)));
  }

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
            lastAccessed: new Date().toISOString(),
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
          lastAccessed: new Date().toISOString(),
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
        [`${sessionId}-${quizId}`]: { score: percentage, passed, attempts: (prev[`${sessionId}-${quizId}`]?.attempts || 0) + 1, lastAttempt: new Date().toISOString() }
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

      alert(`Quiz completed! Score: ${percentage}% ${passed ? '✅ Passed!' : '❌ Failed. Try again.'}`);
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
        status: 'pending',
        peerReviews: [],
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
    alert('Assignment submitted successfully! It will be reviewed by peers and instructors.');
  };

  const handlePeerReview = (sessionId, assignmentId, review) => {
    setPeerReviews(prev => ({
      ...prev,
      [`${sessionId}-${assignmentId}`]: {
        review,
        submittedAt: new Date().toISOString(),
      }
    }));
    alert('Peer review submitted! Thank you for helping your fellow learners.');
    setShowPeerReviewModal(false);
  };

  const handleLiveClassAttendance = (sessionId, classId) => {
    setLiveClassAttendance(prev => ({
      ...prev,
      [`${sessionId}-${classId}`]: {
        attended: true,
        attendedAt: new Date().toISOString(),
        duration: 60, // minutes
      }
    }));
  };

  const handleSendChatMessage = (sessionId) => {
    if (!newChatMessage.trim()) return;

    setChatMessages(prev => ({
      ...prev,
      [sessionId]: [...(prev[sessionId] || []), {
        id: Date.now(),
        message: newChatMessage,
        author: formData.name || 'Student',
        timestamp: new Date().toISOString(),
      }]
    }));
    setNewChatMessage('');
  };

  const handleRaiseHand = (sessionId) => {
    setRaisedHands(prev => ({
      ...prev,
      [sessionId]: [...(prev[sessionId] || []), {
        id: Date.now(),
        author: formData.name || 'Student',
        timestamp: new Date().toISOString(),
      }]
    }));
    alert('Hand raised! The instructor will address you shortly.');
  };

  const handleDiscussionPost = (sessionId) => {
    if (!newDiscussionPost.trim()) return;

    setDiscussionPosts(prev => ({
      ...prev,
      [sessionId]: [{
        id: Date.now(),
        content: newDiscussionPost,
        author: formData.name || 'Student',
        timestamp: new Date().toISOString(),
        likes: 0,
        replies: [],
      }, ...(prev[sessionId] || [])]
    }));
    setNewDiscussionPost('');
  };

  const likeDiscussionPost = (sessionId, postId) => {
    setDiscussionPosts(prev => ({
      ...prev,
      [sessionId]: prev[sessionId].map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    }));
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
      case 'beginner': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'intermediate': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'advanced': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getFormatBadge = (format) => {
    switch (format?.toLowerCase()) {
      case 'online': return 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300';
      case 'in-person': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'hybrid': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300';
      default: return 'bg-gray-100 text-gray-700';
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

  // Calculate analytics
  const getCourseAnalytics = (sessionId) => {
    const progress = courseProgress[sessionId];
    const quizScores = quizResults;
    const attendance = liveClassAttendance;

    const avgQuizScore = Object.entries(quizScores)
      .filter(([key]) => key.startsWith(sessionId))
      .reduce((acc, [, value]) => acc + value.score, 0) / (Object.keys(quizScores).filter(key => key.startsWith(sessionId)).length || 1);

    return {
      progress: progress?.overallProgress || 0,
      avgQuizScore: Math.round(avgQuizScore),
      completedModules: progress?.completedModules?.length || 0,
      totalModules: trainingSessions.find(s => s.id === sessionId)?.modules?.length || 0,
      quizzesTaken: Object.keys(quizScores).filter(key => key.startsWith(sessionId)).length,
      liveClassesAttended: Object.keys(attendance).filter(key => key.startsWith(sessionId)).length,
    };
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Training Sessions Premium Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-training" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-training)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineAcademicCap className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Live & Interactive Learning"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Transform Your"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Career"}</span> {config?.title?.suffix || "with Expert Training"}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Live online classes, interactive quizzes, peer reviews, and professional certificates. Learn from industry experts and connect with peers."}
          </p>
          {stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    {stat.icon === 'users' ? <HiOutlineUsers className="w-4 h-4 text-blue-600" /> :
                      stat.icon === 'academic' ? <HiOutlineAcademicCap className="w-4 h-4 text-blue-600" /> :
                        stat.icon === 'video' ? <HiOutlineVideoCamera className="w-4 h-4 text-blue-600" /> :
                          <HiOutlineBadgeCheck className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Featured Banner */}
        {featuredSession && activeTab !== 'featured' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-grid-white" /></div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Course</span>
                {featuredSession.hasLiveClasses && <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">Live Classes</span>}
                {featuredSession.hasCertification && <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">Certificate</span>}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredSession.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredSession.description}</p>
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredSession.duration && <div className="flex items-center gap-2"><HiOutlineClock className="w-4 h-4" /><span>{featuredSession.duration}</span></div>}
                {featuredSession.modules && <div className="flex items-center gap-2"><HiOutlineDocumentText className="w-4 h-4" /><span>{featuredSession.modules.length} modules</span></div>}
                {featuredSession.liveClasses && <div className="flex items-center gap-2"><HiOutlineVideoCamera className="w-4 h-4" /><span>{featuredSession.liveClasses.length} live sessions</span></div>}
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => { setSelectedSession(featuredSession); setShowEnrollModal(true); }} className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                  <HiOutlineTicket className="w-5 h-5" />Enroll Now
                </button>
                <button onClick={() => { setSyllabusSession(featuredSession); setShowSyllabusModal(true); }} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30">
                  <HiOutlineDocumentText className="w-5 h-5" />View Syllabus
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
              {tab.icon === 'academic' ? <HiOutlineAcademicCap className="w-4 h-4" /> : tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> : tab.icon === 'video' ? <HiOutlineVideoCamera className="w-4 h-4" /> : tab.icon === 'badge' ? <HiOutlineBadgeCheck className="w-4 h-4" /> : <HiOutlineBookmark className="w-4 h-4" />}
              {tab.label}
              {tab.id === 'enrolled' && <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">{enrolledSessions.length}</span>}
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><HiOutlineSearch className="w-5 h-5 text-gray-400" /></div>
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search courses by title, description, or instructor..." className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all">
              <HiOutlineFilter className="w-5 h-5" />Filters {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>
            <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}><HiOutlineViewGrid className="w-5 h-5" /></button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}><HiOutlineViewList className="w-5 h-5" /></button>
            </div>
          </div>
          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-3 gap-4">
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Level</label><select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">{levels.map(l => <option key={l} value={l}>{l === 'all' ? 'All Levels' : l}</option>)}</select></div>
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Format</label><select value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">{formats.map(f => <option key={f} value={f}>{f === 'all' ? 'All Formats' : f === 'online' ? 'Online' : f === 'in-person' ? 'In-Person' : 'Hybrid'}</option>)}</select></div>
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label><select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">{categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}</select></div>
              </div>
            </div>
          )}
        </div>

        {/* Training Sessions Grid */}
        {displayedSessions.length === 0 ? (
          <div className="text-center py-12"><HiOutlineAcademicCap className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" /><p className="text-gray-500 dark:text-gray-400">No training sessions found.</p></div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedSessions.map((session) => {
              const enrolled = isEnrolled(session.id);
              const progress = getProgress(session.id);

              return (
                <div key={session.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  {session.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img src={session.image} alt={session.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {session.level && <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getLevelBadge(session.level)}`}>{session.level}</span>}
                      {session.format && <span className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full ${getFormatBadge(session.format)}`}>{session.format === 'online' ? '🌐 Online' : session.format === 'in-person' ? '📍 In-Person' : '💻 Hybrid'}</span>}
                      {session.hasLiveClasses && <span className="absolute bottom-4 left-4 text-xs bg-red-500 text-white px-2 py-1 rounded-full animate-pulse">🔴 Live</span>}
                      {session.hasCertification && <span className="absolute bottom-4 right-4 text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">🎓 Certificate</span>}
                      {enrolled && progress > 0 && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
                          <div className="h-full bg-green-500 transition-all" style={{ width: `${progress}%` }} />
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{session.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{session.description}</p>
                    <div className="space-y-2 mb-4 text-sm text-gray-500">
                      {session.duration && <div className="flex items-center gap-2"><HiOutlineClock className="w-4 h-4 shrink-0" /><span>{session.duration}</span></div>}
                      {session.modules && <div className="flex items-center gap-2"><HiOutlineDocumentText className="w-4 h-4 shrink-0" /><span>{session.modules.length} modules</span></div>}
                      {session.hasLiveClasses && <div className="flex items-center gap-2"><HiOutlineVideoCamera className="w-4 h-4 shrink-0 text-red-500" /><span>Live classes</span></div>}
                    </div>
                    <div className="mb-4"><span className="text-2xl font-bold text-blue-600">{getPriceDisplay(session.price)}</span></div>
                    <div className="flex flex-wrap gap-3">
                      {enrolled ? (
                        <>
                          <button onClick={() => { setCurrentCourse(session); setShowCoursePlayer(true); setCurrentModule(0); }} className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-semibold text-sm">
                            <HiOutlinePlay className="w-4 h-4" />Continue
                          </button>
                          <button onClick={() => { setAnalyticsCourse(session); setShowAnalyticsModal(true); }} className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm">
                            <HiOutlineChartBar className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <button onClick={() => { setSelectedSession(session); setShowEnrollModal(true); }} className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm">
                          <HiOutlineTicket className="w-4 h-4" />Enroll Now
                        </button>
                      )}
                      <button onClick={(e) => shareSessionHandler(session, e)} className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm">
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
                <div key={session.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row gap-6">
                    {session.image && <div className="md:w-48 h-32 rounded-xl overflow-hidden shrink-0"><img src={session.image} alt={session.title} className="w-full h-full object-cover" /></div>}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{session.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{session.description}</p>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                        {session.duration && <div className="flex items-center gap-1"><HiOutlineClock className="w-4 h-4" />{session.duration}</div>}
                        {session.modules && <div className="flex items-center gap-1"><HiOutlineDocumentText className="w-4 h-4" />{session.modules.length} modules</div>}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {enrolled ? (
                          <button onClick={() => { setCurrentCourse(session); setShowCoursePlayer(true); }} className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold">Continue Learning</button>
                        ) : (
                          <button onClick={() => { setSelectedSession(session); setShowEnrollModal(true); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">Enroll - {getPriceDisplay(session.price)}</button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Course Player with Live Class Features */}
        {showCoursePlayer && currentCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowCoursePlayer(false)}>
            <div className="relative max-w-5xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                <div><h3 className="text-white font-bold text-lg">{currentCourse.title}</h3><p className="text-blue-100 text-xs">Module {currentModule + 1} of {currentCourse.modules?.length}</p></div>
                <button onClick={() => setShowCoursePlayer(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
              </div>
              <div className="flex flex-col md:flex-row h-full">
                <div className="flex-1 p-6 overflow-y-auto">
                  {currentCourse.modules && currentCourse.modules[currentModule] && (
                    <>
                      <h4 className="text-xl font-bold mb-2">{currentCourse.modules[currentModule].title}</h4>
                      <p className="text-gray-600 mb-4">{currentCourse.modules[currentModule].description}</p>
                      {currentCourse.modules[currentModule].videoUrl && (
                        <div className="aspect-video bg-black rounded-xl mb-4 flex items-center justify-center">
                          <div className="text-center text-gray-400"><HiOutlinePlay className="w-12 h-12 mx-auto mb-2" /><p>Video lesson would play here</p></div>
                        </div>
                      )}
                      <div className="flex gap-3 mt-4">
                        {currentModule > 0 && <button onClick={() => setCurrentModule(prev => prev - 1)} className="px-4 py-2 bg-gray-200 rounded-lg">Previous</button>}
                        {currentModule < (currentCourse.modules.length - 1) && (
                          <button onClick={() => { markModuleComplete(currentCourse.id, currentModule); setCurrentModule(prev => prev + 1); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Next Module</button>
                        )}
                        {currentModule === (currentCourse.modules.length - 1) && (
                          <button onClick={() => { markModuleComplete(currentCourse.id, currentModule); setShowCoursePlayer(false); alert('Course completed!'); }} className="px-4 py-2 bg-green-600 text-white rounded-lg">Complete Course</button>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <div className="w-80 bg-gray-50 dark:bg-gray-700/50 p-4 border-l border-gray-200 overflow-y-auto">
                  <h5 className="font-semibold mb-3">Course Content</h5>
                  <div className="space-y-2 mb-4">
                    {currentCourse.modules?.map((module, idx) => (
                      <button key={idx} onClick={() => setCurrentModule(idx)} className={`w-full text-left p-2 rounded-lg text-sm transition-all ${currentModule === idx ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}>
                        <div className="flex items-center justify-between">
                          <span>{idx + 1}. {module.title}</span>
                          {courseProgress[currentCourse.id]?.completedModules.includes(idx) && <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />}
                        </div>
                      </button>
                    ))}
                  </div>
                  {currentCourse.hasLiveClasses && (
                    <div className="mb-4 pt-4 border-t border-gray-200">
                      <h5 className="font-semibold mb-3 flex items-center gap-2"><HiOutlineVideoCamera className="w-4 h-4 text-red-500" />Live Classes</h5>
                      <button onClick={() => { setLiveClassCourse(currentCourse); setShowLiveClassModal(true); }} className="w-full py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700">Join Live Session →</button>
                    </div>
                  )}
                  <div className="mb-4 pt-4 border-t border-gray-200">
                    <h5 className="font-semibold mb-3">Activities</h5>
                    <div className="space-y-2">
                      {currentCourse.quizzes && currentCourse.quizzes.length > 0 && (
                        <button onClick={() => { setQuizCourse(currentCourse); setShowQuizModal(true); }} className="w-full text-left p-2 rounded-lg text-sm hover:bg-gray-200 flex items-center gap-2"><HiOutlineQuestionMarkCircle className="w-4 h-4" />Take Quiz</button>
                      )}
                      {currentCourse.hasAssignment && (
                        <button onClick={() => { setAssignmentCourse(currentCourse); setShowAssignmentModal(true); }} className="w-full text-left p-2 rounded-lg text-sm hover:bg-gray-200 flex items-center gap-2"><HiOutlineClipboardList className="w-4 h-4" />Submit Assignment</button>
                      )}
                      {currentCourse.hasPeerReview && (
                        <button onClick={() => { setPeerReviewCourse(currentCourse); setShowPeerReviewModal(true); }} className="w-full text-left p-2 rounded-lg text-sm hover:bg-gray-200 flex items-center gap-2"><HiOutlineUsers className="w-4 h-4" />Peer Reviews</button>
                      )}
                      <button onClick={() => { setDiscussionCourse(currentCourse); setShowDiscussionModal(true); }} className="w-full text-left p-2 rounded-lg text-sm hover:bg-gray-200 flex items-center gap-2"><HiOutlineChatAlt2 className="w-4 h-4" />Discussion Forum</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Live Class Modal */}
        {showLiveClassModal && liveClassCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowLiveClassModal(false)}>
            <div className="relative max-w-5xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-red-600 to-orange-600 p-4 flex items-center justify-between">
                <div><h3 className="text-white font-bold text-lg">Live Class: {liveClassCourse.title}</h3><p className="text-red-100 text-xs">🔴 Live Now</p></div>
                <button onClick={() => setShowLiveClassModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
              </div>
              <div className="flex h-full">
                <div className="flex-1 p-4">
                  <div className="aspect-video bg-black rounded-xl flex items-center justify-center mb-4">
                    <div className="text-center text-gray-400"><HiOutlineVideoCamera className="w-16 h-16 mx-auto mb-2" /><p>Live stream would appear here</p><p className="text-sm mt-2">🎤 Instructor speaking • 24 attendees</p></div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleRaiseHand(liveClassCourse.id)} className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm">✋ Raise Hand</button>
                    <button className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm">📝 Take Notes</button>
                  </div>
                </div>
                <div className="w-80 bg-gray-50 dark:bg-gray-700/50 p-4 border-l border-gray-200 flex flex-col">
                  <h5 className="font-semibold mb-3 flex items-center gap-2"><HiOutlineChat className="w-4 h-4" />Live Chat</h5>
                  <div ref={chatContainerRef} className="flex-1 overflow-y-auto mb-3 space-y-2 max-h-96">
                    {(chatMessages[liveClassCourse.id] || []).map(msg => (
                      <div key={msg.id} className="p-2 bg-white dark:bg-gray-600 rounded-lg">
                        <p className="text-xs font-semibold">{msg.author}</p>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input type="text" value={newChatMessage} onChange={(e) => setNewChatMessage(e.target.value)} placeholder="Type a message..." className="flex-1 px-3 py-2 border rounded-lg text-sm" onKeyPress={(e) => e.key === 'Enter' && handleSendChatMessage(liveClassCourse.id)} />
                    <button onClick={() => handleSendChatMessage(liveClassCourse.id)} className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm">Send</button>
                  </div>
                  <button onClick={() => handleLiveClassAttendance(liveClassCourse.id, 'live1')} className="mt-3 w-full py-2 bg-green-600 text-white rounded-lg text-sm">Mark Attendance</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Discussion Forum Modal */}
        {showDiscussionModal && discussionCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowDiscussionModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <div className="bg-indigo-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Discussion Forum - {discussionCourse.title}</h3><button onClick={() => setShowDiscussionModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 overflow-y-auto h-full">
                <div className="mb-4"><textarea value={newDiscussionPost} onChange={(e) => setNewDiscussionPost(e.target.value)} placeholder="Start a new discussion... (share insights, ask questions, or share resources)" rows="3" className="w-full px-4 py-3 border rounded-xl resize-none" /><div className="flex justify-end mt-2"><button onClick={() => handleDiscussionPost(discussionCourse.id)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">Post Discussion</button></div></div>
                <div className="space-y-4">
                  {(discussionPosts[discussionCourse.id] || []).map(post => (
                    <div key={post.id} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-start justify-between"><div><p className="font-semibold text-sm">{post.author}</p><p className="text-xs text-gray-500">{new Date(post.timestamp).toLocaleDateString()}</p></div><button onClick={() => likeDiscussionPost(discussionCourse.id, post.id)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500"><HiOutlineHeart className="w-4 h-4" />{post.likes}</button></div>
                      <p className="text-gray-700 mt-2">{post.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Modal */}
        {showAnalyticsModal && analyticsCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAnalyticsModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-teal-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Learning Analytics - {analyticsCourse.title}</h3><button onClick={() => setShowAnalyticsModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                {(() => {
                  const analytics = getCourseAnalytics(analyticsCourse.id);
                  return (
                    <div className="space-y-4">
                      <div className="text-center"><div className="relative w-32 h-32 mx-auto"><div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center"><span className="text-3xl font-bold text-teal-600">{analytics.progress}%</span></div><div className="absolute inset-0 rounded-full border-8 border-teal-500" style={{ clipPath: `inset(0 ${100 - analytics.progress}% 0 0)` }} /></div><p className="text-sm text-gray-500 mt-2">Overall Progress</p></div>
                      <div className="grid grid-cols-2 gap-3"><div className="p-3 bg-gray-50 rounded-lg text-center"><p className="text-2xl font-bold text-blue-600">{analytics.completedModules}/{analytics.totalModules}</p><p className="text-xs text-gray-500">Modules Completed</p></div><div className="p-3 bg-gray-50 rounded-lg text-center"><p className="text-2xl font-bold text-green-600">{analytics.avgQuizScore}%</p><p className="text-xs text-gray-500">Avg Quiz Score</p></div><div className="p-3 bg-gray-50 rounded-lg text-center"><p className="text-2xl font-bold text-purple-600">{analytics.quizzesTaken}</p><p className="text-xs text-gray-500">Quizzes Taken</p></div><div className="p-3 bg-gray-50 rounded-lg text-center"><p className="text-2xl font-bold text-orange-600">{analytics.liveClassesAttended}</p><p className="text-xs text-gray-500">Live Classes</p></div></div>
                      {isCourseCompleted(analyticsCourse.id) && analyticsCourse.hasCertification && (<button onClick={() => { setCertificateSession(analyticsCourse); setShowCertificateModal(true); }} className="w-full mt-4 py-3 bg-yellow-500 text-white rounded-xl font-semibold">Download Certificate</button>)}
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Quiz Modal */}
        {showQuizModal && quizCourse && quizCourse.quizzes && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowQuizModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="bg-purple-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Quiz: {quizCourse.quizzes[0]?.title || 'Knowledge Check'}</h3><button onClick={() => setShowQuizModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                {quizCourse.quizzes.map((quiz) => (
                  <div key={quiz.id} className="space-y-4">
                    <p className="text-sm text-gray-500 mb-4">Passing score: {quiz.passingScore || 70}%</p>
                    {quiz.questions.map((question, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                        <p className="font-medium mb-3">{idx + 1}. {question.text}</p>
                        <div className="space-y-2">
                          {question.options.map((opt, optIdx) => (
                            <label key={optIdx} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
                              <input type="radio" name={`q${idx}`} value={opt} onChange={(e) => setQuizAnswers(prev => ({ ...prev, [`${quiz.id}-${idx}`]: e.target.value }))} className="w-4 h-4" />
                              <span className="text-sm">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                    <button onClick={() => handleQuizSubmit(quizCourse.id, quiz.id, quizAnswers)} className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold">Submit Quiz</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Assignment Modal */}
        {showAssignmentModal && assignmentCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAssignmentModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-orange-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Assignment: {assignmentCourse.title}</h3><button onClick={() => setShowAssignmentModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><div className="mb-4 p-3 bg-gray-50 rounded-lg"><p className="text-sm text-gray-600 mb-2"><strong>Instructions:</strong> Write a 500-word analysis applying course concepts to a real-world scenario.</p></div><textarea value={assignmentSubmission} onChange={(e) => setAssignmentSubmission(e.target.value)} rows={8} className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Write your assignment here..." /><button onClick={() => handleAssignmentSubmit(assignmentCourse.id)} className="w-full mt-4 py-3 bg-orange-600 text-white rounded-xl font-semibold">Submit Assignment</button></div>
            </div>
          </div>
        )}

        {/* Peer Review Modal */}
        {showPeerReviewModal && peerReviewCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowPeerReviewModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-teal-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Peer Review: {peerReviewCourse.title}</h3><button onClick={() => setShowPeerReviewModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><div className="mb-4 p-3 bg-gray-50 rounded-lg"><p className="text-sm text-gray-600">Review a fellow student's assignment and provide constructive feedback.</p></div><textarea value={peerReviewSubmission} onChange={(e) => setPeerReviewSubmission(e.target.value)} rows={6} className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Write your peer review here..." /><button onClick={() => handlePeerReview(peerReviewCourse.id, 'assignment1', peerReviewSubmission)} className="w-full mt-4 py-3 bg-teal-600 text-white rounded-xl font-semibold">Submit Review</button></div>
            </div>
          </div>
        )}

        {/* Enrollment Modal */}
        {showEnrollModal && selectedSession && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowEnrollModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()} ref={modalRef}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4"><div className="flex items-center justify-between"><div><h3 className="text-white font-bold text-lg">Enroll in Course</h3><p className="text-blue-100 text-xs mt-1">{selectedSession.title}</p></div><button onClick={() => setShowEnrollModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineCheckCircle className="w-8 h-8 text-green-600" /></div><h4 className="text-xl font-bold mb-2">Enrollment Confirmed!</h4><p className="text-gray-600 text-sm">You've been enrolled. Start learning now!</p><button onClick={() => { setShowCoursePlayer(true); setShowEnrollModal(false); setCurrentCourse(selectedSession); }} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">Start Learning →</button></div>
                ) : (
                  <form onSubmit={handleEnroll} className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded-lg"><p className="text-sm text-gray-600"><span className="font-semibold">Price:</span> {getPriceDisplay(selectedSession.price)}</p>{selectedSession.hasLiveClasses && <p className="text-xs text-red-500 mt-1">🔴 Includes live classes</p>}</div>
                    <div><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full name *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl ${errors.name ? 'border-red-500' : 'border-gray-200'}`} />{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}</div>
                    <div><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email address *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-200'}`} />{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}</div>
                    <div><input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl" /></div>
                    <div className="grid grid-cols-2 gap-3"><input type="text" name="role" placeholder="Job title" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl" /><select name="experience" value={formData.experience} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"><option value="">Experience</option><option value="beginner">Beginner</option><option value="intermediate">Intermediate</option><option value="advanced">Advanced</option></select></div>
                    <textarea name="questions" value={formData.questions} onChange={handleInputChange} placeholder="Any questions?" rows="2" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl resize-none" />
                    <label className="flex items-center gap-2"><input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="w-4 h-4" /><span className="text-sm text-gray-600">Subscribe to training updates</span></label>
                    <label className={`flex items-start gap-2 ${errors.terms ? 'text-red-500' : ''}`}><input type="checkbox" name="terms" checked={formData.terms} onChange={handleInputChange} className="w-4 h-4 mt-0.5" /><span className="text-sm text-gray-600">I agree to the Terms *</span></label>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">Complete Enrollment<HiOutlineArrowRight className="inline ml-2 w-4 h-4" /></button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Syllabus Modal */}
        {showSyllabusModal && syllabusSession && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSyllabusModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-purple-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Syllabus - {syllabusSession.title}</h3><button onClick={() => setShowSyllabusModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 max-h-96 overflow-y-auto">
                {syllabusSession.modules && syllabusSession.modules.length > 0 ? (
                  <div className="space-y-4">{syllabusSession.modules.map((module, idx) => (<div key={idx} className="border-l-4 border-blue-500 pl-4 py-2"><p className="font-semibold">Module {idx + 1}: {module.title}</p><p className="text-sm text-gray-600 mt-1">{module.description}</p></div>))}</div>
                ) : (<div className="text-center py-8"><HiOutlineDocumentText className="w-12 h-12 mx-auto text-gray-300 mb-3" /><p className="text-gray-500">Syllabus will be available upon enrollment.</p></div>)}
                {syllabusSession.liveClasses && syllabusSession.liveClasses.length > 0 && (<div className="mt-6 pt-4 border-t"><h4 className="font-semibold mb-3">Live Sessions Schedule:</h4><div className="space-y-2">{syllabusSession.liveClasses.map((lc, idx) => (<div key={idx} className="flex items-center gap-2 text-sm"><HiOutlineVideoCamera className="w-4 h-4 text-red-500" /><span>{lc.date}: {lc.topic}</span></div>))}</div></div>)}
              </div>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {showCertificateModal && certificateSession && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCertificateModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Certificate of Completion</h3><button onClick={() => setShowCertificateModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 text-center"><div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineBadgeCheck className="w-10 h-10 text-green-600" /></div><h4 className="text-xl font-bold mb-2">{certificateSession.title}</h4><p className="text-sm text-gray-600 mb-4">Congratulations on completing the course!</p><button onClick={downloadCertificate} className="w-full inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"><HiOutlineDownload className="w-5 h-5" />Download Certificate</button></div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareSession && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 p-4"><div className="flex items-center justify-between"><h3 className="font-bold">Share Course</h3><button onClick={() => setShowShareModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div>
              <div className="p-6"><p className="text-sm text-gray-600 mb-4 text-center">{shareSession.title}</p><div className="flex flex-col gap-3"><button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg"><HiOutlineLink className="w-4 h-4" />Copy Link</button><button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareSession.title)}&body=${encodeURIComponent(`${shareSession.title}\n${shareSession.description}\n\n${window.location.origin}/training/${shareSession.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"><HiOutlineMail className="w-4 h-4" />Share via Email</button></div></div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Learning Journey Today</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get access to live classes, expert instructors, peer reviews, and professional certificates.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"><HiOutlineMail className="w-5 h-5" />Subscribe for Updates</button>
        </div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .bg-grid-white { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
      `}</style>
    </section>
  );
};

export default TrainingSessionsSection3;