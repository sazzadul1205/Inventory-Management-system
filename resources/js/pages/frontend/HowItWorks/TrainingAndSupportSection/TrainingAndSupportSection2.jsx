// page/frontend/HowItWorks/TrainingAndSupportSection/TrainingAndSupportSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineAcademicCap,
  HiOutlineChat,
  HiOutlineDocumentText,
  HiOutlineVideoCamera,
  HiOutlineUsers,
  HiOutlineClock,
  HiArrowRight,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineSearch,
  HiOutlinePlay,
  HiOutlineDownload
} from 'react-icons/hi';

const TrainingAndSupportSection2 = ({ config }) => {
  const [selectedSupport, setSelectedSupport] = useState('chat');
  const [requestType, setRequestType] = useState('general');
  const [requestMessage, setRequestMessage] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState(null);

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    setRequestSubmitted(true);
    setTimeout(() => setRequestSubmitted(false), 3000);
    setRequestMessage('');
  };

  const trainingSessions = config?.trainingSessions || [];

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Training & Support Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

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

        {/* Split Layout: Left - Training & Resources, Right - Support */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Training & Resources */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <HiOutlineAcademicCap className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Upcoming Training Sessions</h3>
              </div>
              <div className="space-y-3">
                {trainingSessions.slice(0, 3).map((session, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${selectedTraining === index
                      ? 'bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-500'
                      : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    onClick={() => setSelectedTraining(selectedTraining === index ? null : index)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-purple-600">{session.date}</span>
                          <span className="text-xs text-gray-500">{session.time}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{session.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{session.description}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <HiOutlineClock className="w-3 h-3" />
                            {session.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <HiOutlineUsers className="w-3 h-3" />
                            {session.seats} seats left
                          </span>
                        </div>
                      </div>
                      <HiOutlineCalendar className="w-5 h-5 text-gray-400" />
                    </div>

                    {selectedTraining === index && (
                      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600 animate-fadeIn">
                        <Link
                          href={session.registerLink}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
                        >
                          Register Now
                          <HiArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Link
                href={config?.allTrainingsLink || "/training"}
                className="inline-flex items-center gap-2 text-purple-600 text-sm font-semibold mt-4 hover:underline"
              >
                View all sessions
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Video Tutorials */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <HiOutlineVideoCamera className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Popular Video Tutorials</h3>
              </div>
              <div className="space-y-3">
                {config?.videoTutorials?.slice(0, 3).map((video, index) => (
                  <Link
                    key={index}
                    href={video.link}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                      <HiOutlinePlay className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white text-sm">{video.title}</div>
                      <div className="text-xs text-gray-500">{video.duration}</div>
                    </div>
                    <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </Link>
                ))}
              </div>
              <Link
                href={config?.allVideosLink || "/videos"}
                className="inline-flex items-center gap-2 text-purple-600 text-sm font-semibold mt-4 hover:underline"
              >
                Browse all tutorials
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Downloadable Resources */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <HiOutlineDocumentText className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Quick Resources</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {config?.quickResources?.map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.link}
                    className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group"
                  >
                    <span className="text-xl">{resource.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{resource.name}</div>
                      <div className="text-xs text-gray-500">{resource.type}</div>
                    </div>
                    <HiOutlineDownload className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Support Center */}
          <div className="space-y-6">
            {/* Support Type Selector */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <HiOutlineChat className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Get Support</h3>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {['chat', 'email', 'phone'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedSupport(type)}
                    className={`py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedSupport === type
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    {type === 'chat' && '💬 Chat'}
                    {type === 'email' && '📧 Email'}
                    {type === 'phone' && '📞 Phone'}
                  </button>
                ))}
              </div>

              {/* Support Request Form */}
              {selectedSupport === 'chat' && (
                <div className="space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full" />
                      <div>
                        <div className="font-semibold text-sm">Support Agent</div>
                        <div className="text-xs text-green-600">Online</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Hi! How can I help you today?</p>
                  </div>
                  <form onSubmit={handleSubmitRequest}>
                    <select
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="general">General Question</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing Question</option>
                      <option value="training">Training Request</option>
                    </select>
                    <textarea
                      value={requestMessage}
                      onChange={(e) => setRequestMessage(e.target.value)}
                      placeholder="Type your message..."
                      rows={3}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg mb-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                  {requestSubmitted && (
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 text-sm text-center animate-fadeIn">
                      ✓ Message sent! We'll respond within 2 hours.
                    </div>
                  )}
                </div>
              )}

              {selectedSupport === 'email' && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get a response within 2 hours during business hours.
                  </p>
                  <form onSubmit={handleSubmitRequest}>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <select
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="general">General Question</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing Question</option>
                      <option value="training">Training Request</option>
                    </select>
                    <textarea
                      value={requestMessage}
                      onChange={(e) => setRequestMessage(e.target.value)}
                      placeholder="Describe your question or issue..."
                      rows={3}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg mb-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Send Email
                    </button>
                  </form>
                </div>
              )}

              {selectedSupport === 'phone' && (
                <div className="space-y-4 text-center">
                  <div className="text-4xl mb-2">📞</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1-800-XXX-XXXX</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Available Mon-Fri, 9am-6pm EST
                  </p>
                  <p className="text-xs text-gray-500">
                    Enterprise customers have 24/7 priority support
                  </p>
                  <Link
                    href="/support/callback"
                    className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Request Callback
                  </Link>
                </div>
              )}
            </div>

            {/* Knowledge Base */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <HiOutlineBookOpen className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Knowledge Base</h3>
              </div>
              <div className="relative mb-4">
                <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                {config?.knowledgeBase?.map((article, index) => (
                  <Link
                    key={index}
                    href={article.link}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">{article.title}</span>
                    <HiArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>
              <Link
                href={config?.knowledgeBaseLink || "/support/kb"}
                className="inline-flex items-center gap-2 text-purple-600 text-sm font-semibold mt-4 hover:underline"
              >
                Browse all articles
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Community Stats */}
            <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <HiOutlineUsers className="w-6 h-6" />
                <h3 className="text-lg font-bold">Join Our Community</h3>
              </div>
              <p className="text-sm text-purple-100 mb-4">
                Connect with 10,000+ users, share best practices, and get help from experts.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm">Active Members</div>
                <Link
                  href={config?.communityLink || "/community"}
                  className="px-4 py-2 bg-white text-purple-600 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {config?.showCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Need dedicated training for your team?"}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Request Enterprise Training"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .bg-dots-pattern {
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-dots-pattern {
          background-image: radial-gradient(circle, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default TrainingAndSupportSection2;