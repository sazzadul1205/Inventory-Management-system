// pages/auth/register.jsx

/**
 * Register Page Component
 * Handles new user registration with username, email, and password
 * Features: form validation, password confirmation, dark mode support
 * Comprehensive error handling for all scenarios
 */

// React Core Imports
import { useState, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

// React Icons for better UI visualization
import {
    HiUser,
    HiMail,
    HiLockClosed,
    HiEye,
    HiEyeOff,
    HiOutlineExclamationCircle,
    HiOutlineCheckCircle,
    HiBadgeCheck,
    HiOutlineShieldExclamation,
    HiOutlineServer,
    HiOutlineRefresh,
} from 'react-icons/hi';
import { FiUserPlus } from 'react-icons/fi';

// Logo Image Import
import Icon from '../../../../public/Icon.png';
import DarkIcon from '../../../../public/DarkIcon.png';

// Import ThemeToggle component
import ThemeToggle from '@/components/ThemeToggle';

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
 * Register Component
 * @param {Object} props - Component properties
 * @param {string} props.status - Optional status message
 */
const Register = ({ status }) => {
    const [darkMode, setDarkMode] = useState(getIsDarkTheme);

    // State for toggling password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // State for network error handling
    const [networkError, setNetworkError] = useState(null);

    // State for field-level validation errors (client-side)
    const [clientErrors, setClientErrors] = useState({});

    // State for password strength
    const [passwordStrength, setPasswordStrength] = useState({
        score: 0,
        hasMinLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false,
    });

    /**
     * Inertia's useForm hook for form handling
     * Matches the users table schema
     */
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        username: '',               // username field (unique)
        email: '',                  // email field (unique)
        password: '',               // raw password (hashed in backend)
        password_confirmation: '',  // password confirmation
        first_name: '',             // first_name field (nullable)
        last_name: '',              // last_name field (nullable)
    });

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
     * Effect to check password strength when password changes
     */
    useEffect(() => {
        const password = data.password;
        setPasswordStrength({
            hasMinLength: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
        });
    }, [data.password]);

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

        // Attempt registration
        post('/register', {
            onSuccess: () => {
                reset('password', 'password_confirmation');
                setNetworkError({
                    type: 'success',
                    message: 'Registration successful! Please check your email to verify your account.'
                });
            },
            onError: (errors) => {
                // Handle specific error types
                if (errors.email && errors.email.includes('already taken')) {
                    setNetworkError({
                        type: 'duplicate',
                        message: 'This email address is already registered. Please try logging in or use a different email.'
                    });
                } else if (errors.username && errors.username.includes('already taken')) {
                    setNetworkError({
                        type: 'duplicate',
                        message: 'This username is already taken. Please choose a different username.'
                    });
                } else if (errors.password && errors.password.includes('weak')) {
                    setNetworkError({
                        type: 'validation',
                        message: 'Password is too weak. Please follow the password requirements below.'
                    });
                } else if (errors.server) {
                    setNetworkError({
                        type: 'server',
                        message: 'Server error. Please try again later.'
                    });
                } else {
                    setNetworkError({
                        type: 'general',
                        message: 'Registration failed. Please check your information and try again.'
                    });
                }
            },
            onFinish: () => {
                // Any cleanup after submission
            },
        });
    };

    /**
     * Client-side form validation
     * @returns {Object} Validation errors
     */
    const validateForm = () => {
        const errors = {};

        // Username validation
        if (!data.username) {
            errors.username = 'Username is required';
        } else if (data.username.length < 3) {
            errors.username = 'Username must be at least 3 characters';
        } else if (data.username.length > 50) {
            errors.username = 'Username must not exceed 50 characters';
        } else if (!/^[a-zA-Z0-9_]+$/.test(data.username)) {
            errors.username = 'Username can only contain letters, numbers, and underscores';
        }

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
        } else {
            const strength = {
                hasMinLength: data.password.length >= 8,
                hasUpperCase: /[A-Z]/.test(data.password),
                hasLowerCase: /[a-z]/.test(data.password),
                hasNumber: /[0-9]/.test(data.password),
                hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(data.password),
            };

            if (!strength.hasMinLength) {
                errors.password = 'Password must be at least 8 characters';
            } else if (!strength.hasUpperCase) {
                errors.password = 'Password must contain at least one uppercase letter';
            } else if (!strength.hasLowerCase) {
                errors.password = 'Password must contain at least one lowercase letter';
            } else if (!strength.hasNumber) {
                errors.password = 'Password must contain at least one number';
            } else if (!strength.hasSpecialChar) {
                errors.password = 'Password must contain at least one special character';
            }
        }

        // Password confirmation validation
        if (data.password !== data.password_confirmation) {
            errors.password_confirmation = 'Passwords do not match';
        }

        // First name validation (optional but if provided)
        if (data.first_name && data.first_name.length > 50) {
            errors.first_name = 'First name must not exceed 50 characters';
        }

        // Last name validation (optional but if provided)
        if (data.last_name && data.last_name.length > 50) {
            errors.last_name = 'Last name must not exceed 50 characters';
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
        if (networkError && networkError.type !== 'success') {
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
     * Toggle confirm password visibility
     */
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    /**
     * Retry registration after error
     */
    const handleRetry = () => {
        setNetworkError(null);
        setClientErrors({});
        submit(new Event('submit'));
    };

    /**
     * Get error icon based on error type
     */
    const getErrorIcon = () => {
        if (!networkError) return null;

        switch (networkError.type) {
            case 'success':
                return <HiOutlineCheckCircle className="h-5 w-5 mr-2" />;
            case 'duplicate':
                return <HiOutlineShieldExclamation className="h-5 w-5 mr-2" />;
            case 'server':
                return <HiOutlineServer className="h-5 w-5 mr-2" />;
            default:
                return <HiOutlineExclamationCircle className="h-5 w-5 mr-2" />;
        }
    };

    /**
     * Get error background color based on error type
     */
    const getErrorBgColor = () => {
        if (!networkError) return '';

        switch (networkError.type) {
            case 'success':
                return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
            case 'duplicate':
            case 'server':
                return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
            default:
                return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
        }
    };

    /**
     * Get error text color based on error type
     */
    const getErrorTextColor = () => {
        if (!networkError) return '';

        switch (networkError.type) {
            case 'success':
                return 'text-green-800 dark:text-green-300';
            case 'duplicate':
            case 'server':
                return 'text-red-800 dark:text-red-300';
            default:
                return 'text-yellow-800 dark:text-yellow-300';
        }
    };

    return (
        <>
            {/* Document Head - Sets page title */}
            <Head title="Register" />

            {/* Theme Toggle Button - Floating at top left */}
            <ThemeToggle />

            {/* Main Container - Full viewport height with gradient background */}
            <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors duration-300">

                {/* Header Section - Logo, Title, and Subtitle */}
                <div className="sm:mx-auto sm:w-full sm:max-w-md">

                    {/* Logo Container */}
                    <div className="flex justify-center">
                        <img
                            src={darkMode ? DarkIcon : Icon}
                            alt="Sazzadul Inventory and Logistics"
                            className="w-56 h-auto object-contain mb-4 hover:opacity-90 transition-opacity duration-200 dark:brightness-90"
                        />
                    </div>

                    <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                        Create an account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Enter your details below to create your account
                    </p>
                </div>

                {/* Register Form Container */}
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-xl shadow-indigo-100/50 dark:shadow-gray-900/50 sm:rounded-xl sm:px-10 border border-gray-100 dark:border-gray-700 transition-colors duration-300">

                        {/* Network/Server Error Message - Display at top of form */}
                        {networkError && networkError.type !== 'success' && (
                            <div className={`mb-6 p-4 border rounded-lg ${getErrorBgColor()}`}>
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        {getErrorIcon()}
                                    </div>
                                    <div className="ml-3 flex-1">
                                        <p className={`text-sm font-medium ${getErrorTextColor()}`}>
                                            {networkError.message}
                                        </p>
                                        {networkError.type === 'server' && (
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
                                        className="ml-auto text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                                    >
                                        <span className="sr-only">Dismiss</span>
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Success Message */}
                        {networkError && networkError.type === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <HiOutlineCheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div className="ml-3 flex-1">
                                        <p className="text-sm font-medium text-green-800 dark:text-green-300">
                                            {networkError.message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Register Form */}
                        <form onSubmit={submit} className="space-y-6">

                            {/* Username Field */}
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Username <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <HiBadgeCheck className={`h-5 w-5 ${errors.username || clientErrors.username
                                            ? 'text-red-400 dark:text-red-500'
                                            : 'text-gray-400 dark:text-gray-500'
                                            }`} />
                                    </div>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        autoFocus
                                        value={data.username}
                                        onChange={(e) => handleInputChange('username', e.target.value)}
                                        onBlur={() => {
                                            const validationErrors = validateForm();
                                            if (validationErrors.username) {
                                                setClientErrors({
                                                    ...clientErrors,
                                                    username: validationErrors.username,
                                                });
                                            }
                                        }}
                                        className={`pl-10 appearance-none block w-full px-3 py-2.5 border ${errors.username || clientErrors.username
                                            ? 'border-red-300 dark:border-red-500 bg-red-50 dark:bg-red-900/10'
                                            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
                                            } rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 text-gray-900 dark:text-white`}
                                        placeholder="JohnDoe123"
                                    />
                                </div>
                                {(errors.username || clientErrors.username) && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                                        <HiOutlineExclamationCircle className="h-4 w-4 mr-1 shrink-0" />
                                        {errors.username || clientErrors.username}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email address <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
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
                                        required
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
                                        placeholder="email@example.com"
                                    />
                                </div>
                                {(errors.email || clientErrors.email) && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                                        <HiOutlineExclamationCircle className="h-4 w-4 mr-1 shrink-0" />
                                        {errors.email || clientErrors.email}
                                    </p>
                                )}
                            </div>

                            {/* First Name Field - Optional */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        First Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <HiUser className={`h-5 w-5 ${clientErrors.first_name
                                                ? 'text-red-400 dark:text-red-500'
                                                : 'text-gray-400 dark:text-gray-500'
                                                }`} />
                                        </div>
                                        <input
                                            id="first_name"
                                            name="first_name"
                                            type="text"
                                            value={data.first_name}
                                            onChange={(e) => handleInputChange('first_name', e.target.value)}
                                            onBlur={() => {
                                                const validationErrors = validateForm();
                                                if (validationErrors.first_name) {
                                                    setClientErrors({
                                                        ...clientErrors,
                                                        first_name: validationErrors.first_name,
                                                    });
                                                }
                                            }}
                                            className={`pl-10 appearance-none block w-full px-3 py-2.5 border ${clientErrors.first_name
                                                ? 'border-red-300 dark:border-red-500 bg-red-50 dark:bg-red-900/10'
                                                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
                                                } rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 text-gray-900 dark:text-white`}
                                            placeholder="John"
                                        />
                                    </div>
                                    {clientErrors.first_name && (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                                            <HiOutlineExclamationCircle className="h-4 w-4 mr-1 shrink-0" />
                                            {clientErrors.first_name}
                                        </p>
                                    )}
                                </div>

                                {/* Last Name Field - Optional */}
                                <div>
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Last Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <HiUser className={`h-5 w-5 ${clientErrors.last_name
                                                ? 'text-red-400 dark:text-red-500'
                                                : 'text-gray-400 dark:text-gray-500'
                                                }`} />
                                        </div>
                                        <input
                                            id="last_name"
                                            name="last_name"
                                            type="text"
                                            value={data.last_name}
                                            onChange={(e) => handleInputChange('last_name', e.target.value)}
                                            onBlur={() => {
                                                const validationErrors = validateForm();
                                                if (validationErrors.last_name) {
                                                    setClientErrors({
                                                        ...clientErrors,
                                                        last_name: validationErrors.last_name,
                                                    });
                                                }
                                            }}
                                            className={`pl-10 appearance-none block w-full px-3 py-2.5 border ${clientErrors.last_name
                                                ? 'border-red-300 dark:border-red-500 bg-red-50 dark:bg-red-900/10'
                                                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
                                                } rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 text-gray-900 dark:text-white`}
                                            placeholder="Doe"
                                        />
                                    </div>
                                    {clientErrors.last_name && (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                                            <HiOutlineExclamationCircle className="h-4 w-4 mr-1 shrink-0" />
                                            {clientErrors.last_name}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
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
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? (
                                            <HiEyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition duration-150" />
                                        ) : (
                                            <HiEye className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition duration-150" />
                                        )}
                                    </button>
                                </div>
                                {(errors.password || clientErrors.password) && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                                        <HiOutlineExclamationCircle className="h-4 w-4 mr-1 shrink-0" />
                                        {errors.password || clientErrors.password}
                                    </p>
                                )}
                            </div>

                            {/* Password Strength Indicator */}
                            {data.password && data.password.length > 0 && (
                                <div className="mt-2">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs text-gray-600 dark:text-gray-400">Password strength:</span>
                                        <span className="text-xs font-medium">
                                            {Object.values(passwordStrength).filter(Boolean).length}/5
                                        </span>
                                    </div>
                                    <div className="flex gap-1">
                                        {Object.entries(passwordStrength).map(([key, value]) => {
                                            if (key === 'score') return null;
                                            return (
                                                <div
                                                    key={key}
                                                    className={`h-1 flex-1 rounded-full transition-colors duration-150 ${value ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                                                        }`}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Confirm Password Field */}
                            <div>
                                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Confirm Password <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <HiLockClosed className={`h-5 w-5 ${errors.password_confirmation || clientErrors.password_confirmation
                                            ? 'text-red-400 dark:text-red-500'
                                            : 'text-gray-400 dark:text-gray-500'
                                            }`} />
                                    </div>
                                    <input
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        required
                                        value={data.password_confirmation}
                                        onChange={(e) => handleInputChange('password_confirmation', e.target.value)}
                                        onBlur={() => {
                                            const validationErrors = validateForm();
                                            if (validationErrors.password_confirmation) {
                                                setClientErrors({
                                                    ...clientErrors,
                                                    password_confirmation: validationErrors.password_confirmation,
                                                });
                                            }
                                        }}
                                        className={`pl-10 pr-10 appearance-none block w-full px-3 py-2.5 border ${errors.password_confirmation || clientErrors.password_confirmation
                                            ? 'border-red-300 dark:border-red-500 bg-red-50 dark:bg-red-900/10'
                                            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
                                            } rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 text-gray-900 dark:text-white`}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleConfirmPasswordVisibility}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showConfirmPassword ? (
                                            <HiEyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition duration-150" />
                                        ) : (
                                            <HiEye className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition duration-150" />
                                        )}
                                    </button>
                                </div>
                                {(errors.password_confirmation || clientErrors.password_confirmation) && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                                        <HiOutlineExclamationCircle className="h-4 w-4 mr-1 shrink-0" />
                                        {errors.password_confirmation || clientErrors.password_confirmation}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 transform hover:scale-[1.02] active:scale-[0.98] dark:focus:ring-offset-gray-800"
                                >
                                    {processing ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Creating account...
                                        </>
                                    ) : (
                                        <>
                                            <FiUserPlus className="mr-2 h-5 w-5" />
                                            Create account
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Login Link */}
                            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                                Already have an account?{' '}
                                <Link href="/login" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium transition duration-150">
                                    Log in
                                </Link>
                            </div>

                            {/* Status Message */}
                            {status && (
                                <div className="flex items-center justify-center text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                                    <HiOutlineCheckCircle className="h-5 w-5 mr-2" />
                                    {status}
                                </div>
                            )}
                        </form>

                        {/* Password Requirements - Helpful for users */}
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                                        Password requirements
                                    </span>
                                </div>
                            </div>
                            <ul className="mt-4 space-y-2">
                                <li className={`text-xs flex items-center ${passwordStrength.hasMinLength
                                    ? 'text-green-600 dark:text-green-400'
                                    : 'text-gray-500 dark:text-gray-400'
                                    }`}>
                                    <span className={`mr-2 ${passwordStrength.hasMinLength ? 'text-green-500' : 'text-gray-400'}`}>
                                        {passwordStrength.hasMinLength ? '✓' : '○'}
                                    </span>
                                    Minimum 8 characters long
                                </li>
                                <li className={`text-xs flex items-center ${passwordStrength.hasUpperCase
                                    ? 'text-green-600 dark:text-green-400'
                                    : 'text-gray-500 dark:text-gray-400'
                                    }`}>
                                    <span className={`mr-2 ${passwordStrength.hasUpperCase ? 'text-green-500' : 'text-gray-400'}`}>
                                        {passwordStrength.hasUpperCase ? '✓' : '○'}
                                    </span>
                                    At least one uppercase letter
                                </li>
                                <li className={`text-xs flex items-center ${passwordStrength.hasLowerCase
                                    ? 'text-green-600 dark:text-green-400'
                                    : 'text-gray-500 dark:text-gray-400'
                                    }`}>
                                    <span className={`mr-2 ${passwordStrength.hasLowerCase ? 'text-green-500' : 'text-gray-400'}`}>
                                        {passwordStrength.hasLowerCase ? '✓' : '○'}
                                    </span>
                                    At least one lowercase letter
                                </li>
                                <li className={`text-xs flex items-center ${passwordStrength.hasNumber
                                    ? 'text-green-600 dark:text-green-400'
                                    : 'text-gray-500 dark:text-gray-400'
                                    }`}>
                                    <span className={`mr-2 ${passwordStrength.hasNumber ? 'text-green-500' : 'text-gray-400'}`}>
                                        {passwordStrength.hasNumber ? '✓' : '○'}
                                    </span>
                                    At least one number
                                </li>
                                <li className={`text-xs flex items-center ${passwordStrength.hasSpecialChar
                                    ? 'text-green-600 dark:text-green-400'
                                    : 'text-gray-500 dark:text-gray-400'
                                    }`}>
                                    <span className={`mr-2 ${passwordStrength.hasSpecialChar ? 'text-green-500' : 'text-gray-400'}`}>
                                        {passwordStrength.hasSpecialChar ? '✓' : '○'}
                                    </span>
                                    At least one special character
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
