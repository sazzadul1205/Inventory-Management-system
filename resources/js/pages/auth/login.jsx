// pages/auth/login.jsx

/**
 * Login Page Component
 * Handles user authentication with email/password
 * Features: form validation, password visibility toggle, remember me, and demo credentials
 * Dark mode support with ThemeToggle component
 * Comprehensive error handling for all scenarios
 */

// React Core Imports
import { useState, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

// React Icons for better UI visualization
import {
  HiMail,
  HiLockClosed,
  HiEye,
  HiEyeOff,
  HiOutlineExclamationCircle,
  HiOutlineCheckCircle,
  HiOutlineShieldExclamation,
  HiOutlineServer,
  HiOutlineRefresh,
} from 'react-icons/hi';
import { FiLogIn } from 'react-icons/fi';

// Logo Image Import - Update path based on your logo location
import Icon from '../../../../public/Icon.png'; // Adjust path as needed
import DarkIcon from '../../../../public/DarkIcon.png';

// Import ThemeToggle component
import ThemeToggle from '@/components/ThemeToggle'; // Adjust path as needed

const getIsDarkTheme = () => {
  if (typeof window === 'undefined') return false;

  if (document.documentElement.classList.contains('dark')) {
    return true;
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Login Component
 * @param {Object} props - Component properties
 * @param {string} props.status - Optional status message (e.g., "Password reset successful")
 * @param {boolean} props.canResetPassword - Whether password reset is enabled
 * @param {boolean} props.canRegister - Whether new registration is allowed
 */
const Login = ({ status, canResetPassword = true, canRegister = true }) => {
  const [darkMode, setDarkMode] = useState(getIsDarkTheme);

  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State for network error handling
  const [networkError, setNetworkError] = useState(null);

  // State for rate limiting
  const [rateLimit, setRateLimit] = useState({
    attempts: 0,
    lockedUntil: null,
  });

  // State for field-level validation errors (client-side)
  const [clientErrors, setClientErrors] = useState({});

  /**
   * Inertia's useForm hook for form handling
   * Provides form state, validation errors, and submission methods
   */
  const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
    email: '',      // User's email address
    password: '',   // User's password
    remember: false, // Remember me checkbox state
  });

  /**
   * Effect to handle rate limiting
   */
  useEffect(() => {
    if (rateLimit.lockedUntil && rateLimit.lockedUntil > Date.now()) {
      const timer = setTimeout(() => {
        setRateLimit({ attempts: 0, lockedUntil: null });
      }, rateLimit.lockedUntil - Date.now());

      return () => clearTimeout(timer);
    }
  }, [rateLimit.lockedUntil]);

  /**
   * Effect to clear network error after successful submission
   */
  useEffect(() => {
    if (wasSuccessful) {
      setNetworkError(null);
      setClientErrors({});
    }
  }, [wasSuccessful]);

  useEffect(() => {
    const syncTheme = () => setDarkMode(getIsDarkTheme());
    const root = document.documentElement;
    const observer = new MutationObserver(syncTheme);
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('storage', syncTheme);
    mediaQuery.addEventListener('change', syncTheme);
    syncTheme();

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', syncTheme);
      mediaQuery.removeEventListener('change', syncTheme);
    };
  }, []);

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const submit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setNetworkError(null);
    setClientErrors({});

    // Client-side validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setClientErrors(validationErrors);
      return;
    }

    // Check rate limiting
    if (rateLimit.lockedUntil && rateLimit.lockedUntil > Date.now()) {
      const waitTime = Math.ceil((rateLimit.lockedUntil - Date.now()) / 1000);
      setNetworkError({
        type: 'rate_limit',
        message: `Too many login attempts. Please wait ${waitTime} seconds.`
      });
      return;
    }

    // Attempt login
    post('/login', {
      onSuccess: () => {
        reset('password');
        setRateLimit({ attempts: 0, lockedUntil: null });
      },
      onError: (errors) => {
        // Increment failed attempts for rate limiting
        const newAttempts = rateLimit.attempts + 1;
        const maxAttempts = 5;
        const lockoutTime = 60 * 1000; // 1 minute

        if (newAttempts >= maxAttempts) {
          setRateLimit({
            attempts: newAttempts,
            lockedUntil: Date.now() + lockoutTime,
          });
          setNetworkError({
            type: 'rate_limit',
            message: 'Too many failed attempts. Please wait 1 minute before trying again.'
          });
        } else {
          setRateLimit({
            ...rateLimit,
            attempts: newAttempts,
          });
        }

        // Handle specific error types
        if (errors.email && errors.email.includes('not found')) {
          setNetworkError({
            type: 'not_found',
            message: 'No account found with this email address.'
          });
        } else if (errors.password && errors.password.includes('incorrect')) {
          setNetworkError({
            type: 'invalid_password',
            message: 'Incorrect password. Please try again.'
          });
        } else if (errors.account && errors.account.includes('inactive')) {
          setNetworkError({
            type: 'inactive',
            message: 'Your account is inactive. Please contact support.'
          });
        } else {
          setNetworkError({
            type: 'general',
            message: 'Login failed. Please check your credentials and try again.'
          });
        }
      },
      onFinish: () => {
        // Any cleanup after submission (success or error)
      },
    });
  };

  /**
   * Client-side form validation
   * @returns {Object} Validation errors
   */
  const validateForm = () => {
    const errors = {};

    // Email validation
    if (!data.email) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    } else if (data.email.length > 100) {
      errors.email = 'Email address must not exceed 100 characters';
    }

    // Password validation
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    } else if (data.password.length > 50) {
      errors.password = 'Password must not exceed 50 characters';
    }

    return errors;
  };

  /**
   * Handle input change with validation
   * @param {string} field - Field name
   * @param {any} value - Field value
   */
  const handleInputChange = (field, value) => {
    setData(field, value);

    // Clear field-specific error when user starts typing
    if (clientErrors[field]) {
      setClientErrors({
        ...clientErrors,
        [field]: null,
      });
    }

    // Clear network error when user starts typing
    if (networkError) {
      setNetworkError(null);
    }
  };

  /**
   * Toggle password visibility
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  /**
   * Retry login after error
   */
  const handleRetry = () => {
    setNetworkError(null);
    setClientErrors({});
    submit(new Event('submit'));
  };

  /**
   * Get error message to display
   */
  const getErrorMessage = () => {
    if (networkError) {
      return networkError.message;
    }
    return null;
  };

  /**
   * Get error icon based on error type
   */
  const getErrorIcon = () => {
    if (!networkError) return null;

    switch (networkError.type) {
      case 'rate_limit':
        return <HiOutlineShieldExclamation className="h-5 w-5 mr-2" />;
      case 'inactive':
        return <HiOutlineShieldExclamation className="h-5 w-5 mr-2" />;
      case 'server_error':
        return <HiOutlineServer className="h-5 w-5 mr-2" />;
      default:
        return <HiOutlineExclamationCircle className="h-5 w-5 mr-2" />;
    }
  };

  return (
    <>
      {/* Document Head - Sets page title */}
      <Head title="Log in" />

      {/* Theme Toggle Button - Floating at top left */}
      <ThemeToggle />

      {/* Main Container - Full viewport height with gradient background */}
      <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors duration-300">

        {/* Header Section - Logo, Title, and Subtitle */}
        <div className="sm:mx-auto sm:w-full sm:max-w-md">

          {/* Logo Container - Centered with shadow effect */}
          <div className="flex justify-center">
            {/* Company Logo - Replace with your actual logo */}
                <img
                  src={darkMode ? DarkIcon : Icon}
                  alt="Sazzadul Inventory and Logistics"
                  className="w-56 h-auto object-contain mb-4 hover:opacity-90 transition-opacity duration-200 dark:brightness-90"
                />
          </div>

          {/* Welcome Text */}
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Please sign in to your account
          </p>
        </div>

        {/* Login Form Container - Card with shadow and border */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-xl shadow-indigo-100/50 dark:shadow-gray-900/50 sm:rounded-xl sm:px-10 border border-gray-100 dark:border-gray-700 transition-colors duration-300">

            {/* Network/Server Error Message - Display at top of form */}
            {networkError && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-start">
                  <div className="shrink-0">
                    {getErrorIcon()}
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-red-800 dark:text-red-300">
                      {getErrorMessage()}
                    </p>
                    {networkError.type === 'server_error' && (
                      <button
                        onClick={handleRetry}
                        className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 transition duration-150"
                      >
                        <HiOutlineRefresh className="h-4 w-4 mr-1" />
                        Try again
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => setNetworkError(null)}
                    className="ml-auto text-red-400 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                  >
                    <span className="sr-only">Dismiss</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Login Form - Handles authentication */}
            <form onSubmit={submit} className="space-y-6">

              {/* Email Input Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email address
                </label>
                <div className="relative">
                  {/* Email Icon - Left side of input */}
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiMail className={`h-5 w-5 ${errors.email || clientErrors.email
                        ? 'text-red-400 dark:text-red-500'
                        : 'text-gray-400 dark:text-gray-500'
                      }`} />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    autoFocus
                    value={data.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onBlur={() => {
                      const validationErrors = validateForm();
                      if (validationErrors.email) {
                        setClientErrors({
                          ...clientErrors,
                          email: validationErrors.email,
                        });
                      }
                    }}
                    className={`pl-10 appearance-none block w-full px-3 py-2.5 border ${errors.email || clientErrors.email
                        ? 'border-red-300 dark:border-red-500 bg-red-50 dark:bg-red-900/10'
                        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
                      } rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 text-gray-900 dark:text-white`}
                    placeholder="you@example.com"
                    disabled={rateLimit.lockedUntil > Date.now()}
                  />
                </div>
                {/* Email Validation Error Message */}
                {(errors.email || clientErrors.email) && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <HiOutlineExclamationCircle className="h-4 w-4 mr-1 shrink-0" />
                    {errors.email || clientErrors.email}
                  </p>
                )}
              </div>

              {/* Password Input Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  {/* Forgot Password Link - Only shown if enabled */}
                  {canResetPassword && (
                    <Link
                      href="/forgot-password"
                      className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium transition duration-150"
                    >
                      Forgot password?
                    </Link>
                  )}
                </div>
                <div className="relative">
                  {/* Lock Icon - Left side */}
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiLockClosed className={`h-5 w-5 ${errors.password || clientErrors.password
                        ? 'text-red-400 dark:text-red-500'
                        : 'text-gray-400 dark:text-gray-500'
                      }`} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={data.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    onBlur={() => {
                      const validationErrors = validateForm();
                      if (validationErrors.password) {
                        setClientErrors({
                          ...clientErrors,
                          password: validationErrors.password,
                        });
                      }
                    }}
                    className={`pl-10 pr-10 appearance-none block w-full px-3 py-2.5 border ${errors.password || clientErrors.password
                        ? 'border-red-300 dark:border-red-500 bg-red-50 dark:bg-red-900/10'
                        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
                      } rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 text-gray-900 dark:text-white`}
                    placeholder="••••••••"
                    disabled={rateLimit.lockedUntil > Date.now()}
                  />
                  {/* Password Visibility Toggle Button */}
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    disabled={rateLimit.lockedUntil > Date.now()}
                  >
                    {showPassword ? (
                      <HiEyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition duration-150" />
                    ) : (
                      <HiEye className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition duration-150" />
                    )}
                  </button>
                </div>
                {/* Password Validation Error Message */}
                {(errors.password || clientErrors.password) && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <HiOutlineExclamationCircle className="h-4 w-4 mr-1 shrink-0" />
                    {errors.password || clientErrors.password}
                  </p>
                )}
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={data.remember}
                  onChange={(e) => setData('remember', e.target.checked)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition duration-150 dark:bg-gray-700 dark:border-gray-600"
                  disabled={rateLimit.lockedUntil > Date.now()}
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me for 30 days
                </label>
              </div>

              {/* Rate Limit Warning */}
              {rateLimit.lockedUntil > Date.now() && (
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-300 flex items-center">
                    <HiOutlineShieldExclamation className="h-5 w-5 mr-2" />
                    Account temporarily locked. Please wait before trying again.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={processing || rateLimit.lockedUntil > Date.now()}
                  className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 transform hover:scale-[1.02] active:scale-[0.98] dark:focus:ring-offset-gray-800"
                >
                  {processing ? (
                    // Loading Spinner - Shown during form submission
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : rateLimit.lockedUntil > Date.now() ? (
                    // Locked State
                    <>
                      <HiOutlineShieldExclamation className="mr-2 h-5 w-5" />
                      Account locked
                    </>
                  ) : (
                    // Normal Button State
                    <>
                      <FiLogIn className="mr-2 h-5 w-5" />
                      Sign in
                    </>
                  )}
                </button>
              </div>

              {/* Registration Link - Only shown if registration is enabled */}
              {canRegister && (
                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account?{' '}
                  <Link href="/register" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium transition duration-150">
                    Create free account
                  </Link>
                </div>
              )}

              {/* Status Message - For success/error notifications */}
              {status && (
                <div className="flex items-center justify-center text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <HiOutlineCheckCircle className="h-5 w-5 mr-2" />
                  {status}
                </div>
              )}
            </form>

            {/* Demo Credentials Section - Helpful for testing */}
            <div className="mt-6">
              <div className="relative">
                {/* Divider Line */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                {/* "Demo credentials" text in the middle of divider */}
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Demo credentials
                  </span>
                </div>
              </div>
              {/* Demo credentials display */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <div className="flex items-center">
                  <HiMail className="h-3 w-3 mr-1 text-gray-400 dark:text-gray-500" />
                  <span className="font-medium text-gray-700 dark:text-gray-300 mr-1">Email:</span>
                  <span className="dark:text-gray-400">demo@example.com</span>
                </div>
                <div className="flex items-center">
                  <HiLockClosed className="h-3 w-3 mr-1 text-gray-400 dark:text-gray-500" />
                  <span className="font-medium text-gray-700 dark:text-gray-300 mr-1">Password:</span>
                  <span className="dark:text-gray-400">password</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
