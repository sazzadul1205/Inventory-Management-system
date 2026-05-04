// page/frontend/Newsletter/UnsubscribeOptionSection/UnsubscribeOptionSection2.jsx

/**
 * Unsubscribe Option Section II - Advanced Subscription Management Hub
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Spam Rate, Processing Time, Request Honored, Preferences Updated)
 * - Multi-step Flow (Email Entry, Reason Selection, Preferences Management, Success)
 * - Detailed Reason Selection with Descriptions and Icons
 * - Email Type Preferences Toggle (Weekly Newsletter, Product Updates, Event Invites, Marketing)
 * - Frequency Selection with Radio Options (Daily, Weekly, Bi-weekly, Monthly)
 * - Success Toast Notification for Preference Updates
 * - Confirmation Modal for Unsubscription
 * - Alternative Options Section with Support Link
 * - Trust Indicators with Privacy and Speed Badges
 * - Animated Gradient Orbs in Background
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
  HiOutlineClock,
  HiOutlineRefresh,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiOutlineExternalLink,
  HiOutlineShieldCheck,
} from 'react-icons/hi';

const UnsubscribeOptionSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('form');
  const [errors, setErrors] = useState({});
  const [reason, setReason] = useState('');
  const [feedback, setFeedback] = useState('');
  const [frequency, setFrequency] = useState('weekly');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [selectedPreferences, setSelectedPreferences] = useState({ weeklyNewsletter: true, productUpdates: true, eventInvites: true, marketingEmails: true });

  // ==================== MEMOIZED DATA ====================

  const reasons = config?.reasons || [
    { id: 'too-many-emails', label: 'Too many emails', icon: 'mail', description: 'You receive more emails than you\'d like' },
    { id: 'not-relevant', label: 'Content not relevant', icon: 'eye', description: 'The content doesn\'t match your interests' },
    { id: 'never-subscribed', label: 'Never subscribed', icon: 'x', description: 'You don\'t remember signing up' },
    { id: 'spam', label: 'Mark as spam', icon: 'flag', description: 'You consider these emails as spam' },
    { id: 'change-interests', label: 'Change interests', icon: 'refresh', description: 'Your interests have changed' },
    { id: 'other', label: 'Other reason', icon: 'question', description: 'Another reason not listed' }
  ];

  const frequencyOptions = [
    { value: 'daily', label: 'Daily', description: 'Get updates every day' },
    { value: 'weekly', label: 'Weekly', description: 'Get updates once a week (recommended)' },
    { value: 'biweekly', label: 'Bi-weekly', description: 'Get updates every two weeks' },
    { value: 'monthly', label: 'Monthly', description: 'Get updates once a month' }
  ];

  const stats = config?.stats || [
    { value: "0%", label: "Spam Rate", icon: "check", trend: "Industry best" },
    { value: "24h", label: "Request Processing", icon: "clock", trend: "Guaranteed" },
    { value: "100%", label: "Request Honored", icon: "heart", trend: "No questions asked" },
    { value: "50K+", label: "Preferences Updated", icon: "cog", trend: "Monthly" }
  ];

  // ==================== HELPER FUNCTIONS ====================

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
    if (reason === 'change-interests') {
      setStep('preferences');
    } else {
      setStep('confirm');
    }
  };

  /**
   * Handle submit feedback
   */
  const handleSubmitFeedback = () => {
    setStep('success');
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 5000);
  };

  /**
   * Handle save preferences
   */
  const handleSavePreferences = () => {
    setStep('success');
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 5000);
  };

  /**
   * Handle manage all subscriptions
   */
  const handleManageAllSubscriptions = () => {
    alert('This would redirect to the full subscription management center.');
  };

  /**
   * Close confirmation modal
   */
  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Unsubscribe Options Center"
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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
            <HiOutlineCog className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Manage Subscription"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {step === 'success' ? "Preferences Updated!" :
              step === 'confirm' ? "Confirm Un-Subscription" :
                step === 'preferences' ? "Update Your Preferences" :
                  "Manage Your Email Preferences"}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            {step === 'success' ? "Your email preferences have been updated successfully." :
              step === 'confirm' ? "Please tell us why you're leaving to help us improve." :
                step === 'preferences' ? "Choose what emails you'd like to receive and how often." :
                  "Enter your email address to manage your subscription preferences."}
          </p>
        </div>

        {/* ==================== STATS CARDS ==================== */}
        {step === 'form' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                <div className="text-xs text-emerald-500 mt-1">{stat.trend}</div>
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
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <HiOutlineMail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter your email address to manage your subscription preferences.
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Continue"
                >
                  Continue
                  <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                </button>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={handleManageAllSubscriptions}
                    className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline flex items-center justify-center gap-1"
                    aria-label="Manage all subscriptions"
                  >
                    Manage all subscriptions
                    <HiOutlineExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                <div className="flex justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <HiOutlineShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Privacy protected</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HiOutlineClock className="w-4 h-4 text-blue-500" />
                    <span>Instant updates</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Reason Selection */}
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
                      <label key={r.id} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                        <input
                          type="radio"
                          name="reason"
                          value={r.id}
                          checked={reason === r.id}
                          onChange={(e) => setReason(e.target.value)}
                          className="w-4 h-4 text-blue-600 mt-1 focus:ring-blue-500"
                        />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">{r.label}</div>
                          <div className="text-xs text-gray-500">{r.description}</div>
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
                    aria-label="Unsubscribe"
                  >
                    Unsubscribe
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Preferences Management */}
          {step === 'preferences' && (
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                  <HiOutlineCog className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Customize Your Email Preferences
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose what emails you'd like to receive.
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Email Frequency:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {frequencyOptions.map((opt) => (
                      <label key={opt.value} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                        <input
                          type="radio"
                          name="frequency"
                          value={opt.value}
                          checked={frequency === opt.value}
                          onChange={(e) => setFrequency(e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">{opt.label}</div>
                          <div className="text-xs text-gray-500">{opt.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Email Types:
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Weekly Newsletter</div>
                        <div className="text-xs text-gray-500">Industry insights and trends</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedPreferences.weeklyNewsletter}
                        onChange={(e) => setSelectedPreferences({ ...selectedPreferences, weeklyNewsletter: e.target.checked })}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </label>
                    <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Product Updates</div>
                        <div className="text-xs text-gray-500">New features and improvements</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedPreferences.productUpdates}
                        onChange={(e) => setSelectedPreferences({ ...selectedPreferences, productUpdates: e.target.checked })}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </label>
                    <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Event Invites</div>
                        <div className="text-xs text-gray-500">Webinars and conferences</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedPreferences.eventInvites}
                        onChange={(e) => setSelectedPreferences({ ...selectedPreferences, eventInvites: e.target.checked })}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </label>
                    <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Marketing Emails</div>
                        <div className="text-xs text-gray-500">Special offers and promotions</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedPreferences.marketingEmails}
                        onChange={(e) => setSelectedPreferences({ ...selectedPreferences, marketingEmails: e.target.checked })}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep('form')}
                    className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                    aria-label="Cancel"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    aria-label="Save preferences"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Success Message */}
          {step === 'success' && (
            <div className="p-8 md:p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
                <HiOutlineCheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Preferences Updated!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Your email preferences have been updated successfully. You'll now receive emails based on your new settings.
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
                  onClick={() => setStep('form')}
                  className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                  aria-label="Manage another email"
                >
                  Manage Another Email
                  <HiOutlineRefresh className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ==================== ALTERNATIVE OPTIONS ==================== */}
        {step === 'form' && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Having trouble? <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact our support team</a>
            </p>
          </div>
        )}

        {/* ==================== SUCCESS TOAST ==================== */}
        {showSuccessToast && (
          <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-700 rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <HiOutlineCheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm text-emerald-700 dark:text-emerald-300">Preferences saved successfully!</p>
              </div>
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
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default UnsubscribeOptionSection2;