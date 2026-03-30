// page/frontend/Features/SecurityFeaturesSection/SecurityFeaturesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import { FiAlertTriangle } from "react-icons/fi";
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineKey,
  HiOutlineUserGroup,
  HiOutlineEye,
  HiOutlineDocumentText,
  HiOutlineServer,
  HiOutlineClipboardList,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineFingerPrint,
  HiOutlineMail,
  HiOutlineGlobeAlt,
  HiOutlineRefresh,
  HiOutlineClock
} from 'react-icons/hi';

const SecurityFeaturesSection2 = ({ config }) => {
  const [selectedFeature, setSelectedFeature] = useState('encryption');
  const [mfaStep, setMfaStep] = useState(1);
  const [authCode, setAuthCode] = useState('');
  const [authVerified, setAuthVerified] = useState(false);

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'lock':
        return <HiOutlineLockClosed className={className} />;
      case 'key':
        return <HiOutlineKey className={className} />;
      case 'users':
        return <HiOutlineUserGroup className={className} />;
      case 'eye':
        return <HiOutlineEye className={className} />;
      case 'document':
        return <HiOutlineDocumentText className={className} />;
      case 'server':
        return <HiOutlineServer className={className} />;
      case 'clipboard':
        return <HiOutlineClipboardList className={className} />;
      case 'fingerprint':
        return <HiOutlineFingerPrint className={className} />;
      case 'mail':
        return <HiOutlineMail className={className} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={className} />;
      case 'alert':
        return <FiAlertTriangle className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      default:
        return <HiOutlineShieldCheck className={className} />;
    }
  };

  const handleMfaVerification = () => {
    if (authCode === '123456') {
      setAuthVerified(true);
    } else {
      alert('Invalid code. Try: 123456');
    }
  };

  const resetMfa = () => {
    setMfaStep(1);
    setAuthCode('');
    setAuthVerified(false);
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Security Features Section"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Feature badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          <p
            className="text-xl text-gray-600 dark:text-gray-300"
            itemProp="description"
          >
            {config?.description}
          </p>
        </div>

        {/* Split Layout: Left - Features, Right - Security Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Features List */}
          <div className="space-y-6">
            {config?.features?.map((feature) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 p-6 rounded-2xl ${selectedFeature === feature.id
                  ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-emerald-500 dark:border-emerald-400'
                  : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
                onClick={() => setSelectedFeature(feature.id)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedFeature(feature.id)}
                role="button"
                tabIndex={0}
                aria-label={`View ${feature.title} details`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${selectedFeature === feature.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-emerald-100 dark:bg-gray-700 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-200 dark:group-hover:bg-gray-600'
                    }`}>
                    {getFeatureIcon(feature.icon)}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>

                    {/* Expanded Details - Show when active */}
                    {selectedFeature === feature.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                        <ul className="space-y-2">
                          {feature.details?.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                              <HiOutlineCheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mr-2 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={feature.link}
                          className="inline-flex items-center mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                        >
                          <span>Learn more</span>
                          <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Interactive Security Simulator */}
          <div className="sticky top-24">
            <div className="bg-linear-to-br from-emerald-50 to-green-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-2xl">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Security Simulator</span>
              </div>

              {/* Dynamic Content based on Selected Feature */}
              <div className="space-y-6">
                {selectedFeature === 'encryption' && (
                  <div>
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <HiOutlineLockClosed className="w-10 h-10 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white">AES-256 Encryption</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Your data is securely encrypted</p>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">Original Data</span>
                        <HiOutlineRefresh className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="text-green-400 text-xs font-mono break-all">Sensitive Customer Data: Order #12345, Total $1,299.99</p>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">Encrypted Data</span>
                        <HiOutlineLockClosed className="w-4 h-4 text-green-400" />
                      </div>
                      <p className="text-green-400 text-xs font-mono break-all">7b3d8e2f9a1c4e5b8d7f2a3c6e9f1b4d8e2c5f7a9b3d6e8c1f4a7b9e2d5c8f1a4b7</p>
                    </div>

                    <div className="mt-4 text-center text-xs text-gray-500">
                      <p>✓ AES-256 encryption (military-grade)</p>
                      <p>✓ TLS 1.3 for data in transit</p>
                    </div>
                  </div>
                )}

                {selectedFeature === 'mfa' && (
                  <div>
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <HiOutlineKey className="w-10 h-10 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Multi-Factor Authentication</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Test the MFA flow</p>
                    </div>

                    {!authVerified ? (
                      <div>
                        {mfaStep === 1 && (
                          <div className="bg-white dark:bg-gray-700 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Enter your password:</p>
                            <input
                              type="password"
                              placeholder="••••••••"
                              className="w-full px-3 py-2 border rounded-lg text-sm mb-3"
                              defaultValue="password123"
                            />
                            <button
                              onClick={() => setMfaStep(2)}
                              className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700"
                            >
                              Verify Password
                            </button>
                          </div>
                        )}

                        {mfaStep === 2 && (
                          <div>
                            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 mb-4">
                              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                Enter verification code from authenticator app:
                              </p>
                              <input
                                type="text"
                                value={authCode}
                                onChange={(e) => setAuthCode(e.target.value)}
                                placeholder="123456"
                                className="w-full px-3 py-2 border rounded-lg text-sm mb-3"
                              />
                              <div className="flex gap-2">
                                <button
                                  onClick={handleMfaVerification}
                                  className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700"
                                >
                                  Verify
                                </button>
                                <button
                                  onClick={() => setMfaStep(1)}
                                  className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400"
                                >
                                  Back
                                </button>
                              </div>
                            </div>
                            <p className="text-xs text-gray-500 text-center">Demo code: 123456</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 text-center">
                        <HiOutlineCheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
                        <p className="text-green-800 dark:text-green-300 font-semibold">Authentication Successful!</p>
                        <p className="text-xs text-green-600 mt-1">MFA verified. Access granted.</p>
                        <button
                          onClick={resetMfa}
                          className="mt-3 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700"
                        >
                          Try Again
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {selectedFeature === 'rbac' && (
                  <div>
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <HiOutlineUserGroup className="w-10 h-10 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Role-Based Access Control</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Simulate different user roles</p>
                    </div>

                    <div className="space-y-3">
                      {['Admin', 'Manager', 'Viewer'].map((role, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-700 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-gray-900 dark:text-white">{role}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${role === 'Admin' ? 'bg-purple-100 text-purple-700' :
                              role === 'Manager' ? 'bg-blue-100 text-blue-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                              {role === 'Admin' ? 'Full Access' : role === 'Manager' ? 'Edit Access' : 'Read Only'}
                            </span>
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {role === 'Admin' && 'Can create, edit, delete, and manage users'}
                            {role === 'Manager' && 'Can edit inventory and create orders'}
                            {role === 'Viewer' && 'Can only view data and generate reports'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedFeature === 'audit' && (
                  <div>
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <HiOutlineClipboardList className="w-10 h-10 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Audit Log Simulator</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Recent security events</p>
                    </div>

                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {[
                        { action: 'User Login', user: 'john.doe@company.com', time: '2 minutes ago', status: 'success' },
                        { action: 'Password Change', user: 'jane.smith@company.com', time: '15 minutes ago', status: 'success' },
                        { action: 'MFA Enabled', user: 'mike.wilson@company.com', time: '1 hour ago', status: 'success' },
                        { action: 'Failed Login Attempt', user: 'unknown@ip.com', time: '2 hours ago', status: 'failed' },
                        { action: 'Role Updated', user: 'admin@company.com', time: '3 hours ago', status: 'success' },
                        { action: 'Data Export', user: 'analyst@company.com', time: '5 hours ago', status: 'success' }
                      ].map((log, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-700 rounded-lg p-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-gray-900 dark:text-white">{log.action}</span>
                            <span className={`px-2 py-0.5 rounded-full ${log.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                              }`}>
                              {log.status}
                            </span>
                          </div>
                          <div className="flex justify-between mt-1 text-gray-500">
                            <span>{log.user}</span>
                            <span>{log.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Security Score */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Security Score</span>
                    <span className="text-sm font-bold text-emerald-600">98/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '98%' }} />
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-gray-500">
                    <div>✓ Encryption: Active</div>
                    <div>✓ MFA: Available</div>
                    <div>✓ Audit Logs: Enabled</div>
                    <div>✓ RBAC: Configured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Row */}
        {config?.certifications && (
          <div className="mt-20">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Industry-Leading Certifications
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {config.certifications.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{cert.icon}</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{cert.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{cert.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-1 bg-gray-50 dark:bg-gray-800/50 rounded-full pl-6 pr-2 py-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to secure your operations?"}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className={`${config?.ctaButton?.backgroundColor} ${config?.ctaButton?.textColor} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2`}
                aria-label="Learn about security"
              >
                {config?.ctaButton?.text || "Contact Security Team"}
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

export default SecurityFeaturesSection2;