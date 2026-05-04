// page/frontend/Newsletter/UnsubscribeOptionSection/UnsubscribeOptionSection1.jsx

/**
 * Unsubscribe Option Section I - Subscription Management & Feedback Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Unsubscribe Metrics (Spam Rate, Processing Time, Request Honored, Confirmation)
 * - Multi-step Unsubscribe Flow (Email Entry, Reason Selection, Confirmation, Success)
 * - Reason Selection with Radio Buttons and Icon Labels
 * - Alternative Retention Options Grid (Unsubscribe All, Reduce Frequency, Pause, Only Updates)
 * - Confirmation Modal for Final Verification
 * - Success Message with Return to Homepage and Preferences Options
 * - Trust Indicators for Transparency
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Form Layout with Validation
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
  HiOutlineX,
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineClock,
  HiOutlineRefresh,
  HiOutlineQuestionMarkCircle,
  HiOutlineEye,
  HiOutlineFlag,
  HiOutlineShieldCheck,
} from 'react-icons/hi';

const UnsubscribeOptionSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [step, setStep] = useState('form');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // ==================== MEMOIZED DATA ====================

  const reasons = config?.reasons || [
    { id: 'too-many-emails', label: 'Too many emails', icon: 'mail' },
    { id: 'not-relevant', label: 'Content not relevant', icon: 'eye' },
    { id: 'never-subscribed', label: 'Never subscribed', icon: 'x' },
    { id: 'spam', label: 'Mark as spam', icon: 'flag' },
    { id: 'other', label: 'Other reason', icon: 'question' }
  ];

  const retentionOptions = config?.retentionOptions || [
    { id: 'unsubscribe-all', label: 'Unsubscribe from all emails', icon: 'x' },
    { id: 'reduce-frequency', label: 'Reduce email frequency (weekly instead of daily)', icon: 'clock' },
    { id: 'pause-30-days', label: 'Pause emails for 30 days', icon: 'refresh' },
    { id: 'only-product-updates', label: 'Only receive product updates', icon: 'star' }
  ];

  const stats = config?.stats || [
    { value: "0%", label: "Spam Rate", icon: "check" },
    { value: "24h", label: "Request Processing", icon: "clock" },
    { value: "100%", label: "Request Honored", icon: "heart" },
    { value: "Instant", label: "Confirmation", icon: "mail" }
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
      eye: <HiOutlineEye className={className} />,
      x: <HiOutlineX className={className} />,
      flag: <HiOutlineFlag className={className} />,
      question: <HiOutlineQuestionMarkCircle className={className} />,
      heart: <HiOutlineHeart className={className} />,
      star: <HiOutlineStar className={className} />,
      clock: <HiOutlineClock className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
    };
    return icons[iconName] || <HiOutlineMail className={className} />;
  };

  /**
   * Validate email
   */
  const validateEmail = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email address';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle unsubscribe request
   */
  const handleUnsubscribeRequest = () => {
    if (!validateEmail()) return;
    setShowConfirmModal(true);
  };

  /**
   * Handle confirm unsubscribe
   */
  const handleConfirmUnsubscribe = () => {
    setShowConfirmModal(false);
    setStep('confirm');
  };

  /**
   * Handle submit feedback
   */
  const handleSubmitFeedback = () => {
    setStep('success');
    // In a real implementation, you would send the feedback to your backend
    setTimeout(() => {
      setStep('form');
      setReason('');
      setFeedback('');
      setEmail('');
    }, 5000);
  };

  /**
   * Handle update preferences
   */
  const handleUpdatePreferences = () => {
    window.location.href = '/newsletter/preferences';
  };

  /**
   * Handle retention option selection
   */
  const handleRetentionOption = (optionLabel) => {
    // In a real implementation, you would handle these options
    alert(`You selected: ${optionLabel}. This feature would redirect to preferences.`);
  };

  /**
   * Close confirmation modal
   */
  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Unsubscribe Option"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div
        className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineMail className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Manage Subscription"}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {step === 'success' ? "You've Been Unsubscribed" :
              step === 'confirm' ? "Confirm Your Request" :
                "Unsubscribe from Our Newsletter"}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {step === 'success' ? "We're sorry to see you go. Your request has been processed successfully." :
              step === 'confirm' ? "Please confirm that you want to unsubscribe from our newsletter." :
                "We're sorry to see you go. Enter your email address to unsubscribe from our newsletter."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        {step === 'form' && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, "w-5 h-5 text-blue-600 dark:text-blue-400")}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== MAIN CARD ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Step 1: Email Entry Form */}
          {step === 'form' && (
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4">
                  <HiOutlineX className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter your email address to unsubscribe or manage your preferences.
                </p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleUnsubscribeRequest(); }} className="max-w-md mx-auto">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                    aria-label="Email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Continue to unsubscribe"
                >
                  Continue
                  <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                </button>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={handleUpdatePreferences}
                    className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                    aria-label="Update preferences"
                  >
                    I want to update my preferences instead →
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We value your privacy. Your email will be removed from our mailing list within 24 hours.
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Confirmation & Reason Selection */}
          {step === 'confirm' && (
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                  <HiOutlineQuestionMarkCircle className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Help Us Improve
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Please tell us why you're unsubscribing (optional).
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Reason for leaving:
                  </label>
                  <div className="space-y-3">
                    {reasons.map((r) => (
                      <label key={r.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                        <input
                          type="radio"
                          name="reason"
                          value={r.id}
                          checked={reason === r.id}
                          onChange={(e) => setReason(e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="flex items-center gap-2">
                          {getIcon(r.icon, 'w-4 h-4 text-gray-500')}
                          <span className="text-sm text-gray-700 dark:text-gray-300">{r.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional feedback (optional):
                  </label>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows="4"
                    placeholder="We'd love to hear how we can improve..."
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    aria-label="Additional feedback"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep('form')}
                    className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                    aria-label="Go back"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={handleSubmitFeedback}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    aria-label="Confirm unsubscribe"
                  >
                    Unsubscribe
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Success Message */}
          {step === 'success' && (
            <div className="p-8 md:p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
                <HiOutlineCheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Successfully Unsubscribed!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You have been removed from our mailing list. You will no longer receive emails from us.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/'}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  aria-label="Return to homepage"
                >
                  Return to Homepage
                  <HiOutlineArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleUpdatePreferences}
                  className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                  aria-label="Manage preferences"
                >
                  Manage Preferences
                  <HiOutlineRefresh className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ==================== ALTERNATIVE OPTIONS ==================== */}
        {step === 'form' && (
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">
              Other Options
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {retentionOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleRetentionOption(option.label)}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl text-left hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-600"
                  aria-label={option.label}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    {getIcon(option.icon, "w-5 h-5 text-blue-600 dark:text-blue-400")}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{option.label}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CONFIRMATION MODAL ==================== */}
        {showConfirmModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeConfirmModal}
            role="dialog"
            aria-label="Confirm Un-Subscription"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-red-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Confirm Un-Subscription</h3>
                  <button
                    onClick={closeConfirmModal}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Are you sure you want to unsubscribe <span className="font-semibold">{email}</span> from our newsletter?
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={closeConfirmModal}
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Cancel"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmUnsubscribe}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    aria-label="Confirm unsubscribe"
                  >
                    Yes, Unsubscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TRUST INDICATORS ==================== */}
        {step === 'form' && (
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Instant processing</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
              <span>No questions asked</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
              <span>GDPR compliant</span>
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
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

export default UnsubscribeOptionSection1;