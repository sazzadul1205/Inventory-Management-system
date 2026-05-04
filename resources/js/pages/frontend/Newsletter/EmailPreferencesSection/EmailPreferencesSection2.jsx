// page/frontend/Newsletter/EmailPreferencesSection/EmailPreferencesSection2.jsx

/**
 * Email Preferences Section II - Advanced Preference Center with History & Security
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Subscribers, Open Rate, CTR, Satisfaction)
 * - Multi-tab UI (Preferences, Email History, Security)
 * - Email Address Entry with Validation
 * - Email Digest Toggle Switch
 * - Frequency Selection with Radio Options and Recommended Badge
 * - Content Categories Grid with Checkbox Selection
 * - Email History Table with Status Badges (delivered, opened, clicked)
 * - Security Settings Panel with 2FA, Login Alerts, Active Sessions
 * - Verification Modal with 6-digit Code Entry
 * - Success Toast Notification for Preference Updates
 * - Trust Indicators for Privacy and Flexibility
 * - Animated Gradient Orbs in Background
 * - Responsive Form Layout with Interactive Cards
 *
 * All icons from react-icons (hi)
 * Fully responsive with dark mode support
 */

import { useState } from 'react';

// React Icons - Heroicons
import {
  HiOutlineMail,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineHeart,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineCog,
  HiOutlineBell,
  HiOutlineShieldCheck,
  HiOutlineRefresh,
  HiOutlineTag,
  HiOutlineX,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineStar,
  HiOutlineCalendar,
  HiOutlineChip,
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
} from 'react-icons/hi';

const EmailPreferencesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [frequency, setFrequency] = useState('weekly');
  const [emailDigest, setEmailDigest] = useState(true);
  const [activeTab, setActiveTab] = useState('preferences');
  const [verificationCode, setVerificationCode] = useState('');
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const [preferencesSaved, setPreferencesSaved] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(['trends', 'technology', 'product']);

  // ==================== MEMOIZED DATA ====================

  const frequencyOptions = config?.frequencyOptions || [
    { value: 'daily', label: 'Daily', description: 'Get updates every day', icon: 'calendar' },
    { value: 'weekly', label: 'Weekly', description: 'Get updates once a week (recommended)', icon: 'clock', recommended: true },
    { value: 'biweekly', label: 'Bi-weekly', description: 'Get updates every two weeks', icon: 'refresh' },
    { value: 'monthly', label: 'Monthly', description: 'Get updates once a month', icon: 'calendar' }
  ];

  const categoryOptions = config?.categoryOptions || [
    { id: 'trends', label: 'Supply Chain Trends', description: 'Latest industry trends and forecasts', icon: 'chart', gradient: 'from-blue-500 to-blue-600' },
    { id: 'technology', label: 'Technology & AI', description: 'AI, automation, and digital transformation', icon: 'chip', gradient: 'from-purple-500 to-purple-600' },
    { id: 'product', label: 'Product Updates', description: 'New features and improvements', icon: 'sparkles', gradient: 'from-emerald-500 to-emerald-600' },
    { id: 'events', label: 'Events & Webinars', description: 'Upcoming conferences and online events', icon: 'calendar', gradient: 'from-amber-500 to-amber-600' },
    { id: 'case-studies', label: 'Case Studies', description: 'Real-world success stories', icon: 'document', gradient: 'from-rose-500 to-rose-600' },
    { id: 'best-practices', label: 'Best Practices', description: 'Actionable tips and strategies', icon: 'academic', gradient: 'from-indigo-500 to-indigo-600' }
  ];

  const emailHistory = config?.emailHistory || [
    { id: 1, subject: "Supply Chain Trends 2024", date: "March 15, 2024", status: "delivered", category: "trends" },
    { id: 2, subject: "AI in Supply Chain", date: "March 8, 2024", status: "opened", category: "technology" },
    { id: 3, subject: "Sustainability Strategies", date: "March 1, 2024", status: "clicked", category: "trends" },
    { id: 4, subject: "Digital Transformation", date: "February 16, 2024", status: "delivered", category: "technology" }
  ];

  const stats = config?.stats || [
    { value: "15,000+", label: "Active Subscribers", icon: "users", trend: "+22%", trendUp: true },
    { value: "94%", label: "Open Rate", icon: "eye", trend: "+5%", trendUp: true },
    { value: "45%", label: "Click-through Rate", icon: "chart", trend: "+8%", trendUp: true },
    { value: "4.9/5", label: "Reader Satisfaction", icon: "star", trend: "4.9", trendUp: true }
  ];

  const tabs = [
    { id: 'preferences', label: 'Preferences', icon: 'cog' },
    { id: 'history', label: 'Email History', icon: 'clock' },
    { id: 'security', label: 'Security', icon: 'shield' }
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons set
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      mail: <HiOutlineMail className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      arrow: <HiOutlineArrowRight className={className} />,
      heart: <HiOutlineHeart className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      cog: <HiOutlineCog className={className} />,
      bell: <HiOutlineBell className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      tag: <HiOutlineTag className={className} />,
      x: <HiOutlineX className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      star: <HiOutlineStar className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      chip: <HiOutlineChip className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
    };
    return icons[iconName] || <HiOutlineCog className={className} />;
  };

  /**
   * Get status badge color based on status
   */
  const getStatusBadgeColor = (status) => {
    const colors = {
      'delivered': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
      'opened': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'clicked': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
    };
    return colors[status] || colors.delivered;
  };

  /**
   * Get status icon based on status
   */
  const getStatusIcon = (status, className = "w-3 h-3") => {
    const icons = {
      'delivered': <HiOutlineMail className={className} />,
      'opened': <HiOutlineEye className={className} />,
      'clicked': <HiOutlineArrowRight className={className} />
    };
    return icons[status] || <HiOutlineMail className={className} />;
  };

  /**
   * Toggle category selection
   */
  const toggleCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  /**
   * Handle save preferences
   */
  const handleSavePreferences = () => {
    if (!email) {
      setErrors({ email: 'Email address is required' });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }
    setShowVerifyModal(true);
  };

  /**
   * Handle verify code
   */
  const handleVerifyCode = () => {
    if (verificationCode === '123456') {
      setPreferencesSaved(true);
      setShowVerifyModal(false);
      setVerificationCode('');
      setVerificationError('');
      setTimeout(() => {
        setPreferencesSaved(false);
      }, 3000);
    } else {
      setVerificationError('Invalid verification code. Please try again.');
    }
  };

  /**
   * Handle resend code
   */
  const handleResendCode = () => {
    alert('Verification code resent to your email.');
  };

  /**
   * Close verification modal
   */
  const closeVerifyModal = () => {
    setShowVerifyModal(false);
    setVerificationCode('');
    setVerificationError('');
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Email Preferences Center"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineCog className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Email Preferences"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Customize Your"}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || "Email Experience"}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                "Choose what emails you'd like to receive and how often. Your preferences can be changed at any time."}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                {stat.trend && (
                  <div className={`text-xs mt-1 ${stat.trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
                    {stat.trend}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== PREFERENCES TAB ==================== */}
        {activeTab === 'preferences' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-8 md:p-10">
              {/* Email Address Section */}
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Address</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  We'll send your newsletter to this email address.
                </p>
                <div className="max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      }`}
                    aria-label="Email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Digest Option */}
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <HiOutlineBell className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Digest</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Receive a weekly digest of all our content instead of individual emails.
                    </p>
                  </div>
                  <button
                    onClick={() => setEmailDigest(!emailDigest)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${emailDigest ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                    aria-label={emailDigest ? "Disable email digest" : "Enable email digest"}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailDigest ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>

              {/* Frequency Section */}
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <HiOutlineClock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Frequency</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  How often would you like to receive emails?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {frequencyOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${frequency === option.value
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                        }`}
                    >
                      <input
                        type="radio"
                        name="frequency"
                        value={option.value}
                        checked={frequency === option.value}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="w-4 h-4 text-blue-600 mt-1 focus:ring-blue-500"
                      />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                          {option.label}
                          {option.recommended && (
                            <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                              Recommended
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{option.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Content Categories Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineTag className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Content Interests</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Select the topics you're interested in (select all that apply).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryOptions.map((category) => (
                    <label
                      key={category.id}
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${selectedCategories.includes(category.id)
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                        }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => toggleCategory(category.id)}
                        className="w-4 h-4 text-blue-600 rounded mt-1 focus:ring-blue-500"
                      />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                          {getIcon(category.icon, "w-4 h-4 text-gray-500")}
                          {category.label}
                        </div>
                        <div className="text-sm text-gray-500">{category.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={handleSavePreferences}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Save preferences"
                >
                  Save Preferences
                  <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                </button>
                <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
                  You can change these preferences at any time. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== EMAIL HISTORY TAB ==================== */}
        {activeTab === 'history' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <HiOutlineClock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Email History</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                    <tr>
                      <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</th>
                      <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Date</th>
                      <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
                      <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Category</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {emailHistory.map((emailItem) => (
                      <tr key={emailItem.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors">
                        <td className="p-4 text-sm text-gray-900 dark:text-white">{emailItem.subject}</td>
                        <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{emailItem.date}</td>
                        <td className="p-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(emailItem.status)}`}>
                            {getStatusIcon(emailItem.status, "w-3 h-3")}
                            {emailItem.status}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-600 dark:text-gray-400">
                          {categoryOptions.find(c => c.id === emailItem.category)?.label || emailItem.category}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SECURITY TAB ==================== */}
        {activeTab === 'security' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                  <HiOutlineShieldCheck className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Security Settings</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors" aria-label="Enable two-factor authentication">
                    Enable
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Login Alerts</h4>
                    <p className="text-sm text-gray-500">Get notified when someone logs into your account</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600" aria-label="Login alerts enabled">
                    <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Active Sessions</h4>
                    <p className="text-sm text-gray-500">Manage devices where you're logged in</p>
                  </div>
                  <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors" aria-label="Manage active sessions">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TRUST INDICATORS ==================== */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Your privacy is protected</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineRefresh className="w-4 h-4 text-blue-500" />
            <span>Update preferences anytime</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineHeart className="w-4 h-4 text-rose-500" />
            <span>We value your inbox</span>
          </div>
        </div>

        {/* ==================== SUCCESS TOAST ==================== */}
        {preferencesSaved && (
          <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-700 rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <HiOutlineCheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm text-emerald-700 dark:text-emerald-300">Preferences saved successfully!</p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VERIFICATION MODAL ==================== */}
        {showVerifyModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeVerifyModal}
            role="dialog"
            aria-label="Verify your email"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Verify Your Email</h3>
                  <button
                    onClick={closeVerifyModal}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We've sent a verification code to <span className="font-semibold">{email}</span>.
                </p>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Enter 6-digit code"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Verification code"
                />
                {verificationError && <p className="text-red-500 text-sm mb-4">{verificationError}</p>}
                <div className="flex gap-3">
                  <button
                    onClick={handleResendCode}
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Resend verification code"
                  >
                    Resend Code
                  </button>
                  <button
                    onClick={handleVerifyCode}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    aria-label="Verify code"
                  >
                    Verify
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
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at center, white, transparent);
          -webkit-mask-image: radial-gradient(ellipse at center, white, transparent);
        }
      `}</style>
    </section>
  );
};

export default EmailPreferencesSection2;