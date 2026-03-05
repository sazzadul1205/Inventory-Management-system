// pages/auth/login.jsx

/**
 * Login Page Component
 * Handles user authentication with email/password
 * Features: form validation, password visibility toggle, remember me, and demo credentials
 * Dark mode support with ThemeToggle component
 */

// React Core Imports
import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

// React Icons for better UI visualization
import {
  HiMail,
  HiLockClosed,
  HiEye,
  HiEyeOff,
  HiOutlineExclamationCircle,
  HiOutlineCheckCircle,
} from 'react-icons/hi';
import { FiLogIn } from 'react-icons/fi';

// Logo Image Import - Update path based on your logo location
import Icon from '../../../../public/Icon.png'; // Adjust path as needed

// Import ThemeToggle component
import ThemeToggle from '@/components/ThemeToggle'; // Adjust path as needed

/**
 * Login Component
 * @param {Object} props - Component properties
 * @param {string} props.status - Optional status message (e.g., "Password reset successful")
 * @param {boolean} props.canResetPassword - Whether password reset is enabled
 * @param {boolean} props.canRegister - Whether new registration is allowed
 */
const Login = ({ status, canResetPassword = true, canRegister = true }) => {
  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Inertia's useForm hook for form handling
   * Provides form state, validation errors, and submission methods
   */
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',      // User's email address
    password: '',   // User's password
    remember: false, // Remember me checkbox state
  });

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const submit = (e) => {
    e.preventDefault();
    post('/login', {
      onSuccess: () => reset('password'), // Clear password field on successful login
    });
  };

  /**
   * Toggle password visibility
   * Switches between text and password input types
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
              src={Icon}
              alt="Sazzadul Inventory and Logistics"
              className="w-48 h-auto object-contain mb-4 hover:opacity-90 transition-opacity duration-200 dark:brightness-90"
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
                    <HiMail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    autoFocus // Automatically focus this field on page load
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)} // Update form state
                    className={`cursor-auto pl-10 appearance-none block w-full px-3 py-2.5 border ${errors.email ? 'border-red-300 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                    placeholder="you@example.com"
                  />
                </div>
                {/* Email Validation Error Message */}
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <HiOutlineExclamationCircle className="h-4 w-4 mr-1" />
                    {errors.email}
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
                    <HiLockClosed className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'} // Toggle between text/password
                    autoComplete="current-password"
                    required
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    className={`cursor-auto pl-10 pr-10 appearance-none block w-full px-3 py-2.5 border ${errors.password ? 'border-red-300 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                    placeholder="••••••••"
                  />
                  {/* Password Visibility Toggle Button */}
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <HiEyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition duration-150" />
                    ) : (
                      <HiEye className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition duration-150" />
                    )}
                  </button>
                </div>
                {/* Password Validation Error Message */}
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <HiOutlineExclamationCircle className="h-4 w-4 mr-1" />
                    {errors.password}
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
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={processing} // Disable while processing
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