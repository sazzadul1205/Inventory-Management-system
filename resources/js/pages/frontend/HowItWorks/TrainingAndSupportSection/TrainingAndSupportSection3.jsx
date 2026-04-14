// page/frontend/HowItWorks/TrainingAndSupportSection/TrainingAndSupportSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineChat,
  HiOutlineUsers,
  HiOutlineCheckCircle,
  HiOutlineBookOpen,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlineSearch,
  HiOutlineBadgeCheck,
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
  HiOutlineVideoCamera,
  HiOutlineClock,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineGlobeAlt
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const TrainingAndSupportSection3 = ({ config }) => {

  // States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [certificateEarned, setCertificateEarned] = useState(false);

  // States for learning paths
  const [activePath, setActivePath] = useState(config?.initialPath || 'beginner');

  // States for lessons
  const [completedLessons, setCompletedLessons] = useState(config?.initialCompletedLessons || []);


  // Learning paths
  const learningPaths = config?.learningPaths || [];

  // Find the current path
  const currentPath = learningPaths.find(p => p.id === activePath);

  // Count total lessons
  const totalLessons = currentPath?.lessons?.length || 1;

  // Count completed lessons
  const completedCount = completedLessons.filter(id =>
    currentPath?.lessons?.some(lesson => lesson.id === id)
  ).length;

  // Calculate progress
  const progress = Math.round((completedCount / totalLessons) * 100);

  // Function to toggle a lesson
  const toggleLesson = (lessonId) => {
    if (completedLessons.includes(lessonId)) {
      const newCompleted = completedLessons.filter(id => id !== lessonId);
      setCompletedLessons(newCompleted);
      if (config?.onLessonToggle) {
        config.onLessonToggle(lessonId, false, newCompleted);
      }
    } else {
      const newCompleted = [...completedLessons, lessonId];
      setCompletedLessons(newCompleted);
      if (config?.onLessonToggle) {
        config.onLessonToggle(lessonId, true, newCompleted);
      }
    }
  };

  // Check if all lessons in the current path are completed
  useEffect(() => {
    const allLessonsCompleted = currentPath?.lessons?.every(lesson =>
      completedLessons.includes(lesson.id)
    );
    if (allLessonsCompleted && !certificateEarned && completedCount === totalLessons && totalLessons > 0) {
      setCertificateEarned(true);
      if (config?.onPathComplete) {
        config.onPathComplete(activePath);
      }
      setTimeout(() => setCertificateEarned(false), 5000);
    }
  }, [completedLessons, currentPath, totalLessons, completedCount, certificateEarned, activePath, config]);

  // Filter resources
  const filteredResources = config?.supportResources?.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  // Helper function for icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    switch (iconName) {
      case 'chat': return <HiOutlineChat className={className} />;
      case 'users': return <HiOutlineUsers className={className} />;
      case 'check': return <HiOutlineCheckCircle className={className} />;
      case 'book': return <HiOutlineBookOpen className={className} />;
      case 'star': return <HiOutlineStar className={className} />;
      case 'play': return <HiOutlinePlay className={className} />;
      case 'search': return <HiOutlineSearch className={className} />;
      case 'badge': return <HiOutlineBadgeCheck className={className} />;
      case 'bulb': return <HiOutlineLightBulb className={className} />;
      case 'trophy': return <HiOutlineTrophy className={className} />;
      case 'academic': return <HiOutlineAcademicCap className={className} />;
      case 'video': return <HiOutlineVideoCamera className={className} />;
      case 'clock': return <HiOutlineClock className={className} />;
      case 'mail': return <HiOutlineMail className={className} />;
      case 'phone': return <HiOutlinePhone className={className} />;
      case 'globe': return <HiOutlineGlobeAlt className={className} />;
      default: return <HiOutlineChat className={className} />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Training & Support Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-purple-50/50 to-transparent dark:from-purple-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-pink-50/50 to-transparent dark:from-pink-900/10 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Training badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {config?.stats?.map((stat, index) => (
            <div key={index} className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-3">
                {getIcon(stat.icon, "w-8 h-8 text-purple-600 dark:text-purple-400")}
              </div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Learning Paths Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{config?.learningPathsTitle || "Learning Paths"}</h3>
              <p className="text-gray-600 dark:text-gray-400">{config?.learningPathsDescription || "Choose your journey and earn certificates"}</p>
            </div>
            <div className="flex gap-2">
              {learningPaths.map(path => (
                <button
                  key={path.id}
                  onClick={() => setActivePath(path.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activePath === path.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {path.name}
                </button>
              ))}
            </div>
          </div>

          {/* Current Learning Path */}
          {currentPath && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              {/* Path Header */}
              <div className="bg-linear-to-r from-purple-600 to-pink-600 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-3">
                      {getIcon(currentPath.icon, "w-8 h-8")}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{currentPath.name}</h4>
                    <p className="text-purple-100 text-sm">{currentPath.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{progress}%</div>
                    <div className="text-sm text-purple-100">{config?.completeLabel || "Complete"}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="text-sm text-purple-100 mt-2">
                    {completedCount} of {totalLessons} {config?.lessonsLabel || "lessons"} {config?.completedLabel || "completed"}
                  </div>
                </div>
              </div>

              {/* Lessons List */}
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {currentPath.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`p-4 transition-all duration-300 cursor-pointer ${completedLessons.includes(lesson.id)
                      ? 'bg-green-50 dark:bg-green-900/10'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                    onClick={() => toggleLesson(lesson.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="shrink-0">
                        {completedLessons.includes(lesson.id) ? (
                          getIcon("check", "w-6 h-6 text-green-500")
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">{config?.lessonLabel || "Lesson"} {index + 1}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{lesson.duration}</span>
                          {lesson.type === 'video' && getIcon("play", "w-3 h-3 text-gray-400")}
                          {lesson.type === 'quiz' && getIcon("badge", "w-3 h-3 text-gray-400")}
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white">{lesson.title}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{lesson.description}</p>
                      </div>
                      <Link
                        href={lesson.link}
                        className="text-purple-600 dark:text-purple-400 text-sm font-semibold hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {completedLessons.includes(lesson.id) ? (config?.reviewText || "Review →") : (config?.startText || "Start →")}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificate Celebration */}
              {certificateEarned && (
                <div className="p-6 bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-t border-green-200 animate-slideUp">
                  <div className="flex items-center gap-4">
                    {getIcon("trophy", "w-12 h-12 text-green-500")}
                    <div className="flex-1">
                      <h4 className="font-bold text-green-800 dark:text-green-300">{config?.congratulationsTitle || "Congratulations!"}</h4>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        {config?.certificateMessage || `You've completed the ${currentPath.name} path! Download your certificate of completion.`}
                      </p>
                    </div>
                    <Link
                      href={config?.certificateLink || "/certificate/download"}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                    >
                      {config?.downloadCertificateText || "Download Certificate"}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Support Center */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Live Support Card */}
          <div className="lg:col-span-1 bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            {getIcon("chat", "w-8 h-8 mb-4")}
            <h3 className="text-xl font-bold mb-2">{config?.liveSupportTitle || "Live Support"}</h3>
            <p className="text-purple-100 text-sm mb-4">
              {config?.liveSupportDescription || "Get instant help from our support team"}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">{config?.agentsOnlineText || "5 agents online"}</span>
            </div>
            <Link
              href={config?.chatLink || "/support/chat"}
              className="block text-center py-2 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              {config?.startLiveChatText || "Start Live Chat"}
            </Link>
            <div className="mt-4 pt-4 border-t border-purple-400/30">
              <div className="flex justify-between text-sm">
                <span>{config?.emailSupportText || "Email support"}</span>
                <span>{config?.emailResponseText || "2hr response"}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>{config?.phoneSupportText || "Phone support"}</span>
                <span>{config?.priorityText || "Priority for Enterprise"}</span>
              </div>
            </div>
          </div>

          {/* Knowledge Base Search */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              {getIcon("book", "w-6 h-6 text-purple-600 dark:text-purple-400")}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{config?.knowledgeBaseTitle || "Knowledge Base"}</h3>
            </div>
            <div className="relative mb-4">
              {getIcon("search", "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400")}
              <input
                type="text"
                placeholder={config?.searchPlaceholder || "Search for articles, guides, and FAQs..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {config?.categories?.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${selectedCategory === cat.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                    }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {filteredResources.slice(0, 5).map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {getIcon(resource.icon, "w-5 h-5 text-purple-600")}
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white text-sm">{resource.title}</div>
                      <div className="text-xs text-gray-500">{resource.category}</div>
                    </div>
                  </div>
                  {getIcon("arrow", "w-4 h-4 text-gray-400")}
                </Link>
              ))}
            </div>
            <Link
              href={config?.knowledgeBaseLink || "/support/kb"}
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 text-sm font-semibold mt-4 hover:underline"
            >
              {config?.browseAllText || "Browse all articles"}
              {getIcon("arrow", "w-4 h-4")}
            </Link>
          </div>
        </div>

        {/* Upcoming Events & Webinars */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{config?.eventsTitle || "Upcoming Events"}</h3>
              <p className="text-gray-600 dark:text-gray-400">{config?.eventsDescription || "Live webinars and training sessions"}</p>
            </div>
            <Link
              href={config?.allEventsLink || "/events"}
              className="text-purple-600 dark:text-purple-400 text-sm font-semibold hover:underline"
            >
              {config?.viewAllText || "View all"} →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config?.upcomingEvents?.map((event, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="bg-linear-to-r from-purple-600 to-pink-600 p-4 text-white">
                  <div className="mb-2">
                    {getIcon(event.icon, "w-6 h-6")}
                  </div>
                  <div className="text-sm font-semibold">{event.date}</div>
                  <div className="text-xs opacity-80">{event.time}</div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{event.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{event.duration}</span>
                    <Link
                      href={event.registerLink}
                      className="text-sm text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                    >
                      {config?.registerText || "Register"} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              {getIcon("users", "w-12 h-12 text-purple-600 dark:text-purple-400 mb-4")}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{config?.communityTitle || "Join Our Community"}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {config?.communityDescription || "Connect with 10,000+ users, share best practices, get help, and stay updated on new features."}
              </p>
              <div className="flex items-center gap-4 text-sm">
                {config?.communityFeatures?.map((feature, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    {getIcon(feature.icon, "w-4 h-4 text-green-500")}
                    {feature.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Link
                href={config?.communityLink || "/community"}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105"
              >
                {config?.joinCommunityText || "Join Community"}
              </Link>
              <Link
                href={config?.forumLink || "/forum"}
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                {config?.browseForumText || "Browse Forum"}
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {config?.showCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Need custom training for your organization?"}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Contact Learning Team"}
                {getIcon("arrow")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS for animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default TrainingAndSupportSection3;