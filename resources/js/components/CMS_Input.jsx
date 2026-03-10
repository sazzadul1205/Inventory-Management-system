/**
 * CMS_Input Component - A highly customizable input component with dark mode support
 * 
 * This component renders various input types with configurable styling, validation,
 * icons, and interactive features. Supports text, number, email, password, textarea, select, and more.
 * Uses Tailwind CSS for styling with dark mode support via the 'dark:' modifier.
 */

import React, { useMemo, useState, useEffect, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

// Icon library mappings
const iconLibraries = {
  fa: FaIcons,
  hi: HiIcons,
  md: MdIcons,
  ai: AiIcons,
  bi: BiIcons
};

// ============================================================================
// CMS_Input Component
// ============================================================================

/**
 * CMS_Input - Main input component supporting various input types
 */
const CMS_Input = ({
  // Basic props
  type = 'text',
  name,
  id,
  value,
  defaultValue,
  placeholder,
  label,
  hint,

  // Configuration
  config = {},

  // Events
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,

  // Validation
  required = false,
  disabled = false,
  readOnly = false,
  error,
  success,
  warning,

  // min/max for numbers
  min,
  max,
  step,

  // maxLength for text
  maxLength,
  minLength,

  // Pattern for regex validation
  pattern,

  // Autocomplete
  autoComplete,
  autoFocus = false,

  // Icons
  leftIcon,
  rightIcon,
  leftIconLibrary = 'hi',
  rightIconLibrary = 'hi',

  // Clear button
  clearable = false,

  // Password visibility toggle
  showPasswordToggle = false,

  // Character counter
  showCharCount = false,

  // Loading state
  loading = false,

  // Ref
  inputRef,

  // Children (for custom input types)
  children
}) => {
  const defaultConfig = {
    // Variants
    variant: 'outlined',             // 'outlined', 'filled', 'underlined', 'ghost'
    size: 'md',                       // 'sm', 'md', 'lg'

    // Colors
    colorScheme: 'blue',              // 'blue', 'gray', 'red', 'green', 'purple'

    // Borders
    rounded: 'rounded-md',
    borderWidth: 'border',

    // Background
    bgColor: 'bg-white',
    darkBgColor: 'dark:bg-gray-800',

    // Text
    textColor: 'text-gray-900',
    darkTextColor: 'dark:text-white',
    textSize: 'text-base',

    // Placeholder
    placeholderColor: 'placeholder-gray-400',
    darkPlaceholderColor: 'dark:placeholder-gray-500',

    // Label
    labelColor: 'text-gray-700',
    darkLabelColor: 'dark:text-gray-300',
    labelSize: 'text-sm',
    labelWeight: 'font-medium',

    // Hint
    hintColor: 'text-gray-500',
    darkHintColor: 'dark:text-gray-400',
    hintSize: 'text-xs',

    // Error
    errorColor: 'text-red-500',
    errorSize: 'text-xs',
    errorBgColor: 'bg-red-50',
    darkErrorBgColor: 'dark:bg-red-900/20',
    errorBorderColor: 'border-red-500',

    // Success
    successColor: 'text-green-500',
    successBgColor: 'bg-green-50',
    darkSuccessBgColor: 'dark:bg-green-900/20',
    successBorderColor: 'border-green-500',

    // Warning
    warningColor: 'text-yellow-500',
    warningBgColor: 'bg-yellow-50',
    darkWarningBgColor: 'dark:bg-yellow-900/20',
    warningBorderColor: 'border-yellow-500',

    // Icons
    iconColor: 'text-gray-400',
    darkIconColor: 'dark:text-gray-500',
    iconSize: 'w-5 h-5',

    // Spacing
    padding: 'px-3 py-2',
    margin: 'm-0',
    gap: 'gap-2',

    // Focus styles
    focusRing: 'focus:ring-2',
    focusRingColor: 'focus:ring-blue-500',
    focusBorderColor: 'focus:border-blue-500',

    // Disabled styles
    disabledBgColor: 'bg-gray-100',
    darkDisabledBgColor: 'dark:bg-gray-700',
    disabledTextColor: 'text-gray-500',
    darkDisabledTextColor: 'dark:text-gray-400',

    // Width
    width: 'w-full',

    // Transition
    transition: 'transition-all duration-200',

    // Additional
    className: '',
    inputClassName: '',
    labelClassName: '',
    hintClassName: '',
    errorClassName: '',
    style: {}
  };

  const mergedConfig = useMemo(() => ({
    ...defaultConfig,
    ...config
  }), [config]);

  const [inputValue, setInputValue] = useState(value || defaultValue || '');
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const localRef = useRef(null);
  const ref = inputRef || localRef;

  // Sync with external value
  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  // Get icon component
  const getIconComponent = (icon, library) => {
    if (!icon) return null;
    const lib = iconLibraries[library];
    if (!lib) return null;
    return lib[icon];
  };

  // Determine input type (handle password visibility)
  const inputType = type === 'password' && showPassword ? 'text' : type;

  // Get status colors
  const getStatusStyles = () => {
    if (error) {
      return {
        borderColor: mergedConfig.errorBorderColor,
        bgColor: mergedConfig.errorBgColor,
        darkBgColor: mergedConfig.darkErrorBgColor,
        ringColor: 'focus:ring-red-500',
        textColor: mergedConfig.errorColor
      };
    }
    if (success) {
      return {
        borderColor: mergedConfig.successBorderColor,
        bgColor: mergedConfig.successBgColor,
        darkBgColor: mergedConfig.darkSuccessBgColor,
        ringColor: 'focus:ring-green-500',
        textColor: mergedConfig.successColor
      };
    }
    if (warning) {
      return {
        borderColor: mergedConfig.warningBorderColor,
        bgColor: mergedConfig.warningBgColor,
        darkBgColor: mergedConfig.darkWarningBgColor,
        ringColor: 'focus:ring-yellow-500',
        textColor: mergedConfig.warningColor
      };
    }
    return {
      borderColor: 'border-gray-300 dark:border-gray-600',
      bgColor: mergedConfig.bgColor,
      darkBgColor: mergedConfig.darkBgColor,
      ringColor: mergedConfig.focusRingColor,
      textColor: mergedConfig.textColor
    };
  };

  const statusStyles = getStatusStyles();

  // Build input classes
  const inputClasses = useMemo(() => {
    const classes = [
      // Base styles
      'block',
      mergedConfig.width,
      mergedConfig.padding,
      mergedConfig.textSize,
      mergedConfig.textColor,
      mergedConfig.darkTextColor,
      mergedConfig.placeholderColor,
      mergedConfig.darkPlaceholderColor,
      mergedConfig.rounded,
      mergedConfig.borderWidth,
      mergedConfig.transition,

      // Background
      statusStyles.bgColor,
      statusStyles.darkBgColor,

      // Border
      statusStyles.borderColor,

      // Focus styles
      mergedConfig.focusRing,
      statusStyles.ringColor,
      mergedConfig.focusBorderColor,
      'focus:outline-none',

      // Disabled styles
      disabled ? mergedConfig.disabledBgColor : '',
      disabled ? mergedConfig.darkDisabledBgColor : '',
      disabled ? mergedConfig.disabledTextColor : '',
      disabled ? mergedConfig.darkDisabledTextColor : '',
      disabled ? 'cursor-not-allowed' : '',

      // Read only
      readOnly ? 'cursor-default' : '',

      // Left icon padding
      leftIcon ? 'pl-10' : '',

      // Right icon padding (considering clear and password toggle)
      (rightIcon || clearable || (type === 'password' && showPasswordToggle)) ? 'pr-10' : '',

      mergedConfig.inputClassName
    ];

    // Variant specific styles
    if (mergedConfig.variant === 'filled') {
      classes.push('bg-gray-100 dark:bg-gray-700 border-transparent');
    } else if (mergedConfig.variant === 'underlined') {
      classes.push('border-t-0 border-l-0 border-r-0 rounded-none px-0');
    } else if (mergedConfig.variant === 'ghost') {
      classes.push('border-transparent bg-transparent');
    }

    return classes.filter(Boolean).join(' ');
  }, [mergedConfig, statusStyles, leftIcon, rightIcon, clearable, type, showPasswordToggle, disabled, readOnly]);

  // Handle change
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  // Handle clear
  const handleClear = () => {
    setInputValue('');
    if (onChange) {
      onChange({ target: { value: '', name } });
    }
    ref.current?.focus();
  };

  // Render left icon
  const renderLeftIcon = () => {
    if (!leftIcon) return null;

    const IconComponent = getIconComponent(leftIcon, leftIconLibrary);
    if (!IconComponent) return null;

    return (
      <div className={`
        absolute left-0 inset-y-0
        flex items-center
        ${mergedConfig.padding.split(' ')[0]}
        pointer-events-none
      `}>
        <IconComponent className={`
          ${mergedConfig.iconSize}
          ${mergedConfig.iconColor}
          ${mergedConfig.darkIconColor}
        `} />
      </div>
    );
  };

  // Render right icon
  const renderRightIcon = () => {
    if (!rightIcon) return null;

    const IconComponent = getIconComponent(rightIcon, rightIconLibrary);
    if (!IconComponent) return null;

    return (
      <div className={`
        absolute right-0 inset-y-0
        flex items-center
        ${mergedConfig.padding.split(' ')[0]}
        pointer-events-none
      `}>
        <IconComponent className={`
          ${mergedConfig.iconSize}
          ${mergedConfig.iconColor}
          ${mergedConfig.darkIconColor}
        `} />
      </div>
    );
  };

  // Render clear button
  const renderClearButton = () => {
    if (!clearable || !inputValue || disabled || readOnly) return null;

    const ClearIcon = getIconComponent('HiX', 'hi');

    return (
      <button
        type="button"
        onClick={handleClear}
        className={`
          absolute right-0 inset-y-0
          flex items-center
          ${mergedConfig.padding.split(' ')[0]}
          ${mergedConfig.iconColor}
          hover:${mergedConfig.textColor}
          focus:outline-none
        `}
      >
        {ClearIcon && <ClearIcon className={mergedConfig.iconSize} />}
      </button>
    );
  };

  // Render password toggle
  const renderPasswordToggle = () => {
    if (type !== 'password' || !showPasswordToggle) return null;

    const EyeIcon = getIconComponent(showPassword ? 'HiEyeOff' : 'HiEye', 'hi');

    return (
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className={`
          absolute right-0 inset-y-0
          flex items-center
          ${mergedConfig.padding.split(' ')[0]}
          ${mergedConfig.iconColor}
          hover:${mergedConfig.textColor}
          focus:outline-none
        `}
      >
        {EyeIcon && <EyeIcon className={mergedConfig.iconSize} />}
      </button>
    );
  };

  // Render character counter
  const renderCharCount = () => {
    if (!showCharCount || type === 'password') return null;

    const currentLength = inputValue?.length || 0;
    const max = maxLength || 0;

    return (
      <div className={`
        absolute right-0 bottom-0
        ${mergedConfig.hintSize}
        ${mergedConfig.hintColor}
        ${mergedConfig.darkHintColor}
        ${mergedConfig.padding.split(' ')[0]}
      `}>
        {max ? `${currentLength}/${max}` : currentLength}
      </div>
    );
  };

  // Render label
  const renderLabel = () => {
    if (!label) return null;

    return (
      <label
        htmlFor={id || name}
        className={`
          block mb-1
          ${mergedConfig.labelSize}
          ${mergedConfig.labelWeight}
          ${mergedConfig.labelColor}
          ${mergedConfig.darkLabelColor}
          ${disabled ? 'opacity-50' : ''}
          ${mergedConfig.labelClassName}
        `}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    );
  };

  // Render hint or error
  const renderHint = () => {
    if (error) {
      return (
        <div className={`
          mt-1
          ${mergedConfig.errorSize}
          ${mergedConfig.errorColor}
          ${mergedConfig.errorClassName}
        `}>
          {error}
        </div>
      );
    }

    if (success && typeof success === 'string') {
      return (
        <div className={`
          mt-1
          ${mergedConfig.errorSize}
          ${mergedConfig.successColor}
          ${mergedConfig.errorClassName}
        `}>
          {success}
        </div>
      );
    }

    if (warning && typeof warning === 'string') {
      return (
        <div className={`
          mt-1
          ${mergedConfig.errorSize}
          ${mergedConfig.warningColor}
          ${mergedConfig.errorClassName}
        `}>
          {warning}
        </div>
      );
    }

    if (hint) {
      return (
        <div className={`
          mt-1
          ${mergedConfig.hintSize}
          ${mergedConfig.hintColor}
          ${mergedConfig.darkHintColor}
          ${mergedConfig.hintClassName}
        `}>
          {hint}
        </div>
      );
    }

    return null;
  };

  // Render loading state
  const renderLoading = () => {
    if (!loading) return null;

    return (
      <div className={`
        absolute right-0 inset-y-0
        flex items-center
        ${mergedConfig.padding.split(' ')[0]}
      `}>
        <svg className={`animate-spin ${mergedConfig.iconSize} ${mergedConfig.iconColor}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  };

  // Render different input types
  const renderInput = () => {
    const commonProps = {
      ref,
      id: id || name,
      name,
      value: inputValue,
      placeholder,
      disabled,
      readOnly,
      required,
      autoComplete,
      autoFocus,
      onBlur: (e) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
      },
      onFocus: (e) => {
        setIsFocused(true);
        if (onFocus) onFocus(e);
      },
      onKeyDown,
      onKeyUp,
      onChange: handleChange,
      className: inputClasses,
      'aria-invalid': !!error,
      'aria-describedby': error ? `${name}-error` : hint ? `${name}-hint` : undefined
    };

    switch (type) {
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={config.rows || 3}
            maxLength={maxLength}
            minLength={minLength}
          />
        );

      case 'select':
        return (
          <select
            {...commonProps}
            className={`${inputClasses} appearance-none`}
          >
            {children}
          </select>
        );

      case 'checkbox':
      case 'radio':
        return (
          <input
            {...commonProps}
            type={type}
            checked={inputValue}
            className={`
              ${type === 'checkbox' ? 'rounded' : 'rounded-full'}
              ${mergedConfig.colorScheme === 'blue' ? 'text-blue-600' : ''}
              focus:ring-${mergedConfig.colorScheme}-500
              ${mergedConfig.inputClassName}
            `}
          />
        );

      case 'file':
        return (
          <input
            {...commonProps}
            type="file"
            className={`
              ${inputClasses}
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-${mergedConfig.colorScheme}-50
              file:text-${mergedConfig.colorScheme}-700
              hover:file:bg-${mergedConfig.colorScheme}-100
              dark:file:bg-gray-700
              dark:file:text-gray-300
            `}
          />
        );

      case 'range':
        return (
          <input
            {...commonProps}
            type="range"
            min={min}
            max={max}
            step={step}
            className={`
              w-full h-2
              bg-gray-200 rounded-lg appearance-none
              cursor-pointer
              dark:bg-gray-700
              ${mergedConfig.inputClassName}
            `}
          />
        );

      default:
        return (
          <input
            {...commonProps}
            type={inputType}
            min={min}
            max={max}
            step={step}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
          />
        );
    }
  };

  // For checkbox/radio, return different layout
  if (type === 'checkbox' || type === 'radio') {
    return (
      <div className={mergedConfig.margin}>
        <div className="flex items-center gap-2">
          {renderInput()}
          {label && (
            <label
              htmlFor={id || name}
              className={`
                ${mergedConfig.labelSize}
                ${mergedConfig.labelWeight}
                ${mergedConfig.labelColor}
                ${mergedConfig.darkLabelColor}
                ${disabled ? 'opacity-50' : ''}
              `}
            >
              {label}
            </label>
          )}
        </div>
        {renderHint()}
      </div>
    );
  }

  // Regular input layout
  return (
    <div className={mergedConfig.margin}>
      {renderLabel()}

      <div className="relative">
        {/* Left icon */}
        {renderLeftIcon()}

        {/* Input */}
        {renderInput()}

        {/* Right side elements */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center">
          {renderLoading()}
          {!loading && renderClearButton()}
          {!loading && renderPasswordToggle()}
          {!loading && !clearable && type !== 'password' && renderRightIcon()}
        </div>

        {/* Character counter */}
        {renderCharCount()}
      </div>

      {/* Hint/Error message */}
      {renderHint()}
    </div>
  );
};

// ============================================================================
// CMS_InputGroup Component
// ============================================================================

/**
 * CMS_InputGroup - Group multiple inputs together
 */
const CMS_InputGroup = ({
  children,
  config = {}
}) => {
  const defaultConfig = {
    layout: 'vertical',              // 'vertical', 'horizontal'
    gap: 'gap-4',
    margin: 'm-0',
    padding: 'p-0',
    bgColor: null,
    darkBgColor: null,
    border: null,
    borderColor: null,
    darkBorderColor: null,
    rounded: null,
    className: ''
  };

  const mergedConfig = useMemo(() => ({
    ...defaultConfig,
    ...config
  }), [config]);

  return (
    <div className={`
      ${mergedConfig.layout === 'vertical' ? 'flex flex-col' : 'flex flex-row flex-wrap items-end'}
      ${mergedConfig.gap}
      ${mergedConfig.margin}
      ${mergedConfig.padding}
      ${mergedConfig.bgColor}
      ${mergedConfig.darkBgColor}
      ${mergedConfig.border}
      ${mergedConfig.borderColor}
      ${mergedConfig.darkBorderColor}
      ${mergedConfig.rounded}
      ${mergedConfig.className}
    `}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return (
            <div className="flex-1">
              {child}
            </div>
          );
        }
        return child;
      })}
    </div>
  );
};

// ============================================================================
// CMS_InputAddon Component
// ============================================================================

/**
 * CMS_InputAddon - Addon for input (prefix/suffix)
 */
const CMS_InputAddon = ({
  children,
  position = 'left',                 // 'left', 'right'
  config = {}
}) => {
  const defaultConfig = {
    variant: 'default',              // 'default', 'outlined', 'filled'
    size: 'md',                       // 'sm', 'md', 'lg'
    bgColor: 'bg-gray-100',
    darkBgColor: 'dark:bg-gray-700',
    textColor: 'text-gray-700',
    darkTextColor: 'dark:text-gray-300',
    border: 'border',
    borderColor: 'border-gray-300',
    darkBorderColor: 'dark:border-gray-600',
    rounded: 'rounded-md',
    padding: 'px-3 py-2',
    fontSize: 'text-base',
    className: ''
  };

  const mergedConfig = useMemo(() => ({
    ...defaultConfig,
    ...config
  }), [config]);

  const positionClasses = {
    left: 'rounded-r-none border-r-0',
    right: 'rounded-l-none border-l-0'
  };

  return (
    <div className={`
      flex items-center
      ${mergedConfig.bgColor}
      ${mergedConfig.darkBgColor}
      ${mergedConfig.textColor}
      ${mergedConfig.darkTextColor}
      ${mergedConfig.border}
      ${mergedConfig.borderColor}
      ${mergedConfig.darkBorderColor}
      ${mergedConfig.rounded}
      ${positionClasses[position]}
      ${mergedConfig.padding}
      ${mergedConfig.fontSize}
      ${mergedConfig.className}
    `}>
      {children}
    </div>
  );
};

// Export all components
export { CMS_Input, CMS_InputGroup, CMS_InputAddon };
export default CMS_Input;